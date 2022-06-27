'use strict';

// インレイのポジションを判定する関数
function DetermineInlays(n) {
    if (n === 0 || n === 3 || n === 5 || n === 7 || n === 9 || n === 12 || n === 15 || n === 17 || n === 19 || n === 21 || n === 24 || n === 27 || n === 29) {
        return true;
    };
    return false;
};

//モーダルインターチェンジ候補のスケール名を日本語と英語に切り替えるボタンのための関数(指板用)
function ScaleLanguageJEFingerBoard() {
    if (ScaleLanguageNum === 0) {
        ScaleLanguage = 'JapaneseName';
        document.getElementById("scale_language_change_button").className = "btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum === 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").className = "btn btn-danger box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 0;
    };
    //モーダル・インターチェンジ候補のスケールの構成音の表示・非表示の切り替え(指板用)
    ModalCandidateSelectFingerBoard();
};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(指板用)
function ModalCandidateSelectFingerBoard() {
    //ルート音の情報を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);
    //言語の情報を取得する。
    let ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //弦の本数を取得する。
    let NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);
    //言語表示なしの場合 又は 音名が選択されていないとき
    if (NumberOfStrings === 0) {
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

//スケール画面とコード画面の切り替えをする関数
function ScaleAndChordsDrowing() {
    //現在がスケール画面とコード画面か判別する値
    let ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    document.getElementById("ScaleAndChords").innerHTML = "";
    document.getElementById("InformationBlock").innerHTML = "";
    document.getElementById("RootTonic").innerHTML = "";

    if (ScaleAndChordsDrowingSwitch === 0) {
        //音名の選択肢を書き込む
        document.getElementById("RootTonic").insertAdjacentHTML('afterbegin',
            `<label for="rootNumber"class="col-md-2 col-xl-1 pt-2 pb-2 mx-1">トニック
                <select id="rootNumber"class="form-select my-1" aria-label="Default select example"
                    onchange="FingerboardDataInfo()">
                    <option value=0 selected>C</option>
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
            </label>`);
        //スケールのメニューを書き込む
        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="col-md-4 col-xl-3 pt-2 pb-2 mx-1">調べたいスケール
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDataInfo()">
            </select>
        </label>`);
        //JavaScriptによってスケールの選択肢を追加する
        CeateScaleChoices("constituent_binary");
        // スケールの情報を書き込む
        document.getElementById("InformationBlock").insertAdjacentHTML('afterbegin', `
            <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        スケールの情報
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div id="Scale_name_text"></div>
                        <div id="Scale_Family_text"></div>
                        <div id="keySignatur_text"></div>
                        <div id="Scale_info_text"></div>
                        <div id="dominant_chord_text"></div>
                        <div id="Forte_number_text"></div>
                        <div id="Scale_number_text"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                構成音を含む主なコード<span class="use_chord_count"></span>
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">

                <table id="scaleChord_index" class="degree_box hidden_tablet">
                <tr class="">
                    <td class="Degree0">Ⅰ</td>
                    <td class="Degree1">#Ⅰ/♭Ⅱ</td>
                    <td class="Degree2">Ⅱ</td>
                    <td class="Degree3">#Ⅱ/♭Ⅲ</td>
                    <td class="Degree4">Ⅲ</td>
                    <td class="Degree5">Ⅳ</td>
                    <td class="Degree6">#Ⅳ/♭Ⅴ</td>
                    <td class="Degree7">Ⅴ</td>
                    <td class="Degree8">#Ⅴ/♭Ⅵ</td>
                    <td class="Degree9">Ⅵ</td>
                    <td class="Degree10">#Ⅵ/♭Ⅶ</td>
                    <td class="Degree11">Ⅶ</td>
                </tr>
                </table>

                <table id="scaleChordTable"></table>

            </div>
            </div>
        </div>
        `);
        //切り替えスイッチを一度空にする
        document.getElementById("ScaleAndChordsChange").innerHTML
            = ``
        //切り替えスイッチを書き込む
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=1 class="btn btn-primary col-md-3 col-xl-2 mb-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">コード画面へ</button>`;
        //スケールの構成音を含む主なコード一覧のテーブルを描画する関数
        scaleChordTableCreate();
    } else if (ScaleAndChordsDrowingSwitch === 1) {
        document.getElementById("RootTonic").insertAdjacentHTML('afterbegin',
            `<label for="rootNumber" class="col-md-2 col-xl-1 pt-2 pb-2 mx-1">ルート
                <select id="rootNumber" class="form-select my-1" aria-label="Default select example"
                    onchange="FingerboardDataInfo()">
                    <option value=0 selected>C</option>
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
            </label>`);
        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="col-md-4 col-xl-3 pt-2 pb-2 mx-1">調べたいコード
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDataInfo()">
            </select>
        </label>`);
        //JavaScriptによってコードの選択肢を追加する
        CreateChordChoices();
        document.getElementById("InformationBlock").insertAdjacentHTML('afterbegin', `
            <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                コードの情報
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">

                <div id="AddChordHTML"></div>
                <div id="AddChordNameHTML"></div>
                <div><br></div>
                <div id="AddChordInfoHTML"></div>
                <div id="AddChordInfo2HTML"></div>
                <div id="AddChordInfoOmit5HTML"></div>
                <div id="AddChordInfoTriToneHTML"></div>
                <div id="AddChordInfoSub2HTML"></div>

                </div>
            </div>
            </div>
        </div>

        <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                構成音を含む主なスケール<span class="use_scale_count"></span>
                </button>
            </h2>

            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">

                <label for="ModalCandidateSelect" class="box1 col-md-10 col-xl-4 pt-2 pb-0 mx-2">
                <select id="ModalCandidateSelect" class="form-select my-1" aria-label="Default select example"
                    onchange="ModalCandidateSelectFingerBoard()">
                    <option value=0 selected>英・米式表記で構成音を表示する</option>
                    <option value=1>イタリア式表記で構成音を表示する</option>
                    <option value=2>日本式表記で構成音を表示する</option>
                    <option value=3>ドイツ式表記で構成音を表示する</option>
                </select>
                </label>

                <div>
                    <button id="scale_language_change_button" class="btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2"
                        onclick="ScaleLanguageJEFingerBoard(1)">日本語⇔English</button>
                    <button id="onlyTonicMode" type="button" class="btn btn-success box1 col-10 col-md-6 col-xl-4 mx-2 mt-2"
                        onclick="onlyTonicModeSwitch(10)">
                    構成音を含む全てのスケールを表示する
                    </button>
                </div>

                <div class="accordion-body">
                    <div id="addHTML">
                    </div>
                </div>
            </div>
            </div>
        </div>`);
        //切り替えスイッチを一度空にする
        document.getElementById("ScaleAndChordsChange").innerHTML = ``
        //切り替えスイッチを書き込む
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=0 class="btn btn-success col-md-3 col-xl-2 mb-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">スケール画面へ</button>`;
    };
    //スケール画面とコード画面ごとに必要な処理を行う関数
    FingerboardDataInfo();
};

//指定した弦の本数だけtr(行)要素をtableに書き込む関数
function StringsTable() {
    let NumberOfStrings;
    if (Number(document.getElementById("do_app").value) === 0) {
        //⑩弦楽器の指板を可視化するの処理
        NumberOfStrings = Number(document.getElementById("NumberOfStrings").value); //弦の本数
    } else if (Number(document.getElementById("do_app").value) === 1) {
        //⑪指板からコード・ネームやスケール名を逆引きする
        //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「:」でそれぞれ分割
        let TuningVariation = document.getElementById("TuningVariation").value.split(':');
        //弦の本数を設定する
        let StringsCount = TuningVariation[0].split('-').map(Number);
        NumberOfStrings = StringsCount.length;
    };
    for (let i = 0; i < NumberOfStrings; i++) {
        //⑩弦楽器の指板を可視化するの時だけ実行する
        if (Number(document.getElementById("do_app").value) === 0) {
            document.getElementById("Tuning").insertAdjacentHTML('afterbegin',
                `<label for="StringTuning_${NumberOfStrings - i}" id="TuningString_${NumberOfStrings - i}" class="box1 col-md-1 col-xl-1 py-1 mx-1">【${NumberOfStrings - i}弦】
                <select id="StringTuning_${NumberOfStrings - i}" class="form-select my-1" aria-label="Default select example"
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
        };
        //弦のナンバーのtr(行)要素のidを書き込む
        document.getElementById("Fingerboard")
            .insertAdjacentHTML('afterbegin', `<tr class="box_border" id="${NumberOfStrings - i}_string"></tr>`)
    };
};

//下の方のフレットナンバーのtr（行）要素をtableに書き込む関数
function WriteFletNumber_tr(UOL) {
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let Num;
    //tr要素を書き込む
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumber${UOL}"></tr>`)
    //フレットの数に合わせてth要素を書き込む
    for (let i = 0; i < FletCount + 2; i++) {
        //利き手による条件分岐
        if (Number(document.getElementById("DominantHand").value) === 0) {
            Num = FletCount - i;
        } else {
            Num = i - 1;
        };
        //ポジションマークの数字の色を変える
        if (DetermineInlays(Num)) {
            document.getElementById(`FletNumber${UOL}`).insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById(`FletNumber${UOL}`).insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById(`FletNumber${UOL}`).insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        };
    };
};

//フィンガーボードの要素を描画する関数
function FingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""
    //下の方のフレットナンバーのtr（行）要素をtableに書き込む
    WriteFletNumber_tr('Lower');
    // //指定した弦の本数だけtr(行)要素をtableに書き込む。
    StringsTable();
    //上の方のフレットナンバーのtr（行）要素をtableに書き込む
    WriteFletNumber_tr('Upper');
};

// フレットに音名を描画する処理
function ToneNameCreate(RootNumber, NumberOfStrings, ConfigurationNotes, DominantHand) {
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    for (let st = 1; st < NumberOfStrings + 1; st++) {
        //以前に描画された音名を消去する。
        document.getElementById(`${st}_string`).innerHTML = "";
        //弦のチューニング項目からチューニング音を指定するvalueを読み込む。
        let TuningNumber = document.getElementById(`StringTuning_${st}`).value;
        if (DominantHand === 1) {
            //フレットボードの右端に、何弦かを表す数字とidを書き込む。
            document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);
        };
        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            if (ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), Octave)] === "　") {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), Octave)]}</td>`);
            } else {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), Octave)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), Octave)]}</Strong></td>`);
            }
            //利き手による条件分岐
            if (DominantHand === 0) {
                TuningNumber--;
            } else {
                TuningNumber++;
            };
        };
        if (DominantHand === 0) {
            //フレットボードの左端に、何弦かを表す数字とidを書き込む。
            document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);
        };
    };
};

