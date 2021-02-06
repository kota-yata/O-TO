'use strict';

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
const mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];
const after_mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];
const key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#・♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const modulation_type = ["#・♭+0", "♭+5", "#+2", "♭+3", "#+4", "♭+1", "#・♭+6", "#+1", "♭+4", "#+3", "♭+2", "#+5"];
const japan_note_name = ["ハ", "嬰ハ/変ニ", "ニ", "嬰ニ/変ホ", "ホ", "ヘ", "嬰ヘ/変ト", "ト", "嬰ト/変イ", "イ", "嬰イ/変ロ", "ロ"];
const italy_note_name = ["ド", "ド#/レ♭", "レ", "レ#/ミ♭", "ミ", "ファ", "ﾌｧ#/ソ♭", "ソ", "ソ#/ラ♭", "ラ", "ラ#/シ♭", "シ"];
const germany_note_name = ["C", "Cis/Des", "D", "Dis/Es", "E", "F", "Fis/Ges", "G", "Gis/As", "A", "Ais/B", "H"];

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

    document.getElementById("result_b_key").innerHTML
        = "-転調前-<br><br>" + note_name[b_note_num] + " " + mode_name[b_mode_num] + " " + key_signature[b_key_num];

    if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>転調していません。";
    } else if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) != Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（平行調）";
    } else if (Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同主調転調）";
    } else if (Number(b_mode_num) == Number(a_mode_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同旋法移行）";
    } else {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    }

    document.getElementById("result_a_key").innerHTML
        = "-転調後-<br><br>" + note_name[a_note_num] + " " + mode_name[a_mode_num] + " " + key_signature[a_key_num];
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

    document.getElementById("result_origin").innerHTML
        = "転調元のキー：" + note_name[note_number] + " " + mode_name[mode_number] + " " + key_signature[sf_zore];

    document.getElementById("result_s_1").innerHTML
        = "#+1の転調先：" + note_name[note_s_one] + " " + mode_name[after_mode_number] + " " + key_signature[s_one];
    document.getElementById("result_f_1").innerHTML
        = "♭+1の転調先：" + note_name[note_f_one] + " " + mode_name[after_mode_number] + " " + key_signature[f_one];
    document.getElementById("result_s_2").innerHTML
        = "#+2の転調先：" + note_name[note_s_two] + " " + mode_name[after_mode_number] + " " + key_signature[s_two];
    document.getElementById("result_f_2").innerHTML
        = "♭+2の転調先：" + note_name[note_f_two] + " " + mode_name[after_mode_number] + " " + key_signature[f_two];
    document.getElementById("result_s_3").innerHTML
        = "#+3の転調先：" + note_name[note_s_three] + " " + mode_name[after_mode_number] + " " + key_signature[s_three];
    document.getElementById("result_f_3").innerHTML
        = "♭+3の転調先：" + note_name[note_f_three] + " " + mode_name[after_mode_number] + " " + key_signature[f_three];
    document.getElementById("result_s_4").innerHTML
        = "#+4の転調先：" + note_name[note_s_four] + " " + mode_name[after_mode_number] + " " + key_signature[s_four];
    document.getElementById("result_f_4").innerHTML
        = "♭+4の転調先：" + note_name[note_f_four] + " " + mode_name[after_mode_number] + " " + key_signature[f_four];
    document.getElementById("result_s_5").innerHTML
        = "#+5の転調先：" + note_name[note_s_five] + " " + mode_name[after_mode_number] + " " + key_signature[s_five];
    document.getElementById("result_f_5").innerHTML
        = "♭+5の転調先：" + note_name[note_f_five] + " " + mode_name[after_mode_number] + " " + key_signature[f_five];
    document.getElementById("result_sf_6").innerHTML
        = "#・♭+6の転調先：" + note_name[note_sf_six] + " " + mode_name[after_mode_number] + " " + key_signature[sf_six];

    if (Number(mode_number) == Number(after_mode_number)) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：";
    } else {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：" + note_name[note_sf_zore] + " " + mode_name[after_mode_number] + " " + key_signature[sf_zore];
    }

};

