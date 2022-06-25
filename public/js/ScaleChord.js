'use strict';

//音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function ChangeEIJG() {
    //逆引き指板の時は処理を実行しない
    if (Number(document.getElementById("do_app").value) === 1) {
        return;
    };
    let root_number = Number(document.getElementById("rootNumber").value);
    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    for (let i = 0; i < 12; i++) {
        document.getElementById(`chord_${i}`).innerHTML = EIJG[key_signature_names][mod(root_number + i, 12)];
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
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${chord_container[Num].ChordBinary.join('/')}-${Num}>${chord_container[Num].ChordName}</option>`);
        };
    };
};

//スケールの選択肢を表示するためのHTML要素(option)を追加するための関数
function CeateScaleChoices(idName, ScaleLanguage = "JapaneseName") {
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

    //調号が#か♭かを判定する。
    let SOF = DetermineKeySignature(KeySignatureNum);

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
    if (scale_Container[Num].Info == "") {
        document.getElementById("Scale_info_text").innerHTML = "";
    } else {
        document.getElementById("Scale_info_text").innerHTML
            = `<br>${scale_Container[Num].Info}`;
    };

    // ドミナントコード上で使えるかを判定する
    if (scale_Container[Num]["diaChord4"] === "7") {
        document.getElementById("dominant_chord_text").innerHTML
            = `${noteNames[RootNumber][SOF]}7（ドミナント・セブン・コード）上で使用可能です。`;
    } else if (scale_dec == 1371) {
        document.getElementById("dominant_chord_text").innerHTML
            = `「スーパー・ロクリアン」ではなく「オルタード・スケール」として解釈する場合は、${noteNames[RootNumber][SOF]}7（ドミナント・セブン・コード）上で使用可能です。`;
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
    return onoff;
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

                    //調号が#か♭かを判定する。
                    let SOF = DetermineKeySignature(KeySignatureNum);

                    if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 1) {
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" title="${(chord_container[ChordTableNum - 1].Info).replaceAll("<br>", "")}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 42) {
                        SOF = 0;
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" title="${(chord_container[ChordTableNum - 1].Info).replaceAll("<br>", "")}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else if (scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1] === 43) {
                        SOF = 1;
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" title="${(chord_container[ChordTableNum - 1].Info).replaceAll("<br>", "")}" class="box_border Degree${ChordCountNum - 1}">${noteNames[mod((RootNumber + ChordCountNum - 1), 12)][SOF]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
                    } else {
                        //コードネームを書き込む
                        document.getElementById(`ChordNumber-${ChordTableNum}`)
                            .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - 1}" title="${(chord_container[ChordTableNum - 1].Info).replaceAll("<br>", "")}" class="box_border Degree${ChordCountNum - 1}">${AllNoteNames[mod((RootNumber + ChordCountNum - 1), 12)][0][scale_Container[Num]['ScaleNumBinary'][ChordCountNum - 1]]}${chord_container[ChordTableNum - 1]['ChordName']}</td>`);
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
    //配列の数だけHTML要素(div)を追加する。
    for (let i = 0; i < scale_Container.length; i++) {
        //ディグリー表記のために13回ループさせる。
        for (let k = 0; k < 13; k++) {
            let HTML_Info = document.getElementById("addHTML");
            HTML_Info.insertAdjacentHTML('beforebegin', `<div class="DegreeText DegreeText${k}" id="Modal_text_${k}_${i}"></div>`);
            if (scale_Container[i].Info === "") {
                document.getElementById(`Modal_text_${k}_${i}`).setAttribute("title", `${scale_Container[i].Mode}`);
            } else {
                document.getElementById(`Modal_text_${k}_${i}`).setAttribute("title", `${(scale_Container[i].Info).replaceAll("<br>", "")}`);
            };
        };
    };
};

