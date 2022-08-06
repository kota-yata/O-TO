'use strict';

//入力されたテキストをサニタイジング(エスケープ処理)する関数
function Sanitizing(text) {
    text = text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

        .replace(/&amp;#119083;/g, "&#119083;")
        .replace(/&amp;#119082;/g, "&#119082;")

        .replace(/\n/g, "<br \/>")

    return text;
};

//指定したキーの音名をディグリーネームへ変換する関数
function ToDegreeName(text, Root) {

    //全角英数字を半角に変換する
    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

    //シャープやフラットの表記ゆれを統一
    text = text
        .replace(/N.C./g, "^")
        .replace(/blk/g, "@")
        .replace(/＃/g, "#")
        .replace(/♯/g, "#")
        .replace(/♯/g, "#")
        .replace(/#⃣/g, "#")
        .replace(/𝄪/g, "&#119082;")

        .replace(/♭♭/g, "&#119083;")
        .replace(/bb/g, "&#119083;")
        .replace(/b/g, "♭")
        .replace(/𝄫/g, "&#119083;")

        .replace(/dim/g, "○")
        .replace(/omit/g, "!")

        .replace(/III/g, "Ⅲ")
        .replace(/VII/g, "Ⅶ")
        .replace(/II/g, "Ⅱ")
        .replace(/IV/g, "Ⅳ")
        .replace(/VI/g, "Ⅵ")
        .replace(/V/g, "Ⅴ")
        .replace(/I/g, "Ⅰ")

        .replace(/iii/g, "Ⅲm")
        .replace(/vii/g, "Ⅶm")
        .replace(/ii/g, "Ⅱm")
        .replace(/iv/g, "Ⅳm")
        .replace(/vi/g, "Ⅵm")
        .replace(/v/g, "Ⅴm")
        .replace(/i/g, "Ⅰm")

        .replace(/\?/g, "・/・")
        .replace(/\？/g, "・/・")

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

        { NoteName: noteNames[c][23], DegreeName: '#Ⅶ' },

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

    //「-」は「m」に置換するなど。
    text = text
        .replace(/((Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|Ⅵ|Ⅶ))-/g, "$1m")
        .replace(/((Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|Ⅵ|Ⅶ))(Φ|φ)/g, "$1m7(♭5)")
        .replace(/((Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|Ⅵ|Ⅶ))(○|゜|o|O)/g, "$1dim")
        .replace(/!/g, "omit")
        .replace(/\^/g, "N.C.")
        .replace(/\@/g, "blk")

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
        if (ValidationText.includes('#5') || ValidationText.includes('♭5') || ValidationText.includes('♭9') || ValidationText.includes('#9') || ValidationText.includes('#11') || ValidationText.includes('♭13')) {
            document.getElementById("ValidationBox").innerHTML = "";
        } else {
            document.getElementById("ValidationBox").innerHTML
                = `<font color="red">【正しく変換できませんでした。】<br>
                ・「キー設定」や、「異名同音の表記」を誤っている可能性があります。<br>
                ・"ディグリーネームの変化記号"の位置を確認してください。<br>
                　※"ディグリーネームの変化記号"は、<b>ローマ数字の左側</b>に書きます。<br>
                　→例：#Ⅳ<br>
                <br>
                【その他・バグの疑いがある場合】<br>
                お手数をおかけします。<br>
                「<a href="https://khufrudamonotes.com/contact-english" target="_blank" rel="noreferrer noopener"><b>バグの報告</b></a>」より「<b>入力したコード進行テキスト</b>」とともにお知らせください。</font>
                <br><br>`;
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
        = "・カノン進行\nC - G - Am - Em - F - C - Dm - G\n\n※「-」は、良い感じに「m」に置換されます。\nFMaj7 - G - E-7-5 - A-\n\n※ディグリーネームでも入力できます。\nⅥm - Ⅳ - Ⅴ - Ⅰ - Ⅴ/Ⅶ\n\n※アルファベットでの代用もできます。\nI△7 - ii7 - iii7 - IV△7 - V7 - vi7 - vii7-5\n\n※「O」や「〇」は「dim」に、「φ」は「m7(♭5)」に置換されます。\nVIIo7 - IIIφ - vi";
    ChangeDegreeText();
    ButtonInvisible();
};

//テキストが入力されたらボタンを消す関数
function ButtonInvisible() {
    //テキストエリア内のテキストを取得
    let text = document.getElementById("textarea").value;

    //入力されたテキストをサニタイジングする関数
    text = Sanitizing(text);

    let TextLength = text.replace(/<br \/>/g, '').length;

    if (TextLength === 0) {
        document.getElementById("box").innerHTML = 'こちらに変換後のテキストが表示されます。<br><br><br><br><br><br><br>';
    } else if (TextLength > 1) {
        document.getElementById("ExampleTextButton").innerHTML = ""
    };
};

//スケールを表示するHTML要素(div)を書き込むための関数
function WriteChordHTML(f, ChordArray) {
    let HTML_Info;
    HTML_Info = document.getElementById(`addHTML${f}`);
    HTML_Info.innerHTML = ""
    //配列の数だけHTML要素(div)を書き込む。
    for (let i = 0; i < ChordArray.length; i++) {
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
                <th scope="row" id="row${f}-${ChordArray.length - i}"></th>
                <td id="title${f}-${ChordArray.length - i}"></td>
                <td id="chordProg${f}-${ChordArray.length - i}"></td>
            </tr>`
        );
    };
};

//スケールを表示するHTML要素(div)を書き込む関数
function ChordCandidateCreate() {
    //Ⅰ始まりのコード進行
    WriteChordHTML(1, chordProgOne);
    //Ⅳ始まりのコード進行
    WriteChordHTML(4, chordProgFour);
    //Ⅵ始まりのコード進行
    WriteChordHTML(6, chordProgSix);
    //その他のコード進行
    WriteChordHTML(8, chordProgEight);
};

// コード進行を書き込む関数
function WriteChord(f, ChordArray, processing = 0, RootNumber = 0) {
    for (let i = 0; i < ChordArray.length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${f}-${i + 1}`).innerHTML = i + 1;
        if (ChordArray[i].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${f}-${i + 1}`).innerHTML = `${ChordArray[i].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${f}-${i + 1}`).innerHTML = `<a href="${ChordArray[i].url}" target="_blank" rel="noopener noreferrer">${ChordArray[i].name}</a>`;
        };
        //コード進行の注釈ツールチップを追加する。
        document.getElementById(`title${f}-${i + 1}`).setAttribute("title", `${ChordArray[i].info}`);

        if (processing === 0) {
            //コード進行（ディグリー表記）を書き込む
            document.getElementById(`chordProg${f}-${i + 1}`).innerHTML = `${ChordArray[i].chord}`;
            //コード進行の注釈ツールチップを追加する。
            document.getElementById(`chordProg${f}-${i + 1}`).setAttribute("title", `${ChordArray[i].info}`);
        } else {
            //ディグリーネームを指定したキーへ変換する関数
            let text = DegreeChange(`${ChordArray[i].chord}`, RootNumber).replace(/-/g, " - ");
            //コード進行を書き込む
            document.getElementById(`chordProg${f}-${i + 1}`).innerHTML = `${text}`;
            //再生するボタンを追加する
            document.getElementById(`chordProg${f}-${i + 1}`).addEventListener('click', function () { ChordSound(text) }, false);
            document.getElementById(`chordProg${f}-${i + 1}`).classList.add("CursorPointer");
            document.getElementById(`row${f}-${i + 1}`).addEventListener('click', function () { ChordSound(text) }, false);
            document.getElementById(`row${f}-${i + 1}`).classList.add("CursorPointer");
            //ディグリー表記のツールチップを追加する。
            document.getElementById(`chordProg${f}-${i + 1}`).setAttribute("title", `${ChordArray[i].chord}`);
        };
    };
};

//コード進行を切り替える関数
function ChangeChordProgression(processing) {
    //スケールを表示するHTML要素(div)を書き込む関数
    ChordCandidateCreate();
    let RootNumber = Number(document.getElementById("rootNumber").value);
    // 調号の画像を変更する
    document.getElementById("b_clef_image").innerHTML = `　<img src="./image/${clef_image[RootNumber]}" alt="調号" title="調号" id="clef2">`;
    if (processing === 0) {
        //ボタンの色を変える
        document.getElementById("degree_change_button").classList.remove("btn-primary");
        document.getElementById("degree_change_button").classList.add("btn-secondary");
        document.getElementById("degree_button").classList.remove("btn-secondary");
        document.getElementById("degree_button").classList.add("btn-success");
    } else {
        //ボタンの色を変える
        document.getElementById("degree_button").classList.remove("btn-success");
        document.getElementById("degree_button").classList.add("btn-secondary");
        document.getElementById("degree_change_button").classList.remove("btn-secondary");
        document.getElementById("degree_change_button").classList.add("btn-primary");
    };
    //Ⅰ始まりのコード進行を書き込む
    WriteChord(1, chordProgOne, processing, RootNumber);
    //Ⅳ始まりのコード進行を書き込む
    WriteChord(4, chordProgFour, processing, RootNumber);
    //Ⅵ始まりのコード進行を書き込む
    WriteChord(6, chordProgSix, processing, RootNumber);
    //その他のコード進行を書き込む
    WriteChord(8, chordProgEight, processing, RootNumber);
};