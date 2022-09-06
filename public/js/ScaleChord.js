'use strict';

//音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function ChangeEIJG() {
    //逆引き指板の時は処理を実行しない
    if (Number(document.getElementById("do_app").value) === 1) {
        return;
    };
    let root_number = Number(document.getElementById("rootNumber").value);
    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    for (let i = 0; i < Octave; i++) {
        document.getElementById(`chord_${i}`).innerHTML = EIJG[key_signature_names][mod(root_number + i, Octave)];
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
            document.getElementById(`${idName}`)
                .insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num].ScaleNumBinary.join('/')}-${Num} selected>${scale_Container[Num][ScaleLanguage]}</option>`);
        } else {
            document.getElementById(`${idName}`)
                .insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num].ScaleNumBinary.join('/')}-${Num}>${scale_Container[Num][ScaleLanguage]}</option>`);
        };
    };
};

//スケール情報を描画する関数
function ScaleInformationDrawing() {
    //scale_Container配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let value = document.getElementById("constituent_binary").value.split('-');

    //scale_Container配列を検索用の値
    let Num = value[1];
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

    let KeySignatureNum = mod(RootNumber - scale_Container[Num].addNum, Octave)
    let scaleFamilyNum = mod(RootNumber - scale_Container[Num].addNum - scale_Container[Num].Adjustment, Octave)

    //調号が#か♭かを判定する。
    let SOF = DetermineKeySignature(KeySignatureNum);

    //スケールファミリーの情報を表示
    if (scale_Container[Num].Mode === "") {
        document.getElementById("Scale_Family_text").innerHTML = "<br>";
    } else {
        document.getElementById("Scale_Family_text").innerHTML
            = `<br>${noteNames[scaleFamilyNum][SOF]} ${scale_Container[Num].Mode}`;
    };

    //スケールの名前を表示する
    document.getElementById("Scale_name_text").innerHTML
        = `English : <strong>${noteNames[RootNumber][SOF]} ${scale_Container[Num].EnglishName}</strong> <br>
        日本語 :<strong> ${noteNames[RootNumber][SOF]} ${scale_Container[Num].JapaneseName}</strong>`;

    //スケールの調号を判定する
    document.getElementById("keySignatur_text").innerHTML
        = `通常、調号は${key_signature[KeySignatureNum]}で記譜されます。<br>
        <img src="./image/${clef_image[KeySignatureNum]}" alt="調号" title="調号" id="clef2">`;

    //スケールの情報を表示
    if (scale_Container[Num].Info === "") {
        document.getElementById("Scale_info_text").innerHTML = "";
    } else {
        document.getElementById("Scale_info_text").innerHTML
            = `<br>${scale_Container[Num].Info}`;
    };

    // ドミナントコード上で使えるかを判定する
    if (scale_Container[Num]["diaChord4"] === "7") {
        document.getElementById("dominant_chord_text").innerHTML
            = `${noteNames[RootNumber][SOF]}7（ドミナント・セブン・コード）上で使用可能です。`;
    } else if (scale_dec === 1371) {
        document.getElementById("dominant_chord_text").innerHTML
            = `「スーパー・ロクリアン」ではなく「オルタード・スケール」として解釈する場合は、${noteNames[RootNumber][SOF]}7（ドミナント・セブン・コード）上で使用可能です。`;
    } else {
        document.getElementById("dominant_chord_text").innerHTML = "";
    };

    //フォルテナンバーを表示
    document.getElementById("Forte_number_text").innerHTML
        = `<br>Forte number：「${scale_Container[Num].ForteNumber}」`;
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
    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    let scale_binary_split = value[0].split('/').map(Number);
    //トニックの数値を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);
    //一度テーブルを空にする
    document.getElementById(`scaleChordTable`).innerHTML = "";
    let use_chord_count = 0;
    //全てのルート音の場合でスケールの構成音と一致するかを判定するために使う値
    let ChordTableNum = chord_container.length;
    for (let i = 0; i < chord_container.length; i++) {
        //tr要素を書き込む
        document.getElementById(`scaleChordTable`).insertAdjacentHTML('afterbegin', `<tr id="ChordNumber-${ChordTableNum}"></tr>`);
        let ChordCountNum = 11;
        let noneCount = 0;
        // 登録しているコードネームの数だけfor文でコードネームを判定して書き込む
        for (let k = 0; k < Octave; k++) {
            //スケールのバイナリが空ならテーブルも空。
            if (scale_binary_split[ChordCountNum - k] !== 0) {
                //スケールの構成音でコードネームが作れるか判定する
                if (chord_container[ChordTableNum - 1].ChordBinary[mod(k - 0, Octave)] <= scale_binary_split[11] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 1, Octave)] <= scale_binary_split[10] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 2, Octave)] <= scale_binary_split[9] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 3, Octave)] <= scale_binary_split[8] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 4, Octave)] <= scale_binary_split[7] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 5, Octave)] <= scale_binary_split[6] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 6, Octave)] <= scale_binary_split[5] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 7, Octave)] <= scale_binary_split[4] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 8, Octave)] <= scale_binary_split[3] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 9, Octave)] <= scale_binary_split[2] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 10, Octave)] <= scale_binary_split[1] &&
                    chord_container[ChordTableNum - 1].ChordBinary[mod(k - 11, Octave)] <= scale_binary_split[0]) {

                    //調号が#か♭かを判定する。
                    let SOF = DetermineKeySignature(scale_Container[Number(value[1])].ScaleNumBinary[ChordCountNum - k]);
                    //コードネームを変数に格納する。
                    let chordText = `${AllNoteNames[mod((RootNumber + ChordCountNum - k), Octave)][0][SOF]}${chord_container[ChordTableNum - 1].ChordName}`
                    //コードネームを書き込む。
                    document.getElementById(`ChordNumber-${ChordTableNum}`)
                        .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - k}" title="${(chord_container[ChordTableNum - 1].Info)
                            .replace(/<br>/g, "")}" class="box_border tdChord Degree${ChordCountNum - k}">${chordText}</td>`);

                    //音を再生するイベントを追加する。
                    let MIDINoteNumberArray = ChordTextToMIDINoteNumber(chordText)
                    document.getElementById(`${ChordTableNum - 1}-${ChordCountNum - k}`)
                        .addEventListener("click", function () {
                            //MIDIノートナンバーの配列を渡すと音を再生する関数
                            confirmationSound(MIDINoteNumberArray, 600);
                        }, false);

                    //構成音とマッチするコードの数をカウントする
                    use_chord_count++;
                    //一行丸ごと何も無いかチェックのためのカウント
                    noneCount++
                } else {
                    //空のテーブル要素を書き込む
                    document.getElementById(`ChordNumber-${ChordTableNum}`)
                        .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - k}" class="box_border ChordNotFound hidden_smart_phone"></td>`);
                };
            } else {
                //構成音が無い部分には空のテーブル要素を書き込む
                document.getElementById(`ChordNumber-${ChordTableNum}`)
                    .insertAdjacentHTML('afterbegin', `<td id="${ChordTableNum - 1}-${ChordCountNum - k}" class="box_border ChordNotFound hidden_smart_phone"></td>`);
            };
        };
        //一行丸ごと何も無い場合は、行ごと表示しない。
        if (noneCount === 0) {
            document.getElementById(`ChordNumber-${ChordTableNum}`).innerHTML = "";
        };
        ChordTableNum--;
    };
    //コードネームのヒット件数を表示する。
    document.querySelector('.use_chord_count').innerHTML = `（${use_chord_count} / ${chord_container.length * Octave}）`;
};