//モーダル・インターチェンジの候補をディグリー表記で表示する関数
function ModalCandidateDegree() {
    //全てのスケールの要素を削除
    for (let i = 0; i < scale_Container.length; i++) {
        //ディグリー表記のために13回ループさせる。
        for (let k = 0; k < 13; k++) {
            document.getElementById(`Modal_text_${k}_${i}`).innerHTML = "";
        };
    };
    //Iの場合を書き込む
    for (let i = 0; i < scale_Container.length; i++) {
        document.getElementById(`Modal_text_12_${i}`).innerHTML
            = `Ⅰ ${scale_Container[i][ScaleLanguage]}　<font size="2"><span style="color:#808080">${scale_Container[i]["Mode"]}</span></font>`;
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

    for (let i = 0; i < 12; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Degree_table_${i}`).innerHTML = ``;
        document.getElementById(`Tension_table_${i}`).innerHTML = ``;
        for (let k = 0; k < 12; k++) {
            //いったんクラスを全て削除する
            document.getElementById(`Degree_table_${i}`).classList.remove(`Degree${k}`);
            document.getElementById(`Tension_table_${i}`).classList.remove(`Degree${k}`);
        };
    };

    for (let i = 0; i < 12; i++) {
        //テキストを追加する
        document.getElementById(`Degree_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, 12)][0]}`;
        document.getElementById(`Tension_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, 12)][1]}`;

        //クラスを追加する
        document.getElementById(`Degree_table_${i}`).classList.add(`Degree${mod(-root_position + i, 12)}`);
        if (Degree_Tension_array[mod(-root_position + i, 12)][1] !== "") {
            document.getElementById(`Tension_table_${mod(i, 12)}`).classList.add(`Degree${mod(-root_position + i, 12)}`);
        };
    };
};

//トライ・トーンを判定する（主な解決先コードを追加する）
function TriTone(onoff, RootNumber, num = 0, TriToneText) {
    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let SOF = DetermineKeySignature(RootNumber);
    if (onoff[num] + onoff[num + 6] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + num + 1, 12)][SOF]}　${noteNames[mod(RootNumber + num + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num + 4, 12)][SOF]}　${noteNames[mod(RootNumber + num + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 2, 12)][SOF]}　${noteNames[mod(RootNumber + num - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 5, 12)][SOF]}　${noteNames[mod(RootNumber + num - 5, 12)][SOF]}m　`);
    } else if (onoff[num + 3] + onoff[num + 9] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + num + 4, 12)][SOF]}　${noteNames[mod(RootNumber + num + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 5, 12)][SOF]}　${noteNames[mod(RootNumber + num - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 2, 12)][SOF]}　${noteNames[mod(RootNumber + num - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + num + 1, 12)][SOF]}　${noteNames[mod(RootNumber + num + 1, 12)][SOF]}m`);
    };
    return TriToneText;
};

//トライ・トーンを判定する（手前にいがちなコードを追加する）
function Sub2(onoff, RootNumber, num = 0, Sub2Text) {
    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let SOF = DetermineKeySignature(RootNumber);
    if (onoff[num] + onoff[num + 6] === 2) {
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + num + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + num + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + num + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + num - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + num - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[num + 3] + onoff[num + 9] === 2) {
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + num + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + num + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + num - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + num - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + num + 3, 12)][SOF]}m7(♭5)`);
    };
    return Sub2Text;
};

//コードのベース音が♯か♭かを判定する関数
function DetermineBassSignature(SOF, ChordName, Root) {
    let BassSOF;
    if (Root === 1 && ChordName.match("♭9")) {
        BassSOF = 4;
    } else if (Root === 3 && ChordName.match("#9")) {
        BassSOF = 6;
    } else if (Root === 6 && ChordName.match("#11")) {
        BassSOF = 13;
    } else if (Root === 6 && ChordName.match("♭5")) {
        BassSOF = 14;
    } else if (Root === 6 && ChordName === "dim7") {
        BassSOF = 14;
    } else if (Root === 8 && ChordName.match("#5")) {
        BassSOF = 16;
    } else if (Root === 8 && ChordName.match("aug")) {
        BassSOF = 16;
    } else if (Root === 8 && ChordName.match("♭13")) {
        BassSOF = 17;
    } else if (Root === 9 && ChordName === "dim7") {
        BassSOF = 20;
    } else if (Root === 3 && ChordName.charAt(0) === "m") {
        BassSOF = 8;
    } else if (Root === 10 && ChordName.charAt(0) === "7") {
        BassSOF = SOF;
    } else if (Root === 2 || Root === 5 || Root === 7 || Root === 9 || Root === 11) {
        BassSOF = SOF;
    } else {
        BassSOF = SOF;
    };
    return BassSOF;
};

