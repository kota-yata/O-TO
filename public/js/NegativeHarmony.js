'use strict';

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
    //コード情報をリセット
    document.getElementById("AddNegativeChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddNegativeChordInfoSub2HTML").innerHTML = ``;

    //キーの主音の値を取得
    let NegativeKeyNumber = Number(document.getElementById("NegativeKeyNumber").value);

    //ルートの音の値を取得
    let RootNumber = Number(document.getElementById("rootNumber").value);
    RootNumber = mod((-10 * NegativeKeyNumber) - RootNumber, Octave);

    //指定されたキーの調号を表示する。
    document.getElementById("Negative_clef_image").innerHTML = `<img src="./image/${clef_image[NegativeKeyNumber]}" alt="調号" title="調号" class="clef3">`;

    //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
    NegativeDegreePositionDrow(0);

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let NegativeSOF = DetermineKeySignature(NegativeKeyNumber);

    // キーセンターからの距離が等しい音のペアを書き込む
    for (let i = 0; i < 6; i++) {
        document.getElementById(`NegativeNotePair_${i}`).innerHTML
            = `${noteNames[mod(NegativeKeyNumber - (i * 7), Octave)][NegativeSOF]} - ${noteNames[mod(NegativeKeyNumber - (i * 5) + 7, Octave)][NegativeSOF]}`;
    };

    //コードの構成音が何音か判定するための配列
    let HowManyTones = onoff.filter(n => n === 1);

    //トライ・トーンを判定する
    let TriToneText = [`<br>トライトーンを含むので、ドミナント機能を持ちます。<br><br>【このコードの主な解決先】`];
    let Sub2Text = ["<br>【このコードの手前に居がちなコード】"]
    TriToneText = TriTone(onoff, RootNumber, 0, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 0, Sub2Text);
    TriToneText = TriTone(onoff, RootNumber, 1, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 1, Sub2Text);
    TriToneText = TriTone(onoff, RootNumber, 2, TriToneText);
    Sub2Text = Sub2(onoff, RootNumber, 2, Sub2Text);

    //最低音を判定する
    let LowestNoteNumber = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所（最低音）を判定する
        if (onoff[i] === 1) {
            LowestNoteNumber = mod(i + RootNumber, Octave);
            break;
        };
    };

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

                //完全5度が省略可能かを判定する。

                //長2度(sus2)が含まれる場合
                if (onoff[mod(i + 2, Octave)] === 1 && HowManyTones.length < 4) {
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(i + 5, Octave)] === 1 && HowManyTones.length < 4) {
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(i + 7, Octave)] === 1) {
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML
                        = `<br>Root（ルート音）に対してP5th（完全5度）の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードネームの名前を配列から取り出す
                let ChordName = chord_container[j].ChordName;
                let HowToRead = chord_container[j].Name;

                // コードの異名同音をある程度調整するための値を計算する
                let adjustment = AdjustmentEnharmonic(ChordName, onoff[mod(i + 3, Octave)], onoff[mod(i + 6, Octave)]);

                //コード・ネームのシャープとフラットを判定するための値を計算する。
                let SOF = DetermineKeySignature(mod(i + RootNumber - adjustment, Octave));

                //コードのベース音が♯か♭かを判定する
                let BassSOF = DetermineBassSignature(SOF, ChordName, mod(LowestNoteNumber - i - RootNumber, Octave));

                //異名同音判定が正しいか検証する
                BassSOF = EnharmonicRejudgement(SOF, BassSOF, noteNames[mod(RootNumber + i, Octave)][SOF], noteNames[mod(LowestNoteNumber, Octave)][BassSOF]);

                //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
                if (0 === mod(LowestNoteNumber - i - RootNumber, Octave)) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `${noteNames[mod(RootNumber + i, Octave)][SOF]}${ChordName}`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `読み方：${noteNames[mod(RootNumber + i, Octave)][SOF]}${HowToRead}`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                } else {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `${noteNames[mod(RootNumber + i, Octave)][SOF]}${ChordName}/${noteNames[RootNumber][BassSOF]}`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `読み方：${noteNames[mod(RootNumber + i, Octave)][SOF]}${HowToRead}・オーヴァー${noteNames[RootNumber][BassSOF]}（転回形）`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[j].Info}`;
                };
                //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
                NegativeDegreePositionDrow(mod(i, Octave));
                //マッチするものが見つかった場合はここでreturn
                return;
            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        //マッチするもの無し
        if (i === 11) {
            document.getElementById("AddNegativeChordHTML").innerHTML
                = `<span class="NonChord">N.C.</span>`;
            document.getElementById("AddNegativeChordNameHTML").innerHTML
                = `<span class="NonChord">読み方：ノン・コード</span>`;
            document.getElementById("AddNegativeChordInfoHTML").innerHTML
                = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。
                <br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>
                ※「ハイブリッド・コード」及び「UST（アッパー・ストラクチャー・トライアド）」での解釈の可能性は表示されません。<br>
                → <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
            document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
        };
    };
};