//スケールの情報を処理して書き込む関数(スケールで使用)
function ScaleKeySignature() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();
    //スケール情報を描画する関数
    onoff = ScaleInformationDrawing();
    //構成音を着色
    NoteNameColoring(onoff);

    //トニックの数値を取得する。
    let Root = Number(document.getElementById("rootNumber").value);
    KeyboardColoring(onoff, Root)

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
                document.getElementById(`Modal_text_${k}_${i}`).setAttribute("title", `${(scale_Container[i].Info).replace(/<br>/g, "")}`);
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
            = `Ⅰ ${scale_Container[i][ScaleLanguage]}　<font size="2"><span style="color:#808080">${scale_Container[i].Mode}</span></font>`;
    };
    document.querySelector('.use_scale_count').innerHTML = ``;
};

//コードネームに合わせて度数表記を描画する関数
function degree_position_drow(root_position) {
    //指板の時は処理を実行しない
    if (Number(document.getElementById("do_app").value) === 0 || Number(document.getElementById("do_app").value) === 1) {
        return;
    };

    for (let i = 0; i < Octave; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Degree_table_${i}`).innerHTML = ``;
        document.getElementById(`Tension_table_${i}`).innerHTML = ``;
        for (let k = 0; k < Octave; k++) {
            //いったんクラスを全て削除する
            document.getElementById(`Degree_table_${i}`).classList.remove(`Degree${k}`);
            document.getElementById(`Tension_table_${i}`).classList.remove(`Degree${k}`);
        };
    };

    for (let i = 0; i < Octave; i++) {
        //テキストを追加する
        document.getElementById(`Degree_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, Octave)][0]}`;
        document.getElementById(`Tension_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, Octave)][1]}`;

        //クラスを追加する
        document.getElementById(`Degree_table_${i}`).classList.add(`Degree${mod(-root_position + i, Octave)}`);
        if (Degree_Tension_array[mod(-root_position + i, Octave)][1] !== "") {
            document.getElementById(`Tension_table_${mod(i, Octave)}`).classList.add(`Degree${mod(-root_position + i, Octave)}`);
        };
    };
};

//トライ・トーンを判定する（主な解決先コードを追加する）
function TriTone(onoff, RootNumber, num = 0, TriToneText) {
    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let SOF = DetermineKeySignature(RootNumber);
    if (onoff[num] + onoff[num + 6] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + num + 1, Octave)][SOF]}　${noteNames[mod(RootNumber + num + 1, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num + 4, Octave)][SOF]}　${noteNames[mod(RootNumber + num + 4, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 2, Octave)][SOF]}　${noteNames[mod(RootNumber + num - 2, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 5, Octave)][SOF]}　${noteNames[mod(RootNumber + num - 5, Octave)][SOF]}m　`);
    } else if (onoff[num + 3] + onoff[num + 9] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + num + 4, Octave)][SOF]}　${noteNames[mod(RootNumber + num + 4, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 5, Octave)][SOF]}　${noteNames[mod(RootNumber + num - 5, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num - 2, Octave)][SOF]}　${noteNames[mod(RootNumber + num - 2, Octave)][SOF]}m　
            ${noteNames[mod(RootNumber + num + 1, Octave)][SOF]}　${noteNames[mod(RootNumber + num + 1, Octave)][SOF]}m`);
    };
    return TriToneText;
};

//トライ・トーンを判定する（手前にいがちなコードを追加する）
function Sub2(onoff, RootNumber, num = 0, Sub2Text) {
    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let SOF = DetermineKeySignature(RootNumber);
    if (onoff[num] + onoff[num + 6] === 2) {
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + num + 3, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num + 3, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num + 6, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num + 6, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 0, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num - 0, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 3, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num - 3, Octave)][SOF]}m7(♭5)`);
    } else if (onoff[num + 3] + onoff[num + 9] === 2) {
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + num + 6, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num + 6, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 3, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num - 3, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num - 0, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num - 0, Octave)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + num + 3, Octave)][SOF]}m7　${noteNames[mod(RootNumber + num + 3, Octave)][SOF]}m7(♭5)`);
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
        BassSOF = 21;
    } else if (Root === 11 && ChordName.match("Maj")) {
        BassSOF = 22;
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
            BassSOF = SOF;
        };
    };
    if (RootNote.includes("♭")) {
        //ルート音が♭なのにベース音が#
        if (BaseNote.charAt(1) === "#" || BaseNote.includes("&#119082;")) {
            BassSOF = SOF;
        };
    };
    return BassSOF;
};

// コードの異名同音をある程度調整する関数
function AdjustmentEnharmonic(ChordName, m3rd, aug5) {
    let adjustment = 0;
    //コードをキーの調号に合わせるための処理
    if (aug5 === 1 && ChordName.match("m\\(♭5\\)") ||
        aug5 === 1 && ChordName.match("m7\\(♭5\\)") ||
        aug5 === 1 && ChordName.match("dim7")) {
        adjustment = 11;
    } else if (aug5 === 1 && ChordName.match("blk")) {
        adjustment = 2;
    } else if (m3rd === 1 && ChordName.charAt(0) === "m") {
        adjustment = 9;
    };
    return adjustment;
};

//スラッシュコードの色付けをリセットする関数
function SlashChordClassRemove() {
    document.getElementById("MainChordInfoTable").classList.remove("tableFixed");
    document.getElementById("NameOfSlashChord").classList.remove("HybridChordColor");
    document.getElementById("HowToReadSlashChordName").classList.remove("HybridChordColor");
    document.getElementById("NameOfSlashChord").classList.remove("USTColor");
    document.getElementById("HowToReadSlashChordName").classList.remove("USTColor");
};

//アッパー・ストラクチャー・トライアドを求める関数
function UpperStructureTriad(onoff, SOF, RootNumber) {

    let ustArray = {
        NameOfChord: [],
        HowToRead: [],
        TopChordName: [],
        BottomChordName: [],
        TopHowToRead: [],
        BottomHowToRead: [],
        TopLowestNoteNumber: [],
        BottomLowestNoteNumber: [],
        rootName: [],
        bassName: [],
        onoff: [],
        TopChordOnoff: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []],
        iNum: [],
        mNum: [],
        HowManyTones: [],
        Found: [false, false, false, false, false, false],
    };
    // 別の解釈の可能性を格納する配列
    let OtherInterpretationsArray = [];

    //コード構成音を格納した配列をコピーする。
    ustArray.onoff = onoff.slice();
    //コードの構成音が何音か判定するための配列を作成
    ustArray.HowManyTones = ustArray.onoff.filter(n => n === 1);

    //5音以下はUSTとして解釈するとかえってややこしいから、ここではじく。
    if (ustArray.HowManyTones.length <= 5) {
        return OtherInterpretationsArray;
    };

    //コードの最低音を取得する
    ustArray.LowestNoteNumber = FindLowestNoteNumber(ustArray.onoff);

    //コードの最低音が先頭になるように配列を並び替える
    for (let i = 0; i < ustArray.LowestNoteNumber; i++) {
        let dn = ustArray.onoff.shift();
        ustArray.onoff.push(dn);
    };

    //コード・ネームが格納された配列から、マッチするトライアドを見つける。（分母のトライアドを判定）
    for (let i = 0; i < UST_BottomChordNumber.length; i++) {
        if (chord_container[UST_BottomChordNumber[i]].ChordBinary[0] <= ustArray.onoff[0]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[1] <= ustArray.onoff[1]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[2] <= ustArray.onoff[2]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[3] <= ustArray.onoff[3]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[4] <= ustArray.onoff[4]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[5] <= ustArray.onoff[5]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[6] <= ustArray.onoff[6]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[7] <= ustArray.onoff[7]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[8] <= ustArray.onoff[8]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[9] <= ustArray.onoff[9]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[10] <= ustArray.onoff[10]
            && chord_container[UST_BottomChordNumber[i]].ChordBinary[11] <= ustArray.onoff[11]) {
            //コードネームの名前と読み方を配列から取り出す
            ustArray.BottomChordName.push(chord_container[UST_BottomChordNumber[i]].ChordName);
            ustArray.BottomHowToRead.push(chord_container[UST_BottomChordNumber[i]].Name);
            //どのコードかを記憶
            ustArray.iNum.push(i);
        };
    };

    //分子のコードを判定していく。
    for (let j = 0; j < ustArray.BottomChordName.length; j++) {
        // 分母のトライアドを配列から削除
        for (let i = 0; i < 12; i++) {
            ustArray.TopChordOnoff[j].push(ustArray.onoff[i] - chord_container[UST_BottomChordNumber[ustArray.iNum[j]]].ChordBinary[i])
        };
        //分子に当たるコードの最低音を判定する。
        for (let i = 0; i <= Octave; i++) {
            //一番左側の押されているスイッチの場所（最低音）を判定する
            if (ustArray.TopChordOnoff[j][i] === 1) {
                ustArray.TopLowestNoteNumber.push(mod(i + RootNumber, Octave));
                break;
            };
        };
        // 残った最低音が先頭になるように配列を並び替える
        for (let i = 0; i < ustArray.TopLowestNoteNumber[j].length; i++) {
            let dn = ustArray.TopChordOnoff[j].shift();
            ustArray.TopChordOnoff[j].push(dn);
        };
        //TopChordOnoffから分子のトライアドを判定する
        for (let m = 0; m < Octave; m++) {
            //コード・ネームが格納された配列から、マッチするトライアドを見つける。
            for (let k = 0; k < TriadNumber.length; k++) {
                if (chord_container[TriadNumber[k]].ChordBinary[0] === ustArray.TopChordOnoff[j][mod(m + 0, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[1] === ustArray.TopChordOnoff[j][mod(m + 1, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[2] === ustArray.TopChordOnoff[j][mod(m + 2, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[3] === ustArray.TopChordOnoff[j][mod(m + 3, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[4] === ustArray.TopChordOnoff[j][mod(m + 4, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[5] === ustArray.TopChordOnoff[j][mod(m + 5, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[6] === ustArray.TopChordOnoff[j][mod(m + 6, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[7] === ustArray.TopChordOnoff[j][mod(m + 7, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[8] === ustArray.TopChordOnoff[j][mod(m + 8, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[9] === ustArray.TopChordOnoff[j][mod(m + 9, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[10] === ustArray.TopChordOnoff[j][mod(m + 10, Octave)]
                    && chord_container[TriadNumber[k]].ChordBinary[11] === ustArray.TopChordOnoff[j][mod(m + 11, Octave)]) {
                    //コード・ネームを配列から取り出す。
                    ustArray.TopChordName.push(chord_container[TriadNumber[k]].ChordName);
                    ustArray.TopHowToRead.push(chord_container[TriadNumber[k]].Name);
                    ustArray.mNum.push(m);
                    ustArray.Found[j] = true;
                };
            };
        };
        if (ustArray.Found[j] === false) {
            ustArray.TopChordName.push(undefined);
            ustArray.TopHowToRead.push('ノン・コード');
            ustArray.mNum.push(0);
        };
    };

    // スラッシュコードの色付けをリセットする
    SlashChordClassRemove();
    let wrote = false;
    for (let i = 0; i < ustArray.TopChordName.length; i++) {

        if (ustArray.TopChordName[i] !== undefined && ustArray.BottomChordName[i] !== undefined) {
            ustArray.NameOfChord
                .push(`${noteNames[mod(ustArray.mNum[i] + RootNumber, Octave)][SOF]}${ustArray.TopChordName[i]}/${noteNames[RootNumber][SOF]}${ustArray.BottomChordName[i]}`);
            ustArray.HowToRead
                .push(`${noteNames[mod(ustArray.mNum[i] + RootNumber, Octave)][SOF]}${ustArray.TopHowToRead[i]}・オーヴァー・${noteNames[RootNumber][SOF]} ${ustArray.BottomHowToRead[i]}（USTとして解釈）`);
            OtherInterpretationsArray
                .push(`・<span class="USTColor">${noteNames[mod(ustArray.mNum[i] + RootNumber, Octave)][SOF]}${ustArray.TopChordName[i]}/${noteNames[RootNumber][SOF]}${ustArray.BottomChordName[i]}</span><br>`);

            //最初に配列へ入れたUSTをHTMLに大きく書き込む。
            if (wrote === false) {
                document.getElementById('NameOfSlashChord')
                    .innerHTML = `${ustArray.NameOfChord[0]}`;
                document.getElementById('HowToReadSlashChordName')
                    .innerHTML = `${ustArray.HowToRead[0]}`;
                // グローバル変数へ代入する
                CHORD_NAME = `${ustArray.NameOfChord[0]}`;
                //書き込んだコードは配列から削除する。
                OtherInterpretationsArray.shift();
                //クラスを付与する。
                document.getElementById("MainChordInfoTable").classList.add("tableFixed");
                document.getElementById("NameOfSlashChord").classList.add("USTColor");
                document.getElementById("HowToReadSlashChordName").classList.add("USTColor");
            };
            wrote = true;
        };
    };

    // 別解釈をreturn
    return OtherInterpretationsArray;
};

//ハイブリッド・コードを求める関数
function HybridChord(onoff, SOF, RootNumber) {

    //各種情報を格納する配列を定義
    let hcArray = {
        NameOfChord: [],
        HowToRead: [],
        ChordName: [],
        rootName: [],
        bassName: [],
        onoff: [],
        iNum: [],
        jNum: [],
        HowManyTones: [],
        bassAdd: 0,
        LowestNoteNumber: 0,
        readabillity: true
    };
    // 別の解釈の可能性を格納する配列
    let OtherInterpretationsArray = [];

    //コード構成音を格納した配列をコピーする。
    hcArray.onoff = onoff.slice();
    //元々のコードの構成音が何音か判定するための配列を作成
    hcArray.HowManyTones = hcArray.onoff.filter(n => n === 1);

    //6音以上はUSTとして解釈するとかえってややこしいから、ここではじく。
    if (hcArray.HowManyTones.length >= 6 || hcArray.HowManyTones.length <= 3) {
        return OtherInterpretationsArray;
    };

    for (let i = 0; i <= Octave; i++) {
        //一番左側の押されているスイッチの場所（最低音）を判定する。
        if (hcArray.onoff[i] === 1) {
            //本当のベース音を削除。
            hcArray.onoff[i] = 0;
            hcArray.bassAdd = i;
            break;
        };
    };

    //べースの音名を取り出す
    hcArray.bassName.push(`${noteNames[mod(RootNumber + hcArray.bassAdd, Octave)][SOF]}`);

    //ハイブリッド・コードの分子に当たるコードの最低音を判定する。
    hcArray.LowestNoteNumber = FindLowestNoteNumber(hcArray.onoff);
    hcArray.LowestNoteNumber = mod(hcArray.LowestNoteNumber + RootNumber, Octave);

    // 残った最低音が先頭になるように配列を並び替える
    for (let i = 0; i < hcArray.LowestNoteNumber; i++) {
        let hc_delete_number = hcArray.onoff.shift();
        hcArray.onoff.push(hc_delete_number);
    };

    //分子コードの構成音が何音か判定するための配列を作成
    hcArray.HowManyTones = hcArray.onoff.filter(n => n === 1);
    for (let i = 0; i < Octave; i++) {
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[j].ChordBinary[0] === hcArray.onoff[mod(i + 0, Octave)]
                && chord_container[j].ChordBinary[1] === hcArray.onoff[mod(i + 1, Octave)]
                && chord_container[j].ChordBinary[2] === hcArray.onoff[mod(i + 2, Octave)]
                && chord_container[j].ChordBinary[3] === hcArray.onoff[mod(i + 3, Octave)]
                && chord_container[j].ChordBinary[4] === hcArray.onoff[mod(i + 4, Octave)]
                && chord_container[j].ChordBinary[5] === hcArray.onoff[mod(i + 5, Octave)]
                && chord_container[j].ChordBinary[6] === hcArray.onoff[mod(i + 6, Octave)]
                && chord_container[j].ChordBinary[7] === hcArray.onoff[mod(i + 7, Octave)]
                && chord_container[j].ChordBinary[8] === hcArray.onoff[mod(i + 8, Octave)]
                && chord_container[j].ChordBinary[9] === hcArray.onoff[mod(i + 9, Octave)]
                && chord_container[j].ChordBinary[10] === hcArray.onoff[mod(i + 10, Octave)]
                && chord_container[j].ChordBinary[11] === hcArray.onoff[mod(i + 11, Octave)]) {
                //コードネームの名前と読み方を配列から取り出す
                hcArray.ChordName.push(chord_container[j].ChordName);
                hcArray.HowToRead.push(chord_container[j].Name);
                //調整用の値を変数に代入
                hcArray.iNum.push(i);
                hcArray.jNum.push(j);
                hcArray.rootName.push(`${noteNames[mod(RootNumber + hcArray.LowestNoteNumber + i, Octave)][SOF]}`);

                if (chord_container[j].ChordName.match("omit")) {
                    //何もしない
                } else if (hcArray.HowManyTones.length >= 3) {
                    //分子コードが3音以上の場合は別解釈として格納する
                    OtherInterpretationsArray
                        .push(`・<span class="HybridChordColor">${noteNames[mod(RootNumber + hcArray.LowestNoteNumber + i, Octave)][SOF]}${chord_container[j].ChordName}/${hcArray.bassName}</span><br>`);
                };
            };
        };
    };

    if (hcArray.ChordName.length !== 0) {
        //ハイブリッド・コード表記が「見やすいか」を判定
        if (hcArray.rootName[0] === hcArray.bassName) {
            //ベース音が同一の場合
            hcArray.readabillity = false;
        } else if (hcArray.ChordName[0].match("N.C.")
            || hcArray.ChordName[0].match("omit")
            || hcArray.ChordName[0].match("blk")
            || hcArray.ChordName[0].match("add")
            || hcArray.ChordName[0].match("#5")
            || hcArray.ChordName[0].match(",")
            || hcArray.ChordName[0].match("\/")) {
            // 特定のコードネームの場合
            hcArray.readabillity = false;
        } else if (hcArray.HowManyTones.length >= 5 || hcArray.HowManyTones.length <= 2) {
            //分子コードが3音か4音以外の場合
            hcArray.readabillity = false;
        };

        hcArray.NameOfChord[0] = `${hcArray.rootName[0]}${hcArray.ChordName[0]}/${hcArray.bassName}`;
        hcArray.HowToRead[0] = `読み方：${hcArray.rootName[0]}${hcArray.HowToRead[0]}・オーヴァー${hcArray.bassName}（ハイブリッド・コードとして解釈）`;

        // スラッシュコードの色付けをリセットする
        SlashChordClassRemove();

        //「見やすい」ハイブリッド・コードの場合だけ大きく書き込む。
        if (hcArray.readabillity === true) {
            document.getElementById('NameOfSlashChord')
                .innerHTML = `${hcArray.NameOfChord[0]}`;
            document.getElementById('HowToReadSlashChordName')
                .innerHTML = `${hcArray.HowToRead[0]}`;
            //コードネームをグローバル変数へ代入する
            CHORD_NAME = `${hcArray.NameOfChord[0]}`;
            //書き込んだ場合、別解釈からは取り除く。
            OtherInterpretationsArray.shift();
            //クラスを付与する。
            document.getElementById("MainChordInfoTable").classList.add("tableFixed");
            document.getElementById("NameOfSlashChord").classList.add("HybridChordColor");
            document.getElementById("HowToReadSlashChordName").classList.add("HybridChordColor");
        };
    };
    // 別解釈をreturn
    return OtherInterpretationsArray;
};

//配列の中から最低音を判定するする関数
function FindLowestNoteNumber(onoff) {
    let LowestNoteNumber = 0;
    for (let i = 0; i <= Octave; i++) {
        //一番左側の押されているスイッチの場所（最低音）を判定する。
        if (onoff[i] === 1) {
            LowestNoteNumber = i;
            break;
        };
    };
    return LowestNoteNumber;
};

//コードネームを格納するグローバル変数
let CHORD_NAME;
//コード・ネームの情報を判定する関数（大雑把に言うと、トライトーンの判定、コードネームの判定、トーンクラスターの判定をしている。）
function ChordCandidateInfo(onoff, RootNumber = 0) {

    //コード情報をリセットする
    document.getElementById("NameOfChord").innerHTML
        = `<span class="NonChord">N.C.</span>`;
    document.getElementById("HowToReadChordName").innerHTML
        = `<span class="NonChord">読み方：ノン・コード</span>`;
    document.getElementById("ChordInfo").innerHTML
        = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。
                <br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>
                ※「ハイブリッド・コード」及び「UST（アッパー・ストラクチャー・トライアド）」での解釈は、表記が煩雑にならないものだけが表示されます。<br>
                → <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
    document.getElementById("HowManyChordTone").innerHTML = ``;
    document.getElementById("Omit5Info").innerHTML = ``;
    document.getElementById("TriToneInfo").innerHTML = ``;
    document.getElementById("Sub2Info").innerHTML = ``;
    document.getElementById("OtherInterpretations").innerHTML = ``;
    // スラッシュコードも空にする
    document.getElementById('NameOfSlashChord').innerHTML = ``
    document.getElementById('HowToReadSlashChordName').innerHTML = ``

    //---------------------------------------
    //返り値を格納する変数
    let BassNumber;
    //各情報を格納する配列を定義する。
    let info_Array = {
        ChordName: [],
        HowToRead: [],
        ChordInfo: [],
        HowManyChordTone: [],
        Omit5: [],
        TriTone: [],
        Sub2: [],
        iNum: [],
        jNum: [],
        LowestNoteNumber: 0
    };

    //コードの構成音が何音か判定するための配列を作成する。
    info_Array.HowManyChordTone = onoff.filter(n => n === 1);

    //最低音を判定する
    info_Array.LowestNoteNumber = FindLowestNoteNumber(onoff);
    info_Array.LowestNoteNumber = mod(info_Array.LowestNoteNumber + RootNumber, Octave);

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(mod(info_Array.LowestNoteNumber - RootNumber, Octave));

    //---------------------------------------
    // トライトーンの判定をする
    info_Array.TriTone = [`<br>トライトーンを含むので、ドミナント機能を持ちます。<br><br><span class="InfoPoint">【このコードの主な解決先】</span>`];
    info_Array.TriTone = TriTone(onoff, RootNumber, 0, info_Array.TriTone);
    info_Array.TriTone = TriTone(onoff, RootNumber, 1, info_Array.TriTone);
    info_Array.TriTone = TriTone(onoff, RootNumber, 2, info_Array.TriTone);

    info_Array.Sub2 = [`<br><span class="InfoPoint">【このコードの手前に居がちなコード】</span>`]
    info_Array.Sub2 = Sub2(onoff, RootNumber, 0, info_Array.Sub2);
    info_Array.Sub2 = Sub2(onoff, RootNumber, 1, info_Array.Sub2);
    info_Array.Sub2 = Sub2(onoff, RootNumber, 2, info_Array.Sub2);

    //トライトーンが含まれる場合トライ・トーンの情報を書き込む。
    if (info_Array.TriTone.length >= 2) {
        document.getElementById("TriToneInfo").innerHTML
            = info_Array.TriTone.join().replace(/,/g, "");
        document.getElementById("Sub2Info").innerHTML
            = info_Array.Sub2.join().replace(/,/g, "");
    };

    //---------------------------------------
    if (info_Array.HowManyChordTone.length >= 8) {
        // 8音以上だった場合はここでretrun（判定するまでもなくトーンクラスター）
        document.getElementById("NameOfChord").innerHTML = `Tone cluster`;
        document.getElementById("HowToReadChordName").innerHTML = `読み方：トーン・クラスター`;
        document.getElementById("ChordInfo").innerHTML = `「音塊」や「密集音群」とも呼ばれます。<br>隣り合う3つ以上の音を含む和音です。`;
        BassNumber = info_Array.LowestNoteNumber;
        return [BassNumber, false];
    } else if (info_Array.HowManyChordTone.length >= 5) {
        //5音以上のコードの場合、注釈を追加。
        document.getElementById("HowManyChordTone").innerHTML
            = `<br>5種類以上の異なるピッチクラスが使用されています。<br>混乱を防ぐために、ボイシング（和音の積み方）の併記を推奨します。`;
    };

    //---------------------------------------
    // 別の解釈を格納する配列
    let OtherInterpretationsArray = {
        title: `<span class="InfoPoint">【このコードの別解釈】</span>`,
        HybridChord: [],
        UST: [],
        Chord: []
    };

    //大まかな異名同音の判定
    let SOF = DetermineKeySignature(mod(info_Array.LowestNoteNumber + RootNumber, Octave));

    //ハイブリッド・コードを判定する
    OtherInterpretationsArray.HybridChord = HybridChord(onoff, SOF, RootNumber);

    //アッパー・ストラクチャー・トライアドを判定する
    OtherInterpretationsArray.UST = UpperStructureTriad(onoff, SOF, RootNumber);

    //---------------------------------------
    //トーン・クラスター（3半音連続している部分の有無）を判定する。
    if (info_Array.HowManyChordTone.length >= 3) {
        let NoteChain = 0;
        for (let i = 0; i < Octave; i++) {
            //トーンクラスターを見つける。（特定の音と、+1と＋2の場所のスイッチがonかどうか判定）
            NoteChain = onoff[mod(i, Octave)] + onoff[mod(i + 1, Octave)] + onoff[mod(i + 2, Octave)];
            // トーンクラスターだった場合はここでretrun
            if (NoteChain >= 3) {
                document.getElementById("NameOfChord").innerHTML = `Tone cluster`;
                document.getElementById("HowToReadChordName").innerHTML = `読み方：トーン・クラスター`;
                document.getElementById("ChordInfo").innerHTML = `「音塊」や「密集音群」とも呼ばれます。<br>隣り合う3つ以上の音を含む和音です。`;
                BassNumber = RootNumber;
                return [BassNumber, false];
            };
        };
    };

    //---------------------------------------
    //コード・ネームを判定する。
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < Octave; i++) {
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[j].ChordBinary[0] === onoff[mod(i + 0, Octave)]
                && chord_container[j].ChordBinary[1] === onoff[mod(i + 1, Octave)]
                && chord_container[j].ChordBinary[2] === onoff[mod(i + 2, Octave)]
                && chord_container[j].ChordBinary[3] === onoff[mod(i + 3, Octave)]
                && chord_container[j].ChordBinary[4] === onoff[mod(i + 4, Octave)]
                && chord_container[j].ChordBinary[5] === onoff[mod(i + 5, Octave)]
                && chord_container[j].ChordBinary[6] === onoff[mod(i + 6, Octave)]
                && chord_container[j].ChordBinary[7] === onoff[mod(i + 7, Octave)]
                && chord_container[j].ChordBinary[8] === onoff[mod(i + 8, Octave)]
                && chord_container[j].ChordBinary[9] === onoff[mod(i + 9, Octave)]
                && chord_container[j].ChordBinary[10] === onoff[mod(i + 10, Octave)]
                && chord_container[j].ChordBinary[11] === onoff[mod(i + 11, Octave)]) {
                //コードネームの名前を配列から取り出す
                info_Array.ChordName.push(chord_container[j].ChordName);
                info_Array.HowToRead.push(chord_container[j].Name);
                info_Array.ChordInfo.push(chord_container[j].Info);
                info_Array.iNum.push(i);
                info_Array.jNum.push(j);
            };
        };
    };

    //---------------------------------------
    //コードネームの情報をHTMLに書き込む
    if (info_Array.ChordName.length > 0) {
        //---------------------------------------
        // コードの異名同音をある程度調整するための値を計算する
        let adjustment = AdjustmentEnharmonic(info_Array.ChordName[0], onoff[mod(info_Array.iNum[0] + 3, Octave)], onoff[mod(info_Array.iNum[0] + 6, Octave)]);
        //コード・ネームのシャープとフラットを判定するための値を計算する。
        SOF = DetermineKeySignature(mod(info_Array.iNum[0] + RootNumber - adjustment, Octave));
        //コードのベース音が♯か♭かを判定する
        let BassSOF = DetermineBassSignature(SOF, info_Array.ChordName[0], mod(info_Array.LowestNoteNumber - info_Array.iNum[0] - RootNumber, Octave));
        //コードのルート音
        let RootName = noteNames[mod(RootNumber + info_Array.iNum[0], Octave)][SOF];

        //異名同音判定が正しいか検証する
        BassSOF = EnharmonicRejudgement(SOF, BassSOF, RootName, noteNames[info_Array.LowestNoteNumber][BassSOF]);

        //---------------------------------------
        //完全5度が省略可能かを判定する。
        if (onoff[mod(info_Array.iNum[0] + 7, Octave)] === 1 && info_Array.HowManyChordTone.length >= 3) {
            info_Array.Omit5.push(`<br>Root（ルート音）に対してP5th（完全5度）の音は、状況に応じて省略が可能です。`);
            if (info_Array.ChordName[0].match("sus") || info_Array.ChordName[0].match("omit5")) {
                //長2度(sus2)や完全4度(sus4)の場合をはじく。
                info_Array.Omit5.pop();
            };
        };
        if (onoff[mod(info_Array.iNum[0] + 7, Octave)] === 1 && onoff[mod(info_Array.iNum[0] + 8, Octave)] === 1) {
            info_Array.Omit5.push(`<br>P5th（完全5度）に対して♭13thはアボイド・ノートになります。♭13thテンションを使用したい場合は（特に意図がなければ）P5th（完全5度）の省略を推奨します。`);
        };

        if (onoff[mod(info_Array.iNum[0] + 4, Octave)] === 1 && onoff[mod(info_Array.iNum[0] + 5, Octave)] === 1) {
            info_Array.Omit5.push(`<br><br>M3rd（長3度）に対してP4th(11th)はアボイド・ノートになります。取り扱いには注意が必要です。`);
        };

        document.getElementById("Omit5Info").innerHTML = info_Array.Omit5.join().replace(/\,/g, "");

        //---------------------------------------
        //その他の解釈を配列に格納していく。
        for (let i = 1; i < info_Array.ChordName.length; i++) {
            let top = `${noteNames[mod(RootNumber + info_Array.iNum[i], Octave)][SOF]}`;
            let bottom = `${noteNames[info_Array.LowestNoteNumber][BassSOF]}`;
            if (info_Array.ChordName[i] === "dim7"
                || info_Array.ChordName[i] === "aug") {
                //何もしない
            } else if (top === bottom) {
                OtherInterpretationsArray.Chord
                    .push(`・${top}${info_Array.ChordName[i]}<br>`);
            } else {
                OtherInterpretationsArray.Chord
                    .push(`・${top}${info_Array.ChordName[i]}/${bottom}<br>`);
            };
        };

        //コードネーム内の「,」を正確に表示するための処理
        for (let i = 0; i < OtherInterpretationsArray.Chord.length; i++) {
            OtherInterpretationsArray.Chord[i] = OtherInterpretationsArray.Chord[i].replace(/\,/g, "_");
        };

        //その他の解釈が存在する場合、まとめてHTMLに書き込む。
        if (OtherInterpretationsArray.Chord.length >= 1
            || OtherInterpretationsArray.HybridChord.length >= 1
            || OtherInterpretationsArray.UST.length >= 1) {
            document.getElementById("OtherInterpretations").innerHTML
                = `${OtherInterpretationsArray.title}<br>
                ${OtherInterpretationsArray.Chord.join().replace(/\,/g, "").replace(/_/g, ",")}
                ${OtherInterpretationsArray.HybridChord.join().replace(/\,/g, "").replace(/_/g, ",")}
                ${OtherInterpretationsArray.UST.join().replace(/\,/g, "").replace(/_/g, ",")}`;
        };

        //---------------------------------------
        // コードネームと読み方と情報を書き込む
        if (0 === mod(info_Array.LowestNoteNumber - info_Array.iNum[0] - RootNumber, Octave)) {
            //コードネームをグローバル変数へ代入する
            CHORD_NAME = `${RootName}${info_Array.ChordName[0]}`;
            //転回形ではない
            document.getElementById("NameOfChord").innerHTML
                = `${CHORD_NAME}`;
            document.getElementById("HowToReadChordName").innerHTML
                = `読み方：${RootName}${info_Array.HowToRead[0]}`;
            document.getElementById("ChordInfo").innerHTML
                = `${info_Array.ChordInfo[0]}`;
        } else {
            //展開形
            //コードネームをグローバル変数へ代入する
            CHORD_NAME = `${RootName}${info_Array.ChordName[0]}/${noteNames[info_Array.LowestNoteNumber][BassSOF]}`;
            document.getElementById("NameOfChord").innerHTML
                = `${CHORD_NAME}`;
            document.getElementById("HowToReadChordName").innerHTML
                = `読み方：${RootName}${info_Array.HowToRead[0]}・オーヴァー${noteNames[info_Array.LowestNoteNumber][BassSOF]}（転回形）`;
            document.getElementById("ChordInfo").innerHTML
                = `${info_Array.ChordInfo[0]}`;
        };
        //コードネームに合わせて度数表記を描画する関数
        degree_position_drow(mod(info_Array.iNum[0], Octave));
        //---------------------------------------
        //マッチするものが見つかった場合はここでreturn
        BassNumber = mod(RootNumber + info_Array.iNum[0], Octave);
        return [BassNumber, true];
    };

    // 戻り値を返す
    BassNumber = info_Array.LowestNoteNumber;
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

    //構成音に則ってキーボードを着色する関数
    KeyboardColoring(onoff, RootNumber);

    //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
    CreateCandidate();

    ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect(onoff, RootNumber);

    //コードネームに合わせて度数表記を描画する関数
    degree_position_drow(0);

    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff);
};

//スケールの情報を格納するグローバル配列
let ConfigurationNotes = [];

//モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数(コード・コード/モード検索用)
function ModalTextAndNoteCreate(onoff, RootNumber, BassNumber) {

    //スケールを表示する言語の情報を取得する。
    let sigNameNum = Number(document.getElementById("ModalCandidateSelect").value);
    //予期しない値の場合はreturn
    if (sigNameNum >= 4) { return };
    //全てのスケールの要素を削除
    for (let i = 0; i < scale_Container.length; i++) {
        //ディグリー表記のために13回ループさせる。
        for (let k = 0; k < Octave + 1; k++) {
            document.getElementById(`Modal_text_${k}_${i}`).innerHTML = "";
        };
    };

    //配列を深いコピーする（元のグローバル変数であるonoffは変更されて欲しくないないため）
    let modal_onoff = Array.from(onoff);

    //コードが転回形の場合、modal_onoffをルート音に合わせた形ではなく、元に戻す。
    if (BassNumber !== RootNumber) {
        for (let i = 0; i < mod(RootNumber - BassNumber, Octave); i++) {
            let delete_number = modal_onoff.shift();
            modal_onoff.push(delete_number);
        };
    };

    //一致するスケールの数
    let use_scale_count = 0;
    // 選択されている全ての構成音のルートのルートナンバーを格納する配列
    let all_root_number = [];
    //構成音を含む全てのスケールを表示する場合、全てのオンオフとRootNumberを生成する
    if (onlyTonicModeState === 0) {
        all_root_number = [0];
    } else {
        //ピッチクラスが存在する場合、配列modal_onoffに1を代入する。
        for (let i = 0; i < Octave; i++) {
            if (modal_onoff[i] === 1) {
                all_root_number.push(i)
            };
        };
    };
    //本来のルート音のナンバーを変数に代入しておく
    let OriginalRoot = RootNumber;
    let denominator;

    for (let y = 0; y < all_root_number.length; y++) {
        //ルートナンバーを得る
        RootNumber = mod(all_root_number[y] + OriginalRoot, Octave);
        //modal_onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
        for (let k = 0; k < all_root_number[y]; k++) {
            let delete_number = modal_onoff.shift();
            modal_onoff.push(delete_number);
        };
        for (let i = 0; i < scale_Container.length; i++) {
            //配列を空にする。
            ConfigurationNotes.splice(0);
            //選択された音の組み合わせがスケールの構成音と一致するか判定する。
            if (scale_Container[i].ScaleNumBinary[0] >= modal_onoff[0]
                && scale_Container[i].ScaleNumBinary[1] >= modal_onoff[1]
                && scale_Container[i].ScaleNumBinary[2] >= modal_onoff[2]
                && scale_Container[i].ScaleNumBinary[3] >= modal_onoff[3]
                && scale_Container[i].ScaleNumBinary[4] >= modal_onoff[4]
                && scale_Container[i].ScaleNumBinary[5] >= modal_onoff[5]
                && scale_Container[i].ScaleNumBinary[6] >= modal_onoff[6]
                && scale_Container[i].ScaleNumBinary[7] >= modal_onoff[7]
                && scale_Container[i].ScaleNumBinary[8] >= modal_onoff[8]
                && scale_Container[i].ScaleNumBinary[9] >= modal_onoff[9]
                && scale_Container[i].ScaleNumBinary[10] >= modal_onoff[10]
                && scale_Container[i].ScaleNumBinary[11] >= modal_onoff[11]) {
                // 異名同音を判定
                let SOF = DetermineKeySignature(mod(RootNumber - scale_Container[i].addNum, Octave));
                //スケール構成音のバイナリを配列に格納する。
                let Configuration = scale_Container[i].ScaleNumBinary
                //for文でスケールの構成音を生成する。
                for (let i = 0; i < Octave; i++) {
                    //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
                    if (Configuration[i] === 0) {
                        //取り出さない（何もしない）。
                    } else if (Configuration[i] === 42) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, Octave)][0]);
                    } else if (Configuration[i] === 43) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, Octave)][1]);
                    } else if (Configuration[i] === 1) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, Octave)][SOF]);
                    } else {
                        ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, Octave)][sigNameNum][Number(Configuration[i])]);
                    };
                };
                //スケールの情報をHTMLに書き込む。
                if (scale_Container[i].Mode === "") {
                    document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, Octave)}_${i}`)
                        .innerHTML = `${noteNames[RootNumber][SOF]} ${scale_Container[i][ScaleLanguage]}. . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${key_signature[mod(RootNumber - scale_Container[i].addNum, Octave)]}</font>`;
                } else {
                    document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, Octave)}_${i}`)
                        .innerHTML = `${noteNames[RootNumber][SOF]} ${scale_Container[i][ScaleLanguage]}</span> . . .<span style="color:#dc143c">【${ConfigurationNotes.join('-')}】</span> <font size="-1">${key_signature[mod(RootNumber - scale_Container[i].addNum, Octave)]}　<span style="color:#808080">${noteNames[mod(RootNumber - scale_Container[i].addNum - scale_Container[i]['Adjustment'], Octave)][SOF]}${scale_Container[i].Mode}</span></font>`;
                };
                use_scale_count++;
            } else {
                //含まないスケールは非表示にする
                document.getElementById(`Modal_text_${mod(RootNumber - OriginalRoot, Octave)}_${i}`).innerHTML = "";
            };
        };
        //各ルートの場合を想定するため配列をズラした配列を、一旦もとに戻す。
        for (let k = 0; k < Octave - all_root_number[y]; k++) {
            let delete_number = modal_onoff.shift();
            modal_onoff.push(delete_number);
        };
        //ルート音から始まるスケールだけを表示する
        if (onlyTonicModeState === 0) {
            denominator = scale_Container.length;
            break;
        } else {
            denominator = scale_Container.length * Octave;
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
    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff);
    let count = 0;
    //onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
    for (let i = 0; i < mod(BassNumber - RootNumber, Octave); i++) {
        let delete_number = onoff.shift();
        onoff.push(delete_number);
        count++;
    };
    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect(onoff, RootNumber, BassNumber);
    // 配列を元に戻すための値
    //onoffを各ピッチクラスをルートにした順に並び替える。（各ルートの場合を想定するため、配列をズラす。）
    for (let i = 0; i < onoff.length - count; i++) {
        let delete_number = onoff.shift();
        onoff.push(delete_number);
    };
};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
function ModalCandidateSelect(onoff, RootNumber, BassNumber) {
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
        ModalTextAndNoteCreate(onoff, RootNumber, BassNumber);
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
        document.getElementById("scale_language_change_button").classList.remove("btn-danger");
        document.getElementById("scale_language_change_button").classList.add("btn-primary");
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum === 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").classList.remove("btn-primary");
        document.getElementById("scale_language_change_button").classList.add("btn-danger");
        ScaleLanguageNum = 0;
    };

    //モーダル・インターチェンジの候補を表示する関数
    ModalTextCreate();
};

//構成音を着色する関数
function NoteNameColoring(onoff) {
    for (let i = 0; i < Octave; i++) {
        if (onoff[i] !== 0) {
            document.getElementById(`chord_${i}`).className = "NoteName NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`chord_${i}`).className = "NoteName";
        };
    };
};

//構成音に則ってキーボードを着色する関数
function KeyboardColoring(onoff, Root) {

    //一旦全ての鍵盤の着色をリセットする
    for (let i = MIDINN_OfTopNote; i >= MIDINN_OfTopNote - NumberOfKeys; i--) {
        for (let j = 0; j < Octave; j++) {
            document.getElementById(`MIDI_note_number-${i}`).classList.remove(`Selected_keyboard${j}`);
        };
    };

    //鍵盤が足らない場合は増やす（13テンションを含むEとFがルートのコードの場合）
    if (Root === 4 && DetermineCompoundInterval(9) === true
        || Root === 5 && DetermineCompoundInterval(9) === true) {
        WriteResponsiveKeyboard(Octave * 3, 89);
    } else {
        WriteResponsiveKeyboard(Octave * 3 - 5, 84);
    };

    //良い感じに鍵盤の真ん中の方で着色する
    if (CHORD_NAME === undefined && Root <= 8) {
        Root += Octave;
    } else if (Root <= 5) {
        Root += Octave;
    };

    let array = [];

    // 配列onoffをMIDIノートナンバーに変換する
    for (let i = 0; i < Octave; i++) {
        if (onoff[i] >= 1) {
            let CompoundInterval = DetermineCompoundInterval(i);
            if (CompoundInterval === true) {
                array.push(Root + Octave * 5 + i);
            } else {
                array.push(Root + Octave * 4 + i);
            };
        };
    };

    //スケールの時はルートの1オクターブ上も着色する
    if (CHORD_NAME === undefined) {
        array.push(Root + Octave * 5);
    };

    //度数に基づいて着色する
    for (let i = 0; i < array.length; i++) {
        //鍵盤が描画されている場合のみ処理を実行する
        if (document.getElementById(`MIDI_note_number-${array[i]}`) !== null) {
            let j = mod(array[i] - Root, Octave);
            document.getElementById(`MIDI_note_number-${array[i]}`).classList.toggle(`Selected_keyboard${j}`);
        };
    };

    //コードやスケールの音を再生するイベントを付与する
    addPlayButtonEvent(array);
};

//コードやスケールの音を再生するイベントを付与する関数
function addPlayButtonEvent(array) {
    //音声で確認するための音を格納する配列
    let confirmationArray = []

    if (CHORD_NAME === undefined) {
        for (let i = 0; i < array.length; i++) {
            //スケールの時は1音ずつ格納する
            confirmationArray.push([array[i]])
        };
        //低い音から並び替える
        confirmationArray.sort();
        //ボタンイベントとして登録する
        document.getElementById("playButton")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArray, 400);
            }, false);
        document.getElementById("Keyboard")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArray, 400);
            }, false);
        document.getElementById("NoteNameBox")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArray, 400);
            }, false);
    } else {
        // アルペジオで再生する
        let confirmationArpeggioArray = [];
        for (let i = 0; i < array.length; i++) {
            //スケールの時は1音ずつ格納する
            confirmationArpeggioArray.push([array[i]])
        };
        //低い音から並び替える
        confirmationArpeggioArray.sort();
        //ボタンイベントとして登録する
        document.getElementById("playArpeggioButton")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArpeggioArray, 400);
            }, false);
        document.getElementById("Keyboard")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArpeggioArray, 400);
            }, false);
        //---------------------------
        //コードで再生する
        // コードの時はまとめて配列に格納する
        confirmationArray.push(array);
        //ボタンイベントとして登録する
        document.getElementById("playButton")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArray, 600);
            }, false);
        document.getElementById("NoteNameBox")
            .addEventListener("click", function () {
                //MIDIノートナンバーの配列を渡すと音を再生する関数
                confirmationSound(confirmationArray, 600);
            }, false);
    };
};

//複音程かどうかを判定する関数
function DetermineCompoundInterval(Root) {
    let CompoundInterval = false;

    //グローバル変数が定義されていない場合
    if (CHORD_NAME === undefined) {
        return CompoundInterval;
    };

    if (Root === 1 && CHORD_NAME.match("♭9")) {
        CompoundInterval = true;
    } else if (Root === 2 && CHORD_NAME.match("9") || Root === 2 && CHORD_NAME.match("blk")) {
        CompoundInterval = true;
    } else if (Root === 3 && CHORD_NAME.match("#9")) {
        CompoundInterval = true;
    };

    if (Root === 5 && CHORD_NAME.match("11") || Root === 2 && CHORD_NAME.match("11")) {
        CompoundInterval = true;
    } else if (Root === 6 && CHORD_NAME.match("#11")) {
        CompoundInterval = true;
    };

    if (Root === 8 && CHORD_NAME.match("♭13")) {
        CompoundInterval = true;
    } else if (Root === 9 && CHORD_NAME.match("13") || Root === 5 && CHORD_NAME.match("13") || Root === 2 && CHORD_NAME.match("13")) {
        CompoundInterval = true;
    };

    return CompoundInterval;
};

//音名からモード・コード検索用のスイッチの役割を果たす関数(コード/モード検索用)
function NoteSwitch(Num) {
    //音名スイッチのオンオフ状態を格納するグローバル配列に書き込む
    if (onoff[Num] === 0) {
        onoff[Num] = 1;
    } else if (onoff[Num] === 1) {
        onoff[Num] = 0;
    };
    // 選択した音を着色・脱色する
    if (onoff[Num] !== 0) {
        document.getElementById(`chord_${Num}`).className = "NoteName NoteName_cursor_pointer NoteOn";
    } else if (onoff[Num] === 0) {
        document.getElementById(`chord_${Num}`).className = "NoteName NoteName_cursor_pointer NoteName_Switchc_Search";
    };
    //モーダル・インターチェンジの候補を表示する関数
    ModalTextCreate();
};

//ルート音から始まるスケールだけを表示するか否かを切り替えるスイッチ
let onlyTonicModeState = 0;
function onlyTonicModeSwitch(app_num) {
    document.getElementById("onlyTonicMode").innerHTML = ``
    if (onlyTonicModeState === 0) {
        //ルート音から始まるスケールだけを表示する
        document.getElementById("onlyTonicMode").innerHTML = `<i class="fa-solid fa-down-left-and-up-right-to-center"></i> 構成音を含む全てのスケールを表示中`
        document.getElementById("onlyTonicMode").classList.remove("btn-success");
        document.getElementById("onlyTonicMode").classList.add("btn-secondary");
        document.getElementById("onlyTonicMode").value = 1;
        onlyTonicModeState = 1;
    } else if (onlyTonicModeState === 1) {
        //全てのスケールを表示する
        document.getElementById("onlyTonicMode").innerHTML = `<i class="fa-solid fa-up-right-and-down-left-from-center"></i>  構成音を含む全てのスケールを表示する`
        document.getElementById("onlyTonicMode").classList.remove("btn-secondary");
        document.getElementById("onlyTonicMode").classList.add("btn-success");
        document.getElementById("onlyTonicMode").value = 0;
        onlyTonicModeState = 0;
    };
    if (app_num === 1) {
        //（コード用）
        ChordNoteSwitch();
    } else if (app_num === 3) {
        //（コード/スケール名を逆引き検索用）
        //モーダル・インターチェンジの候補を表示する関数
        ModalTextCreate();
    } else if (app_num === 3.5) {
        WriteFingerboard();
        //モーダル・インターチェンジの候補を表示する関数
        ModalTextCreate();
    } else if (app_num === 10) {
        // （指板用）
        ModalCandidateSelectFingerBoard();
    } else if (app_num === 11) {
        // （逆引き指板用）
        //指板上の音を移調する関数
        transpose(0);
    };
};