//異名同音判定が正しいか検証する関数
function EnharmonicRejudgement(SOF, BassSOF, RootNote, BaseNote) {
    if (RootNote.includes("#")) {
        //ルート音が♯なのにベース音が♭
        if (BaseNote.includes("♭") || BaseNote.includes("&#119083;")) {
            console.log(RootNote, BaseNote);
            BassSOF = SOF;
        };
    };
    if (RootNote.includes("♭")) {
        //ルート音が♭なのにベース音が#
        if (BaseNote.charAt(1) === "#" || BaseNote.includes("&#119082;")) {
            console.log(RootNote, BaseNote);
            BassSOF = SOF;
        };
    };
    return [SOF, BassSOF];
};

//コード・ネームの情報を判定する関数（大雑把に言うと、トライトーンの判定、コードネームの判定、トーンクラスターの判定をしている。）
function ChordCandidateInfo(onoff, RootNumber) {
    //コード情報をリセット
    document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;

    //コードの構成音が何音か判定するための配列
    let HowManyTones = onoff.filter(n => n === 1);

    // トライトーンの判定をする
    let TriToneText = [`<br>トライトーンを含むので、ドミナント機能を持ちます。<br><br>【このコードの主な解決先】`];
    let Sub2Text = ["<br>【このコードの手前に居がちなコード】"]
    TriToneText = TriTone(onoff, RootNumber, 0, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 0, Sub2Text);
    TriToneText = TriTone(onoff, RootNumber, 1, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 1, Sub2Text);
    TriToneText = TriTone(onoff, RootNumber, 2, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 2, Sub2Text);

    //トライトーンが含まれてコードの構成音が3音以上の場合トライ・トーンの情報を書き込む
    if (TriToneText.length >= 2 && HowManyTones.length >= 2) {
        document.getElementById("AddChordInfoTriToneHTML").innerHTML
            = TriToneText.join().replaceAll(",", "");
        document.getElementById("AddChordInfoSub2HTML").innerHTML
            = Sub2Text.join().replaceAll(",", "");
    };

    //5音以上のコードを判定する。
    if (HowManyTones.length >= 5) {
        document.getElementById("AddChordInfo2HTML").innerHTML
            = `<br>5種類以上の異なるピッチクラスを使用するコードです。<br>混乱を防ぐために、ボイシング（和音の積み方）の併記を推奨します。`;
    } else {
        document.getElementById("AddChordInfo2HTML").innerHTML = ``;
    };

    //最低音を判定する
    let LowestNoteNumber = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所（最低音）を判定する
        if (onoff[i] === 1) {
            LowestNoteNumber = mod(i + RootNumber, 12);
            break;
        };
    };

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(LowestNoteNumber);
    //返り値を格納する変数
    let BassNumber;
    //コード・ネームを判定する。
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < 12; i++) {
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[j].ChordBinary[0] === onoff[mod(i + 0, 12)]
                && chord_container[j].ChordBinary[1] === onoff[mod(i + 1, 12)]
                && chord_container[j].ChordBinary[2] === onoff[mod(i + 2, 12)]
                && chord_container[j].ChordBinary[3] === onoff[mod(i + 3, 12)]
                && chord_container[j].ChordBinary[4] === onoff[mod(i + 4, 12)]
                && chord_container[j].ChordBinary[5] === onoff[mod(i + 5, 12)]
                && chord_container[j].ChordBinary[6] === onoff[mod(i + 6, 12)]
                && chord_container[j].ChordBinary[7] === onoff[mod(i + 7, 12)]
                && chord_container[j].ChordBinary[8] === onoff[mod(i + 8, 12)]
                && chord_container[j].ChordBinary[9] === onoff[mod(i + 9, 12)]
                && chord_container[j].ChordBinary[10] === onoff[mod(i + 10, 12)]
                && chord_container[j].ChordBinary[11] === onoff[mod(i + 11, 12)]) {

                //完全5度が省略可能かを判定する。
                let omitP5th = 0;
                //長2度(sus2)が含まれる場合
                if (onoff[mod(i + 2, 12)] === 1 && HowManyTones.length < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(i + 5, 12)] === 1 && HowManyTones.length < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(i + 7, 12)] === 1) {
                    omitP5th = 1;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML
                        = `<br>Root（ルート音）に対してP5th（完全5度）の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードネームの名前を配列から取り出す
                let ChordName = chord_container[j].ChordName;
                let HowToRead = chord_container[j].Name;
                let Minor = 0;
                //マイナーコードをキーの調号に合わせるための処理
                if (onoff[mod(i + 3, 12)] === 1 && HowToRead.match("マイナー")) {
                    // マイナーコードの場合
                    Minor = 9;
                };
                //コード・ネームのシャープとフラットを判定するための値を計算する。
                let SOF = DetermineKeySignature(mod(i + RootNumber - Minor, 12));

                //コードのベース音が♯か♭かを判定する
                let BassSOF = DetermineBassSignature(SOF, ChordName, mod(LowestNoteNumber - i - RootNumber, 12));

                //異名同音判定が正しいか検証する
                [SOF, BassSOF] = EnharmonicRejudgement(SOF, BassSOF, noteNames[mod(RootNumber + i, 12)][SOF], noteNames[LowestNoteNumber][BassSOF]);

                //軸音を含まないコード・ネームの判定（判定基準：ベース音の方がルート音よりも左側にある）
                if (0 === onoff[0] && 0 === mod(LowestNoteNumber - i - RootNumber, 12)) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                    //軸音を含まないコード・ネームの展開形の判定（判定基準：ルート音のスイッチが押されていない）
                } else if (0 === onoff[0]) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}/${noteNames[LowestNoteNumber][BassSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}・オーヴァー${noteNames[LowestNoteNumber][BassSOF]}（転回形）</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                    //軸音を含むコード・ネームの判定（判定基準：初回ループ時）
                } else if (i === 0) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[RootNumber][SOF]} ${ChordName}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[RootNumber][SOF]}${HowToRead}</font>`
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                    //軸音を含むコード・ネームの転回形の判定
                } else {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}/${noteNames[RootNumber][BassSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}・オーヴァー${noteNames[RootNumber][BassSOF]}（転回形）</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                };
                //コードネームに合わせて度数表記を描画する関数
                degree_position_drow(mod(i, 12));
                //マッチするものが見つかった場合はここでreturn
                BassNumber = mod(RootNumber + i, 12);
                return [BassNumber, true];;
            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        //マッチするもの無し
        if (i === 11) {
            document.getElementById("AddChordHTML").innerHTML
                = `<font size="6">N.C.</font>`;
            document.getElementById("AddChordNameHTML").innerHTML
                = `<font size="2">読み方：ノン・コード</font>`;
            document.getElementById("AddChordInfoHTML").innerHTML
                = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。<br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>※基本的に「UST（アッパー・ストラクチャー・トライアド）」及び、「ハイブリッド・コード」での解釈の可能性は表示されません。<br>→ <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
            document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
        };
    };

    //---------------------------------------
    //3音連続しているトーン・クラスターを判定する
    let NoteChain = 0;
    let tcj = 0;
    for (let i = 0; i < 11; i++) {
        //特定の場合と、+1と＋2の場所のスイッチがonかどうか判定する。
        NoteChain = onoff[mod(i, 12)] + onoff[mod(i + 1, 12)] + onoff[mod(i + 2, 12)];
        //3音以上連続している部分を見つける。
        if (NoteChain === 3) {
            tcj = 1;
            break;
        } else {
            NoteChain = 0;
        };
    };

    //4音以上音が連続しているトーン・クラスターを判定する(トーン・クラスターを格納した配列とマッチするものを見つける)
    let clear = 0;
    //12通りの場合について調べる。
    for (let i = 0; i < 12; i++) {
        //トーン・クラスターを格納した配列と照合する。
        for (let y = 0; y < ToneCluster.length; y++) {
            if (ToneCluster[y][0] === onoff[mod(i + 0, 12)]
                && ToneCluster[y][1] === onoff[mod(i + 1, 12)]
                && ToneCluster[y][2] === onoff[mod(i + 2, 12)]
                && ToneCluster[y][3] === onoff[mod(i + 3, 12)]
                && ToneCluster[y][4] === onoff[mod(i + 4, 12)]
                && ToneCluster[y][5] === onoff[mod(i + 5, 12)]
                && ToneCluster[y][6] === onoff[mod(i + 6, 12)]
                && ToneCluster[y][7] === onoff[mod(i + 7, 12)]
                && ToneCluster[y][8] === onoff[mod(i + 8, 12)]
                && ToneCluster[y][9] === onoff[mod(i + 9, 12)]
                && ToneCluster[y][10] === onoff[mod(i + 10, 12)]
                && ToneCluster[y][11] === onoff[mod(i + 11, 12)]
                || tcj === 1) {
                document.getElementById("AddChordHTML").innerHTML = `<font size="6">Tone cluster</font>`;
                document.getElementById("AddChordNameHTML").innerHTML = `<font size="2">読み方：トーン・クラスター</font>`;
                document.getElementById("AddChordInfoHTML").innerHTML = `「音塊」「密集音群」とも。<br>隣り合う3つ以上の音を含む和音です。`;
                document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
                document.getElementById("AddChordInfo2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                // 戻り値を返す
                BassNumber = RootNumber;
                return [BassNumber, false];
            };
        };
        if (clear === 1) {
            //トーン・クラスターと一致した場合はreturn
            // 戻り値を返す
            BassNumber = RootNumber;
            return [BassNumber, false];
        };
    };
    // 戻り値を返す
    BassNumber = LowestNoteNumber;
    return [BassNumber, false];
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
    ModalCandidateSelect(onoff, RootNumber);

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(0)

    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff)
};

