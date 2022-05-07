'use strict';

//1分のミリ秒数
let one_minutes = 60000;

//2つの整数の最小公倍数を求める関数--------------------------------------
function lcm(a, b) {
    let g = (n, m) => m ? g(m, n % m) : n
    return a * b / g(a, b)
};

//2つの整数の最大公約数を求める関数--------------------------------------
function gcd(a, b) {
    //音符の個数が少ないときは処理を停止する。
    let note_count = Number(document.getElementById("note_count").value);
    if (note_count <= 0) {
        return;
    };

    if (b === 0) {
        return a
    };
    return gcd(b, a % b)
};

//音価の表示形式を判定する関数
function TimeTypeChecker() {
    //ドロップダウンリストから音価の表示形式のvalueを取得する。
    let time_unit = document.getElementById("time_unit").value;

    //長さの表示形式を計算するための値を格納する変数
    let time_type;

    if (time_unit === "ms") {
        time_type = 1;
    } else if (time_unit === "μs") {
        time_type = 1000;
    } else if (time_unit === "sec") {
        time_type = 1 / 1000;
    } else if (time_unit === "秒") {
        time_type = 1 / 1000;
    } else if (time_unit === "ミリ秒") {
        time_type = 1;
    } else if (time_unit === "マイクロ秒") {
        time_type = 1000;
    };
    //返り値をreturnする
    return { time_unit, time_type };
};


