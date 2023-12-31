"use strict";
//-----------------------------------------------------
let midi;

//MIDIデバイスへのアクセスが成功したときに実行される処理
function success(midiAccess) {
    midi = midiAccess;
    console.log("MIDIデバイスの接続に成功しました。");
    //MIDIAccessオブジェクトのInputsを取得してイベントに対して関数を渡す
    setInputs(midiAccess);
};

//MIDIデバイスへのアクセスが失敗したときに実行される処理
function failure(msg) {
    console.log(`MIDI FAILED - ${msg}`);
    // アラートで表示
    alert(`MIDIデバイスの接続に失敗しました。このアプリは、PC環境かつGoogleChrome、Edge推奨です。 - ${msg}`);
};

//MIDIAccessオブジェクトのInputsを取得してイベントに対して関数を渡す
function setInputs(midiAccess) {
    let inputs = midiAccess.inputs;
    let ConnectedDeviceNames = [];
    //接続されているMIDIデバイスを表示する。
    inputs.forEach(function (key, port) {
        //コンソールに出力
        console.log("[" + key.state + "] manufacturer:" + key.manufacturer + " / name:" + key.name + " / port:" + port);
        //HTMLへ出力
        ConnectedDeviceNames.push(`${key.name}`);
        key.onmidimessage = onMidiMessage;
    });
    document.getElementById("ConnectedDeviceName").innerHTML = '';
    document.getElementById("ConnectedDeviceName").innerHTML = `<span style="color:#dc143c">【接続中のMIDIデバイス】</span>${ConnectedDeviceNames}`;
};

//MIDIデバイスへアクセスする
navigator.requestMIDIAccess({ sysex: true }).then(success, failure);

//-----------------------------------------------------
let isPedalDown = false;
// ノートのオンの数を追跡するためのカウンタ
let noteOnCounter = 0;
//MIDIデバイスからメッセージが送られる時に実行される関数
function onMidiMessage(e) {
    let str = [];
    for (let i = 0; i < e.data.length; i++) {
        str.push(e.data[i]);
    };

    //鍵盤を押した時と、離した時だけ実行される処理
    if (str[0] <= 145) {
        KeyAction(str);
    };

    //-----------------------------------------------------
    let data = e.data; // これで、[コマンド/チャンネル、ノート、ベロシティ]のデータが得られる。

    //-----------------------------------------------------
    // サスティン・ペダルの情報は通常、コントロールチェンジメッセージに含まれる（コマンド 176）
    // そしてサスティン・ペダルは通常、コントロール番号64にマップされる
    if (data[0] === 176 && data[1] === 64) {
        DamperPedalControl(data);
    };
    //-----------------------------------------------------
    let command = data[0] >> 4;
    let note = data[1];

    // サスティン・ペダル(コントロールナンバー64)の情報は無視
    if (note === 64) {
        return;
    }
    if (command === 9 && data[2] !== 0) { // note on
        noteOnCounter++;
    } else if (command === 8 || (command === 9 && data[2] === 0)) { // note off
        noteOnCounter--;
        if (noteOnCounter === 0 && isPedalDown === false && CHORD_KEEP === false) {
            allNotesOff();
        }
    }
};

// ノートの状態を追跡するためのオブジェクト
let noteStates = {};
// すべてのノートがオフのときにfalseを、それ以外ではtrueを返す関数
function isAnyNoteOn() {
    for (let note in noteStates) {
        if (noteStates.hasOwnProperty(note) && noteStates[note] === true) {
            return true;
        }
    }
    return false;
};

// すべてのノートがオフになったときに実行される関数
function allNotesOff() {
    //表示を無選択状態にする関数
    makeUnselected();
};

//表示を無選択状態にする関数
function makeUnselected() {
    MIDI_note_number_array = [];
    onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 選択されている音の情報を描画する関数
    DrawingInformation();
    //コード履歴機能
    WritePastChord();
};

let sustainPedalIsOn = true; // 初期状態はOn

document.getElementById('sustainPedalToggleButton').addEventListener('click', function () {
    sustainPedalIsOn = !sustainPedalIsOn; // 状態を反転
    document.getElementById('status').textContent
        = ` ${sustainPedalIsOn ? 'サスティン・ペダル入力〇' : 'サスティン・ペダル入力×'}`; // 状態に応じてテキストを更新
    document.getElementById('sustainPedalToggleButton').classList.toggle('OriginalButtonOn');
    console.log(sustainPedalIsOn)
});

