//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
};

//英・米式音名の多次元配列
const noteNames =
    [['C', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'D𝄫', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'C'],
    ['C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'C#/D♭'],
    ['D', 'D', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'D'],
    ['D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'F𝄫', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'D#', 'D#/E♭'],
    ['E', 'E', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'D𝄪', 'E'],
    ['F', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'E#', 'F'],
    ['F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'E𝄪', 'F#/G♭'],
    ['G', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'A𝄫', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'G'],
    ['G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'G#/A♭'],
    ['A', 'A', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A', 'A', 'A', 'B𝄫', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A'],
    ['A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'A#/B♭'],
    ['B', 'B', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'B']];

//入力されたテキストをサニタイジング(エスケープ処理)する関数
function Sanitizing() {
    text = text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

        .replace(/\n/g, "<br \/>")
};

function ToDegreeName() {
    //シャープやフラットの表記ゆれを統一
    text = text
        .replace(/♯/g, "#")
        .replace(/♯/g, "#")
        .replace(/#⃣/g, "#")
        .replace(/♭♭/g, "𝄫")
        .replace(/bb/g, "𝄫")
        .replace(/b/g, "♭")

    BeforeRootNumber = Number(document.getElementById("BeforeRootNumber").value);

    c = mod(BeforeRootNumber + 0, 12);
    cisdes = mod(BeforeRootNumber + 1, 12);
    d = mod(BeforeRootNumber + 2, 12);
    dises = mod(BeforeRootNumber + 3, 12);
    e = mod(BeforeRootNumber + 4, 12);
    f = mod(BeforeRootNumber + 5, 12);
    fisges = mod(BeforeRootNumber + 6, 12);
    g = mod(BeforeRootNumber + 7, 12);
    gisas = mod(BeforeRootNumber + 8, 12);
    a = mod(BeforeRootNumber + 9, 12);
    aisb = mod(BeforeRootNumber + 10, 12);
    h = mod(BeforeRootNumber + 11, 12);

    //音名とディグリーネームを格納した連想配列
    NotesArray = [
        { NoteName: noteNames[cisdes][3], DegreeName: '#Ⅰ' },
        { NoteName: noteNames[cisdes][4], DegreeName: '♭Ⅱ' },

        { NoteName: noteNames[dises][6], DegreeName: '#Ⅱ' },
        { NoteName: noteNames[d][7], DegreeName: '𝄫Ⅲ' },
        { NoteName: noteNames[dises][8], DegreeName: '♭Ⅲ' },

        { NoteName: noteNames[f][10], DegreeName: '#Ⅲ' },

        { NoteName: noteNames[e][11], DegreeName: '♭Ⅳ' },

        { NoteName: noteNames[fisges][13], DegreeName: '#Ⅳ' },
        { NoteName: noteNames[fisges][14], DegreeName: '♭Ⅴ' },

        { NoteName: noteNames[gisas][16], DegreeName: '#Ⅴ' },
        { NoteName: noteNames[gisas][17], DegreeName: '♭Ⅵ' },

        { NoteName: noteNames[aisb][19], DegreeName: '#Ⅵ' },
        { NoteName: noteNames[a][20], DegreeName: '𝄫Ⅶ' },
        { NoteName: noteNames[aisb][21], DegreeName: '♭Ⅶ' },

        { NoteName: noteNames[h][23], DegreeName: '#Ⅶ' },

        { NoteName: noteNames[c][2], DegreeName: 'Ⅰ' },
        { NoteName: noteNames[d][5], DegreeName: 'Ⅱ' },
        { NoteName: noteNames[e][9], DegreeName: 'Ⅲ' },
        { NoteName: noteNames[f][12], DegreeName: 'Ⅳ' },
        { NoteName: noteNames[g][15], DegreeName: 'Ⅴ' },
        { NoteName: noteNames[a][18], DegreeName: 'Ⅵ' },
        { NoteName: noteNames[h][22], DegreeName: 'Ⅶ' }
    ];

    //配列を文字数が多い順で並び替える。
    NotesArray.sort((a, b) => {
        return b.NoteName.length - a.NoteName.length;
    })

    //文字数の多い順番にテキストへ置換をかけていく。
    for (let i = 0; i < NotesArray.length; i++) {
        //テキストの長さだけreplaceメソッドを適用する。
        for (let j = 0; j < text.length; j++) {
            text = text.replace(NotesArray[i]['NoteName'], NotesArray[i]['DegreeName']);
        };
    };
};

function DegreeChange() {

    AfterRootNumber = Number(document.getElementById("AfterRootNumber").value);

    c = mod(AfterRootNumber + 0, 12);
    cisdes = mod(AfterRootNumber + 1, 12);
    d = mod(AfterRootNumber + 2, 12);
    dises = mod(AfterRootNumber + 3, 12);
    e = mod(AfterRootNumber + 4, 12);
    f = mod(AfterRootNumber + 5, 12);
    fisges = mod(AfterRootNumber + 6, 12);
    g = mod(AfterRootNumber + 7, 12);
    gisas = mod(AfterRootNumber + 8, 12);
    a = mod(AfterRootNumber + 9, 12);
    aisb = mod(AfterRootNumber + 10, 12);
    h = mod(AfterRootNumber + 11, 12);

    text = text
        .replace(/#Ⅰ/g, `${noteNames[cisdes][3]}`)
        .replace(/♭Ⅱ/g, `${noteNames[cisdes][4]}`)

        .replace(/#Ⅱ/g, `${noteNames[dises][6]}`)
        .replace(/𝄫Ⅲ/g, `${noteNames[d][7]}`)
        .replace(/♭Ⅲ/g, `${noteNames[dises][8]}`)

        .replace(/#Ⅲ/g, `${noteNames[f][10]}`)

        .replace(/♭Ⅳ/g, `${noteNames[e][11]}`)

        .replace(/#Ⅳ/g, `${noteNames[fisges][13]}`)
        .replace(/♭Ⅴ/g, `${noteNames[fisges][14]}`)

        .replace(/#Ⅴ/g, `${noteNames[gisas][16]}`)
        .replace(/♭Ⅵ/g, `${noteNames[gisas][17]}`)

        .replace(/#Ⅵ/g, `${noteNames[aisb][19]}`)
        .replace(/𝄫Ⅶ/g, `${noteNames[a][20]}`)
        .replace(/♭Ⅶ/g, `${noteNames[aisb][21]}`)

        .replace(/#Ⅶ/g, `${noteNames[h][23]}`)

        .replace(/Ⅰ/g, `${noteNames[c][2]}`)
        .replace(/Ⅱ/g, `${noteNames[d][5]}`)
        .replace(/Ⅲ/g, `${noteNames[e][9]}`)
        .replace(/Ⅳ/g, `${noteNames[f][12]}`)
        .replace(/Ⅴ/g, `${noteNames[g][15]}`)
        .replace(/Ⅵ/g, `${noteNames[a][18]}`)
        .replace(/Ⅶ/g, `${noteNames[h][22]}`);
};

//使用に注意が必要な表現を着色して転記して点数を書き込む関数
function ChangeDegreeText() {

    //テキストエリア内のテキストを取得
    text = document.getElementById("textarea").value;
    degreeOnOff = document.getElementById("AfterRootNumber").value;

    ToDegreeName(text);

    //入力されたテキストをサニタイジングする関数
    Sanitizing(text);

    //ディグリーネーム表記の処理
    if (degreeOnOff === "12") {
        //処理なし
    } else {
        DegreeChange(text);
    }

    //表示ボックスに書き込む
    document.getElementById("box").innerHTML = text;
};

//サンプルテキストを書き込む関数
function ExampleTextOne() {
    document.getElementById("textarea").innerHTML
        = "・カノン進行\nC - G - Am - Em - F - C - Dm - G\n\n・王道進行\nF - G - Em - Am\n\n※ディグリーネームでも入力できます。\n例：Ⅵm - Ⅳ - Ⅴ - Ⅰ - Ⅴ/Ⅶ";
    ChangeDegreeText();
    ButtonInvisible();
};

//テキストが入力されたらボタンを消す関数
function ButtonInvisible() {
    //テキストエリア内のテキストを取得
    text = document.getElementById("textarea").value;
    Sanitizing(text);

    TextLength = text.replace(/<br \/>/g, '').length;
    if (TextLength === 0) {
        document.getElementById("box").innerHTML = '<br><br><br><br><br><br><br>';
    } else if (TextLength > 1) {
        document.getElementById("ExampleTextButton").innerHTML = ""
    };
}

//文章が入力・変更されたときに実行する
window.addEventListener('DOMContentLoaded', function () {

    // input要素を取得
    let input_name = document.getElementById("textarea")

    // イベントリスナーでイベント「input」を登録
    input_name.addEventListener("input", function () {
        ButtonInvisible();
        ChangeDegreeText();
    });

    // イベントリスナーでイベント「change」を登録
    input_name.addEventListener("change", function () {
        ButtonInvisible();
        ChangeDegreeText();
    });

});