//音価の計算をして音符ありで描画する関数
function NoteLength() {
    //BPMの値を取得する
    let input_bpm = Number(document.getElementById("input_bpm").value);

    //音価の表示形式を判定する関数
    let { time_unit, time_type } = TimeTypeChecker();

    //1拍(4分音符)の長さ
    let common_beat_time = one_minutes / input_bpm;
    //全音符の長さ
    let whole_note_time = common_beat_time * 4;

    let time_whole_note = whole_note_time * time_type;
    let time_half_note = whole_note_time * time_type / 2;
    let time_quarter_note = whole_note_time * time_type / 4;
    let time_8th_note = whole_note_time * time_type / 8;
    let time_16th_note = whole_note_time * time_type / 16;
    let time_32th_note = whole_note_time * time_type / 32;

    let time_quarter_note_triplet = whole_note_time * time_type / 6;
    let time_8th_note_tuplet = whole_note_time * time_type / 12;
    let time_16th_note_tuplet = whole_note_time * time_type / 24;
    let time_1dot_half_note = whole_note_time * time_type * 3 / 4;
    let time_1dot_4th_note = whole_note_time * time_type * 3 / 8;
    let time_1dot_8th_note = whole_note_time * time_type * 3 / 16;

    let time_maxima = whole_note_time * time_type * 8;
    let time_longa = whole_note_time * time_type * 4;
    let time_double_whole_note = whole_note_time * time_type * 2;
    let time_1dot_16th_note = whole_note_time * time_type * 3 / 32;
    let time_quarter_note_quintuplet = whole_note_time * time_type / 20;
    let time_half_note_triplet = whole_note_time * time_type / 3;

    if (input_bpm > 0) {
        document.getElementById("time_whole_note").innerHTML = `全音符<br><img src='./image/note/wholeNote.svg' alt='全音符' title='全音符' class='note_image'><br>${roundToThree(time_whole_note)}${time_unit}`;
        document.getElementById("time_half_note").innerHTML = `2分音符<br><img src='./image/note/harfNote.svg' alt='2分音符' title='2分音符' class='note_image'><br>${roundToThree(time_half_note)}${time_unit}`;
        document.getElementById("time_quarter_note").innerHTML = `4分音符<br><img src='./image/note/quarterNote.svg' alt='4分音符' title='4分音符' class='note_image'><br>${roundToThree(time_quarter_note)}${time_unit}`;
        document.getElementById("time_8th_note").innerHTML = `8分音符<br><img src='./image/note/8thNote.svg' alt='8分音符' title='8分音符' class='note_image'><br>${roundToThree(time_8th_note)}${time_unit}`;
        document.getElementById("time_16th_note").innerHTML = `16分音符<br><img src='./image/note/16thNote.svg' alt='16分音符' title='16分音符' class='note_image'><br>${roundToThree(time_16th_note)}${time_unit}`;
        document.getElementById("time_32th_note").innerHTML = `32分音符<br><img src='./image/note/32ndNote.svg' alt='32分音符' title='32分音符' class='note_image'><br>${roundToThree(time_32th_note)}${time_unit}`;

        document.getElementById("time_quarter_note_triplet").innerHTML = `2拍3連<br><img src='./image/note/HarfNoteTriplets.svg' alt='2拍3連' title='2拍3連' class='note_image'><br>${roundToThree(time_quarter_note_triplet)}${time_unit}`;
        document.getElementById("time_8th_note_tuplet").innerHTML = `1拍3連<br><img src='./image/note/QuarterNoteTriplets.svg' alt='1拍3連' title='1拍3連' class='note_image'><br>${roundToThree(time_8th_note_tuplet)}${time_unit}`;
        document.getElementById("time_16th_note_tuplet").innerHTML = `1拍6連<br><img src='./image/note/QuarterNoteSextuplet.svg' alt='1拍6連符' title='1拍6連符' class='note_image'><br>${roundToThree(time_16th_note_tuplet)}${time_unit}`;
        document.getElementById("time_1dot_half_note").innerHTML = `符点2分<br><img src='./image/note/DHalfNote.svg' alt='符点2分音符' title='符点2分音符' class='note_image'><br>${roundToThree(time_1dot_half_note)}${time_unit}`;
        document.getElementById("time_1dot_quarter_note").innerHTML = `符点4分<br><img src='./image/note/DQuarterNote.svg' alt='符点4分音符' title='符点4分音符' class='note_image'><br>${roundToThree(time_1dot_4th_note)}${time_unit}`;
        document.getElementById("time_1dot_8th_note").innerHTML = `符点8分<br><img src='./image/note/D8thNote.svg' alt='符点8分音符' title='符点8分音符' class='note_image'><br>${roundToThree(time_1dot_8th_note)}${time_unit}`;

        document.getElementById("time_maxima").innerHTML = `マキシマ<br><img src='./image/note/Maxima.svg' alt='マキシマ' title='マキシマ' class='note_image'><br>${roundToThree(time_maxima)}${time_unit}`;
        document.getElementById("time_longa").innerHTML = `ロンガ<br><img src='./image/note/Longa.svg' alt='ロンガ' title='ロンガ' class='note_image'><br>${roundToThree(time_longa)}${time_unit}`;
        document.getElementById("time_double_whole_note").innerHTML = `倍全音符<br><img src='./image/note/DoubleWholeNote.svg' alt='倍全音符' title='倍全音符' class='note_image'><br>${roundToThree(time_double_whole_note)}${time_unit}`;
        document.getElementById("time_1dot_16th_note").innerHTML = `符点16分<br><img src='./image/note/D16thNote.svg' alt='符点16分音符' title='符点16分音符' class='note_image'><br>${roundToThree(time_1dot_16th_note)}${time_unit}`;
        document.getElementById("time_quarter_note_quintuplet").innerHTML = `1拍5連<br><img src='./image/note/QuarterNoteQuintuplet.svg' alt='1拍5連符' title='1拍5連符' class='note_image'><br>${roundToThree(time_quarter_note_quintuplet)}${time_unit}`;
        document.getElementById("time_half_note_triplet").innerHTML = `4拍3連<br><img src='./image/note/WholeNoteTriplets.svg' alt='4拍3連' title='4拍3連' class='note_image'><br>${roundToThree(time_half_note_triplet)}${time_unit}`;

    } else if (input_bpm <= 0) {
        document.getElementById("time_whole_note").innerHTML = "全音符<br><img src='./image/note/wholeNote.svg' alt='全音符' title='全音符' class='note_image'><br><br>";
        document.getElementById("time_half_note").innerHTML = "2分音符<br><img src='./image/note/harfNote.svg' alt='2分音符' title='2分音符' class='note_image'><br><br>";
        document.getElementById("time_quarter_note").innerHTML = "4分音符<br><img src='./image/note/quarterNote.svg' alt='4分音符' title='4分音符' class='note_image'><br><br>";
        document.getElementById("time_8th_note").innerHTML = "8分音符<br><img src='./image/note/8thNote.svg' alt='8分音符' title='8分音符' class='note_image'><br><br>";
        document.getElementById("time_16th_note").innerHTML = "16分音符<br><img src='./image/note/16thNote.svg' alt='16分音符' title='16分音符' class='note_image'><br><br>";
        document.getElementById("time_32th_note").innerHTML = "32分音符<br><img src='./image/note/32ndNote.svg' alt='32分音符' title='32分音符' class='note_image'><br><br>";

        document.getElementById("time_quarter_note_triplet").innerHTML = "2拍3連<br><img src='./image/note/HarfNoteTriplets.svg' alt='2拍3連' title='2拍3連' class='note_image'><br><br>";
        document.getElementById("time_8th_note_tuplet").innerHTML = "1拍3連<br><img src='./image/note/QuarterNoteTriplets.svg' alt='1拍3連' title='1拍3連' class='note_image'><br><br>";
        document.getElementById("time_16th_note_tuplet").innerHTML = "1拍6連<br><img src='./image/note/QuarterNoteSextuplet.svg' alt='1拍6連符' title='1拍6連符' class='note_image'><br><br>";
        document.getElementById("time_1dot_half_note").innerHTML = "符点2分<br><img src='./image/note/DHalfNote.svg' alt='符点2分音符' title='符点2分音符' class='note_image'><br><br>";
        document.getElementById("time_1dot_quarter_note").innerHTML = "符点4分<br><img src='./image/note/DQuarterNote.svg' alt='符点4分音符' title='符点4分音符' class='note_image'><br><br>";
        document.getElementById("time_1dot_8th_note").innerHTML = "符点8分<br><img src='./image/note/D8thNote.svg' alt='符点8分音符' title='符点8分音符' class='note_image'><br><br>";

        document.getElementById("time_maxima").innerHTML = "マキシマ<br><img src='./image/note/Maxima.svg' alt='マキシマ' title='マキシマ' class='note_image'><br><br>";
        document.getElementById("time_longa").innerHTML = "ロンガ<br><img src='./image/note/Longa.svg' alt='ロンガ' title='ロンガ' class='note_image'><br><br>";
        document.getElementById("time_double_whole_note").innerHTML = "倍全音符<br><img src='./image/note/BlankNote.svg' alt='空白の音符' title='空白の音符' class='note_image'><br><br>";
        document.getElementById("time_1dot_16th_note").innerHTML = "符点16分<br><img src='./image/note/D16thNote.svg' alt='符点16分音符' title='符点16分音符' class='note_image'><br><br>";
        document.getElementById("time_quarter_note_quintuplet").innerHTML = "1拍5連<br><img src='./image/note/QuarterNoteQuintuplet.svg' alt='1拍5連符' title='1拍5連符' class='note_image'><br><br>";
        document.getElementById("time_half_note_triplet").innerHTML = "4拍3連<br><img src='./image/note/WholeNoteTriplets.svg' alt='4拍3連' title='4拍3連' class='note_image'><br><br>";
    };

    barLength();
};


