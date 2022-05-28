'use strict';


function FingerboardGo() {
    RightyFingerboardCreate();
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let StringsCount = 6;
    let st = 1;
    for (let i = 0; i < StringsCount; i++) {
        let NoteNumber = 0;
        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {

            document.getElementById(`${st}_string`)
                .insertAdjacentHTML('afterbegin', `<th id="FretNumber-${st}-${FletCount - i}" class="DegreeBlack" onclick="NoteOnOff(${NoteNumber})"></th>`);
            NoteNumber++;
        };
        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id = "StringsNumber-${st}"> ${st}</th>`);
        st++;
    };
};

FingerboardGo();

let FingerboardOnOff = [];

function NoteOnOff(NoteNumber) {
    console.log({ Num });

    if (onoff[Num] === 0) {
        onoff[Num] = 1;
    } else if (onoff[Num] === 1) {
        onoff[Num] = 0;
    };
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

