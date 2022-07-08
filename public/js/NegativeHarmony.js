'use strict';

//ネガティヴ・ハーモニーの音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function NegativeChangeEIJG() {

    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    //キーの主音の値を取得
    let NegativeKeyNumber = Number(document.getElementById("NegativeKeyNumber").value);

    //ルートの音の値を取得し計算
    let RootNumber = mod((-10 * NegativeKeyNumber) - Number(document.getElementById("rootNumber").value), Octave);

    for (let i = 0; i < Octave; i++) {
        document.getElementById(`NegativeChord_${i}`).innerHTML = EIJG[key_signature_names][mod(RootNumber + i, Octave)];
    };
};

//ネガティヴ・ハーモニーを表示する関数
function NegativeHarmony(onoff) {

    let onoff2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < Octave; i++) {
        if (onoff[mod(i, Octave)] === 1) {
            onoff2.splice(mod(7 - i, Octave), 1, 1)
        };
    };

    //ネガティヴ・ハーモニーのコード・ネームの情報を判定する関数
    NegativeChordCandidateInfo(onoff2);

    //ネガティヴ・ハーモニーの構成音を着色する関数
    NegativeNoteNameColoring(onoff2);

    //ネガティヴ・ハーモニーの音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    NegativeChangeEIJG();

};

//コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
function NegativeDegreePositionDrow(root_position) {
    let do_app = Number(document.getElementById("do_app").value);
    if (do_app === 0) {
        return;
    };
    for (let i = 0; i < Octave; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Negative_Degree_table_${i}`).innerHTML = ``;
        document.getElementById(`Negative_Tension_table_${i}`).innerHTML = ``;
        for (let k = 0; k < Octave; k++) {
            //いったんクラスを全て削除する
            document.getElementById(`Negative_Degree_table_${i}`).classList.remove(`Degree${k}`);
            document.getElementById(`Negative_Tension_table_${i}`).classList.remove(`Degree${k}`);
        };
    };
    for (let i = 0; i < Octave; i++) {
        //テキストを追加する
        document.getElementById(`Negative_Degree_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, Octave)][0]}`;
        document.getElementById(`Negative_Tension_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, Octave)][1]}`;
        //クラスを追加する
        document.getElementById(`Negative_Degree_table_${i}`).classList.add(`Degree${mod(-root_position + i, Octave)}`);
        if (Degree_Tension_array[mod(-root_position + i, Octave)][1] !== "") {
            document.getElementById(`Negative_Tension_table_${i}`).classList.add(`Degree${mod(-root_position + i, Octave)}`);
        };
    };
};

//ネガティヴ・ハーモニーの構成音を着色する関数
function NegativeNoteNameColoring(onoff) {
    for (let i = 0; i < Octave; i++) {
        if (onoff[i] != 0) {
            document.getElementById(`NegativeChord_${i}`).className = "NoteName NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`NegativeChord_${i}`).className = "NoteName";
        };
    };
};

//ネガティヴ・ハーモニーのコード・ネームの情報を判定する関数
function NegativeChordCandidateInfo(onoff) {
    //---------------------------------------
    //各情報を格納する配列を定義する。
    let nh_Array = {
        ChordName: [],
        HowToRead: [],
        ChordInfo: [],
        HowManyChordTone: [],
        Omit5: [],
        TriTone: [],
        Sub2: [],
        iNum: [],
        jNum: [],
        LowestNoteNumber: 0,
        KeyNumber: 0,
        OriginalRootNumber: 0,
        RootNumber: 0,
        SOF: 0,
        onoff: [],
        HowManyTones: [],
    };

    //---------------------------------------
    //コード情報をリセット
    document.getElementById("N_NameOfChord").innerHTML
        = `<span class="NonChord">N.C.</span>`;
    document.getElementById("N_HowToReadChordName").innerHTML
        = `<span class="NonChord">読み方：ノン・コード</span>`;
    document.getElementById("N_ChordInfo").innerHTML
        = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。
                <br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>
                ※「ハイブリッド・コード」及び「UST（アッパー・ストラクチャー・トライアド）」での解釈の可能性は表示されません。<br>
                → <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
    document.getElementById("N_Omit5Info").innerHTML = ``;
    document.getElementById("N_TriToneInfo").innerHTML = ``;
    document.getElementById("N_Sub2Info").innerHTML = ``;

    //---------------------------------------
    //指定キーの値を取得
    nh_Array.KeyNumber = Number(document.getElementById("NegativeKeyNumber").value);
    //指定されたキーの調号を表示する。
    document.getElementById("Negative_clef_image").innerHTML
        = `<img src="./image/${clef_image[nh_Array.KeyNumber]}" alt="調号" title="調号">`;
    //ルート音の値から大雑把にシャープとフラットの判別をする。
    nh_Array.SOF = DetermineKeySignature(nh_Array.KeyNumber);
    // キーセンターからの距離が等しい音のペアを書き込む
    for (let i = 0; i < (Octave / 2); i++) {
        document.getElementById(`NegativeNotePair_${i}`).innerHTML
            = `${noteNames[mod(nh_Array.KeyNumber - (i * 7), Octave)][nh_Array.SOF]} - ${noteNames[mod(nh_Array.KeyNumber - (i * 5) + 7, Octave)][nh_Array.SOF]}`;
    };

    //---------------------------------------
    //ルートの音の値を取得
    nh_Array.OriginalRootNumber = Number(document.getElementById("rootNumber").value);
    nh_Array.RootNumber = mod((-10 * nh_Array.KeyNumber) - nh_Array.OriginalRootNumber, Octave);

    // 配列をコピーする
    nh_Array.onoff = onoff;

    //コードの最低音を取得する
    nh_Array.LowestNoteNumber = FindLowestNoteNumber(nh_Array.onoff);
    //コードの構成音が何音か判定するための配列を作成する。
    nh_Array.HowManyTones = nh_Array.onoff.filter(n => n === 1);

    //---------------------------------------
    //トライ・トーンを判定する
    let TriToneText = [`<br>トライトーンを含むので、ドミナント機能を持ちます。<br><br><span class="InfoPoint">【このコードの主な解決先】</span>`];
    let Sub2Text = [`<br><span class="InfoPoint">【このコードの手前に居がちなコード】</span>`]
    TriToneText = TriTone(nh_Array.onoff, nh_Array.RootNumber, 0, TriToneText);
    Sub2Text = Sub2(nh_Array.onoff, nh_Array.RootNumber, 0, Sub2Text);
    TriToneText = TriTone(nh_Array.onoff, nh_Array.RootNumber, 1, TriToneText);
    Sub2Text = Sub2(nh_Array.onoff, nh_Array.RootNumber, 1, Sub2Text);
    TriToneText = TriTone(nh_Array.onoff, nh_Array.RootNumber, 2, TriToneText);
    Sub2Text = Sub2(nh_Array.onoff, nh_Array.RootNumber, 2, Sub2Text);

    //トライトーンが含まれる場合トライ・トーンの情報を書き込む。
    if (nh_Array.TriTone.length >= 2) {
        document.getElementById("N_TriToneInfo").innerHTML
            = nh_Array.TriTone.join().replace(/,/g, "");
        document.getElementById("N_Sub2Info").innerHTML
            = nh_Array.Sub2.join().replace(/,/g, "");
    };

    //---------------------------------------
    //コード・ネームを判定する。
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < Octave; i++) {
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[j].ChordBinary[0] === nh_Array.onoff[mod(i + 0, Octave)]
                && chord_container[j].ChordBinary[1] === nh_Array.onoff[mod(i + 1, Octave)]
                && chord_container[j].ChordBinary[2] === nh_Array.onoff[mod(i + 2, Octave)]
                && chord_container[j].ChordBinary[3] === nh_Array.onoff[mod(i + 3, Octave)]
                && chord_container[j].ChordBinary[4] === nh_Array.onoff[mod(i + 4, Octave)]
                && chord_container[j].ChordBinary[5] === nh_Array.onoff[mod(i + 5, Octave)]
                && chord_container[j].ChordBinary[6] === nh_Array.onoff[mod(i + 6, Octave)]
                && chord_container[j].ChordBinary[7] === nh_Array.onoff[mod(i + 7, Octave)]
                && chord_container[j].ChordBinary[8] === nh_Array.onoff[mod(i + 8, Octave)]
                && chord_container[j].ChordBinary[9] === nh_Array.onoff[mod(i + 9, Octave)]
                && chord_container[j].ChordBinary[10] === nh_Array.onoff[mod(i + 10, Octave)]
                && chord_container[j].ChordBinary[11] === nh_Array.onoff[mod(i + 11, Octave)]) {
                //コードネームの名前を配列から取り出す
                nh_Array.ChordName.push(chord_container[j].ChordName);
                nh_Array.HowToRead.push(chord_container[j].Name);
                nh_Array.ChordInfo.push(chord_container[j].Info);
                nh_Array.iNum.push(i);
                nh_Array.jNum.push(j);
            };
        };
    };

    //---------------------------------------
    //コードネームの情報をHTMLに書き込む
    if (nh_Array.ChordName.length > 0) {
        // コードの異名同音をある程度調整するための値を計算する
        let adjustment = AdjustmentEnharmonic(nh_Array.ChordName[0], nh_Array.onoff[mod(nh_Array.iNum[0] + 3, Octave)], nh_Array.onoff[mod(nh_Array.iNum[0] + 6, Octave)]);
        //コード・ネームのシャープとフラットを判定するための値を計算する。
        nh_Array.SOF = DetermineKeySignature(mod(nh_Array.iNum[0] + nh_Array.RootNumber - adjustment, Octave));
        //コードのベース音が♯か♭かを判定する
        let BassSOF = DetermineBassSignature(nh_Array.SOF, nh_Array.ChordName[0], mod(nh_Array.LowestNoteNumber - nh_Array.iNum[0] - nh_Array.RootNumber, Octave));
        //コードのルート音
        let RootName = noteNames[mod(nh_Array.RootNumber + nh_Array.iNum[0], Octave)][nh_Array.SOF];

        //異名同音判定が正しいか検証する
        BassSOF = EnharmonicRejudgement(nh_Array.SOF, BassSOF, RootName, noteNames[mod(nh_Array.RootNumber + nh_Array.LowestNoteNumber, Octave)][BassSOF]);

        //---------------------------------------
        if (onoff[mod(nh_Array.RootNumber + nh_Array.iNum[0] + 4, Octave)] === 1 && onoff[mod(nh_Array.RootNumber + nh_Array.iNum[0] + 5, Octave)] === 1) {
            nh_Array.Omit5.push(`<br>M3rd（長3度）とP4th(11th)はアボイドになるので、取り扱いには注意が必要です。`);
        };
        //完全5度が省略可能かを判定する。
        if (onoff[mod(nh_Array.RootNumber + nh_Array.iNum[0] + 7, Octave)] === 1 && nh_Array.HowManyChordTone.length >= 3) {
            nh_Array.Omit5.push(`<br>Root（ルート音）に対してP5th（完全5度）の音は、状況に応じて省略が可能です。`);
            if (nh_Array.ChordName[0].match("sus") || nh_Array.ChordName[0].match("omit5")) {
                //長2度(sus2)や完全4度(sus4)の場合をはじく。
                nh_Array.Omit5.pop();
            };
        };
        document.getElementById("N_Omit5Info").innerHTML = nh_Array.Omit5.join().replace(/\,/g, "");

        //---------------------------------------
        //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
        //コードネームをグローバル変数へ代入する
        let n_ChordName = `${RootName}${nh_Array.ChordName[0]}`;
        if (nh_Array.LowestNoteNumber === nh_Array.iNum[0]) {
            document.getElementById("N_NameOfChord").innerHTML
                = `${n_ChordName}`;
            document.getElementById("N_HowToReadChordName").innerHTML
                = `読み方：${noteNames[mod(nh_Array.RootNumber + nh_Array.iNum[0], Octave)][nh_Array.SOF]}${nh_Array.HowToRead[0]}`;
        } else {
            document.getElementById("N_NameOfChord").innerHTML
                = `${n_ChordName}/${noteNames[mod(nh_Array.RootNumber + nh_Array.LowestNoteNumber, Octave)][BassSOF]}`;
            document.getElementById("N_HowToReadChordName").innerHTML
                = `読み方：${noteNames[mod(nh_Array.RootNumber + nh_Array.iNum[0], Octave)][nh_Array.SOF]}${nh_Array.HowToRead[0]}
                ・オーヴァー${noteNames[mod(nh_Array.RootNumber + nh_Array.LowestNoteNumber, Octave)][BassSOF]}（転回形）`;
        };
        document.getElementById("N_ChordInfo").innerHTML
            = `${chord_container[nh_Array.jNum[0]].Info}`;
    };

    //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
    NegativeDegreePositionDrow(nh_Array.iNum[0]);
};