//フレット上の音名を決定し、描画する関数
function FletCreate(NumberOfStrings) {
    //ルート音の情報を取得する。
    let RootNumber = Number(document.getElementById("rootNumber").value);
    //配列を検索用の値とスケール及びコードの構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let value = document.getElementById("constituent_binary").value.split('-');
    //スケール及びコードの配列を検索用の値
    let ScaleNum = Number(value[1]);
    //スケール及びコードのバイナリ値を配列に格納する
    onoff = value[0].split('/').map(Number);
    //スケール及びコードの音名の表記方法を取得する
    let key_signature_names = Number(document.getElementById(`key_signature_names`).value);
    //コード画像かスケール画面かを判定する値
    let ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);
    //構成音を格納する配列を定義する
    let ConfigurationNotes = [];
    ConfigurationNotes.splice(0);
    let SOF;
    let Configuration = ["", "", "", "", "", "", "", "", "", "", "", ""];
    if (ScaleAndChordsDrowingSwitch === 1) {
        //スケールの場合の処理
        //シャープとフラットの区別をする変数SOFに値を代入。
        SOF = DetermineKeySignature(mod(RootNumber - scale_Container[ScaleNum].addNum, Octave));
        for (let i = 0; i < Octave; i++) {
            if (onoff[i] >= 1) {
                Configuration[i] = onoff[i]
            };
        };
    } else if (ScaleAndChordsDrowingSwitch === 0) {
        //コードの場合の処理
        //コードネームの名前を配列から取り出す（mを判定するために「omit5,omit3」を除く）
        let ChordName = chord_container[ScaleNum].ChordName.replace("omit5", "").replace("omit3", "");
        let HowToRead = chord_container[ScaleNum].Name;
        let Minor = 0;
        //マイナーコードをキーの調号に合わせるための処理
        if (onoff[3] === 1 && HowToRead.match("マイナー")) {
            // マイナーコードの場合
            Minor = 9;
        };
        //コード・ネームのシャープとフラットを判定するための値を計算する。
        let SOF = DetermineKeySignature(mod(RootNumber - Minor, Octave));
        //それぞれの異名同音を判定する
        for (let i = 0; i < Octave; i++) {
            if (onoff[i] === 1) {
                Configuration[i] = DetermineBassSignature(SOF, ChordName, i)
                //異名同音判定が正しいか検証する
                Configuration[i] = EnharmonicRejudgement(Configuration[0], Configuration[i], noteNames[RootNumber][Configuration[0]], noteNames[mod(RootNumber + i, Octave)][Configuration[i]]);
            };
        };
        // console.log(Configuration);
    };
    //for文で構成音を生成する。
    for (let i = 0; i < Octave; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (Configuration[i] === 42) {
            ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, Octave)][key_signature_names][0]);
        } else if (Configuration[i] === 43) {
            ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, Octave)][key_signature_names][1]);
        } else if (Configuration[i] === 1) {
            ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, Octave)][key_signature_names][Configuration[i]]);
        } else if (Configuration[i] === "") {
            ConfigurationNotes.push("　");
        } else {
            ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, Octave)][key_signature_names][Number(Configuration[i])]);
        };
    };

    //利き手を判定し、フレットに音名を描画する
    ToneNameCreate(RootNumber, NumberOfStrings, ConfigurationNotes, Number(document.getElementById("DominantHand").value));

    //コード画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 0) {
        //シャープまたはフラット指定用に書き換えた数値を元に戻す。
        for (let i = 0; i < Configuration.length; i++) {
            if (Configuration[i] >= 2) {
                Configuration.splice(i, 1, 1);
            };
        };
        //コード・ネームの情報を判定する関数
        ChordCandidateInfo(onoff, RootNumber);
        //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
        CreateCandidate();
        ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
        ModalCandidateSelect(onoff, RootNumber);
    };
    //スケール画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 1) {
        //スケール情報を描画する関数
        ScaleInformationDrawing();
        //スケールの構成音を含む主なコード一覧のテーブルを描画する関数
        scaleChordTableCreate()
    };
    //構成音を戻り値として返す
    return Configuration;
};

