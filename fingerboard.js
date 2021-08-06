
//音名の多次元配列
const AllNoteNames =
    [{ EnglishName: ['C', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'D𝄫', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'C'], ItalyName: ['ド', 'ド', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'ド', 'シ#', 'ド'], JapaneseName: ['ハ', 'ハ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', 'ハ', '嬰ロ', 'ハ'], DeutschName: ['C', 'C', 'C', 'His', 'C', 'C', 'His', 'Deses', 'C', 'C', 'His', 'Deses', 'C', 'His', 'C', 'C', 'His', 'C', 'C', 'His', 'Deses', 'C', 'C', 'His', 'C'] },
    { EnglishName: ['C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'C#-D♭'], ItalyName: ['ド#', 'レ♭', 'レ♭', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'ド#', 'ド#-レ♭'], JapaneseName: ['嬰ハ', '変ニ', '変ニ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '嬰ハ', '嬰ハ-変ニ'], DeutschName: ['Cis', 'Des', 'Des', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Cis', 'Cis-Des'] },
    { EnglishName: ['D', 'D', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'D'], ItalyName: ['レ', 'レ', 'レ', 'レ', 'ミ𝄫', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ミ𝄫', 'レ', 'ド𝄪', 'レ', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ド𝄪', 'レ'], JapaneseName: ['ニ', 'ニ', 'ニ', 'ニ', '重変ホ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重変ホ', 'ニ', '重嬰ハ', 'ニ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重嬰ハ', 'ニ'], DeutschName: ['D', 'D', 'D', 'D', 'Eses', 'D', 'Cisis', 'Eses', 'D', 'D', 'Cisis', 'Eses', 'D', 'D', 'Eses', 'D', 'Cisis', 'D', 'D', 'Cisis', 'Eses', 'D', 'D', 'Cisis', 'D'] },
    { EnglishName: ['D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'F𝄫', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'D#', 'D#-E♭'], ItalyName: ['レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ファ𝄫', 'ミ♭', 'レ#', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'レ#', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'レ#', 'レ#-ミ♭'], JapaneseName: ['嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '重変ヘ', '変ホ', '嬰ニ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '嬰ニ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '嬰ニ', '嬰ニ-変ホ'], DeutschName: [] },
    { EnglishName: ['E', 'E', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'D𝄪', 'E'], ItalyName: ['ミ', 'ミ', 'ミ', 'ミ', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ファ♭', 'ミ', 'レ𝄪', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ミ', 'レ𝄪', 'ファ♭', 'ミ', 'ミ', 'レ𝄪', 'ミ'], apaneseName: ['ホ', 'ホ', 'ホ', 'ホ', '変ヘ', 'ホ', 'ホ', '変ヘ', '変ヘ', 'ホ', '重嬰イ', '変ヘ', 'ホ', 'ホ', '変ヘ', 'ホ', 'ホ', '変ヘ', 'ホ', '重嬰イ', '変ヘ', 'ホ', 'ホ', '重嬰イ', 'ホ'], DeutschName: ['Dis', 'Es', 'Es', 'Dis', 'Es', 'Es', 'Dis', 'Feses', 'Es', 'Dis', 'Dis', 'Es', 'Es', 'Dis', 'Es', 'Es', 'Dis', 'Es', 'Dis', 'Dis', 'Es', 'Es', 'Dis', 'Dis', 'Dis-Es'] },
    { EnglishName: ['F', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'E#', 'F'], ItalyName: ['ファ', 'ファ', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ミ#', 'ミ#', 'ファ'], JapaneseName: ['ヘ', 'ヘ', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', '嬰ホ', '嬰ホ', 'ヘ'], DeutschName: ['E', 'E', 'E', 'E', 'Fes', 'E', 'E', 'Fes', 'Fes', 'E', 'Disis', 'Fes', 'E', 'E', 'Fes', 'E', 'E', 'Fes', 'E', 'Disis', 'Fes', 'E', 'E', 'Disis', 'E'] },
    { EnglishName: ['F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'E𝄪', 'F#-G♭'], ItalyName: ['ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ミ𝄪', 'ファ#-ソ♭'], JapaneseName: ['嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '重嬰ホ', '嬰ヘ-変ト'], DeutschName: ['F', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'Eis', 'F'] },
    { EnglishName: ['G', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'A𝄫', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'G'], ItalyName: ['ソ', 'ソ', 'ソ', 'ファ𝄪', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ラ𝄫', 'ソ', 'ファ𝄪', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ファ𝄪', 'ソ'], JapaneseName: ['ト', 'ト', 'ト', '重嬰ヘ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重変イ', 'ト', '重嬰ヘ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重嬰ヘ', 'ト'], DeutschName: ['Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Eisis', 'Fis-Ges'] },
    { EnglishName: ['G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'G#-A♭'], ItalyName: ['ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ソ#', 'ソ#-ラ♭'], JapaneseName: ['嬰ト', '変イ', '変イ', '嬰ト', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '変イ', '変イ', '嬰ト', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '嬰ト', '嬰ト-変イ'], DeutschName: ['G', 'G', 'G', 'Fisis', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Ases', 'G', 'Fisis', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Fisis', 'G'] },
    { EnglishName: ['A', 'A', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A', 'A', 'A', 'B𝄫', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A'], ItalyName: ['ラ', 'ラ', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ソ𝄪', 'シ𝄫', 'ラ', 'ラ', 'ソ𝄪', 'ラ', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ソ𝄪', 'シ𝄫', 'ラ', 'ラ', 'ソ𝄪', 'ラ'], JapaneseName: ['イ', 'イ', 'イ', 'イ', '重変ロ', 'イ', '重嬰ト', '重変ロ', 'イ', 'イ', '重嬰ト', 'イ', 'イ', 'イ', '重変ロ', 'イ', 'イ', '重変ロ', 'イ', '重嬰ト', '重変ロ', 'イ', 'イ', '重嬰ト', 'イ'], DeutschName: ['A', 'A', 'A', 'A', 'Heses', 'A', 'Gisis', 'Heses', 'A', 'A', 'Gisis', 'A', 'A', 'A', 'Heses', 'A', 'A', 'Heses', 'A', 'Gisis', 'Heses', 'A', 'A', 'Gisis', 'A'] },
    { EnglishName: ['A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'A#-B♭'], ItalyName: ['ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'ド𝄫', 'シ♭', 'ラ#', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'ド𝄫', 'シ♭', 'ラ#', 'ラ#', 'ラ#-シ♭'], JapaneseName: ['嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '重変ハ', '変ロ', '嬰イ', '嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '重変ハ', '変ロ', '嬰イ', '嬰イ', '嬰イ-変ロ'], DeutschName: ['Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'Ceses', 'B', 'Ais', 'Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'Ceses', 'B', 'Ais', 'Ais', 'Ais-B'] },
    { EnglishName: ['B', 'B', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'B'], ItalyName: ['シ', 'シ', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'ド♭', 'シ', 'ラ𝄪', 'ド♭', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'ド♭', 'シ', 'ラ𝄪', 'シ'], JapaneseName: ['ロ', 'ロ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', '変ハ', 'ロ', '重嬰イ', '変ハ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', '変ハ', 'ロ', '重嬰イ', 'ロ'], DeutschName: ['H', 'H', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'Ces', 'H', 'Aisis', 'Ces', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'Ces', 'H', 'Aisis', 'H'] }];

//主なチューニングタイプを格納した連想配列
TuningVariation = [
    { TuningName: "6弦ギター スタンダード", NumberOfStrings: 6, StringTuningStrings: [4, 11, 7, 2, 9, 4, 11, 6, 1, 8] }

];

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
    //言語の情報を取得する。
    ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //弦の本数を取得する。
    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    //言語表示なしの場合 又は 音名が選択されていないとき
    if (NumberOfStrings === 0) {
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

//スケール画面とコード画面の切り替えをする関数
function ScaleAndChordsDrowing() {

    ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    document.getElementById("ScaleAndChords").innerHTML = "";
    document.getElementById("InformationBlock").innerHTML = "";

    if (ScaleAndChordsDrowingSwitch === 0) {
        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="box1 col-md-3 col-xl-3 pt-2 pb-4 mx-1">調べたいスケール
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDateInfo()">
            </select>
        </label>`);

        //JavaScriptによってスケールの選択肢を追加する
        CeateScaleChoices();

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
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Forte numberとScale numberとは？
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <b>Forte number</b>は、Allen Forteが提唱した、「3音以上からなる音階の集合に割り当てられた数」です。
                        <br>同一のForte numberを持つ<b>"スケールの構成音の構造"</b>が等しくなる仕組みになっています。
                        <br>たとえば、メジャースケールとナチュラルマイナースケールは<b>スタート位置が違うだけで同じ音の飛び方</b>をしています。
                        <br>よって、メジャースケールとナチュラルマイナースケールは同じForte number「<b>7-35</b>」が割り当てられています。
                        <br><br>
                        <b>Scale number</b>は、「"スケールの構成音を12桁の2進数として表した数"を10進数に変換した数字」です。
                        <br>たとえば、Cメジャースケール(ドレミファソラシ)を例に考えてみましょう。
                        <br>スケールの構成音を「1」、そうでない音を「0」とすると、Cメジャー・スケールは「10101011010101」と表せますよね。
                        <br>この「10101011010101」を2進数として処理するために逆に並べ替えます。
                        <br>並べ替えた「101011010101」を10進数に変換すると「2741」になるので、メジャースケールのScale
                        numberは「<b>2741</b>」となるわけです。
                        <br><br>【参考文献】<br>
                        ・<a href="https://ianring.com/musictheory/scales/" target="_blank"
                            rel="noopener noreferrer">The Exciting
                            Universe Of Music Theory</a><br>
                        ・<a href="https://en.wikipedia.org/wiki/Forte_number" target="_blank"
                            rel="noopener noreferrer">Forte
                            number(Wikipedia)</a>
                    </div>
                </div>
            </div>
        </div>`);
        document.getElementById("ScaleAndChordsChange").innerHTML
            = ``
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=1 class="btn btn-primary col-2 col-md-2 col-xl-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">コード画面へ</button>`;

    } else if (ScaleAndChordsDrowingSwitch === 1) {
        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="box1 col-md-3 col-xl-3 pt-2 pb-4 mx-1">調べたいコード
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDateInfo()">
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

                <!-- コードネームの判定と情報をJavaScriptで書き込む -->
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
                このコードの構成音を含む主なスケールはこちら。
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
                    <option value=4>構成音を表示しない</option>
                </select>
                </label>

                <div>
                <button id="scale_language_change_button" class="btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2"
                    onclick="ScaleLanguageJEFingerBoard()">日本語⇔English</button>
                </div>

                <div class="accordion-body">
                <!--ページがロードされた後にJavaScriptによって候補となるスケールを表示する -->
                <div id="addHTML">
                    
                </div>

                </div>
            </div>
            </div>
        </div>`);

        document.getElementById("ScaleAndChordsChange").innerHTML = ``
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=0 class="btn btn-success col-2 col-md-2 col-xl-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">スケール画面へ</button>`;
    };
    //スケール画面とコード画面ごとに必要な処理を行う関数
    FingerboardDateInfo();
};

//スケール画面とコード画面ごとに必要な処理を行う関数
function FingerboardDateInfo() {

    //scale_Container配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');
    //構成音のバイナリ値を配列「onoff」へ格納する
    onoff = value[0].split('').map(Number);

    //コード画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 0) {
        //コード・ネームの情報を判定する関数
        ChordCandidateInfo(onoff);
        //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
        CreateCandidate();
        ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
        ModalCandidateSelect();

    };

    //スケール画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 1) {
        //スケール情報を描画する関数
        ScaleInformationDrawing();
    };

    //フィンガーボードを実体化する
    FingerboardMaterialization();
};

//フィンガーボードの要素を描画する関数
function FingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""

    //下段のフレットナンバーのtr(行)要素をtableに書き込む。
    //フレットの数を取得する 
    FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    Num = FletCount;
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

    //指定した弦の本数だけtr(行)要素をtableに書き込む。
    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value); //弦の本数
    Num = NumberOfStrings;
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
        document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="${Num}_string"></tr>`)
        Num--
    };

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

//フレット上の音名を描画する関数
function FletCreate(NumberOfStrings) {
    //ルート音の情報を取得する。
    RootNumber = Number(document.getElementById("rootNumber").value);

    //音名の表記方法を取得する
    key_signature_names = Number(document.getElementById(`key_signature_names`).value);

    //配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //配列を検索用の値
    ScaleNum = Number(value[1]);

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    onoff = value[0].split('').map(Number);

    ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    //スケールの場合の処理
    if (ScaleAndChordsDrowingSwitch === 1) {
        //スケール構成音のバイナリを配列に格納する。
        Configuration = scale_Container[ScaleNum]['ScaleNumBinary'];
        //シャープとフラットの区別をする変数SOFに値を代入。
        if (mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 0
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 2
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 4
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 6
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 7
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 9
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 11) {
            SOF = 0;
        } else {
            SOF = 1;
        };
        //コードの場合の処理
    } else if (ScaleAndChordsDrowingSwitch === 0) {
        //コード構成音のバイナリを配列に格納する。
        Configuration = chord_container[ScaleNum]['ChordBinary'];

        //mを判定するために「omit5」を除く
        ChordName = chord_container[ScaleNum]['ChordName'].replace("omit5", "")

        //3度の異名同音判定
        if (ChordName.includes("m")) {
            Configuration[3] = 3;
        };

        if (ChordName.includes("♭9")) {
            Configuration[1] = 3;
        };

        if (ChordName.includes("#9")) {
            Configuration[3] = 2;
        };

        if (ChordName.includes("#11")) {
            Configuration[6] = 2;
        };

        if (ChordName.includes("♭5")) {
            Configuration[6] = 3;
        };

        if (ChordName.includes("aug")) {
            Configuration[8] = 2;
        };

        if (ChordName.includes("#5")) {
            Configuration[8] = 2;
        };

        if (ChordName.includes("♭13")) {
            Configuration[8] = 3;
        };

        //7度の異名同音判定
        if (ChordName.includes("Maj7")) {
            Configuration[11] = 1;
        } else if (ChordName.includes("dim")) {
            Configuration[0] = 3;
            Configuration[3] = 3;
            Configuration[6] = 3;
            Configuration[9] = 3;
        } else if (ChordName.includes("7")) {
            Configuration[10] = 3;
        };

        if (ChordName.includes("blk")) {
            Configuration[2] = 2;
            Configuration[6] = 2;
            Configuration[10] = 2;
        };

        //シャープとフラットの区別をする変数SOFに値を代入。
        if (mod(RootNumber, 12) === 0
            || mod(RootNumber, 12) === 2
            || mod(RootNumber, 12) === 4
            || mod(RootNumber, 12) === 6
            || mod(RootNumber, 12) === 7
            || mod(RootNumber, 12) === 9
            || mod(RootNumber, 12) === 11) {
            SOF = 0;
        } else {
            SOF = 1;
        };
    };

    //構成音を格納する配列
    ConfigurationNotes = [];

    //for文でスケールの構成音を生成する。
    for (let i = 0; i < 12; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (Configuration[i] === 2) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][0]);
        } else if (Configuration[i] === 3) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][1]);
        } else if (Configuration[i] === 1) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][SOF]);
        } else if (Configuration[i] === 0) {
            ConfigurationNotes.push("　");
        } else {
        };
    };

    // フレットを描画
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
                document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</td>`);
            } else {
                document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), 12)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</Strong></td>`);
            }
            TuningNumber--
            FletNum--
        };

        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);
    };

    //シャープまたはフラット指定用に書き換えた数値を元に戻す
    for (let i = 0; i < Configuration.length; i++) {
        if (Configuration[i] === 2) {
            Configuration.splice(i, 1, 1);
        };
        if (Configuration[i] === 3) {
            Configuration.splice(i, 1, 1);
        };
    };

    //構成音を戻り値として返す
    return Configuration;
};