//ダイアトニック・コードのコードネームを切り替えるためのスクリプト
function Chordschange() {
    let tonic_note_number = document.getElementById("tonic_note").value;

    let tonic = mod(Number(tonic_note_number) - 0, 12);
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

    document.getElementById("Major_dia").innerHTML = note_name[tonic] + " Major ダイアトニックコード：" + key_signature[tonic];
    document.getElementById("Major_dia_1").innerHTML = note_name[tonic] + " Maj7";
    document.getElementById("Major_dia_2").innerHTML = note_name[t2] + " m7";
    document.getElementById("Major_dia_3").innerHTML = note_name[t4] + " m7";
    document.getElementById("Major_dia_4").innerHTML = note_name[t5] + " Maj7";
    document.getElementById("Major_dia_5").innerHTML = note_name[t7] + " 7";
    document.getElementById("Major_dia_6").innerHTML = note_name[t9] + " m7";
    document.getElementById("Major_dia_7").innerHTML = note_name[t11] + " m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = note_name[t9] + " Harmonic Minor ダイアトニックコード：" + key_signature[tonic];
    document.getElementById("Rel_HMin_dia_1").innerHTML = note_name[tonic] + " augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = note_name[t2] + " m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = note_name[t4] + " 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = note_name[t5] + " Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = note_name[t8] + " dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = note_name[t9] + " mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = note_name[t11] + " m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = note_name[t9] + " Melodic Minor ダイアトニックコード：" + key_signature[tonic];
    document.getElementById("Rel_MMin_dia_1").innerHTML = note_name[tonic] + " augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = note_name[t2] + " 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = note_name[t4] + " 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = note_name[t6] + " m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = note_name[t8] + " m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = note_name[t9] + " mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = note_name[t11] + " m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = note_name[tonic] + " Harmonic Major ダイアトニックコード：" + key_signature[tonic];
    document.getElementById("Rel_HMaj_dia_1").innerHTML = note_name[tonic] + " Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = note_name[t2] + " m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = note_name[t4] + " m7・7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = note_name[t5] + " mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = note_name[t7] + " 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = note_name[t8] + " augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = note_name[t11] + " dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = note_name[tonic] + "  Melodic Major ダイアトニックコード：" + key_signature[tonic];
    document.getElementById("Rel_MMaj_dia_1").innerHTML = note_name[tonic] + " 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = note_name[t2] + " m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = note_name[t4] + " m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = note_name[t5] + " mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = note_name[t7] + " m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = note_name[t8] + " augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = note_name[t10] + " 7";

    document.getElementById("Para_Minor_dia").innerHTML = note_name[tonic] + " Minor ダイアトニックコード：" + key_signature[t3];
    document.getElementById("Para_Minor_dia_1").innerHTML = note_name[tonic] + " m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = note_name[t2] + " m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = note_name[t3] + " Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = note_name[t5] + " m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = note_name[t7] + " m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = note_name[t8] + " Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = note_name[t10] + " 7";

    document.getElementById("Para_HMin_dia").innerHTML = note_name[tonic] + " Harmonic Minor ダイアトニックコード：" + key_signature[t3];
    document.getElementById("Para_HMin_dia_1").innerHTML = note_name[tonic] + " mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = note_name[t2] + " m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = note_name[t3] + " augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = note_name[t5] + " m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = note_name[t7] + " 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = note_name[t8] + " Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = note_name[t11] + " dim7";

    document.getElementById("Para_MMin_dia").innerHTML = note_name[tonic] + " Melodic Minor ダイアトニックコード：" + key_signature[t3];
    document.getElementById("Para_MMin_dia_1").innerHTML = note_name[tonic] + " mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = note_name[t2] + " m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = note_name[t3] + " augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = note_name[t5] + " 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = note_name[t7] + " 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = note_name[t9] + " m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = note_name[t11] + " m7(♭5)";

};