//メトリック・モジュレーションの情報を描画する関数
function NoteInfo() {

    document.getElementById("note_text").className = "py-0";
    document.getElementById("flag_text").className = "py-0";
    document.getElementById("haku_text").className = "py-0";
    document.getElementById("dieresis_note").className = "py-0";
    document.getElementById("dotted_note_value").className = "py-0";

    let rhythm_input_bpm = Number(document.getElementById("rhythm_input_bpm").value);
    let rhythm_note_type = Number(document.getElementById("rhythm_note_type").value);
    let rhythm_dotted_note_type = Number(document.getElementById("rhythm_dotted_note_type").value);
    let rhythm_tuplet_type = Number(document.getElementById("rhythm_tuplet_type").value);
    let note_count = Number(document.getElementById("note_count").value);

    //音価の表示形式を判定する関数
    let { time_unit, time_type } = TimeTypeChecker();

    //このBPMの1拍(4分音符)の長さを求める。
    let rhythm_common_beat_time = one_minutes / rhythm_input_bpm;
    //このBPMの全音符の長さを求める。
    let rhythm_whole_note_time = rhythm_common_beat_time * 4;

    //諸々の計算処理-------------------------------------------------------------------

    //n分音符の音価≒単純音符部分の音価(ms)を求める式...[全音符の音価÷n]
    let dieresis_note_time = rhythm_whole_note_time / rhythm_note_type;

    //符点部分の音価(ms)を求める式...[n分音符の音価×((2^d)-1)/(2^d)]
    let dot_time = dieresis_note_time * ((2 ** (rhythm_dotted_note_type) - 1) / (2 ** rhythm_dotted_note_type));

    //★入力されたの音価の合計(ms)を求める式...[((n分音符の音価+符点部分の音価)*音符の個数)/連符の数]
    let note_value = ((dieresis_note_time + dot_time) * note_count) / rhythm_tuplet_type;

    //"x分音符"の種類を求める式...[全音符の音価÷この音符の音価]
    let dieresis_note = (rhythm_whole_note_time / note_value);

    //log2(x)の対数関数に"x分音符"のxの値を代入したもの。このあと小数部分は切り捨てて使う。
    let log_number = Math.floor(Math.log2(dieresis_note));

    //連符の比の調整に使う...[2^{連符の分割数+(符点の数-連符の分割数)] 「c」とする。
    let Adjustment_number = 2 ** (rhythm_tuplet_type + (rhythm_dotted_note_type - rhythm_tuplet_type));

    //連符を考える時、符尾・連桁の数とリンクした"連符で分割する前の分音符の数字"を求める式...[2^(log2(x)×c)]
    let ratio_number = (2 ** log_number) * Adjustment_number;

    //連符の比の"連符で分割する前の分音符の個数"を求める式...[(n分音符の音価+符点部分の音価)÷{全音符の音価÷m]
    let ratio = note_value / (rhythm_whole_note_time / ratio_number) * rhythm_tuplet_type;
    // ratio = Math.round((((note_value) / (rhythm_whole_note_time / (ratio_number / Adjustment_number))) * Adjustment_number) + note_count - 1);

    //最大公約数を求める。
    let gcd_num = gcd(ratio_number, ratio);

    //最大公約数に関係する処理を行う。
    if (gcd_num > 1) {
        ratio_number = ratio_number / gcd_num;
        ratio = ratio / gcd_num;
        //個数が1になってしまった場合は2倍
        if (ratio === 1) {
            ratio_number = ratio_number * 2;
            ratio = ratio * 2;
        };
    };

    //符尾・連桁の数とその根拠となる...「(2の累乗)分音符」の種類
    let flag_count = log_number - 2;
    let flag_number = 2 ** log_number;
    let flag_number_minusone = 2 ** (log_number + 1);

    //符点音符の連符を符点音符のみ表記に変換する式...[n×t×{1^(d-1)}]
    let dotted_note = dieresis_note * 3 / 2;

    //音符の表示形式を決定する処理
    let rhythm_note_name = 0;
    if (rhythm_note_type === 1) {
        rhythm_note_name = "全";
    } else {
        rhythm_note_name = `${rhythm_note_type}分`;
    };

    //符点の表示形式を決定する処理
    let rhythm_dot_name = 0;
    if (rhythm_dotted_note_type === 0) {
        rhythm_dot_name = "";
    } else if (rhythm_dotted_note_type === 1) {
        rhythm_dot_name = "符点";
    } else if (rhythm_dotted_note_type === 2) {
        rhythm_dot_name = "複符点";
    } else {
        rhythm_dot_name = `${rhythm_dotted_note_type}重符点`;
    };

    //連符の表示形式を決定する処理
    let rhythm_tuplet_name = 0;
    if (rhythm_tuplet_type === 1) {
        rhythm_tuplet_name = "";
    } else {
        rhythm_tuplet_name = `の${rhythm_tuplet_type}連符`;
    };

    //個数の表示形式を決定する処理
    let note_count_text = 0;
    if (note_count <= 1) {
        note_count_text = "";
    } else {
        note_count_text = `×${note_count}`;
    };

    //基本情報
    if (note_count === 0) {
        document.getElementById("note_value").innerHTML
            = "———「無」を奏でる…か。";
    } else if (note_count === -1) {
        document.getElementById("note_value").innerHTML
            = "マイナスになっているぞ…値が……！";
    } else if (note_count === -2) {
        document.getElementById("note_value").innerHTML
            = "マイナス2…！？どういう状況だい？…逆再生かな？";
    } else if (note_count === -3) {
        document.getElementById("note_value").innerHTML
            = "オイオイ…まだ「負の世界」に踏み込む…ｯていうのかよ…";
    } else if (note_count === -5) {
        document.getElementById("note_value").innerHTML
            = "集中せよ。『音楽』に。";
    } else if (note_count === -7) {
        document.getElementById("note_value").innerHTML
            = "シュークリームやハンバーガーはひっくり返して食べると、中身がこぼれにくいからオススメだよ。";
    } else if (note_count === -11) {
        document.getElementById("note_value").innerHTML
            = "もう、そろそろ作業に戻りましょう。";
    } else if (note_count === -13) {
        document.getElementById("note_value").innerHTML
            = "オススメの曲：Dream Theater - Stream of Consciousness";
    } else if (note_count === -17) {
        document.getElementById("note_value").innerHTML
            = "集中せよｫｵｵｵ『音楽』にｨｲｲｲ!!";
    } else if (note_count === -19) {
        document.getElementById("note_value").innerHTML
            = "好きな食べ物：カツ丼、素麺";
    } else if (note_count === -23) {
        document.getElementById("note_value").innerHTML
            = "オススメの映画：インターステラー";
    } else if (note_count === -29) {
        document.getElementById("note_value").innerHTML
            = "好きなポケモン：カイリュー";
    } else if (note_count === -31) {
        document.getElementById("note_value").innerHTML
            = "好きなコード進行：Ⅵm→#Ⅳm7(♭5)→ⅣMaj7→Ⅱm7→Ⅲm7";
    } else if (note_count === -37) {
        document.getElementById("note_value").innerHTML
            = "オススメの漫画：『風の谷のナウシカ』、『進撃の巨人』、『鋼の錬金術師』";
    } else if (note_count === -41) {
        document.getElementById("note_value").innerHTML
            = "雑学：スーパーマリオのステージクリアBGMを高速再生すると1UPの音になる。";
    } else if (note_count === -43) {
        document.getElementById("note_value").innerHTML
            = "好きな飲み物：綾鷹";
    } else if (note_count === -47) {
        document.getElementById("note_value").innerHTML
            = "……コメントが表示される「数」の法則に気付いているかな…？";
    } else if (note_count === -53) {
        document.getElementById("note_value").innerHTML
            = "（コメントを考えるのめんどくさくなってきた…）";
    } else if (note_count === -59) {
        document.getElementById("note_value").innerHTML
            = "くぁｗせｄｒｆｔｇｙふじこｌｐ；＠：「」";
    } else if (note_count === -61) {
        document.getElementById("note_value").innerHTML
            = "ていうか…そもそも…これ気付く人いるのかなぁ…";
    } else if (note_count === -67) {
        document.getElementById("note_value").innerHTML
            = "温泉 に 行きたい。";
    } else if (note_count === -71) {
        document.getElementById("note_value").innerHTML
            = "雑学：北極よりも南極の方が圧倒的に寒い。";
    } else if (note_count === -73) {
        document.getElementById("note_value").innerHTML
            = "ココまで来るとはな…全くクレイジーな奴だぜ…";
    } else if (note_count === -79) {
        document.getElementById("note_value").innerHTML
            = "好きなゲーム：ディディーコング レーシング";
    } else if (note_count === -83) {
        document.getElementById("note_value").innerHTML
            = "雑学：ビンテージ…作られてから約25年〜100年未満 アンティーク…作られてから100年以上";
    } else if (note_count === -89) {
        document.getElementById("note_value").innerHTML
            = "メッセージ表示の法則の答え：100までの素数に−1をかけた数でメッセージが表示されるようになっています。(-1以外)";
    } else if (note_count === -97) {
        document.getElementById("note_value").innerHTML
            = "これが最後のメッセージです。これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < -97) {
        document.getElementById("note_value").innerHTML
            = "これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < 0 || rhythm_input_bpm <= 0) {
        document.getElementById("note_value").innerHTML
            = "0より大きい値を入力してください。";
    } else {
        document.getElementById("note_value").innerHTML
            = `<b>BPM=${roundToThree(rhythm_input_bpm)}</b>の<b>「${rhythm_dot_name + rhythm_note_name}音符${note_count_text + rhythm_tuplet_name}」</b>の音価は、<b>${roundToThree(note_value * time_type) + time_unit}</b>です。`;
    };

    //分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dieresis_note").innerHTML = "";
        document.getElementById("dieresis_note").className = "py-0";
    } else {
        document.getElementById("dieresis_note").innerHTML = `※仮に「分音符」のみで表す場合は<b>「${roundToThree(dieresis_note)}分音符」</b>になります。`;
        document.getElementById("dieresis_note").className = "py-1";
    };

    //符点分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dotted_note_value").innerHTML = "";
        document.getElementById("dotted_note_value").className = "py-0";
    } else {
        document.getElementById("dotted_note_value").innerHTML = `※仮に「符点音符」のみで表す場合は<b>「符点${roundToThree(dotted_note)}分音符」</b>になります。`;
        document.getElementById("dotted_note_value").className = "py-1";
    };

    let ratio_number_note;
    if (ratio_number === 1) {
        ratio_number_note = `全音符`;
    } else if (ratio_number === 0.5) {
        ratio_number_note = `倍全音符`;
    } else if (ratio_number === 0.25) {
        ratio_number_note = `ロンガ`;
    } else if (ratio_number === 0.125) {
        ratio_number_note = `マキシマ`;
    } else {
        ratio_number_note = `${ratio_number}分音符`;
    };



    //再び最小公倍数を求める
    gcd_num = gcd(ratio_number, ratio);

    //連符の比の解説
    if (note_count <= 0 || rhythm_tuplet_type === ratio || gcd_num == !1) {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-0";
    } else if (rhythm_tuplet_type >= 2) {
        document.getElementById("note_text").innerHTML
            = `${ratio_number_note}が"${ratio} 個分"の音価を、"${rhythm_tuplet_type}個"に分割した状態です。<br>よって、この${rhythm_tuplet_type}連符と${ratio_number_note}との比は<b>「${rhythm_tuplet_type}：${ratio}」</b>です。`;
        document.getElementById("note_text").className = "py-1";
    } else {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-0";
    };


    //符尾・連桁の数の表示
    let flag_ms = rhythm_whole_note_time / flag_number;
    let flag_min_ms = rhythm_whole_note_time / flag_number_minusone;

    let flag_number_note;
    if (flag_number === 1) {
        flag_number_note = `全音符`;
    } else if (flag_number === 0.5) {
        flag_number_note = `倍全音符`;
    } else if (flag_number === 0.25) {
        flag_number_note = `ロンガ`;
    } else if (flag_number === 0.125) {
        flag_number_note = `マキシマ`;
    } else {
        flag_number_note = `${flag_number}分音符`;
    };

    let flag_number_minusone_note;
    if (flag_number_minusone === 1) {
        flag_number_minusone_note = `全音符`;
    } else if (flag_number_minusone === 0.5) {
        flag_number_minusone_note = `倍全音符`;
    } else if (flag_number_minusone === 0.25) {
        flag_number_minusone_note = `ロンガ`;
    } else if (flag_number_minusone === 0.125) {
        flag_number_minusone_note = `マキシマ`;
    } else {
        flag_number_minusone_note = `${flag_number_minusone}分音符`;
    };

    if (rhythm_tuplet_type === ratio) {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    } else if (flag_number > 0.125 && flag_count === 0 && rhythm_tuplet_type > 1) {
        document.getElementById("flag_text").innerHTML = `BPM=${rhythm_input_bpm}の${flag_number_note}(${roundToThree(flag_ms * time_type) + time_unit})以下で、${flag_number_minusone_note}(${roundToThree(flag_min_ms * time_type) + time_unit})より長い音価です。<br>したがって、符尾・連桁の数は<b>"0本"</b>、音符は<b>${flag_number_note}</b>で記述されます。`;
        document.getElementById("flag_text").className = "py-1";
    } else if (flag_count >= 1) {
        document.getElementById("flag_text").innerHTML = `BPM=${rhythm_input_bpm}の${flag_number_note}(${roundToThree(flag_ms * time_type) + time_unit})以下で、${flag_number_minusone_note}(${roundToThree(flag_min_ms * time_type) + time_unit})より長い音価です。<br>したがって、符尾・連桁の数は<b>"${flag_count}本"</b>で記述されます。`;
        document.getElementById("flag_text").className = "py-1";
    } else {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    };

    //「〇拍〇連」表記の有無
    if (note_count !== 1) {
        document.getElementById("haku_text").innerHTML = "";
        document.getElementById("haku_text").className = "py-0";
    } else if (rhythm_note_type === 1 && rhythm_tuplet_type >= 3 && rhythm_dotted_note_type === 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = `この音符を<b>「4拍${rhythm_tuplet_type}連」</b>とも言います。`;
    } else if (rhythm_note_type === 2 && rhythm_tuplet_type >= 3 && rhythm_dotted_note_type === 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = `この音符を<b>「2拍${rhythm_tuplet_type}連」</b>とも言います。`;
    } else if (rhythm_note_type === 4 && rhythm_tuplet_type >= 3 && rhythm_dotted_note_type === 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = `この音符を<b>「1拍${rhythm_tuplet_type}連」</b>とも言います。`;
    } else if (rhythm_note_type === 8 && rhythm_tuplet_type >= 3 && rhythm_dotted_note_type === 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = `この音符を<b>「半拍${rhythm_tuplet_type}連」</b>とも言います。`;
    } else {
        document.getElementById("haku_text").className = "py-0";
        document.getElementById("haku_text").innerHTML = "";
    };

    //メトリック・モジュレーションの説明
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("rhythm_info").innerHTML = ""
        document.getElementById("rhythm_info").className = "py-0";

        document.getElementById("same_length_whole_note").innerHTML = "全音符<br><img src='./image/note/wholeNote.svg' alt='全音符' title='全音符' class='note_image'><br>---";
        document.getElementById("same_length_1dot_half_note").innerHTML = "符点2分<br><img src='./image/note/DHalfNote.svg' alt='符点2分音符' title='符点2分音符' class='note_image'><br>---";
        document.getElementById("same_length_half_note").innerHTML = "2分音符<br><img src='./image/note/harfNote.svg' alt='2分音符' title='2分音符' class='note_image'><br>---";
        document.getElementById("same_length_2dot_4th_note").innerHTML = "複符点4分<br><img src='./image/note/DDQuarterNote.svg' alt='複符点4分音符' title='複符点4分音符' class='note_image'><br>---";
        document.getElementById("same_length_2dot_8th_note").innerHTML = "複符点8分<br><img src='./image/note/DD8thNote.svg' alt='複符点8分音符' title='複符点8分音符' class='note_image'><br>---";
        document.getElementById("same_length_2dot_16th_note").innerHTML = "複符点16分<br><img src='./image/note/DD16thNote.svg' alt='複符点16分音符' title='複符点16分音符' class='note_image'><br>---";
        document.getElementById("same_length_half_note_triplet").innerHTML = "4拍3連<br><img src='./image/note/WholeNoteTriplets.svg' alt='4拍3連' title='4拍3連' class='note_image'><br>---";
        document.getElementById("same_length_1dot_quarter_note").innerHTML = "符点4分<br><img src='./image/note/DQuarterNote.svg' alt='符点4分音符' title='符点4分音符' class='note_image'><br>---";
        document.getElementById("same_length_quarter_note").innerHTML = "4分音符<br><img src='./image/note/quarterNote.svg' alt='4分音符' title='4分音符' class='note_image'><br>---";
        document.getElementById("same_length_1dot_8th_note").innerHTML = "符点8分<br><img src='./image/note/D8thNote.svg' alt='符点8分音符' title='符点8分音符' class='note_image'><br>---";
        document.getElementById("same_length_quarter_note_triplet").innerHTML = "2拍3連<br><img src='./image/note/HarfNoteTriplets.svg' alt='2拍3連' title='2拍3連' class='note_image'><br>---";
        document.getElementById("same_length_8th_note").innerHTML = "8分音符<br><img src='./image/note/8thNote.svg' alt='8分音符' title='8分音符' class='note_image'><br>---";
        document.getElementById("same_length_1dot_16th_note").innerHTML = "符点16分<br><img src='./image/note/D16thNote.svg' alt='符点16分音符' title='符点16分音符' class='note_image'><br>---";
        document.getElementById("same_length_8th_note_tuplet").innerHTML = "1拍3連<br><img src='./image/note/QuarterNoteTriplets.svg' alt='1拍3連' title='1拍3連' class='note_image'><br>---";
        document.getElementById("same_length_16th_note").innerHTML = "16分音符<br><img src='./image/note/16thNote.svg' alt='16分音符' title='16分音符' class='note_image'><br>---";
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = "1拍5連<br><img src='./image/note/QuarterNoteQuintuplet.svg' alt='1拍5連符' title='1拍5連符' class='note_image'><br>---";
        document.getElementById("same_length_16th_note_tuplet").innerHTML = "1拍6連<br><img src='./image/note/QuarterNoteSextuplet.svg' alt='1拍6連符' title='1拍6連符' class='note_image'><br>---";
        document.getElementById("same_length_32th_note").innerHTML = "32分音符<br><img src='./image/note/32ndNote.svg' alt='32分音符' title='32分音符' class='note_image'><br>---";
    } else {
        document.getElementById("rhythm_info").innerHTML
            = `<b>BPM=${roundToThree(rhythm_input_bpm)}</b>の<b>「${rhythm_dot_name}${rhythm_note_name}音符${note_count_text + rhythm_tuplet_name}」</b>と同じ音価を持つ「主な音符とそのBPM」は、以下の通りです。`;

        document.getElementById("same_length_whole_note").innerHTML = `全音符<br><img src='./image/note/wholeNote.svg' alt='全音符' title='全音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 1) / 4))}`;
        document.getElementById("same_length_1dot_half_note").innerHTML = `符点2分<br><img src='./image/note/DHalfNote.svg' alt='符点2分音符' title='符点2分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 4 / 3) / 4))}`;
        document.getElementById("same_length_half_note").innerHTML = `2分音符<br><img src='./image/note/harfNote.svg' alt='2分音符' title='2分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 2) / 4))}`;
        document.getElementById("same_length_2dot_4th_note").innerHTML = `複符点4分<br><img src='./image/note/DDQuarterNote.svg' alt='複符点4分音符' title='複符点4分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 16 / 7) / 4))}`;
        document.getElementById("same_length_2dot_8th_note").innerHTML = `複符点8分<br><img src='./image/note/DD8thNote.svg' alt='複符点8分音符' title='複符点8分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 32 / 7) / 4))}`;
        document.getElementById("same_length_2dot_16th_note").innerHTML = `複符点16分<br><img src='./image/note/DD16thNote.svg' alt='複符点16分音符' title='複符点16分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 64 / 7) / 4))}`;
        document.getElementById("same_length_half_note_triplet").innerHTML = `4拍3連<br><img src='./image/note/WholeNoteTriplets.svg' alt='4拍3連' title='4拍3連' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 3) / 4))}`;
        document.getElementById("same_length_1dot_quarter_note").innerHTML = `符点4分<br><img src='./image/note/DQuarterNote.svg' alt='符点4分音符' title='符点4分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 8 / 3) / 4))}`;
        document.getElementById("same_length_quarter_note").innerHTML = `4分音符<br><img src='./image/note/quarterNote.svg' alt='4分音符' title='4分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 4) / 4))}`;
        document.getElementById("same_length_1dot_8th_note").innerHTML = `符点8分<br><img src='./image/note/D8thNote.svg' alt='符点8分音符' title='符点8分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 16 / 3) / 4))}`;
        document.getElementById("same_length_quarter_note_triplet").innerHTML = `2拍3連<br><img src='./image/note/HarfNoteTriplets.svg' alt='2拍3連' title='2拍3連' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 6) / 4))}`;
        document.getElementById("same_length_8th_note").innerHTML = `8分音符<br><img src='./image/note/8thNote.svg' alt='8分音符' title='8分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 8) / 4))}`;
        document.getElementById("same_length_1dot_16th_note").innerHTML = `符点16分<br><img src='./image/note/D16thNote.svg' alt='符点16分音符' title='符点16分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 32 / 3) / 4))}`;
        document.getElementById("same_length_8th_note_tuplet").innerHTML = `1拍3連<br><img src='./image/note/QuarterNoteTriplets.svg' alt='1拍3連' title='1拍3連' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 12) / 4))}`;
        document.getElementById("same_length_16th_note").innerHTML = `16分音符<br><img src='./image/note/16thNote.svg' alt='16分音符' title='16分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 16) / 4))}`;
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = `1拍5連<br><img src='./image/note/QuarterNoteQuintuplet.svg' alt='1拍5連符' title='1拍5連符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 20) / 4))}`;
        document.getElementById("same_length_16th_note_tuplet").innerHTML = `1拍6連<br><img src='./image/note/QuarterNoteSextuplet.svg' alt='1拍6連符' title='1拍6連符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 24) / 4))}`;
        document.getElementById("same_length_32th_note").innerHTML = `32分音符<br><img src='./image/note/32ndNote.svg' alt='32分音符' title='32分音符' class='note_image'><br>BPM=${roundToThree(one_minutes / ((note_value * 32) / 4))}`;
    };
};

