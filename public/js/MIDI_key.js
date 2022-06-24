"use strict";
//-----------------------------------------------------
let midi;

//MIDIデバイスへのアクセスが成功したときに実行される処理
const success = (midiAccess) => {
    midi = midiAccess;
    console.log("MIDIデバイスの接続に成功しました。");
    //MIDIAccessオブジェクトのInputsを取得してイベントに対して関数を渡す
    setInputs(midiAccess);
};

//MIDIデバイスへのアクセスが失敗したときに実行される処理
const failure = (msg) => {
    console.log(`MIDI FAILED - ${msg}`);
    // アラートで表示
    alert(`MIDIデバイスの接続に失敗しました。このアプリは、PC環境かつGoogleChrome、Edge推奨です。 - ${msg}`);
};

//MIDIAccessオブジェクトのInputsを取得してイベントに対して関数を渡す
const setInputs = (midiAccess) => {
    let inputs = midiAccess.inputs;
    let ConnectedDeviceNames = [];
    //接続されているMIDIデバイスを表示する。
    inputs.forEach((key, port) => {
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
//MIDIデバイスからメッセージが送られる時に実行
const onMidiMessage = (e) => {
    let str = [];
    for (let i = 0; i < e.data.length; i++) {
        str.push(e.data[i]);
    };

    //鍵盤を押した時と、離した時だけ実行される処理
    if (str[0] <= 145) {
        KeyAction(str);
    };
};

//-----------------------------------------------------
let MIDI_note_number_array = [];
let CurrentBassNumber;
let BeforeBassNumber = 0;
let Oscillator;
let audioSource;
//鍵盤を押した時と、離した時だけ実行される処理
const KeyAction = (str) => {
    // キーオン時の設定
    if (str[0] === 144) {
        //配列にMIDIノートナンバーを追加
        MIDI_note_number_array.push(str[1]);
        //ベース音を判定
        //弾いている音はonoffで1にする
        for (let i = 0; i < 12; i++) {
            if (i === mod(str[1], 12)) {
                onoff[mod(i - BeforeBassNumber, 12)] = 1;
            };
        };
        //音を鳴らす
        Play(str[1]);
    };

    // キーオフ時の設定
    if (str[0] === 128) {
        //配列からMIDIノートナンバーを削除
        MIDI_note_number_array.splice(MIDI_note_number_array.indexOf(str[1]), 1);
        //ほかに同じピッチクラスの音を弾いていないかチェックするための新しい配列を作成
        let MIDI_note_number_array2 = MIDI_note_number_array.map(function (num) {
            return mod(num, 12)
        });
        //同じピッチクラスの音が無い場合
        if (MIDI_note_number_array2.indexOf(mod(str[1], 12)) === -1) {
            //弾いていないピッチクラスの音はonoffで0にする
            for (let i = 0; i < 12; i++) {
                if (i === mod(str[1], 12)) {
                    onoff[mod(i - BeforeBassNumber, 12)] = 0;
                };
            };
        };
    };

    //ベース音を判定
    if (MIDI_note_number_array.length >= 1) {
        //2つの数を比較して小さい方を返す関数でベース音を判定
        CurrentBassNumber = MIDI_note_number_array.reduce(aryMin);
        //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）
        CurrentBassNumber = mod(CurrentBassNumber, 12);
    } else {
        CurrentBassNumber = 0;
        onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    //主音/軸音を選択してセットする
    document.getElementById("rootNumber").selectedIndex = CurrentBassNumber;

    //配列onoffをベース音に基づいて並び替える
    if (BeforeBassNumber !== CurrentBassNumber) {
        //どの順番で鍵盤を押しても正しく判定されるようにする。
        for (let i = 0; i < mod(CurrentBassNumber - BeforeBassNumber, 12); i++) {
            let a = onoff.shift();
            onoff.push(a);
        };
        //ベース音が変わった時に対応する。
        BeforeBassNumber = CurrentBassNumber;
    };

    //選択されている音を書き込む
    let counter = 0;
    for (let i = 0; i < 12; i++) {
        if (onoff[i] === 1) {
            document.getElementById(`chord_${i}`).classList.add("NoteOn");
        } else {
            document.getElementById(`chord_${i}`).classList.remove("NoteOn");
            counter++;
        };
    };

    //入力された音を書き込む（ベース音が変わったときも対応する）
    ChangeEIJG()
    //スケール名を判定する。
    ModalTextAndNoteCreate(onoff, CurrentBassNumber);

    //コードネームを判定する。
    let [BassNumber, result] = ChordCandidateInfo(onoff, CurrentBassNumber);

    //指定された鍵盤の色を変える関数
    SelectedKeyboard(MIDI_note_number_array, BassNumber);
    if (counter === 12) {
        //もし何の音も選択されていない（配列onoffが全て0）の場合にスケール名をディグリー表記にする
        ModalCandidateDegree();
    };
    if (result !== true) {
        degree_position_drow(0);
    };
};

// MIDIノートナンバーを渡すと黒鍵かどうか判定する関数
const DetermineBlackKey = (n) => {
    n = mod(n, 12);
    if (n === 1 || n === 3 || n === 6 || n === 8 || n === 10) {
        return true;
    };
    return false;
};
// 鍵盤を描画する関数
const WriteKeyboard = () => {
    //配列の数だけHTML要素(div)を書き込む。
    for (let i = 108; i > 20; i--) {
        if (DetermineBlackKey(i)) {
            document.getElementById(`Keyboard`).insertAdjacentHTML('afterbegin',
                `<td class="pianokey BlackKey" id="MIDI_note_number-${i}">${i}</td>`);
        } else {
            document.getElementById(`Keyboard`).insertAdjacentHTML('afterbegin',
                `<td class="pianokey WhiteKey" id="MIDI_note_number-${i}">${i}</td>`);
        };
    };
};

//指板の要素を描画する関数
const WriteFingerboard = () => {

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
                    .insertAdjacentHTML('afterbegin', `<th class="box_border DegreeBlack" id="FretNumber-${NumberOfStrings - i}-${FletCount - j}-${FletCount + (StringsMIDI[NumberOfStrings - i - 1]) - j}">${EIJG[key_signature_names][mod((FletCount + (StringsMIDI[NumberOfStrings - i - 1]) - j), 12)]}</th>`);
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
                    .insertAdjacentHTML('afterbegin', `<th class="box_border DegreeBlack" id="FretNumber-${NumberOfStrings - i}-${FletCount - j}-${StringsMIDI[NumberOfStrings - i - 1] + j}">${EIJG[key_signature_names][mod(((StringsMIDI[NumberOfStrings - i - 1]) + j), 12)]}</th>`);
                //全ての指板ポジションを表すデータを配列に格納
                FingerboardPosition.push(`FretNumber-${NumberOfStrings - i}-${FletCount - j}-${StringsMIDI[NumberOfStrings - i - 1] + j}`);
            };
        };
    };
    //上の方のフレットナンバーのtr（行）要素をtableに書き込む
    WriteFletNumber_tr('Upper');
};

// 「使用を開始する」ボタン用
const initButton = () => {
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
const ChangeFingerboardAndEIJG = () => {
    ChangeEIJG();
    WriteFingerboard();
};

// 指定されたポジションの色を変える関数
const SelectedKeyboard = (MIDI_note_number_array, Root) => {
    //一旦全ての鍵盤の着色をリセットする。
    for (let i = 108; i > 20; i--) {
        for (let j = 0; j < 12; j++) {
            document.getElementById(`MIDI_note_number-${i}`).classList.remove(`Selected_keyboard${j}`);
        };
    };
    //度数に基づいて着色する。
    for (let i = 0; i < MIDI_note_number_array.length; i++) {
        let j = mod(MIDI_note_number_array[i] - Root, 12);
        document.getElementById(`MIDI_note_number-${MIDI_note_number_array[i]}`).classList.toggle(`Selected_keyboard${j}`);
    };

    //一旦全ての指板の着色をリセットする。
    WriteFingerboard();
    //度数に基づいて着色する。
    for (let i = 0; i < MIDI_note_number_array.length; i++) {
        //度数表記
        let j = mod(MIDI_note_number_array[i] - Root, 12);
        //全ての指板ポジションに対してマッチするかチェックする
        for (let k = 0; k < FingerboardPosition.length; k++) {
            let F = FingerboardPosition[k].split('-');
            if (Number(F[3]) === MIDI_note_number_array[i]) {
                document.getElementById(`${FingerboardPosition[k]}`).classList.toggle(`Degree${j}`);
            };
        };
    };
};

//-----------------------------------------------------
//変数contextを定義する
let context;
//AudioContextを作成する関数
const init = () => {
    try {
        //webkitプレフィックスをつける。（WebKit使用のブラウザに対応するため）
        window.AudioContext
            = window.AudioContext || window.webkitAudioContext;
        //AudioContextを生成する
        context = new AudioContext();
        console.log('new AudioContext');
    } catch (e) {
        //try内の処理がエラーの場合、それをユーザーに伝える。
        alert('このブラウザではWeb Audio APIはサポートされていません。（音が出せません。）Web Audio API is not supported by this browser. (Cannot play sound.)');
    };
    return context;
};

// MIDIノートナンバーを周波数に変換する関数
const ConvertMIDItoHZ = (MIDI_note_number) => {
    return 2 ** ((MIDI_note_number - 69) / 12) * 440;
};

const Play = (MIDI_note_number) => {
    let input_volume = Number(document.getElementById("input_volume").value);
    // // ヴォリュームが0の場合はここでreturn
    if (input_volume === 0) {
        return;
    };
    init();
    const Oscillator = context.createOscillator();
    //矩形波にする
    Oscillator.type = (typeof Oscillator.type === 'string') ? 'square' : 1;
    // MIDIノートナンバーを周波数に変換する
    let frequency = ConvertMIDItoHZ(MIDI_note_number);
    Oscillator.frequency.value = frequency;
    //ゲインノードを作成
    const gain = context.createGain();
    //ヴォリュームを決定する
    gain.gain.value = input_volume * 0.1;
    //ノードを繋げる
    Oscillator.connect(gain).connect(context.destination);
    //音を鳴らす
    Oscillator.start(0.0001);
    Oscillator.stop(0.25);
};