
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
    [['C', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D&#119083;', 'C', 'C', 'B#', 'D&#119083;', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D&#119083;', 'C', 'C', 'B#', 'C'],
    ['C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'C#/D♭'],
    ['D', 'D', 'D', 'D', 'E&#119083;', 'D', 'C&#119082;', 'E&#119083;', 'D', 'D', 'C&#119082;', 'E&#119083;', 'D', 'D', 'E&#119083;', 'D', 'C&#119082;', 'D', 'D', 'C&#119082;', 'E&#119083;', 'D', 'D', 'C&#119082;', 'D'],
    ['D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'F&#119083;', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'D#', 'D#/E♭'],
    ['E', 'E', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'F♭', 'E', 'D&#119082;', 'F♭', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D&#119082;', 'F♭', 'E', 'E', 'D&#119082;', 'E'],
    ['F', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G&#119083;', 'F', 'F', 'E#', 'G&#119083;', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G&#119083;', 'F', 'E#', 'E#', 'F'],
    ['F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'E&#119082;', 'F#/G♭'],
    ['G', 'G', 'G', 'F&#119082;', 'G', 'G', 'F&#119082;', 'A&#119083;', 'G', 'G', 'F&#119082;', 'A&#119083;', 'G', 'G', 'A&#119083;', 'G', 'F&#119082;', 'G', 'G', 'F&#119082;', 'A&#119083;', 'G', 'G', 'F&#119082;', 'G'],
    ['G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'G#/A♭'],
    ['A', 'A', 'A', 'A', 'B&#119083;', 'A', 'G&#119082;', 'B&#119083;', 'A', 'A', 'G&#119082;', 'A', 'A', 'A', 'B&#119083;', 'A', 'A', 'B&#119083;', 'A', 'G&#119082;', 'B&#119083;', 'A', 'A', 'G&#119082;', 'A'],
    ['A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C&#119083;', 'B♭', 'A#', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C&#119083;', 'B♭', 'A#', 'A#', 'A#/B♭'],
    ['B', 'B', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A&#119082;', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A&#119082;', 'B']];

const clef_image = [
    "clef/Treble_clef_with_empty_staff.svg",
    "clef/D-flat-major_b-flat-minor.svg",
    "clef/D-major_b-minor.svg",
    "clef/E-flat-major_c-minor.svg",
    "clef/E-major_c-sharp-minor.svg",
    "clef/F-major_d-minor.svg",
    "clef/F-sharp-major_d-sharp-minor.svg",
    "clef/G-major_e-minor.svg",
    "clef/A-flat-major_f-minor.svg",
    "clef/A-major_f-sharp-minor.svg",
    "clef/B-flat-major_g-minor.svg",
    "clef/B-major_g-sharp-minor.svg",
];

//コード進行を格納する多次元配列
const chordProgOne =
    [{ name: "シンプル・イズ・ベスト", chord: "Ⅰ-Ⅳ-Ⅴ", info: "トニック！サブドミナント！ドミナント！", url: "" },
    { name: "きっとみんな好き", chord: "Ⅰ-Ⅳ-Ⅵm-Ⅴ", info: "メジャー感とマイナー感の絶妙なハーモニー。", url: "" },
    { name: "ポップパンク進行", chord: "Ⅰ-Ⅴ-Ⅵm-Ⅳ", info: "洋楽でおそらく最もポピュラーな進行。邦楽ではⅣから始めたバージョンが重宝されがち。", url: "https://youtu.be/L0MK7qz13bU?t=64" },
    { name: "賞味期限なし", chord: "Ⅰ-Ⅴ-Ⅳ-Ⅴ", info: "結局ここに帰ってくる。", url: "" },
    { name: "カノン進行", chord: "Ⅰ-Ⅴ-Ⅵm-Ⅲm-Ⅳ-Ⅰ-Ⅱm-Ⅴ", info: "王道で美しい曲を作りたいならこれ！", url: "https://youtu.be/NlprozGcs80?t=126" },
    { name: "なめらかカノン進行", chord: "Ⅰ-Ⅴ/Ⅶ-Ⅵm-Ⅲm/Ⅴ-Ⅳ-Ⅰ/Ⅲ-Ⅱm-Ⅴ", info: "カノン進行のベースラインをなめらかに繋がるように変形したもの。", url: "" },
    { name: "イチロクニーゴー", chord: "Ⅰ-Ⅵm-Ⅱm-Ⅴ", info: "オールディーズでよく耳にする、シンプルで万能な循環コード。", url: "" },
    { name: "いつメン", chord: "Ⅰ-Ⅵm-Ⅳ-Ⅴ", info: "いつ使っても良い。", url: "" },
    { name: "午前2時の踏切に居そう", chord: "Ⅰadd9-Ⅵm7-Ⅴ-Ⅳ", info: "参考曲：BUMP OF CHICKEN - 天体観測", url: "https://youtu.be/j7CDb610Bg0?t=33" },
    { name: "モノクローム", chord: "Ⅰ-Ⅶm7(♭5)-Ⅲ7-Ⅵm7", info: "カノン進行冒頭の定番変形パターンのひとつ。Ⅵmへのセカンダリー・ケーデンスを差し込んだもの。", url: "https://youtu.be/ony539T074w?t=2" },
    { name: "リラックス", chord: "Ⅰ-Ⅱm7-Ⅰ/Ⅲ-Ⅳ", info: "ベースが順次進行で上昇。凪な空気感。", url: "" },
    { name: "ヌケ感", chord: "Ⅰ-Ⅲm/Ⅶ-Ⅵm-Ⅳ", info: "シンプルでモダンな雰囲気が出せる。", url: "" },
    { name: "青春", chord: "Ⅰ-Ⅲ-Ⅵｍ-Ⅴ", info: "溢れ出るノスタルジー。", url: "" },
    { name: "きれいめ", chord: "Ⅰ/Ⅲ-Ⅳ-Ⅴ-Ⅵm", info: "ベースが順次進行で上昇。清潔感がある。", url: "" },
    { name: "大団円", chord: "Ⅰ-Ⅰ/Ⅲ-Ⅰsus4/Ⅳ-Ⅰsus4/Ⅴ", info: "ハッピーなエンドロールみたいな。", url: "" },
    { name: "幻想的", chord: "Ⅰ-♭Ⅶ-♭Ⅵ-♭Ⅶ", info: "メロディック・メジャー的な響きを使いたいときに。", url: "" },
    { name: "温かみを感じる半音上昇", chord: "Ⅰ-Ⅰaug-Ⅰ6-Ⅰ7", info: "メジャーコードのトップノートを半音で上昇させるクリシェ。", url: "" },
    { name: "サンボマスターしか勝たん", chord: "Ⅰ-Ⅰaug/#Ⅳ-Ⅳ△7-Ⅴ", info: "サンボマスターっぽいブラックアダーコードの使い方", url: "https://youtu.be/x484_vo7IfM?t=89" },
    { name: "優雅", chord: "Ⅰ△7-#Ⅰdim7-Ⅱm7-Ⅴ7", info: "パッシング・ディミニッシュはいかが？", url: "" },
    { name: "煌びやか", chord: "Ⅰ-Ⅳm6/Ⅰ", info: "華やかで奥行きのある響き", url: "" },
    { name: "壮大", chord: "Ⅰsus4-Ⅰsus4/♭Ⅱ-Ⅰsus4/♭Ⅲ-Ⅰsus4/Ⅳ-Ⅰsus4/Ⅴ", info: "仰々しくしたいときに。", url: "" },
    { name: "遊び心", chord: "Ⅰ-Ⅴ/Ⅰ-Ⅳ/Ⅰ-♭Ⅵ/Ⅰ-♭Ⅶ/Ⅰ", info: "ベースを固定しつつちょっと寄り道。", url: "" },
    { name: "ドラマチック", chord: "Ⅰ-♭Ⅱ/Ⅰ-Ⅱ/Ⅰ-♭Ⅲ/Ⅰ-Ⅲ/Ⅰ", info: "ベースを固定しつつ大胆に寄り道。", url: "" },
    { name: "ブルージー", chord: "Ⅰ7-Ⅳ7-Ⅰ7-Ⅳ7-Ⅴ7-Ⅳ7-Ⅰ7-Ⅴ7", info: "ブルースっぽい響きを出したいならコレ！", url: "" },
    ];

const chordProgFour =
    [{ name: "王道進行", chord: "Ⅳ-Ⅴ-Ⅲm-Ⅵm", info: "名実ともに「J-Popの王」", url: "https://youtu.be/nhOhFOoURnE?t=8" },
    { name: "万能調味料", chord: "Ⅳ-Ⅴ-Ⅵm-Ⅰ", info: "どんなジャンルでも受け入れる包容力！", url: "" },
    { name: "エモい", chord: "Ⅳ-Ⅴ-Ⅰ-Ⅲ", info: "サビの2回し目とかによく居そう。", url: "" },
    { name: "涙を誘うウェポン", chord: "Ⅳ-Ⅴ-#Ⅴm(♭5)-Ⅵm", info: "みんな大好きパッシング・ディミニッシュ", url: "" },
    { name: "アニソン風味", chord: "Ⅳ-Ⅴ-♭Ⅵ-♭Ⅶ", info: "サビの最後あたりに入れると効果抜群！", url: "" },
    { name: "解放・救済", chord: "Ⅳ-Ⅴ-Ⅵ", info: "モダンな雰囲気が出る。ピカルディ終止っぽいサウンド感。", url: "" },
    { name: "邦楽ポップパンク進行", chord: "Ⅳ-Ⅰ-Ⅴ-Ⅵm", info: "爽やか ＋ ちょっぴり哀愁 ＝ 正解。 ポップパンク進行の派生形。", url: "https://youtu.be/kzZ6KXDM1RI?t=64" },
    { name: "サビ前の常連", chord: "Ⅳ-#Ⅳm(♭5)-Ⅴ-#Ⅴm(♭5)", info: "「これからサビに入りますよ～」感が出ます。", url: "" },
    { name: "内なる敵", chord: "Ⅳ-Ⅵm-Ⅰm-Ⅴ/Ⅱ-♭Ⅶm/♭Ⅱ-Ⅳ/Ⅰ-Ⅶdim7-Ⅲ7/#Ⅴ-Ⅵm", info: "参考曲：Dream Theater - The Enemy Inside", url: "https://youtu.be/RoVAUUFjl0I?t=215" },
    { name: "335号室", chord: "Ⅳ△7-Ⅲm7(#5)-Ⅱm7-Ⅲm7", info: "参考曲：Larry Carlton - ROOM 335", url: "https://youtu.be/47ysdThtXgw?t=109" },
    { name: "ゲーム音楽の香り", chord: "Ⅳ△7-Ⅲm7-♭Ⅲ△7-Ⅱm7", info: "△7とm7を繰り返して半音ずつ下がっていく形。", url: "" },
    { name: "レアキャラ", chord: "Ⅳ△7-Ⅲm7-♭Ⅲdim7-Ⅱm7", info: "このパッシング・ディミニッシュはあまり出てこない印象。", url: "" },
    { name: "丸サ進行", chord: "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅰ7", info: "「Just The Two Of Us進行」とも。新たな時代で「J-Popの王」の座を狙っている。", url: "https://youtu.be/i9I55MZLYYY" },
    { name: "オシャレ", chord: "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅱ7", info: "丸サ進行とはひと味違うオシャレさ。", url: "https://youtu.be/zw5wH_Tr21U?t=6" },
    { name: "おやすみ", chord: "Ⅳ△7-Ⅰ△7", info: "穏やかな気分になりたい時に。", url: "" },
    { name: "リディアン", chord: "Ⅳ-Ⅴ/Ⅳ", info: "リディアン・モードを取り入れたい時に。", url: "" },
    { name: "メロウな王道進行", chord: "Ⅳ△7-Ⅴ7/Ⅳ-Ⅲm7-Ⅵm7", info: "「王道進行」に、さらに砂糖を振りかけた感じ。", url: "https://youtu.be/ukyRC_fNEP0?t=77" },
    { name: "チンダル現象みがある", chord: "Ⅳ△7-Ⅳm7-Ⅲm7-Ⅵ7", info: "穏やかな昼下がりみたいな流れ。", url: "" },
    { name: "花鳥風月", chord: "Ⅳ6-Ⅴ6-Ⅵ7sus4-Ⅲsus4", info: "止ん事無き和風な響き", url: "" },
    { name: "綺麗", chord: "Ⅳ△7-Ⅶm7(♭5)/Ⅳ-Ⅲm7-Ⅲdim7-Ⅱm7-Ⅴ7/Ⅱ-ⅠMaj7-Ⅰ6", info: "「美しさ」への一つの回答。", url: "" },
    ];

const chordProgSix =
    [{ name: "小室進行", chord: "Ⅵm-Ⅳ-Ⅴ-Ⅰ", info: "最後にⅤ/Ⅶを追加しても使いやすい。", url: "https://youtu.be/35XsK9VERXM?t=97" },
    { name: "ハリウッド映画にありそう", chord: "Ⅵm-Ⅳ-Ⅰ-Ⅴ", info: "最終決戦へ向かっていけそう。ポップパンク進行の派生形。", url: "" },
    { name: "オールラウンダー", chord: "Ⅵm-Ⅴ-Ⅳ-Ⅴ", info: "どんなジャンルでも必要とされている。", url: "" },
    { name: "炎の呼吸", chord: "Ⅵm-Ⅴ-Ⅳ-Ⅰ", info: "参考曲：LiSA - 炎", url: "https://youtu.be/4DxL6IKmXx4?t=10" },
    { name: "洋楽っぽい", chord: "Ⅵm-Ⅰ-Ⅴ-Ⅳ", info: "シンプルで使いやすい。", url: "" },
    { name: "鉄板のベース半音下降", chord: "Ⅵm-#Ⅴaug-Ⅰ/Ⅴ-#Ⅳm7(♭5)", info: "みんな8億万回は聴いている。", url: "" },
    { name: "スタイリッシュ", chord: "Ⅵm9-Ⅱm7-Ⅲm7", info: "研ぎ澄まされた都会的な響き", url: "" },
    { name: "情熱的", chord: "Ⅵm-Ⅱm-Ⅴ-Ⅰ-Ⅴ/Ⅶ", info: "力強くいきたい時に。", url: "" },
    { name: "お前はタンゴ？", chord: "Ⅵm-Ⅱm-Ⅲ-Ⅵm", info: "タンゴ（tango)とは. 18世紀後半にイベリア半島で発祥したある種のリズムの舞曲。(Wikipediaより引用)", url: "https://youtu.be/WOuNTIWuykI?t=17" },
    { name: "バロックなゼクエンツ", chord: "Ⅵm-Ⅱm-Ⅴ-Ⅰ-Ⅳ-Ⅶm(♭5)-Ⅲ", info: "気分はバロック時代。", url: "https://youtu.be/ZPdk5GaIDjo?t=68" },
    { name: "貴様の形状", chord: "Ⅵm-Ⅱm7-Ⅳ-Ⅴ", info: "参考曲：Ed Sheeran - Shape of You", url: "https://youtu.be/JGwWNGJdvx8?t=5" },
    { name: "近未来", chord: "Ⅵm-Ⅴ/Ⅵ-Ⅳ/Ⅵ-Ⅲm/Ⅵ", info: "ベースを固定しつつ上を動かす形。", url: "" },
    { name: "困難を伴う前進", chord: "Ⅵm-Ⅴ/Ⅶ-Ⅰ-Ⅱm-Ⅲsus4-Ⅲ", info: "ベースが段階的に上昇。シリアスな空気感。", url: "" },
    { name: "サスペンス半音上昇", chord: "Ⅵm-Ⅳ/Ⅵ-#Ⅳm(♭5)/Ⅵ-Ⅵm7", info: "マイナーコードのトップノートを半音で上昇させるクリシェ。", url: "https://youtu.be/zKBCSBfP9TI?t=13" },
    { name: "遂に自由に…", chord: "Ⅵm-Ⅲ7/#Ⅴ-Ⅳ△7-Ⅱm9-Ⅴsus4-Ⅴ", info: "参考曲：Dream Theater - Finally Free", url: "https://youtu.be/tdZKo7hPzmE?t=169" },
    { name: "月光が差す", chord: "Ⅵm-Ⅲ/#Ⅴ-Ⅵ7/Ⅴ-Ⅱm/Ⅳ-Ⅳ7-Ⅲ/#Ⅴ", info: "参考曲：ベートーヴェン - ピアノソナタ第14番嬰ハ短調 作品27-2(月光ソナタ)第3楽章", url: "https://youtu.be/zucBfXpCA6s" },
    { name: "ミステリー小説", chord: "Ⅵm-Ⅳ7-Ⅲ7", info: "怪しく不思議、ちょっとコミカル。", url: "" },
    { name: "ディストピア", chord: "Ⅵm-Ⅶ-Ⅱm-Ⅲ", info: "不穏な感じを出したいときに。", url: "" },
    { name: "外宇宙への旅", chord: "Ⅵm-♭Ⅲ-Ⅵ-Ⅳm-Ⅵm-♭Ⅶm-Ⅱm-#Ⅳm", info: "暗黒の宇宙空間を想起させる響き。", url: "https://youtu.be/jsRT8ee97eo?t=206" },
    { name: "俺が好き", chord: "Ⅵm-#Ⅳm7(♭5)-Ⅳ△7-Ⅱm7-Ⅲm7", info: "好きなのでたくさん使っちゃう。", url: "https://youtu.be/eNGSdQOG57A?t=66" },
    ];

const chordProgEight =
    [{ name: "ツーファイブ", chord: "Ⅱm7-Ⅴ7-Ⅰ", info: "最も基本的な和音の流れ。", url: "" },
    { name: "裏コードで代理", chord: "Ⅱm7-♭Ⅱ7-Ⅰ", info: "裏コードは、トライトーンを共有しているドミナント7thコード。ルート音は五度圏で反対側に位置する。", url: "" },
    { name: "フュージョン・コードで代理", chord: "Ⅱm7-Ⅳ/Ⅴ-Ⅰ", info: "「♭Ⅶ/Ⅰ」は、ミクソリディアンの系譜のサウンド。「フュージョン・コード」とも呼ばれる。", url: "" },
    { name: "♭Ⅶm/Ⅰで代理", chord: "Ⅱm7-Ⅳm/Ⅴ-Ⅰ", info: "「♭Ⅶm/Ⅰ」は、フリジアン・ドミナントやミクソリディアン♭2ndの系譜のサウンド。", url: "" },
    { name: "♭Ⅶdim/Ⅰで代理", chord: "Ⅱm7-Ⅳdim/Ⅴ-Ⅰ", info: "「♭Ⅶdim/Ⅰ」は、オルタードやフリジアン♭4thの系譜のサウンド。", url: "" },
    { name: "ブラックアダー・コードで代理", chord: "Ⅱm7-Ⅳaug/Ⅴ-Ⅰ", info: "「♭Ⅶaug/Ⅰ」は、Lydian♭7thの系譜のサウンド。「ブラックアダー・コード」や「イキスギ・コード」とも呼ばれる。", url: "" },
    { name: "バックドア・ツーファイブ", chord: "Ⅳm7-♭Ⅶ7-Ⅰ", info: "同主短調のツーファイブを応用した形。", url: "" },
    { name: "Ⅳへのツーファイブ", chord: "Ⅴm7-Ⅰ7-Ⅳ", chord: "Ⅳへのセカンダリー・ケーデンス", url: "" },
    { name: "Ⅵmへのツーファイブ", chord: "Ⅶm7-Ⅲ7-Ⅵm", info: "Ⅵmへのセカンダリー・ケーデンス", url: "" },
    { name: "平行短調へのツーファイブ", chord: "Ⅶm7(♭5)-Ⅲ7-Ⅵm", info: "Ⅵmへのセカンダリー・ケーデンス", url: "" },
    { name: "クラシカル探求者", chord: "Ⅱm7(♭5)-♭Ⅱ/Ⅳ-Ⅳdim/Ⅶ-Ⅰ", info: "「ナポリの6度」っぽい響きを使いたい時に。", url: "" },
    { name: "ジャズの基本形", chord: "Ⅱm7-Ⅴ7-Ⅰ△7-Ⅵ7", info: "ジャズの基本的なコード進行だと思います。", url: "" },
    { name: "後悔", chord: "Ⅱm-Ⅵm/Ⅰ-Ⅶm7(♭5)-Ⅲ7", info: "ダークで美しい進行。", url: "" },
    { name: "助走", chord: "Ⅱm7-Ⅲm7-Ⅳ△7-Ⅴ", info: "サビ前などに有効です。", url: "" },
    { name: "こなれ浮遊感", chord: "Ⅱm7-Ⅰ△7-♭Ⅶ△7-Ⅶm7(♭5)-Ⅲ7", info: "メロディで下属調っぽさを出しすぎないのがポイント。", url: "" },
    { name: "大気圏外へ", chord: "Ⅱm7-Ⅲm7-Ⅳm7-Ⅴm7", info: "マイナー7thコードのコンスタント・ストラクチャーでどこまでも行けそう。", url: "https://youtu.be/BOuIwJLw9Y0?t=75" },
    { name: "平成J-popバラードの最終兵器", chord: "Ⅲm7-Ⅵm7/Ⅲ-Ⅱm7-Ⅴ7/Ⅱ", info: "ハマればものすごく素敵。", url: "https://youtu.be/aHIR33pOUv0?t=207" },
    { name: "普通が嫌いなあなたへ", chord: "#Ⅳm7(♭5)-Ⅳ△7-Ⅲm7-Ⅵm7", info: "普通なコード進行に飽きたら、#Ⅳm7(♭5)から始めちゃおう。", url: "" },
    { name: "モダン・メタルの住人", chord: "Ⅵ5add9-Ⅳ5add9-♭Ⅲ5add9-Ⅰ5add9", info: "5add9(sus2)は、モダン・メタル界隈のギターフレーズに欠かせない響き。", url: "" },
    { name: "ドリアン", chord: "Ⅱm-Ⅲm/Ⅱ-Ⅳ/Ⅱ-Ⅲm/Ⅱ", info: "ドリアン・モードを取り入れたい時に。", url: "" },
    { name: "ミクソリディアン", chord: "Ⅴ-Ⅳ-Ⅰ-Ⅴ", info: "ミクソリディアン・モードを取り入れたい時に。", url: "" },
    { name: "スペイン旅行", chord: "Ⅲ-Ⅳ-Ⅴ-Ⅳ", info: "このコード進行の上でⅢスパニッシュ・フリジアンを使えば、「正解」がそこに現れる。", url: "" },
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
        .replace(/𝄪/g, "&#119082;")

        .replace(/♭♭/g, "&#119083;")
        .replace(/bb/g, "&#119083;")
        .replace(/b/g, "♭")
        .replace(/𝄫/g, "&#119083;")

        .replace(/III/g, "Ⅲ")
        .replace(/II/g, "Ⅱ")
        .replace(/IV/g, "Ⅳ")
        .replace(/VII/g, "Ⅶ")
        .replace(/VI/g, "Ⅵ")
        .replace(/V/g, "Ⅴ")
        .replace(/I/g, "Ⅰ")

    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

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
        { NoteName: noteNames[d][7], DegreeName: '&#119083;Ⅲ' },
        { NoteName: noteNames[dises][8], DegreeName: '♭Ⅲ' },

        { NoteName: noteNames[f][10], DegreeName: '#Ⅲ' },

        { NoteName: noteNames[e][11], DegreeName: '♭Ⅳ' },

        { NoteName: noteNames[fisges][13], DegreeName: '#Ⅳ' },
        { NoteName: noteNames[fisges][14], DegreeName: '♭Ⅴ' },

        { NoteName: noteNames[gisas][16], DegreeName: '#Ⅴ' },
        { NoteName: noteNames[gisas][17], DegreeName: '♭Ⅵ' },

        { NoteName: noteNames[aisb][19], DegreeName: '#Ⅵ' },
        { NoteName: noteNames[a][20], DegreeName: '&#119083;Ⅶ' },
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
        .replace(/&#119083;Ⅲ/g, "")
        .replace(/♭Ⅲ/g, "")

        .replace(/#Ⅲ/g, "")

        .replace(/♭Ⅳ/g, "")

        .replace(/#Ⅳ/g, "")
        .replace(/♭Ⅴ/g, "")

        .replace(/#Ⅴ/g, "")
        .replace(/♭Ⅵ/g, "")

        .replace(/#Ⅵ/g, "")
        .replace(/&#119083;Ⅶ/g, "")
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
    if (ValidationText.includes('#') || ValidationText.includes('♭') || ValidationText.includes('&#119082;') || ValidationText.includes('&#119083;')) {
        //コードネームに含まれる場合はOK
        if (ValidationText.includes('#5') || ValidationText.includes('♭5')) {
            document.getElementById("ValidationBox").innerHTML = "";
        } else {
            document.getElementById("ValidationBox").innerHTML = `<font color="red">【正しく変換できませんでした。】<br>・「キー設定」や、「異名同音の表記」を誤っている可能性があります。<br>・「ディグリーネームの変化記号」の位置が違う可能性があります。<br>　※ディグリーネームの変化記号は、ローマ数字の左側に書きます。<br>　例：#Ⅳ</font>`;
        };
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
        .replace(/&#119083;Ⅲ/g, `${noteNames[d][7]}`)
        .replace(/♭Ⅲ/g, `${noteNames[dises][8]}`)

        .replace(/#Ⅲ/g, `${noteNames[f][10]}`)

        .replace(/♭Ⅳ/g, `${noteNames[e][11]}`)

        .replace(/#Ⅳ/g, `${noteNames[fisges][13]}`)
        .replace(/♭Ⅴ/g, `${noteNames[fisges][14]}`)

        .replace(/#Ⅴ/g, `${noteNames[gisas][16]}`)
        .replace(/♭Ⅵ/g, `${noteNames[gisas][17]}`)

        .replace(/#Ⅵ/g, `${noteNames[aisb][19]}`)
        .replace(/&#119083;Ⅶ/g, `${noteNames[a][20]}`)
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

    // 調号の画像を変更する
    document.getElementById("b_clef_image").innerHTML = `　<img src="./image/${clef_image[BeforeRootNumber]}" alt="調号" title="調号" id="clef2">`;
    if (AfterRootNumber === 12) {
        document.getElementById("a_clef_image").innerHTML = "";
    } else {
        // 調号の画像を変更する
        document.getElementById("a_clef_image").innerHTML = `　<img src="./image/${clef_image[AfterRootNumber]}" alt="調号" title="調号" id="clef2">`;
    };
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

    for (let i = 1; i < chordProgOne.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgOne[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgOne[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgOne[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);

        secondNum++
        chordProgNum++
    };

    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgFour.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgFour[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgFour[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgFour[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgSix.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgSix[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgSix[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgSix[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgEight.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgEight[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgEight[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgEight[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].chord}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //ボタンの色を変える
    document.getElementById("degree_button").className = "btn btn-success box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
    //調号を消す
    document.getElementById("b_clef_image").innerHTML = "";
};




//コード進行を切り替える関数
function ChangeChordProgression() {

    RootNumber = Number(document.getElementById("rootNumber").value);
    // 調号の画像を変更する
    document.getElementById("b_clef_image").innerHTML = `　<img src="./image/${clef_image[RootNumber]}" alt="調号" title="調号" id="clef2">`;



    //Ⅰ始まりのコード進行
    firstNum = 1;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgOne.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgOne[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgOne[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgOne[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgOne[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgOne[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgOne[chordProgNum].info}`);

        secondNum++
        chordProgNum++
    };



    //Ⅳ始まりのコード進行
    firstNum = 4;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgFour.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgFour[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgFour[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgFour[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgFour[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgFour[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgFour[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //Ⅵ始まりのコード進行
    firstNum = 6;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgSix.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgSix[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgSix[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgSix[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgSix[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgSix[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgSix[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //その他のコード進行
    firstNum = 8;
    secondNum = 1;
    chordProgNum = 0;
    for (let i = 1; i < chordProgEight.length + 1; i++) {
        //コード進行のナンバーを表示する
        document.getElementById(`row${firstNum}-${secondNum}`).innerHTML = chordProgNum + 1;

        if (chordProgEight[chordProgNum].url === "") {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `${chordProgEight[chordProgNum].name}`;
        } else {
            //コード進行の俗称・所感を表示する
            document.getElementById(`title${firstNum}-${secondNum}`).innerHTML = `<a href="${chordProgEight[chordProgNum].url}" target="_blank" rel="noopener noreferrer">${chordProgEight[chordProgNum].name}</a>`;
        };

        //コード進行の注釈を追加する。
        document.getElementById(`title${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //コード進行を表示する
        document.getElementById(`chordProg${firstNum}-${secondNum}`).innerHTML = `${text = DegreeChange(`${chordProgEight[chordProgNum].chord}`, RootNumber).replace(/-/g, " - ")}`;
        //コード進行の注釈を追加する。
        document.getElementById(`chordProg${firstNum}-${secondNum}`).setAttribute("title", `${chordProgEight[chordProgNum].info}`);
        //for文を回す
        secondNum = secondNum + 1;
        chordProgNum = chordProgNum + 1;
    };

    //ボタンの色を変える
    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-8 col-md-5 col-xl-4 m-3";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-8 col-md-5 col-xl-4 m-3";
};