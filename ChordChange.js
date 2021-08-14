
//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
};

// 四捨五入して小数点第3位までを表示する関数 (JavaScriptには元からそういう関数が無いっぽいので)
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
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

//コード進行を格納する多次元配列
const chordProgOne =
    [["シンプル・イズ・ベスト", "Ⅰ-Ⅳ-Ⅴ", "トニック！サブドミナント！ドミナント！"],
    ["きっとみんな好き", "Ⅰ-Ⅳ-Ⅵm-Ⅴ", "メジャー感とマイナー感の絶妙なハーモニー。"],
    ["ポップパンク進行", "Ⅰ-Ⅴ-Ⅵm-Ⅳ", "洋楽でおそらく最もポピュラーな進行。邦楽ではⅣから始めたバージョンが重宝されがち。"],
    ["賞味期限なし", "Ⅰ-Ⅴ-Ⅳ-Ⅴ", "結局ここに帰ってくる。"],
    ["カノン進行", "Ⅰ-Ⅴ-Ⅵm-Ⅲm-Ⅳ-Ⅰ-Ⅱm-Ⅴ", "王道で美しい曲を作りたいならこれ"],
    ["なめらかカノン進行", "Ⅰ-Ⅴ/Ⅶ-Ⅵm-Ⅲm/Ⅴ-Ⅳ-Ⅰ/Ⅲ-Ⅱm-Ⅴ", "カノン進行のベースラインをなめらかに繋がるように変形したもの。"],
    ["モノクローム", "Ⅰ-Ⅶm7(♭5)-Ⅲ7-Ⅵm7", "カノン進行冒頭の定番変形パターンのひとつ。Ⅵmへのセカンダリー・ケーデンスを差し込んだもの。"],
    ["いつメン", "Ⅰ-Ⅵm-Ⅳ-Ⅴ", "いつ使っても良い。"],
    ["ヌケ感", "Ⅰ-Ⅲm/Ⅶ-Ⅵm-Ⅳ", "シンプルでモダンな雰囲気が出せる。"],
    ["青春", "Ⅰ-Ⅲ-Ⅵｍ-Ⅴ", "溢れ出るノスタルジー。"],
    ["リラックス", "Ⅰ-Ⅱm7-Ⅰ/Ⅲ-Ⅳ", "ベースが段階的に上昇。凪な空気感。"],
    ["幻想的", "Ⅰ-♭Ⅵ-♭Ⅶ-♭Ⅵ", "メロディックメジャー的な響きを使いたいときに。"],
    ["午前2時の踏切に居そう", "Ⅰadd9-Ⅵm7-Ⅴ-Ⅳ", "参考曲：BUMP OF CHICKEN - 天体観測"],
    ["温かみを感じる半音上昇", "Ⅰ-Ⅰaug-Ⅰ6-Ⅰ7", "メジャーコードのトップノートを半音で上昇させるクリシェ。"],
    ["サンボマスターしか勝たん", "Ⅰ-Ⅰaug/#Ⅳ-Ⅳ△7-Ⅴ", "サンボマスターっぽいブラックアダーコードの使い方"],
    ["優雅", "Ⅰ△7-#Ⅰdim7-Ⅱm7-Ⅴ7", "パッシング・ディミニッシュはいかが？"],
    ["壮大", "Ⅰsus4-Ⅰsus4/♭Ⅱ-Ⅰsus4/♭Ⅲ-Ⅰsus4/Ⅳ-Ⅰsus4/Ⅴ", "仰々しくしたいときに。"],
    ["遊び心", "Ⅰ-Ⅴ/Ⅰ-Ⅳ/Ⅰ-♭Ⅵ/Ⅰ-♭Ⅶ/Ⅰ", "ベースを固定しつつちょっと寄り道。"],
    ["ドラマチック", "Ⅰ-♭Ⅱ/Ⅰ-Ⅱ/Ⅰ-♭Ⅲ/Ⅰ-Ⅲ/Ⅰ", "ベースを固定しつつ大胆に寄り道。"],
    ["ブルージー", "Ⅰ7-Ⅳ7-Ⅰ7-Ⅳ7-Ⅴ7-Ⅳ7-Ⅰ7-Ⅴ7", "ブルースっぽい響きを出したいならコレ！"],
    ];

