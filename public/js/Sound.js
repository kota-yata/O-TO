'use strict';

const enharmonicNotes = [
    "C", "B#", "D&#119083;",
    "C#", "D♭", "B&#119082;",
    "D", "C&#119082;", "E&#119083;",
    "D#", "E♭", "F&#119083;",
    "E", "D&#119082;", "F♭",
    "F", "E#", "G&#119083;",
    "F#", "G♭", "E&#119082;",
    "G", "F&#119082;", "A&#119083;",
    "G#", "A♭",
    "A", "G&#119082;", "B&#119083;",
    "A#", "B♭", "C&#119083;",
    "B", "A&#119082;", "C♭",
];

const enharmonicNotePattern = [
    "B#", "D&#119083;",
    "C#", "D♭", "B&#119082;",
    "C&#119082;", "E&#119083;",
    "D#", "E♭", "F&#119083;",
    "D&#119082;", "F♭",
    "E#", "G&#119083;",
    "F#", "G♭", "E&#119082;",
    "F&#119082;", "A&#119083;",
    "G#", "A♭",
    "G&#119082;", "B&#119083;",
    "A#", "B♭", "C&#119083;",
    "A&#119082;", "C♭",
    "C", "D", "E", "F", "G", "A", "B"
];

function ConvertToNoteNumber(NoteStr) {
    let noteNumber;
    if (NoteStr === enharmonicNotes[0] || NoteStr === enharmonicNotes[1] || NoteStr === enharmonicNotes[2]) {
        noteNumber = 0;
    } else if (NoteStr === enharmonicNotes[3] || NoteStr === enharmonicNotes[4] || NoteStr === enharmonicNotes[5]) {
        noteNumber = 1;
    } else if (NoteStr === enharmonicNotes[6] || NoteStr === enharmonicNotes[7] || NoteStr === enharmonicNotes[8]) {
        noteNumber = 2;
    } else if (NoteStr === enharmonicNotes[9] || NoteStr === enharmonicNotes[10] || NoteStr === enharmonicNotes[11]) {
        noteNumber = 3;
    } else if (NoteStr === enharmonicNotes[12] || NoteStr === enharmonicNotes[13] || NoteStr === enharmonicNotes[14]) {
        noteNumber = 4;
    } else if (NoteStr === enharmonicNotes[15] || NoteStr === enharmonicNotes[16] || NoteStr === enharmonicNotes[17]) {
        noteNumber = 5;
    } else if (NoteStr === enharmonicNotes[18] || NoteStr === enharmonicNotes[19] || NoteStr === enharmonicNotes[20]) {
        noteNumber = 6;
    } else if (NoteStr === enharmonicNotes[21] || NoteStr === enharmonicNotes[22] || NoteStr === enharmonicNotes[23]) {
        noteNumber = 7;
    } else if (NoteStr === enharmonicNotes[24] || NoteStr === enharmonicNotes[25]) {
        noteNumber = 8;
    } else if (NoteStr === enharmonicNotes[26] || NoteStr === enharmonicNotes[27] || NoteStr === enharmonicNotes[28]) {
        noteNumber = 9;
    } else if (NoteStr === enharmonicNotes[29] || NoteStr === enharmonicNotes[30] || NoteStr === enharmonicNotes[31]) {
        noteNumber = 10;
    } else if (NoteStr === enharmonicNotes[32] || NoteStr === enharmonicNotes[33] || NoteStr === enharmonicNotes[34]) {
        noteNumber = 11;
    };
    return noteNumber;
};

