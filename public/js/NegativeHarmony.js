'use strict';

//ネガティヴ・ハーモニーを表示する関数
function NegativeHarmony(onoff) {

    let onoff2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 12; i++) {
        if (onoff[mod(i, 12)] === 1) {
            onoff2.splice(mod(7 - i, 12), 1, 1)
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
    //ルートの音の値を取得
    let RootNumber = Number(document.getElementById("rootNumber").value);

    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    let num = 0;

    //キーの主音の値を取得
    let NegativeKeyNumber = Number(document.getElementById("NegativeKeyNumber").value);

    RootNumber = mod((-10 * NegativeKeyNumber) - RootNumber, 12);

    for (let i = 0; i < 12; i++) {
        document.getElementById(`NegativeChord_${num}`).innerHTML = EIJG[key_signature_names][mod(RootNumber + i, 12)];
        num++
    };
};

//コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
function NegativeDegreePositionDrow(root_position) {
    let do_app = Number(document.getElementById("do_app").value);
    if (do_app === 0) {
        return;
    };
    let Num = 0;
    for (let i = 0; i < 12; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Negative_Degree_table_${Num}`).innerHTML = ``;
        document.getElementById(`Negative_Tension_table_${Num}`).innerHTML = ``;
        let Num2 = 0;
        for (let i = 0; i < 12; i++) {
            //いったんクラスを全て削除する
            document.getElementById(`Negative_Degree_table_${Num}`).classList.remove(`Degree${Num2}`);
            document.getElementById(`Negative_Tension_table_${Num}`).classList.remove(`Degree${Num2}`);
            Num2++
        };
        Num++
    };

    Num = 0;
    for (let i = 0; i < 12; i++) {
        //テキストを追加する
        document.getElementById(`Negative_Degree_table_${Num}`).innerHTML = `${Degree_Tension_array[mod(-root_position + Num, 12)][0]}`;
        document.getElementById(`Negative_Tension_table_${Num}`).innerHTML = `${Degree_Tension_array[mod(-root_position + Num, 12)][1]}`;
        //クラスを追加する
        document.getElementById(`Negative_Degree_table_${Num}`).classList.add(`Degree${mod(-root_position + Num, 12)}`);
        if (Degree_Tension_array[mod(-root_position + Num, 12)][1] !== "") {
            document.getElementById(`Negative_Tension_table_${Num}`).classList.add(`Degree${mod(-root_position + Num, 12)}`);
        };
        Num++
    };
};

//ネガティヴ・ハーモニーの構成音を着色する関数
function NegativeNoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] != 0) {
            document.getElementById(`NegativeChord_${i}`).className = "NoteName NoteOn";
        } else if (onoff[i] === 0) {
            document.getElementById(`NegativeChord_${i}`).className = "NoteName";
        };
    };
};

//ネガティヴ・ハーモニーのコード・ネームの情報を判定する関数
function NegativeChordCandidateInfo(onoff) {

    //キーの主音の値を取得
    let NegativeKeyNumber = Number(document.getElementById("NegativeKeyNumber").value);

    //ルートの音の値を取得
    let RootNumber = Number(document.getElementById("rootNumber").value);
    RootNumber = mod((-10 * NegativeKeyNumber) - RootNumber, 12);

    //指定されたキーの調号を表示する。
    document.getElementById("Negative_clef_image").innerHTML = `<img src="./image/${clef_image[NegativeKeyNumber]}" alt="調号" title="調号" id="clef3">`;

    //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
    NegativeDegreePositionDrow(0);

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let SOF = DetermineKeySignature(RootNumber);

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let NegativeSOF = DetermineKeySignature(NegativeKeyNumber);

    // キーセンターからの距離が等しい音のペアを書き込む
    for (let i = 0; i < 6; i++) {
        document.getElementById(`NegativeNotePair_${i}`).innerHTML
            = `${noteNames[mod(NegativeKeyNumber - (i * 7), 12)][NegativeSOF]} - ${noteNames[mod(NegativeKeyNumber - (i * 5) + 7, 12)][NegativeSOF]}`;
    };

    //コードの構成音が何音か判定した値を格納する変数
    let CandidateCount = 0;
    //コードの構成音が何音か判定する
    for (let i = 0; i < 11; i++) {
        CandidateCount = CandidateCount + onoff[i];
    };

    document.getElementById("AddNegativeChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddNegativeChordInfoSub2HTML").innerHTML = ``;

    let TriToneText = [`<br>トライトーンを含みます。ドミナント機能を持つコードです。<br><br>【このコードの主な解決先】`];
    let Sub2Text = ["<br>【このコードの手前に居がちなコード】"]

    //トライ・トーンを判定する
    if (onoff[0] + onoff[6] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 2, 12)][SOF]}　${noteNames[mod(RootNumber - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 5, 12)][SOF]}　${noteNames[mod(RootNumber - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[3] + onoff[9] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 5, 12)][SOF]}　${noteNames[mod(RootNumber - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber - 2, 12)][SOF]}　${noteNames[mod(RootNumber - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンを判定する
    if (onoff[1] + onoff[7] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[4] + onoff[10] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 1 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 1 + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンを判定する
    if (onoff[2] + onoff[8] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}m　`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7(♭5)`);
    } else if (onoff[5] + onoff[11] === 2) {
        TriToneText.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 4, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 5, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}　${noteNames[mod(RootNumber + 2 - 2, 12)][SOF]}m　
            ${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}　${noteNames[mod(RootNumber + 2 + 1, 12)][SOF]}m`);
        Sub2Text.push(`<br>
            ${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 + 6, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 3, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7　${noteNames[mod(RootNumber + 2 - 0, 12)][SOF]}m7(♭5)　
            ${noteNames[mod(RootNumber + 2 + 3, 12)][SOF]}m7　${noteNames[mod(RootNumber + 1 + 3, 12)][SOF]}m7(♭5)`);
    };

    //トライ・トーンの情報を書き込む
    if (TriToneText.length === 1) {
        //トライトーンが含まれない場合
    } else if (CandidateCount <= 2) {
        //トライトーンが含まれるものの、コードの構成音が3音に満たない場合
    } else {
        document.getElementById("AddNegativeChordInfoTriToneHTML").innerHTML
            = TriToneText.join().replace(",", "").replace(",", "").replace(",", "");
        document.getElementById("AddNegativeChordInfoSub2HTML").innerHTML
            = Sub2Text.join().replace(",", "").replace(",", "").replace(",", "");
    };

    //8音以上のコードを判定する。
    if (CandidateCount >= 8) {
        document.getElementById("AddNegativeChordInfo2HTML").innerHTML = `<br>8種類以上の異なるピッチクラスを使用するコードになります。<br>響きが無彩色的になる可能性が高いです。`;
    } else if (CandidateCount >= 5) {
        document.getElementById("AddNegativeChordInfo2HTML").innerHTML = `<br>5種類以上の異なるピッチクラスを使用するコードになります。<br>混乱を防ぐために、ボイシング（和音の積み方）の併記を推奨します。`;
    } else {
        document.getElementById("AddNegativeChordInfo2HTML").innerHTML = ``;
    };

    //ベース音を判定する
    let Bass = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所(ベース音)を判定する
        if (onoff[i] === 1) {
            Bass = i + RootNumber;
            break;
        };
    };

    //コード・ネームを判定する。
    let RootNum = 0;
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < 11; i++) {
        //コード・ネームが格納された配列の先頭に戻る。
        let Num = 0;
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[Num].ChordBinary[0] === onoff[mod(RootNum + 0, 12)]
                && chord_container[Num].ChordBinary[1] === onoff[mod(RootNum + 1, 12)]
                && chord_container[Num].ChordBinary[2] === onoff[mod(RootNum + 2, 12)]
                && chord_container[Num].ChordBinary[3] === onoff[mod(RootNum + 3, 12)]
                && chord_container[Num].ChordBinary[4] === onoff[mod(RootNum + 4, 12)]
                && chord_container[Num].ChordBinary[5] === onoff[mod(RootNum + 5, 12)]
                && chord_container[Num].ChordBinary[6] === onoff[mod(RootNum + 6, 12)]
                && chord_container[Num].ChordBinary[7] === onoff[mod(RootNum + 7, 12)]
                && chord_container[Num].ChordBinary[8] === onoff[mod(RootNum + 8, 12)]
                && chord_container[Num].ChordBinary[9] === onoff[mod(RootNum + 9, 12)]
                && chord_container[Num].ChordBinary[10] === onoff[mod(RootNum + 10, 12)]
                && chord_container[Num].ChordBinary[11] === onoff[mod(RootNum + 11, 12)]) {

                //完全5度が省略可能かを判定する。
                let omitP5th = 0;
                //長2度(sus2)が含まれる場合
                if (onoff[mod(RootNum + 2, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(RootNum + 5, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(RootNum + 7, 12)] === 1) {
                    omitP5th = 1;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML
                        = `<br>Root（ルート音）に対してP5th（完全5度）の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードがメジャーかマイナーかそれ以外かを判定する。
                let MajorOrMinor = 0;
                //長3度が含まれる場合
                if (onoff[mod(RootNum + 4, 12)] === 1) {
                    MajorOrMinor = 0;
                    //短3度が含まれる場合
                } else if (onoff[mod(RootNum + 3, 12)] === 1) {
                    MajorOrMinor = 9;
                    //3度が含まれない場合
                } else {
                    MajorOrMinor = RootNumber;
                    //完全5度が含まれず、3度も含まれない場合
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                };

                let NonRootMOm = 0;
                //コード・ネームのシャープとフラットを判定するための値を計算する。
                NonRootMOm = mod(RootNum - MajorOrMinor + RootNumber, 12);

                //コード・ネームのシャープとフラットの判別
                let NonRootSOF = DetermineKeySignature(NonRootMOm);

                //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
                if (0 === onoff[0] && Bass >= RootNumber + RootNum) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含まないコード・ネームの展開形の判定(判定基準：ルート音のスイッチが押されていない)
                } else if (0 === onoff[0]) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[mod(Bass, 12)][NonRootSOF]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[mod(Bass, 12)][NonRootSOF]}（転回形）</font>`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの判定(判定基準：初回ループ時)
                } else if (RootNum === 0) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[RootNumber][NonRootSOF]} ${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[RootNumber][NonRootSOF]}${chord_container[Num]["Name"]}</font>`
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの転回形の判定
                } else {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[RootNumber][NonRootSOF]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[RootNumber][NonRootSOF]}（転回形）</font>`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
                    NegativeDegreePositionDrow(mod(RootNum, 12));
                };
                //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
                NegativeDegreePositionDrow(mod(RootNum, 12));
                //マッチするものが見つかった場合はここでreturn
                return;

            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
            Num++
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        RootNum++
        //マッチするもの無し
        if (RootNum === 11) {
            document.getElementById("AddNegativeChordHTML").innerHTML = `<font size="6">N.C.</font>`;
            document.getElementById("AddNegativeChordNameHTML").innerHTML = `<font size="2">読み方：ノン・コード</font>`;
            document.getElementById("AddNegativeChordInfoHTML").innerHTML = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。<br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>※基本的に「UST（アッパー・ストラクチャー・トライアド）」及び、「ハイブリッド・コード」での解釈の可能性は表示されません。<br>→ <a href="https://khufrudamonotes.com/u-s-t-hybrid-chords" target="_blank" rel="noopener noreferrer">代理コードと、USTやハイブリッド・コードの考え方</span></a></span></font>`;
            document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
        };
    };

    //3音連続しているトーン・クラスターを判定する
    let NoteChain = 0;
    let tcj = 0;
    for (let i = 0; i < 11; i++) {
        //特定の場合と、+1と＋2の場所のスイッチがonかどうか判定する。
        NoteChain = onoff[mod(i, 12)] + onoff[mod(i + 1, 12)] + onoff[mod(i + 2, 12)];
        //3音以上連続している部分を見つける。
        if (NoteChain === 3) {
            tcj = 1;
            break
        } else {
            NoteChain = 0;
        };
    };

    //4音以上音が連続しているトーン・クラスターを判定する(トーン・クラスターを格納した配列とマッチするものを見つける)
    RootNum = 0;
    let clear = 0;
    //12通りの場合について調べる。
    for (let i = 0; i < 11; i++) {
        let TCNum = 0;
        //トーン・クラスターを格納した配列と照合する。
        for (let y = 0; y < ToneCluster.length; y++) {
            if (ToneCluster[TCNum][0] === onoff[mod(RootNum + 0, 12)]
                && ToneCluster[TCNum][1] === onoff[mod(RootNum + 1, 12)]
                && ToneCluster[TCNum][2] === onoff[mod(RootNum + 2, 12)]
                && ToneCluster[TCNum][3] === onoff[mod(RootNum + 3, 12)]
                && ToneCluster[TCNum][4] === onoff[mod(RootNum + 4, 12)]
                && ToneCluster[TCNum][5] === onoff[mod(RootNum + 5, 12)]
                && ToneCluster[TCNum][6] === onoff[mod(RootNum + 6, 12)]
                && ToneCluster[TCNum][7] === onoff[mod(RootNum + 7, 12)]
                && ToneCluster[TCNum][8] === onoff[mod(RootNum + 8, 12)]
                && ToneCluster[TCNum][9] === onoff[mod(RootNum + 9, 12)]
                && ToneCluster[TCNum][10] === onoff[mod(RootNum + 10, 12)]
                && ToneCluster[TCNum][11] === onoff[mod(RootNum + 11, 12)]
                || tcj === 1) {
                document.getElementById("AddNegativeChordHTML").innerHTML = `<font size="6">Tone cluster</font>`;
                document.getElementById("AddNegativeChordNameHTML").innerHTML = `<font size="2">読み方：トーン・クラスター</font>`;
                document.getElementById("AddNegativeChordInfoHTML").innerHTML = `「音塊」「密集音群」とも。<br>隣り合う3つ以上の音を含む和音です。`;
                document.getElementById("AddNegativeChordInfoSub2HTML").innerHTML = ``;
                document.getElementById("AddNegativeChordInfoTriToneHTML").innerHTML = ``;
                document.getElementById("AddNegativeChordInfo2HTML").innerHTML = ``;
                document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                return
            };
            TCNum++
        };
        if (clear === 1) {
            //トーン・クラスターと一致した場合はreturn
            return
        } else {
            //ルート音をずらす。
            RootNum++
        };
    };
};