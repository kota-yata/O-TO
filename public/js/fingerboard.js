
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


//基本的なデータを取得する
function DataCatch() {
    //言語の情報を取得する。
    let ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //弦の本数を取得する。
    let NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    return { ModalSelectNum, NumberOfStrings }
};


//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(指板用)
function ModalCandidateSelectFingerBoard() {

    //基本的なデータを取得する
    let { ModalSelectNum, NumberOfStrings } = DataCatch();

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

    let ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    document.getElementById("ScaleAndChords").innerHTML = "";
    document.getElementById("InformationBlock").innerHTML = "";
    document.getElementById("RootTonic").innerHTML = "";

    if (ScaleAndChordsDrowingSwitch === 0) {
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

        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="col-md-4 col-xl-3 pt-2 pb-2 mx-1">調べたいスケール
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDataInfo()">
            </select>
        </label>`);

        //JavaScriptによってスケールの選択肢を追加する
        CeateScaleChoices("constituent_binary");

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

                <!-- スケールの構成音を含むコード一覧を描画するテーブル -->
                <table id="scaleChordTable"></table>

            </div>
            </div>
        </div>
        `);
        //一度空にする
        document.getElementById("ScaleAndChordsChange").innerHTML
            = ``
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
                        onclick="ScaleLanguageJEFingerBoard()">日本語⇔English</button>
                    <button id="onlyTonicMode" type="button" class="btn btn-success box1 col-10 col-md-6 col-xl-4 mx-2 mt-2"
                        onclick="fingerboard_ChordOnlyTonicModeSwitch()">
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

        document.getElementById("ScaleAndChordsChange").innerHTML = ``
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

        //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
        let TuningVariation = document.getElementById("TuningVariation").value.split(':');

        //弦の本数を設定する
        let StringsCount = TuningVariation[0].split('-');
        NumberOfStrings = StringsCount.length;
    };

    let Num = NumberOfStrings;

    for (let i = 0; i < NumberOfStrings; i++) {
        //⑩弦楽器の指板を可視化するの時だけ実行する
        if (Number(document.getElementById("do_app").value) === 0) {
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
        };
        //弦のナンバーのtr(行)要素のidを書き込む
        document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr class="box_border" id="${Num}_string"></tr>`)
        Num--
    };

};

//左利き用フィンガーボードの要素を描画する関数
function LeftyFingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""

    //下段のフレットナンバーのtr(行)要素をtableに書き込む。
    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let Num = -1;
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
        Num++
    };

    // //指定した弦の本数だけtr(行)要素をtableに書き込む。
    StringsTable();

    //上段のフレットナンバーのtr(行)要素をtableに書き込む。
    Num = -1;
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
        Num++
    };
};

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

// 右利き用フレットに音名を描画する
function RightyToneNameCreate() {
    for (let st = 1; st < NumberOfStrings + 1; st++) {
        //フレットの数を取得する
        FletNum = Number(document.getElementById(`NumberOfFlet`).value);
        FletCount = FletNum;
        //以前に描画された音名を消去する。
        document.getElementById(`${st}_string`).innerHTML = "";
        //弦のチューニング項目からチューニング音を指定するvalueを読み込む。
        TuningNumber = document.getElementById(`StringTuning_${st}`).value;

        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            if (ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)] === "　") {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</td>`);
            } else {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), 12)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</Strong></td>`);
            }
            TuningNumber--
            FletNum--
        };
        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);
    };
};

// 左利き用フレットに音名を描画する
function LeftyToneNameCreate() {
    for (let st = 1; st < NumberOfStrings + 1; st++) {
        //フレットの数を取得する
        FletCount = Number(document.getElementById(`NumberOfFlet`).value);
        FletNum = 0;
        //以前に描画された音名を消去する。
        document.getElementById(`${st}_string`).innerHTML = "";
        //弦のチューニング項目からチューニング音を指定するvalueを読み込む。
        TuningNumber = document.getElementById(`StringTuning_${st}`).value;

        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);

        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            if (ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)] === "　") {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</td>`);
            } else {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), 12)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</Strong></td>`);
            }
            TuningNumber++
            FletNum++
        };

    };
};

//フレット上の音名を描画する関数
function FletCreate() {
    //ルート音の情報を取得する。
    RootNumber = Number(document.getElementById("rootNumber").value);

    //配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //配列を検索用の値
    ScaleNum = Number(value[1]);

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    onoff = value[0].split('/').map(Number);

    //音名の表記方法を取得する
    let key_signature_names = Number(document.getElementById(`key_signature_names`).value);

    //コード画像かスケール画面かを判定する値
    ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    //構成音を格納する配列を定義する
    ConfigurationNotes = [];
    ConfigurationNotes.splice(0);

    let SOF;
    //スケールの場合の処理
    if (ScaleAndChordsDrowingSwitch === 1) {
        //スケール構成音のバイナリを配列に格納する。
        Configuration = scale_Container[ScaleNum]['ScaleNumBinary'];

        //シャープとフラットの区別をする変数SOFに値を代入。
        SOF = DetermineKeySignature(mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12));

        //コードの場合の処理
    } else if (ScaleAndChordsDrowingSwitch === 0) {
        //コード構成音のバイナリを配列に格納する。
        Configuration = chord_container[ScaleNum]['ChordBinary'];
        //mを判定するために「omit5,omit3」を除く
        ChordName = chord_container[ScaleNum]['ChordName'].replace("omit5", "").replace("omit3", "")

        //3度の異名同音判定
        if (ChordName.includes("m")) {
            Configuration[3] = 43;
        };

        if (ChordName.includes("♭9")) {
            Configuration[1] = 43;
        };

        if (ChordName.includes("#9")) {
            Configuration[3] = 42;
        };

        if (ChordName.includes("#11")) {
            Configuration[6] = 42;
        };

        if (ChordName.includes("♭5")) {
            Configuration[6] = 43;
        };

        if (ChordName.includes("aug")) {
            Configuration[8] = 42;
        };

        if (ChordName.includes("#5")) {
            Configuration[8] = 42;
        };

        if (ChordName.includes("♭13")) {
            Configuration[8] = 43;
        };

        //7度の異名同音判定
        if (Configuration[11] >= 1 && ChordName.includes("Maj7")) {
            Configuration[11] = 1;
        } else if (ChordName.includes("m(♭5)")) {
            Configuration[0] = 43;
            Configuration[3] = 43;
            Configuration[6] = 43;
        } else if (ChordName.includes("dim")) {
            Configuration[0] = 43;
            Configuration[3] = 43;
            Configuration[6] = 43;
            Configuration[9] = 43;
        } else if (Configuration[10] >= 1 && ChordName.includes("7")) {
            Configuration[10] = 43;
        } else if (Configuration[10] >= 1 && ChordName.includes("9")) {
            Configuration[10] = 43;
        };

        if (ChordName.includes("blk")) {
            Configuration[2] = 42;
            Configuration[6] = 42;
            Configuration[10] = 42;
        };

        //シャープとフラットの区別をする変数SOFに値を代入。
        SOF = DetermineKeySignature(mod(RootNumber, 12));
    };

    //for文でスケールの構成音を生成する。
    for (let i = 0; i < 12; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (Configuration[i] === 42) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][0]);
        } else if (Configuration[i] === 43) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][1]);
        } else if (Configuration[i] === 1) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][SOF]);
        } else if (Configuration[i] === 0) {
            ConfigurationNotes.push("　");
        } else {
            ConfigurationNotes.push(AllNoteNames[mod(RootNumber + i, 12)][key_signature_names][Number(Configuration[i])]);
        };
    };

    //1：(#Ⅰ/♭Ⅱ)の処理
    if (Configuration[1] === 42) {
        ConfigurationNotes.splice(1, 1, AllNoteNames[mod(RootNumber + 1, 12)][key_signature_names][3]);
    } else if (Configuration[1] === 43) {
        ConfigurationNotes.splice(1, 1, AllNoteNames[mod(RootNumber + 1, 12)][key_signature_names][4]);
    };

    //2：(♭♭Ⅲ)の処理
    if (Configuration[2] === 43) {
        ConfigurationNotes.splice(2, 1, AllNoteNames[mod(RootNumber + 2, 12)][key_signature_names][7]);
    };

    //3：(#Ⅱ/♭Ⅲ)の処理
    if (Configuration[3] === 42) {
        ConfigurationNotes.splice(3, 1, AllNoteNames[mod(RootNumber + 3, 12)][key_signature_names][6]);
    } else if (Configuration[3] === 43) {
        ConfigurationNotes.splice(3, 1, AllNoteNames[mod(RootNumber + 3, 12)][key_signature_names][8]);
    };

    //4：(#Ⅲ/♭Ⅳ)の処理
    if (Configuration[4] === 42) {
        ConfigurationNotes.splice(4, 1, AllNoteNames[mod(RootNumber + 4, 12)][key_signature_names][10]);
    } else if (Configuration[4] === 43) {
        ConfigurationNotes.splice(4, 1, AllNoteNames[mod(RootNumber + 4, 12)][key_signature_names][11]);
    };

    //6：(#Ⅳ/♭Ⅴ)の処理
    if (Configuration[6] === 42) {
        ConfigurationNotes.splice(6, 1, AllNoteNames[mod(RootNumber + 6, 12)][key_signature_names][13]);
    } else if (Configuration[6] === 43) {
        ConfigurationNotes.splice(6, 1, AllNoteNames[mod(RootNumber + 6, 12)][key_signature_names][14]);
    };

    //8：(#Ⅴ/♭Ⅶ)の処理
    if (Configuration[8] === 42) {
        ConfigurationNotes.splice(8, 1, AllNoteNames[mod(RootNumber + 8, 12)][key_signature_names][16]);
    } else if (Configuration[8] === 43) {
        ConfigurationNotes.splice(8, 1, AllNoteNames[mod(RootNumber + 8, 12)][key_signature_names][17]);
    };

    //9：(♭♭Ⅶ)の処理
    if (Configuration[9] === 43) {
        ConfigurationNotes.splice(9, 1, AllNoteNames[mod(RootNumber + 9, 12)][key_signature_names][20]);
    };

    //10：(#Ⅴ/♭Ⅶ)の処理
    if (Configuration[10] === 42) {
        ConfigurationNotes.splice(10, 1, AllNoteNames[mod(RootNumber + 10, 12)][key_signature_names][19]);
    } else if (Configuration[10] === 43) {
        ConfigurationNotes.splice(10, 1, AllNoteNames[mod(RootNumber + 10, 12)][key_signature_names][21]);
    };

    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフレットに音名を描画する
        RightyToneNameCreate();
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフレットに音名を描画する
        LeftyToneNameCreate();
    };

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

//利き手を判定する関数
function decide_which_hand() {

    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフレットに音名を描画する
        RightyToneNameCreate();
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフレットに音名を描画する
        LeftyToneNameCreate();
    };

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
    NumberOfStrings = TuningVariation[Number(TuningVariationValue[1])]['NumberOfStrings'];
    document.getElementById("NumberOfStrings").selectedIndex = NumberOfStrings - 1;

    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフィンガーボードの要素を描画する関数
        RightyFingerboardCreate(NumberOfStrings);
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフィンガーボードの要素を描画する関数
        LeftyFingerboardCreate(NumberOfStrings);
    };

    //チューニングを変更する
    StringsTuning = TuningVariation[Number(TuningVariationValue[1])]['NumberOfStrings'];
    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            //mod12でチューニングを指定する。
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = mod(TuningData[i], 12);
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};

//スケール画面とコード画面ごとに必要な処理を行う関数
function NumberOfStringsManually() {

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    TuningData = [4, 11, 7, 2, 9, 4, 11, 6, 1, 8];
    TuningVariationValue = document.getElementById("TuningVariation").value.split(':');

    TuningInfo = TuningVariationValue[0].split('-').map(Number);

    for (let i = 0; i < TuningInfo.length; i++) {
        TuningData.splice(i, 1, TuningInfo[i]);
    };

    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフィンガーボードの要素を描画する関数
        RightyFingerboardCreate(NumberOfStrings);
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフィンガーボードの要素を描画する関数
        LeftyFingerboardCreate(NumberOfStrings);
    };

    //チューニングを変更する
    StringsTuning = TuningVariation;
    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = mod(TuningData[i], 12);
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};

//チューニングの選択肢を表示するためのHTML要素(option)を追加するための関数
function CreateTuningVariation() {
    //コードを格納した配列の長さを取得する。
    Num = TuningVariation.length;

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
    TuningValue = document.getElementById("TuningVariation").value.split(':');

    //弦の本数を設定する
    StringsNum = Number(TuningValue[1]) - 1;
    document.getElementById("NumberOfStrings").selectedIndex = TuningVariation[StringsNum]['NumberOfStrings'];

    //チューニングを変更する
    StringsTuning = TuningValue[0].split('-').map(Number);
    for (let i = 0; i < StringsTuning.length; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = StringsTuning[i];
        };
    };

};