// サスティン・ペダルの情報は通常、コントロールチェンジメッセージに含まれる（コマンド 176）
// そしてサスティン・ペダルは通常、コントロール番号64にマップされる
//サスティン・ペダルの状態をコントロールする関数
function DamperPedalControl(data) {
    if (sustainPedalIsOn === false) {
        return;
    };
    // ペダルが踏まれている場合、data[2]は通常64以上になる。
    // ペダルが離されている場合、data[2]は通常63以下になる。
    isPedalDown = data[2] >= 64;
    //ペダルが離されたときのみ実行する
    if (data[2] <= 63 && noteOnCounter === 0) {
        //表示を無選択状態にする関数
        makeUnselected();
    }
    return isPedalDown;
};

//-----------------------------------------------------
let MIDI_note_number_array = [];
let MIDI_note_number_array2 = [];
let CurrentBassNumber;
let BeforeBassNumber = 0;
let Oscillator;
let audioSource;
let CHORD_KEEP = true;

//鍵盤を押した時と、離した時だけ実行される処理
function KeyAction(str) {
    // キーオン時の設定
    if (str[0] === 144) {
        //配列にMIDIノートナンバーを追加
        if (MIDI_note_number_array.includes(str[1])) {
            //既に含まれている場合は削除する
            if (isPedalDown === false) {
                MIDI_note_number_array = MIDI_note_number_array.filter(function (v) {
                    return v !== str[1];
                });
            };
            //ほかに同じピッチクラスの音を弾いていないかチェックするための新しい配列を作成
            MIDI_note_number_array2 = MIDI_note_number_array.map(function (num) {
                return mod(num, OCTAVE);
            });
            //同じピッチクラスの音が無い場合
            if (MIDI_note_number_array2.indexOf(mod(str[1], OCTAVE)) === -1) {
                //弾いていないピッチクラスの音はonoffで0にする
                for (let i = 0; i < OCTAVE; i++) {
                    if (i === mod(str[1], OCTAVE)) {
                        onoff[mod(i - BeforeBassNumber, OCTAVE)] = 0;
                    };
                };
            };
        } else {
            MIDI_note_number_array.push(str[1]);
            //ベース音を判定
            //弾いている音はonoffで1にする
            for (let i = 0; i < OCTAVE; i++) {
                if (i === mod(str[1], OCTAVE)) {
                    onoff[mod(i - BeforeBassNumber, OCTAVE)] = 1;
                };
            };
        };
        //音を鳴らす
        Play(str[1]);
    };

    // キーオフ時の設定(noteOn velocity=0 を送ることで noteOff の代用をしている機材を想定)
    if (str[0] === 128 && CHORD_KEEP === false && isPedalDown === false || str[2] === 0 && CHORD_KEEP === false && isPedalDown === false) {
        //配列からMIDIノートナンバーを削除
        MIDI_note_number_array.splice(MIDI_note_number_array.indexOf(str[1]), 1);
        //ほかに同じピッチクラスの音を弾いていないかチェックするための新しい配列を作成
        MIDI_note_number_array2 = MIDI_note_number_array.map(function (num) {
            return mod(num, OCTAVE);
        });
        //同じピッチクラスの音が無い場合
        if (MIDI_note_number_array2.indexOf(mod(str[1], OCTAVE)) === -1) {
            //弾いていないピッチクラスの音はonoffで0にする
            for (let i = 0; i < OCTAVE; i++) {
                if (i === mod(str[1], OCTAVE)) {
                    onoff[mod(i - BeforeBassNumber, OCTAVE)] = 0;
                };
            };
        };
        //コード履歴機能
        WritePastChord();
    };

    //ベース音を判定
    if (MIDI_note_number_array.length >= 1) {
        //2つの数を比較して小さい方を返す関数でベース音を判定
        CurrentBassNumber = MIDI_note_number_array.reduce(aryMin);
        //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）
        CurrentBassNumber = mod(CurrentBassNumber, OCTAVE);
    } else {
        CurrentBassNumber = 0;
        onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    //主音/軸音を選択してセットする
    document.getElementById("rootNumber").selectedIndex = CurrentBassNumber;

    //配列onoffをベース音に基づいて並び替える
    if (BeforeBassNumber !== CurrentBassNumber) {
        //どの順番で鍵盤を押しても正しく判定されるようにする。
        for (let i = 0; i < mod(CurrentBassNumber - BeforeBassNumber, OCTAVE); i++) {
            let a = onoff.shift();
            onoff.push(a);
        };
        //ベース音が変わった時に対応する。
        BeforeBassNumber = CurrentBassNumber;
    };
    // 選択されている音の情報を描画する関数
    DrawingInformation();

};

// 選択されている音の情報を描画する関数
function DrawingInformation() {
    //選択されている音を書き込む
    let counter = 0;
    for (let i = 0; i < OCTAVE; i++) {
        if (onoff[i] === 1) {
            document.getElementById(`chord_${i}`).classList.add("NoteOn");
        } else {
            document.getElementById(`chord_${i}`).classList.remove("NoteOn");
            counter++;
        };
    };

    //入力された音を書き込む（ベース音が変わったときも対応する）
    ChangeEIJG();
    //スケール名を判定する。
    ModalTextAndNoteCreate(onoff, CurrentBassNumber);

    //コードネームを判定する。
    let [BassNumber, result] = ChordCandidateInfo(onoff, CurrentBassNumber);
    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff);

    //指定された鍵盤の色を変える関数
    SelectedPosition(MIDI_note_number_array, BassNumber);
    if (counter === 12) {
        //もし何の音も選択されていない（配列onoffが全て0）の場合にスケール名をディグリー表記にする
        ModalCandidateDegree();
    };
    if (result !== true) {
        degree_position_drow(0);
    };
};