//スケール画面とコード画面ごとに必要な処理を行う関数
function FingerboardDataInfo() {
    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let TuningData = [64, 59, 55, 50, 45, 40, 35, 30, 25, 20];
    let TuningVariationValue = document.getElementById("TuningVariation").value.split(':');
    let TuningInfo = TuningVariationValue[0].split('-').map(Number);

    for (let i = 0; i < TuningInfo.length; i++) {
        TuningData.splice(i, 1, TuningInfo[i]);
    };

    //弦の本数を設定する
    let NumberOfStrings = TuningVariation[Number(TuningVariationValue[1])]['NumberOfStrings'];
    document.getElementById("NumberOfStrings").selectedIndex = NumberOfStrings - 1;

    //フィンガーボードの要素を描画する関数
    FingerboardCreate();

    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            //mod12でチューニングを指定する。
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = mod(TuningData[i], Octave);
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};

//スケール画面とコード画面ごとに必要な処理を行う関数
function NumberOfStringsManually() {
    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let TuningData = [4, 11, 7, 2, 9, 4, 11, 6, 1, 8];
    let TuningVariationValue = document.getElementById("TuningVariation").value.split(':');

    let TuningInfo = TuningVariationValue[0].split('-').map(Number);

    for (let i = 0; i < TuningInfo.length; i++) {
        TuningData.splice(i, 1, TuningInfo[i]);
    };

    let NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    //フィンガーボードの要素を描画する関数
    FingerboardCreate();

    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = mod(TuningData[i], Octave);
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};

