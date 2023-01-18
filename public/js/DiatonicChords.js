'use strict';
//コードネームを切り替えるための関数(ダイアトニック・コード)
function Chordschange() {
    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = Number(document.getElementById("tonic_note").value);

    let tonic = mod(tonic_note_number + 0, OCTAVE);
    let t1 = mod(tonic_note_number + 1, OCTAVE);
    let t2 = mod(tonic_note_number + 2, OCTAVE);
    let t3 = mod(tonic_note_number + 3, OCTAVE);
    let t4 = mod(tonic_note_number + 4, OCTAVE);
    let t5 = mod(tonic_note_number + 5, OCTAVE);
    let t6 = mod(tonic_note_number + 6, OCTAVE);
    let t7 = mod(tonic_note_number + 7, OCTAVE);
    let t8 = mod(tonic_note_number + 8, OCTAVE);
    let t9 = mod(tonic_note_number + 9, OCTAVE);
    let t10 = mod(tonic_note_number + 10, OCTAVE);
    let t11 = mod(tonic_note_number + 11, OCTAVE);

    //異名同音の#と♭を判定する
    let SOF = DetermineKeySignature(tonic_note_number);

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} メジャー / ${noteNames[t9][18]} マイナー ：${key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]}${scale_Container[0]['diaChord4']}`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]}${scale_Container[1]['diaChord4']}`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]}${scale_Container[2]['diaChord4']}`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]}${scale_Container[3]['diaChord4']}`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]}${scale_Container[4]['diaChord4']}`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]}${scale_Container[5]['diaChord4']}`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]}${scale_Container[6]['diaChord4']}`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} ハーモニック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]}${scale_Container[9]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]}${scale_Container[10]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]}${scale_Container[11]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]}${scale_Container[12]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]}${scale_Container[13]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]}${scale_Container[7]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]}${scale_Container[8]['diaChord4']}`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} メロディック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]}${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]}${scale_Container[17]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]}${scale_Container[18]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]}${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]}${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]}${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]}${scale_Container[15]['diaChord4']}`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} ハーモニック・メジャー：${key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]}${scale_Container[21]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]}${scale_Container[22]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]}${scale_Container[23]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]}${scale_Container[24]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]}${scale_Container[25]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]}${scale_Container[26]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]}${scale_Container[27]['diaChord4']}`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} メロディック・メジャー：${key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]}${scale_Container[28]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]}${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]}${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]}${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]}${scale_Container[15]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]}${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][21]}${scale_Container[17]['diaChord4']}`;

    //同種短調を判定する
    let para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, OCTAVE);
    t1 = mod(para_tonic_note_number + 1, OCTAVE);
    t2 = mod(para_tonic_note_number + 2, OCTAVE);
    t3 = mod(para_tonic_note_number + 3, OCTAVE);
    t4 = mod(para_tonic_note_number + 4, OCTAVE);
    t5 = mod(para_tonic_note_number + 5, OCTAVE);
    t6 = mod(para_tonic_note_number + 6, OCTAVE);
    t7 = mod(para_tonic_note_number + 7, OCTAVE);
    t8 = mod(para_tonic_note_number + 8, OCTAVE);
    t9 = mod(para_tonic_note_number + 9, OCTAVE);
    t10 = mod(para_tonic_note_number + 10, OCTAVE);
    t11 = mod(para_tonic_note_number + 11, OCTAVE);

    //異名同音の#と♭を判定する
    SOF = DetermineKeySignature(para_tonic_note_number);

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} マイナー / ${noteNames[tonic][2]}メジャー：${key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]}${scale_Container[5]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]}${scale_Container[6]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]}${scale_Container[0]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]}${scale_Container[1]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]}${scale_Container[2]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]}${scale_Container[3]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]}${scale_Container[4]['diaChord4']}`;

    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} ハーモニック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]}${scale_Container[7]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]}${scale_Container[8]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]}${scale_Container[9]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]}${scale_Container[10]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]}${scale_Container[11]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]}${scale_Container[12]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]}${scale_Container[13]['diaChord4']}`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} メロディック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Para_MMin_dia_1").innerHTML = `${noteNames[t9][18]}${scale_Container[14]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_2").innerHTML = `${noteNames[t11][22]}${scale_Container[15]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_3").innerHTML = `${noteNames[tonic][2]}${scale_Container[16]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_4").innerHTML = `${noteNames[t2][5]}${scale_Container[17]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_5").innerHTML = `${noteNames[t4][9]}${scale_Container[18]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_6").innerHTML = `${noteNames[t6][13]}${scale_Container[19]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_7").innerHTML = `${noteNames[t8][16]}${scale_Container[20]['diaChord4']}`;

    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 0;
};

//コードネームをモードスケール併記に切り替えるための関数(ダイアトニック・コード)
function ChordsAndModeChange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = Number(document.getElementById("tonic_note").value);

    let tonic = mod(tonic_note_number + 0, OCTAVE);
    let t1 = mod(tonic_note_number + 1, OCTAVE);
    let t2 = mod(tonic_note_number + 2, OCTAVE);
    let t3 = mod(tonic_note_number + 3, OCTAVE);
    let t4 = mod(tonic_note_number + 4, OCTAVE);
    let t5 = mod(tonic_note_number + 5, OCTAVE);
    let t6 = mod(tonic_note_number + 6, OCTAVE);
    let t7 = mod(tonic_note_number + 7, OCTAVE);
    let t8 = mod(tonic_note_number + 8, OCTAVE);
    let t9 = mod(tonic_note_number + 9, OCTAVE);
    let t10 = mod(tonic_note_number + 10, OCTAVE);
    let t11 = mod(tonic_note_number + 11, OCTAVE);

    //異名同音の#と♭を判定する
    let SOF = DetermineKeySignature(tonic_note_number);

    ScaleLanguage = 'JapaneseName';

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} メジャー / ${noteNames[t9][18]} マイナー ：${key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　13:${noteNames[t9][18]}<br>${noteNames[tonic][2]}${scale_Container[0][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　<span class="avoid_note">11:${noteNames[t7][15]}</span>　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[1][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　11:${noteNames[t9][18]}　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[2][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]} 　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[3][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br><font size="-2">9:${noteNames[t9][18]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[4][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[5][ScaleLanguage]}</font>`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[6][ScaleLanguage]}</font>`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} ハーモニック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　11:${noteNames[t5][12]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br><font size="-2">♭9:${noteNames[t5][12]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[11][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br><font size="-2">#9:${noteNames[t8][16]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[12][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t9][18]}</span>　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[13][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[7][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　13:${noteNames[t8][16]}<br>${noteNames[t11][22]}${scale_Container[8][ScaleLanguage]}</font>`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} メロディック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}<font size="-2"><br>9:${noteNames[t2][5]}　#11:${noteNames[t6][13]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[16][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}<font size="-2"><br>9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[17][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}<font size="-2"><br>9:${noteNames[t6][13]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[18][ScaleLanguage]}<br>(${noteNames[t4][9]}メロディック・メジャー)</font>`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}<font size="-2"><br>9:${noteNames[t8][16]}　11:${noteNames[t11][22]}　♭13:${noteNames[t2][5]}<br>${noteNames[t6][13]}${scale_Container[19][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}<font size="-2"><br><span class="avoid_note">♭9:${noteNames[t9][18]}</span>　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[20][ScaleLanguage]}<br>(${noteNames[t8][16]}${scale_Container[60]['diaChord4']}オルタード)</font>`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}<font size="-2"><br>9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　13:${noteNames[t6][13]}<br>${noteNames[t9][18]}${scale_Container[14][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}<font size="-2"><br><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t11][22]}${scale_Container[15][ScaleLanguage]}</font>`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} ハーモニック・メジャー：${key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[21]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　♭13:${noteNames[t8][17]}<br>${noteNames[tonic][2]}${scale_Container[21][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[22]['diaChord4']}<br><font size="-2">9${noteNames[t4][9]}　11:${noteNames[t7][15]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[22][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[23]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　<span class="avoid_note">(dim4:${noteNames[t8][17]})</span>　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[23][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[24]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[24][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[25]['diaChord4']}<br><font size="-2">♭9:${noteNames[t8][17]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[25][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[26]['diaChord4']}<br><font size="-2">#9:${noteNames[t11][22]}　#11:${noteNames[t2][5]}　<span class="avoid_note">13:${noteNames[t5][12]}</span><br>${noteNames[t8][17]}${scale_Container[26][ScaleLanguage]}</font>`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[27]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[27][ScaleLanguage]}</font>`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} メロディック・メジャー：${key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[28]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　<span class="avoid_note">♭13:${noteNames[t8][17]}</span><br>${noteNames[tonic][2]}${scale_Container[28][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[19]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　11:${noteNames[t7][15]}　♭13:${noteNames[t10][21]}<br>${noteNames[t2][5]}${scale_Container[19][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[20]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　<span class="avoid_note">(dim4:${noteNames[t8][17]})</span>　♭13:${noteNames[tonic][2]}<br>${noteNames[t4][9]}${scale_Container[20][ScaleLanguage]}<br>(${noteNames[t4][9]}${scale_Container[60]['diaChord4']}オルタード)</font>`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[14]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]}　11:${noteNames[t10][21]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[14][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[15]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t8][17]}</span>　11:${noteNames[tonic][2]}　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[15][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[16]['diaChord4']}<br><font size="-2">9:${noteNames[t10][21]}　#11:${noteNames[t2][5]}　<span class="avoid_note">13:${noteNames[t5][12]}</span><br>${noteNames[t8][17]}${scale_Container[16][ScaleLanguage]}</font>`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][21]} ${scale_Container[17]['diaChord4']}<br><font size="-2">9:${noteNames[tonic][2]}　#11:${noteNames[t4][9]}　13:${noteNames[t7][15]}<br>${noteNames[t10][21]}${scale_Container[17][ScaleLanguage]}</font>`;

    //同種短調を判定する
    let para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, OCTAVE);
    t1 = mod(para_tonic_note_number + 1, OCTAVE);
    t2 = mod(para_tonic_note_number + 2, OCTAVE);
    t3 = mod(para_tonic_note_number + 3, OCTAVE);
    t4 = mod(para_tonic_note_number + 4, OCTAVE);
    t5 = mod(para_tonic_note_number + 5, OCTAVE);
    t6 = mod(para_tonic_note_number + 6, OCTAVE);
    t7 = mod(para_tonic_note_number + 7, OCTAVE);
    t8 = mod(para_tonic_note_number + 8, OCTAVE);
    t9 = mod(para_tonic_note_number + 9, OCTAVE);
    t10 = mod(para_tonic_note_number + 10, OCTAVE);
    t11 = mod(para_tonic_note_number + 11, OCTAVE);

    //異名同音の#と♭を判定する
    SOF = DetermineKeySignature(para_tonic_note_number);

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} マイナー / ${noteNames[tonic][2]}メジャー：${key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[5][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　♭13:${noteNames[t7][15]}<br>${noteNames[t11][22]}${scale_Container[6][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　<span class="avoid_note">11:${noteNames[t5][12]}</span>　13:${noteNames[t9][18]}<br>${noteNames[tonic][2]}${scale_Container[0][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　<span class="avoid_note">11:${noteNames[t7][15]}</span>　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[1][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t5][12]}</span>　11:${noteNames[t9][18]}　<span class="avoid_note">♭13:${noteNames[tonic][2]}</span><br>${noteNames[t4][9]}${scale_Container[2][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br><font size="-2">9:${noteNames[t7][15]} 　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[3][ScaleLanguage]}</font>`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br><font size="-2">9:${noteNames[t9][18]}　<span class="avoid_note">11:${noteNames[tonic][2]}</span>　13:${noteNames[t4][9]}<br>${noteNames[t7][15]}${scale_Container[4][ScaleLanguage]}</font>`;

    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} ハーモニック・マイナー：${key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br><font size="-2">9:${noteNames[t11][22]}　11:${noteNames[t2][5]}　<span class="avoid_note">♭13:${noteNames[t5][12]}</span><br>${noteNames[t9][18]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[tonic][2]}</span>　11:${noteNames[t4][9]}　13:${noteNames[t8][16]}<br>${noteNames[t11][22]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br><font size="-2">9:${noteNames[t2][5]}　11:${noteNames[t5][12]}　<span class="avoid_note">13:${noteNames[t9][18]}</span><br>${noteNames[tonic][2]}${scale_Container[9][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br><font size="-2">9:${noteNames[t4][9]}　#11:${noteNames[t8][16]}　13:${noteNames[t11][22]}<br>${noteNames[t2][5]}${scale_Container[10][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br><font size="-2">♭9:${noteNames[t5][12]}　<span class="avoid_note">11:${noteNames[t9][18]}</span>　♭13:${noteNames[tonic][2]}<br>${noteNames[t4][9]}${scale_Container[11][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br><font size="-2">#9:${noteNames[t8][16]}　#11:${noteNames[t11][22]}　13:${noteNames[t2][5]}<br>${noteNames[t5][12]}${scale_Container[12][ScaleLanguage]}</font>`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br><font size="-2"><span class="avoid_note">♭9:${noteNames[t9][18]}</span>　<span class="avoid_note">(dim4:${noteNames[tonic][2]})</span>　♭13:${noteNames[t4][9]}<br>${noteNames[t8][16]}${scale_Container[13][ScaleLanguage]}</font>`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} メロディック・マイナー：${key_signature[tonic]}`;
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
function degree() {

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
    for (let i = 0; i < 7; i++) {
        document.getElementById(`Major_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Rel_HMin_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Rel_MMin_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Rel_HMaj_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Rel_MMaj_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Para_Minor_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Para_HMin_dia_${i + 1}`).className = ('NoteName');
        document.getElementById(`Para_MMin_dia_${i + 1}`).className = ('NoteName');
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
