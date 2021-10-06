'use strict';

//入力されたテキストをサニタイジング(エスケープ処理)する関数
function Sanitizing(text) {
    text = text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

        .replace(/\n/g, "<br \/>")

    return text;
};

//指定したキーの音名をディグリーネームへ変換する関数
function ToDegreeName(text, Root) {

    //シャープやフラットの表記ゆれを統一
    text = text
        .replace(/＃/g, "#")
        .replace(/♯/g, "#")
        .replace(/♯/g, "#")
        .replace(/#⃣/g, "#")
        .replace(/𝄪/g, "&#119082;")

        .replace(/♭♭/g, "&#119083;")
        .replace(/bb/g, "&#119083;")
        .replace(/b/g, "♭")
        .replace(/𝄫/g, "&#119083;")

        .replace(/III/g, "Ⅲ")
        .replace(/II/g, "Ⅱ")
        .replace(/IV/g, "Ⅳ")
        .replace(/VII/g, "Ⅶ")
        .replace(/VI/g, "Ⅵ")
        .replace(/V/g, "Ⅴ")
        .replace(/I/g, "Ⅰ")

    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

    let RootNumber = Number(Root);

    let c = mod(RootNumber + 0, 12);
    let cisdes = mod(RootNumber + 1, 12);
    let d = mod(RootNumber + 2, 12);
    let dises = mod(RootNumber + 3, 12);
    let e = mod(RootNumber + 4, 12);
    let f = mod(RootNumber + 5, 12);
    let fisges = mod(RootNumber + 6, 12);
    let g = mod(RootNumber + 7, 12);
    let gisas = mod(RootNumber + 8, 12);
    let a = mod(RootNumber + 9, 12);
    let aisb = mod(RootNumber + 10, 12);
    let h = mod(RootNumber + 11, 12);

    //音名とディグリーネームを格納した連想配列
    let NotesArray = [
        { NoteName: noteNames[cisdes][3], DegreeName: '#Ⅰ' },
        { NoteName: noteNames[cisdes][4], DegreeName: '♭Ⅱ' },

        { NoteName: noteNames[dises][6], DegreeName: '#Ⅱ' },
        { NoteName: noteNames[d][7], DegreeName: '&#119083;Ⅲ' },
        { NoteName: noteNames[dises][8], DegreeName: '♭Ⅲ' },

        { NoteName: noteNames[f][10], DegreeName: '#Ⅲ' },

        { NoteName: noteNames[e][11], DegreeName: '♭Ⅳ' },

        { NoteName: noteNames[fisges][13], DegreeName: '#Ⅳ' },
        { NoteName: noteNames[fisges][14], DegreeName: '♭Ⅴ' },

        { NoteName: noteNames[gisas][16], DegreeName: '#Ⅴ' },
        { NoteName: noteNames[gisas][17], DegreeName: '♭Ⅵ' },

        { NoteName: noteNames[aisb][19], DegreeName: '#Ⅵ' },
        { NoteName: noteNames[a][20], DegreeName: '&#119083;Ⅶ' },
        { NoteName: noteNames[aisb][21], DegreeName: '♭Ⅶ' },

        { NoteName: noteNames[h][23], DegreeName: '#Ⅶ' },

        { NoteName: noteNames[c][2], DegreeName: 'Ⅰ' },
        { NoteName: noteNames[d][5], DegreeName: 'Ⅱ' },
        { NoteName: noteNames[e][9], DegreeName: 'Ⅲ' },
        { NoteName: noteNames[f][12], DegreeName: 'Ⅳ' },
        { NoteName: noteNames[g][15], DegreeName: 'Ⅴ' },
        { NoteName: noteNames[a][18], DegreeName: 'Ⅵ' },
        { NoteName: noteNames[h][22], DegreeName: 'Ⅶ' }
    ];

    //配列を文字数が多い順で並び替える。
    NotesArray.sort((a, b) => {
        return b.NoteName.length - a.NoteName.length;
    })

    //文字数の多い順番にテキストへ置換をかけていく。
    for (let i = 0; i < NotesArray.length; i++) {
        //テキストの長さだけreplaceメソッドを適用する。
        for (let j = 0; j < text.length; j++) {
            text = text.replace(NotesArray[i]['NoteName'], NotesArray[i]['DegreeName']);
        };
    };

    return text;
};

//正誤判定を行うプログラム
function Validation(text) {

    let ValidationText = text
        .replace(/#Ⅰ/g, "")
        .replace(/♭Ⅱ/g, "")

        .replace(/#Ⅱ/g, "")
        .replace(/&#119083;Ⅲ/g, "")
        .replace(/♭Ⅲ/g, "")

        .replace(/#Ⅲ/g, "")

        .replace(/♭Ⅳ/g, "")

        .replace(/#Ⅳ/g, "")
        .replace(/♭Ⅴ/g, "")

        .replace(/#Ⅴ/g, "")
        .replace(/♭Ⅵ/g, "")

        .replace(/#Ⅵ/g, "")
        .replace(/&#119083;Ⅶ/g, "")
        .replace(/♭Ⅶ/g, "")

        .replace(/#Ⅶ/g, "")

        .replace(/Ⅰ/g, "")
        .replace(/Ⅱ/g, "")
        .replace(/Ⅲ/g, "")
        .replace(/Ⅳ/g, "")
        .replace(/Ⅴ/g, "")
        .replace(/Ⅵ/g, "")
        .replace(/Ⅶ/g, "");

    //変換してもなお変化記号が含まれる場合を判定
    if (ValidationText.includes('#') || ValidationText.includes('♭') || ValidationText.includes('&#119082;') || ValidationText.includes('&#119083;')) {
        //コードネームに含まれる場合はOK
        if (ValidationText.includes('#5') || ValidationText.includes('♭5')) {
            document.getElementById("ValidationBox").innerHTML = "";
        } else {
            document.getElementById("ValidationBox").innerHTML = `<font color="red">【正しく変換できませんでした。】<br>・「キー設定」や、「異名同音の表記」を誤っている可能性があります。<br>・「ディグリーネームの変化記号」の位置が違う可能性があります。<br>　※ディグリーネームの変化記号は、ローマ数字の左側に書きます。<br>　例：#Ⅳ</font>`;
        };
    } else {
        document.getElementById("ValidationBox").innerHTML = "";
    };
};

//ディグリーネームを指定したキーへ変換する関数
function DegreeChange(text, Root) {

    let RootNumber = Number(Root);

    let c = mod(RootNumber + 0, 12);
    let cisdes = mod(RootNumber + 1, 12);
    let d = mod(RootNumber + 2, 12);
    let dises = mod(RootNumber + 3, 12);
    let e = mod(RootNumber + 4, 12);
    let f = mod(RootNumber + 5, 12);
    let fisges = mod(RootNumber + 6, 12);
    let g = mod(RootNumber + 7, 12);
    let gisas = mod(RootNumber + 8, 12);
    let a = mod(RootNumber + 9, 12);
    let aisb = mod(RootNumber + 10, 12);
    let h = mod(RootNumber + 11, 12);

    text = text
        .replace(/#Ⅰ/g, `${noteNames[cisdes][3]}`)
        .replace(/♭Ⅱ/g, `${noteNames[cisdes][4]}`)

        .replace(/#Ⅱ/g, `${noteNames[dises][6]}`)
        .replace(/&#119083;Ⅲ/g, `${noteNames[d][7]}`)
        .replace(/♭Ⅲ/g, `${noteNames[dises][8]}`)

        .replace(/#Ⅲ/g, `${noteNames[f][10]}`)

        .replace(/♭Ⅳ/g, `${noteNames[e][11]}`)

        .replace(/#Ⅳ/g, `${noteNames[fisges][13]}`)
        .replace(/♭Ⅴ/g, `${noteNames[fisges][14]}`)

        .replace(/#Ⅴ/g, `${noteNames[gisas][16]}`)
        .replace(/♭Ⅵ/g, `${noteNames[gisas][17]}`)

        .replace(/#Ⅵ/g, `${noteNames[aisb][19]}`)
        .replace(/&#119083;Ⅶ/g, `${noteNames[a][20]}`)
        .replace(/♭Ⅶ/g, `${noteNames[aisb][21]}`)

        .replace(/#Ⅶ/g, `${noteNames[h][23]}`)

        .replace(/Ⅰ/g, `${noteNames[c][2]}`)
        .replace(/Ⅱ/g, `${noteNames[d][5]}`)
        .replace(/Ⅲ/g, `${noteNames[e][9]}`)
        .replace(/Ⅳ/g, `${noteNames[f][12]}`)
        .replace(/Ⅴ/g, `${noteNames[g][15]}`)
        .replace(/Ⅵ/g, `${noteNames[a][18]}`)
        .replace(/Ⅶ/g, `${noteNames[h][22]}`);

    return text;
};

//コードネームを変換して転記する関数
function ChangeDegreeText() {

    //テキストエリア内のテキストを取得
    let text = document.getElementById("textarea").value;
    let BeforeRootNumber = Number(document.getElementById("BeforeRootNumber").value);
    let AfterRootNumber = Number(document.getElementById("AfterRootNumber").value);

    //指定したキーの音名をディグリーネームへ変換する関数
    text = ToDegreeName(text, BeforeRootNumber);

    //入力されたテキストをサニタイジングする関数
    text = Sanitizing(text);

    //正誤判定を行うプログラム
    Validation(text);

    //ディグリーネーム表記の処理
    if (AfterRootNumber === 12) {
        //処理なし
    } else {
        //ディグリーネームから任意のキーのコードネームへ変換する。
        text = DegreeChange(text, AfterRootNumber);
    };

    //表示ボックスに書き込む
    document.getElementById("box").innerHTML = text;

    // 調号の画像を変更する
    document.getElementById("b_clef_image").innerHTML = `　<img src="./image/${clef_image[BeforeRootNumber]}" alt="調号" title="調号" id="clef2">`;
    if (AfterRootNumber === 12) {
        document.getElementById("a_clef_image").innerHTML = "";
    } else {
        // 調号の画像を変更する
        document.getElementById("a_clef_image").innerHTML = `　<img src="./image/${clef_image[AfterRootNumber]}" alt="調号" title="調号" id="clef2">`;
    };
};

//サンプルテキストを書き込む関数
function ExampleTextOne() {
    document.getElementById("textarea").innerHTML
        = "・カノン進行\nC - G - Am - Em - F - C - Dm - G\n\n・王道進行\nF - G - Em - Am\n\n※ディグリーネームでも入力できます。\nⅥm - Ⅳ - Ⅴ - Ⅰ - Ⅴ/Ⅶ\n\nⅠ△7 - Ⅱm7 - Ⅲm7 - Ⅳ△7 - Ⅴ7 - Ⅵm7 - Ⅶm7-5";
    ChangeDegreeText();
    ButtonInvisible();
};

//テキストが入力されたらボタンを消す関数
function ButtonInvisible() {
    //テキストエリア内のテキストを取得
    let text = document.getElementById("textarea").value;

    //入力されたテキストをサニタイジングする関数
    Sanitizing(text);

    let TextLength = text.replace(/<br \/>/g, '').length;
    if (TextLength === 0) {
        document.getElementById("box").innerHTML = 'こちらに変換後のテキストが表示されます。<br><br><br><br><br><br><br>';
    } else if (TextLength > 1) {
        document.getElementById("ExampleTextButton").innerHTML = ""
    };
};

let firstNum = 0;
let secondNum = 0;
let num = 0;

//変化記号を決定する
let SOF = 0;


//スケールを表示するためのHTML要素(div)を追加するための関数
function ChordCandidateCreate() {

    //スケールを格納した配列の長さを取得する。
    let chordProgOne_length = chordProgOne.length;
    let chordProgFour_length = chordProgFour.length;
    let chordProgSix_length = chordProgSix.length;
    let chordProgEight_length = chordProgEight.length;

    let HTML_Info;

    //配列の数だけHTML要素(div)を追加する。
    let Num = chordProgOne_length
    for (let i = 0; i < chordProgOne_length; i++) {
        HTML_Info = document.getElementById("addHTML1");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row1-${Num}"></th>
        <td id="title1-${Num}"></td>
        <td id="chordProg1-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgFour_length
    for (let i = 0; i < chordProgFour_length; i++) {
        HTML_Info = document.getElementById("addHTML4");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row4-${Num}"></th>
        <td id="title4-${Num}"></td>
        <td id="chordProg4-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgSix_length
    for (let i = 0; i < chordProgSix_length; i++) {
        HTML_Info = document.getElementById("addHTML6");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row6-${Num}"></th>
        <td id="title6-${Num}"></td>
        <td id="chordProg6-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgEight_length
    for (let i = 0; i < chordProgEight_length; i++) {
        HTML_Info = document.getElementById("addHTML8");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row8-${Num}"></th>
        <td id="title8-${Num}"></td>
        <td id="chordProg8-${Num}"></td>
        </tr>`)
        Num--
    };
};



//コード進行をディグリーネームで表示する関数
function ChangeChordProgressionDegree() {

    //Ⅰ始まりのコード進行
    let firstNum = 1;
    let secondNum = 1;
    let chordProgNum = 0;

    for (let i = 1; i < chordProgOne.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgOne[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgOne[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgOne[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);

        secondNum++
        chordProgNum++
    };

    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgFour.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgFour[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgFour[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgFour[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgSix.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgSix[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgSix[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgSix[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgEight.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgEight[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgEight[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgEight[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //ボタンの色を変える
    document.getElementById("degree_button").className = "btn btn-success box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
    //調号を消す
    document.getElementById("b_clef_image").innerHTML = "";
};




//コード進行を切り替える関数
function ChangeChordProgression() {

    let RootNumber = Number(document.getElementById("rootNumber").value);
    // 調号の画像を変更する
    document.getElementById("b_clef_image").innerHTML = `　<img src="./image/${clef_image[RootNumber]}" alt="調号" title="調号" id="clef2">`;

    let text;

    //Ⅰ始まりのコード進行
    let firstNum = 1;
    let secondNum = 1;
    let chordProgNum = 0;
    for (let i = 1; i < chordProgOne.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgOne[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgOne[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgOne[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgOne[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);

        secondNum++
        chordProgNum++
    };



    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgFour.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgFour[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgFour[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgFour[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgFour[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgSix.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgSix[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgSix[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgSix[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgSix[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgEight.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgEight[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgEight[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgEight[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgEight[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //ボタンの色を変える
    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
};