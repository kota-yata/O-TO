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

    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    //キーの主音の値を取得
    let NegativeKeyNumber = Number(document.getElementById("NegativeKeyNumber").value);

    //ルートの音の値を取得し計算
    let RootNumber = mod((-10 * NegativeKeyNumber) - Number(document.getElementById("rootNumber").value), 12);

    for (let i = 0; i < 12; i++) {
        document.getElementById(`NegativeChord_${i}`).innerHTML = EIJG[key_signature_names][mod(RootNumber + i, 12)];
    };
};

//コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
function NegativeDegreePositionDrow(root_position) {
    let do_app = Number(document.getElementById("do_app").value);
    if (do_app === 0) {
        return;
    };
    for (let i = 0; i < 12; i++) {
        //いったんテーブル要素を全て空にする。
        document.getElementById(`Negative_Degree_table_${i}`).innerHTML = ``;
        document.getElementById(`Negative_Tension_table_${i}`).innerHTML = ``;
        for (let k = 0; k < 12; k++) {
            //いったんクラスを全て削除する
            document.getElementById(`Negative_Degree_table_${i}`).classList.remove(`Degree${k}`);
            document.getElementById(`Negative_Tension_table_${i}`).classList.remove(`Degree${k}`);
        };
    };
    for (let i = 0; i < 12; i++) {
        //テキストを追加する
        document.getElementById(`Negative_Degree_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, 12)][0]}`;
        document.getElementById(`Negative_Tension_table_${i}`).innerHTML = `${Degree_Tension_array[mod(-root_position + i, 12)][1]}`;
        //クラスを追加する
        document.getElementById(`Negative_Degree_table_${i}`).classList.add(`Degree${mod(-root_position + i, 12)}`);
        if (Degree_Tension_array[mod(-root_position + i, 12)][1] !== "") {
            document.getElementById(`Negative_Tension_table_${i}`).classList.add(`Degree${mod(-root_position + i, 12)}`);
        };
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
    document.getElementById("Negative_clef_image").innerHTML = `<img src="./image/${clef_image[NegativeKeyNumber]}" alt="調号" title="調号" class="clef3">`;

    //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
    NegativeDegreePositionDrow(0);

    //コード情報をリセット
    document.getElementById("AddNegativeChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddNegativeChordInfoSub2HTML").innerHTML = ``;

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    let NegativeSOF = DetermineKeySignature(NegativeKeyNumber);

    // キーセンターからの距離が等しい音のペアを書き込む
    for (let i = 0; i < 6; i++) {
        document.getElementById(`NegativeNotePair_${i}`).innerHTML
            = `${noteNames[mod(NegativeKeyNumber - (i * 7), 12)][NegativeSOF]} - ${noteNames[mod(NegativeKeyNumber - (i * 5) + 7, 12)][NegativeSOF]}`;
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

    //トライトーンが含まれてコードの構成音が3音以上の場合トライ・トーンの情報を書き込む
    if (TriToneText.length >= 2 && HowManyTones.length >= 2) {
        document.getElementById("AddChordInfoTriToneHTML").innerHTML
            = TriToneText.join().replaceAll(",", "");
        document.getElementById("AddChordInfoSub2HTML").innerHTML
            = Sub2Text.join().replaceAll(",", "");
    };

    //5音以上のコードを判定する。
    if (HowManyTones.length >= 5) {
        document.getElementById("AddChordInfo2HTML").innerHTML
            = `<br>5種類以上の異なるピッチクラスを使用するコードです。<br>混乱を防ぐために、ボイシング（和音の積み方）の併記を推奨します。`;
    } else {
        document.getElementById("AddChordInfo2HTML").innerHTML = ``;
    };

    //最低音を判定する
    let LowestNoteNumber = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所（最低音）を判定する
        if (onoff[i] === 1) {
            LowestNoteNumber = mod(i + RootNumber, 12);
            break;
        };
    };

    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < 12; i++) {
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[j].ChordBinary[0] === onoff[mod(i + 0, 12)]
                && chord_container[j].ChordBinary[1] === onoff[mod(i + 1, 12)]
                && chord_container[j].ChordBinary[2] === onoff[mod(i + 2, 12)]
                && chord_container[j].ChordBinary[3] === onoff[mod(i + 3, 12)]
                && chord_container[j].ChordBinary[4] === onoff[mod(i + 4, 12)]
                && chord_container[j].ChordBinary[5] === onoff[mod(i + 5, 12)]
                && chord_container[j].ChordBinary[6] === onoff[mod(i + 6, 12)]
                && chord_container[j].ChordBinary[7] === onoff[mod(i + 7, 12)]
                && chord_container[j].ChordBinary[8] === onoff[mod(i + 8, 12)]
                && chord_container[j].ChordBinary[9] === onoff[mod(i + 9, 12)]
                && chord_container[j].ChordBinary[10] === onoff[mod(i + 10, 12)]
                && chord_container[j].ChordBinary[11] === onoff[mod(i + 11, 12)]) {

                //完全5度が省略可能かを判定する。
                let omitP5th = 0;
                //長2度(sus2)が含まれる場合
                if (onoff[mod(i + 2, 12)] === 1 && HowManyTones.length < 4) {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(i + 5, 12)] === 1 && HowManyTones.length < 4) {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(i + 7, 12)] === 1) {
                    omitP5th = 1;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML
                        = `<br>Root（ルート音）に対してP5th（完全5度）の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    omitP5th = 0;
                    document.getElementById("AddNegativeChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードネームの名前を配列から取り出す
                let ChordName = chord_container[j].ChordName;
                let HowToRead = chord_container[j].Name;
                let Minor = 0;
                //マイナーコードをキーの調号に合わせるための処理
                if (onoff[mod(i + 3, 12)] === 1 && HowToRead.match("マイナー")) {
                    // マイナーコードの場合
                    Minor = 9;
                };
                //コード・ネームのシャープとフラットを判定するための値を計算する。
                let SOF = DetermineKeySignature(mod(i + RootNumber - Minor, 12));

                //コードのベース音が♯か♭かを判定する
                let BassSOF = DetermineBassSignature(SOF, ChordName, mod(LowestNoteNumber - i - RootNumber, 12));

                //異名同音判定が正しいか検証する
                BassSOF = EnharmonicRejudgement(SOF, BassSOF, noteNames[mod(RootNumber + i, 12)][SOF], noteNames[mod(LowestNoteNumber, 12)][BassSOF]);

                //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
                if (0 === mod(LowestNoteNumber - i - RootNumber, 12)) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[i].Info}`;
                    //軸音を含まないコード・ネームの展開形の判定(判定基準：ルート音のスイッチが押されていない)
                } else if (0 !== mod(LowestNoteNumber - i - RootNumber, 12)) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}/${noteNames[mod(LowestNoteNumber, 12)][BassSOF]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}・オーヴァー${noteNames[mod(LowestNoteNumber, 12)][BassSOF]}（転回形）</font>`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[i].Info}`;
                    //軸音を含むコード・ネームの判定(判定基準：初回ループ時)
                } else if (i === 0) {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[RootNumber][SOF]} ${ChordName}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[RootNumber][SOF]}${HowToRead}</font>`
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[i].Info}`;
                    //軸音を含むコード・ネームの転回形の判定
                } else {
                    document.getElementById("AddNegativeChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + i, 12)][SOF]}${ChordName}/${noteNames[RootNumber][BassSOF]}</font>`;
                    document.getElementById("AddNegativeChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + i, 12)][SOF]}${HowToRead}・オーヴァー${noteNames[RootNumber][BassSOF]}（転回形）</font>`;
                    document.getElementById("AddNegativeChordInfoHTML").innerHTML
                        = `${chord_container[i].Info}`;
                };
                //コードネームに合わせてネガティヴ・ハーモニーの度数表記を描画する関数
                NegativeDegreePositionDrow(mod(i, 12));
                //マッチするものが見つかった場合はここでreturn
                return;
            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        //マッチするもの無し
        if (i === 11) {
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
    let clear = 0;
    //12通りの場合について調べる。
    for (let i = 0; i < 11; i++) {
        //トーン・クラスターを格納した配列と照合する。
        for (let y = 0; y < ToneCluster.length; y++) {
            if (ToneCluster[y][0] === onoff[mod(i + 0, 12)]
                && ToneCluster[y][1] === onoff[mod(i + 1, 12)]
                && ToneCluster[y][2] === onoff[mod(i + 2, 12)]
                && ToneCluster[y][3] === onoff[mod(i + 3, 12)]
                && ToneCluster[y][4] === onoff[mod(i + 4, 12)]
                && ToneCluster[y][5] === onoff[mod(i + 5, 12)]
                && ToneCluster[y][6] === onoff[mod(i + 6, 12)]
                && ToneCluster[y][7] === onoff[mod(i + 7, 12)]
                && ToneCluster[y][8] === onoff[mod(i + 8, 12)]
                && ToneCluster[y][9] === onoff[mod(i + 9, 12)]
                && ToneCluster[y][10] === onoff[mod(i + 10, 12)]
                && ToneCluster[y][11] === onoff[mod(i + 11, 12)]
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
        };
        if (clear === 1) {
            //トーン・クラスターと一致した場合はreturn
            return;
        } else {
            //ルート音をずらす。
        };
    };
};