//フィンガーボードを実体化する
function FingerboardMaterialization() {
    //フィンガーボードの要素を描画する関数
    FingerboardCreate();

    //弦の本数の値を取得
    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);
    //弦のチューニングを決定する関数
    Guitar(NumberOfStrings);

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};




//弦のチューニングを決定する関数
function Guitar(NumberOfStrings) {

    if (NumberOfStrings >= 1) {
        document.getElementById(`StringTuning_1`).selectedIndex = 4;
    };

    if (NumberOfStrings >= 2) {
        document.getElementById(`StringTuning_2`).selectedIndex = 11;
    };

    if (NumberOfStrings >= 3) {
        document.getElementById(`StringTuning_3`).selectedIndex = 7;
    };

    if (NumberOfStrings >= 4) {
        document.getElementById(`StringTuning_4`).selectedIndex = 2;
    };

    if (NumberOfStrings >= 5) {
        document.getElementById(`StringTuning_5`).selectedIndex = 9;
    };

    if (NumberOfStrings >= 6) {
        document.getElementById(`StringTuning_6`).selectedIndex = 4;
    };

    if (NumberOfStrings >= 7) {
        document.getElementById(`StringTuning_7`).selectedIndex = 11;
    };

    if (NumberOfStrings >= 8) {
        document.getElementById(`StringTuning_8`).selectedIndex = 6;
    };

    if (NumberOfStrings >= 9) {
        document.getElementById(`StringTuning_9`).selectedIndex = 1;
    };

    if (NumberOfStrings >= 10) {
        document.getElementById(`StringTuning_10`).selectedIndex = 8;
    };

};