// コード情報をキープするか否か切り替える関数
function ChordKeep() {
    if (CHORD_KEEP === false) {
        CHORD_KEEP = true;
        MIDI_note_number_array = [];
        document.getElementById("ChordKeep").innerHTML = `<i class="fa-solid fa-clock"></i> 入力をキープ中`;
        document.getElementById("ChordKeep").classList.remove('OriginalButtonOn');
        document.getElementById("ChordKeep").classList.add('OriginalButtonOn');
    } else if (CHORD_KEEP === true) {
        CHORD_KEEP = false;
        MIDI_note_number_array = [];
        let dummy_str = [128, 60, 72]
        KeyAction(dummy_str);
        document.getElementById("ChordKeep").classList.remove('OriginalButtonOn');
        document.getElementById("ChordKeep").innerHTML = `<i class="fa-solid fa-stopwatch"></i> 入力をキープする`;
    };
};

//指板の要素を描画する関数
function WriteFingerboard() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""
    //下の方のフレットナンバーのtr（行）要素をtableに書き込む
    WriteFletNumber_tr('Lower');

    //指板の要素を書き込む処理------------------------
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「:」でそれぞれ分割
    let TuningVariation = document.getElementById("TuningVariation").value.split(':');
    //弦のMIDIノートナンバー
    let StringsMIDI = TuningVariation[0].split('-').map(Number);
    //弦の本数
    let NumberOfStrings = StringsMIDI.length;
    // 音名の表記
    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    //弦のナンバーのtr（行）要素とidを書き込む
    for (let i = 0; i < NumberOfStrings; i++) {
        document.getElementById("Fingerboard")
            .insertAdjacentHTML('afterbegin', `<tr class="box_border" id="${NumberOfStrings - i}_string"></tr>`)
    };
    //配列を空にする。
    FingerboardPosition = [];
    // 弦のth（行）要素とidを書き込む
    if (Number(document.getElementById("DominantHand").value) === 0) {
        //右利き
        for (let i = 0; i < NumberOfStrings; i++) {
            for (let j = 0; j < FletCount + 1; j++) {
                document.getElementById(`${NumberOfStrings - i}_string`)
                    .insertAdjacentHTML('afterbegin', `<th class="box_border DegreeBlack" id="FretNumber-${NumberOfStrings - i}-${FletCount - j}-${FletCount + (StringsMIDI[NumberOfStrings - i - 1]) - j}">${EIJG[key_signature_names][mod((FletCount + (StringsMIDI[NumberOfStrings - i - 1]) - j), OCTAVE)]}</th>`);
                //全ての指板ポジションを表すデータを配列に格納
                FingerboardPosition.push(`FretNumber-${NumberOfStrings - i}-${FletCount - j}-${FletCount + (StringsMIDI[NumberOfStrings - i - 1]) - j}`);
            };
            //何弦か表す数字を書き込む
            document.getElementById(`${NumberOfStrings - i}_string`)
                .insertAdjacentHTML('afterbegin', `<th>${NumberOfStrings - i}</th>`);
        };
    } else {
        //左利き
        for (let i = 0; i < NumberOfStrings; i++) {
            //何弦か表す数字を書き込む
            document.getElementById(`${NumberOfStrings - i}_string`)
                .insertAdjacentHTML('afterbegin', `<th>${NumberOfStrings - i}</th>`);
            for (let j = 0; j < FletCount + 1; j++) {
                document.getElementById(`${NumberOfStrings - i}_string`)
                    .insertAdjacentHTML('afterbegin', `<th class="box_border DegreeBlack" id="FretNumber-${NumberOfStrings - i}-${FletCount - j}-${StringsMIDI[NumberOfStrings - i - 1] + j}">${EIJG[key_signature_names][mod(((StringsMIDI[NumberOfStrings - i - 1]) + j), OCTAVE)]}</th>`);
                //全ての指板ポジションを表すデータを配列に格納
                FingerboardPosition.push(`FretNumber-${NumberOfStrings - i}-${FletCount - j}-${StringsMIDI[NumberOfStrings - i - 1] + j}`);
            };
        };
    };
    //上の方のフレットナンバーのtr（行）要素をtableに書き込む
    WriteFletNumber_tr('Upper');
};

