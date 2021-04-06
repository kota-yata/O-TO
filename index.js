
//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
}

// 四捨五入して小数点第3位までを表示する関数 (JavaScriptには元からそういう関数が無いっぽいので)
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
}

//音名を配列に格納する。
const note_name = ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B♭", "B"];
const sharp_note_name = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flat_note_name = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];
const japan_note_name = ["ハ", "嬰ハ/変ニ", "ニ", "嬰ニ/変ホ", "ホ", "ヘ", "嬰ヘ/変ト", "ト", "嬰ト/変イ", "イ", "嬰イ/変ロ", "ロ"];
const italy_note_name = ["ド", "ド#/レ♭", "レ", "レ#/ミ♭", "ミ", "ファ", "ﾌｧ#/ソ♭", "ソ", "ソ#/ラ♭", "ラ", "ラ#/シ♭", "シ"];
const germany_note_name = ["C", "Cis/Des", "D", "Dis/Es", "E", "F", "Fis/Ges", "G", "Gis/As", "A", "Ais/B", "H"];

//旋法名を配列に格納する。
const mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];
const after_mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];

//調号の数を配列に格納する。
const key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#・♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const sharp_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const flat_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const modulation_type = ["#・♭+0", "♭+5", "#+2", "♭+3", "#+4", "♭+1", "#・♭+6", "#+1", "♭+4", "#+3", "♭+2", "#+5"];

//スケールの情報を配列に格納する。
const scale_Ionian = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
const scale_Aeolian = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];
const scale_Harmonic_minor = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1];
const scale_Melodic_minor = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const scale_Harmonic_major = [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1];
const scale_Melodic_Major = [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0];

const scale_Dorian = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0];
const scale_Phrygian = [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];
const scale_Lydian = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];
const scale_Mixolydian = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
const scale_Locrian = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0];

const scale_Ionian_sharp_5th = [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
const scale_Lydian_augmented = [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1];

const scale_Phrygian_dominant = [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0];
const scale_Lydian_dominant = [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0];
const scale_Phrygian_flat_4th = [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0];
const scale_Mixolydian_flat_2nd = [1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0];
const scale_Altered = [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0];

const scale_Spanish_Phrygian = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0];

const scale_Whole_Tone = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const scale_Half_whole_diminished = [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0];
const scale_Blues_Major_pentatonic = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0];
const scale_Blues_Minor_pentatonic = [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0];

const scale_in_upper = [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0];
const scale_in_down = [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0];
const scale_ritsu = [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0];
const scale_ryukyu = [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1];
const scale_Chromatic = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


//入力情報を格納する変数（転調元のキーから考える）
let note_number = [0]
let mode_number = [0]
let after_mode_number = [0]

//入力情報を格納する変数（転調の種類）
let b_n_num = [0]
let b_m_num = [0]
let a_n_num = [0]
let a_m_numb = [0]

let b_key_num = [0]
let a_key_num = [0]
let modulation_num = [0]

//転調後の主音を示す番号を格納する変数。
let note_sf_zore = [0]
let note_s_one = [0]
let note_f_one = [0]
let note_s_two = [0]
let note_f_two = [0]
let note_s_three = [0]
let note_f_three = [0]
let note_s_four = [0]
let note_f_four = [0]
let note_s_five = [0]
let note_f_five = [0]
let note_sf_six = [0]

//転調後の調号を示す番号を格納する変数。
let sf_zore = [0]
let s_one = [0]
let f_one = [0]
let s_two = [0]
let f_two = [0]
let s_three = [0]
let f_three = [0]
let s_four = [0]
let f_four = [0]
let s_five = [0]
let f_five = [0]
let sf_six = [0]

//1分のミリ秒数
let one_minutes = 60000;

//転調の種類を判別するためのスクリプト
function modulation() {
    let b_note_num = document.getElementById("b_note").value;
    let b_mode_num = document.getElementById("b_mode").value;
    let a_note_num = document.getElementById("a_note").value;
    let a_mode_num = document.getElementById("a_mode").value;

    let b_key_num = mod((Number(b_note_num) - Number(b_mode_num)), 12);
    let a_key_num = mod((Number(a_note_num) - Number(a_mode_num)), 12);
    let modulation_num = mod((Number(a_key_num) - Number(b_key_num)), 12);

    //転調前のキーと調号を表示
    if (b_key_num == 0 || b_key_num == 2 || b_key_num == 4 || b_key_num == 6 || b_key_num == 7 || b_key_num == 9 || b_key_num == 11) {
        document.getElementById("result_b_key").innerHTML
            = "-転調前-<br><br>" + sharp_note_name[b_note_num] + " " + mode_name[b_mode_num] + " " + sharp_key_signature[b_key_num];
    } else {
        document.getElementById("result_b_key").innerHTML
            = "-転調前-<br><br>" + flat_note_name[b_note_num] + " " + mode_name[b_mode_num] + " " + flat_key_signature[b_key_num];
    };

    //転調の種類を表示
    if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>転調していません。";
    } else if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) != Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（平行調）";
    } else if (Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同主調転調）";
    } else if (Number(b_mode_num) == Number(a_mode_num) && Number(a_mode_num) == 0) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    } else if (Number(b_mode_num) == Number(a_mode_num) && Number(a_mode_num) == 9) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    } else if (Number(b_mode_num) == Number(a_mode_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同旋法移行）";
    } else {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    };

    //転調後のキーと調号を表示
    if (a_key_num == 0 || a_key_num == 2 || a_key_num == 4 || a_key_num == 6 || a_key_num == 7 || a_key_num == 9 || a_key_num == 11) {
        document.getElementById("result_a_key").innerHTML
            = "-転調後-<br><br>" + sharp_note_name[a_note_num] + " " + mode_name[a_mode_num] + " " + sharp_key_signature[a_key_num];
    } else {
        document.getElementById("result_a_key").innerHTML
            = "-転調後-<br><br>" + flat_note_name[a_note_num] + " " + mode_name[a_mode_num] + " " + flat_key_signature[a_key_num];
    };
};


//転調元から転調先を表示するためのスクリプト
function keychange() {

    let note_number = document.getElementById("note").value;
    let mode_number = document.getElementById("mode").value;
    let after_mode_number = document.getElementById("after_mode").value;

    let sf_zore = mod((Number(note_number) - Number(mode_number)) - 0, 12);
    let s_one = mod((Number(note_number) - Number(mode_number)) - 5, 12);
    let f_one = mod((Number(note_number) - Number(mode_number)) - 7, 12);
    let s_two = mod((Number(note_number) - Number(mode_number)) - 10, 12);
    let f_two = mod((Number(note_number) - Number(mode_number)) - 2, 12);
    let s_three = mod((Number(note_number) - Number(mode_number)) - 3, 12);
    let f_three = mod((Number(note_number) - Number(mode_number)) - 9, 12);
    let s_four = mod((Number(note_number) - Number(mode_number)) - 8, 12);
    let f_four = mod((Number(note_number) - Number(mode_number)) - 4, 12);
    let s_five = mod((Number(note_number) - Number(mode_number)) - 1, 12);
    let f_five = mod((Number(note_number) - Number(mode_number)) - 11, 12);
    let sf_six = mod((Number(note_number) - Number(mode_number)) - 6, 12);

    let note_sf_zore = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 0), 12);
    let note_s_one = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 7), 12);
    let note_f_one = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 5), 12);
    let note_s_two = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 2), 12);
    let note_f_two = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 10), 12);
    let note_s_three = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 9), 12);
    let note_f_three = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 3), 12);
    let note_s_four = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 4), 12);
    let note_f_four = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 8), 12);
    let note_s_five = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 11), 12);
    let note_f_five = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 1), 12);
    let note_sf_six = mod((Number(note_number) - Number(mode_number) + Number(after_mode_number) + 6), 12);

    if (sf_zore == 0 || sf_zore == 2 || sf_zore == 4 || sf_zore == 6 || sf_zore == 7 || sf_zore == 9 || sf_zore == 11) {
        document.getElementById("result_origin").innerHTML
            = "転調元のキー：" + sharp_note_name[note_number] + " " + mode_name[mode_number] + " " + sharp_key_signature[sf_zore];
    } else {
        document.getElementById("result_origin").innerHTML
            = "転調元のキー：" + flat_note_name[note_number] + " " + mode_name[mode_number] + " " + flat_key_signature[sf_zore];
    };

    if (s_one == 0 || s_one == 2 || s_one == 4 || s_one == 6 || s_one == 7 || s_one == 9 || s_one == 11) {
        document.getElementById("result_s_1").innerHTML
            = "#+1の転調先：" + sharp_note_name[note_s_one] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_one];
    } else {
        document.getElementById("result_s_1").innerHTML
            = "#+1の転調先：" + flat_note_name[note_s_one] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_one];
    };

    if (f_one == 0 || f_one == 2 || f_one == 4 || f_one == 6 || f_one == 7 || f_one == 9 || f_one == 11) {
        document.getElementById("result_f_1").innerHTML
            = "♭+1の転調先：" + sharp_note_name[note_f_one] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_one];
    } else {
        document.getElementById("result_f_1").innerHTML
            = "♭+1の転調先：" + flat_note_name[note_f_one] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_one];
    };

    if (s_two == 0 || s_two == 2 || s_two == 4 || s_two == 6 || s_two == 7 || s_two == 9 || s_two == 11) {
        document.getElementById("result_s_2").innerHTML
            = "#+2の転調先：" + sharp_note_name[note_s_two] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_two];
    } else {
        document.getElementById("result_s_2").innerHTML
            = "#+2の転調先：" + flat_note_name[note_s_two] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_two];
    };

    if (f_two == 0 || f_two == 2 || f_two == 4 || f_two == 6 || f_two == 7 || f_two == 9 || f_two == 11) {
        document.getElementById("result_f_2").innerHTML
            = "♭+2の転調先：" + sharp_note_name[note_f_two] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_two];
    } else {
        document.getElementById("result_f_2").innerHTML
            = "♭+2の転調先：" + flat_note_name[note_f_two] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_two];
    };

    if (s_three == 0 || s_three == 2 || s_three == 4 || s_three == 6 || s_three == 7 || s_three == 9 || s_three == 11) {
        document.getElementById("result_s_3").innerHTML
            = "#+3の転調先：" + sharp_note_name[note_s_three] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_three];
    } else {
        document.getElementById("result_s_3").innerHTML
            = "#+3の転調先：" + flat_note_name[note_s_three] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_three];
    };

    if (f_three == 0 || f_three == 2 || f_three == 4 || f_three == 6 || f_three == 7 || f_three == 9 || f_three == 11) {
        document.getElementById("result_f_3").innerHTML
            = "♭+3の転調先：" + sharp_note_name[note_f_three] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_three];
    } else {
        document.getElementById("result_f_3").innerHTML
            = "♭+3の転調先：" + flat_note_name[note_f_three] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_three];
    };

    if (s_four == 0 || s_four == 2 || s_four == 4 || s_four == 6 || s_four == 7 || s_four == 9 || s_four == 11) {
        document.getElementById("result_s_4").innerHTML
            = "#+4の転調先：" + sharp_note_name[note_s_four] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_four];
    } else {
        document.getElementById("result_s_4").innerHTML
            = "#+4の転調先：" + flat_note_name[note_s_four] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_four];
    };

    if (f_four == 0 || f_four == 2 || f_four == 4 || f_four == 6 || f_four == 7 || f_four == 9 || f_four == 11) {
        document.getElementById("result_f_4").innerHTML
            = "♭+4の転調先：" + sharp_note_name[note_f_four] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_four];
    } else {
        document.getElementById("result_f_4").innerHTML
            = "♭+4の転調先：" + flat_note_name[note_f_four] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_four];
    };

    if (s_five == 0 || s_five == 2 || s_five == 4 || s_five == 6 || s_five == 7 || s_five == 9 || s_five == 11) {
        document.getElementById("result_s_5").innerHTML
            = "#+5の転調先：" + sharp_note_name[note_s_five] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_five];
    } else {
        document.getElementById("result_s_5").innerHTML
            = "#+5の転調先：" + flat_note_name[note_s_five] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_five];
    };

    if (f_five == 0 || f_five == 2 || f_five == 4 || f_five == 6 || f_five == 7 || f_five == 9 || f_five == 11) {
        document.getElementById("result_f_5").innerHTML
            = "♭+5の転調先：" + sharp_note_name[note_f_five] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_five];
    } else {
        document.getElementById("result_f_5").innerHTML
            = "♭+5の転調先：" + flat_note_name[note_f_five] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_five];
    };

    if (sf_six == 0 || sf_six == 2 || sf_six == 4 || sf_six == 6 || sf_six == 7 || sf_six == 9 || sf_six == 11) {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6の転調先：" + sharp_note_name[note_sf_six] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[sf_six];
    } else {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6の転調先：" + flat_note_name[note_sf_six] + " " + mode_name[after_mode_number] + " " + flat_key_signature[sf_six];
    };

    if (Number(mode_number) == Number(after_mode_number)) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：";
    } else if (sf_zore == 0 || sf_zore == 2 || sf_zore == 4 || sf_zore == 6 || sf_zore == 7 || sf_zore == 9 || sf_zore == 11) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：" + sharp_note_name[note_sf_zore] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[sf_zore];
    } else {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：" + flat_note_name[note_sf_zore] + " " + mode_name[after_mode_number] + " " + flat_key_signature[sf_zore];
    };

};



