'use strict';

//音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function ChangeEIJG() {
    let root_number = Number(document.getElementById("rootNumber").value);
    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    let num = 0;

    for (let i = 0; i < 12; i++) {
        document.getElementById(`chord_${num}`).innerHTML = EIJG[key_signature_names][mod(root_number + i, 12)];
        num++
    };
};

//コードの選択肢を表示するためのHTML要素(option)を追加するための関数
function CreateChordChoices() {
    //コードを格納した配列の長さを取得する。
    let Num = chord_container.length;

    //配列の数だけコードの選択肢optionを追加する。
    for (let i = 0; i < chord_container.length; i++) {
        Num--
        if (Num === 1) {
            //メジャーコードを初期の選択肢にする。
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${chord_container[Num].ChordBinary.join('/')}-${Num} selected>Major</option>`);
        } else {
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${chord_container[Num].ChordBinary.join('/')}-${Num}>${chord_container[Num]["ChordName"]}</option>`);
        };
    };
};

//スケールの選択肢を表示するためのHTML要素(option)を追加するための関数
function CeateScaleChoices(idName) {
    ScaleLanguage = "JapaneseName"
    //スケールを格納した配列の長さを取得する。
    let Num = scale_Container.length;

    //配列の数だけスケールの選択肢optionを追加する。
    for (let i = 0; i < scale_Container.length; i++) {
        Num--
        if (Num === 0) {
            //メジャースケールを初期の選択肢にする。
            document.getElementById(`${idName}`).insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('/')}-${Num} selected>${scale_Container[Num][ScaleLanguage]}</option>`);
        } else {
            document.getElementById(`${idName}`).insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('/')}-${Num}>${scale_Container[Num][ScaleLanguage]}</option>`);
        };
    };
};

//スケール情報を描画する関数
function ScaleInformationDrawing() {
    //scale_Container配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let value = document.getElementById("constituent_binary").value.split('-');

    //scale_Container配列を検索用の値
    let Num = value[1];
    value[0] = value[0]
    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    let scale_binary_split = value[0].split('/').map(Number);

    //シャープまたはフラット指定用の数値を、スケールナンバー計算のために置き換える
    for (let i = 0; i < scale_binary_split.length; i++) {
        if (scale_binary_split[i] >= 2) {
            scale_binary_split.splice(i, 1, 1);
        };
    };

    let scale_binary_reverse = scale_binary_split.reverse();
    let scale_binary_rejoin = scale_binary_reverse.join("");
    let scale_dec = parseInt(scale_binary_rejoin, 2);

    //トニックの数値を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);

    let KeySignatureNum = mod(RootNumber - scale_Container[Num]["addNum"], 12)
    let scaleFamilyNum = mod(RootNumber - scale_Container[Num]["addNum"] - scale_Container[Num]["Adjustment"], 12)

    let SOF;
    //調号が#か♭かを判定する。
    if (KeySignatureNum === 0
        || KeySignatureNum === 2
        || KeySignatureNum === 4
        || KeySignatureNum === 6
        || KeySignatureNum === 7
        || KeySignatureNum === 9
        || KeySignatureNum === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    //スケールファミリーの情報を表示
    if (scale_Container[Num]["Mode"] == "") {
        document.getElementById("Scale_Family_text").innerHTML = "<br>";
    } else {
        document.getElementById("Scale_Family_text").innerHTML
            = `<br>${noteNames[scaleFamilyNum][SOF]} ${scale_Container[Num]["Mode"]}`;
    };

    //スケールの名前を表示する
    document.getElementById("Scale_name_text").innerHTML
        = `English : <strong>${noteNames[RootNumber][SOF]} ${scale_Container[Num]['EnglishName']}</strong> <br>日本語 :<strong> ${noteNames[RootNumber][SOF]} ${scale_Container[Num]['JapaneseName']}</strong>`;

    //スケールの調号を判定する
    document.getElementById("keySignatur_text").innerHTML
        = `通常、調号は${key_signature[KeySignatureNum]}で記譜されます。<br><img src="./image/${clef_image[KeySignatureNum]}" alt="調号" title="調号" id="clef2">`;


    //スケールの情報を表示
    if (scale_Container[Num]["Info"] == "") {
        document.getElementById("Scale_info_text").innerHTML = "";
    } else {
        document.getElementById("Scale_info_text").innerHTML
            = `<br>${scale_Container[Num]["Info"]}`;
    };

    // ドミナントコード上で使えるかを判定する
    if (scale_Container[Num]["diaChord4"] === "7") {
        document.getElementById("dominant_chord_text").innerHTML
            = `${noteNames[RootNumber][SOF]}7（ドミナント・セブン・コード）上で使用可能です。`;
    } else if (scale_dec == 1371) {
        document.getElementById("dominant_chord_text").innerHTML
            = `「スーパー・ロクリアン」ではなく「オルタード・スケール」として解釈する場合は、${flat_note_name[RootNumber]}7（ドミナント・セブン・コード）上で使用可能です。`;
    } else {
        document.getElementById("dominant_chord_text").innerHTML = "";
    };

    //フォルテナンバーを表示
    document.getElementById("Forte_number_text").innerHTML
        = `<br>Forte number：「${scale_Container[Num]["ForteNumber"]}」`;
    //スケールナンバーを表示
    document.getElementById("Scale_number_text").innerHTML
        = `Scale number：「${scale_dec}」`;

    //構成音を着色するために構成音のバイナリを返り値として返す
    onoff = value[0].split('/').map(Number);
    return onoff
};

//スケールの構成音を含む主なコード一覧のテーブルを描画する関数
function scaleChordTableCreate() {

    //scale_Container配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let value = document.getElementById("constituent_binary").value.split('-');

    //scale_Container配列を検索用の値
    let Num = Number(value[1]);

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    let scale_binary_split = value[0].split('/').map(Number);

    //トニックの数値を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);
    let KeySignatureNum = mod(RootNumber - scale_Container[Num]["addNum"], 12)

    //一度テーブルを空にする
    document.getElementById(`scaleChordTable`).innerHTML = "";

    let use_chord_count = 0;
    //全てのルート音の場合でスケールの構成音と一致するかを判定するために使う値
    let ChordTableNum = chord_container.length;

    for (let i = 0; i < chord_container.length; i++) {
        //tr要素を書き込む
        document.getElementById(`scaleChordTable`).insertAdjacentHTML('afterbegin', `<tr id="ChordNumber-${ChordTableNum}"></tr>`);
        let ChordCountNum = 12;
        let chordAdjustmentNumber = 0;
        let noneCount = 0;
        // 登録しているコードネームの数だけfor文でコードネームを判定して書き込む
        for (let i = 0; i < 12; i++) {
            //スケールのバイナリが空ならテーブルも空。
            if (scale_binary_split[ChordCountNum - 1] !== 0) {
                //スケールの構成音でコードネームが作れるか判定する
                if (chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 0, 12)] <= scale_binary_split[11] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 1, 12)] <= scale_binary_split[10] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 2, 12)] <= scale_binary_split[9] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 3, 12)] <= scale_binary_split[8] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 4, 12)] <= scale_binary_split[7] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 5, 12)] <= scale_binary_split[6] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 6, 12)] <= scale_binary_split[5] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 7, 12)] <= scale_binary_split[4] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 8, 12)] <= scale_binary_split[3] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 9, 12)] <= scale_binary_split[2] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 10, 12)] <= scale_binary_split[1] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(chordAdjustmentNumber - 11, 12)] <= scale_binary_split[0]) {

                    let SOF;
                    //調号が#か♭かを判定する。
                    if (KeySignatureNum === 0
                        || KeySignatureNum === 2
                        || KeySignatureNum === 4
                        || KeySignatureNum === 6
                        || KeySignatureNum === 7
                        || KeySignatureNum === 9
                        || KeySignatureNum === 11) {
                        SOF = 0;
                    } else {
                        SOF = 1;
                    };

                    if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 1) {
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 42) {
                        SOF = 0;
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 43) {
                        SOF = 1;
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else {
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border Degree${ChordCountNum - 1}">${AllNoteNames[mod((RootNumber + ChordCountNum - 1), 12)][0][scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1]]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    };



                    //構成音とマッチするコードの数をカウントする
                    use_chord_count++;
                } else {
                    //空のテーブル要素を書き込む
                    document.getElementById(`ChordNumber-${ChordTableNum}`)
                        .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border ChordNotFound hidden_smart_phone"></td>`);
                    //一行丸ごと何も無いかチェックのためのカウント
                    noneCount++
                };
            } else {
                //空のテーブル要素を書き込む
                document.getElementById(`ChordNumber-${ChordTableNum}`)
                    .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" class="box_border ChordNotFound hidden_smart_phone"></td>`);
                //一行丸ごと何も無いかチェックのためのカウント
                noneCount++
            };
            chordAdjustmentNumber++
            ChordCountNum--
        };
        //一行丸ごと何も無い場合は、行ごと表示しない。
        if (noneCount === 12) {
            document.getElementById(`ChordNumber-${ChordTableNum}`).innerHTML = "";
        };
        ChordTableNum--;

    };
    document.querySelector('.use_chord_count').innerHTML = `（${use_chord_count} / ${chord_container.length * 12}）`;
};