//コード進行のテキストをMIDIノートナンバーへ変換する関数
function ChordTextToMIDINoteNumber(chordText) {
    //テキストの「-」を削除する。
    chordText = chordText.replace(/　/g, " ").replace(/ -/g, "")
    //コードの表記ゆれを矯正する。
    chordText = chordText
        .replace(/△/g, "Maj")
        .replace(/5add9/g, "sus2")
        .replace(/-/g, "m")
    //テキストをコードネームごとに分割する。
    let chordsTextArray = chordText.split(' ').filter(s => s !== "");
    let ChordNumArray = [];
    let RootNoteArray = [];
    let BassNoteArray = [];
    let MIDINoteNumberArray = [];

    for (let i = 0; i < chordsTextArray.length; i++) {
        //MIDIノートナンバーを格納する配列の中に、コードの数だけ配列を追加。
        MIDINoteNumberArray.push([]);

        // 分数コードに対応する処理（ベース音を取得する）
        if (chordsTextArray[i].includes("/")) {
            //「/」より後ろを取得する（ベース音を取得）
            let BassStr = chordsTextArray[i].substring(chordsTextArray[i].indexOf("/") + 1);
            let BassNum = ConvertToNoteNumber(BassStr);
            BassNoteArray.push(BassNum);
            //ベース音をテキストから削除
            chordsTextArray[i] = chordsTextArray[i].replace(new RegExp(chordsTextArray[i].substring(chordsTextArray[i].indexOf("/")), "g"), "");
        } else {
            BassNoteArray.push('Root');
        };

        // コードのルート音の音名を取得する
        for (let j = 0; j < enharmonicNotePattern.length; j++) {
            if (chordsTextArray[i].includes(enharmonicNotePattern[j])) {
                // 前方一致のときの処理
                chordsTextArray[i] = chordsTextArray[i].replace(new RegExp(enharmonicNotePattern[j], "g"), "");
                RootNoteArray.push(ConvertToNoteNumber(enharmonicNotePattern[j]));
                break;
            } else if (j === enharmonicNotes.length) {
                RootNoteArray.push("?");
            };
        };

        //分数以外のコードのベース音を配列に格納する。
        for (let j = 0; j < BassNoteArray.length; j++) {
            if (BassNoteArray[i] === 'Root') {
                BassNoteArray[i] = RootNoteArray[i];
            };
        };

        //ベース音のMIDIノートナンバーを配列に追加する。
        if (BassNoteArray[i] === 0) {
            //(6)F#が一番低くなる
            if (BassNoteArray[i] >= 6) {
                MIDINoteNumberArray[i].push(BassNoteArray[i] + OCTAVE * 3);
            } else {
                MIDINoteNumberArray[i].push(BassNoteArray[i] + OCTAVE * 4);
            };
        } else {
            //近い方のベース音を選ぶ
            if (Math.abs(BassNoteArray[i - 1] - (BassNoteArray[i] + OCTAVE * 4)) <= 6) {
                MIDINoteNumberArray[i].push(BassNoteArray[i] + OCTAVE * 4);
            } else {
                MIDINoteNumberArray[i].push(BassNoteArray[i] + OCTAVE * 3);
            };
        };

        //コードネームにマッチするものがあるか探す。
        for (let j = 0; j < chord_container.length; j++) {
            if (chordsTextArray[i] === chord_container[j].ChordName) {
                ChordNumArray.push(j);
                break;
            } else if (chord_container.length - 1 <= j) {
                ChordNumArray.push("N.C.");
            };
        };

        // コードネームのテキストから構成音を判定してMIDIノートナンバーを配列に追加する。
        for (let j = 0; j < OCTAVE; j++) {
            if (chord_container[ChordNumArray[i]].ChordBinary[j] === 1) {
                // ベースに近い順番で並べる。（ベース音のオクターブ上の値÷2より大きい場合-12する）
                if (RootNoteArray[i] <= ((RootNoteArray[i] + j) + OCTAVE * 6) - 6) {
                    MIDINoteNumberArray[i].push((RootNoteArray[i] + j) + OCTAVE * 5);
                } else {
                    MIDINoteNumberArray[i].push((RootNoteArray[i] + j) + OCTAVE * 6);
                };
            };
        };
        //ボイシングを整える
        for (let j = 0; j < MIDINoteNumberArray[i].length; j++) {
            if (BassNoteArray[i] + (OCTAVE * 6) < MIDINoteNumberArray[i][j]) {
                MIDINoteNumberArray[i][j] = MIDINoteNumberArray[i][j] - OCTAVE;
            } else if (BassNoteArray[0] + (OCTAVE * 4) > MIDINoteNumberArray[i][j] && j !== 0) {
                MIDINoteNumberArray[i][j] = MIDINoteNumberArray[i][j] + OCTAVE;
            };
        };
        MIDINoteNumberArray[i].sort();
    };

    return MIDINoteNumberArray;
};

//setTimeout用のグローバル変数
let TIMER_ID_ARRAY = [];

//MIDIノートナンバーの配列を渡すと音を再生する関数
function confirmationSound(Array, NoteLength = 1000) {
    //既に再生されているコード音があれば停止する
    for (let i = 0; i < TIMER_ID_ARRAY.length; i++) {
        clearTimeout(TIMER_ID_ARRAY[i])
    };
    TIMER_ID_ARRAY = [];

    //AudioContextを作成する
    init();

    // コードを1秒おきに再生する。
    for (let i = 0; i < Array.length; i++) {
        let TIMER_ID = setTimeout(function () {
            playSound(Array[i], NoteLength);
        }, NoteLength * i)
        TIMER_ID_ARRAY.push(TIMER_ID);
    };
};

function ChordSound(chordText) {
    //コード進行のテキストをMIDIノートナンバーへ変換する
    let MIDINoteNumberArray = ChordTextToMIDINoteNumber(chordText);
    confirmationSound(MIDINoteNumberArray)
};

// コードの音を鳴らす関数
function playSound(MIDINoteNumberArray, NoteLength) {
    for (let k = 0; k < MIDINoteNumberArray.length; k++) {
        let input_volume = Number(document.getElementById("input_volume").value) * 0.025;
        // // ヴォリュームが0の場合はここでreturn
        if (input_volume === 0) {
            return;
        };
        //MIDIノートナンバーに対応する周波数の音をWebAudioAPIで鳴らす。
        const Oscillator = context.createOscillator();
        //波形を決定する
        Oscillator.type = 'square';
        // MIDIノートナンバーを周波数に変換する
        Oscillator.frequency.value = ConvertMIDItoHZ(MIDINoteNumberArray[k]);
        //ゲインノードを作成
        const gain = context.createGain();
        //現在時刻を取得する
        let startTime = context.currentTime;
        //startTimeの音量をセット
        gain.gain.setValueAtTime(input_volume, startTime);
        // フェードアウトまでの時間
        let endTime = startTime + (NoteLength / 1000) - 0.2;
        //フェードアウト後のヴォリュームとフェードアウトまでの時間を渡す
        gain.gain.linearRampToValueAtTime(input_volume, endTime - 0.01);
        gain.gain.linearRampToValueAtTime(0, endTime);
        //ノードを繋げる
        Oscillator.connect(gain).connect(context.destination);
        //音を鳴らす
        Oscillator.start(0.001);
        Oscillator.stop(endTime);
    };
};