function barLength() {

    let input_bpm = Number(document.getElementById("input_bpm").value);
    let barCount = Number(document.getElementById("barCount").value);
    let Numerator = Number(document.getElementById("Numerator").value); //分子
    let Denominator = Number(document.getElementById("Denominator").value); //分母

    let bartime = (60 / input_bpm) / (Denominator / 4) * Numerator * barCount;

    let baeSec = Math.floor(bartime / 60)
    let barMin = roundToThree(bartime - (60 * baeSec))

    let bartext1 = `BPM=${input_bpm}（${Numerator}/${Denominator}拍子）${barCount}小節分の長さは、`;
    let bartext2;

    if (barCount % 16 === 0) {
        bartext2 = `※${barCount}小節は<br>4小節で1セクションの場合 … ${barCount / 4}セクション<br>8小節で1セクションの場合 … ${barCount / 8}セクション<br>16小節で1セクションの場合 … ${barCount / 16}セクション<br>になります。`;
    } else {
        bartext2 = `※${barCount}小節は<br>4小節で1セクションの場合 … ${Math.floor(barCount / 4)}セクション＋${barCount % 4}小節<br>8小節で1セクションの場合 … ${Math.floor(barCount / 8)}セクション＋${barCount % 8}小節<br>16小節で1セクションの場合 … ${Math.floor(barCount / 16)}セクション＋${barCount % 16}小節<br>になります。`;
    };

    if (bartime < 60) {
        document.getElementById("barInfo").innerHTML = `${bartext1}<b>${roundToThree(bartime)}秒</b>です。<br><br>${bartext2}`;
    } else if (bartime >= 60) {
        document.getElementById("barInfo").innerHTML = `${bartext1}<b>${baeSec}分 ${barMin}秒（${roundToThree(bartime)}秒）</b>です。<br><br>${bartext2}`;
    } else {
        document.getElementById("barInfo").innerHTML = ``
    };
};