//スケールの情報を処理して書き込む関数(スケールで使用)
function ScaleKeySignature() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();
    //スケール情報を描画する関数
    onoff = ScaleInformationDrawing();
    //構成音を着色
    NoteNameColoring(onoff);

    //スケールの構成音を含む主なコード一覧のテーブルを描画する関数
    scaleChordTableCreate();
};

//モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
function CreateCandidate() {
    let Num = 0
    //配列の数だけHTML要素(div)を追加する。
    for (let i = 0; i < scale_Container.length; i++) {
        let HTML_Info = document.getElementById("addHTML");
        // HTML_Info.insertAdjacentHTML('beforebegin','<div>BeforeBegin</div>');
        HTML_Info.insertAdjacentHTML('beforebegin', `<div class="" id="Modal_text_${Num}"></div>`);
        Num++
    };
};

//モーダル・インターチェンジの候補をディグリー表記で表示する関数
function ModalCandidateDegree() {
    let Num = 0;
    for (let i = 0; i < scale_Container.length; i++) {
        document.getElementById(`Modal_text_${Num}`).innerHTML
            = `Ⅰ ${scale_Container[Num][ScaleLanguage]}　<font size="2"><span style="color:#808080">${scale_Container[Num]["Mode"]}</span></font>`;
        Num++
    };
    document.querySelector('.use_scale_count').innerHTML = ``;
};

const Degree_Tension_array = [
    ["R", "", "Degree0"],
    ["m2", "♭9", "Degree1"],
    ["M2", "9", "Degree2"],
    ["m3", "#9", "Degree3"],
    ["M3", "", "Degree4"],
    ["P4", "11", "Degree5"],
    ["-5", "#11", "Degree6"],
    ["P5", "", "Degree7"],
    ["+5", "♭13", "Degree8"],
    ["M6", "13", "Degree9"],
    ["m7", "", "Degree10"],
    ["M7", "", "Degree11"],
];

