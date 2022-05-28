'use strict';


function FingerboardGo() {
    RightyFingerboardCreate();
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let StringsCount = 6;

    let st_array = [64, 59, 55, 50, 45, 40];
    let st = 1;
    console.log(st)
    for (let i = 0; i < StringsCount; i++) {
        let MIDI_note_number = st_array[i] + FletCount;
        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            document.getElementById(`${st}_string`)
                .insertAdjacentHTML('afterbegin', `<th id="FretNumber-${st}-${FletCount - i}" class="NoteName_Switch_Search NoteName_cursor_pointer DegreeBlack" onclick="NoteOnOff(${st},${FletCount - i},${MIDI_note_number})"></th>`);
            MIDI_note_number--;
        };
        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id = "StringsNumber-${st}"> ${st}</th>`);
        st++;
    };
};

FingerboardGo();

let FingerboardOnOff = [];

//2つの数を比較して大きい方を返す関数。
function aryMax(a, b) {
    return Math.max(a, b);
};

//2つの数を比較して小さい方を返す関数。
function aryMin(a, b) {
    return Math.min(a, b);
};


function NoteOnOff(st, Flet, MIDI_note_number) {

    //フレットボードの色を変更する
    document.getElementById(`FretNumber-${st}-${Flet}`).classList.toggle("NoteName_Switch_Search");
    let Toggle_status = document.getElementById(`FretNumber-${st}-${Flet}`).classList.toggle("DegreeBlack");

    if (Toggle_status === false) {
        //配列に該当のMIDIノートナンバーを追加する。
        FingerboardOnOff.push(MIDI_note_number);
    } else {
        //配列から該当のMIDIノートナンバーを削除する。
        FingerboardOnOff.splice(FingerboardOnOff.indexOf(MIDI_note_number), 1);
    };

    let PitchClassOnOff;
    let RootNumber;
    if (FingerboardOnOff.length > 0) {
        //2つの数を比較して小さい方を返す関数
        RootNumber = FingerboardOnOff.reduce(aryMin);
        //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）
        RootNumber = mod(RootNumber, 12);
    };

    //音名スイッチのオンオフ状態を格納する配列
    let OnOff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //ベース音（一番低い音）を判定する

    //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）
    PitchClassOnOff = FingerboardOnOff.map(function (a) {
        return mod(a, 12);
    });

    //ピッチクラスが存在する場合、配列OnOffに1を代入する。
    for (let i = 0; i < PitchClassOnOff.length; i++) {
        OnOff[PitchClassOnOff[i]] = 1;
    };

    console.log({
        PitchClassOnOff, RootNumber, OnOff
    });

    ChordCandidateInfo(OnOff, RootNumber);

    // if (onoff[Num] === 0) {
    //     onoff[Num] = 1;
    // } else if (onoff[Num] === 1) {
    //     onoff[Num] = 0;
    // };
}



//右利き用フィンガーボードの要素を描画する関数
function RightyFingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""

    //下段のフレットナンバーのtr(行)要素をtableに書き込む。
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let Num = FletCount;
    //下の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberLower"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num--
    };

    // //指定した弦の本数だけtr(行)要素をtableに書き込む。
    StringsTable();

    //上段のフレットナンバーのtr(行)要素をtableに書き込む。
    Num = FletCount;
    //上の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberUpper"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num--
    };
};

//指定した弦の本数だけtr(行)要素をtableに書き込む関数
function StringsTable() {
    let NumberOfStrings = Number(document.getElementById("NumberOfStrings").value); //弦の本数
    let Num = NumberOfStrings;
    for (let i = 0; i < NumberOfStrings; i++) {
        document.getElementById("Tuning").insertAdjacentHTML('afterbegin',
            `<label for="StringTuning_${Num}" id="TuningString_${Num}" class="box1 col-md-1 col-xl-1 py-1 mx-1">【${Num}弦】
            <select id="StringTuning_${Num}" class="form-select my-1" aria-label="Default select example"
            onchange="FletCreate(${NumberOfStrings})">
                <option value=0>C</option>
                <option value=1>C#-D♭</option>
                <option value=2>D</option>
                <option value=3>D#-E♭</option>
                <option value=4>E</option>
                <option value=5>F</option>
                <option value=6>F#-G♭</option>
                <option value=7>G</option>
                <option value=8>G#-A♭</option>
                <option value=9>A</option>
                <option value=10>A#-B♭</option>
                <option value=11>B</option>
            </select>
            </label>
        </tr>`)

        //弦のナンバーのtr(行)要素のidを書き込む
        document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr class="box_border" id="${Num}_string"></tr>`)
        Num--
    };
};