const chordProgFour =
    [["王道進行", "Ⅳ-Ⅴ-Ⅲm-Ⅵm", "名実ともに「J-Popの王」"],
    ["万能調味料", "Ⅳ-Ⅴ-Ⅵm-Ⅰ", "どんなジャンルでも受け入れる包容力！"],
    ["エモい", "Ⅳ-Ⅴ-Ⅰ-Ⅲ", "サビの2回し目とかによく居そう。"],
    ["涙を誘うウェポン", "Ⅳ-Ⅴ-#Ⅴm(♭5)-Ⅵm", "みんな大好きパッシング・ディミニッシュ"],
    ["アニソン風味", "Ⅳ-Ⅴ-♭Ⅵ-♭Ⅶ", "サビの最後あたりに入れると効果抜群！"],
    ["解放・救済", "Ⅳ-Ⅴ-Ⅵ", "モダンな雰囲気が出る。ピカルディ終止っぽいサウンド感。"],
    ["邦楽ポップパンク進行", "Ⅳ-Ⅰ-Ⅴ-Ⅵm", "爽やか ＋ ちょっぴり哀愁 ＝ 正解。 ポップパンク進行の派生形。"],
    ["サビ前の常連", "Ⅳ-#Ⅳm(♭5)-Ⅴ-#Ⅴm(♭5)", "「これからサビに入りますよ～」感が出ます。"],
    ["内なる敵", "Ⅳ-Ⅵm-Ⅰm-Ⅴ/Ⅱ-♭Ⅶm/♭Ⅱ-Ⅳ/Ⅰ-Ⅶdim7-Ⅲ7/#Ⅴ-Ⅵm", "参考曲：Dream Theater - The Enemy Inside"],
    ["335号室", "Ⅳ△7-Ⅲm7(#5)-Ⅱm7-Ⅲm7", "参考曲：Larry Carlton - ROOM 335"],
    ["ゲーム音楽の香り", "Ⅳ△7-Ⅲm7-♭Ⅲ△7-Ⅱm7", "△7とm7を繰り返して半音ずつ下がっていく形。"],
    ["レアキャラ", "Ⅳ△7-Ⅲm7-♭Ⅲdim7-Ⅱm7", "このパッシング・ディミニッシュはあまり出てこない印象。"],
    ["丸サ進行", "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅰ7", "「Just The Two Of Us進行」とも。新たな時代で「J-Popの王」の座を狙っている。"],
    ["オシャレ", "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅱ7", "丸サ進行とはひと味違うオシャレさ。"],
    ["リディアン", "Ⅳ-Ⅴ/Ⅳ", "リディアン・モードを取り入れたい時に。"],
    ["メロウな王道進行", "Ⅳ△7-Ⅴ7/Ⅳ-Ⅲm7-Ⅵm7", "「王道進行」に、さらに砂糖を振りかけた感じ。"],
    ["チンダル現象みがある", "Ⅳ△7-Ⅳm7-Ⅲm7-Ⅵ7", "穏やかな昼下がりみたいな流れ。"],
    ["花鳥風月", "Ⅳ6-Ⅴ6-Ⅵ7sus4-Ⅲsus4", "止ん事無き和風な響き"],
    ["綺麗", "Ⅳ△7-Ⅶm7(♭5)/Ⅳ-Ⅲm7-Ⅲdim7-Ⅱm7-Ⅴ7/Ⅱ-ⅠMaj7-Ⅰ6", "「美しさ」への一つの回答。"],
    ];