//コードネームに合わせて度数表記を描画する関数
function degree_position_drow(root_position) {
    //指板の時は処理を実行しない
    if (Number(document.getElementById("do_app").value) === 0 || Number(document.getElementById("do_app").value) === 1) {
        return;
    };
    let Num = 0;
    for (let i = 0; i < 12; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Degree_table_${Num}`).innerHTML = ``;
        document.getElementById(`Tension_table_${Num}`).innerHTML = ``;
        let Num2 = 0;
        for (let i = 0; i < 12; i++) {
            //いったんクラスを全て削除する
            document.getElementById(`Degree_table_${Num}`).classList.remove(`Degree${Num2}`);
            document.getElementById(`Tension_table_${Num}`).classList.remove(`Degree${Num2}`);
            Num2++
        };
        Num++
    };

    Num = 0;
    for (let i = 0; i < 12; i++) {
        //テキストを追加する
        document.getElementById(`Degree_table_${Num}`).innerHTML = `${Degree_Tension_array[mod(-root_position + Num, 12)][0]}`;
        document.getElementById(`Tension_table_${Num}`).innerHTML = `${Degree_Tension_array[mod(-root_position + Num, 12)][1]}`;
        //クラスを追加する
        document.getElementById(`Degree_table_${Num}`).classList.add(`Degree${mod(-root_position + Num, 12)}`);
        if (Degree_Tension_array[mod(-root_position + Num, 12)][1] !== "") {
            document.getElementById(`Tension_table_${Num}`).classList.add(`Degree${mod(-root_position + Num, 12)}`);
        };
        Num++
    };
};

//コード・ネームの情報を判定する関数
function ChordCandidateInfo(onoff, RootNumber) {

    let SOF;

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(0);

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    if (RootNumber === 2
        || RootNumber === 4
        || RootNumber === 6
        || RootNumber === 7
        || RootNumber === 9
        || RootNumber === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    //コードの構成音が何音か判定した値を格納する変数
    let CandidateCount = 0;
    //コードの構成音が何音か判定する
    for (let i = 0; i < 11; i++) {
        CandidateCount = CandidateCount + onoff[i];
    };

    document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;

    let TriToneText = [`<br>トライトーンを含みます。ドミナント機能を持つコードです。<br><br>【このコードの主な解決先】`];
    let Sub2Text = ["<br>【このコードの手前に居がちなコード】"]

    //トライ・トーンを判定する
    if (onoff[0] + onoff[6] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 2, 12)][SOF]}　${noteNames[mod(RootNumber - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 5, 12)][SOF]}　${noteNames[mod(RootNumber - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[3] + onoff[9] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 5, 12)][SOF]}　${noteNames[mod(RootNumber - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 2, 12)][SOF]}　${noteNames[mod(RootNumber - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンを判定する
    if (onoff[1] + onoff[7] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[4] + onoff[10] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンを判定する
    if (onoff[2] + onoff[8] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[5] + onoff[11] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンの情報を書き込む
    if (TriToneText.length === 1) {
        //トライトーンが含まれない場合
    } else if (CandidateCount <= 2) {
        //トライトーンが含まれるものの、コードの構成音が3音に満たない場合
    } else {
        document.getElementById("AddChordInfoTriToneHTML").innerHTML
            = TriToneText.join().replace(",", "").replace(",", "").replace(",", "");
        document.getElementById("AddChordInfoSub2HTML").innerHTML
            = Sub2Text.join().replace(",", "").replace(",", "").replace(",", "");
    };

    //8音以上のコードを判定する。
    if (CandidateCount >= 8) {
        document.getElementById("AddChordInfo2HTML").innerHTML = `<br>8種類以上の異なるピッチクラスを使用するコードになります。<br>響きが無彩色的になる可能性が高いです。`;
    } else if (CandidateCount >= 5) {
        document.getElementById("AddChordInfo2HTML").innerHTML = `<br>5種類以上の異なるピッチクラスを使用するコードになります。<br>混乱を防ぐために、ボイシング（和音の積み方）の併記を推奨します。`;
    } else {
        document.getElementById("AddChordInfo2HTML").innerHTML = ``;
    };

    //ベース音を判定する
    let Bass = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所(ベース音)を判定する
        if (onoff[i] === 1) {
            Bass = i + RootNumber;
            break;
        };
    };

    //コード・ネームを判定する。
    let RootNum = 0;
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < 11; i++) {
        //コード・ネームが格納された配列の先頭に戻る。
        let Num = 0;
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[Num].ChordBinary[0] === onoff[mod(RootNum + 0, 12)]
                && chord_container[Num].ChordBinary[1] === onoff[mod(RootNum + 1, 12)]
                && chord_container[Num].ChordBinary[2] === onoff[mod(RootNum + 2, 12)]
                && chord_container[Num].ChordBinary[3] === onoff[mod(RootNum + 3, 12)]
                && chord_container[Num].ChordBinary[4] === onoff[mod(RootNum + 4, 12)]
                && chord_container[Num].ChordBinary[5] === onoff[mod(RootNum + 5, 12)]
                && chord_container[Num].ChordBinary[6] === onoff[mod(RootNum + 6, 12)]
                && chord_container[Num].ChordBinary[7] === onoff[mod(RootNum + 7, 12)]
                && chord_container[Num].ChordBinary[8] === onoff[mod(RootNum + 8, 12)]
                && chord_container[Num].ChordBinary[9] === onoff[mod(RootNum + 9, 12)]
                && chord_container[Num].ChordBinary[10] === onoff[mod(RootNum + 10, 12)]
                && chord_container[Num].ChordBinary[11] === onoff[mod(RootNum + 11, 12)]) {

                //完全5度が省略可能かを判定する。
                let omitP5th = 0;
                //長2度(sus2)が含まれる場合
                if (onoff[mod(RootNum + 2, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(RootNum + 5, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(RootNum + 7, 12)] === 1) {
                    omitP5th = 1;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML
                        = `<br>Root（ルート音）に対してP5th（完全5度）の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードがメジャーかマイナーかそれ以外かを判定する。
                let MajorOrMinor = 0;
                //長3度が含まれる場合
                if (onoff[mod(RootNum + 4, 12)] === 1) {
                    MajorOrMinor = 0;
                    //短3度が含まれる場合
                } else if (onoff[mod(RootNum + 3, 12)] === 1) {
                    MajorOrMinor = 9;
                    //3度が含まれない場合
                } else {
                    MajorOrMinor = RootNumber;
                    //完全5度が含まれず、3度も含まれない場合
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                };

                let NonRootMOm = 0;
                //コード・ネームのシャープとフラットを判定するための値を計算する。
                NonRootMOm = mod(RootNum - MajorOrMinor + RootNumber, 12);

                let NonRootSOF;
                //コード・ネームのシャープとフラットの判別
                if (NonRootMOm === 2 || NonRootMOm === 4 || NonRootMOm === 6 || NonRootMOm === 7 || NonRootMOm === 9 || NonRootMOm === 11) {
                    NonRootSOF = 0;
                } else {
                    NonRootSOF = 1;
                };

                //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
                if (0 === onoff[0] && Bass >= RootNumber + RootNum) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含まないコード・ネームの展開形の判定(判定基準：ルート音のスイッチが押されていない)
                } else if (0 === onoff[0]) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[mod(Bass, 12)][NonRootSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[mod(Bass, 12)][NonRootSOF]}（転回形）</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの判定(判定基準：初回ループ時)
                } else if (RootNum === 0) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[RootNumber][NonRootSOF]} ${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[RootNumber][NonRootSOF]}${chord_container[Num]["Name"]}</font>`
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの転回形の判定
                } else {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[RootNumber][NonRootSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[RootNumber][NonRootSOF]}（転回形）</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    degree_position_drow(mod(RootNum, 12));
                };
                //コードネームに合わせて度数表記を描画する関数
                degree_position_drow(mod(RootNum, 12));
                //マッチするものが見つかった場合はここでreturn
                let BassNumber = mod(RootNum, 12);
                return BassNumber;
            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
            Num++
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        RootNum++
        //マッチするもの無し
        if (RootNum === 11) {
            document.getElementById("AddChordHTML").innerHTML = `<font size="6">N.C.</font>`;
            document.getElementById("AddChordNameHTML").innerHTML = `<font size="2">読み方：ノン・コード</font>`;
            document.getElementById("AddChordInfoHTML").innerHTML = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。<br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>※基本的に「UST（アッパー・ストラクチャー・トライアド）」及び、「ハイブリッド・コード」での解釈の可能性は表示されません。<br>→ <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
            document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
        };
    };

    //3音連続しているトーン・クラスターを判定する
    let NoteChain = 0;
    let tcj = 0;
    for (let i = 0; i < 11; i++) {
        //特定の場合と、+1と＋2の場所のスイッチがonかどうか判定する。
        NoteChain = onoff[mod(i, 12)] + onoff[mod(i + 1, 12)] + onoff[mod(i + 2, 12)];
        //3音以上連続している部分を見つける。
        if (NoteChain === 3) {
            tcj = 1;
            break
        } else {
            NoteChain = 0;
        };
    };

    //4音以上音が連続しているトーン・クラスターを判定する(トーン・クラスターを格納した配列とマッチするものを見つける)
    RootNum = 0;
    let clear = 0;
    //12通りの場合について調べる。
    for (let i = 0; i < 11; i++) {
        let TCNum = 0;
        //トーン・クラスターを格納した配列と照合する。
        for (let y = 0; y < ToneCluster.length; y++) {
            if (ToneCluster[TCNum][0] === onoff[mod(RootNum + 0, 12)]
                && ToneCluster[TCNum][1] === onoff[mod(RootNum + 1, 12)]
                && ToneCluster[TCNum][2] === onoff[mod(RootNum + 2, 12)]
                && ToneCluster[TCNum][3] === onoff[mod(RootNum + 3, 12)]
                && ToneCluster[TCNum][4] === onoff[mod(RootNum + 4, 12)]
                && ToneCluster[TCNum][5] === onoff[mod(RootNum + 5, 12)]
                && ToneCluster[TCNum][6] === onoff[mod(RootNum + 6, 12)]
                && ToneCluster[TCNum][7] === onoff[mod(RootNum + 7, 12)]
                && ToneCluster[TCNum][8] === onoff[mod(RootNum + 8, 12)]
                && ToneCluster[TCNum][9] === onoff[mod(RootNum + 9, 12)]
                && ToneCluster[TCNum][10] === onoff[mod(RootNum + 10, 12)]
                && ToneCluster[TCNum][11] === onoff[mod(RootNum + 11, 12)]
                || tcj === 1) {
                document.getElementById("AddChordHTML").innerHTML = `<font size="6">Tone cluster</font>`;
                document.getElementById("AddChordNameHTML").innerHTML = `<font size="2">読み方：トーン・クラスター</font>`;
                document.getElementById("AddChordInfoHTML").innerHTML = `「音塊」「密集音群」とも。<br>隣り合う3つ以上の音を含む和音です。`;
                document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
                document.getElementById("AddChordInfo2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                return
            };
            TCNum++
        };
        if (clear === 1) {
            //トーン・クラスターと一致した場合はreturn
            return
        } else {
            //ルート音をずらす。
            RootNum++
        };
    };
};

//コードの情報を処理して書き込む関数(コードで使用)
function ChordNoteSwitch() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();

    //scale_Container配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let value = document.getElementById("constituent_binary").value.split('-');
    //構成音のバイナリ値を配列「onoff」へ格納する。
    onoff = value[0].split('/').map(Number);
    //シャープまたはフラット指定用に書き換えた数値を元に戻す。
    for (let i = 0; i < onoff.length; i++) {
        if (onoff[i] >= 2) {
            onoff.splice(i, 1, 1);
        };
    };
    //ルートの音の値を取得
    let RootNumber = Number(document.getElementById("rootNumber").value);
    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff, RootNumber);

    //構成音を着色する関数
    NoteNameColoring(onoff);

    //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
    CreateCandidate();

    ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(0)

    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff)
};

//スケールの情報を格納する配列
let ConfigurationNotes = [];

//モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数(コード・コード/モード検索用)
function ModalTextAndNoteCreate() {
    //ルート音の情報を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);
    let Num = 0;
    let use_scale_count = 0;
    //スケールを表示する言語の情報を取得する。
    let sigNameNum = Number(document.getElementById("ModalCandidateSelect").value);
    if (sigNameNum <= 3) {
        for (let i = 0; i < scale_Container.length; i++) {
            //配列を空にする。
            ConfigurationNotes.splice(0);
            //選択された音の組み合わせがスケールの構成音と一致するか判定する。
            if (scale_Container[Num]['ScaleNumBinary'][0] >= onoff[0]
                && scale_Container[Num]['ScaleNumBinary'][1] >= onoff[1]
                && scale_Container[Num]['ScaleNumBinary'][2] >= onoff[2]
                && scale_Container[Num]['ScaleNumBinary'][3] >= onoff[3]
                && scale_Container[Num]['ScaleNumBinary'][4] >= onoff[4]
                && scale_Container[Num]['ScaleNumBinary'][5] >= onoff[5]
                && scale_Container[Num]['ScaleNumBinary'][6] >= onoff[6]
                && scale_Container[Num]['ScaleNumBinary'][7] >= onoff[7]
                && scale_Container[Num]['ScaleNumBinary'][8] >= onoff[8]
                && scale_Container[Num]['ScaleNumBinary'][9] >= onoff[9]
                && scale_Container[Num]['ScaleNumBinary'][10] >= onoff[10]
                && scale_Container[Num]['ScaleNumBinary'][11] >= onoff[11]) {

                let SOF;
                //シャープとフラットの区別をする変数SOFに値を代入。
                if (mod(RootNumber - scale_Container[Num]['addNum'], 12) == 0
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 2
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 4
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 6
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 7
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 9
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 11) {
                    SOF = 0;
                } else {
                    SOF = 1;
                };

                //スケール構成音のバイナリを配列に格納する。
                let Configuration = scale_Container[Num]['ScaleNumBinary']

                //for文でスケールの構成音を生成する。
                for (let i = 0; i < 12; i++) {
                    //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
                    if (Configuration[i] === 0) {
                        //取り出さない（何もしない）。
                    } else if (Configuration[i] === 42) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][0]);
                    } else if (Configuration[i] === 43) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][1]);
                    } else if (Configuration[i] === 1) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][SOF]);
                    } else {
                        ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, 12)][sigNameNum][Number(Configuration[i])]);
                    }
                };

                //スケールの情報をHTMLに書き込む。
                if (scale_Container[Num]["Mode"] === "") {
                    document.getElementById(`Modal_text_${Num}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[Num][ScaleLanguage]}. . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}</font>`;
                } else {
                    document.getElementById(`Modal_text_${Num}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[Num][ScaleLanguage]}</span> . . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}　<span style="color:#808080">${noteNames[mod(RootNumber - scale_Container[Num]['addNum'] - scale_Container[Num]['Adjustment'], 12)][SOF]}${scale_Container[Num]["Mode"]}</span></font>`;
                };
                use_scale_count++;
            } else {
                document.getElementById(`Modal_text_${Num}`).innerHTML = "";
                document.getElementById(`Modal_text_${Num}`).className = "";
            };
            Num++
        };
    } else {
        //構成音を表示しない
    };
    document.querySelector('.use_scale_count').innerHTML = `（${use_scale_count} / ${scale_Container.length}）`;
};

//モーダル・インターチェンジの候補を表示する関数(コード・コード/モード検索用)
function ModalTextCreate() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();

    let RootNumber = Number(document.getElementById("rootNumber").value);

    let Num = 0;
    for (let i = 0; i < scale_Container.length; i++) {
        if (scale_Container[Num]['ScaleNumBinary'][0] >= onoff[0]
            && scale_Container[Num]['ScaleNumBinary'][1] >= onoff[1]
            && scale_Container[Num]['ScaleNumBinary'][2] >= onoff[2]
            && scale_Container[Num]['ScaleNumBinary'][3] >= onoff[3]
            && scale_Container[Num]['ScaleNumBinary'][4] >= onoff[4]
            && scale_Container[Num]['ScaleNumBinary'][5] >= onoff[5]
            && scale_Container[Num]['ScaleNumBinary'][6] >= onoff[6]
            && scale_Container[Num]['ScaleNumBinary'][7] >= onoff[7]
            && scale_Container[Num]['ScaleNumBinary'][8] >= onoff[8]
            && scale_Container[Num]['ScaleNumBinary'][9] >= onoff[9]
            && scale_Container[Num]['ScaleNumBinary'][10] >= onoff[10]
            && scale_Container[Num]['ScaleNumBinary'][11] >= onoff[11]) {
            if (mod(RootNumber - scale_Container[Num]['addNum'], 12) === 0
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 2
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 4
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 6
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 7
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 9
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 11) {
                document.getElementById(`Modal_text_${Num}`).innerHTML
                    = `${sharp_note_name[RootNumber]} ${scale_Container[Num][ScaleLanguage]} ${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}`;
            } else {
                document.getElementById(`Modal_text_${Num}`).innerHTML
                    = `${flat_note_name[RootNumber]} ${scale_Container[Num][ScaleLanguage]} ${flat_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}`;
            };
        } else {
            document.getElementById(`Modal_text_${Num}`).innerHTML = "";
            document.getElementById(`Modal_text_${Num}`).className = "";
        };
        Num++
    };

    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff, RootNumber);

    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();
};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
function ModalCandidateSelect() {
    //言語の情報を取得する。
    let ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //言語表示なしの場合 又は 音名が選択されていないとき
    if ((0 === onoff[0]
        && 0 === onoff[1]
        && 0 === onoff[2]
        && 0 === onoff[3]
        && 0 === onoff[4]
        && 0 === onoff[5]
        && 0 === onoff[6]
        && 0 === onoff[7]
        && 0 === onoff[8]
        && 0 === onoff[9]
        && 0 === onoff[10]
        && 0 === onoff[11])) {
        //モーダル・インターチェンジの候補をディグリー表記で表示する関数
        ModalCandidateDegree();
    } else if (ModalSelectNum === 0
        || ModalSelectNum === 1
        || ModalSelectNum === 2
        || ModalSelectNum === 3) {
        //モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数
        ModalTextAndNoteCreate();
    } else if (ModalSelectNum === 4) {
        //モーダル・インターチェンジの候補を表示する関数
        ModalTextCreate();
    } else {
        //モーダル・インターチェンジの候補をディグリー表記で表示する関数
        ModalCandidateDegree();
    };
};

//スケールの日本語・英語表記を切り替えるスイッチ(コード・コード/モード検索用)
let ScaleLanguage = 'JapaneseName';
let ScaleLanguageNum = 1;

//モーダルインターチェンジ候補のスケール名を日本語と英語に切り替えるボタンのための関数(コード・コード/モード検索用)
function ScaleLanguageJE() {
    if (ScaleLanguageNum === 0) {
        ScaleLanguage = 'JapaneseName';
        document.getElementById("scale_language_change_button").className = "btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum === 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").className = "btn btn-danger box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 0;
    };
    //モーダル・インターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();
};

//音名スイッチのオンオフ状態を格納する配列
let onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//構成音を着色する関数
function NoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] != 0) {
            document.getElementById(`chord_${i}`).className = "NoteName NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`chord_${i}`).className = "NoteName";
        };
    };
};

//構成音を着色する関数（コードスケール検索用）
function SearchNoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] != 0) {
            document.getElementById(`chord_${i}`).className = "NoteName NoteName_cursor_pointer NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`chord_${i}`).className = "NoteName NoteName_cursor_pointer NoteName_Switch_Search";
        };
    };
};


//音名からモード・コード検索用のスイッチの役割を果たす関数(コード/モード検索用)
function NoteSwitch(Num) {
    if (onoff[Num] === 0) {
        onoff[Num] = 1;
    } else if (onoff[Num] === 1) {
        onoff[Num] = 0;
    };
    //構成音を着色する関数（コードスケール検索用）
    SearchNoteNameColoring(onoff)
    //ルートの音の値を取得
    let RootNumber = Number(document.getElementById("rootNumber").value);
    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff, RootNumber);
    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替えをする関数(コード・コード/モード検索用)
    ModalCandidateSelect(onoff);
};

//転調の種類を判別するための関数(転調の間隔)
function modulation() {

    //入力された値を変数に代入する
    let b_note_num = Number(document.getElementById("b_note").value);
    let b_mode_num = scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['addNum'];
    let a_note_num = Number(document.getElementById("a_note").value);
    let a_mode_num = scale_Container[Number(document.getElementById("a_mode").value.split('-')[1])]['addNum'];

    let b_key_num = mod(b_note_num - b_mode_num, 12);
    let a_key_num = mod(a_note_num - a_mode_num, 12);
    let modulation_num = mod(a_key_num - b_key_num, 12);

    let b_SOF;
    //転調前のキーの主音の異名同音を判定
    if (b_key_num === 0 || b_key_num === 2 || b_key_num === 4 || b_key_num === 6 || b_key_num === 7 || b_key_num === 9 || b_key_num === 11) {
        b_SOF = 0;
    } else {
        b_SOF = 1;
    };

    let b_Configuration = scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['ScaleNumBinary'];
    let b_ConfigurationNotes = [];

    //for文でスケールの構成音を生成する。
    for (let i = 0; i < 12; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (b_Configuration[i] === 0) {
            //何もしない。
        } else if (b_Configuration[i] === 42) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, 12)][0]);
        } else if (b_Configuration[i] === 43) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, 12)][1]);
        } else if (b_Configuration[i] === 1) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, 12)][b_SOF]);
        } else {
            b_ConfigurationNotes.push(AllNoteNames[mod(b_note_num + i, 12)][0][Number(b_Configuration[i])]);
        };
    };

    //転調前のキーと調号を表示
    document.getElementById("result_b_key").innerHTML
        = `-転調前-<br>${noteNames[b_note_num][b_SOF]} ${scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['JapaneseName']}<br>${key_signature[b_key_num]}<br><img src="./image/${clef_image[b_key_num]}" alt="調号" title="調号" class="clef"><br><font size="-1">${b_ConfigurationNotes.join("-")}</font>`;

    let a_SOF;
    //転調後のキーの主音の異名同音を判定
    if (a_key_num === 0 || a_key_num === 2 || a_key_num === 4 || a_key_num === 6 || a_key_num === 7 || a_key_num === 9 || a_key_num === 11) {
        a_SOF = 0;
    } else {
        a_SOF = 1;
    };

    let a_Configuration = scale_Container[Number(document.getElementById("a_mode").value.split('-')[1])]['ScaleNumBinary'];
    let a_ConfigurationNotes = [];

    //for文でスケールの構成音を生成する。
    for (let i = 0; i < 12; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (a_Configuration[i] === 0) {
            //何もしない。
        } else if (a_Configuration[i] === 42) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, 12)][0]);
        } else if (a_Configuration[i] === 43) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, 12)][1]);
        } else if (a_Configuration[i] === 1) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, 12)][a_SOF]);
        } else {
            a_ConfigurationNotes.push(AllNoteNames[mod(a_note_num + i, 12)][0][Number(a_Configuration[i])]);
        };
    };

    //転調後のキーと調号を表示
    document.getElementById("result_a_key").innerHTML
        = `-転調後-<br>${noteNames[a_note_num][a_SOF]} ${scale_Container[Number(document.getElementById("a_mode").value.split('-')[1])]['JapaneseName']}<br>${key_signature[a_key_num]}<br><img src="./image/${clef_image[a_key_num]}" alt="調号" title="調号" class="clef"><br><font size="-1">${a_ConfigurationNotes.join("-")}</font>`;

    //転調の種類を格納する配列を空で定義
    let result_modulation = [];

    //転調の種類を表示
    if (b_key_num === a_key_num && b_note_num === a_note_num) {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+1">転調なし</font><br>　`);
    } else if (b_key_num === a_key_num && b_note_num != a_note_num) {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+2">${modulation_type[modulation_num]}</font><br>（平行調）`);
    } else if (b_note_num === a_note_num) {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+2">${modulation_type[modulation_num]}</font><br>（同主調）`);
        //メジャー及び、マイナーでは「同旋法移行」と表示しない。
    } else if (b_mode_num === a_mode_num && a_mode_num === 0 || b_mode_num === a_mode_num && a_mode_num === 9) {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+2">${modulation_type[modulation_num]}</font>`);
    } else if (b_mode_num === a_mode_num) {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+2">${modulation_type[modulation_num]}</font><br>（同旋法移行）`);
    } else {
        result_modulation.unshift(`【転調の種類】<br><br><font size="+2">${modulation_type[modulation_num]}</font><br>　`);
    };

    //追加情報
    if (modulation_num === 1 && b_mode_num === a_mode_num) {
        result_modulation.push(`(+1/半音上)`);
    } else if (modulation_num === 2 && b_mode_num === a_mode_num) {
        result_modulation.push(`(+2/全音上)`);
    } else if (modulation_num === 3 && b_mode_num === a_mode_num) {
        result_modulation.push(`(+3/短3度上)`);
    } else if (modulation_num === 4 && b_mode_num === a_mode_num) {
        result_modulation.push(`(+4/長3度上)`);
    } else if (modulation_num === 5 && b_mode_num === a_mode_num) {
        result_modulation.push(`(下属調)`);
    } else if (modulation_num === 6 && b_mode_num === a_mode_num) {
        result_modulation.push(`(±6:増4度上下)`);
    } else if (modulation_num === 7 && b_mode_num === a_mode_num) {
        result_modulation.push(`(属調)`);
    } else if (modulation_num === 8 && b_mode_num === a_mode_num) {
        result_modulation.push(`(-4/長3度下)`);
    } else if (modulation_num === 9 && b_mode_num === a_mode_num) {
        result_modulation.push(`(-3/短3度下)`);
    } else if (modulation_num === 10 && b_mode_num === a_mode_num) {
        result_modulation.push(`(-2/全音下)`);
    } else if (modulation_num === 11 && b_mode_num === a_mode_num) {
        result_modulation.push(`(-1/半音下)`);
    };

    //転調の種類を格納した配列を結合する
    result_modulation = result_modulation.join("<br>").replace(/,/g, "");

    //HTMLに転調の種類を書き込む
    document.getElementById("result_modulation").innerHTML = ` ${result_modulation}`;

    //転調の種類のテーブルのテーマをリセットする
    for (let step = 0; step < 12; step++) {
        document.getElementById("result_modulation").classList.remove(`modulationBorder${step}`);
    };
    //転調の種類のテーブルのテーマを色付けする
    document.getElementById("result_modulation").classList.add(`modulationBorder${modulation_num}`);
};