//チューニングの選択肢を表示するためのHTML要素(option)を追加するための関数
function CreateTuningVariation() {
    //コードを格納した配列の長さを取得する。
    let Num = TuningVariation.length;

    document.getElementById("TuningVariation").innerHTML = "";

    //配列の数だけコードの選択肢optionを追加する。
    for (let i = 0; i < TuningVariation.length; i++) {
        Num--
        if (Num === 0) {
            //メジャーコードを初期の選択肢にする。
            document.getElementById("TuningVariation").insertAdjacentHTML('afterbegin', `<option value=${TuningVariation[Num]['StringTuningStrings'].join('-')}:${Num} selected>${TuningVariation[Num]["TuningName"]}</option>`);
        } else {
            document.getElementById("TuningVariation").insertAdjacentHTML('afterbegin', `<option value=${TuningVariation[Num]['StringTuningStrings'].join('-')}:${Num}>${TuningVariation[Num]["TuningName"]}</option>`);
        };
    };

};

//弦のチューニングを決定する関数
function Tuning(NumberOfStrings) {

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    let TuningValue = document.getElementById("TuningVariation").value.split(':');

    //弦の本数を設定する
    let StringsNum = Number(TuningValue[1]) - 1;
    document.getElementById("NumberOfStrings").selectedIndex = TuningVariation[StringsNum]['NumberOfStrings'];

    //チューニングを変更する
    StringsTuning = TuningValue[0].split('-').map(Number);
    for (let i = 0; i < StringsTuning.length; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = StringsTuning[i];
        };
    };

};