//ディグリーネームで表示するためのスクリプト
document.getElementById("degree_button"); function degree() {

    document.getElementById("Major_dia").innerHTML = "Ⅰ Major ダイアトニックコード：";
    document.getElementById("Major_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Major_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Major_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Major_dia_4").innerHTML = "Ⅳ Maj7";
    document.getElementById("Major_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Major_dia_6").innerHTML = "Ⅵ m7";
    document.getElementById("Major_dia_7").innerHTML = "Ⅵ m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = "Ⅵ Harmonic Minor ダイアトニックコード：";
    document.getElementById("Rel_HMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = "Ⅳ m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = "Ⅶ dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = "Ⅱ m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = "Ⅵ Melodic Minor ダイアトニックコード：";
    document.getElementById("Rel_MMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = "Ⅳ 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = "Ⅶ m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = "Ⅱ m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = "Ⅰ Harmonic Major ダイアトニックコード：";
    document.getElementById("Rel_HMaj_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = "Ⅲ m7・7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = "Ⅰ Melodic Major ダイアトニックコード：";
    document.getElementById("Rel_MMaj_dia_1").innerHTML = "Ⅰ 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = "Ⅲ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_Minor_dia").innerHTML = "Ⅰ Minor ダイアトニックコード：";
    document.getElementById("Para_Minor_dia_1").innerHTML = "Ⅰ m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = "♭Ⅲ Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_HMin_dia").innerHTML = "Ⅰ Harmonic Minor ダイアトニックコード：";
    document.getElementById("Para_HMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Para_MMin_dia").innerHTML = "Ⅰ Melodic Minor ダイアトニックコード：";
    document.getElementById("Para_MMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = "Ⅳ 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = "Ⅶ m7(♭5)";

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
}


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
}

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
}


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
}





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

}



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
        root.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        root.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[1]) == 1) {
        min2.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        min2.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[2]) == 1) {
        maj2.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        maj2.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[3]) == 1) {
        min3.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        min3.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[4]) == 1) {
        maj3.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        maj3.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[5]) == 1) {
        p4.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        p4.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[6]) == 1) {
        dim5.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        dim5.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[7]) == 1) {
        p5.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        p5.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[8]) == 1) {
        aug5.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        aug5.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[9]) == 1) {
        maj6.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        maj6.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[10]) == 1) {
        min7.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        min7.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

    if (Number(chord_number[11]) == 1) {
        maj7.className = "list-group-item col-5 list-group-item-info col-xl text-center py-3";
    } else {
        maj7.className = "list-group-item col-5 list-group-item-secondary col-xl text-center py-3";
    }

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
    let ratio = (((Number(dieresis_note_time) + Number(dot_time)) / (Number(rhythm_whole_note_time) / (Number(ratio_number) / (Number(Adjustment_number))))) * (Number(Adjustment_number))) + Number(note_count) - 1;


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
    } else {
        document.getElementById("dieresis_note").innerHTML = "ちなみに、分音符のみで表記した場合は<b>「" + roundToThree(dieresis_note) + "分音符」</b>になります。";
    };

    //符点分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dotted_note_value").innerHTML = "";
    } else {
        document.getElementById("dotted_note_value").innerHTML = "符点音符のみで表記した場合は<b>「符点" + roundToThree(dotted_note) + "分音符」</b>になります。";
    };

    //連符の比の解説
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("note_text").innerHTML = "";
    } else if (rhythm_tuplet_type >= 2) {
        document.getElementById("note_text").innerHTML
            = Number(ratio_number) + "分音符が" + Number(ratio) + "個分の音価を" + Number(rhythm_tuplet_type) + "個に分割しています。<br>よって、この" + Number(rhythm_tuplet_type) + "連符と" + Number(ratio_number) + "分音符との比は<b>「" + Number(rhythm_tuplet_type) + "：" + Number(ratio) + "」</b>となります。";
    } else if (rhythm_tuplet_type <= 1) {
        document.getElementById("note_text").innerHTML = "";
    };

    //符尾・連桁の数の表示
    let flag_ms = Number(rhythm_whole_note_time) / Number(flag_number);
    let quarter_note_ms = Number(rhythm_whole_note_time) / 4;
    let flag_min_ms = Number(rhythm_whole_note_time) / Number(flag_number_minusone);

    if (rhythm_dotted_note_type >= 1 || rhythm_input_bpm <= 0) {
        document.getElementById("flag_text").innerHTML = "";
    } else if (note_count != 1) {
        document.getElementById("flag_text").innerHTML = "";
    } else if (flag_count < 1) {//指定BPMでの8分音符より、「符点を含めない音価」が長い場合
        document.getElementById("flag_text").innerHTML = "これは、BPM=" + rhythm_input_bpm + "の4分音符(" + roundToThree(quarter_note_ms * rhythm_time_type) + rhythm_time_unit + ")以上の音価です。<br>符尾・連桁の数は<b>\"0本\"</b>で記述されます。";
    } else if (flag_count >= 1) {
        document.getElementById("flag_text").innerHTML = "これは、BPM=" + rhythm_input_bpm + "の" + flag_number + "分音符(" + roundToThree(flag_ms * rhythm_time_type) + rhythm_time_unit + ")以下で、" + flag_number_minusone + "分音符(" + roundToThree(flag_min_ms * rhythm_time_type) + rhythm_time_unit + ")より長いです。<br>したがって、符尾・連桁の数は<b>\"" + flag_count + "本\"</b>で記述されます。";
    } else {
        document.getElementById("flag_text").innerHTML = "符尾・連桁の数が分かりません。";
    };

    //「〇拍〇連」表記の有無

    if (note_count != 1) {
        document.getElementById("haku_text").innerHTML = "";
    } else if (Number(rhythm_note_type) == 1 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").innerHTML
            = "また、この音符を<b>「4拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 2 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").innerHTML
            = "また、この音符を<b>「2拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 4 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").innerHTML
            = "また、この音符を<b>「1拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 8 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").innerHTML
            = "また、この音符を<b>「半拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else {
        document.getElementById("haku_text").innerHTML = "";
    };

    //メトリック・モジュレーションの説明
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("rhythm_info").innerHTML = ""

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