//転調元から転調先を表示するための関数(転調の間隔)
function keychange() {

    let note_number = Number(document.getElementById("note").value);
    let mode_number = scale_Container[Number(document.getElementById("mode").value.split('-')[1])]['addNum'];
    let after_mode_number = scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['addNum'];

    let answer = note_number - Number(mode_number);
    let sf_0 = mod((answer - 0), 12);
    let s_1 = mod((answer - 5), 12);
    let f_1 = mod((answer - 7), 12);
    let s_2 = mod((answer - 10), 12);
    let f_2 = mod((answer - 2), 12);
    let s_3 = mod((answer - 3), 12);
    let f_3 = mod((answer - 9), 12);
    let s_4 = mod((answer - 8), 12);
    let f_4 = mod((answer - 4), 12);
    let s_5 = mod((answer - 1), 12);
    let f_5 = mod((answer - 11), 12);
    let sf_6 = mod((answer - 6), 12);

    answer = note_number - Number(mode_number) + Number(after_mode_number);
    let note_sf_0 = mod((answer + 0), 12);
    let note_s_1 = mod((answer + 7), 12);
    let note_f_1 = mod((answer + 5), 12);
    let note_s_2 = mod((answer + 2), 12);
    let note_f_2 = mod((answer + 10), 12);
    let note_s_3 = mod((answer + 9), 12);
    let note_f_3 = mod((answer + 3), 12);
    let note_s_4 = mod((answer + 4), 12);
    let note_f_4 = mod((answer + 8), 12);
    let note_s_5 = mod((answer + 11), 12);
    let note_f_5 = mod((answer + 1), 12);
    let note_sf_6 = mod((answer + 6), 12);

    if (sf_0 === 0 || sf_0 === 2 || sf_0 === 4 || sf_0 === 6 || sf_0 === 7 || sf_0 === 9 || sf_0 === 11) {
        document.getElementById("result_origin").innerHTML
            = `転調元のキー：${sharp_note_name[note_number]} ${scale_Container[Number(document.getElementById("mode").value.split('-')[1])]['JapaneseName']}${sharp_key_signature[sf_0]}`;
    } else {
        document.getElementById("result_origin").innerHTML
            = `転調元のキー：${flat_note_name[note_number]} ${scale_Container[Number(document.getElementById("mode").value.split('-')[1])]['JapaneseName']}${flat_key_signature[sf_0]}`;
    };

    if (s_1 === 0 || s_1 === 2 || s_1 === 4 || s_1 === 6 || s_1 === 7 || s_1 === 9 || s_1 === 11) {
        document.getElementById("result_s_1").innerHTML
            = "#+1：" + sharp_note_name[note_s_1] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[s_1];
    } else {
        document.getElementById("result_s_1").innerHTML
            = "#+1：" + flat_note_name[note_s_1] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[s_1];
    };

    if (f_1 === 0 || f_1 === 2 || f_1 === 4 || f_1 === 6 || f_1 === 7 || f_1 === 9 || f_1 === 11) {
        document.getElementById("result_f_1").innerHTML
            = "♭+1：" + sharp_note_name[note_f_1] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[f_1];
    } else {
        document.getElementById("result_f_1").innerHTML
            = "♭+1：" + flat_note_name[note_f_1] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[f_1];
    };

    if (s_2 === 0 || s_2 === 2 || s_2 === 4 || s_2 === 6 || s_2 === 7 || s_2 === 9 || s_2 === 11) {
        document.getElementById("result_s_2").innerHTML
            = "#+2：" + sharp_note_name[note_s_2] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[s_2];
    } else {
        document.getElementById("result_s_2").innerHTML
            = "#+2：" + flat_note_name[note_s_2] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[s_2];
    };

    if (f_2 === 0 || f_2 === 2 || f_2 === 4 || f_2 === 6 || f_2 === 7 || f_2 === 9 || f_2 === 11) {
        document.getElementById("result_f_2").innerHTML
            = "♭+2：" + sharp_note_name[note_f_2] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[f_2];
    } else {
        document.getElementById("result_f_2").innerHTML
            = "♭+2：" + flat_note_name[note_f_2] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[f_2];
    };

    if (s_3 === 0 || s_3 === 2 || s_3 === 4 || s_3 === 6 || s_3 === 7 || s_3 === 9 || s_3 === 11) {
        document.getElementById("result_s_3").innerHTML
            = "#+3：" + sharp_note_name[note_s_3] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[s_3];
    } else {
        document.getElementById("result_s_3").innerHTML
            = "#+3：" + flat_note_name[note_s_3] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[s_3];
    };

    if (f_3 === 0 || f_3 === 2 || f_3 === 4 || f_3 === 6 || f_3 === 7 || f_3 === 9 || f_3 === 11) {
        document.getElementById("result_f_3").innerHTML
            = "♭+3：" + sharp_note_name[note_f_3] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[f_3];
    } else {
        document.getElementById("result_f_3").innerHTML
            = "♭+3：" + flat_note_name[note_f_3] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[f_3];
    };

    if (s_4 === 0 || s_4 === 2 || s_4 === 4 || s_4 === 6 || s_4 === 7 || s_4 === 9 || s_4 === 11) {
        document.getElementById("result_s_4").innerHTML
            = "#+4：" + sharp_note_name[note_s_4] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[s_4];
    } else {
        document.getElementById("result_s_4").innerHTML
            = "#+4：" + flat_note_name[note_s_4] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[s_4];
    };

    if (f_4 === 0 || f_4 === 2 || f_4 === 4 || f_4 === 6 || f_4 === 7 || f_4 === 9 || f_4 === 11) {
        document.getElementById("result_f_4").innerHTML
            = "♭+4：" + sharp_note_name[note_f_4] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[f_4];
    } else {
        document.getElementById("result_f_4").innerHTML
            = "♭+4：" + flat_note_name[note_f_4] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[f_4];
    };

    if (s_5 === 0 || s_5 === 2 || s_5 === 4 || s_5 === 6 || s_5 === 7 || s_5 === 9 || s_5 === 11) {
        document.getElementById("result_s_5").innerHTML
            = "#+5：" + sharp_note_name[note_s_5] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[s_5];
    } else {
        document.getElementById("result_s_5").innerHTML
            = "#+5：" + flat_note_name[note_s_5] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[s_5];
    };

    if (f_5 === 0 || f_5 === 2 || f_5 === 4 || f_5 === 6 || f_5 === 7 || f_5 === 9 || f_5 === 11) {
        document.getElementById("result_f_5").innerHTML
            = "♭+5：" + sharp_note_name[note_f_5] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[f_5];
    } else {
        document.getElementById("result_f_5").innerHTML
            = "♭+5：" + flat_note_name[note_f_5] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[f_5];
    };

    if (sf_6 === 0 || sf_6 === 2 || sf_6 === 4 || sf_6 === 6 || sf_6 === 7 || sf_6 === 9 || sf_6 === 11) {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6：" + sharp_note_name[note_sf_6] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[sf_6];
    } else {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6：" + flat_note_name[note_sf_6] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[sf_6];
    };

    if (Number(mode_number) === Number(after_mode_number)) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0：";
    } else if (sf_0 === 0 || sf_0 === 2 || sf_0 === 4 || sf_0 === 6 || sf_0 === 7 || sf_0 === 9 || sf_0 === 11) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0：" + sharp_note_name[note_sf_0] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + sharp_key_signature[sf_0];
    } else {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0：" + flat_note_name[note_sf_0] + " " + scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['JapaneseName'] + " " + flat_key_signature[sf_0];
    };
};

