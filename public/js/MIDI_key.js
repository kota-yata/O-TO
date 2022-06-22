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
// navigator.requestMIDIAccess({ sysex: true })
//     .then(success, failure);
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
        //ベース音を判定
        //onoffに弾いている音を追加
        for (let i = 0; i < 12; i++) {
            if (i === mod(str[1], 12)) {
                onoff[mod(i - BeforeBassNumber, 12)] = 1;
            };
        };
        //配列にMIDIノートナンバーを追加
        MIDI_note_number_array.push(str[1]);
        console.log(str[1]);
        Play(str[1]);
    };

    // キーオフ時の設定
    if (str[0] === 128) {
        //onoffから離した音を削除
        for (let i = 0; i < 12; i++) {
            if (i === mod(str[1], 12)) {
                onoff[mod(i - BeforeBassNumber, 12)] = 0;
            };
        };
        //配列からMIDIノートナンバーを削除
        MIDI_note_number_array.splice(MIDI_note_number_array.indexOf(str[1]), 1);
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
    console.log(MIDI_note_number_array, BassNumber, result);
    if (counter === 12) {
        //もし何の音も選択されていない（配列onoffが全て0）の場合にスケール名をディグリー表記にする
        ModalCandidateDegree();
    };
    if (result !== true) {
        degree_position_drow(0);
    };
};

// 鍵盤を描画する関数
const WriteKeyboard = () => {
    //配列の数だけHTML要素(div)を書き込む。
    for (let i = 108; i > 20; i--) {
        if (mod(i, 12) === 1 || mod(i, 12) === 3 || mod(i, 12) === 6 || mod(i, 12) === 8 || mod(i, 12) === 10) {
            document.getElementById(`Keyboard`).insertAdjacentHTML('afterbegin',
                `<td class="pianokey BlackKey" id="MIDI_note_number-${i}"></td>`);
        } else {
            document.getElementById(`Keyboard`).insertAdjacentHTML('afterbegin',
                `<td class="pianokey" id="MIDI_note_number-${i}"></td>`);
        };
    };
};


// 指定された鍵盤の色を変える関数
const SelectedKeyboard = (MIDI_note_number_array, Root) => {
    //一旦全ての着色をリセットする。
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
};

//-----------------------------------------------------
//ページがロードされたときに関数initを実行するイベントリスナーを設定する
window.addEventListener('load', init, false);

//変数contextを定義する
let context;

//AudioContextを作成する関数
function init() {
    try {
        //webkitプレフィックスをつける。（WebKit使用のブラウザに対応するため）
        window.AudioContext
            = window.AudioContext || window.webkitAudioContext;
        //AudioContextを生成する
        context = new AudioContext();
        console.log('init!');
    } catch (e) {
        //try内の処理がエラーの場合、それをユーザーに伝える。
        alert('このブラウザではWeb Audio APIはサポートされていません。（音が出せません。）Web Audio API is not supported by this browser. (Cannot play sound.)');
    };
    return context;
};

// MIDIノートナンバーを渡すと周波数を返す関数
const ConvertMIDItoHZ = (MIDI_note_number) => {
    return 2 ** ((MIDI_note_number - 69) / 12) * 440;
};

function Play(MIDI_note_number) {
    init();
    const Oscillator = context.createOscillator();
    //矩形波にする
    Oscillator.type = (typeof Oscillator.type === 'string') ? 'square' : 1;
    // MIDIノートナンバーを渡すと周波数を返す関数
    let frequency = ConvertMIDItoHZ(MIDI_note_number);
    Oscillator.frequency.value = frequency;
    //ゲインノードを作成
    const gain = context.createGain();
    let input_volume = Number(document.getElementById("input_volume").value)
    //ヴォリュームを決定する
    gain.gain.value = input_volume * 0.1;
    //ノードを繋げる
    Oscillator.connect(gain).connect(context.destination);
    //音を鳴らす
    Oscillator.start(0.001);
    Oscillator.stop(0.401);
    return [Oscillator];
};

// function Stop(MIDI_note_number, Oscillator) {
//     //音を消す。
//     Oscillator.stop(0.001);
// };