//コード進行を切り替えるためのスクリプト
function changeChordProgression() {

    let base_key_number = document.getElementById("base_key").value;

    let c = mod(Number(base_key_number) - 0, 12);
    let cisdes = mod(Number(base_key_number) + 1, 12);
    let d = mod(Number(base_key_number) + 2, 12);
    let dises = mod(Number(base_key_number) + 3, 12);
    let e = mod(Number(base_key_number) + 4, 12);
    let f = mod(Number(base_key_number) + 5, 12);
    let fisges = mod(Number(base_key_number) + 6, 12);
    let g = mod(Number(base_key_number) + 7, 12);
    let gisas = mod(Number(base_key_number) + 8, 12);
    let a = mod(Number(base_key_number) + 9, 12);
    let aisb = mod(Number(base_key_number) + 10, 12);
    let h = mod(Number(base_key_number) + 11, 12);

    if (base_key_number == 0 || base_key_number == 2 || base_key_number == 4 || base_key_number == 6 || base_key_number == 7 || base_key_number == 9 || base_key_number == 11) {
        //  シンプル・イズ・ベスト
        document.getElementById("simple").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[f]} - ${sharp_note_name[g]}`;
        //いつメン
        document.getElementById("itsumen").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[a]}m - ${sharp_note_name[f]} - ${sharp_note_name[g]}`;
        //モノクローム
        document.getElementById("monochrome").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[h]}m7(♭5) - ${sharp_note_name[e]}7 - ${sharp_note_name[a]}m7`;
        //温かみを感じる
        document.getElementById("atatakai").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[c]}aug - ${sharp_note_name[c]}6 - ${sharp_note_name[c]}7 `;
        //優雅
        document.getElementById("elegance").innerHTML = `${sharp_note_name[c]}△7 - ${sharp_note_name[cisdes]}dim7 - ${sharp_note_name[d]}m7 - ${sharp_note_name[g]}7`;
        //カノン進行
        document.getElementById("canon").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[g]} - ${sharp_note_name[a]}m - ${sharp_note_name[e]}m - ${sharp_note_name[f]} - ${sharp_note_name[c]} - ${sharp_note_name[d]}m - ${sharp_note_name[g]}`;
        //なめらかカノン進行
        document.getElementById("nameracanon").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[g]}/${sharp_note_name[h]} - ${sharp_note_name[a]}m - ${sharp_note_name[e]}m/${sharp_note_name[g]} - ${sharp_note_name[f]} - ${sharp_note_name[c]}/${sharp_note_name[e]} - ${sharp_note_name[d]}m - ${sharp_note_name[g]}`;
        //サンボマスターしか勝たん
        document.getElementById("sambo").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[c]}aug/${sharp_note_name[fisges]} - ${sharp_note_name[f]}△7`;
        //青春
        document.getElementById("seishun").innerHTML = `${sharp_note_name[c]} - ${sharp_note_name[e]} - ${sharp_note_name[a]}ｍ - ${sharp_note_name[g]} `;
        //午前2時の踏切に居そう
        document.getElementById("bump").innerHTML = `${sharp_note_name[c]}add9 - ${sharp_note_name[a]}m7 - ${sharp_note_name[g]} - ${sharp_note_name[f]}`;
        //R&B系
        document.getElementById("r_and_b").innerHTML = `${sharp_note_name[c]}△7 - ${sharp_note_name[f]}m7 - ${flat_note_name[aisb]}7`
        //硬さ：柔らかい
        document.getElementById("yawarakai").innerHTML = `${sharp_note_name[c]}△7 - ${sharp_note_name[d]}m7 - ${sharp_note_name[e]}m7 - ${sharp_note_name[f]}△7`;
        //壮大
        document.getElementById("epic").innerHTML = `${sharp_note_name[c]}sus4 - ${sharp_note_name[c]}sus4/${flat_note_name[cisdes]} - ${sharp_note_name[c]}sus4/${flat_note_name[dises]} - ${sharp_note_name[c]}sus4/${sharp_note_name[f]} - ${sharp_note_name[c]}sus4/${sharp_note_name[g]}`;
        //ドラマチック
        document.getElementById("dramatic").innerHTML = `${sharp_note_name[c]} - ${flat_note_name[cisdes]}/${sharp_note_name[c]} - ${sharp_note_name[d]}/${sharp_note_name[c]} - ${flat_note_name[dises]}/${sharp_note_name[c]} - ${sharp_note_name[e]}/${sharp_note_name[c]}`;
        //ブルージー
        document.getElementById("blues").innerHTML = `${sharp_note_name[c]}7 - ${sharp_note_name[f]}7 - ${sharp_note_name[c]}7 - ${sharp_note_name[f]}7 - ${sharp_note_name[g]}7 - ${sharp_note_name[f]}7 - ${sharp_note_name[c]}7 - ${sharp_note_name[g]}7`;

        //王道進行
        document.getElementById("oudou").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[e]}m - ${sharp_note_name[a]}m`;
        //爽やか
        document.getElementById("sawayaka").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[c]} - ${sharp_note_name[g]} - ${sharp_note_name[a]}m`;
        //万能調味料
        document.getElementById("all_purpose_seasoning").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[a]}m - ${sharp_note_name[c]}`;
        //エモい
        document.getElementById("emotion").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[c]} - ${sharp_note_name[e]}`;
        //涙を誘うウェポン
        document.getElementById("weapon").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[gisas]}m(♭5) - ${sharp_note_name[a]}m`;
        //アニソン風味
        document.getElementById("anison").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[g]} - ${flat_note_name[gisas]} - ${flat_note_name[aisb]}`;
        //サビ前の常連
        document.getElementById("sabimae").innerHTML = `${sharp_note_name[f]} - ${sharp_note_name[fisges]}m(♭5) - ${sharp_note_name[g]} - ${sharp_note_name[gisas]}m(♭5)`;
        //丸サ進行
        document.getElementById("marusa").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[e]}7 - ${sharp_note_name[a]}m7 - ${sharp_note_name[c]}7`;
        //オシャレ
        document.getElementById("osare").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[e]}7 - ${sharp_note_name[a]}m7 - ${sharp_note_name[d]}7`;
        //メロウな王道進行
        document.getElementById("mellow").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[g]}7/${sharp_note_name[f]} - ${sharp_note_name[e]}m7 - ${sharp_note_name[a]}m7`;
        //晴れやかな王道進行
        document.getElementById("bright").innerHTML = `${sharp_note_name[c]}/${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[e]}m7 - ${sharp_note_name[a]}m7`;
        //レアキャラ
        document.getElementById("rare_character").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[e]}m7 - ${flat_note_name[dises]}dim7 - ${sharp_note_name[d]}m7`;
        //ゲーム音楽の香り
        document.getElementById("game").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[e]}m7 - ${flat_note_name[dises]}△7 - ${sharp_note_name[d]}m7`;
        //チンダル現象みがある
        document.getElementById("tyndall_effect").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[f]}m7 - ${flat_note_name[e]}m7 - ${sharp_note_name[a]}7`;
        //綺麗
        document.getElementById("beautiful").innerHTML = `${sharp_note_name[f]}△7 - ${sharp_note_name[h]}7(♭5)/${sharp_note_name[f]} - ${sharp_note_name[e]}m7 - ${sharp_note_name[e]}dim7 - ${sharp_note_name[d]}m7 - ${sharp_note_name[g]}7/${sharp_note_name[d]} - ${sharp_note_name[c]}Maj7 - ${sharp_note_name[c]}6 `;

        //小室進行
        document.getElementById("komuro").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[c]}`;
        //ハリウッド映画にありそう
        document.getElementById("hollywood").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[f]} - ${sharp_note_name[c]} - ${sharp_note_name[g]}`;
        //スタイリッシュ
        document.getElementById("stylish").innerHTML = `${sharp_note_name[a]}m9 - ${sharp_note_name[d]}m7 - ${sharp_note_name[e]}m7`;
        //ロックンロール
        document.getElementById("rock").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[g]} - ${sharp_note_name[f]} - ${sharp_note_name[g]}`;
        //キャッチー
        document.getElementById("catchy").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[e]}m - ${sharp_note_name[f]} - ${sharp_note_name[g]}`;
        //洋楽っぽい
        document.getElementById("yougaku").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[c]} - ${sharp_note_name[g]} - ${sharp_note_name[f]}`;
        //炎の呼吸
        document.getElementById("homura").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[g]} - ${sharp_note_name[f]} - ${sharp_note_name[c]}`;
        //鉄板のベース半音下降
        document.getElementById("teppan_bass").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[gisas]}aug - ${sharp_note_name[c]}/${sharp_note_name[g]} - ${sharp_note_name[fisges]}m7(♭5)`;
        //ミスティックな質感
        document.getElementById("mystic").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[f]}m - ${sharp_note_name[a]}m - ${sharp_note_name[c]}m`;
        //ディストピア
        document.getElementById("dystopia").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[h]} - ${sharp_note_name[d]}m - ${sharp_note_name[e]}`;
        //領域展開
        document.getElementById("ryouikitenkai").innerHTML = `${sharp_note_name[a]}m7 - ${sharp_note_name[g]}m7 - ${sharp_note_name[c]}7 - ${sharp_note_name[f]}△7`;
        //近未来
        document.getElementById("near_future").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[g]}/${sharp_note_name[a]} - ${sharp_note_name[f]}/${sharp_note_name[a]} - ${sharp_note_name[e]}/${sharp_note_name[a]}`;
        //クラシカルなゼクエンツ
        document.getElementById("classic").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[d]}m - ${sharp_note_name[g]} - ${sharp_note_name[c]} - ${sharp_note_name[f]} - ${sharp_note_name[h]}m(♭5) - ${sharp_note_name[e]}`;
        //サスペンス仕掛け人
        document.getElementById("suspense").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[f]}/${sharp_note_name[a]} - ${sharp_note_name[fisges]}m(♭5)/${sharp_note_name[a]} - ${sharp_note_name[a]}m7`;
        //俺が好き
        document.getElementById("my_favorite").innerHTML = `${sharp_note_name[a]}m - ${sharp_note_name[fisges]}m7(♭5) - ${sharp_note_name[f]}△7 - ${sharp_note_name[d]}m7 - ${sharp_note_name[e]}m7`;

        //ツーファイブ
        document.getElementById("two_five").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[g]}7 - ${sharp_note_name[c]}`;
        //裏コードにする
        document.getElementById("two_five_ura").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[cisdes]}7 - ${sharp_note_name[c]}`;
        //平行短調ツーファイブ
        document.getElementById("two_five_rm").innerHTML = `${sharp_note_name[h]}m7(♭5) - ${sharp_note_name[e]}7 - ${sharp_note_name[c]}`;
        //同主短調ツーファイブ
        document.getElementById("two_five_pm").innerHTML = `${sharp_note_name[f]}m7 - ${flat_note_name[aisb]}7 - ${sharp_note_name[c]}`;
        //Ⅵmへのセカンダリー・ケーデンス
        document.getElementById("two_five_s_to_6m").innerHTML = `${sharp_note_name[h]}7 - ${sharp_note_name[e]}7 - ${sharp_note_name[a]}m`;
        //Ⅳへのセカンダリー・ケーデンス
        document.getElementById("two_five_s_to_4").innerHTML = `${sharp_note_name[g]}m7 - ${sharp_note_name[c]}7 - ${sharp_note_name[f]}`;
        //便利ツーファイブ
        document.getElementById("two_five_useful").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[f]}/${sharp_note_name[g]} - ${sharp_note_name[c]}`;
        //甘美ツーファイブ
        document.getElementById("kanbi").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[f]}m/${sharp_note_name[g]} - ${sharp_note_name[c]}`;
        //助走
        document.getElementById("run_up").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[e]}m7 - ${sharp_note_name[f]}△7 - ${sharp_note_name[g]}`;
        //大気圏外へ
        document.getElementById("outside_the_atmosphere").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[e]}m7 - ${sharp_note_name[f]}m7 - ${sharp_note_name[g]}m7`;
        //平成J-popバラードの最終兵器
        document.getElementById("Ballade").innerHTML = `${sharp_note_name[e]}m7 - ${sharp_note_name[a]}m7 - ${sharp_note_name[d]}m7 - ${sharp_note_name[g]}7`;
        //ジャズの基本形
        document.getElementById("jazz").innerHTML = `${sharp_note_name[d]}m7 - ${sharp_note_name[g]}7 - ${sharp_note_name[c]}△7 - ${sharp_note_name[a]}7`;
        //普通が嫌いなあなたへ
        document.getElementById("uncommon").innerHTML = `${sharp_note_name[fisges]}m7(♭5) - ${sharp_note_name[f]}Maj7 - ${sharp_note_name[e]}m7 - ${sharp_note_name[a]}m7`;
        //モダンメタルの住人
        document.getElementById("modern_metal").innerHTML = `${sharp_note_name[a]}5add9 - ${sharp_note_name[f]}5add9 - ${flat_note_name[dises]}5add9 - ${sharp_note_name[c]}5add9`;
        //スペイン旅行
        document.getElementById("spain").innerHTML = `${sharp_note_name[e]} - ${sharp_note_name[f]} - ${sharp_note_name[g]} - ${sharp_note_name[f]}`;
    } else {
        //シンプル・イズ・ベスト
        document.getElementById("simple").innerHTML = `${flat_note_name[c]} - ${flat_note_name[f]} - ${flat_note_name[g]}`;
        //いつメン
        document.getElementById("itsumen").innerHTML = `${flat_note_name[c]} - ${flat_note_name[a]}m - ${flat_note_name[f]} - ${flat_note_name[g]}`;
        //モノクローム
        document.getElementById("monochrome").innerHTML = `${flat_note_name[c]} - ${flat_note_name[h]}m7(♭5) - ${flat_note_name[e]}7 - ${flat_note_name[a]}m7`;
        //温かみを感じる
        document.getElementById("atatakai").innerHTML = `${flat_note_name[c]} - ${flat_note_name[c]}aug - ${flat_note_name[c]}6 - ${flat_note_name[c]}7 `;
        //優雅
        document.getElementById("elegance").innerHTML = `${flat_note_name[c]}△7 - ${sharp_note_name[cisdes]}dim7 - ${flat_note_name[d]}m7 - ${flat_note_name[g]}7`;
        //カノン進行
        document.getElementById("canon").innerHTML = `${flat_note_name[c]} - ${flat_note_name[g]} - ${flat_note_name[a]}m - ${flat_note_name[e]}m - ${flat_note_name[f]} - ${flat_note_name[c]} - ${flat_note_name[d]}m - ${flat_note_name[g]}`;
        //なめらかカノン進行
        document.getElementById("nameracanon").innerHTML = `${flat_note_name[c]} - ${flat_note_name[g]}/${flat_note_name[h]} - ${flat_note_name[a]}m - ${flat_note_name[e]}m/${flat_note_name[g]} - ${flat_note_name[f]} - ${flat_note_name[c]}/${flat_note_name[e]} - ${flat_note_name[d]}m - ${flat_note_name[g]}`;
        //サンボマスターしか勝たん
        document.getElementById("sambo").innerHTML = `${flat_note_name[c]} - ${flat_note_name[c]}aug/${sharp_note_name[fisges]} - ${flat_note_name[f]}△7`;
        //青春
        document.getElementById("seishun").innerHTML = `${flat_note_name[c]} - ${flat_note_name[e]} - ${flat_note_name[a]}ｍ - ${flat_note_name[g]} `;
        //午前2時の踏切に居そう
        document.getElementById("bump").innerHTML = `${flat_note_name[c]}add9 - ${flat_note_name[a]}m7 - ${flat_note_name[g]} - ${flat_note_name[f]}`;
        //R&B系
        document.getElementById("r_and_b").innerHTML = `${flat_note_name[c]}△7 - ${flat_note_name[f]}m7 - ${flat_note_name[aisb]}7`
        //硬さ：柔らかい
        document.getElementById("yawarakai").innerHTML = `${flat_note_name[c]}△7 - ${flat_note_name[d]}m7 - ${flat_note_name[e]}m7 - ${flat_note_name[f]}△7`;
        //壮大
        document.getElementById("epic").innerHTML = `${flat_note_name[c]}sus4 - ${flat_note_name[c]}sus4/${flat_note_name[cisdes]} - ${flat_note_name[c]}sus4/${flat_note_name[dises]} - ${flat_note_name[c]}sus4/${flat_note_name[f]} - ${flat_note_name[c]}sus4/${flat_note_name[g]}`;
        //ドラマチック
        document.getElementById("dramatic").innerHTML = `${flat_note_name[c]} - ${flat_note_name[cisdes]}/${flat_note_name[c]} - ${flat_note_name[d]}/${flat_note_name[c]} - ${flat_note_name[dises]}/${flat_note_name[c]} - ${flat_note_name[e]}/${flat_note_name[c]}`;
        //ブルージー
        document.getElementById("blues").innerHTML = `${flat_note_name[c]}7 - ${flat_note_name[f]}7 - ${flat_note_name[c]}7 - ${flat_note_name[f]}7 - ${flat_note_name[g]}7 - ${flat_note_name[f]}7 - ${flat_note_name[c]}7 - ${flat_note_name[g]}7`;

        //王道進行
        document.getElementById("oudou").innerHTML = `${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[e]}m - ${flat_note_name[a]}m`;
        //爽やか
        document.getElementById("sawayaka").innerHTML = `${flat_note_name[f]} - ${flat_note_name[c]} - ${flat_note_name[g]} - ${flat_note_name[a]}m`;
        //万能調味料
        document.getElementById("all_purpose_seasoning").innerHTML = `${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[a]}m - ${flat_note_name[c]}`;
        //エモい
        document.getElementById("emotion").innerHTML = `${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[c]} - ${flat_note_name[e]}`;
        //涙を誘うウェポン
        document.getElementById("weapon").innerHTML = `${flat_note_name[f]} - ${flat_note_name[g]} - ${sharp_note_name[gisas]}m(♭5) - ${flat_note_name[a]}m`;
        //アニソン風味
        document.getElementById("anison").innerHTML = `${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[gisas]} - ${flat_note_name[aisb]}`;
        //サビ前の常連
        document.getElementById("sabimae").innerHTML = `${flat_note_name[f]} - ${sharp_note_name[fisges]}m(♭5) - ${flat_note_name[g]} - ${sharp_note_name[gisas]}m(♭5)`;
        //丸サ進行
        document.getElementById("marusa").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[e]}7 - ${flat_note_name[a]}m7 - ${flat_note_name[c]}7`;
        //オシャレ
        document.getElementById("osare").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[e]}7 - ${flat_note_name[a]}m7 - ${flat_note_name[d]}7`;
        //メロウな王道進行
        document.getElementById("mellow").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[g]}7/${flat_note_name[f]} - ${flat_note_name[e]}m7 - ${flat_note_name[a]}m7`;
        //晴れやかな王道進行
        document.getElementById("bright").innerHTML = `${flat_note_name[c]}/${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[e]}m7 - ${flat_note_name[a]}m7`;
        //レアキャラ
        document.getElementById("rare_character").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[e]}m7 - ${flat_note_name[dises]}dim7 - ${flat_note_name[d]}m7`;
        //ゲーム音楽の香り
        document.getElementById("game").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[e]}m7 - ${flat_note_name[dises]}△7 - ${flat_note_name[d]}m7`;
        //チンダル現象みがある
        document.getElementById("tyndall_effect").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[f]}m7 - ${flat_note_name[e]}m7 - ${flat_note_name[a]}7`;
        //綺麗
        document.getElementById("beautiful").innerHTML = `${flat_note_name[f]}△7 - ${flat_note_name[h]}7(♭5)/${flat_note_name[f]} - ${flat_note_name[e]}m7 - ${flat_note_name[e]}dim7 - ${flat_note_name[d]}m7 - ${flat_note_name[g]}7/${flat_note_name[d]} - ${flat_note_name[c]}Maj7 - ${flat_note_name[c]}6 `;

        //小室進行
        document.getElementById("komuro").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[c]}`;
        //ハリウッド映画にありそう
        document.getElementById("hollywood").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[f]} - ${flat_note_name[c]} - ${flat_note_name[g]}`;
        //スタイリッシュ
        document.getElementById("stylish").innerHTML = `${flat_note_name[a]}m9 - ${flat_note_name[d]}m7 - ${flat_note_name[e]}m7`;
        //ロックンロール
        document.getElementById("rock").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[g]} - ${flat_note_name[f]} - ${flat_note_name[g]}`;
        //キャッチー
        document.getElementById("catchy").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[e]}m - ${flat_note_name[f]} - ${flat_note_name[g]}`;
        //洋楽っぽい
        document.getElementById("yougaku").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[c]} - ${flat_note_name[g]} - ${flat_note_name[f]}`;
        //炎の呼吸
        document.getElementById("homura").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[g]} - ${flat_note_name[f]} - ${flat_note_name[c]}`;
        //鉄板のベース半音下降
        document.getElementById("teppan_bass").innerHTML = `${flat_note_name[a]}m - ${sharp_note_name[gisas]}aug - ${flat_note_name[c]}/${flat_note_name[g]} - ${sharp_note_name[fisges]}m7(♭5)`;
        //ミスティックな質感
        document.getElementById("mystic").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[f]}m - ${flat_note_name[a]}m - ${flat_note_name[c]}m`;
        //ディストピア
        document.getElementById("dystopia").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[h]} - ${flat_note_name[d]}m - ${flat_note_name[e]}`;
        //領域展開
        document.getElementById("ryouikitenkai").innerHTML = `${flat_note_name[a]}m7 - ${flat_note_name[g]}m7 - ${flat_note_name[c]}7 - ${flat_note_name[f]}△7`;
        //近未来
        document.getElementById("near_future").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[g]}/${flat_note_name[a]} - ${flat_note_name[f]}/${flat_note_name[a]} - ${flat_note_name[e]}/${flat_note_name[a]}`;
        //クラシカルなゼクエンツ
        document.getElementById("classic").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[d]}m - ${flat_note_name[g]} - ${flat_note_name[c]} - ${flat_note_name[f]} - ${flat_note_name[h]}m(♭5) - ${flat_note_name[e]}`;
        //サスペンス仕掛け人
        document.getElementById("suspense").innerHTML = `${flat_note_name[a]}m - ${flat_note_name[f]}/${flat_note_name[a]} - ${sharp_note_name[fisges]}m(♭5)/${flat_note_name[a]} - ${flat_note_name[a]}m7`;
        //俺が好き
        document.getElementById("my_favorite").innerHTML = `${flat_note_name[a]}m - ${sharp_note_name[fisges]}m7(♭5) - ${flat_note_name[f]}△7 - ${flat_note_name[d]}m7 - ${flat_note_name[e]}m7`;

        //ツーファイブ
        document.getElementById("two_five").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[g]}7 - ${flat_note_name[c]}`;
        //裏コードにする
        document.getElementById("two_five_ura").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[cisdes]}7 - ${flat_note_name[c]}`;
        //平行短調ツーファイブ
        document.getElementById("two_five_rm").innerHTML = `${flat_note_name[h]}m7(♭5) - ${flat_note_name[e]}7 - ${flat_note_name[c]}`;
        //同主短調ツーファイブ
        document.getElementById("two_five_pm").innerHTML = `${flat_note_name[f]}m7 - ${flat_note_name[aisb]}7 - ${flat_note_name[c]}`;
        //Ⅵmへのセカンダリー・ケーデンス
        document.getElementById("two_five_s_to_6m").innerHTML = `${flat_note_name[h]}7 - ${flat_note_name[e]}7 - ${flat_note_name[a]}m`;
        //Ⅳへのセカンダリー・ケーデンス
        document.getElementById("two_five_s_to_4").innerHTML = `${flat_note_name[g]}m7 - ${flat_note_name[c]}7 - ${flat_note_name[f]}`;
        //便利ツーファイブ
        document.getElementById("two_five_useful").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[f]}/${flat_note_name[g]} - ${flat_note_name[c]}`;
        //甘美ツーファイブ
        document.getElementById("kanbi").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[f]}m/${flat_note_name[g]} - ${flat_note_name[c]}`;
        //助走
        document.getElementById("run_up").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[e]}m7 - ${flat_note_name[f]}△7 - ${flat_note_name[g]}`;
        //大気圏外へ
        document.getElementById("outside_the_atmosphere").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[e]}m7 - ${flat_note_name[f]}m7 - ${flat_note_name[g]}m7`;
        //平成J-popバラードの最終兵器
        document.getElementById("Ballade").innerHTML = `${flat_note_name[e]}m7 - ${flat_note_name[a]}m7 - ${flat_note_name[d]}m7 - ${flat_note_name[g]}7`;
        //ジャズの基本形
        document.getElementById("jazz").innerHTML = `${flat_note_name[d]}m7 - ${flat_note_name[g]}7 - ${flat_note_name[c]}△7 - ${flat_note_name[a]}7`;
        //普通が嫌いなあなたへ
        document.getElementById("uncommon").innerHTML = `${sharp_note_name[fisges]}m7(♭5) - ${flat_note_name[f]}Maj7 - ${flat_note_name[e]}m7 - ${flat_note_name[a]}m7`;
        //モダンメタルの住人
        document.getElementById("modern_metal").innerHTML = `${flat_note_name[a]}5add9 - ${flat_note_name[f]}5add9 - ${flat_note_name[dises]}5add9 - ${flat_note_name[c]}5add9`;
        //スペイン旅行
        document.getElementById("spain").innerHTML = `${flat_note_name[e]} - ${flat_note_name[f]} - ${flat_note_name[g]} - ${flat_note_name[f]}`;
    };
};


//コード進行をディグリーネームに切り替えるためのスクリプト
function changeChordProgressionDegree() {

    //  シンプル・イズ・ベスト
    document.getElementById("simple").innerHTML = "Ⅰ-Ⅳ-Ⅴ";
    //いつメン
    document.getElementById("itsumen").innerHTML = "Ⅰ-Ⅵm-Ⅳ-Ⅴ";
    //モノクローム
    document.getElementById("monochrome").innerHTML = "Ⅰ-Ⅶm7(♭5)-Ⅲ7-Ⅵm7";
    //温かみを感じる
    document.getElementById("atatakai").innerHTML = "Ⅰ-Ⅰaug-Ⅰ6-Ⅰ7 ";
    //優雅
    document.getElementById("elegance").innerHTML = "Ⅰ△7-#Ⅰdim7-Ⅱm7-V7";
    //カノン進行
    document.getElementById("canon").innerHTML = "Ⅰ-Ⅴ-Ⅳm-Ⅲm-Ⅳ-Ⅰ-Ⅱm-Ⅴ";
    //なめらかカノン進行
    document.getElementById("nameracanon").innerHTML = "Ⅰ-Ⅴ/Ⅶ-Ⅳm-Ⅲm/Ⅴ-Ⅳ-Ⅰ/Ⅲ-Ⅱm-Ⅴ";
    //サンボマスターしか勝たん
    document.getElementById("sambo").innerHTML = "Ⅰ-Ⅰaug/#Ⅳ-Ⅳ△7";
    //青春
    document.getElementById("seishun").innerHTML = "Ⅰ-Ⅲ-Ⅵｍ-Ⅴ ";
    //午前2時の踏切に居そう
    document.getElementById("bump").innerHTML = "Ⅰadd9-Ⅵm7-Ⅴ-Ⅳ";
    //R&B系
    document.getElementById("r_and_b").innerHTML = "Ⅰ△7-Ⅳm7-♭Ⅶ7";
    //硬度：柔らかい
    document.getElementById("yawarakai").innerHTML = "Ⅰ△7-Ⅱm7-Ⅲm7-Ⅳ△7";
    //壮大
    document.getElementById("epic").innerHTML = "Ⅰsus4-Ⅰsus4/♭Ⅱ-Ⅰsus4/♭Ⅲ-Ⅰsus4/Ⅳ-Ⅰsus4/Ⅴ";
    //ドラマチック
    document.getElementById("dramatic").innerHTML = "Ⅰ-♭Ⅱ/Ⅰ-Ⅱ/Ⅰ-♭Ⅲ/Ⅰ-Ⅲ/Ⅰ";
    //ブルージー
    document.getElementById("blues").innerHTML = "Ⅰ7-Ⅳ7-Ⅰ7-Ⅳ7-Ⅴ7-Ⅳ7-Ⅰ7-Ⅴ7";

    //王道進行
    document.getElementById("oudou").innerHTML = "Ⅳ-Ⅴ-Ⅲm-Ⅵm";
    //爽やか
    document.getElementById("sawayaka").innerHTML = "Ⅳ-Ⅰ-Ⅴ-Ⅵm";
    //万能調味料
    document.getElementById("all_purpose_seasoning").innerHTML = "Ⅳ-Ⅴ-Ⅵm-Ⅰ";
    //エモい
    document.getElementById("emotion").innerHTML = "Ⅳ-Ⅴ-Ⅰ-Ⅲ";
    //涙を誘うウエポン
    document.getElementById("weapon").innerHTML = "Ⅳ-Ⅴ-#Ⅴm(♭5)-Ⅵm";
    //アニソン風味
    document.getElementById("anison").innerHTML = "Ⅳ-Ⅴ-♭Ⅵ-♭Ⅶ";
    //サビ前の常連
    document.getElementById("sabimae").innerHTML = "Ⅳ-#Ⅳm(♭5)-Ⅴ-#Ⅴm(♭5)";
    //丸サ進行
    document.getElementById("marusa").innerHTML = "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅰ7";
    //オシャレ
    document.getElementById("osare").innerHTML = "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅱ7";
    //メロウな王道進行
    document.getElementById("mellow").innerHTML = "Ⅳ△7-Ⅴ7/Ⅳ-Ⅲm7-Ⅵm7";
    //晴れやかな王道進行
    document.getElementById("bright").innerHTML = "Ⅰ/Ⅳ-Ⅴ-Ⅲm7-Ⅵm7";
    //レアキャラ
    document.getElementById("rare_character").innerHTML = "Ⅳ△7-Ⅲm7-♭Ⅲdim7-Ⅱm7";
    //ゲーム音楽の香り
    document.getElementById("game").innerHTML = "Ⅳ△7-Ⅲm7-♭Ⅲ△7-Ⅱm7";
    //チンダル現象みがある
    document.getElementById("tyndall_effect").innerHTML = "Ⅳ△7-Ⅳm7-Ⅲm7-Ⅵ7";
    //綺麗
    document.getElementById("beautiful").innerHTML = "Ⅳ△7-Ⅶm7(♭5)/Ⅳ-Ⅲm7-Ⅲdim7-Ⅱm7-Ⅴ7/Ⅱ-ⅠMaj7-Ⅰ6 ";

    //小室進行
    document.getElementById("komuro").innerHTML = "Ⅵm-Ⅳ-Ⅴ-Ⅰ";
    //ハリウッド映画にありそう
    document.getElementById("hollywood").innerHTML = "Ⅵm-Ⅳ-Ⅰ-Ⅴ";
    //スタイリッシュ
    document.getElementById("stylish").innerHTML = "Ⅵm9-Ⅱm7-Ⅲm7";
    //ロックンロール
    document.getElementById("rock").innerHTML = "Ⅵm-Ⅴ-Ⅳ-Ⅴ";
    //キャッチー
    document.getElementById("catchy").innerHTML = "Ⅵm-Ⅲm-Ⅳ-Ⅴ";
    //洋楽っぽい
    document.getElementById("yougaku").innerHTML = "Ⅵm-Ⅰ-Ⅴ-Ⅳ";
    //炎の呼吸
    document.getElementById("homura").innerHTML = "Ⅵm-Ⅴ-Ⅳ-Ⅰ";
    //鉄板のベース半音下降
    document.getElementById("teppan_bass").innerHTML = "Ⅵm-#Ⅴaug-Ⅰ/Ⅴ-#Ⅳm7(♭5)";
    //ミスティックな質感
    document.getElementById("mystic").innerHTML = "Ⅵm-Ⅳm-Ⅵm-Ⅰm";
    //ディストピア
    document.getElementById("dystopia").innerHTML = "Ⅵm-Ⅶ-Ⅱm-Ⅲ";
    //領域展開
    document.getElementById("ryouikitenkai").innerHTML = "Ⅵm7-Ⅴm7-Ⅰ7-Ⅲ7";
    //近未来
    document.getElementById("near_future").innerHTML = "Ⅵm-Ⅴ/Ⅵ-Ⅳ/Ⅵ-Ⅲ/Ⅵ";
    //クラシカルなゼクエンツ
    document.getElementById("classic").innerHTML = "Ⅵm-Ⅱm-Ⅴ-Ⅰ-Ⅳ-Ⅶm(♭5)-Ⅲ";
    //サスペンス仕掛け人
    document.getElementById("suspense").innerHTML = "Ⅵm-Ⅳ/Ⅵ-#Ⅳm(♭5)/Ⅳ-Ⅵm7";
    //俺が好きなやつ
    document.getElementById("my_favorite").innerHTML = "Ⅵm-#Ⅳm7(♭5)-Ⅳ△7-Ⅱm7→Ⅲm7";

    //ツーファイブ
    document.getElementById("two_five").innerHTML = "Ⅱm7-Ⅴ7-Ⅰ";
    //裏コードにする
    document.getElementById("two_five_ura").innerHTML = "Ⅱm7-♭Ⅱ7-Ⅰ";
    //平行短調ツーファイブ
    document.getElementById("two_five_rm").innerHTML = "Ⅶm7(♭5)-Ⅲ7-Ⅰ";
    //同主短調ツーファイブ
    document.getElementById("two_five_pm").innerHTML = "Ⅳm7-Ⅶ7-Ⅰ";
    //Ⅵmへのセカンダリー・ケーデンス
    document.getElementById("two_five_s_to_6m").innerHTML = "Ⅶm7-Ⅲ7-Ⅵm";
    //Ⅳへのセカンダリー・ケーデンス
    document.getElementById("two_five_s_to_4").innerHTML = "Ⅴm7→Ⅰ7→Ⅳ";
    //便利ツーファイブ
    document.getElementById("two_five_useful").innerHTML = "Ⅱm7-Ⅳ/Ⅴ-Ⅰ";
    //甘美ツーファイブ
    document.getElementById("kanbi").innerHTML = "Ⅱm7-Ⅳm/Ⅴ-Ⅰ";
    //助走
    document.getElementById("run_up").innerHTML = "Ⅱm7-Ⅲm7-Ⅳ7-Ⅴ";
    //大気圏外へ
    document.getElementById("outside_the_atmosphere").innerHTML = "Ⅱm7-Ⅲm7-Ⅳm7-Ⅴm7";
    //平成J-popバラードの最終兵器
    document.getElementById("Ballade").innerHTML = "Ⅲm7-Ⅵm7-Ⅱm7-Ⅴ7";
    //ジャズの基本形
    document.getElementById("jazz").innerHTML = "Ⅱm7-Ⅴ7-Ⅰ△7-Ⅵ7";
    //普通が嫌いなあなたへ
    document.getElementById("uncommon").innerHTML = "#Ⅳm7(♭5)-ⅣMaj7-Ⅲm7-Ⅵm7";
    //モダンメタルの住人
    document.getElementById("modern_metal").innerHTML = "Ⅵ5add9-Ⅳ5add9-♭Ⅲ5add9-Ⅰ5add9";
    //スペイン旅行
    document.getElementById("spain").innerHTML = "Ⅲ-Ⅳ-Ⅴ-Ⅳ";

};



//ダイアトニック・コードのコードネームを切り替えるためのスクリプト
document.getElementById("tonic_note"); function Chordschange() {
    let tonic_note_number = document.getElementById("tonic_note").value;

    let tonic = mod(Number(tonic_note_number) + 0, 12);
    let t1 = mod(Number(tonic_note_number) + 1, 12);
    let t2 = mod(Number(tonic_note_number) + 2, 12);
    let t3 = mod(Number(tonic_note_number) + 3, 12);
    let t4 = mod(Number(tonic_note_number) + 4, 12);
    let t5 = mod(Number(tonic_note_number) + 5, 12);
    let t6 = mod(Number(tonic_note_number) + 6, 12);
    let t7 = mod(Number(tonic_note_number) + 7, 12);
    let t8 = mod(Number(tonic_note_number) + 8, 12);
    let t9 = mod(Number(tonic_note_number) + 9, 12);
    let t10 = mod(Number(tonic_note_number) + 10, 12);
    let t11 = mod(Number(tonic_note_number) + 11, 12);

    if (tonic_note_number == 0 || tonic_note_number == 2 || tonic_note_number == 4 || tonic_note_number == 6 || tonic_note_number == 7 || tonic_note_number == 9 || tonic_note_number == 11) {
        document.getElementById("Major_dia").innerHTML = sharp_note_name[tonic] + " Major：" + sharp_key_signature[tonic];
        document.getElementById("Major_dia_1").innerHTML = sharp_note_name[tonic] + " Maj7";
        document.getElementById("Major_dia_2").innerHTML = sharp_note_name[t2] + " m7";
        document.getElementById("Major_dia_3").innerHTML = sharp_note_name[t4] + " m7";
        document.getElementById("Major_dia_4").innerHTML = sharp_note_name[t5] + " Maj7";
        document.getElementById("Major_dia_5").innerHTML = sharp_note_name[t7] + " 7";
        document.getElementById("Major_dia_6").innerHTML = sharp_note_name[t9] + " m7";
        document.getElementById("Major_dia_7").innerHTML = sharp_note_name[t11] + " m7(♭5)";

        document.getElementById("Rel_HMin_dia").innerHTML = sharp_note_name[t9] + " Harmonic Minor：" + sharp_key_signature[tonic];
        document.getElementById("Rel_HMin_dia_1").innerHTML = sharp_note_name[tonic] + " augMaj7";
        document.getElementById("Rel_HMin_dia_2").innerHTML = sharp_note_name[t2] + " m7";
        document.getElementById("Rel_HMin_dia_3").innerHTML = sharp_note_name[t4] + " 7";
        document.getElementById("Rel_HMin_dia_4").innerHTML = sharp_note_name[t5] + " Maj7";
        document.getElementById("Rel_HMin_dia_5").innerHTML = sharp_note_name[t8] + " dim7";
        document.getElementById("Rel_HMin_dia_6").innerHTML = sharp_note_name[t9] + " mMaj7";
        document.getElementById("Rel_HMin_dia_7").innerHTML = sharp_note_name[t11] + " m7(♭5)";

        document.getElementById("Rel_MMin_dia").innerHTML = sharp_note_name[t9] + " Melodic Minor：" + sharp_key_signature[tonic];
        document.getElementById("Rel_MMin_dia_1").innerHTML = sharp_note_name[tonic] + " augMaj7";
        document.getElementById("Rel_MMin_dia_2").innerHTML = sharp_note_name[t2] + " 7";
        document.getElementById("Rel_MMin_dia_3").innerHTML = sharp_note_name[t4] + " 7";
        document.getElementById("Rel_MMin_dia_4").innerHTML = sharp_note_name[t6] + " m7(♭5)";
        document.getElementById("Rel_MMin_dia_5").innerHTML = sharp_note_name[t8] + " m7(♭5)";
        document.getElementById("Rel_MMin_dia_6").innerHTML = sharp_note_name[t9] + " mMaj7";
        document.getElementById("Rel_MMin_dia_7").innerHTML = sharp_note_name[t11] + " m7";

        document.getElementById("Rel_HMaj_dia").innerHTML = sharp_note_name[tonic] + " Harmonic Major：" + sharp_key_signature[tonic];
        document.getElementById("Rel_HMaj_dia_1").innerHTML = sharp_note_name[tonic] + " Maj7";
        document.getElementById("Rel_HMaj_dia_2").innerHTML = sharp_note_name[t2] + " m7(♭5)";
        document.getElementById("Rel_HMaj_dia_3").innerHTML = sharp_note_name[t4] + " m7・7";
        document.getElementById("Rel_HMaj_dia_4").innerHTML = sharp_note_name[t5] + " mMaj7";
        document.getElementById("Rel_HMaj_dia_5").innerHTML = sharp_note_name[t7] + " 7";
        document.getElementById("Rel_HMaj_dia_6").innerHTML = flat_note_name[t8] + " augMaj7";
        document.getElementById("Rel_HMaj_dia_7").innerHTML = sharp_note_name[t11] + " dim7";

        document.getElementById("Rel_MMaj_dia").innerHTML = sharp_note_name[tonic] + "  Melodic Major：" + sharp_key_signature[tonic];
        document.getElementById("Rel_MMaj_dia_1").innerHTML = sharp_note_name[tonic] + " 7";
        document.getElementById("Rel_MMaj_dia_2").innerHTML = sharp_note_name[t2] + " m7(♭5)";
        document.getElementById("Rel_MMaj_dia_3").innerHTML = sharp_note_name[t4] + " m7(♭5)";
        document.getElementById("Rel_MMaj_dia_4").innerHTML = sharp_note_name[t5] + " mMaj7";
        document.getElementById("Rel_MMaj_dia_5").innerHTML = sharp_note_name[t7] + " m7";
        document.getElementById("Rel_MMaj_dia_6").innerHTML = flat_note_name[t8] + " augMaj7";
        document.getElementById("Rel_MMaj_dia_7").innerHTML = flat_note_name[t10] + " 7";

    } else {
        document.getElementById("Major_dia").innerHTML = flat_note_name[tonic] + " Major：" + flat_key_signature[tonic];
        document.getElementById("Major_dia_1").innerHTML = flat_note_name[tonic] + " Maj7";
        document.getElementById("Major_dia_2").innerHTML = flat_note_name[t2] + " m7";
        document.getElementById("Major_dia_3").innerHTML = flat_note_name[t4] + " m7";
        document.getElementById("Major_dia_4").innerHTML = flat_note_name[t5] + " Maj7";
        document.getElementById("Major_dia_5").innerHTML = flat_note_name[t7] + " 7";
        document.getElementById("Major_dia_6").innerHTML = flat_note_name[t9] + " m7";
        document.getElementById("Major_dia_7").innerHTML = flat_note_name[t11] + " m7(♭5)";

        document.getElementById("Rel_HMin_dia").innerHTML = flat_note_name[t9] + " Harmonic Minor：" + flat_key_signature[tonic];
        document.getElementById("Rel_HMin_dia_1").innerHTML = flat_note_name[tonic] + " augMaj7";
        document.getElementById("Rel_HMin_dia_2").innerHTML = flat_note_name[t2] + " m7";
        document.getElementById("Rel_HMin_dia_3").innerHTML = flat_note_name[t4] + " 7";
        document.getElementById("Rel_HMin_dia_4").innerHTML = flat_note_name[t5] + " Maj7";
        document.getElementById("Rel_HMin_dia_5").innerHTML = sharp_note_name[t8] + " dim7";
        document.getElementById("Rel_HMin_dia_6").innerHTML = flat_note_name[t9] + " mMaj7";
        document.getElementById("Rel_HMin_dia_7").innerHTML = flat_note_name[t11] + " m7(♭5)";

        document.getElementById("Rel_MMin_dia").innerHTML = flat_note_name[t9] + " Melodic Minor：" + flat_key_signature[tonic];
        document.getElementById("Rel_MMin_dia_1").innerHTML = flat_note_name[tonic] + " augMaj7";
        document.getElementById("Rel_MMin_dia_2").innerHTML = flat_note_name[t2] + " 7";
        document.getElementById("Rel_MMin_dia_3").innerHTML = flat_note_name[t4] + " 7";
        document.getElementById("Rel_MMin_dia_4").innerHTML = sharp_note_name[t6] + " m7(♭5)";
        document.getElementById("Rel_MMin_dia_5").innerHTML = sharp_note_name[t8] + " m7(♭5)";
        document.getElementById("Rel_MMin_dia_6").innerHTML = flat_note_name[t9] + " mMaj7";
        document.getElementById("Rel_MMin_dia_7").innerHTML = flat_note_name[t11] + " m7";

        document.getElementById("Rel_HMaj_dia").innerHTML = flat_note_name[tonic] + " Harmonic Major：" + flat_key_signature[tonic];
        document.getElementById("Rel_HMaj_dia_1").innerHTML = flat_note_name[tonic] + " Maj7";
        document.getElementById("Rel_HMaj_dia_2").innerHTML = flat_note_name[t2] + " m7(♭5)";
        document.getElementById("Rel_HMaj_dia_3").innerHTML = flat_note_name[t4] + " m7・7";
        document.getElementById("Rel_HMaj_dia_4").innerHTML = flat_note_name[t5] + " mMaj7";
        document.getElementById("Rel_HMaj_dia_5").innerHTML = flat_note_name[t7] + " 7";
        document.getElementById("Rel_HMaj_dia_6").innerHTML = flat_note_name[t8] + " augMaj7";
        document.getElementById("Rel_HMaj_dia_7").innerHTML = flat_note_name[t11] + " dim7";

        document.getElementById("Rel_MMaj_dia").innerHTML = flat_note_name[tonic] + "  Melodic Major：" + flat_key_signature[tonic];
        document.getElementById("Rel_MMaj_dia_1").innerHTML = flat_note_name[tonic] + " 7";
        document.getElementById("Rel_MMaj_dia_2").innerHTML = flat_note_name[t2] + " m7(♭5)";
        document.getElementById("Rel_MMaj_dia_3").innerHTML = flat_note_name[t4] + " m7(♭5)";
        document.getElementById("Rel_MMaj_dia_4").innerHTML = flat_note_name[t5] + " mMaj7";
        document.getElementById("Rel_MMaj_dia_5").innerHTML = flat_note_name[t7] + " m7";
        document.getElementById("Rel_MMaj_dia_6").innerHTML = flat_note_name[t8] + " augMaj7";
        document.getElementById("Rel_MMaj_dia_7").innerHTML = flat_note_name[t10] + " 7";
    }


    if (t3 == 0 || t3 == 2 || t3 == 4 || t3 == 6 || t3 == 7 || t3 == 9 || t3 == 11) {
        document.getElementById("Para_Minor_dia").innerHTML = sharp_note_name[tonic] + " Minor：" + sharp_key_signature[t3];
        document.getElementById("Para_Minor_dia_1").innerHTML = sharp_note_name[tonic] + " m7";
        document.getElementById("Para_Minor_dia_2").innerHTML = sharp_note_name[t2] + " m7(♭5)";
        document.getElementById("Para_Minor_dia_3").innerHTML = sharp_note_name[t3] + " Maj7";
        document.getElementById("Para_Minor_dia_4").innerHTML = sharp_note_name[t5] + " m7";
        document.getElementById("Para_Minor_dia_5").innerHTML = sharp_note_name[t7] + " m7";
        document.getElementById("Para_Minor_dia_6").innerHTML = sharp_note_name[t8] + " Maj7";
        document.getElementById("Para_Minor_dia_7").innerHTML = sharp_note_name[t10] + " 7";

        document.getElementById("Para_HMin_dia").innerHTML = sharp_note_name[tonic] + " Harmonic Minor：" + sharp_key_signature[t3];
        document.getElementById("Para_HMin_dia_1").innerHTML = sharp_note_name[tonic] + " mMaj7";
        document.getElementById("Para_HMin_dia_2").innerHTML = sharp_note_name[t2] + " m7(♭5)";
        document.getElementById("Para_HMin_dia_3").innerHTML = sharp_note_name[t3] + " augMaj7";
        document.getElementById("Para_HMin_dia_4").innerHTML = sharp_note_name[t5] + " m7";
        document.getElementById("Para_HMin_dia_5").innerHTML = sharp_note_name[t7] + " 7";
        document.getElementById("Para_HMin_dia_6").innerHTML = sharp_note_name[t8] + " Maj7";
        document.getElementById("Para_HMin_dia_7").innerHTML = sharp_note_name[t11] + " dim7";

        document.getElementById("Para_MMin_dia").innerHTML = sharp_note_name[tonic] + " Melodic Minor：" + sharp_key_signature[t3];
        document.getElementById("Para_MMin_dia_1").innerHTML = sharp_note_name[tonic] + " mMaj7";
        document.getElementById("Para_MMin_dia_2").innerHTML = sharp_note_name[t2] + " m7";
        document.getElementById("Para_MMin_dia_3").innerHTML = sharp_note_name[t3] + " augMaj7";
        document.getElementById("Para_MMin_dia_4").innerHTML = sharp_note_name[t5] + " 7";
        document.getElementById("Para_MMin_dia_5").innerHTML = sharp_note_name[t7] + " 7";
        document.getElementById("Para_MMin_dia_6").innerHTML = sharp_note_name[t9] + " m7(♭5)";
        document.getElementById("Para_MMin_dia_7").innerHTML = sharp_note_name[t11] + " m7(♭5)";
    } else {

        document.getElementById("Para_Minor_dia").innerHTML = flat_note_name[tonic] + " Minor：" + flat_key_signature[t3];
        document.getElementById("Para_Minor_dia_1").innerHTML = flat_note_name[tonic] + " m7";
        document.getElementById("Para_Minor_dia_2").innerHTML = flat_note_name[t2] + " m7(♭5)";
        document.getElementById("Para_Minor_dia_3").innerHTML = flat_note_name[t3] + " Maj7";
        document.getElementById("Para_Minor_dia_4").innerHTML = flat_note_name[t5] + " m7";
        document.getElementById("Para_Minor_dia_5").innerHTML = flat_note_name[t7] + " m7";
        document.getElementById("Para_Minor_dia_6").innerHTML = flat_note_name[t8] + " Maj7";
        document.getElementById("Para_Minor_dia_7").innerHTML = flat_note_name[t10] + " 7";

        document.getElementById("Para_HMin_dia").innerHTML = flat_note_name[tonic] + " Harmonic Minor：" + flat_key_signature[t3];
        document.getElementById("Para_HMin_dia_1").innerHTML = flat_note_name[tonic] + " mMaj7";
        document.getElementById("Para_HMin_dia_2").innerHTML = flat_note_name[t2] + " m7(♭5)";
        document.getElementById("Para_HMin_dia_3").innerHTML = flat_note_name[t3] + " augMaj7";
        document.getElementById("Para_HMin_dia_4").innerHTML = flat_note_name[t5] + " m7";
        document.getElementById("Para_HMin_dia_5").innerHTML = flat_note_name[t7] + " 7";
        document.getElementById("Para_HMin_dia_6").innerHTML = flat_note_name[t8] + " Maj7";
        document.getElementById("Para_HMin_dia_7").innerHTML = sharp_note_name[t11] + " dim7";

        document.getElementById("Para_MMin_dia").innerHTML = flat_note_name[tonic] + " Melodic Minor：" + flat_key_signature[t3];
        document.getElementById("Para_MMin_dia_1").innerHTML = flat_note_name[tonic] + " mMaj7";
        document.getElementById("Para_MMin_dia_2").innerHTML = flat_note_name[t2] + " m7";
        document.getElementById("Para_MMin_dia_3").innerHTML = flat_note_name[t3] + " augMaj7";
        document.getElementById("Para_MMin_dia_4").innerHTML = flat_note_name[t5] + " 7";
        document.getElementById("Para_MMin_dia_5").innerHTML = flat_note_name[t7] + " 7";
        document.getElementById("Para_MMin_dia_6").innerHTML = sharp_note_name[t9] + " m7(♭5)";
        document.getElementById("Para_MMin_dia_7").innerHTML = sharp_note_name[t11] + " m7(♭5)";
    }


};

//ディグリーネームで表示するためのスクリプト
document.getElementById("degree_button"); function degree() {

    document.getElementById("Major_dia").innerHTML = "Ⅰ Major";
    document.getElementById("Major_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Major_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Major_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Major_dia_4").innerHTML = "Ⅳ Maj7";
    document.getElementById("Major_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Major_dia_6").innerHTML = "Ⅵ m7";
    document.getElementById("Major_dia_7").innerHTML = "Ⅵ m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = "Ⅵ Harmonic Minor";
    document.getElementById("Rel_HMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = "Ⅳ m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = "Ⅶ dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = "Ⅱ m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = "Ⅵ Melodic Minor";
    document.getElementById("Rel_MMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = "Ⅳ 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = "Ⅶ m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = "Ⅱ m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = "Ⅰ Harmonic Major";
    document.getElementById("Rel_HMaj_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = "Ⅲ m7・7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = "Ⅰ Melodic Major";
    document.getElementById("Rel_MMaj_dia_1").innerHTML = "Ⅰ 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = "Ⅲ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_Minor_dia").innerHTML = "Ⅰ Minor";
    document.getElementById("Para_Minor_dia_1").innerHTML = "Ⅰ m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = "♭Ⅲ Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_HMin_dia").innerHTML = "Ⅰ Harmonic Minor";
    document.getElementById("Para_HMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Para_MMin_dia").innerHTML = "Ⅰ Melodic Minor";
    document.getElementById("Para_MMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = "Ⅳ 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = "Ⅶ m7(♭5)";

};


//ダイアトニックコードの着色をリセットする
function paintDiatonicChordsReset() {

    document.getElementById("Major_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Major_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMin_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMin_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Para_Minor_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl text-center";

    document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_2").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_6").className = "list-group-item col-xl text-center";
    document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl text-center";
};

//ダイアトニック・コードのコードネームに対応する場所の色を変更する
document.getElementById("paint_diatonic_chords"); function paintDiatonicChords() {

    paintDiatonicChordsReset()

    let paint_diatonic_chords = document.getElementById("paint_diatonic_chords").value;

    if (paint_diatonic_chords == 0) {

        document.getElementById("Major_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Major_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMin_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMin_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Para_Minor_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl text-center";

        document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_2").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_6").className = "list-group-item col-xl text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl text-center";

    } else if (paint_diatonic_chords == 1) {
        document.getElementById("Major_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";

    } else if (paint_diatonic_chords == 2) {
        document.getElementById("Major_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";

    } else if (paint_diatonic_chords == 3) {
        document.getElementById("Major_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        ;
    } else if (paint_diatonic_chords == 4) {
        document.getElementById("Major_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";

    } else if (paint_diatonic_chords == 5) {
        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";

    } else if (paint_diatonic_chords == 6) {
        document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";

    } else if (paint_diatonic_chords == 7) {
        document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";

    };

};


document.getElementById("chord_root_name"); function ChangeChordRoot() {
    let chord_root_name_number = document.getElementById("chord_root_name").value;

    let tonic = mod(Number(chord_root_name_number) - 0, 12);
    let t1 = mod(Number(chord_root_name_number) + 1, 12);
    let t2 = mod(Number(chord_root_name_number) + 2, 12);
    let t3 = mod(Number(chord_root_name_number) + 3, 12);
    let t4 = mod(Number(chord_root_name_number) + 4, 12);
    let t5 = mod(Number(chord_root_name_number) + 5, 12);
    let t6 = mod(Number(chord_root_name_number) + 6, 12);
    let t7 = mod(Number(chord_root_name_number) + 7, 12);
    let t8 = mod(Number(chord_root_name_number) + 8, 12);
    let t9 = mod(Number(chord_root_name_number) + 9, 12);
    let t10 = mod(Number(chord_root_name_number) + 10, 12);
    let t11 = mod(Number(chord_root_name_number) + 11, 12);

    document.getElementById("chord_0").innerHTML = note_name[tonic];
    document.getElementById("chord_1").innerHTML = note_name[t1];
    document.getElementById("chord_2").innerHTML = note_name[t2];
    document.getElementById("chord_3").innerHTML = note_name[t3];
    document.getElementById("chord_4").innerHTML = note_name[t4];
    document.getElementById("chord_5").innerHTML = note_name[t5];
    document.getElementById("chord_6").innerHTML = note_name[t6];
    document.getElementById("chord_7").innerHTML = note_name[t7];
    document.getElementById("chord_8").innerHTML = note_name[t8];
    document.getElementById("chord_9").innerHTML = note_name[t9];
    document.getElementById("chord_10").innerHTML = note_name[t10];
    document.getElementById("chord_11").innerHTML = note_name[t11];
};


document.getElementById("chord_root_name"); function italyChangeChordRoot() {
    let chord_root_name_number = document.getElementById("chord_root_name").value;

    let tonic = mod(Number(chord_root_name_number) - 0, 12);
    let t1 = mod(Number(chord_root_name_number) + 1, 12);
    let t2 = mod(Number(chord_root_name_number) + 2, 12);
    let t3 = mod(Number(chord_root_name_number) + 3, 12);
    let t4 = mod(Number(chord_root_name_number) + 4, 12);
    let t5 = mod(Number(chord_root_name_number) + 5, 12);
    let t6 = mod(Number(chord_root_name_number) + 6, 12);
    let t7 = mod(Number(chord_root_name_number) + 7, 12);
    let t8 = mod(Number(chord_root_name_number) + 8, 12);
    let t9 = mod(Number(chord_root_name_number) + 9, 12);
    let t10 = mod(Number(chord_root_name_number) + 10, 12);
    let t11 = mod(Number(chord_root_name_number) + 11, 12);

    document.getElementById("chord_0").innerHTML = italy_note_name[tonic];
    document.getElementById("chord_1").innerHTML = italy_note_name[t1];
    document.getElementById("chord_2").innerHTML = italy_note_name[t2];
    document.getElementById("chord_3").innerHTML = italy_note_name[t3];
    document.getElementById("chord_4").innerHTML = italy_note_name[t4];
    document.getElementById("chord_5").innerHTML = italy_note_name[t5];
    document.getElementById("chord_6").innerHTML = italy_note_name[t6];
    document.getElementById("chord_7").innerHTML = italy_note_name[t7];
    document.getElementById("chord_8").innerHTML = italy_note_name[t8];
    document.getElementById("chord_9").innerHTML = italy_note_name[t9];
    document.getElementById("chord_10").innerHTML = italy_note_name[t10];
    document.getElementById("chord_11").innerHTML = italy_note_name[t11];
};

document.getElementById("chord_root_name"); function japanChangeChordRoot() {
    let chord_root_name_number = document.getElementById("chord_root_name").value;

    let tonic = mod(Number(chord_root_name_number) - 0, 12);
    let t1 = mod(Number(chord_root_name_number) + 1, 12);
    let t2 = mod(Number(chord_root_name_number) + 2, 12);
    let t3 = mod(Number(chord_root_name_number) + 3, 12);
    let t4 = mod(Number(chord_root_name_number) + 4, 12);
    let t5 = mod(Number(chord_root_name_number) + 5, 12);
    let t6 = mod(Number(chord_root_name_number) + 6, 12);
    let t7 = mod(Number(chord_root_name_number) + 7, 12);
    let t8 = mod(Number(chord_root_name_number) + 8, 12);
    let t9 = mod(Number(chord_root_name_number) + 9, 12);
    let t10 = mod(Number(chord_root_name_number) + 10, 12);
    let t11 = mod(Number(chord_root_name_number) + 11, 12);

    document.getElementById("chord_0").innerHTML = japan_note_name[tonic];
    document.getElementById("chord_1").innerHTML = japan_note_name[t1];
    document.getElementById("chord_2").innerHTML = japan_note_name[t2];
    document.getElementById("chord_3").innerHTML = japan_note_name[t3];
    document.getElementById("chord_4").innerHTML = japan_note_name[t4];
    document.getElementById("chord_5").innerHTML = japan_note_name[t5];
    document.getElementById("chord_6").innerHTML = japan_note_name[t6];
    document.getElementById("chord_7").innerHTML = japan_note_name[t7];
    document.getElementById("chord_8").innerHTML = japan_note_name[t8];
    document.getElementById("chord_9").innerHTML = japan_note_name[t9];
    document.getElementById("chord_10").innerHTML = japan_note_name[t10];
    document.getElementById("chord_11").innerHTML = japan_note_name[t11];
};


document.getElementById("chord_root_name"); function germanyChangeChordRoot() {
    let chord_root_name_number = document.getElementById("chord_root_name").value;

    let tonic = mod(Number(chord_root_name_number) - 0, 12);
    let t1 = mod(Number(chord_root_name_number) + 1, 12);
    let t2 = mod(Number(chord_root_name_number) + 2, 12);
    let t3 = mod(Number(chord_root_name_number) + 3, 12);
    let t4 = mod(Number(chord_root_name_number) + 4, 12);
    let t5 = mod(Number(chord_root_name_number) + 5, 12);
    let t6 = mod(Number(chord_root_name_number) + 6, 12);
    let t7 = mod(Number(chord_root_name_number) + 7, 12);
    let t8 = mod(Number(chord_root_name_number) + 8, 12);
    let t9 = mod(Number(chord_root_name_number) + 9, 12);
    let t10 = mod(Number(chord_root_name_number) + 10, 12);
    let t11 = mod(Number(chord_root_name_number) + 11, 12);

    document.getElementById("chord_0").innerHTML = germany_note_name[tonic];
    document.getElementById("chord_1").innerHTML = germany_note_name[t1];
    document.getElementById("chord_2").innerHTML = germany_note_name[t2];
    document.getElementById("chord_3").innerHTML = germany_note_name[t3];
    document.getElementById("chord_4").innerHTML = germany_note_name[t4];
    document.getElementById("chord_5").innerHTML = germany_note_name[t5];
    document.getElementById("chord_6").innerHTML = germany_note_name[t6];
    document.getElementById("chord_7").innerHTML = germany_note_name[t7];
    document.getElementById("chord_8").innerHTML = germany_note_name[t8];
    document.getElementById("chord_9").innerHTML = germany_note_name[t9];
    document.getElementById("chord_10").innerHTML = germany_note_name[t10];
    document.getElementById("chord_11").innerHTML = germany_note_name[t11];
};




//音名の表示形式を変更する
document.getElementById("key_signature_names"); function keySignatureNames() {

    let key_signature_names = document.getElementById("key_signature_names").value;

    if (key_signature_names == 0) {
        ChangeChordRoot();
    } else if (key_signature_names == 1) {
        italyChangeChordRoot();
    } else if (key_signature_names == 2) {
        japanChangeChordRoot();
    } else if (key_signature_names == 3) {
        germanyChangeChordRoot();
    } else {
        ChangeChordRoot();
    }

};

//コードネームに対応する場所の色を変更する
document.getElementById("chord_name"); function ChangeChords() {

    let root = document.getElementById("chord_0");
    let min2 = document.getElementById("chord_1");
    let maj2 = document.getElementById("chord_2");
    let min3 = document.getElementById("chord_3");
    let maj3 = document.getElementById("chord_4");
    let p4 = document.getElementById("chord_5");
    let dim5 = document.getElementById("chord_6");
    let p5 = document.getElementById("chord_7");
    let aug5 = document.getElementById("chord_8");
    let maj6 = document.getElementById("chord_9");
    let min7 = document.getElementById("chord_10");
    let maj7 = document.getElementById("chord_11");

    //コードネームのドロップダウンリストのvalueを取得
    let chord_num_binary = document.getElementById("chord_name").value;

    //二進数の値を1文字ずつ分解して配列chord_numberに格納
    let chord_number = chord_num_binary.split('');

    if (Number(chord_number[0]) == 1) {
        root.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        root.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[1]) == 1) {
        min2.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        min2.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[2]) == 1) {
        maj2.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        maj2.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[3]) == 1) {
        min3.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        min3.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[4]) == 1) {
        maj3.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        maj3.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[5]) == 1) {
        p4.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        p4.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[6]) == 1) {
        dim5.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        dim5.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[7]) == 1) {
        p5.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        p5.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[8]) == 1) {
        aug5.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        aug5.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[9]) == 1) {
        maj6.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        maj6.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[10]) == 1) {
        min7.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        min7.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[11]) == 1) {
        maj7.className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else {
        maj7.className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    }

};



//スケールの調号を計算する
function scaleKeySignature() {

    ChangeChords();

    keySignatureNames();

    let scale_binary = document.getElementById("chord_name").value;
    let scale_tonic_num = document.getElementById("chord_root_name").value;
    let parent_scale_num = 0;

    let ionian_case = mod(Number(scale_tonic_num) - 0, 12);
    let dorian_case = mod(Number(scale_tonic_num) - 2, 12);
    let phrygian_case = mod(Number(scale_tonic_num) - 4, 12);
    let lydian_case = mod(Number(scale_tonic_num) - 5, 12);
    let mixolydian_case = mod(Number(scale_tonic_num) - 7, 12);
    let altered_case = mod(Number(scale_tonic_num) - 8, 12);
    let aeolian_case = mod(Number(scale_tonic_num) - 9, 12);
    let locrian_case = mod(Number(scale_tonic_num) - 11, 12);

    //受け取ったスケールの2進数の値を、10進数のスケールナンバーに変換
    scale_binary_split = scale_binary.split('');
    scale_binary_reverse = scale_binary_split.reverse();
    scale_binary_rejoin = scale_binary_reverse.join("");

    let scale_dec = parseInt(scale_binary_rejoin, 2);
    let scale_key_signature_num = 0;

    //スケールの調号を判定する
    if (scale_dec == 2741 || scale_dec == 2485 || scale_dec == 1461 || scale_dec == 4095 || scale_dec == 2225 || scale_dec == 669) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[ionian_case]}で記譜されます。`;

    } else if (scale_dec == 1709 || scale_dec == 174) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[dorian_case]}で記譜されます。`;

    } else if (scale_dec == 1451 || scale_dec == 1187 || scale_dec == 419 || scale_dec == 1435 || scale_dec == 1467 || scale_dec == 1459) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[phrygian_case]}で記譜されます。`;

    } else if (scale_dec == 2773 || scale_dec == 1749) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[lydian_case]}で記譜されます。`;

    } else if (scale_dec == 1717 || scale_dec == 677 || scale_dec == 1715 || scale_dec == 1365 || scale_dec == 1755) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[mixolydian_case]}で記譜されます。`;

    } else if (scale_dec == 1453 || scale_dec == 2477 || scale_dec == 2733 || scale_dec == 1257) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[aeolian_case]}で記譜されます。`;

    } else if (scale_dec == 1387) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[locrian_case]}で記譜されます。`;

    } else if (scale_dec == 1371) {
        document.getElementById("keySignatur_text").innerHTML = `通常、調号は${key_signature[altered_case]}で記譜されます。`;

    } else {
        document.getElementById("keySignatur_text").innerHTML = "";
    };


    //親スケールと異名同音の判定に使う
    if (scale_dec == 2741 || scale_dec == 2485 || scale_dec == 1461 || scale_dec == 4095 || scale_dec == 2225 || scale_dec == 669) {
        if (scale_dec == 1461) {
            parent_scale_num = mod(Number(scale_tonic_num) - 7, 12);
            scale_key_signature_num = ionian_case;
        } else {
            parent_scale_num = mod(Number(scale_tonic_num) - 0, 12);
            scale_key_signature_num = ionian_case;
        };
    } else if (scale_dec == 1709) {
        parent_scale_num = mod(Number(scale_tonic_num) - 2, 12);
        scale_key_signature_num = dorian_case;

    } else if (scale_dec == 1451 || scale_dec == 1187 || scale_dec == 419 || scale_dec == 1435 || scale_dec == 1467) {
        parent_scale_num = mod(Number(scale_tonic_num) - 4, 12);
        scale_key_signature_num = phrygian_case;

    } else if (scale_dec == 2773 || scale_dec == 1749) {
        parent_scale_num = mod(Number(scale_tonic_num) - 5, 12);
        scale_key_signature_num = lydian_case;

    } else if (scale_dec == 1717 || scale_dec == 677 || scale_dec == 1715 || scale_dec == 1365 || scale_dec == 1755 || scale_dec == 1459) {
        parent_scale_num = mod(Number(scale_tonic_num) - 7, 12);
        scale_key_signature_num = mixolydian_case;

    } else if (scale_dec == 1453 || scale_dec == 2477 || scale_dec == 2733 || scale_dec == 1257) {
        parent_scale_num = mod(Number(scale_tonic_num) - 9, 12);
        scale_key_signature_num = aeolian_case;

    } else if (scale_dec == 1387) {
        parent_scale_num = mod(Number(scale_tonic_num) - 11, 12);
        scale_key_signature_num = locrian_case;

    } else if (scale_dec == 1371) {
        parent_scale_num = mod(Number(scale_tonic_num) - 11, 12);
        scale_key_signature_num = altered_case;

    } else {
        document.getElementById("keySignatur_text").innerHTML = "";
    };

    //ドミナントコード上で使えるかを判定する
    if (scale_key_signature_num == 0 || scale_key_signature_num == 2 || scale_key_signature_num == 4 || scale_key_signature_num == 6 || scale_key_signature_num == 7 || scale_key_signature_num == 9 || scale_key_signature_num == 11) {
        if (scale_dec == 1717 || scale_dec == 1459 || scale_dec == 1749 || scale_dec == 1461 || scale_dec == 1715 || scale_dec == 1435 || scale_dec == 1365 || scale_dec == 1755) {
            document.getElementById("dominant_chord_text").innerHTML = `${sharp_note_name[scale_tonic_num]}7(ドミナントセブンスコード)上で使用可能なスケールです。`;
        } else if (scale_dec == 1371) {
            document.getElementById("dominant_chord_text").innerHTML = `スーパーロクリアンではなくオルタード・スケールとして解釈する場合は、${flat_note_name[scale_tonic_num]}7(ドミナントセブンスコード)上で使用可能なスケールです。`;
        } else {
            document.getElementById("dominant_chord_text").innerHTML = "";
        };
    } else {
        if (scale_dec == 1717 || scale_dec == 1459 || scale_dec == 1749 || scale_dec == 1461 || scale_dec == 1715 || scale_dec == 1435 || scale_dec == 1365 || scale_dec == 1755) {
            document.getElementById("dominant_chord_text").innerHTML = `${flat_note_name[scale_tonic_num]}7(ドミナントセブンスコード)上で使用可能なスケールです。`;
        } else if (scale_dec == 1371) {
            document.getElementById("dominant_chord_text").innerHTML = `スーパーロクリアンではなくオルタード・スケールとして解釈する場合は、${flat_note_name[scale_tonic_num]}7(ドミナントセブンスコード)上で使用可能なスケールです。`;
        } else {
            document.getElementById("dominant_chord_text").innerHTML = "";
        };
    };

    //スケールファミリーを判定する
    if (scale_key_signature_num == 0 || scale_key_signature_num == 2 || scale_key_signature_num == 4 || scale_key_signature_num == 6 || scale_key_signature_num == 7 || scale_key_signature_num == 9 || scale_key_signature_num == 11) {
        if (scale_dec == 2741 || scale_dec == 1709 || scale_dec == 1451 || scale_dec == 2773 || scale_dec == 1717 || scale_dec == 1453 || scale_dec == 1387) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${sharp_note_name[parent_scale_num]}メジャースケール(長音階)」です。<br><br>Forte number：「7-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 2477 || scale_dec == 1643 || scale_dec == 2869 || scale_dec == 1741 || scale_dec == 1459 || scale_dec == 2777 || scale_dec == 859) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${sharp_note_name[parent_scale_num]}ハーモニックマイナースケール(和声的短音階)」です。<br><br>Forte number：「7-32」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 2733 || scale_dec == 1707 || scale_dec == 2901 || scale_dec == 1749 || scale_dec == 1461 || scale_dec == 1389 || scale_dec == 1371) {
            if (scale_dec == 1461) {
                document.getElementById("scale_text").innerHTML
                    = `親スケールは「${sharp_note_name[parent_scale_num]}メロディックマイナースケール(旋律的短音階)」です。<br>※メロディックメジャーはメロディックマイナーの第5モードとして解釈できるため。<br><br>Forte number：「7-34」<br>Scale number：「${scale_dec}」`;
            } else {
                document.getElementById("scale_text").innerHTML
                    = `親スケールは「${sharp_note_name[parent_scale_num]}メロディックマイナースケール(旋律的短音階)」です。<br><br>Forte number：「7-34」<br>Scale number：「${scale_dec}」`;
            };

        } else if (scale_dec == 2485 || scale_dec == 1645 || scale_dec == 1435 || scale_dec == 2765 || scale_dec == 1715 || scale_dec == 2905 || scale_dec == 875) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${sharp_note_name[parent_scale_num]}ハーモニックメジャースケール(和声的長音階)」です。<br><br>Forte number：「7-32」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 661 || scale_dec == 1189 || scale_dec == 1321 || scale_dec == 677 || scale_dec == 1193) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1187) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-29」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 419 || scale_dec == 2225) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-20」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1365) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「6-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 669 || scale_dec == 1257) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「6-Z47」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1467) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「8-26」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1755 || scale_dec == 2925) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「8-28」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 4095) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「12-1」<br>Scale number：「${scale_dec}」`;

        } else {
            document.getElementById("scale_text").innerHTML
                = "";
        };
    } else {
        if (scale_dec == 2741 || scale_dec == 1709 || scale_dec == 1451 || scale_dec == 2773 || scale_dec == 1717 || scale_dec == 1453 || scale_dec == 1387) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${flat_note_name[parent_scale_num]}メジャースケール(長音階)」です。<br><br>Forte number：「7-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 2477 || scale_dec == 1643 || scale_dec == 2869 || scale_dec == 1741 || scale_dec == 1459 || scale_dec == 2777 || scale_dec == 859) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${flat_note_name[parent_scale_num]}ハーモニックマイナースケール(和声的短音階)」です。<br><br>Forte number：「7-32」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 2733 || scale_dec == 1707 || scale_dec == 2901 || scale_dec == 1749 || scale_dec == 1461 || scale_dec == 1389 || scale_dec == 1371) {
            if (scale_dec == 1461) {
                document.getElementById("scale_text").innerHTML
                    = `親スケールは「${flat_note_name[parent_scale_num]}メロディックマイナースケール(旋律的短音階)」です。<br>※メロディックメジャーはメロディックマイナーの第5モードとして解釈できるため。<br><br>Forte number：「7-34」<br>Scale number：「${scale_dec}」`;
            } else {
                document.getElementById("scale_text").innerHTML
                    = `親スケールは「${flat_note_name[parent_scale_num]}メロディックマイナースケール(旋律的短音階)」です。<br><br>Forte number：「7-34」<br>Scale number：「${scale_dec}」`;
            };

        } else if (scale_dec == 2485 || scale_dec == 1645 || scale_dec == 1435 || scale_dec == 2765 || scale_dec == 1715 || scale_dec == 2905 || scale_dec == 875) {
            document.getElementById("scale_text").innerHTML
                = `親スケールは「${flat_note_name[parent_scale_num]}ハーモニックメジャースケール(和声的長音階)」です。<br><br>Forte number：「7-32」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 661 || scale_dec == 1189 || scale_dec == 1321 || scale_dec == 677 || scale_dec == 1193) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1187) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-29」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 419 || scale_dec == 2225) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「5-20」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1365) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「6-35」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 669 || scale_dec == 1257) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「6-Z47」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1467) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「8-26」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 1755 || scale_dec == 2925) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「8-28」<br>Scale number：「${scale_dec}」`;

        } else if (scale_dec == 4095) {
            document.getElementById("scale_text").innerHTML
                = `Forte number：「12-1」<br>Scale number：「${scale_dec}」`;

        } else {
            document.getElementById("scale_text").innerHTML
                = "";
        };

    };
};



//音価を計算する
document.getElementById("input_bpm"); function NoteLength() {

    let input_bpm = document.getElementById("input_bpm").value;
    let time_unit = document.getElementById("time_unit").value;

    let time_type = 1;

    if (time_unit == "ms") {
        time_type = 1;
    } else if (time_unit == "μs") {
        time_type = 1000;
    } else if (time_unit == "sec") {
        time_type = 1 / 1000;
    } else if (time_unit == "秒") {
        time_type = 1 / 1000;
    } else if (time_unit == "ミリ秒") {
        time_type = 1;
    } else if (time_unit == "マイクロ秒") {
        time_type = 1000;
    };

    //1拍(4分音符)の長さ
    let common_beat_time = Number(one_minutes) / Number(input_bpm);
    //全音符の長さ
    let whole_note_time = Number(common_beat_time) * 4;

    let time_whole_note = Number(whole_note_time) * Number(time_type);
    let time_half_note = Number(whole_note_time) * Number(time_type) / 2;
    let time_quarter_note = Number(whole_note_time) * Number(time_type) / 4;
    let time_8th_note = Number(whole_note_time) * Number(time_type) / 8;
    let time_16th_note = Number(whole_note_time) * Number(time_type) / 16;
    let time_32th_note = Number(whole_note_time) * Number(time_type) / 32;

    let time_quarter_note_triplet = Number(whole_note_time) * Number(time_type) / 6;
    let time_8th_note_tuplet = Number(whole_note_time) * Number(time_type) / 12;
    let time_16th_note_tuplet = Number(whole_note_time) * Number(time_type) / 24;
    let time_1dot_half_note = Number(whole_note_time) * Number(time_type) * 3 / 4;
    let time_1dot_4th_note = Number(whole_note_time) * Number(time_type) * 3 / 8;
    let time_1dot_8th_note = Number(whole_note_time) * Number(time_type) * 3 / 16;

    let time_maxima = Number(whole_note_time) * Number(time_type) * 8;
    let time_longa = Number(whole_note_time) * Number(time_type) * 4;
    let time_double_whole_note = Number(whole_note_time) * Number(time_type) * 2;
    let time_1dot_16th_note = Number(whole_note_time) * Number(time_type) * 3 / 32;
    let time_quarter_note_quintuplet = Number(whole_note_time) * Number(time_type) / 20;
    let time_half_note_triplet = Number(whole_note_time) * Number(time_type) / 3;

    if (input_bpm > 0) {
        document.getElementById("time_whole_note").innerHTML = "全音符<br><br>" + roundToThree(time_whole_note) + String(time_unit);
        document.getElementById("time_half_note").innerHTML = "2分音符<br><br>" + roundToThree(time_half_note) + String(time_unit);
        document.getElementById("time_quarter_note").innerHTML = "4分音符<br><br>" + roundToThree(time_quarter_note) + String(time_unit);
        document.getElementById("time_8th_note").innerHTML = "8分音符<br><br>" + roundToThree(time_8th_note) + String(time_unit);
        document.getElementById("time_16th_note").innerHTML = "16分音符<br><br>" + roundToThree(time_16th_note) + String(time_unit);
        document.getElementById("time_32th_note").innerHTML = "32分音符<br><br>" + roundToThree(time_32th_note) + String(time_unit);

        document.getElementById("time_quarter_note_triplet").innerHTML = "2拍3連<br><br>" + roundToThree(time_quarter_note_triplet) + String(time_unit);
        document.getElementById("time_8th_note_tuplet").innerHTML = "1拍3連<br><br>" + roundToThree(time_8th_note_tuplet) + String(time_unit);
        document.getElementById("time_16th_note_tuplet").innerHTML = "1拍6連<br><br>" + roundToThree(time_16th_note_tuplet) + String(time_unit);
        document.getElementById("time_1dot_half_note").innerHTML = "符点2分<br><br>" + roundToThree(time_1dot_half_note) + String(time_unit);
        document.getElementById("time_1dot_quarter_note").innerHTML = "符点4分<br><br>" + roundToThree(time_1dot_4th_note) + String(time_unit);
        document.getElementById("time_1dot_8th_note").innerHTML = "符点8分<br><br>" + roundToThree(time_1dot_8th_note) + String(time_unit);

        document.getElementById("time_maxima").innerHTML = "マキシマ<br><br>" + roundToThree(time_maxima) + String(time_unit);
        document.getElementById("time_longa").innerHTML = "ロンガ<br><br>" + roundToThree(time_longa) + String(time_unit);
        document.getElementById("time_double_whole_note").innerHTML = "倍全音符<br><br>" + roundToThree(time_double_whole_note) + String(time_unit);
        document.getElementById("time_1dot_16th_note").innerHTML = "符点16分<br><br>" + roundToThree(time_1dot_16th_note) + String(time_unit);
        document.getElementById("time_quarter_note_quintuplet").innerHTML = "1拍5連符<br><br>" + roundToThree(time_quarter_note_quintuplet) + String(time_unit);
        document.getElementById("time_half_note_triplet").innerHTML = "4拍3連<br><br>" + roundToThree(time_half_note_triplet) + String(time_unit);

    } else if (input_bpm <= 0) {
        document.getElementById("time_whole_note").innerHTML = "全音符<br><br><br>";
        document.getElementById("time_half_note").innerHTML = "2分音符<br><br><br>";
        document.getElementById("time_quarter_note").innerHTML = "4分音符<br><br><br>";
        document.getElementById("time_8th_note").innerHTML = "8分音符<br><br><br>";
        document.getElementById("time_16th_note").innerHTML = "16分音符<br><br><br>";
        document.getElementById("time_32th_note").innerHTML = "32分音符<br><br><br>";

        document.getElementById("time_quarter_note_triplet").innerHTML = "2拍3連<br><br><br>";
        document.getElementById("time_8th_note_tuplet").innerHTML = "1拍3連<br><br><br>";
        document.getElementById("time_16th_note_tuplet").innerHTML = "1拍6連<br><br><br>";
        document.getElementById("time_1dot_half_note").innerHTML = "符点2分<br><br><br>";
        document.getElementById("time_1dot_quarter_note").innerHTML = "符点4分<br><br><br>";
        document.getElementById("time_1dot_8th_note").innerHTML = "符点8分<br><br><br>";

        document.getElementById("time_maxima").innerHTML = "マキシマ<br><br><br>";
        document.getElementById("time_longa").innerHTML = "ロンガ<br><br><br>";
        document.getElementById("time_double_whole_note").innerHTML = "倍全音符<br><br><br>";
        document.getElementById("time_1dot_16th_note").innerHTML = "符点16分<br><br><br>";
        document.getElementById("time_quarter_note_quintuplet").innerHTML = "1拍5連符<br><br><br>";
        document.getElementById("time_half_note_triplet").innerHTML = "4拍3連<br><br><br>";
    };
};


document.getElementById("rhythm_input_bpm"); function NoteInfo() {

    document.getElementById("note_text").className = "py-0";
    document.getElementById("flag_text").className = "py-0";
    document.getElementById("haku_text").className = "py-0";
    document.getElementById("dieresis_note").className = "py-0";
    document.getElementById("dotted_note_value").className = "py-0";

    let rhythm_input_bpm = document.getElementById("rhythm_input_bpm").value;
    let rhythm_note_type = document.getElementById("rhythm_note_type").value;
    let rhythm_dotted_note_type = document.getElementById("rhythm_dotted_note_type").value;
    let rhythm_tuplet_type = document.getElementById("rhythm_tuplet_type").value;
    let rhythm_time_unit = document.getElementById("rhythm_time_unit").value;
    let note_count = document.getElementById("note_count").value;

    //このBPMの1拍(4分音符)の長さを求める。
    let rhythm_common_beat_time = Number(one_minutes) / Number(rhythm_input_bpm);
    //このBPMの全音符の長さを求める。
    let rhythm_whole_note_time = Number(rhythm_common_beat_time) * 4;

    //諸々の計算処理-------------------------------------------------------------------

    //n分音符の音価≒単純音符部分の音価(ms)を求める式...[全音符の音価÷n]
    let dieresis_note_time = Number(rhythm_whole_note_time) / Number(rhythm_note_type);

    //符点部分の音価(ms)を求める式...[n分音符の音価×((2^d)-1)/(2^d)]
    let dot_time = Number(dieresis_note_time) * ((2 ** (Number(rhythm_dotted_note_type)) - 1) / (2 ** Number(rhythm_dotted_note_type)));

    //★入力されたの音価の合計(ms)を求める式
    let note_value = ((Number(dieresis_note_time) + Number(dot_time)) * Number(note_count)) / Number(rhythm_tuplet_type);

    //"x分音符"の種類を求める式...[全音符の音価÷この音符の音価]
    let dieresis_note = Number(rhythm_whole_note_time) / Number(note_value);

    //log2(x)の対数関数に"x分音符"のxの値を代入したもの。このあと小数部分は切り捨てて使う。
    let log_number = Math.floor(Math.log2(Number(dieresis_note)));

    //連符の比の調整に使う...[2^{連符の分割数+(符点の数-連符の分割数)] 「c」とする。
    let Adjustment_number = 2 ** ((Number(rhythm_tuplet_type) + (Number(rhythm_dotted_note_type) - Number(rhythm_tuplet_type))));

    //連符を考える時、符尾・連桁の数とリンクした"連符で分割する前の分音符の数字"を求める式...[2^(log2(x)×c)]
    let ratio_number = (2 ** Number(log_number)) * (Number(Adjustment_number));

    //連符の比の"連符で分割する前の分音符の個数"を求める式...[(n分音符の音価+符点部分の音価)÷{全音符の音価÷m]
    let ratio = Math.round((((Number(dieresis_note_time) + Number(dot_time)) / (Number(rhythm_whole_note_time) / (Number(ratio_number) / (Number(Adjustment_number))))) * (Number(Adjustment_number))) + Number(note_count) - 1);


    //符尾・連桁の数とその根拠となる...「(2の累乗)分音符」の種類
    let flag_count = Number(log_number) - 2;
    let flag_number = 2 ** Number(log_number);
    let flag_number_minusone = 2 ** Number(log_number + 1);

    //符点音符の連符を符点音符のみ表記に変換する式...[n×t×{1^(d-1)}]
    let dotted_note = Number(dieresis_note) * 3 / 2;

    //時間の表示形式を決定する処理
    let rhythm_time_type = 1;
    if (rhythm_time_unit == "ms") {
        rhythm_time_type = 1;
    } else if (rhythm_time_unit == "μs") {
        rhythm_time_type = 1000;
    } else if (rhythm_time_unit == "sec") {
        rhythm_time_type = 1 / 1000;
    } else if (rhythm_time_unit == "秒") {
        rhythm_time_type = 1 / 1000;
    } else if (rhythm_time_unit == "ミリ秒") {
        rhythm_time_type = 1;
    } else if (rhythm_time_unit == "マイクロ秒") {
        rhythm_time_type = 1000;
    };

    //音符の表示形式を決定する処理
    let rhythm_note_name = 0;
    if (rhythm_note_type == "1") {
        rhythm_note_name = "全";
    } else {
        rhythm_note_name = rhythm_note_type + "分";
    };

    //符点の表示形式を決定する処理
    let rhythm_dot_name = 0;
    if (rhythm_dotted_note_type == "0") {
        rhythm_dot_name = "";
    } else if (rhythm_dotted_note_type == "1") {
        rhythm_dot_name = "符点";
    } else if (rhythm_dotted_note_type == "2") {
        rhythm_dot_name = "複符点";
    } else {
        rhythm_dot_name = rhythm_dotted_note_type + "重符点";
    };

    //連符の表示形式を決定する処理
    let rhythm_tuplet_name = 0;
    if (rhythm_tuplet_type == "1") {
        rhythm_tuplet_name = "";
    } else {
        rhythm_tuplet_name = "の" + rhythm_tuplet_type + "連符";
    };

    //個数の表示形式を決定する処理
    let note_count_text = 0;
    if (note_count <= 1) {
        note_count_text = "";
    } else {
        note_count_text = "×" + note_count;
    };

    //基本情報
    if (note_count == 0) {
        document.getElementById("note_value").innerHTML
            = "———「無」を奏でる…か。";
    } else if (note_count == -1) {
        document.getElementById("note_value").innerHTML
            = "マイナスになっているぞ…値が……！";
    } else if (note_count == -2) {
        document.getElementById("note_value").innerHTML
            = "マイナス2…！？どういう状況だい？…逆再生かな？";
    } else if (note_count == -3) {
        document.getElementById("note_value").innerHTML
            = "オイオイ…まだ「負の世界」に踏み込む…ｯていうのかよ…";
    } else if (note_count == -5) {
        document.getElementById("note_value").innerHTML
            = "集中せよ。『音楽』に。";
    } else if (note_count == -7) {
        document.getElementById("note_value").innerHTML
            = "ひっくり返してシュークリームを食べると、クリームがこぼれにくいからオススメだよ。";
    } else if (note_count == -11) {
        document.getElementById("note_value").innerHTML
            = "もう、そろそろ作業に戻りましょう。";
    } else if (note_count == -13) {
        document.getElementById("note_value").innerHTML
            = "オススメの曲：Dream Theater - Stream of Consciousness";
    } else if (note_count == -17) {
        document.getElementById("note_value").innerHTML
            = "集中せよｫｵｵｵ『音楽』にｨｲｲｲ!!";
    } else if (note_count == -19) {
        document.getElementById("note_value").innerHTML
            = "好きな食べ物：カツ丼、素麺";
    } else if (note_count == -23) {
        document.getElementById("note_value").innerHTML
            = "オススメの映画：インターステラー";
    } else if (note_count == -29) {
        document.getElementById("note_value").innerHTML
            = "好きなポケモン：カイリュー";
    } else if (note_count == -31) {
        document.getElementById("note_value").innerHTML
            = "好きなコード進行：Ⅵm→#Ⅳm7(♭5)→ⅣMaj7→Ⅱm7→Ⅲm7";
    } else if (note_count == -37) {
        document.getElementById("note_value").innerHTML
            = "オススメの漫画：『風の谷のナウシカ』";
    } else if (note_count == -41) {
        document.getElementById("note_value").innerHTML
            = "雑学：スーパーマリオのステージクリアBGMを高速再生すると1UPの音になる。";
    } else if (note_count == -43) {
        document.getElementById("note_value").innerHTML
            = "好きな飲み物：綾鷹";
    } else if (note_count == -47) {
        document.getElementById("note_value").innerHTML
            = "……コメントが表示される「数」の法則に気付いているかな…？";
    } else if (note_count == -53) {
        document.getElementById("note_value").innerHTML
            = "（コメントを考えるのめんどくさくなってきた…）";
    } else if (note_count == -59) {
        document.getElementById("note_value").innerHTML
            = "くぁｗせｄｒｆｔｇｙふじこｌｐ；＠：「」";
    } else if (note_count == -61) {
        document.getElementById("note_value").innerHTML
            = "ていうか…そもそも…これ気付く人いるのかなぁ…";
    } else if (note_count == -67) {
        document.getElementById("note_value").innerHTML
            = "温泉 に 行きたい。";
    } else if (note_count == -71) {
        document.getElementById("note_value").innerHTML
            = "雑学：北極よりも南極の方が圧倒的に寒い。";
    } else if (note_count == -73) {
        document.getElementById("note_value").innerHTML
            = "ココまで来るとはな…全くクレイジーな奴だぜ…";
    } else if (note_count == -79) {
        document.getElementById("note_value").innerHTML
            = "好きなゲーム：ディディーコング レーシング";
    } else if (note_count == -83) {
        document.getElementById("note_value").innerHTML
            = "雑学：ビンテージ…作られてから約25年〜100年未満 アンティーク…作られてから100年以上";
    } else if (note_count == -89) {
        document.getElementById("note_value").innerHTML
            = "メッセージ表示の法則の答え：100までの素数に−1をかけた数でメッセージが表示されるようになっています。(-1以外)";
    } else if (note_count == -97) {
        document.getElementById("note_value").innerHTML
            = "これが最後のメッセージです。これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < -97) {
        document.getElementById("note_value").innerHTML
            = "これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < 0 || rhythm_input_bpm <= 0) {
        document.getElementById("note_value").innerHTML
            = "プラスの値を入力してください。";
    } else {
        document.getElementById("note_value").innerHTML
            = "<b>BPM=" + roundToThree(rhythm_input_bpm) + "</b>の<b>「" + rhythm_dot_name + rhythm_note_name + "音符" + note_count_text + rhythm_tuplet_name + "」</b>の音価は、<b>" + roundToThree(note_value * rhythm_time_type) + String(rhythm_time_unit) + "</b>です。";
    };

    //分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dieresis_note").innerHTML = "";
        document.getElementById("dieresis_note").className = "py-0";
    } else {
        document.getElementById("dieresis_note").innerHTML = "分音符のみで表記した場合は<b>「" + roundToThree(dieresis_note) + "分音符」</b>になります。";
        document.getElementById("dieresis_note").className = "py-1";
    };

    //符点分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dotted_note_value").innerHTML = "";
        document.getElementById("dotted_note_value").className = "py-0";
    } else {
        document.getElementById("dotted_note_value").innerHTML = "符点音符のみで表記した場合は<b>「符点" + roundToThree(dotted_note) + "分音符」</b>になります。";
        document.getElementById("dotted_note_value").className = "py-1";
    };

    //連符の比の解説
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-0";
    } else if (rhythm_tuplet_type >= 2) {
        document.getElementById("note_text").innerHTML
            = Number(ratio_number) + "分音符が" + Number(ratio) + "個分の音価を" + Number(rhythm_tuplet_type) + "個に分割しています。<br>よって、この" + Number(rhythm_tuplet_type) + "連符と" + Number(ratio_number) + "分音符との比は<b>「" + Number(rhythm_tuplet_type) + "：" + Number(ratio) + "」</b>となります。";
            document.getElementById("note_text").className = "py-1";
        } else if (rhythm_tuplet_type <= 1) {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-1";
    };

    //符尾・連桁の数の表示
    let flag_ms = Number(rhythm_whole_note_time) / Number(flag_number);
    let quarter_note_ms = Number(rhythm_whole_note_time) / 4;
    let flag_min_ms = Number(rhythm_whole_note_time) / Number(flag_number_minusone);

    if (rhythm_dotted_note_type >= 1 || rhythm_input_bpm <= 0) {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    } else if (note_count != 1) {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    } else if (flag_count < 1) {//指定BPMでの8分音符より、「符点を含めない音価」が長い場合
        document.getElementById("flag_text").innerHTML = "BPM=" + rhythm_input_bpm + "の4分音符(" + roundToThree(quarter_note_ms * rhythm_time_type) + rhythm_time_unit + ")以上の音価です。<br>したがって、符尾・連桁の数は<b>\"0本\"</b>で記述されます。";
        document.getElementById("flag_text").className = "py-1";
    } else if (flag_count >= 1) {
        document.getElementById("flag_text").innerHTML = "BPM=" + rhythm_input_bpm + "の" + flag_number + "分音符(" + roundToThree(flag_ms * rhythm_time_type) + rhythm_time_unit + ")以下で、" + flag_number_minusone + "分音符(" + roundToThree(flag_min_ms * rhythm_time_type) + rhythm_time_unit + ")より長い音価です。<br>したがって、符尾・連桁の数は<b>\"" + flag_count + "本\"</b>で記述されます。";
        document.getElementById("flag_text").className = "py-1";
    } else {
        document.getElementById("flag_text").innerHTML = "符尾・連桁の数が分かりません。";
        document.getElementById("flag_text").className = "py-1";
    };

    //「〇拍〇連」表記の有無

    if (note_count != 1) {
        document.getElementById("haku_text").innerHTML = "";
        document.getElementById("haku_text").className = "py-0";
    } else if (Number(rhythm_note_type) == 1 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「4拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 2 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「2拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 4 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「1拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 8 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「半拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else {
        document.getElementById("haku_text").className = "py-0";
        document.getElementById("haku_text").innerHTML = "";
    };

    //メトリック・モジュレーションの説明
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("rhythm_info").innerHTML = ""
        document.getElementById("rhythm_info").className = "py-0";

        document.getElementById("same_length_whole_note").innerHTML = "全音符<br><br>---";
        document.getElementById("same_length_1dot_half_note").innerHTML = "符点2分<br><br>---";
        document.getElementById("same_length_half_note").innerHTML = "2分音符<br><br>---";
        document.getElementById("same_length_2dot_4th_note").innerHTML = "複符点4分<br><br>---";
        document.getElementById("same_length_2dot_8th_note").innerHTML = "複符点8分<br><br>---";
        document.getElementById("same_length_2dot_16th_note").innerHTML = "複符点16分<br><br>---";
        document.getElementById("same_length_half_note_triplet").innerHTML = "4拍3連<br><br>---";
        document.getElementById("same_length_1dot_quarter_note").innerHTML = "符点4分<br><br>---";
        document.getElementById("same_length_quarter_note").innerHTML = "4分音符<br><br>---";
        document.getElementById("same_length_1dot_8th_note").innerHTML = "符点8分<br><br>---";
        document.getElementById("same_length_quarter_note_triplet").innerHTML = "2拍3連<br><br>---";
        document.getElementById("same_length_8th_note").innerHTML = "8分音符<br><br>---";
        document.getElementById("same_length_1dot_16th_note").innerHTML = "符点16分<br><br>---";
        document.getElementById("same_length_8th_note_tuplet").innerHTML = "1拍3連<br><br>---";
        document.getElementById("same_length_16th_note").innerHTML = "16分音符<br><br>---";
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = "1拍5連<br><br>---";
        document.getElementById("same_length_16th_note_tuplet").innerHTML = "1拍6連<br><br>---";
        document.getElementById("same_length_32th_note").innerHTML = "32分音符<br><br>---";
    } else {
        document.getElementById("rhythm_info").innerHTML
            = "<b>BPM=" + roundToThree(rhythm_input_bpm) + "</b>の<b>「" + rhythm_dot_name + rhythm_note_name + "音符" + note_count_text + rhythm_tuplet_name + "」</b>と同じ音価を持つ「主な音符とそのBPM」は、以下の通りです。";

        document.getElementById("same_length_whole_note").innerHTML = "全音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 1) / 4));
        document.getElementById("same_length_1dot_half_note").innerHTML = "符点2分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 4 / 3) / 4));
        document.getElementById("same_length_half_note").innerHTML = "2分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 2) / 4));
        document.getElementById("same_length_2dot_4th_note").innerHTML = "複符点4分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16 / 7) / 4));
        document.getElementById("same_length_2dot_8th_note").innerHTML = "複符点8分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32 / 7) / 4));
        document.getElementById("same_length_2dot_16th_note").innerHTML = "複符点16分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 64 / 7) / 4));
        document.getElementById("same_length_half_note_triplet").innerHTML = "4拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 3) / 4));
        document.getElementById("same_length_1dot_quarter_note").innerHTML = "符点4分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 8 / 3) / 4));
        document.getElementById("same_length_quarter_note").innerHTML = "4分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 4) / 4));
        document.getElementById("same_length_1dot_8th_note").innerHTML = "符点8分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16 / 3) / 4));
        document.getElementById("same_length_quarter_note_triplet").innerHTML = "2拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 6) / 4));
        document.getElementById("same_length_8th_note").innerHTML = "8分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 8) / 4));
        document.getElementById("same_length_1dot_16th_note").innerHTML = "符点16分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32 / 3) / 4));
        document.getElementById("same_length_8th_note_tuplet").innerHTML = "1拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 12) / 4));
        document.getElementById("same_length_16th_note").innerHTML = "16分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16) / 4));
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = "1拍5連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 20) / 4));
        document.getElementById("same_length_16th_note_tuplet").innerHTML = "1拍6連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 24) / 4));
        document.getElementById("same_length_32th_note").innerHTML = "32分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32) / 4));

    };
};


//スイッチを作る
let onoff_0 = 0;
let onoff_1 = 0;
let onoff_2 = 0;
let onoff_3 = 0;
let onoff_4 = 0;
let onoff_5 = 0;
let onoff_6 = 0;
let onoff_7 = 0;
let onoff_8 = 0;
let onoff_9 = 0;
let onoff_10 = 0;
let onoff_11 = 0;

//モーダルインターチェンジを表示するスクリプト
function keyplus() {

    keySignatureNames();

    let chord_root_name = document.getElementById("chord_root_name").value

    let sig0 = mod(chord_root_name - 0, 12);
    let sig1 = mod(chord_root_name - 1, 12);
    let sig2 = mod(chord_root_name - 2, 12);
    let sig3 = mod(chord_root_name - 3, 12);
    let sig4 = mod(chord_root_name - 4, 12);
    let sig5 = mod(chord_root_name - 5, 12);
    let sig6 = mod(chord_root_name - 6, 12);
    let sig7 = mod(chord_root_name - 7, 12);
    let sig8 = mod(chord_root_name - 8, 12);
    let sig9 = mod(chord_root_name - 9, 12);
    let sig10 = mod(chord_root_name - 10, 12);
    let sig11 = mod(chord_root_name - 11, 12);

    let tonic_do = mod(sig0 - chord_root_name, 12);
    let dises = mod(chord_root_name - sig9, 12);



    document.getElementById("modal_text_1").className = "py-1";
    document.getElementById("modal_text_2").className = "py-1";
    document.getElementById("modal_text_3").className = "py-1";
    document.getElementById("modal_text_4").className = "py-1";
    document.getElementById("modal_text_5").className = "py-1";
    document.getElementById("modal_text_6").className = "py-1";
    document.getElementById("modal_text_7").className = "py-1";
    document.getElementById("modal_text_8").className = "py-1";
    document.getElementById("modal_text_9").className = "py-1";
    document.getElementById("modal_text_10").className = "py-1";
    document.getElementById("modal_text_11").className = "py-1";
    document.getElementById("modal_text_12").className = "py-1";
    document.getElementById("modal_text_13").className = "py-1";
    document.getElementById("modal_text_14").className = "py-1";
    document.getElementById("modal_text_15").className = "py-1";
    document.getElementById("modal_text_16").className = "py-1";
    document.getElementById("modal_text_17").className = "py-1";
    document.getElementById("modal_text_18").className = "py-1";
    document.getElementById("modal_text_19").className = "py-1";
    document.getElementById("modal_text_20").className = "py-1";
    document.getElementById("modal_text_21").className = "py-1";


    //スケールの判定
    if (scale_Ionian[0] >= onoff_0
        && scale_Ionian[1] >= onoff_1
        && scale_Ionian[2] >= onoff_2
        && scale_Ionian[3] >= onoff_3
        && scale_Ionian[4] >= onoff_4
        && scale_Ionian[5] >= onoff_5
        && scale_Ionian[6] >= onoff_6
        && scale_Ionian[7] >= onoff_7
        && scale_Ionian[8] >= onoff_8
        && scale_Ionian[9] >= onoff_9
        && scale_Ionian[10] >= onoff_10
        && scale_Ionian[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_1").innerHTML = `${sharp_note_name[chord_root_name]}メジャー(長音階)　${sharp_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_1").innerHTML = `${flat_note_name[chord_root_name]}メジャー(長音階)　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_1").innerHTML = "";
        document.getElementById("modal_text_1").className = "";
    };

    if (scale_Ionian_sharp_5th[0] >= onoff_0
        && scale_Ionian_sharp_5th[1] >= onoff_1
        && scale_Ionian_sharp_5th[2] >= onoff_2
        && scale_Ionian_sharp_5th[3] >= onoff_3
        && scale_Ionian_sharp_5th[4] >= onoff_4
        && scale_Ionian_sharp_5th[5] >= onoff_5
        && scale_Ionian_sharp_5th[6] >= onoff_6
        && scale_Ionian_sharp_5th[7] >= onoff_7
        && scale_Ionian_sharp_5th[8] >= onoff_8
        && scale_Ionian_sharp_5th[9] >= onoff_9
        && scale_Ionian_sharp_5th[10] >= onoff_10
        && scale_Ionian_sharp_5th[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_12").innerHTML = `${sharp_note_name[chord_root_name]}アイオニアン・オーギュメント　(${sharp_note_name[sig3]}ハーモニック・マイナー)　${sharp_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_12").innerHTML = `${flat_note_name[chord_root_name]}アイオニアン・オーギュメント　(${flat_note_name[sig3]}ハーモニック・・マイナー)　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_12").innerHTML = "";
        document.getElementById("modal_text_12").className = "";
    };


    if (scale_Lydian_augmented[0] >= onoff_0
        && scale_Lydian_augmented[1] >= onoff_1
        && scale_Lydian_augmented[2] >= onoff_2
        && scale_Lydian_augmented[3] >= onoff_3
        && scale_Lydian_augmented[4] >= onoff_4
        && scale_Lydian_augmented[5] >= onoff_5
        && scale_Lydian_augmented[6] >= onoff_6
        && scale_Lydian_augmented[7] >= onoff_7
        && scale_Lydian_augmented[8] >= onoff_8
        && scale_Lydian_augmented[9] >= onoff_9
        && scale_Lydian_augmented[10] >= onoff_10
        && scale_Lydian_augmented[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_13").innerHTML = `${sharp_note_name[chord_root_name]}リディアン・オーギュメント　(${sharp_note_name[sig3]}メロディック・マイナー)　${sharp_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_13").innerHTML = `${flat_note_name[chord_root_name]}リディアン・オーギュメント　(${flat_note_name[sig3]}メロディック・マイナー)　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_13").innerHTML = "";
        document.getElementById("modal_text_13").className = "";
    };


    if (scale_Aeolian[0] >= onoff_0
        && scale_Aeolian[1] >= onoff_1
        && scale_Aeolian[2] >= onoff_2
        && scale_Aeolian[3] >= onoff_3
        && scale_Aeolian[4] >= onoff_4
        && scale_Aeolian[5] >= onoff_5
        && scale_Aeolian[6] >= onoff_6
        && scale_Aeolian[7] >= onoff_7
        && scale_Aeolian[8] >= onoff_8
        && scale_Aeolian[9] >= onoff_9
        && scale_Aeolian[10] >= onoff_10
        && scale_Aeolian[11] >= onoff_11) {
        if (sig9 == 0 || sig9 == 2 || sig9 == 4 || sig9 == 6 || sig9 == 7 || sig9 == 9 || sig9 == 11) {
            document.getElementById("modal_text_2").innerHTML = `${sharp_note_name[chord_root_name]}ナチュラル・マイナー(自然的短音階)　${sharp_key_signature[sig9]}`;
        } else {
            document.getElementById("modal_text_2").innerHTML = `${flat_note_name[chord_root_name]}ナチュラル・マイナー(自然的短音階)　${flat_key_signature[sig9]}`;
        };
    } else {
        document.getElementById("modal_text_2").innerHTML = "";
        document.getElementById("modal_text_2").className = "";
    };

    if (scale_Harmonic_minor[0] >= onoff_0
        && scale_Harmonic_minor[1] >= onoff_1
        && scale_Harmonic_minor[2] >= onoff_2
        && scale_Harmonic_minor[3] >= onoff_3
        && scale_Harmonic_minor[4] >= onoff_4
        && scale_Harmonic_minor[5] >= onoff_5
        && scale_Harmonic_minor[6] >= onoff_6
        && scale_Harmonic_minor[7] >= onoff_7
        && scale_Harmonic_minor[8] >= onoff_8
        && scale_Harmonic_minor[9] >= onoff_9
        && scale_Harmonic_minor[10] >= onoff_10
        && scale_Harmonic_minor[11] >= onoff_11) {
        if (sig9 == 0 || sig9 == 2 || sig9 == 4 || sig9 == 6 || sig9 == 7 || sig9 == 9 || sig9 == 11) {
            document.getElementById("modal_text_3").innerHTML = `${sharp_note_name[chord_root_name]}ハーモニック・マイナー(和声的短音階)　${sharp_key_signature[sig9]}`;
        } else {
            document.getElementById("modal_text_3").innerHTML = `${flat_note_name[chord_root_name]}ハーモニック・マイナー(和声的短音階)　${flat_key_signature[sig9]}`;
        };
    } else {
        document.getElementById("modal_text_3").innerHTML = "";
        document.getElementById("modal_text_3").className = "";
    };

    if (scale_Melodic_minor[0] >= onoff_0
        && scale_Melodic_minor[1] >= onoff_1
        && scale_Melodic_minor[2] >= onoff_2
        && scale_Melodic_minor[3] >= onoff_3
        && scale_Melodic_minor[4] >= onoff_4
        && scale_Melodic_minor[5] >= onoff_5
        && scale_Melodic_minor[6] >= onoff_6
        && scale_Melodic_minor[7] >= onoff_7
        && scale_Melodic_minor[8] >= onoff_8
        && scale_Melodic_minor[9] >= onoff_9
        && scale_Melodic_minor[10] >= onoff_10
        && scale_Melodic_minor[11] >= onoff_11) {
        if (sig9 == 0 || sig9 == 2 || sig9 == 4 || sig9 == 6 || sig9 == 7 || sig9 == 9 || sig9 == 11) {
            document.getElementById("modal_text_4").innerHTML = `${sharp_note_name[chord_root_name]}メロディック・マイナー(旋律的短音階)　${sharp_key_signature[sig9]}`;
        } else {
            document.getElementById("modal_text_4").innerHTML = `${flat_note_name[chord_root_name]}メロディック・マイナー(旋律的短音階)　${flat_key_signature[sig9]}`;
        };
    } else {
        document.getElementById("modal_text_4").innerHTML = "";
        document.getElementById("modal_text_4").className = "";
    };

    if (scale_Harmonic_major[0] >= onoff_0
        && scale_Harmonic_major[1] >= onoff_1
        && scale_Harmonic_major[2] >= onoff_2
        && scale_Harmonic_major[3] >= onoff_3
        && scale_Harmonic_major[4] >= onoff_4
        && scale_Harmonic_major[5] >= onoff_5
        && scale_Harmonic_major[6] >= onoff_6
        && scale_Harmonic_major[7] >= onoff_7
        && scale_Harmonic_major[8] >= onoff_8
        && scale_Harmonic_major[9] >= onoff_9
        && scale_Harmonic_major[10] >= onoff_10
        && scale_Harmonic_major[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_5").innerHTML = `${sharp_note_name[chord_root_name]}ハーモニック・メジャー(和声的長音階)　${sharp_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_5").innerHTML = `${flat_note_name[chord_root_name]}ハーモニック・メジャー(和声的長音階)　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_5").innerHTML = "";
        document.getElementById("modal_text_5").className = "";
    };

    if (scale_Melodic_Major[0] >= onoff_0
        && scale_Melodic_Major[1] >= onoff_1
        && scale_Melodic_Major[2] >= onoff_2
        && scale_Melodic_Major[3] >= onoff_3
        && scale_Melodic_Major[4] >= onoff_4
        && scale_Melodic_Major[5] >= onoff_5
        && scale_Melodic_Major[6] >= onoff_6
        && scale_Melodic_Major[7] >= onoff_7
        && scale_Melodic_Major[8] >= onoff_8
        && scale_Melodic_Major[9] >= onoff_9
        && scale_Melodic_Major[10] >= onoff_10
        && scale_Melodic_Major[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_6").innerHTML = `${note_name[chord_root_name]}メロディック・メジャー(旋律的長音階)　${flat_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_6").innerHTML = `${flat_note_name[chord_root_name]}ハーモニック・メジャー(和声的長音階)　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_6").innerHTML = "";
        document.getElementById("modal_text_6").className = "";
    };

    if (scale_Dorian[0] >= onoff_0
        && scale_Dorian[1] >= onoff_1
        && scale_Dorian[2] >= onoff_2
        && scale_Dorian[3] >= onoff_3
        && scale_Dorian[4] >= onoff_4
        && scale_Dorian[5] >= onoff_5
        && scale_Dorian[6] >= onoff_6
        && scale_Dorian[7] >= onoff_7
        && scale_Dorian[8] >= onoff_8
        && scale_Dorian[9] >= onoff_9
        && scale_Dorian[10] >= onoff_10
        && scale_Dorian[11] >= onoff_11) {
        if (sig2 == 0 || sig2 == 2 || sig2 == 4 || sig2 == 6 || sig2 == 7 || sig2 == 9 || sig2 == 11) {
            document.getElementById("modal_text_7").innerHTML = `${sharp_note_name[chord_root_name]}ドリアン　${sharp_key_signature[sig2]}`;
        } else {
            document.getElementById("modal_text_7").innerHTML = `${flat_note_name[chord_root_name]}ドリアン　${flat_key_signature[sig2]}`;
        };
    } else {
        document.getElementById("modal_text_7").innerHTML = "";
        document.getElementById("modal_text_7").className = "";
    };

    if (scale_Phrygian[0] >= onoff_0
        && scale_Phrygian[1] >= onoff_1
        && scale_Phrygian[2] >= onoff_2
        && scale_Phrygian[3] >= onoff_3
        && scale_Phrygian[4] >= onoff_4
        && scale_Phrygian[5] >= onoff_5
        && scale_Phrygian[6] >= onoff_6
        && scale_Phrygian[7] >= onoff_7
        && scale_Phrygian[8] >= onoff_8
        && scale_Phrygian[9] >= onoff_9
        && scale_Phrygian[10] >= onoff_10
        && scale_Phrygian[11] >= onoff_11) {
        if (sig4 == 0 || sig4 == 2 || sig4 == 4 || sig4 == 6 || sig4 == 7 || sig4 == 9 || sig4 == 11) {
            document.getElementById("modal_text_8").innerHTML = `${sharp_note_name[chord_root_name]}フリジアン　${sharp_key_signature[sig4]}`;
        } else {
            document.getElementById("modal_text_8").innerHTML = `${flat_note_name[chord_root_name]}フリジアン　${flat_key_signature[sig4]}`;
        };
    } else {
        document.getElementById("modal_text_8").innerHTML = "";
        document.getElementById("modal_text_8").className = "";
    };

    if (scale_Lydian[0] >= onoff_0
        && scale_Lydian[1] >= onoff_1
        && scale_Lydian[2] >= onoff_2
        && scale_Lydian[3] >= onoff_3
        && scale_Lydian[4] >= onoff_4
        && scale_Lydian[5] >= onoff_5
        && scale_Lydian[6] >= onoff_6
        && scale_Lydian[7] >= onoff_7
        && scale_Lydian[8] >= onoff_8
        && scale_Lydian[9] >= onoff_9
        && scale_Lydian[10] >= onoff_10
        && scale_Lydian[11] >= onoff_11) {
        if (sig5 == 0 || sig5 == 2 || sig5 == 4 || sig5 == 6 || sig5 == 7 || sig5 == 9 || sig5 == 11) {
            document.getElementById("modal_text_9").innerHTML = `${sharp_note_name[chord_root_name]}リディアン　${sharp_key_signature[sig5]}`;
        } else {
            document.getElementById("modal_text_9").innerHTML = `${flat_note_name[chord_root_name]}リディアン　${flat_key_signature[sig5]}`;
        };
    } else {

        document.getElementById("modal_text_9").innerHTML = "";
        document.getElementById("modal_text_9").className = "";
    };

    if (scale_Mixolydian[0] >= onoff_0
        && scale_Mixolydian[1] >= onoff_1
        && scale_Mixolydian[2] >= onoff_2
        && scale_Mixolydian[3] >= onoff_3
        && scale_Mixolydian[4] >= onoff_4
        && scale_Mixolydian[5] >= onoff_5
        && scale_Mixolydian[6] >= onoff_6
        && scale_Mixolydian[7] >= onoff_7
        && scale_Mixolydian[8] >= onoff_8
        && scale_Mixolydian[9] >= onoff_9
        && scale_Mixolydian[10] >= onoff_10
        && scale_Mixolydian[11] >= onoff_11) {
        if (sig7 == 0 || sig7 == 2 || sig7 == 4 || sig7 == 6 || sig7 == 7 || sig7 == 9 || sig7 == 11) {
            document.getElementById("modal_text_10").innerHTML = `${sharp_note_name[chord_root_name]}ミクソリディアン　${sharp_key_signature[sig7]}`;
        } else {
            document.getElementById("modal_text_10").innerHTML = `${flat_note_name[chord_root_name]}ミクソリディアン　${flat_key_signature[sig7]}`;
        };
    } else {
        document.getElementById("modal_text_10").innerHTML = "";
        document.getElementById("modal_text_10").className = "";
    };

    if (scale_Locrian[0] >= onoff_0
        && scale_Locrian[1] >= onoff_1
        && scale_Locrian[2] >= onoff_2
        && scale_Locrian[3] >= onoff_3
        && scale_Locrian[4] >= onoff_4
        && scale_Locrian[5] >= onoff_5
        && scale_Locrian[6] >= onoff_6
        && scale_Locrian[7] >= onoff_7
        && scale_Locrian[8] >= onoff_8
        && scale_Locrian[9] >= onoff_9
        && scale_Locrian[10] >= onoff_10
        && scale_Locrian[11] >= onoff_11) {
        if (sig11 == 0 || sig11 == 2 || sig11 == 4 || sig11 == 6 || sig11 == 7 || sig11 == 9 || sig11 == 11) {
            document.getElementById("modal_text_11").innerHTML = `${sharp_note_name[chord_root_name]}ロクリアン　${sharp_key_signature[sig11]}`;
        } else {
            document.getElementById("modal_text_11").innerHTML = `${flat_note_name[chord_root_name]}ロクリアン　${flat_key_signature[sig11]}`;
        };
    } else {
        document.getElementById("modal_text_11").innerHTML = "";
        document.getElementById("modal_text_11").className = "";
    };

    if (scale_Blues_Major_pentatonic[0] >= onoff_0
        && scale_Blues_Major_pentatonic[1] >= onoff_1
        && scale_Blues_Major_pentatonic[2] >= onoff_2
        && scale_Blues_Major_pentatonic[3] >= onoff_3
        && scale_Blues_Major_pentatonic[4] >= onoff_4
        && scale_Blues_Major_pentatonic[5] >= onoff_5
        && scale_Blues_Major_pentatonic[6] >= onoff_6
        && scale_Blues_Major_pentatonic[7] >= onoff_7
        && scale_Blues_Major_pentatonic[8] >= onoff_8
        && scale_Blues_Major_pentatonic[9] >= onoff_9
        && scale_Blues_Major_pentatonic[10] >= onoff_10
        && scale_Blues_Major_pentatonic[11] >= onoff_11) {
        if (sig0 == 0 || sig0 == 2 || sig0 == 4 || sig0 == 6 || sig0 == 7 || sig0 == 9 || sig0 == 11) {
            document.getElementById("modal_text_14").innerHTML = `${sharp_note_name[chord_root_name]}ブルース・メジャー・ペンタトニック　${sharp_key_signature[sig0]}`;
        } else {
            document.getElementById("modal_text_14").innerHTML = `${flat_note_name[chord_root_name]}ブルース・メジャー・ペンタトニック　${flat_key_signature[sig0]}`;
        };
    } else {
        document.getElementById("modal_text_14").innerHTML = "";
        document.getElementById("modal_text_14").className = "";
    };


    if (scale_Blues_Minor_pentatonic[0] >= onoff_0
        && scale_Blues_Minor_pentatonic[1] >= onoff_1
        && scale_Blues_Minor_pentatonic[2] >= onoff_2
        && scale_Blues_Minor_pentatonic[3] >= onoff_3
        && scale_Blues_Minor_pentatonic[4] >= onoff_4
        && scale_Blues_Minor_pentatonic[5] >= onoff_5
        && scale_Blues_Minor_pentatonic[6] >= onoff_6
        && scale_Blues_Minor_pentatonic[7] >= onoff_7
        && scale_Blues_Minor_pentatonic[8] >= onoff_8
        && scale_Blues_Minor_pentatonic[9] >= onoff_9
        && scale_Blues_Minor_pentatonic[10] >= onoff_10
        && scale_Blues_Minor_pentatonic[11] >= onoff_11) {
        if (sig9 == 0 || sig9 == 2 || sig9 == 4 || sig9 == 6 || sig9 == 7 || sig9 == 9 || sig9 == 11) {
            document.getElementById("modal_text_15").innerHTML = `${sharp_note_name[chord_root_name]}ブルース・マイナー・ペンタトニック　${sharp_key_signature[sig9]}`;
        } else {
            document.getElementById("modal_text_15").innerHTML = `${flat_note_name[chord_root_name]}ブルース・マイナー・ペンタトニック　${flat_key_signature[sig9]}`;
        };
    } else {
        document.getElementById("modal_text_15").innerHTML = "";
        document.getElementById("modal_text_15").className = "";
    };

    if (scale_Whole_Tone[0] >= onoff_0
        && scale_Whole_Tone[1] >= onoff_1
        && scale_Whole_Tone[2] >= onoff_2
        && scale_Whole_Tone[3] >= onoff_3
        && scale_Whole_Tone[4] >= onoff_4
        && scale_Whole_Tone[5] >= onoff_5
        && scale_Whole_Tone[6] >= onoff_6
        && scale_Whole_Tone[7] >= onoff_7
        && scale_Whole_Tone[8] >= onoff_8
        && scale_Whole_Tone[9] >= onoff_9
        && scale_Whole_Tone[10] >= onoff_10
        && scale_Whole_Tone[11] >= onoff_11) {
        if (sig7 == 0 || sig7 == 2 || sig7 == 4 || sig7 == 6 || sig7 == 7 || sig7 == 9 || sig7 == 11) {
            document.getElementById("modal_text_16").innerHTML = `${sharp_note_name[chord_root_name]}ホールトーン　${sharp_key_signature[sig7]}`;
        } else {
            document.getElementById("modal_text_16").innerHTML = `${flat_note_name[chord_root_name]}ホールトーン　${flat_key_signature[sig7]}`;
        };
    } else {
        document.getElementById("modal_text_16").innerHTML = "";
        document.getElementById("modal_text_16").className = "";
    };

    if (scale_Phrygian_dominant[0] >= onoff_0
        && scale_Phrygian_dominant[1] >= onoff_1
        && scale_Phrygian_dominant[2] >= onoff_2
        && scale_Phrygian_dominant[3] >= onoff_3
        && scale_Phrygian_dominant[4] >= onoff_4
        && scale_Phrygian_dominant[5] >= onoff_5
        && scale_Phrygian_dominant[6] >= onoff_6
        && scale_Phrygian_dominant[7] >= onoff_7
        && scale_Phrygian_dominant[8] >= onoff_8
        && scale_Phrygian_dominant[9] >= onoff_9
        && scale_Phrygian_dominant[10] >= onoff_10
        && scale_Phrygian_dominant[11] >= onoff_11) {
        if (sig4 == 0 || sig4 == 2 || sig4 == 4 || sig4 == 6 || sig4 == 7 || sig4 == 9 || sig4 == 11) {
            document.getElementById("modal_text_17").innerHTML = `${sharp_note_name[chord_root_name]}フリジアン・ドミナント　${sharp_key_signature[sig4]}`;
        } else {
            document.getElementById("modal_text_17").innerHTML = `${flat_note_name[chord_root_name]}フリジアン・ドミナント　${flat_key_signature[sig4]}`;
        };
    } else {
        document.getElementById("modal_text_17").innerHTML = "";
        document.getElementById("modal_text_17").className = "";
    };


    if (scale_Lydian_dominant[0] >= onoff_0
        && scale_Lydian_dominant[1] >= onoff_1
        && scale_Lydian_dominant[2] >= onoff_2
        && scale_Lydian_dominant[3] >= onoff_3
        && scale_Lydian_dominant[4] >= onoff_4
        && scale_Lydian_dominant[5] >= onoff_5
        && scale_Lydian_dominant[6] >= onoff_6
        && scale_Lydian_dominant[7] >= onoff_7
        && scale_Lydian_dominant[8] >= onoff_8
        && scale_Lydian_dominant[9] >= onoff_9
        && scale_Lydian_dominant[10] >= onoff_10
        && scale_Lydian_dominant[11] >= onoff_11) {
        if (sig5 == 0 || sig5 == 2 || sig5 == 4 || sig5 == 6 || sig5 == 7 || sig5 == 9 || sig5 == 11) {
            document.getElementById("modal_text_18").innerHTML = `${sharp_note_name[chord_root_name]}リディアン♭7th　${sharp_key_signature[sig5]}`;
        } else {
            document.getElementById("modal_text_18").innerHTML = `${flat_note_name[chord_root_name]}リディアン♭7th　${flat_key_signature[sig5]}`;
        };
    } else {
        document.getElementById("modal_text_18").innerHTML = "";
        document.getElementById("modal_text_18").className = "";
    };


    if (scale_Phrygian_flat_4th[0] >= onoff_0
        && scale_Phrygian_flat_4th[1] >= onoff_1
        && scale_Phrygian_flat_4th[2] >= onoff_2
        && scale_Phrygian_flat_4th[3] >= onoff_3
        && scale_Phrygian_flat_4th[4] >= onoff_4
        && scale_Phrygian_flat_4th[5] >= onoff_5
        && scale_Phrygian_flat_4th[6] >= onoff_6
        && scale_Phrygian_flat_4th[7] >= onoff_7
        && scale_Phrygian_flat_4th[8] >= onoff_8
        && scale_Phrygian_flat_4th[9] >= onoff_9
        && scale_Phrygian_flat_4th[10] >= onoff_10
        && scale_Phrygian_flat_4th[11] >= onoff_11) {
        if (sig4 == 0 || sig4 == 2 || sig4 == 4 || sig4 == 6 || sig4 == 7 || sig4 == 9 || sig4 == 11) {
            document.getElementById("modal_text_19").innerHTML = `${sharp_note_name[chord_root_name]}フリジアン♭4th　${sharp_key_signature[sig4]}`;
        } else {
            document.getElementById("modal_text_19").innerHTML = `${flat_note_name[chord_root_name]}フリジアン♭4th　${flat_key_signature[sig4]}`;
        };
    } else {
        document.getElementById("modal_text_19").innerHTML = "";
        document.getElementById("modal_text_19").className = "";
    };


    if (scale_Mixolydian_flat_2nd[0] >= onoff_0
        && scale_Mixolydian_flat_2nd[1] >= onoff_1
        && scale_Mixolydian_flat_2nd[2] >= onoff_2
        && scale_Mixolydian_flat_2nd[3] >= onoff_3
        && scale_Mixolydian_flat_2nd[4] >= onoff_4
        && scale_Mixolydian_flat_2nd[5] >= onoff_5
        && scale_Mixolydian_flat_2nd[6] >= onoff_6
        && scale_Mixolydian_flat_2nd[7] >= onoff_7
        && scale_Mixolydian_flat_2nd[8] >= onoff_8
        && scale_Mixolydian_flat_2nd[9] >= onoff_9
        && scale_Mixolydian_flat_2nd[10] >= onoff_10
        && scale_Mixolydian_flat_2nd[11] >= onoff_11) {
        if (sig7 == 0 || sig7 == 2 || sig7 == 4 || sig7 == 6 || sig7 == 7 || sig7 == 9 || sig7 == 11) {
            document.getElementById("modal_text_20").innerHTML = `${sharp_note_name[chord_root_name]}ミクソリディアン♭2nd　${sharp_key_signature[sig7]}`;
        } else {
            document.getElementById("modal_text_20").innerHTML = `${flat_note_name[chord_root_name]}ミクソリディアン♭2nd　${flat_key_signature[sig7]}`;
        };
    } else {
        document.getElementById("modal_text_20").innerHTML = "";
        document.getElementById("modal_text_20").className = "";
    };


    if (scale_Altered[0] >= onoff_0
        && scale_Altered[1] >= onoff_1
        && scale_Altered[2] >= onoff_2
        && scale_Altered[3] >= onoff_3
        && scale_Altered[4] >= onoff_4
        && scale_Altered[5] >= onoff_5
        && scale_Altered[6] >= onoff_6
        && scale_Altered[7] >= onoff_7
        && scale_Altered[8] >= onoff_8
        && scale_Altered[9] >= onoff_9
        && scale_Altered[10] >= onoff_10
        && scale_Altered[11] >= onoff_11) {
        if (sig8 == 0 || sig8 == 2 || sig8 == 4 || sig8 == 6 || sig8 == 7 || sig8 == 9 || sig8 == 11) {
            document.getElementById("modal_text_21").innerHTML = `${sharp_note_name[chord_root_name]}オルタード　${sharp_key_signature[sig8]}`;
        } else {
            document.getElementById("modal_text_21").innerHTML = `${flat_note_name[chord_root_name]}オルタード　${flat_key_signature[sig8]}`;
        };
    } else {
        document.getElementById("modal_text_21").innerHTML = "";
        document.getElementById("modal_text_21").className = "";
    };


    if (0 == onoff_0
        && 0 == onoff_1
        && 0 == onoff_2
        && 0 == onoff_3
        && 0 == onoff_4
        && 0 == onoff_5
        && 0 == onoff_6
        && 0 == onoff_7
        && 0 == onoff_8
        && 0 == onoff_9
        && 0 == onoff_10
        && 0 == onoff_11) {
        document.getElementById("modal_text_1").innerHTML = "Ⅰメジャー(長音階)";
        document.getElementById("modal_text_2").innerHTML = "Ⅰナチュラル・マイナー(自然的短音階)";
        document.getElementById("modal_text_3").innerHTML = "Ⅰハーモニック・マイナー(和声的短音階)";
        document.getElementById("modal_text_4").innerHTML = "Ⅰメロディック・マイナー(旋律的短音階)";
        document.getElementById("modal_text_5").innerHTML = "Ⅰハーモニック・メジャー(和声的長音階)";
        document.getElementById("modal_text_6").innerHTML = "Ⅰメロディック・メジャー(旋律的長音階)";
        document.getElementById("modal_text_7").innerHTML = "Ⅰドリアン";
        document.getElementById("modal_text_8").innerHTML = "Ⅰフリジアン";
        document.getElementById("modal_text_9").innerHTML = "Ⅰリディアン";
        document.getElementById("modal_text_10").innerHTML = "Ⅰミクソリディアン";
        document.getElementById("modal_text_11").innerHTML = "Ⅰロクリアン";
        document.getElementById("modal_text_12").innerHTML = "Ⅰアイオニアン・オーギュメント　(平行調のハーモニック・マイナー)";
        document.getElementById("modal_text_13").innerHTML = "Ⅰリディアン・オーギュメント　(平行調のメロディック・マイナー)";
        document.getElementById("modal_text_14").innerHTML = "Ⅰブルース・メジャー・ペンタトニック";
        document.getElementById("modal_text_15").innerHTML = "Ⅰブルース・マイナー・ペンタトニック";
        document.getElementById("modal_text_16").innerHTML = "Ⅰホールトーン";
        document.getElementById("modal_text_17").innerHTML = "Ⅰフリジアン・ドミナント";
        document.getElementById("modal_text_18").innerHTML = "Ⅰリディアン・♭7th";
        document.getElementById("modal_text_19").innerHTML = "Ⅰフリジアン・♭4th";
        document.getElementById("modal_text_20").innerHTML = "Ⅰミクソリディアン♭2nd";
        document.getElementById("modal_text_21").innerHTML = "Ⅰオルタード";

    } else {

    };

};