const chordProgSix =
    [["小室進行", "Ⅵm-Ⅳ-Ⅴ-Ⅰ", "最後にⅤ/Ⅶを追加しても使いやすい。"],
    ["ハリウッド映画にありそう", "Ⅵm-Ⅳ-Ⅰ-Ⅴ", "最終決戦へ向かっていけそう。ポップパンク進行の派生形。"],
    ["オールラウンダー", "Ⅵm-Ⅴ-Ⅳ-Ⅴ", "どんなジャンルでも必要とされている。"],
    ["炎の呼吸", "Ⅵm-Ⅴ-Ⅳ-Ⅰ", "参考曲：LiSA - 炎"],
    ["洋楽っぽい", "Ⅵm-Ⅰ-Ⅴ-Ⅳ", "シンプルで使いやすい。"],
    ["鉄板のベース半音下降", "Ⅵm-#Ⅴaug-Ⅰ/Ⅴ-#Ⅳm7(♭5)", "みんな8億万回は聴いている。"],
    ["スタイリッシュ", "Ⅵm9-Ⅱm7-Ⅲm7", "研ぎ澄まされた都会的な響き"],
    ["情熱的", "Ⅵm-Ⅱm-Ⅴ-Ⅰ-Ⅴ/Ⅶ", "力強くいきたい時に。"],
    ["お前はタンゴ？", "Ⅵm-Ⅱm-Ⅲ-Ⅵm", "タンゴ（tango)とは. 18世紀後半にイベリア半島で発祥したある種のリズムの舞曲。(Wikipediaより引用)"],
    ["バロックなゼクエンツ", "Ⅵm-Ⅱm-Ⅴ-Ⅰ-Ⅳ-Ⅶm(♭5)-Ⅲ", "気分はバロック時代。"],
    ["貴様の形状", "Ⅵm-Ⅱm7-Ⅳ-Ⅴ", "参考曲：Ed Sheeran - Shape of You"],
    ["近未来", "Ⅵm-Ⅴ/Ⅵ-Ⅳ/Ⅵ-Ⅲm/Ⅵ", "ベースを固定しつつ上を動かす形。"],
    ["困難を伴う前進", "Ⅵm-Ⅴ/Ⅶ-Ⅰ-Ⅱm-Ⅲsus4-Ⅲ", "ベースが段階的に上昇。シリアスな空気感。"],
    ["サスペンス半音上昇", "Ⅵm-Ⅳ/Ⅵ-#Ⅳm(♭5)/Ⅵ-Ⅵm7", "マイナーコードのトップノートを半音で上昇させるクリシェ。"],
    ["遂に自由に…", "Ⅵm-Ⅲ7/#Ⅴ-Ⅳ△7-Ⅱm9-Ⅴsus4-Ⅴ", "参考曲：Dream Theater - Finally Free"],
    ["月光が差す", "Ⅵm-Ⅲ/#Ⅴ-Ⅵ7/Ⅴ-Ⅱm/Ⅳ-Ⅳ7-Ⅲ/#Ⅴ", "参考曲：ベートーヴェン - ピアノソナタ第14番嬰ハ短調 作品27-2(月光ソナタ)第3楽章"],
    ["ミステリー小説", "Ⅵm-Ⅳ7-Ⅲ7", "怪しく不思議、ちょっとコミカル。"],
    ["ディストピア", "Ⅵm-Ⅶ-Ⅱm-Ⅲ", "不穏な感じを出したいときに。"],
    ["外宇宙への旅", "Ⅵm-♭Ⅲ-Ⅵ-Ⅳm-Ⅵm-♭Ⅶm-Ⅱm-#Ⅳm", "暗黒の宇宙空間を想起させる響き。"],
    ["俺が好き", "Ⅵm-#Ⅳm7(♭5)-Ⅳ△7-Ⅱm7-Ⅲm7", "好きなのでたくさん使っちゃう。"],
    ];