//コードネームを切り替えるための関数(ダイアトニック・コード)
function Chordschange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = Number(document.getElementById("tonic_note").value);

    let tonic = mod(tonic_note_number + 0, 12);
    let t1 = mod(tonic_note_number + 1, 12);
    let t2 = mod(tonic_note_number + 2, 12);
    let t3 = mod(tonic_note_number + 3, 12);
    let t4 = mod(tonic_note_number + 4, 12);
    let t5 = mod(tonic_note_number + 5, 12);
    let t6 = mod(tonic_note_number + 6, 12);
    let t7 = mod(tonic_note_number + 7, 12);
    let t8 = mod(tonic_note_number + 8, 12);
    let t9 = mod(tonic_note_number + 9, 12);
    let t10 = mod(tonic_note_number + 10, 12);
    let t11 = mod(tonic_note_number + 11, 12);

    let SOF;
    if (tonic_note_number === 0
        || tonic_note_number === 2
        || tonic_note_number === 4
        || tonic_note_number === 6
        || tonic_note_number === 7
        || tonic_note_number === 9
        || tonic_note_number === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} メジャー / ${noteNames[t9][18]} マイナー ：${sharp_key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} ハーモニック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} メロディック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} ハーモニック・メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[21]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[22]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[23]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[24]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[25]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[26]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[27]['diaChord4']}`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} メロディック・メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[28]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[15]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][21]} ${scale_Container[17]['diaChord4']}`;

    //同種短調を判定する
    let para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, 12);
    t1 = mod(para_tonic_note_number + 1, 12);
    t2 = mod(para_tonic_note_number + 2, 12);
    t3 = mod(para_tonic_note_number + 3, 12);
    t4 = mod(para_tonic_note_number + 4, 12);
    t5 = mod(para_tonic_note_number + 5, 12);
    t6 = mod(para_tonic_note_number + 6, 12);
    t7 = mod(para_tonic_note_number + 7, 12);
    t8 = mod(para_tonic_note_number + 8, 12);
    t9 = mod(para_tonic_note_number + 9, 12);
    t10 = mod(para_tonic_note_number + 10, 12);
    t11 = mod(para_tonic_note_number + 11, 12);

    if (para_tonic_note_number === 0
        || para_tonic_note_number === 2
        || para_tonic_note_number === 4
        || para_tonic_note_number === 6
        || para_tonic_note_number === 7
        || para_tonic_note_number === 9
        || para_tonic_note_number === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} マイナー / ${noteNames[tonic][2]}メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}`;


    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} ハーモニック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} メロディック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_MMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_6").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}`;

    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 0;

};