//スケールの情報を格納する配列
let ConfigurationNotes = [];

//モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数(コード・コード/モード検索用)
function ModalTextAndNoteCreate(onoff, RootNumber) {

    //スケールを表示する言語の情報を取得する。
    let sigNameNum = Number(document.getElementById("ModalCandidateSelect").value);
    //予期しない値の場合はreturn
    if (sigNameNum >= 4) { return };

    //全てのスケールの要素を削除
    for (let i = 0; i < scale_Container.length; i++) {
        //ディグリー表記のために13回ループさせる。
        for (let k = 0; k < 13; k++) {
            document.getElementById(`Modal_text_${k}_${i}`).innerHTML = "";
        };
    };

    //一致するスケールの数
    let use_scale_count = 0;

    // 選択されている全ての構成音のルートのルートナンバーを格納する配列
    let all_root_number = [];
    //全てのオンオフとRootNumberを生成する

    //ピッチクラスが存在する場合、配列OnOffに1を代入する。
    for (let i = 0; i < 12; i++) {
        if (onoff[i] === 1) {
            all_root_number.push(i)
        };
    };

    //本来のルート音のナンバーを変数に代入しておく
    let OriginalRoot = RootNumber;
    let denominator;
    for (let y = 0; y < all_root_number.length; y++) {
        //ルートナンバーを得る
        RootNumber = mod(all_root_number[y] + OriginalRoot, 12);
        //onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
        for (let k = 0; k < all_root_number[y]; k++) {
            let delete_number = onoff.shift();
            onoff.push(delete_number);
        };
        for (let i = 0; i < scale_Container.length; i++) {
            //配列を空にする。
            ConfigurationNotes.splice(0);
            //選択された音の組み合わせがスケールの構成音と一致するか判定する。
            if (scale_Container[i]['ScaleNumBinary'][0] >= onoff[0]
                && scale_Container[i]['ScaleNumBinary'][1] >= onoff[1]
                && scale_Container[i]['ScaleNumBinary'][2] >= onoff[2]
                && scale_Container[i]['ScaleNumBinary'][3] >= onoff[3]
                && scale_Container[i]['ScaleNumBinary'][4] >= onoff[4]
                && scale_Container[i]['ScaleNumBinary'][5] >= onoff[5]
                && scale_Container[i]['ScaleNumBinary'][6] >= onoff[6]
                && scale_Container[i]['ScaleNumBinary'][7] >= onoff[7]
                && scale_Container[i]['ScaleNumBinary'][8] >= onoff[8]
                && scale_Container[i]['ScaleNumBinary'][9] >= onoff[9]
                && scale_Container[i]['ScaleNumBinary'][10] >= onoff[10]
                && scale_Container[i]['ScaleNumBinary'][11] >= onoff[11]) {

                let SOF;
                //シャープとフラットの区別をする変数SOFに値を代入。
                if (mod(RootNumber - scale_Container[i]['addNum'], 12) == 0
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 2
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 4
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 6
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 7
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 9
                    || mod(RootNumber - scale_Container[i]['addNum'], 12) == 11) {
                    SOF = 0;
                } else {
                    SOF = 1;
                };

                //スケール構成音のバイナリを配列に格納する。
                let Configuration = scale_Container[i]['ScaleNumBinary']

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
                    };
                };

                //スケールの情報をHTMLに書き込む。
                if (scale_Container[i]["Mode"] === "") {
                    document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, 12)}_${i}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[i][ScaleLanguage]}. . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${key_signature[mod(RootNumber - scale_Container[i]['addNum'], 12)]}</font>`;
                } else {
                    document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, 12)}_${i}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[i][ScaleLanguage]}</span> . . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${key_signature[mod(RootNumber - scale_Container[i]['addNum'], 12)]}　<span style="color:#808080">${noteNames[mod(RootNumber - scale_Container[i]['addNum'] - scale_Container[i]['Adjustment'], 12)][SOF]}${scale_Container[i]["Mode"]}</span></font>`;
                };
                use_scale_count++;
            } else {
                //含まないスケールは非表示にする
                document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, 12)}_${i}`).innerHTML = "";
            };
        };
        //各ルートの場合を想定するため配列をズラした配列を、一旦もとに戻す。
        for (let k = 0; k < 12 - all_root_number[y]; k++) {
            let delete_number = onoff.shift();
            onoff.push(delete_number);
        };
        //ルート音から始まるスケールだけを表示する
        if (onlyTonicModeState === 0) {
            denominator = scale_Container.length;
            break;
        } else {
            denominator = scale_Container.length * 12;
        };
    };
    document.querySelector('.use_scale_count').innerHTML = `（${use_scale_count} / ${denominator}）`;
};

//モーダル・インターチェンジの候補を表示する関数(コード・コード/モード検索用)
function ModalTextCreate() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();

    //ルート音を取得する
    let RootNumber = Number(document.getElementById('rootNumber').value);

    //コード・ネームの情報を判定する関数
    let [BassNumber, result] = ChordCandidateInfo(onoff, RootNumber);

    let count = 0;
    //onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
    for (let i = 0; i < mod(BassNumber - RootNumber, 12); i++) {
        let delete_number = onoff.shift();
        onoff.push(delete_number);
        count++;
    };

    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect(onoff, BassNumber);

    // 配列を元に戻すための値
    //onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
    for (let i = 0; i < onoff.length - count; i++) {
        let delete_number = onoff.shift();
        onoff.push(delete_number);
    };

};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
function ModalCandidateSelect(onoff, RootNumber) {
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
        ModalTextAndNoteCreate(onoff, RootNumber);
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

    //モーダル・インターチェンジの候補を表示する関数
    ModalTextCreate();
};

//音名スイッチのオンオフ状態を格納する配列
let onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//構成音を着色する関数
function NoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] !== 0) {
            document.getElementById(`chord_${i}`).className = "NoteName NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`chord_${i}`).className = "NoteName";
        };
    };
};

//構成音を着色する関数（コードスケール検索用）
function SearchNoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] !== 0) {
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
    //モーダル・インターチェンジの候補を表示する関数
    ModalTextCreate();
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
let onlyTonicModeState = 0;
function onlyTonicModeSwitch() {
    if (onlyTonicModeState === 0) {
        //ルート音から始まるスケールだけを表示する
        document.getElementById("onlyTonicMode").innerHTML = "ルート音が主音のスケールのみ表示する"
        document.getElementById("onlyTonicMode").classList.remove("btn-success");
        document.getElementById("onlyTonicMode").classList.add("btn-secondary");
        document.getElementById("onlyTonicMode").value = 1;
        onlyTonicModeState = 1;
    } else if (onlyTonicModeState === 1) {
        //全てのスケールを表示する
        document.getElementById("onlyTonicMode").innerHTML = "構成音を含む全てのスケールを表示する"
        document.getElementById("onlyTonicMode").classList.remove("btn-secondary");
        document.getElementById("onlyTonicMode").classList.add("btn-success");
        document.getElementById("onlyTonicMode").value = 0;
        onlyTonicModeState = 0;
    };
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ（逆引き指板用）
function ReverseLookupOnlyTonicModeSwitch() {
    //ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
    onlyTonicModeSwitch();
    //指板上の音を移調する関数
    transpose(0);
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ（コード用）
function ChordOnlyTonicModeSwitch() {
    //ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
    onlyTonicModeSwitch();

    ChordNoteSwitch();
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ（コード/スケール名を逆引き検索用）
function modal_interchange_ChordOnlyTonicModeSwitch() {
    //ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
    onlyTonicModeSwitch();
    //モーダル・インターチェンジの候補を表示する関数
    ModalTextCreate();
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ（指板用）
function fingerboard_ChordOnlyTonicModeSwitch() {
    //ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
    onlyTonicModeSwitch();

    ModalCandidateSelectFingerBoard();
};

