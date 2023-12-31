'use strict';

//配列を定義する。
let FingerboardOnOff = [];
let FingerboardPosition = [];
let MIDI_note_number;
let position_data = [];
let PitchClassArray = [];
let st_array = [64, 59, 55, 50, 45, 40, 35, 30, 25, 20];

// 指板に色がついているか判定する関数
function colored(st, Flet) {
    for (let i = 0; i < OCTAVE; i++) {
        if (document.getElementById(`FretNumber-${st}-${Flet}`).classList.contains(`Degree${i}`)) {
            return true;
        };
    };
    return false;
};

// 指板にsame_pitch_classクラスがついているか判定する関数
function samePitch(st, Flet) {
    if (document.getElementById(`FretNumber-${st}-${Flet}`).classList.contains(`same_pitch_class`)) {
        return true;
    };
    return false;
};

// --------------------------------------------------------------------------
//フレットボードの要素を描画する関数
function FingerboardGo() {
    //ポジションを格納した配列をリセットする
    FingerboardOnOff = [];
    FingerboardPosition = [];

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割する。
    let TuningVariation = document.getElementById("TuningVariation").value.split(':');

    let StringsCount;
    st_array = TuningVariation[0].split('-');
    //弦の本数得る。
    StringsCount = st_array.length;

    //フレットの数を取得する
    let FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    let key_signature_names = Number(document.getElementById("key_signature_names").value);
    let st = 1;

    //一度配列をリセットする。
    position_data = [];
    //フィンガーボードの要素を描画する関数
    FingerboardCreate();
    if (Number(document.getElementById('DominantHand').value) === 1) {
        for (let i = 0; i < StringsCount; i++) {
            //フレットボードの右端に、何弦かを表す数字とidを書き込む。
            document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id = "StringsNumber-${st}">${st}</th>`);
            MIDI_note_number = Number(st_array[i]);
            // フレットの数だけfor文で音名を書き込む
            for (let i = 0; i < FletCount + 1; i++) {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin',
                        `<th id="FretNumber-${st}-${i}" class="ReverseLookupBox NoteName_cursor_pointer DegreeBlack" onclick="NoteOnOff(${st},${i},${MIDI_note_number})">${EIJG[key_signature_names][mod(MIDI_note_number, OCTAVE)]}</th>`);
                position_data.push([st, i, MIDI_note_number]);
                MIDI_note_number++;
            };
            st++;
        };
    } else {
        for (let i = 0; i < StringsCount; i++) {
            MIDI_note_number = Number(st_array[i]) + FletCount;
            // フレットの数だけfor文で音名を書き込む
            for (let i = 0; i < FletCount + 1; i++) {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin',
                        `<th id="FretNumber-${st}-${FletCount - i}" class="ReverseLookupBox NoteName_cursor_pointer DegreeBlack" onclick="NoteOnOff(${st},${FletCount - i},${MIDI_note_number})">${EIJG[key_signature_names][mod(MIDI_note_number, OCTAVE)]}</th>`);
                position_data.push([st, FletCount - i, MIDI_note_number]);
                MIDI_note_number--;
            };
            //フレットボードの左端に、何弦かを表す数字とidを書き込む。
            document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id = "StringsNumber-${st}">${st}</th>`);
            st++;
        };
    };

    //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
    ModalCandidateDegree();
    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff, 0);
    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff);
    // 鍵盤を描画する関数
    WriteKeyboard();
};