const chordProgEight =
    [["ツーファイブ", "Ⅱm7-Ⅴ7-Ⅰ", "最も基本的な和音の流れ。"],
    ["裏コードで代理", "Ⅱm7-♭Ⅱ7-Ⅰ", "裏コードは、トライトーンを共有しているドミナント7thコード。ルート音は五度圏で反対側に位置する。"],
    ["フュージョン・コードで代理", "Ⅱm7-Ⅳ/Ⅴ-Ⅰ", "「♭Ⅶ/Ⅰ」は、ミクソリディアンの系譜のサウンド。「フュージョン・コード」とも呼ばれる。"],
    ["♭Ⅶm/Ⅰで代理", "Ⅱm7-Ⅳm/Ⅴ-Ⅰ", "「♭Ⅶm/Ⅰ」は、フリジアン・ドミナントやミクソリディアン♭2ndの系譜のサウンド。"],
    ["♭Ⅶdim/Ⅰで代理", "Ⅱm7-Ⅳdim/Ⅴ-Ⅰ", "「♭Ⅶdim/Ⅰ」は、オルタードやフリジアン♭4thの系譜のサウンド。"],
    ["ブラックアダー・コードで代理", "Ⅱm7-Ⅳaug/Ⅴ-Ⅰ", "「♭Ⅶaug/Ⅰ」は、Lydian♭7thの系譜のサウンド。「ブラックアダー・コード」や「イキスギ・コード」とも呼ばれる。"],
    ["バックドア・ツーファイブ", "Ⅳm7-♭Ⅶ7-Ⅰ", "同主短調のツーファイブを応用した形。"],
    ["Ⅳへのツーファイブ", "Ⅴm7-Ⅰ7-Ⅳ", "Ⅳへのセカンダリー・ケーデンス"],
    ["Ⅵmへのツーファイブ", "Ⅶm7-Ⅲ7-Ⅵm", "Ⅵmへのセカンダリー・ケーデンス"],
    ["平行短調へのツーファイブ", "Ⅶm7(♭5)-Ⅲ7-Ⅵm", "Ⅵmへのセカンダリー・ケーデンス"],
    ["クラシカル探求者", "Ⅱm7(♭5)-♭Ⅱ/Ⅳ-Ⅳdim/Ⅶ-Ⅰ", "「ナポリの6度」っぽい響きを使いたい時に。"],
    ["ジャズの基本形", "Ⅱm7-Ⅴ7-Ⅰ△7-Ⅵ7", "ジャズの基本的なコード進行だと思います。"],
    ["助走", "Ⅱm7-Ⅲm7-Ⅳ△7-Ⅴ", "サビ前などに有効です。"],
    ["大気圏外へ", "Ⅱm7-Ⅲm7-Ⅳm7-Ⅴm7", "マイナー7thコードのコンスタント・ストラクチャーでどこまでも行けそう。"],
    ["平成J-popバラードの最終兵器", "Ⅲm7-Ⅵm7/Ⅲ-Ⅱm7-Ⅴ7/Ⅱ", "ハマればものすごく素敵。"],
    ["普通が嫌いなあなたへ", "#Ⅳm7(♭5)-Ⅳ△7-Ⅲm7-Ⅵm7", "普通なコード進行に飽きたら、#Ⅳm7(♭5)から始めちゃおう。"],
    ["モダン・メタルの住人", "Ⅵ5add9-Ⅳ5add9-♭Ⅲ5add9-Ⅰ5add9", "5add9(sus2)は、モダン・メタル界隈のギターフレーズに欠かせない響き。"],
    ["ドリアン", "Ⅱm-Ⅲm/Ⅱ-Ⅳ/Ⅱ-Ⅲm/Ⅱ", "ドリアン・モードを取り入れたい時に。"],
    ["ミクソリディアン", "Ⅴ-Ⅳ-Ⅰ-Ⅴ", "ミクソリディアン・モードを取り入れたい時に。"],
    ["スペイン旅行", "Ⅲ-Ⅳ-Ⅴ-Ⅳ", "このコード進行の上でⅢスパニッシュ・フリジアンを使えば、「正解」がそこに現れる。"],
    ];


//入力されたテキストをサニタイジング(エスケープ処理)する関数
function Sanitizing(text) {
    text = text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

        .replace(/\n/g, "<br \/>")

    return text;
};