// 「使用を開始する」ボタン用
function initButton() {
    //ボタンを消す
    document.getElementById("WriteKeyboard_button").classList.add("display_none");
    document.getElementById("DisappearingContents1").classList.add("display_none");
    document.getElementById("DisappearingContents2").classList.add("display_none");
    document.getElementById("AppearContents").classList.remove("display_none");
    //チューニングのバリエーションを読み込む関数
    CreateTuningVariation();
    // 指板を描画する関数
    WriteFingerboard();
};

//MIDIキーボードでコード/スケール名を逆引き検索用の音名切り替え
function ChangeFingerboardAndEIJG() {
    ChangeEIJG();
    WriteFingerboard();
};

// 指定された鍵盤と指板のポジションの色を変える関数
function SelectedPosition(MIDI_note_number_array, Root) {
    // 指定された鍵盤のポジションの色を変える関数
    SelectedKeyboard(Root, MIDI_note_number_array);

    //一旦全ての指板の着色をリセットする。
    WriteFingerboard();
    //度数に基づいて着色する。
    for (let i = 0; i < MIDI_note_number_array.length; i++) {
        //度数表記
        let j = mod(MIDI_note_number_array[i] - Root, OCTAVE);

        //全ての指板ポジションに対してオクターブ関係にあるポジションをチェックする
        for (let k = 0; k < FingerboardPosition.length; k++) {
            let F = FingerboardPosition[k].split('-');
            if (!MIDI_note_number_array.includes(F[3])
                && mod(Number(F[3]), OCTAVE) === mod(MIDI_note_number_array[i], OCTAVE)
                && document.getElementById(`${FingerboardPosition[k]}`).classList.contains(`Degree${j}`) === false) {
                document.getElementById(`${FingerboardPosition[k]}`).classList.add(`same_pitch_class`);
            };
        };

        //全ての指板ポジションに対してマッチするかチェックする
        for (let k = 0; k < FingerboardPosition.length; k++) {
            let F = FingerboardPosition[k].split('-');
            if (Number(F[3]) === MIDI_note_number_array[i] && document.getElementById(`${FingerboardPosition[k]}`).classList.contains(`same_pitch_class`)) {
                document.getElementById(`${FingerboardPosition[k]}`).classList.remove(`same_pitch_class`);
                document.getElementById(`${FingerboardPosition[k]}`).classList.toggle(`Degree${j}`);
            } else if (Number(F[3]) === MIDI_note_number_array[i]) {
                document.getElementById(`${FingerboardPosition[k]}`).classList.toggle(`Degree${j}`);
            }
        };
    };
};

//-----------------------------------------------------