//選択した音名の情報を元に色々な処理をする関数
function NoteOnOff(st, Flet, MIDI_note_number) {
    //変数を定義
    let PitchClassOnOff;
    let RootNumber = 0;

    //フレットボードの色を変更する
    let Toggle_status = document.getElementById(`FretNumber-${st}-${Flet}`).classList.toggle("DegreeBlack");

    if (Toggle_status === false) {
        //配列に該当のMIDIノートナンバーを追加する。
        FingerboardOnOff.push(MIDI_note_number);
        FingerboardPosition.push(`FretNumber-${st}-${Flet}`);
    } else {
        //配列から該当のMIDIノートナンバーを削除する。
        FingerboardOnOff.splice(FingerboardOnOff.indexOf(MIDI_note_number), 1);
        FingerboardPosition.splice(FingerboardPosition.indexOf(`FretNumber-${st}-${Flet}`), 1);
    };

    //ルート音を算出する。
    if (FingerboardOnOff.length > 0) {
        //2つの数を比較して小さい方を返す関数
        RootNumber = FingerboardOnOff.reduce(aryMin);
        //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）
        RootNumber = mod(RootNumber, OCTAVE);
    };

    //音名スイッチのオンオフ状態を格納する配列をリセット
    onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //ベース音（一番低い音）を判定する
    //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）＋ベース音の調整
    PitchClassOnOff = FingerboardOnOff.map(function (a) {
        return mod(a - RootNumber, OCTAVE);
    });

    //ピッチクラスが存在する場合、配列OnOffに1を代入する。
    for (let i = 0; i < PitchClassOnOff.length; i++) {
        onoff[PitchClassOnOff[i]] = 1;
    };

    //全ての色をリセットする
    for (let i = 0; i < OCTAVE; i++) {
        document.getElementById(`FretNumber-${st}-${Flet}`).classList.remove(`Degree${i}`);
    };

    //コード・ネームの情報を判定する関数を実行し、返り値でルート音を取得する。
    let [BassNumber, result] = ChordCandidateInfo(onoff, RootNumber);

    //ネガティブ・ハーモニーを表示する関数
    NegativeHarmony(onoff);

    //コードが判定できないときはルート音はそのまま
    if (BassNumber === undefined) {
        BassNumber = 0;
    };

    // //指板の色を度数表記に基づいて変更する。
    for (let i = 0; i < FingerboardPosition.length; i++) {
        //全ての色をリセットする
        for (let k = 0; k < OCTAVE; k++) {
            document.getElementById(`${FingerboardPosition[i]}`).classList.remove(`Degree${k}`);
        };
        //指板の色を度数表記に基づいて着色する。
        document.getElementById(`${FingerboardPosition[i]}`).classList.add(`Degree${mod(PitchClassOnOff[i] - BassNumber + RootNumber, OCTAVE)}`);
    };

    //音名スイッチのオンオフ状態を格納する配列をリセット
    onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）＋ベース音の調整
    PitchClassOnOff = FingerboardOnOff.map(function (a) {
        return mod(a - BassNumber, OCTAVE);
    });

    //ピッチクラスが存在する場合、配列OnOffに1を代入する。
    for (let i = 0; i < PitchClassOnOff.length; i++) {
        onoff[PitchClassOnOff[i]] = 1;
    };

    //この音の組み合わせを含む主なスケールを書き込む
    if (FingerboardOnOff.length > 0) {
        //モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数(指板からコード・ネームやスケール名を逆引きする用)
        ModalTextAndNoteCreate(onoff, mod(BassNumber, OCTAVE));
    } else {
        //モーダル・インターチェンジの候補をディグリー表記で表示する関数
        ModalCandidateDegree();
    };

    let do_app = document.getElementById("do_app").value;
    if (do_app === 2) {
        //ルート音のナンバーをdataタグの中に書き込む
        document.getElementById('rootNumber2').value = BassNumber;
    } else {
        //ルート音のナンバーをdataタグの中に書き込む
        document.getElementById('rootNumber').value = BassNumber;
    };

    //実音程のピッチクラスを判定する
    //ピッチクラスへ変換（MIDIノートナンバーをmod12で計算する）＋ベース音の調整
    PitchClassOnOff = FingerboardOnOff.map(function (a) {
        return mod(a, OCTAVE);
    });

    //そのピッチクラスが含まれる場合の処理
    for (let k = 0; k < OCTAVE; k++) {
        if (PitchClassOnOff.includes(k)) {
            //指板上全てをチェック
            for (let i = 0; i < position_data.length; i++) {
                //一致するピッチクラスのポジションにsame_pitch_classクラスを付与する。
                if (mod(position_data[i][2], OCTAVE) === k) {
                    document.getElementById(`FretNumber-${position_data[i][0]}-${position_data[i][1]}`).classList.add("same_pitch_class");
                };
            };
        };
    };

    //そのピッチクラスが含まれない場合の処理
    for (let k = 0; k < OCTAVE; k++) {
        if (PitchClassOnOff.includes(k) === false) {
            //指板上全てをチェック
            for (let i = 0; i < position_data.length; i++) {
                //一致するピッチクラスのポジションにsame_pitch_classクラスを付与する。
                if (mod(position_data[i][2], OCTAVE) === k) {
                    document.getElementById(`FretNumber-${position_data[i][0]}-${position_data[i][1]}`).classList.remove("same_pitch_class");
                };
            };
        };
    };

    // 指板上に選択されている音がない場合same_pitch_classクラスを全て外す。
    for (let i = 0; i < position_data.length; i++) {
        if (colored(position_data[i][0], position_data[i][1])) {
            if (samePitch(position_data[i][0], position_data[i][1])) {
                document.getElementById(`FretNumber-${position_data[i][0]}-${position_data[i][1]}`).classList.remove("same_pitch_class");
            };
        };
    };

    // 指定された鍵盤のポジションの色を変える関数
    SelectedKeyboard(BassNumber, FingerboardOnOff);
};