//コードネームをモードスケール併記に切り替えるための関数(ダイアトニック・コード)
function ChordsAndModeChange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = Number(document.getElementById("tonic_note").value);

    let tonic = mod(tonic_note_number + 0, 12);
    let t1 = mod(tonic_note_number + 1, 12);
    let t2 = mod(tonic_note_number + 2, 12);
    let t3 = mod(tonic_note_number + 3, 12);
    let t4 = mod(tonic_note_number + 4, 12);
    let t5 = mod(tonic_note_number + 5, 12);
    let t6 = mod(tonic_note_number + 6, 12);
    let t7 = mod(tonic_note_number + 7, 12);
    let t8 = mod(tonic_note_number + 8, 12);
    let t9 = mod(tonic_note_number + 9, 12);
    let t10 = mod(tonic_note_number + 10, 12);
    let t11 = mod(tonic_note_number + 11, 12);

    let SOF;
    if (tonic_note_number === 0
        || tonic_note_number === 2
        || tonic_note_number === 4
        || tonic_note_number === 6
        || tonic_note_number === 7
        || tonic_note_number === 9
        || tonic_note_number === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    ScaleLanguage = 'JapaneseName';

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} メジャー / ${noteNames[t9][18]} マイナー ：${sharp_key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　13:${noteNames[t9][18]}<br>${noteNames[tonic][2]}${scale_Container[0][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　<span class="avoid_note">11:${noteNames[t7][15]}</span>　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[1][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　11:${noteNames[t9][18]}　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[2][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]} 　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[3][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br><font size="-2">9:${noteNames[t9][18]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[4][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[5][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[6][ScaleLanguage]}</font>`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} ハーモニック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　11:${noteNames[t5][12]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br><font size="-2">♭9:${noteNames[t5][12]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[11][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br><font size="-2">#9:${noteNames[t8][16]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[12][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br><font size="-2">♭9:${noteNames[t9][18]}　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[13][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[7][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　13:${noteNames[t8][16]}<br>${noteNames[t11][22]}${scale_Container[8][ScaleLanguage]}</font>`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} メロディック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}<font size="-2"><br>9:${noteNames[t2][5]}　#11:${noteNames[t6][13]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[16][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}<font size="-2"><br>9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[17][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}<font size="-2"><br>9:${noteNames[t6][13]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[18][ScaleLanguage]}<br>(${noteNames[t4][9]}メロディック・メジャー)</font>`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}<font size="-2"><br>9:${noteNames[t8][16]}　11:${noteNames[t11][22]}　♭13:${noteNames[t2][5]}<br>${noteNames[t6][13]}${scale_Container[19][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}<font size="-2"><br><span class="avoid_note">♭9:${noteNames[t9][18]}</span>　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[20][ScaleLanguage]}<br>(${noteNames[t8][16]}${scale_Container[60]['diaChord4']}オルタード)</font>`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}<font size="-2"><br>9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　13:${noteNames[t6][13]}<br>${noteNames[t9][18]}${scale_Container[14][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}<font size="-2"><br><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t11][22]}${scale_Container[15][ScaleLanguage]}</font>`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} ハーモニック・メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[21]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　♭13:${noteNames[t8][17]}<br>${noteNames[tonic][2]}${scale_Container[21][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[22]['diaChord4']}<br><font size="-2">9${noteNames[t4][9]}　11:${noteNames[t7][15]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[22][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[23]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　<span class="avoid_note">(dim4:${noteNames[t8][17]})</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[23][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[24]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[24][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[25]['diaChord4']}<br><font size="-2">♭9:${noteNames[t8][17]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[25][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[26]['diaChord4']}<br><font size="-2">#9:${noteNames[t11][22]}　#11:${noteNames[t2][5]}　<span class="avoid_note">13:${noteNames[t5][12]}</span><br>${noteNames[t8][17]}${scale_Container[26][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[27]['diaChord4']}<br><font size="-2">♭9:${noteNames[tonic][2]}　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[27][ScaleLanguage]}</font>`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} メロディック・メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[28]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　<span class="avoid_note">♭13:${noteNames[t8][17]}</span><br>${noteNames[tonic][2]}${scale_Container[28][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[19]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　11:${noteNames[t7][15]}　♭13:${noteNames[t10][21]}<br>${noteNames[t2][5]}${scale_Container[19][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[20]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　<span class="avoid_note">(dim4:${noteNames[t8][17]})</span>　♭13:${noteNames[tonic][2]}<br>${noteNames[t4][9]}${scale_Container[20][ScaleLanguage]}<br>(${noteNames[t4][9]}${scale_Container[60]['diaChord4']}オルタード)</font>`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[14]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]}　11:${noteNames[t10][21]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[14][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[15]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t8][17]}</span>　11:${noteNames[tonic][2]}　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[15][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[16]['diaChord4']}<br><font size="-2">9:${noteNames[t10][21]}　#11:${noteNames[t2][5]}　<span class="avoid_note">13:${noteNames[t5][12]}</span><br>${noteNames[t8][17]}${scale_Container[16][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][21]} ${scale_Container[17]['diaChord4']}<br><font size="-2">9:${noteNames[tonic][2]}　#11:${noteNames[t4][9]}　13:${noteNames[t7][15]}<br>${noteNames[t10][21]}${scale_Container[17][ScaleLanguage]}</font>`;

    //同種短調を判定する
    let para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, 12);
    t1 = mod(para_tonic_note_number + 1, 12);
    t2 = mod(para_tonic_note_number + 2, 12);
    t3 = mod(para_tonic_note_number + 3, 12);
    t4 = mod(para_tonic_note_number + 4, 12);
    t5 = mod(para_tonic_note_number + 5, 12);
    t6 = mod(para_tonic_note_number + 6, 12);
    t7 = mod(para_tonic_note_number + 7, 12);
    t8 = mod(para_tonic_note_number + 8, 12);
    t9 = mod(para_tonic_note_number + 9, 12);
    t10 = mod(para_tonic_note_number + 10, 12);
    t11 = mod(para_tonic_note_number + 11, 12);


    if (para_tonic_note_number === 0
        || para_tonic_note_number === 2
        || para_tonic_note_number === 4
        || para_tonic_note_number === 6
        || para_tonic_note_number === 7
        || para_tonic_note_number === 9
        || para_tonic_note_number === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} マイナー / ${noteNames[tonic][2]}メジャー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[5][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[6][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　13:${noteNames[t9][18]}<br>${noteNames[tonic][2]}${scale_Container[0][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　<span class="avoid_note">11:${noteNames[t7][15]}</span>　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[1][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　11:${noteNames[t9][18]}　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[2][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]} 　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[3][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br><font size="-2">9:${noteNames[t9][18]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[4][ScaleLanguage]}</font>`;

    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} ハーモニック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　13:${noteNames[t8][16]}<br>${noteNames[t11][22]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　11:${noteNames[t5][12]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br><font size="-2">♭9:${noteNames[t5][12]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　♭13:${noteNames[tonic][2]}<br>${noteNames[t4][9]}${scale_Container[11][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br><font size="-2">#9:${noteNames[t8][16]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[12][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br><font size="-2">♭9:${noteNames[t9][18]}　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[13][ScaleLanguage]}</font>`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} メロディック・マイナー：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_MMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}<font size="-2"><br>9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　13:${noteNames[t6][13]}<br>${noteNames[t9][18]}${scale_Container[14][ScaleLanguage]}</font>`;
    document.getElementById("Para_MMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}<font size="-2"><br><span class="avoid_note">9:${noteNames[tonic][2]}</span>　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[17][ScaleLanguage]}</font>`;
    document.getElementById("Para_MMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}<font size="-2"><br>9:${noteNames[t2][5]}　#11:${noteNames[t6][13]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[16][ScaleLanguage]}</font>`;
    document.getElementById("Para_MMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}<font size="-2"><br>9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[17][ScaleLanguage]}</font>`;
    document.getElementById("Para_MMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}<font size="-2"><br>9:${noteNames[t6][13]}　11:${noteNames[t9][18]}　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[18][ScaleLanguage]}<br>(${noteNames[t4][9]}メロディック・メジャー)</font>`;
    document.getElementById("Para_MMin_dia_6").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}<font size="-2"><br>9:${noteNames[t8][16]}　11:${noteNames[t11][22]}　♭13:${noteNames[t2][5]}<br>${noteNames[t6][13]}${scale_Container[19][ScaleLanguage]}</font>`;
    document.getElementById("Para_MMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}<font size="-2"><br><span class="avoid_note">♭9:${noteNames[t9][18]}</span>　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[20][ScaleLanguage]}<br>(${noteNames[t8][16]}${scale_Container[60]['diaChord4']}オルタード)</font>`;

    document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 1;

};

//ディグリーネームで表示するための関数(ダイアトニック・コード)
document.getElementById("degree_button"); function degree() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    document.getElementById("Major_dia").innerHTML = "Ⅰ メジャー / Ⅵ マイナー";
    document.getElementById("Major_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Major_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Major_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Major_dia_4").innerHTML = "Ⅳ Maj7";
    document.getElementById("Major_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Major_dia_6").innerHTML = "Ⅵ m7";
    document.getElementById("Major_dia_7").innerHTML = "Ⅶ m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = "Ⅵ ハーモニック・マイナー";
    document.getElementById("Rel_HMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = "Ⅳ m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = "Ⅶ dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = "Ⅱ m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = "Ⅵ メロディック・マイナー";
    document.getElementById("Rel_MMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = "Ⅳ 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = "Ⅶ m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = "Ⅱ m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = "Ⅰ ハーモニック・メジャー";
    document.getElementById("Rel_HMaj_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = "Ⅰ メロディック・メジャー";
    document.getElementById("Rel_MMaj_dia_1").innerHTML = "Ⅰ 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = "Ⅲ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_Minor_dia").innerHTML = "Ⅰ マイナー / ♭Ⅲメジャー";
    document.getElementById("Para_Minor_dia_1").innerHTML = "Ⅰ m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = "♭Ⅲ Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_HMin_dia").innerHTML = "Ⅰ ハーモニック・マイナー";
    document.getElementById("Para_HMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Para_MMin_dia").innerHTML = "Ⅰ メロディック・マイナー";
    document.getElementById("Para_MMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = "Ⅳ 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = "Ⅶ m7(♭5)";

    document.getElementById("degree_button").className = "btn btn-success box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
};

//ダイアトニック・コードの着色をリセットする関数(ダイアトニック・コード)
function paintDiatonicChordsReset() {
    let diaNum = 1;
    for (let i = 1; i < 8; i++) {
        document.getElementById(`Major_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Rel_HMin_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Rel_MMin_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Rel_HMaj_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Rel_MMaj_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Para_Minor_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Para_HMin_dia_${diaNum}`).className = "NoteName";
        document.getElementById(`Para_MMin_dia_${diaNum}`).className = "NoteName";
        diaNum++;
    };
};

//ダイアトニック・コードのコードネームに対応する場所の色を変更する(ダイアトニック・コード)
function paintDiatonicChords() {

    paintDiatonicChordsReset();
    let paint_diatonic_chords = Number(document.getElementById("paint_diatonic_chords").value);

    if (paint_diatonic_chords === 0) {
        paintDiatonicChordsReset()
    } else if (paint_diatonic_chords === 1) {
        //Maj7を着色
        document.getElementById("Major_dia_1").classList.add("NoteOn");
        document.getElementById("Major_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_1").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_3").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_6").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_6").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 2) {
        //m7を着色
        document.getElementById("Major_dia_2").classList.add("NoteOn");
        document.getElementById("Major_dia_3").classList.add("NoteOn");
        document.getElementById("Major_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_5").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_1").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_4").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_5").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_2").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 3) {
        //7を着色
        document.getElementById("Major_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_7").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_7").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_5").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_5").classList.add("NoteOn");
        //ブルーに着色
        document.getElementById("Rel_MMin_dia_5").classList.add("NoteOn2");
        document.getElementById("Rel_MMaj_dia_3").classList.add("NoteOn2");
        document.getElementById("Para_MMin_dia_7").classList.add("NoteOn2");
        //グリーンに着色
        document.getElementById("Rel_HMaj_dia_3").classList.add("NoteOn3");
    } else if (paint_diatonic_chords === 4) {
        //m7(♭5)を着色
        document.getElementById("Major_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_3").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_2").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_2").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_6").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_7").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 5) {
        //augMaj7を着色
        document.getElementById("Rel_HMin_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_6").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_3").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_3").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 6) {
        //dim7を着色
        document.getElementById("Rel_HMin_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_7").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_7").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 7) {
        //mMaj7を着色
        document.getElementById("Rel_HMin_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_1").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_1").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 8) {
        //メジャー・トライアドを着色
        document.getElementById("Major_dia_1").classList.add("NoteOn");
        document.getElementById("Major_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_1").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_3").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_6").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_6").classList.add("NoteOn");
        //------------------
        document.getElementById("Major_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_7").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_7").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_5").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_5").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 9) {
        //マイナー・トライアドを着色
        document.getElementById("Major_dia_2").classList.add("NoteOn");
        document.getElementById("Major_dia_3").classList.add("NoteOn");
        document.getElementById("Major_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_3").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_5").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_1").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_4").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_5").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_2").classList.add("NoteOn");
        //------------------
        document.getElementById("Rel_HMin_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_4").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_1").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_1").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 10) {
        //ディミニッシュト・トライアドを着色
        document.getElementById("Major_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_HMin_dia_7").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_4").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_2").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_3").classList.add("NoteOn");
        document.getElementById("Para_Minor_dia_2").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_2").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_6").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_7").classList.add("NoteOn");
        //------------------
        document.getElementById("Rel_HMin_dia_5").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_7").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_7").classList.add("NoteOn");
    } else if (paint_diatonic_chords === 11) {
        //オーグメンテッド・トライアドを着色
        document.getElementById("Rel_HMin_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_MMin_dia_1").classList.add("NoteOn");
        document.getElementById("Rel_HMaj_dia_6").classList.add("NoteOn");
        document.getElementById("Rel_MMaj_dia_6").classList.add("NoteOn");
        document.getElementById("Para_HMin_dia_3").classList.add("NoteOn");
        document.getElementById("Para_MMin_dia_3").classList.add("NoteOn");
    };
};

let onoff_ChordsAndModeChange = [];

//調べたい主音切り替え関数(ダイアトニック・コード)
function ChordschangeAndChordsAndModeChange() {

    if (onoff_ChordsAndModeChange === 1) {
        onoff_ChordsAndModeChange = 1;
        document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        ChordsAndModeChange();

    } else if (onoff_ChordsAndModeChange === 0) {
        onoff_ChordsAndModeChange = 0;
        document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        Chordschange();
    };
};