//指定したキーの音名をディグリーネームへ変換する関数
function ToDegreeName(text, Root) {

    //シャープやフラットの表記ゆれを統一
    text = text
        .replace(/＃/g, "#")
        .replace(/♯/g, "#")
        .replace(/♯/g, "#")
        .replace(/#⃣/g, "#")
        .replace(/♭♭/g, "𝄫")
        .replace(/bb/g, "𝄫")
        .replace(/b/g, "♭")

    RootNumber = Number(Root);

    c = mod(RootNumber + 0, 12);
    cisdes = mod(RootNumber + 1, 12);
    d = mod(RootNumber + 2, 12);
    dises = mod(RootNumber + 3, 12);
    e = mod(RootNumber + 4, 12);
    f = mod(RootNumber + 5, 12);
    fisges = mod(RootNumber + 6, 12);
    g = mod(RootNumber + 7, 12);
    gisas = mod(RootNumber + 8, 12);
    a = mod(RootNumber + 9, 12);
    aisb = mod(RootNumber + 10, 12);
    h = mod(RootNumber + 11, 12);

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

    return text;
};


//正誤判定を行うプログラム
function Validation() {

    ValidationText = text
        .replace(/#Ⅰ/g, "")
        .replace(/♭Ⅱ/g, "")

        .replace(/#Ⅱ/g, "")
        .replace(/𝄫Ⅲ/g, "")
        .replace(/♭Ⅲ/g, "")

        .replace(/#Ⅲ/g, "")

        .replace(/♭Ⅳ/g, "")

        .replace(/#Ⅳ/g, "")
        .replace(/♭Ⅴ/g, "")

        .replace(/#Ⅴ/g, "")
        .replace(/♭Ⅵ/g, "")

        .replace(/#Ⅵ/g, "")
        .replace(/𝄫Ⅶ/g, "")
        .replace(/♭Ⅶ/g, "")

        .replace(/#Ⅶ/g, "")

        .replace(/Ⅰ/g, "")
        .replace(/Ⅱ/g, "")
        .replace(/Ⅲ/g, "")
        .replace(/Ⅳ/g, "")
        .replace(/Ⅴ/g, "")
        .replace(/Ⅵ/g, "")
        .replace(/Ⅶ/g, "");

    //変換してもなお変化記号が含まれる場合を判定
    if (ValidationText.includes('#') || ValidationText.includes('♭') || ValidationText.includes('𝄪') || ValidationText.includes('𝄫')) {
        document.getElementById("ValidationBox").innerHTML = `<font color="red">正しく変換できませんでした。キー設定や異名同音の表記を誤っている可能性があります。</font>`;
    } else {
        document.getElementById("ValidationBox").innerHTML = "";
    };
};

//ディグリーネームを指定したキーへ変換する関数
function DegreeChange(text, Root) {

    RootNumber = Number(Root);

    c = mod(RootNumber + 0, 12);
    cisdes = mod(RootNumber + 1, 12);
    d = mod(RootNumber + 2, 12);
    dises = mod(RootNumber + 3, 12);
    e = mod(RootNumber + 4, 12);
    f = mod(RootNumber + 5, 12);
    fisges = mod(RootNumber + 6, 12);
    g = mod(RootNumber + 7, 12);
    gisas = mod(RootNumber + 8, 12);
    a = mod(RootNumber + 9, 12);
    aisb = mod(RootNumber + 10, 12);
    h = mod(RootNumber + 11, 12);

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

    return text;
};

//コードネームを変換して転記する関数
function ChangeDegreeText() {

    //テキストエリア内のテキストを取得
    text = document.getElementById("textarea").value;
    BeforeRootNumber = Number(document.getElementById("BeforeRootNumber").value);
    AfterRootNumber = Number(document.getElementById("AfterRootNumber").value);

    //指定したキーの音名をディグリーネームへ変換する関数
    text = ToDegreeName(text, BeforeRootNumber);

    //入力されたテキストをサニタイジングする関数
    text = Sanitizing(text);

    //正誤判定を行うプログラム
    Validation();

    //ディグリーネーム表記の処理
    if (AfterRootNumber === 12) {
        //処理なし
    } else {
        //ディグリーネームから任意のキーのコードネームへ変換する。
        text = DegreeChange(text, AfterRootNumber);
    };

    //表示ボックスに書き込む
    document.getElementById("box").innerHTML = text;
};

//サンプルテキストを書き込む関数
function ExampleTextOne() {
    document.getElementById("textarea").innerHTML
        = "・カノン進行\nC - G - Am - Em - F - C - Dm - G\n\n・王道進行\nF - G - Em - Am\n\n※ディグリーネームでも入力できます。\nⅥm - Ⅳ - Ⅴ - Ⅰ - Ⅴ/Ⅶ\n\nⅠ△7 - Ⅱm7 - Ⅲm7 - Ⅳ△7 - Ⅴ7 - Ⅵm7 - Ⅶm7-5";
    ChangeDegreeText();
    ButtonInvisible();
};

//テキストが入力されたらボタンを消す関数
function ButtonInvisible() {
    //テキストエリア内のテキストを取得
    text = document.getElementById("textarea").value;

    //入力されたテキストをサニタイジングする関数
    Sanitizing(text);

    TextLength = text.replace(/<br \/>/g, '').length;
    if (TextLength === 0) {
        document.getElementById("box").innerHTML = 'こちらに変換後のテキストが表示されます。<br><br><br><br><br><br><br>';
    } else if (TextLength > 1) {
        document.getElementById("ExampleTextButton").innerHTML = ""
    };
};

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

let firstNum = 0;
let secondNum = 0;
let num = 0;

//変化記号を決定する
let SOF = 0;
//調べたいキーを決定する
let = 0;

//スケールを表示するためのHTML要素(div)を追加するための関数
function ChordCandidateCreate() {

    //スケールを格納した配列の長さを取得する。
    chordProgOne_length = chordProgOne.length;
    chordProgFour_length = chordProgFour.length;
    chordProgSix_length = chordProgSix.length;
    chordProgEight_length = chordProgEight.length;

    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgOne_length
    for (let i = 0; i < chordProgOne_length; i++) {
        HTML_Info = document.getElementById("addHTML1");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row1-${Num}"></th>
        <td id="title1-${Num}"></td>
        <td id="chordProg1-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgFour_length
    for (let i = 0; i < chordProgFour_length; i++) {
        HTML_Info = document.getElementById("addHTML4");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row4-${Num}"></th>
        <td id="title4-${Num}"></td>
        <td id="chordProg4-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgSix_length
    for (let i = 0; i < chordProgSix_length; i++) {
        HTML_Info = document.getElementById("addHTML6");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row6-${Num}"></th>
        <td id="title6-${Num}"></td>
        <td id="chordProg6-${Num}"></td>
        </tr>`)
        Num--
    };
    //配列の数だけHTML要素(div)を追加する。
    Num = chordProgEight_length
    for (let i = 0; i < chordProgEight_length; i++) {
        HTML_Info = document.getElementById("addHTML8");
        HTML_Info.insertAdjacentHTML('afterbegin',
            `<tr>
        <th scope="row" id="row8-${Num}"></th>
        <td id="title8-${Num}"></td>
        <td id="chordProg8-${Num}"></td>
        </tr>`)
        Num--
    };
};


//コード進行をディグリーネームで表示する関数
function ChangeChordProgressionDegree() {

    //Ⅰ始まりのコード進行
    firstNum = 1;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgOne.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum][1]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum][2]}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgFour.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum][1]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum][2]}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgSix.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum][1]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum][2]}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgEight.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum][1]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum][2]}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //ボタンの色を変える
    document.getElementById("degree_button").className = "btn btn-success box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
};


//コード進行を切り替える関数
function ChangeChordProgression() {

    RootNumber = document.getElementById("rootNumber").value;

    //Ⅰ始まりのコード進行
    firstNum = 1;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgOne.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgOne[chordProgNum][1]}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum][2]}`);
        //for文を回す
        secondNum++
        chordProgNum++
    };

    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgFour.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgFour[chordProgNum][1]}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum][2]}`);
        //for文を回す
        secondNum++
        chordProgNum++
    };


    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgSix.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgSix[chordProgNum][1]}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum][2]}`);
        //for文を回す
        secondNum++
        chordProgNum++
    };


    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    length = chordProgEight.length + 1;
    for (let i = 1; i < length; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;
        //コード進行の俗称・所感を表示する
        document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum][0]}`;
        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum][2]}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgEight[chordProgNum][1]}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum][2]}`);
        //for文を回す
        secondNum++
        chordProgNum++
    };

    //ボタンの色を変える
    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
};