// 指定された鍵盤のポジションの色を変える関数
function SelectedKeyboard(Root, array) {
    //一旦全ての鍵盤の着色をリセットする
    for (let i = MIDINN_OfTopNote; i >= MIDINN_OfTopNote - NumberOfKeys; i--) {
        for (let j = 0; j < OCTAVE; j++) {
            if (document.getElementById(`MIDI_note_number-${i}`) !== null) {
                document.getElementById(`MIDI_note_number-${i}`).classList.remove(`Selected_keyboard${j}`);
            };
        };
    };
    //重複するMIDIノートナンバーを削除する
    let array2 = Array.from(new Set(array));
    //度数に基づいて着色する
    for (let i = 0; i < array2.length; i++) {
        //鍵盤が描画されている場合のみ処理を実行する
        if (document.getElementById(`MIDI_note_number-${array2[i]}`) !== null) {
            let j = mod(array2[i] - Root, OCTAVE);
            document.getElementById(`MIDI_note_number-${array2[i]}`).classList.toggle(`Selected_keyboard${j}`);
        };
    };
};

let transpose_st;
let transpose_Flet;
let transpose_MIDI_note_number;
let transpose_direction;
let OpenStringsLock = 1;

// 解放弦ロックのON・OFFをする関数
function OpenStrings_Lock(transpose_direction) {
    if (transpose_direction === 0) {
        if (OpenStringsLock === 0) {
            OpenStringsLock = 1;
            document.getElementById("OpenStringsLock").innerHTML = '<i class="fa-solid fa-lock"></i> 開放弦の移調ロックを解除する';
        } else {
            OpenStringsLock = 0;
            document.getElementById("OpenStringsLock").innerHTML = '<i class="fa-solid fa-unlock"></i> 開放弦の移調ロックを解除中';
        }
        document.getElementById("OpenStringsLock").classList.toggle("LockOff");
        document.getElementById("OpenStringsLock").classList.toggle("LockOn");
    }
};

//指板上の音を移調する関数
function transpose(transpose_direction) {
    // 描画されている逆引き指板全てに対して処理を行う
    for (let i = 0; i < FingerboardOnOff.length; i++) {
        //そのポジションの弦、フレット、MIDIノートナンバー情報を取得
        transpose_st = Number(FingerboardPosition[0].split('-')[1]);
        transpose_Flet = Number(FingerboardPosition[0].split('-')[2]);
        transpose_MIDI_note_number = Number(FingerboardOnOff[0]);

        //もし、移動先に既に選択されている音があったら
        if (FingerboardPosition.includes(`FretNumber-${transpose_st}-${transpose_Flet + transpose_direction}`)) {
            NoteOnOff(transpose_st, transpose_Flet + transpose_direction * 1, transpose_MIDI_note_number + transpose_direction * 1);
            NoteOnOff(transpose_st, transpose_Flet + transpose_direction * 2, transpose_MIDI_note_number + transpose_direction * 2);
        } else {
            //選択した音名の情報を元に色々な処理をする関数
            NoteOnOff(transpose_st, transpose_Flet, transpose_MIDI_note_number);
            //解放弦や最高音フレットの処理（解放弦のロック判定によって処理を分岐）
            if (transpose_direction === -1 && transpose_Flet === 0) {
                // 解放弦のロック時の-1ボタンは動かさない
                NoteOnOff(transpose_st, transpose_Flet, transpose_MIDI_note_number);
            } else if (OpenStringsLock === 1 && transpose_Flet === 0) {
                // 解放弦のロックの+1ボタンは動かさない
                NoteOnOff(transpose_st, transpose_Flet, transpose_MIDI_note_number);
            } else if (transpose_direction === 1 && transpose_Flet === Number(document.getElementById('NumberOfFlet').value)) {
                //最高音のフレットは動かさない。
                NoteOnOff(transpose_st, transpose_Flet, transpose_MIDI_note_number);
            } else {
                //それ以外の場合は移調する
                NoteOnOff(transpose_st, transpose_Flet + transpose_direction, transpose_MIDI_note_number + transpose_direction);
            };
        };
    };
};

//スケール名の弦を切り替える関数
function ChangeLanguageFingerboard(value) {
    if (value === 0) {
        //モーダル・インターチェンジの候補を表示する関数
        ModalTextCreate();
    } else {
        //モーダルインターチェンジ候補のスケール名を日本語と英語に切り替えるボタンのための関数
        ScaleLanguageJE();
    };
    transpose(0);
};