//音を鳴らすための関数
function Play(MIDI_note_number) {
    let input_volume = Number(document.getElementById("input_volume").value) * 0.1;
    // // ヴォリュームが0の場合はここでreturn
    if (input_volume === 0) {
        return;
    };
    init();
    const Oscillator = context.createOscillator();
    //波形を決定する
    let waveform = document.getElementById("waveform").value;
    Oscillator.type = waveform;
    // MIDIノートナンバーを周波数に変換する
    let frequency = ConvertMIDItoHZ(MIDI_note_number);
    Oscillator.frequency.value = frequency;
    //ゲインノードを作成
    const gain = context.createGain();

    //現在時刻を取得する
    let startTime = context.currentTime;
    //startTimeの音量をセット
    gain.gain.setValueAtTime(input_volume, startTime);
    // フェードアウトまでの時間
    let endTime = startTime + 0.25;
    //フェードアウト後のヴォリュームとフェードアウトまでの時間を渡す
    gain.gain.linearRampToValueAtTime(input_volume, endTime - 0.01);
    gain.gain.linearRampToValueAtTime(0, endTime);
    //ノードを繋げる
    Oscillator.connect(gain).connect(context.destination);
    //音を鳴らす
    Oscillator.start(0.001);
    Oscillator.stop(endTime);
};

//コード履歴を表示するために使うグローバル変数
let TIME_ONE = performance.now();
let TIME_TWO = 0;
let BEFORE_CHORD_NAME;
let CHORD_NAME_ARRAY = [];
let ALL_CHORD_NAME_ARRAY = [];
let MAX_CHORD_LOG = 8;

//コード履歴機能
function WritePastChord() {
    //以前に処理が実行されたときからの差分を求める
    TIME_TWO = performance.now() - TIME_ONE;

    if (BEFORE_CHORD_NAME !== CHORD_NAME) {
        if (TIME_TWO > 150 && CHORD_NAME.match("N.C.")) {
            //次に前回のコードと比較するために現在のコード・ネームを変数に代入しておく。
            BEFORE_CHORD_NAME = CHORD_NAME;
            //前回の処理から150ms経過している場合に処理を実行する（アルペジオに過剰に反応しないようにするため）
        } else if (TIME_TWO > 150) {
            //配列を結合するときにコードネームの「,」が消えないようにする。
            let C = CHORD_NAME.replace(/\,/g, "_");
            // 配列に現在のコード・ネームを追加する。
            CHORD_NAME_ARRAY.unshift(`<span class="highlight">${C}</span>　`);
            ALL_CHORD_NAME_ARRAY.push(`<span class="highlight ReadabilityShell">${C}</span>　`);
            //コード履歴は、最大10コードまでにする。
            if (CHORD_NAME_ARRAY.length > MAX_CHORD_LOG) {
                CHORD_NAME_ARRAY.pop();
            };
            //コード履歴をHTMLに書き込む
            document.getElementById('ChordProg').innerHTML
                = `<button id="" class="OriginalButton" onclick="ChordHistoryReset()"><i class="fa-solid fa-trash"></i> 履歴をリセット</button><span class="InfoPoint">【コード履歴(${CHORD_NAME_ARRAY.length}/${MAX_CHORD_LOG})】</span>
                ${CHORD_NAME_ARRAY.join().replace(/\,/g, "").replace(/_/g, ",")}`;
            document.getElementById('AllChordProg').innerHTML
                = `${ALL_CHORD_NAME_ARRAY.join().replace(/\,/g, "").replace(/_/g, ",")}`;
            //次に前回のコードと比較するために現在のコード・ネームを変数に代入しておく。
            BEFORE_CHORD_NAME = CHORD_NAME;
        };
    };
    //次の処理のために現在の時間を代入しておく。
    TIME_ONE = performance.now();
};

// コード履歴をリセットする関数
function ChordHistoryReset() {
    CHORD_NAME_ARRAY = [];
    ALL_CHORD_NAME_ARRAY = [];
    document.getElementById('ChordProg').innerHTML
        = `<button id="" class="OriginalButton" onclick="ChordHistoryReset()"><i class="fa-solid fa-trash"></i> 履歴をリセット</button><span class="InfoPoint">【コード履歴(${CHORD_NAME_ARRAY.length}/${MAX_CHORD_LOG})】</span>
            <span class="NonChord">（直近に入力したコードが${MAX_CHORD_LOG}個まで表示されます。全てのコード履歴はページ下部で確認できます。）</span>`;
    document.getElementById('AllChordProg').innerHTML
        = `<span class="NonChord">コード履歴は、前回のコードの右側に追加されていきます。</span>`;
};

