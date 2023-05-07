'use strict';
//転調の種類を判別するための関数(転調の間隔)
function modulation() {
    //入力された値を変数に代入する
    let b_note_num = Number(document.getElementById("b_note").value);
    let b_mode_num = scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['addNum'];
    let a_note_num = Number(document.getElementById("a_note").value);
    let a_mode_num = scale_Container[Number(document.getElementById("a_mode").value.split('-')[1])]['addNum'];

    let b_key_num = mod(b_note_num - b_mode_num, OCTAVE);
    let a_key_num = mod(a_note_num - a_mode_num, OCTAVE);
    let modulation_num = mod(a_key_num - b_key_num, OCTAVE);
    //転調前のキーの主音の異名同音を判定
    let b_SOF = DetermineKeySignature(b_key_num);
    let b_Configuration = scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['ScaleNumBinary'];
    let b_ConfigurationNotes = [];
    //for文でスケールの構成音を生成する。
    for (let i = 0; i < OCTAVE; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (b_Configuration[i] === 0) {
            //何もしない。
        } else if (b_Configuration[i] === 42) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, OCTAVE)][0]);
        } else if (b_Configuration[i] === 43) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, OCTAVE)][1]);
        } else if (b_Configuration[i] === 1) {
            b_ConfigurationNotes.push(EIJG2[0][mod(b_note_num + i, OCTAVE)][b_SOF]);
        } else {
            b_ConfigurationNotes.push(AllNoteNames[mod(b_note_num + i, OCTAVE)][0][Number(b_Configuration[i])]);
        };
    };

    //転調前のキーと調号を表示
    document.getElementById("result_b_key").innerHTML
        = `-転調前-<br>${noteNames[b_note_num][b_SOF]} ${scale_Container[Number(document.getElementById("b_mode").value.split('-')[1])]['JapaneseName']}<br>${key_signature[b_key_num]}<br><img src="./image/${clef_image[b_key_num]}" alt="調号" title="調号" class="clef"><br><font size="-1">${b_ConfigurationNotes.join("-")}</font>`;
    //転調後のキーの主音の異名同音を判定
    let a_SOF = DetermineKeySignature(a_key_num);
    let a_Configuration = scale_Container[Number(document.getElementById("a_mode").value.split('-')[1])]['ScaleNumBinary'];
    let a_ConfigurationNotes = [];
    //for文でスケールの構成音を生成する。
    for (let i = 0; i < OCTAVE; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (a_Configuration[i] === 0) {
            //何もしない。
        } else if (a_Configuration[i] === 42) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, OCTAVE)][0]);
        } else if (a_Configuration[i] === 43) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, OCTAVE)][1]);
        } else if (a_Configuration[i] === 1) {
            a_ConfigurationNotes.push(EIJG2[0][mod(a_note_num + i, OCTAVE)][a_SOF]);
        } else {
            a_ConfigurationNotes.push(AllNoteNames[mod(a_note_num + i, OCTAVE)][0][Number(a_Configuration[i])]);
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
    } else if (b_key_num === a_key_num && b_note_num !== a_note_num) {
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
    for (let step = 0; step < OCTAVE; step++) {
        document.getElementById("result_modulation").classList.remove(`modulationBorder${step}`);
    };
    //転調の種類のテーブルのテーマを色付けする
    document.getElementById("result_modulation").classList.add(`modulationBorder${modulation_num}`);
};

//転調先のキーを書き込む関数
function modulation_draw(labelText, writingId1, writingId2, answer1, answer2) {
    let SOF = DetermineKeySignature(answer1);
    document.getElementById(`${writingId1}`).innerHTML
        = `【${labelText}】<br>${EIJG2[0][answer2][SOF]} ${scale_Container[Number(document.getElementById(`${writingId2}`).value.split('-')[1])]['JapaneseName']}${key_signature[answer1]}`;
};

//転調元から転調先を表示するための関数(転調の間隔)
function keychange() {
    let note_number = Number(document.getElementById("note").value);
    let mode_number = scale_Container[Number(document.getElementById("mode").value.split('-')[1])]['addNum'];
    let after_mode_number = scale_Container[Number(document.getElementById("after_mode").value.split('-')[1])]['addNum'];

    let answer1 = note_number - Number(mode_number);
    let sf_0 = mod((answer1 - 0), OCTAVE);
    let answer2 = note_number - Number(mode_number) + Number(after_mode_number);

    const modulation_pairs = [
        ["#+1の転調先", "result_s_1", mod((answer1 - 5), OCTAVE), mod((answer2 + 7), OCTAVE)],
        ["♭+1の転調先", "result_f_1", mod((answer1 - 7), OCTAVE), mod((answer2 + 5), OCTAVE)],
        ["#+2の転調先", "result_s_2", mod((answer1 - 10), OCTAVE), mod((answer2 + 2), OCTAVE)],
        ["♭+2の転調先", "result_f_2", mod((answer1 - 2), OCTAVE), mod((answer2 + 10), OCTAVE)],
        ["#+3の転調先", "result_s_3", mod((answer1 - 3), OCTAVE), mod((answer2 + 9), OCTAVE)],
        ["♭+3の転調先", "result_f_3", mod((answer1 - 9), OCTAVE), mod((answer2 + 3), OCTAVE)],
        ["#+4の転調先", "result_s_4", mod((answer1 - 8), OCTAVE), mod((answer2 + 4), OCTAVE)],
        ["♭+4の転調先", "result_f_4", mod((answer1 - 4), OCTAVE), mod((answer2 + 8), OCTAVE)],
        ["#+5の転調先", "result_s_5", mod((answer1 - 1), OCTAVE), mod((answer2 + 11), OCTAVE)],
        ["♭+5の転調先", "result_f_5", mod((answer1 - 11), OCTAVE), mod((answer2 + 1), OCTAVE)],
        ["#+6 / ♭+6の転調先", "result_sf_6", mod((answer1 - 6), OCTAVE), mod((answer2 + 6), OCTAVE)],
        ["#・♭+0の転調先", "result_sf_0", sf_0, mod((answer2 + 0), OCTAVE)],
    ];

    for (let [label, id, answer1, answer2] of modulation_pairs) {
        modulation_draw(label, id, "after_mode", answer1, answer2);
    }
};