//以下、モーダルインターチェンジの音名のスイッチ12個
function noteSwitch_0() {

    if (onoff_0 == 0) {
        onoff_0 = 1;
        document.getElementById("chord_0").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_0 == 1) {
        onoff_0 = 0;
        document.getElementById("chord_0").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_1() {

    if (onoff_1 == 0) {
        onoff_1 = 1;
        document.getElementById("chord_1").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_1 == 1) {
        onoff_1 = 0;
        document.getElementById("chord_1").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_2() {

    if (onoff_2 == 0) {
        onoff_2 = 1;
        document.getElementById("chord_2").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_2 == 1) {
        onoff_2 = 0;
        document.getElementById("chord_2").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_3() {

    if (onoff_3 == 0) {
        onoff_3 = 1;
        document.getElementById("chord_3").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_3 == 1) {
        onoff_3 = 0;
        document.getElementById("chord_3").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_4() {

    if (onoff_4 == 0) {
        onoff_4 = 1;
        document.getElementById("chord_4").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_4 == 1) {
        onoff_4 = 0;
        document.getElementById("chord_4").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_5() {

    if (onoff_5 == 0) {
        onoff_5 = 1;
        document.getElementById("chord_5").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_5 == 1) {
        onoff_5 = 0;
        document.getElementById("chord_5").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_6() {

    if (onoff_6 == 0) {
        onoff_6 = 1;
        document.getElementById("chord_6").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_6 == 1) {
        onoff_6 = 0;
        document.getElementById("chord_6").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_7() {

    if (onoff_7 == 0) {
        onoff_7 = 1;
        document.getElementById("chord_7").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_7 == 1) {
        onoff_7 = 0;
        document.getElementById("chord_7").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_8() {

    if (onoff_8 == 0) {
        onoff_8 = 1;
        document.getElementById("chord_8").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_8 == 1) {
        onoff_8 = 0;
        document.getElementById("chord_8").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_9() {

    if (onoff_9 == 0) {
        onoff_9 = 1;
        document.getElementById("chord_9").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_9 == 1) {
        onoff_9 = 0;
        document.getElementById("chord_9").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_10() {

    if (onoff_10 == 0) {
        onoff_10 = 1;
        document.getElementById("chord_10").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_10 == 1) {
        onoff_10 = 0;
        document.getElementById("chord_10").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

function noteSwitch_11() {

    if (onoff_11 == 0) {
        onoff_11 = 1;
        document.getElementById("chord_11").className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff_11 == 1) {
        onoff_11 = 0;
        document.getElementById("chord_11").className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    keyplus()
};

