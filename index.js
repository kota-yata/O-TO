
//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
};

// 四捨五入して小数点第3位までを表示する関数 (JavaScriptには元からそういう関数が無いっぽいので)
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
};

//音名を配列に格納する。
const note_name = ["C", "C#-D♭", "D", "D#-E♭", "E", "F", "F#-G♭", "G", "G#-A♭", "A", "A#-B♭", "B"];
const sharp_note_name = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const flat_note_name = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

const EIJG =
    [["C", "C#-D♭", "D", "D#-E♭", "E", "F", "F#-G♭", "G", "G#-A♭", "A", "A#-B♭", "B"],
    ["ド", "ド#-レ♭", "レ", "レ#-ミ♭", "ミ", "ファ", "ﾌｧ#-ソ♭", "ソ", "ソ#-ラ♭", "ラ", "ラ#-シ♭", "シ"],
    ["ハ", "嬰ハ-変ニ", "ニ", "嬰ニ-変ホ", "ホ", "ヘ", "嬰ヘ-変ト", "ト", "嬰ト-変イ", "イ", "嬰イ-変ロ", "ロ"],
    ["C", "Cis-Des", "D", "Dis-Es", "E", "F", "Fis-Ges", "G", "Gis-As", "A", "Ais-B", "H"]];

const EIJG2 =
    [[["C", "C"], ["C#", "D♭"], ["D", "D"], ["D#", "E♭"], ["E", "E"], ["F", "F"], ["F#", "G♭"], ["G", "G"], ["G#", "A♭"], ["A", "A"], ["A#", "B♭"], ["B", "B"]],
    [["ド", "ド"], ["ド#", "レ♭"], ["レ", "レ"], ["レ#", "ミ♭"], ["ミ", "ミ"], ["ファ", "ファ"], ["ファ#", "ソ♭"], ["ソ", "ソ"], ["ソ#", "ラ♭"], ["ラ", "ラ"], ["ラ#", "シ♭"], ["シ", "シ"]],
    [["ハ", "ハ"], ["嬰ハ", "変ニ"], ["ニ", "ニ"], ["嬰ニ", "変ホ"], ["ホ", "ホ"], ["ヘ", "ヘ"], ["嬰ヘ", "変ト"], ["ト", "ト"], ["嬰ト", "変イ"], ["イ", "イ"], ["嬰イ", "変ロ"], ["ロ", "ロ"]],
    [["C", "C"], ["Cis", "Des"], ["D", "D"], ["Dis", "Es"], ["E", "E"], ["F", "F"], ["Fis", "Ges"], ["G", "G"], ["Gis", "As"], ["A", "A"], ["Ais", "B"], ["H", "H"]]];

const DegreeNames =
    [["Ⅰ", "#Ⅰ", "Ⅱ", "#Ⅱ", "Ⅲ", "Ⅳ", "#Ⅳ", "Ⅴ", "#Ⅴ", "Ⅵ", "#Ⅵ", "Ⅶ"],
    ["Ⅰ", "♭Ⅱ", "Ⅱ", "♭Ⅲ", "Ⅲ", "Ⅳ", "♭Ⅴ", "Ⅴ", "♭Ⅵ", "Ⅵ", "♭Ⅶ", "Ⅶ"]];

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

//旋法名を配列に格納する。
const mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];
const after_mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];

//調号の数を配列に格納する。
const key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#・♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];

const sharp_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const flat_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const modulation_type = ["#・♭+0", "♭+5", "#+2", "♭+3", "#+4", "♭+1", "#・♭+6", "#+1", "♭+4", "#+3", "♭+2", "#+5"];

const ToneCluster =
    [[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

//0なし 1あり 2シャープ 3フラット 4ダブルシャープ 5ダブルフラット 6ナチュラル
chord_container =
    [{ ChordName: "5", ChordBinary: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], Name: "パワーコード", Info: '「ルート音(Root)」＋「完全5度(P5th)」の組み合わせ。<br>シンプルな響きで、エレクトリック・ギターなど歪み成分の多い音色とも相性が良いです。' },
    { ChordName: "", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], Name: "メジャー", Info: '「メジャー・トライアド」。<br>最も基本的な三和音。「長三和音」とも呼ばれます。<br><br>「ルート音(Root)」＋「長3度(M3rd)」＋「完全5度(P5th)」の組み合わせです。' },
    { ChordName: "m", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], Name: "マイナー", Info: '「マイナー・トライアド」。<br>最も基本的な三和音。「短三和音」とも呼ばれます。<br>「-」などの表記もあります。<br><br>「ルート音(Root)」＋「短3度(m3rd)」＋「完全5度(P5th)」の組み合わせです。' },
    { ChordName: "m(♭5)", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0], Name: "マイナー・フラットファイブ", Info: '「減三和音」。「ディミニッシュト・トライアド」とも。<br>マイナー・トライアドの完全5度(P5th)の音を半音下げたコードです。<br>「m-5」や「dim」などの表記もあります。(※「dim」は「dim7」と混同される場合があるので注意が必要です。)<br><br>「dim」は「diminished」の略称です。<br>よく経過和音(パッシング・ディミニッシュ)として使用されます。' },
    { ChordName: "aug", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], Name: "オーグメンテッド", Info: '「増三和音」。「オーグメンテッド・トライアド」とも。<br>「+5」や「+」や「(#5)」などの表記もあります。<br>等間隔で堆積されたコードなので、転回しても間隔は一定です。したがって、音の組み合わせは4種類しかありません。<br><br>「aug」は「augmented」の略称です。' },
    { ChordName: "sus4", ChordBinary: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], Name: "サスフォー", Info: '「アーメン・コード」とも。<br>解決の係留(引き延ばし)機能を持ち、ドミナント機能を持つコードの手前に配置される場合が多いです。<br>短3度(m3rd)も長3度(M3rd)も含まないため、長短調に縛られずに柔軟な使用ができます。<br>様々な用途に使える汎用性の高いコードです。<br><br>「sus」は「suspended」の略称です。<br>その名の通り、ルート音から3度の音を完全4度(P4th)に吊り上げた形の構成になっています。' },
    { ChordName: "sus2", ChordBinary: [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], Name: "サスツー", Info: '「2」や「sus9」などの表記もあります。<br>sus4と同じく、解決の係留(引き延ばし)機能を持ちます。<br>sus4の転回形とも解釈できます。' },
    { ChordName: "(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], Name: "メジャー・オミットファイブ", Info: 'メジャー・トライアドから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "m(omit5)", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], Name: "マイナー・オミットファイブ", Info: 'マイナー・トライアドから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "sus4 add9", ChordBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0], Name: "サスフォー・アドナイン", Info: '「sus2 4」などの表記もあります。<br>sus4に9thを加えたコードです。<br>7sus4の転回形とも解釈できます。' },
    { ChordName: "sus4 add♭9", ChordBinary: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0], Name: "サスフォー・アドフラットナイン", Info: 'sus4に♭9thを加えたコードです。' },
    { ChordName: "Maj7", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1], Name: "メジャーセブン", Info: '「長七の和音」とも呼ばれます。<br>「△7」などの表記もあります。<br>メジャー・トライアドに長7度(M7th)の音が加わったコードです。' },
    { ChordName: "Maj7(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], Name: "メジャーセブン・オミットファイブ", Info: '「△7(omit5)」などの表記もあります。<br>メジャーセブンから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "augMaj7", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1], Name: "オーグメンテッド・メジャーセブン", Info: '「Maj7+5」や「Maj7(#5)」などの表記もあります。<br>オーグメンテッド・トライアドに長7度(M7th)の音が加わったコードです。' },
    { ChordName: "Maj7sus4", ChordBinary: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], Name: "メジャーセブン・サスフォー", Info: 'sus4に長7度(M7th)が加わったコードです。' },
    { ChordName: "Maj7sus2", ChordBinary: [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1], Name: "メジャーセブン・サスツー", Info: 'sus2に長7度(M7th)が加わったコードです。' },
    { ChordName: "(♭5)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], Name: "メジャー・フラットファイブ", Info: 'メジャー・トライアドの完全5度(P5th)の音を半音下げたコードです。' },

    { ChordName: "m7", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], Name: "マイナー・セブン", Info: '「短七の和音」とも呼ばれます。<br>「-7」などの表記もあります。<br>マイナー・トライアドに短7度(m7th)の音が加わったコードです。' },
    { ChordName: "m7(omit5)", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], Name: "マイナー・セブン・オミットファイブ", Info: '「-7(omit5)」などの表記もあります。<br>マイナーセブンから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "m7(#5)", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0], Name: "マイナー・セブン・シャープファイブ", Info: 'マイナー・セブンの完全5度(P5th)を半音上げたコードです。<br>ハイブリッド・コードである「♭Ⅶ/Ⅰ(フュージョン・コード)」の転回形とも解釈できます。' },
    { ChordName: "m7(♭5)", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0], Name: "マイナー・セブン・フラットファイブ", Info: '「減五短七の和音」や「ハーフ・ディミニッシュ」とも呼ばれます。<br>「ハーフ・ディミニッシュ」と呼ぶ場合は、よく「Φ」を傾けた記号が用いられます。<br>ディミニッシュト・トライアドに短7度(m7th)の音が加わったコードです。<br>ツー・ファイブ・ワン進行(Ⅱm7-Ⅴ7-Ⅰ)のⅡm7の代理としてよく使われます。' },

    { ChordName: "7", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], Name: "セブン", Info: '「属七の和音」とも呼ばれます。<br>メジャー・トライアドに短7度(m7th)の音が加わったコードです。' },
    { ChordName: "7(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], Name: "セブン・オミットファイブ", Info: 'ドミナントセブンから完全5度(P5th)を抜いた形。' },
    { ChordName: "7(♭5)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0], Name: "セブン・フラットファイブ", Info: 'ドミナントセブンの完全5度(P5th)をフラットさせたコードです。<br>ドミナントセブンの完全5度(P5th)を省略し、#11thを加えたとも解釈できるでしょう。' },
    { ChordName: "aug7", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], Name: "オーグメンテッド・セブン", Info: '「7+5」や「7(#5)」やなどの表記もあります。<br>オーグメンテッド・トライアドに短7度(m7th)の音が加わったコードです。<br>「7(♭13)(omit5)」と同じ構成音を持ちます。' },
    { ChordName: "7sus4", ChordBinary: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0], Name: "セブン・サスフォー", Info: 'sus4に短7度(m7th)が加わったコードです。' },
    { ChordName: "7sus2", ChordBinary: [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0], Name: "セブン・サスツー", Info: 'sus2に短7度(m7th)が加わったコードです。' },
    { ChordName: "mMaj7", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], Name: "マイナー・メジャーセブン", Info: '「短三長七の和音」とも呼ばれます。<br>「m△7」などの表記もあります。<br>マイナー・トライアドに長7度(M7th)の音が加わったコードです。' },
    { ChordName: "mMaj7(omit5)", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], Name: "マイナー・メジャーセブン・オミットファイブ", Info: '「m△7(omit5)」などの表記もあります。<br>マイナー・トライアドに長7度(M7th)の音が加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "mMaj7(#5)", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1], Name: "マイナー・メジャーセブン・シャープファイブ", Info: 'マイナー・メジャーセブンの完全5度(P5th)の音を半音上げたコードです。' },
    { ChordName: "mMaj7(♭5)", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1], Name: "マイナー・メジャーセブン・フラットファイブ", Info: 'マイナー・メジャーセブンの完全5度(P5th)の音を半音下げたコードです。' },
    { ChordName: "dim7", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], Name: "ディミニッシュセブン", Info: '「減七の和音」とも呼ばれます。<br>「dim」や「〇」などの表記もあります。(※「dim」は「m(♭5)」と混同される場合があるので注意が必要です。)<br>ディミニッシュト・トライアドに減7度の音が加わったコードです。<br>よく経過和音(パッシング・ディミニッシュ)として使用されます。<br>等間隔で堆積されたコードなので、転回しても間隔は一定です。したがって、音の組み合わせは3種類しかありません。<br>いずれかのコードトーンを半音下げると、それぞれ異なるドミナントセブン・コードになります。<br><br>「dim」は「diminished」の略称です。' },

    { ChordName: "6", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0], Name: "メジャー・シックス", Info: 'メジャー・トライアドに長6度(M6th)の音を加えたコードです。<br>「m7」の転回形とも解釈できます。<br>メジャー・トライアドに13thテンションを加えたとも解釈ができます。' },
    { ChordName: "m6", ChordBinary: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0], Name: "マイナー・シックス", Info: 'マイナー・トライアドに長6度(M6th)の音をを加えたコードです。「m7(♭5)」の転回形とも解釈できます。<br>マイナー・トライアドに13thテンションを加えたとも解釈ができます。<br>ドリアン・モードを示唆するコードとしても使えるでしょう。' },
    { ChordName: "add9", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0], Name: "メジャー・アドナイン", Info: 'メジャー・トライアドに9thを加えたコードです。' },
    { ChordName: "add9(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], Name: "メジャー・アドナイン・オミットファイブ", Info: 'メジャー・トライアドに9thを加えたコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "madd9", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0], Name: "マイナー・アドナイン", Info: 'マイナー・トライアドに9thを加えたコードです。' },
    { ChordName: "madd9(omit5)", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], Name: "マイナー・アドナイン・オミットファイブ", Info: 'マイナー・トライアドに9thを加えたコードたコードから、完全5度(P5th)の音を省略したコードです。<br>ハイブリッド・コードである「♭Ⅶm/Ⅰ」の転回形とも解釈できます。' },
    { ChordName: "add♭9", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], Name: "メジャー・アドフラットナイン", Info: 'メジャー・トライアドに♭9thを加えたコードです。' },
    { ChordName: "add#11", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0], Name: "メジャー・アドシャープイレブン", Info: 'メジャー・トライアドに#11thを加えたコードです。' },

    { ChordName: "(6/9)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0], Name: "メジャー・シックス・ナイン", Info: '「6/9」などの表記もあります。<br>メジャー・トライアドに長6度(M6th)と9thの音を加えたコードです。' },
    { ChordName: "(6/9)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], Name: "メジャー・シックス・ナイン・オミットファイブ", Info: '「6/9(omit5)」などの表記もあります。<br>メジャー・トライアドに長6度(M6th)と9thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "m(6/9)", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], Name: "マイナー・シックス・ナイン", Info: '「m6/9」などの表記もあります。<br>マイナー・トライアドに長6度(M6th)と9thの音を加えたコードです。' },
    { ChordName: "m(6/9)(omit5)", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0], Name: "マイナー・シックス・ナイン・オミットファイブ", Info: '「m6/9(omit5)」などの表記もあります。<br>マイナー・トライアドに長6度(M6th)と9thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "(9/11)", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], Name: "メジャー・ナイン・イレブン", Info: '「(9,11)」などの表記もあります。<br>メジャー・トライアドに9thと11thの音を加えたコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "(9/11)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0], Name: "メジャー・ナイン・イレブン・オミットファイブ", Info: '「(9,11)(omit5)」などの表記もあります。<br>メジャー・トライアドに9thと11thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "m(9/11)", ChordBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0], Name: "マイナー・ナイン・イレブン", Info: '「m(9,11)」などの表記もあります。<br>マイナー・トライアドに9thと11thの音を加えたコードです。' },
    { ChordName: "m(9/11)(omit5)", ChordBinary: [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0], Name: "マイナー・ナイン・イレブン・オミットファイブ", Info: '「m(9,11)(omit5)」などの表記もあります。<br>マイナー・トライアドに9thと11thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "(9/#11)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0], Name: "メジャー・ナイン・シャープイレブン", Info: '「(9,#11)」などの表記もあります。<br>メジャー・トライアドに9thと#11thの音を加えたコードです。' },
    { ChordName: "(9/#11)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0], Name: "メジャー・ナイン・シャープイレブン・オミットファイブ", Info: '「(9,#11)(omit5)」などの表記もあります。<br>メジャー・トライアドに9thと#11thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "m(9/#11)", ChordBinary: [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0], Name: "マイナー・ナイン・シャープイレブン", Info: '「m(9,#11)」などの表記もあります。<br>マイナー・トライアドに9thと#11thの音を加えたコードです。' },
    { ChordName: "m(9/#11)(omit5)", ChordBinary: [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0], Name: "マイナー・ナイン・シャープイレブン・オミットファイブ", Info: '「m(9,#11)(omit5)」などの表記もあります。<br>マイナー・トライアドに9thと#11thの音を加えたコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "7(♭9)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], Name: "セブン・フラットナイン", Info: 'ドミナントセブンに♭9thが加わったコードです。' },
    { ChordName: "7(♭9)(omit5)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], Name: "セブン・フラットナイン・オミットファイブ", Info: 'ドミナントセブンに♭9thが加わったコードから、完全5度(P5th)の音を省略したコードです' },
    { ChordName: "Maj9", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1], Name: "メジャーナイン", Info: '「△9」などの表記もあります。<br>メジャーセブンに9thが加わったコードです。' },
    { ChordName: "Maj9(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1], Name: "メジャーナイン・オミットファイブ", Info: '「△9(omit5)」などの表記もあります。<br>メジャーセブンに9thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "m9", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0], Name: "マイナーナイン", Info: 'マイナー・セブンに9thが加わったコードです。' },
    { ChordName: "m9(omit5)", ChordBinary: [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], Name: "マイナーナイン・オミットファイブ", Info: 'マイナー・セブンに9thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "9", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0], Name: "ナイン", Info: 'ドミナントセブンに9thが加わったコードです。' },
    { ChordName: "9(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0], Name: "ナイン・オミットファイブ", Info: 'ドミナントセブンに9thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(#9)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0], Name: "セブン・シャープナイン", Info: 'ドミナントセブンに#9thが加わったコードです。<br>「ジミヘン・コード」とも呼ばれます。<br>#9thの音は、M3rdより高く配置するの一般的です。' },
    { ChordName: "7(#9)(omit5)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0], Name: "セブン・シャープナイン・オミットファイブ", Info: 'ドミナントセブンに#9thが加わったコードから、完全5度(P5th)の音を省略したコードです。<br>「ジミヘン・コード」の響きを使いたいときに。<br>#9thの音は、M3rdより高く配置するの一般的です。' },
    { ChordName: "7(11)", ChordBinary: [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0], Name: "セブン・イレブン", Info: 'ドミナントセブンに11thが加わったコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "m7(11)", ChordBinary: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0], Name: "マイナー・セブン・イレブン", Info: 'マイナー・セブンに11thが加わったコードです。' },
    { ChordName: "m7(11)(omit5)", ChordBinary: [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0], Name: "マイナー・セブン・イレブン", Info: 'マイナー・セブンに11thが加わったコードです。' },
    { ChordName: "7(#11)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0], Name: "セブン・シャープイレブン", Info: 'ドミナントセブンに#11thが加わったコードです。' },
    { ChordName: "7(#11)(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0], Name: "セブン・シャープイレブン・オミットファイブ", Info: 'ドミナントセブンに#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "m7(♭5)add9", ChordBinary: [1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0], Name: "マイナー・セブン・フラットファイブ・アドナイン", Info: '「ハーフ・ディミニッシュ」に9thが加わったコードです。' },
    { ChordName: "m7(♭5)add♭9", ChordBinary: [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0], Name: "マイナー・セブン・フラットファイブ・アドフラットナイン", Info: '「ハーフ・ディミニッシュ」に♭9thが加わったコードです。' },
    { ChordName: "m7(♭5)add11", ChordBinary: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0], Name: "マイナー・セブン・フラットファイブ・アドイレブン", Info: '「ハーフ・ディミニッシュ」に11thが加わったコードです。' },
    { ChordName: "m7(♭5)add♭13", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0], Name: "マイナー・セブン・フラットファイブ・アドフラットサーティーン", Info: '「ハーフ・ディミニッシュ」に♭13thが加わったコードです。' },
    { ChordName: "m7(♭5)add13", ChordBinary: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0], Name: "マイナー・セブン・フラットファイブ・アドサーティーン", Info: '「ハーフ・ディミニッシュ」に13thが加わったコードです。' },

    { ChordName: "Maj7(11)", ChordBinary: [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1], Name: "メジャーセブン・イレブン", Info: '「△7(11)」などの表記もあります。<br>メジャーセブンに11thが加わったコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj7(11)(omit5)", ChordBinary: [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1], Name: "メジャーセブン・イレブン・オミットファイブ", Info: '「△7(11)(omit5)」などの表記もあります。<br>メジャーセブンに11thが加わったコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj7(#11)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1], Name: "メジャーセブン・シャープイレブン", Info: '「△7(#11)」などの表記もあります。<br>メジャーセブンに#11thが加わったコードです。<br>リディアン・モードを示唆するコードです。' },
    { ChordName: "Maj7(#11)(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1], Name: "メジャーセブン・シャープイレブン・オミットファイブ", Info: '「△7(#11)(omit5)」などの表記もあります。<br>メジャーセブンに#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。<br>リディアン・モードを示唆するコードです。' },

    { ChordName: "blk", ChordBinary: [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], Name: "ブラックアダー", Info: '一部界隈で「イキスギ・コード」とも呼ばれます。<br>主に9thと#11thのサウンドが欲しい時に使えます。<br>ハイブリッド・コードである「Ⅱaug/Ⅰ」及び「#Ⅳaug/Ⅰ」及び「♭Ⅶaug/Ⅰ」の転回形とも解釈できます。' },
    { ChordName: "7(♭13)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0], Name: "セブン・フラットサーティーン", Info: 'ドミナントセブンに♭13thが加わったコードです。' },
    { ChordName: "7(♭13)(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], Name: "セブン・サーティーン・オミットファイブ", Info: 'ドミナントセブンに♭13thが加わったコードから、完全5度(P5th)の音を省略したコードです。<br>aug7と同じ構成音を持ちます。' },
    { ChordName: "7(13)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0], Name: "セブン・サーティーン", Info: 'ドミナントセブンに13thが加わったコードです。' },
    { ChordName: "7(13)(omit5)", ChordBinary: [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0], Name: "セブン・サーティーン・オミットファイブ", Info: 'ドミナントセブンに13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "7(9,#11)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0], Name: "セブン・ナイン・シャープイレブン", Info: 'ドミナントセブンに9thと#11thが加わったコードです。' },
    { ChordName: "7(9,#11)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0], Name: "セブン・ナイン・シャープイレブン・オミットファイブ", Info: 'ドミナントセブンに9thと#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(♭9,#11)", ChordBinary: [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0], Name: "セブン・フラットナイン・シャープイレブン", Info: 'ドミナントセブンに♭9thと#11thが加わったコードです。<br>UST(アッパー・ストラクチャー・トライアド)で「#Ⅳ/Ⅰ」と表記されるコードと同じ構成音を持ちます。<br>「ペトルーシュカ和音」とも呼ばれます。' },
    { ChordName: "7(♭9,#11)(omit5)", ChordBinary: [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0], Name: "セブン・フラットナイン・シャープイレブン・オミットファイブ", Info: 'ドミナントセブンに♭9thと#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(#9,#11)", ChordBinary: [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0], Name: "セブン・シャープナイン・シャープイレブン", Info: 'ドミナントセブンに#9thと#11thが加わったコードです。' },
    { ChordName: "7(#9,#11)(omit5)", ChordBinary: [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0], Name: "セブン・シャープナイン・シャープイレブン・オミットファイブ", Info: 'ドミナントセブンに#9thと#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "7(9,13)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0], Name: "セブン・ナイン・サーティーン", Info: 'ドミナントセブンに9thと13thが加わったコードです。' },
    { ChordName: "7(9,13)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0], Name: "セブン・ナイン・サーティーン・オミットファイブ", Info: 'ドミナントセブンに9thと13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(♭9,13)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0], Name: "セブン・フラットナイン・サーティーン", Info: 'ドミナントセブンに♭9thと13thが加わったコードです。' },
    { ChordName: "7(♭9,13)(omit5)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0], Name: "セブン・フラットナイン・サーティーン・オミットファイブ", Info: 'ドミナントセブンに♭9thと13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(#9,13)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0], Name: "セブン・シャープナイン・サーティーン", Info: 'ドミナントセブンに#9thと13thが加わったコードです。' },
    { ChordName: "7(#9,13)(omit5)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0], Name: "セブン・シャープナイン・サーティーン・オミットファイブ", Info: 'ドミナントセブンに#9thと13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "7(9,♭13)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0], Name: "セブン・ナイン・フラットサーティーン", Info: 'ドミナントセブンに9thと♭13thが加わったコードです。' },
    { ChordName: "7(9,♭13)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0], Name: "セブン・ナイン・フラットサーティーン・オミットファイブ", Info: 'ドミナントセブンに9thと♭13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(♭9,♭13)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0], Name: "セブン・フラットナイン・フラットサーティーン", Info: 'ドミナントセブンに♭9thと♭13thが加わったコードです。' },
    { ChordName: "7(♭9,♭13)(omit5)", ChordBinary: [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], Name: "セブン・フラットナイン・フラットサーティーン・オミットファイブ", Info: 'ドミナントセブンに♭9thと♭13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },
    { ChordName: "7(#9,♭13)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0], Name: "セブン・シャープナイン・フラットサーティーン", Info: 'ドミナントセブンに#9thと♭13thが加わったコードです。' },
    { ChordName: "7(#9,♭13)(omit5)", ChordBinary: [1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0], Name: "セブン・シャープナイン・フラットサーティーン・オミットファイブ", Info: 'ドミナントセブンに#9thと♭13thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "7sus4add9", ChordBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0], Name: "セブン・サスフォー・アドナイン", Info: '「sus9」や「9sus4」や「9sus」などの表記もあります。<br>7sus4に9thが加わったコードです。' },
    { ChordName: "7sus4add♭9", ChordBinary: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0], Name: "セブン・サスフォー・アドフラットナイン", Info: '7sus4に♭9thが加わったコードです。<br>主にフリジアン・モードや、陰音階-上行系を示唆するコードです。' },
    { ChordName: "11", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0], Name: "イレブン", Info: '「7(9,11)」などの表記もあります。<br>ドミナントセブンに9thと11thが加わったコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj11", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1], Name: "メジャーイレブン", Info: '「△11」や「△7(9,11)」などの表記もあります。<br>メジャーセブンに9thと11thが加わったコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj11(omit5)", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1], Name: "メジャーイレブン・オミットファイブ", Info: '「△11(omit5)」や「△7(9,11)(omit5)」などの表記もあります。<br>メジャーセブンに9thと11thが加わったコードから、完全5度(P5th)の音を省略したコードです。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj7(9,#11)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1], Name: "メジャーセブン・ナイン・シャープイレブン", Info: '「△7(9,#11)」などの表記もあります。<br>メジャーセブンに9thと#11thが加わったコードです。' },
    { ChordName: "Maj7(9,#11)(omit5)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1], Name: "メジャーセブン・ナイン・シャープイレブン・オミットファイブ", Info: '「△7(9,#11)(omit5)」などの表記もあります。<br>メジャーセブンに9thと#11thが加わったコードから、完全5度(P5th)の音を省略したコードです。' },

    { ChordName: "m11", ChordBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0], Name: "マイナーイレブン", Info: 'マイナー・セブンに9thと11thが加わったコードです。' },
    { ChordName: "13", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0], Name: "サーティーン", Info: 'ドミナントセブンに9thと11thと13thが加わったコードです。<br>ミクソリディアン・スケールの構成音を全て含むコード。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "Maj13", ChordBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], Name: "メジャーサーティーン", Info: 'メジャー・スケールの構成音を全て含むコード。<br>M3rdとP4th(11th)はアボイドになるので、取り扱いには注意が必要です。' },
    { ChordName: "m13", ChordBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], Name: "マイナーサーティーン", Info: 'ドリアン・スケールの構成音を全て含むコード。' },
    { ChordName: "Maj7(9,#11,13)", ChordBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], Name: "メジャーセブン・ナイン・シャープイレブン・サーティーン", Info: 'メジャーセブンに9thと#11thと13thが加わったコードです。<br>リディアン・スケールの構成音を全て含むコード。' }];

//0なし 1あり 2シャープ 3フラット 4ダブルシャープ 5ダブルフラット 6ナチュラル
scale_Container =
    //メジャー・スケールファミリー
    [{ EnglishName: "Major/Ionian", JapaneseName: "メジャー/アイオニアン", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], addNum: 0, ForteNumber: "7-35", Info: "長音階。最もポピュラーな音階。モーダルな文脈では、「アイオニアン・モード」。", Mode: "", Adjustment: 0 },
    { EnglishName: "Dorian", JapaneseName: "ドリアン", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-35", Info: "", Mode: "メジャーの第2モード。", Adjustment: 0 },
    { EnglishName: "Phrygian", JapaneseName: "フリジアン", diaChord4: "m7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-35", Info: "", Mode: "メジャーの第3モード。", Adjustment: 0 },
    { EnglishName: "Lydian", JapaneseName: "リディアン", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-35", Info: "", Mode: "メジャーの第4モード。", Adjustment: 0 },
    { EnglishName: "Mixolydian", JapaneseName: "ミクソリディアン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0], addNum: 7, ForteNumber: "7-35", Info: "", Mode: "メジャーの第5モード。", Adjustment: 0 },
    { EnglishName: "Natural Minor/Aeolian", JapaneseName: "ナチュラル・マイナー/エオリアン", diaChord4: "m7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0], addNum: 9, ForteNumber: "7-35", Info: "自然的短音階。モーダルな文脈では、「エオリアン・モード」。", Mode: "メジャーの第6モード。", Adjustment: 0 },
    { EnglishName: "Locrian", JapaneseName: "ロクリアン", diaChord4: "m7(♭5)", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], addNum: 11, ForteNumber: "7-35", Info: "", Mode: "メジャーの第7モード。", Adjustment: 0 },

    //ハーモニック・マイナースケールファミリー
    { EnglishName: "Harmonic Minor", JapaneseName: "ハーモニック・マイナー", diaChord4: "mMaj7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 2], addNum: 9, ForteNumber: "7-32", Info: "和声的短音階。短調の主和音への終止感を得るためのスケールです。", Mode: "", Adjustment: -9 },
    { EnglishName: "Locrian ♮6", JapaneseName: "ロクリアン♮6", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0], addNum: 11, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第2モード。", Adjustment: -9 },
    { EnglishName: "Ionian #5", JapaneseName: "アイオニアン・オーグメンテッド", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 0, 2, 1, 0, 1], addNum: 0, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第3モード。", Adjustment: -9 },
    { EnglishName: "Dorian #4", JapaneseName: "ドリアン#4", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 2, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第4モード。", Adjustment: -9 },
    { EnglishName: "Phrygian Dominant", JapaneseName: "フリジアン・ドミナント", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 2, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-32", Info: "「ハーモニック・マイナー・パーフェクト・フィフス・ビロウ(Hmp5↓)」とも。", Mode: "ハーモニック・マイナーの第5モード。", Adjustment: -9 },
    { EnglishName: "Lydian ♯2", JapaneseName: "リディアン#2", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 2, 1, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第6モード。", Adjustment: -9 },
    { EnglishName: "Ultra Locrian", JapaneseName: "ウルトラ・ロクリアン", diaChord4: "dim7", diaChord3: "m(♭5)", ScaleNumBinary: [2, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0], addNum: 8, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第7モード。", Adjustment: -9 },

    //メロディック・マイナースケールファミリー
    { EnglishName: "Melodic Minor", JapaneseName: "メロディック・マイナー", diaChord4: "mMaj7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 2, 0, 2], addNum: 9, ForteNumber: "7-34", Info: "旋律的短音階。ハーモニック・マイナーのメロディとしての違和感を軽減するためのスケール。<br>基本的にスケールを下行する時は、自然的短音階に変化させます。", Mode: "", Adjustment: -9 },
    { EnglishName: "Dorian ♭2", JapaneseName: "ドリアン♭2", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 0, 2, 0, 2, 1, 0], addNum: 11, ForteNumber: "7-34", Info: "", Mode: "メロディック・マイナーの第2モード。", Adjustment: -9 },
    { EnglishName: "Lydian Augmented", JapaneseName: "リディアン・オーグメンテッド", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 2, 0, 2, 1, 0, 1], addNum: 0, ForteNumber: "7-34", Info: "", Mode: "メロディック・マイナーの第3モード。", Adjustment: -9 },
    { EnglishName: "Lydian Dominant ", JapaneseName: "リディアン・ドミナント", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 2, 0, 2, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-34", Info: "「リディアン♭7」とも。", Mode: "メロディック・マイナーの第4モード。", Adjustment: -9 },
    { EnglishName: "Mixolydian ♭6", JapaneseName: "ミクソリディアン♭6", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 2, 0, 2, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-34", Info: "「メロディック・メジャー(旋律的長音階)」と同じ構成音を持ちます。", Mode: "メロディック・マイナーの第5モード。", Adjustment: -9 },
    { EnglishName: "Locrian ♮2", JapaneseName: "ロクリアン♮2", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [2, 0, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0], addNum: 6, ForteNumber: "7-34", Info: "", Mode: "メロディック・マイナーの第6モード。", Adjustment: -9 },
    { EnglishName: "Super Locrian", JapaneseName: "スーパー・ロクリアン", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 2, 0], addNum: 8, ForteNumber: "7-34", Info: "オルタード・スケールと同じ構成音を持ちます。", Mode: "メロディック・マイナーの第7モード。", Adjustment: -9 },

    //ハーモニック・メジャースケールファミリー
    { EnglishName: "Harmonic Major", JapaneseName: "ハーモニック・メジャー", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 3, 0, 0, 1], addNum: 0, ForteNumber: "7-32", Info: "和声的長音階。", Mode: "", Adjustment: 0 },
    { EnglishName: "Dorian ♭5", JapaneseName: "ドリアン♭5", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 3, 0, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第2モード。", Adjustment: 0 },
    { EnglishName: "Phrygian ♭4", JapaneseName: "フリジアン♭4", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 1, 0, 1, 3, 0, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-32", Info: "ドミナントセブン・コード上で使用可能です。", Mode: "ハーモニック・メジャーの第3モード。", Adjustment: 0 },
    { EnglishName: "Lydian ♭3", JapaneseName: "リディアン♭3", diaChord4: "mMaj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 3, 0, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第4モード。", Adjustment: 0 },
    { EnglishName: "Mixolydian ♭2", JapaneseName: "ミクソリディアン♭2", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 3, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0], addNum: 7, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第5モード。", Adjustment: 0 },
    { EnglishName: "Lydian ♯2♯5", JapaneseName: "リディアン♯2♯5", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [3, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1], addNum: 10, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第6モード。", Adjustment: 0 },
    { EnglishName: "Locrian ♭♭7", JapaneseName: "ロクリアン♭♭7", diaChord4: "dim7", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 1, 3, 0, 0], addNum: 11, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第7モード。", Adjustment: 0 },

    //メロディック・メジャー
    { EnglishName: "Melodic Major", JapaneseName: "メロディック・メジャー", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 3, 0, 3, 0], addNum: 0, ForteNumber: "7-34", Info: "旋律的長音階。「ミクソリディアン♭6」と同じ構成音を持ちます。", Mode: "メロディック・マイナーの第5モードでもあります。", Adjustment: -5 },

    //ダブル・ハーモニック
    { EnglishName: "Double Harmonic", JapaneseName: "ダブル・ハーモニック", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 3, 0, 0, 1, 1, 0, 1, 3, 0, 0, 1], addNum: 4, ForteNumber: "7-22", Info: "「フラメンコ・モード」や、「アラビック・スケール」などとも呼ばれます。", Mode: "", Adjustment: -4 },
    { EnglishName: "Lydian ♯2♯6", JapaneseName: "リディアン♯2♯6", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 2, 1, 0, 2, 1, 0, 0, 2, 1], addNum: 5, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第2モード。", Adjustment: -4 },
    { EnglishName: "Ultra Phrygian", JapaneseName: "ウルトラ・フリジアン", diaChord4: "m6", diaChord3: "", ScaleNumBinary: [1, 3, 0, 3, 3, 0, 0, 1, 3, 3, 0, 0], addNum: 8, ForteNumber: "7-22", Info: "「フリジアン♭♭7 ♭4」とも。", Mode: "ダブル・ハーモニックの第3モード。", Adjustment: -4 },
    { EnglishName: "Hungarian Minor", JapaneseName: "ハンガリアン・マイナー", diaChord4: "m△7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 3, 0, 0, 2, 1, 3, 0, 0, 1], addNum: 9, ForteNumber: "7-22", Info: "「Algerian」、「Egyptian」などとも。", Mode: "ダブル・ハーモニックの第4モード。", Adjustment: -4 },
    { EnglishName: "Oriental", JapaneseName: "オリエンタル", diaChord4: "Fr+6", diaChord3: "", ScaleNumBinary: [1, 3, 0, 0, 1, 1, 3, 0, 0, 1, 3, 0], addNum: 11, ForteNumber: "7-22", Info: "「Asian」、「ミクソリディアン♭5 ♭2」、「ロクリアン♮6 ♮3」とも。", Mode: "ダブル・ハーモニックの第5モード。", Adjustment: -4 },
    { EnglishName: "Ionian ♯5♯2", JapaneseName: "アイオニアン♯5♯2", diaChord4: "aug△7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 2, 1, 1, 0, 0, 2, 1, 0, 1], addNum: 0, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第6モード。", Adjustment: -4 },
    { EnglishName: "Locrian Double ♭♭3♭♭7", JapaneseName: "ロクリアン・ダブル♭♭3♭♭7", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 3, 3, 0, 0, 1, 3, 0, 3, 3, 0, 0], addNum: 3, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第7モード。", Adjustment: -4 },

    //ペンタ
    { EnglishName: "Major Pentatonic", JapaneseName: "メジャー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0], addNum: 0, ForteNumber: "5-35", Info: "もっとも基本的な5音階です。<br>「ヨナ抜き長音階」とも。<br>「夏山調子」と同じ構成音を持ちます。", Mode: "", Adjustment: 0 },
    { EnglishName: "Suspended Pentatonic", JapaneseName: "陽音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 2, ForteNumber: "5-35", Info: "「新雁金調子」や「楽調子」や「青葉調子」と同じ構成音を持ちます。", Mode: "メジャー・ペンタトニックの第2モード。", Adjustment: 0 },
    { EnglishName: "Blues Minor", JapaneseName: "ブルース・マイナー", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0], addNum: 4, ForteNumber: "5-35", Info: "", Mode: "メジャー・ペンタトニックの第3モード。", Adjustment: 0 },
    { EnglishName: "Ritsu", JapaneseName: "律音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], addNum: 7, ForteNumber: "5-35", Info: "古くは雅楽で用いられる音階です。<br>「乃木調子」や「水調子」と同じ構成音を持ちます。", Mode: "メジャー・ペンタトニックの第4モード。", Adjustment: 0 },
    { EnglishName: "Minor Pentatonic", JapaneseName: "マイナー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 9, ForteNumber: "5-35", Info: "「ニロ抜き短音階」とも。", Mode: "メジャー・ペンタトニックの第5モード。", Adjustment: 0 },

    //和風スケール
    { EnglishName: "Insen", JapaneseName: "陰音階-上行系 ", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 4, ForteNumber: "5-29", Info: "宮城道雄-『春の海』などで用いられる和風な音階です。<br>「都節-上行形」とも。<br>「半岩戸調子」、「古今調子」と同じ構成音を持ちます。", Mode: "", Adjustment: -5 },
    { EnglishName: "Raga Hindol", JapaneseName: "ラーガ・ヒンドル", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1], addNum: 5, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第2モード。", Adjustment: -5 },
    { EnglishName: "Han-Nakazora", JapaneseName: "半中空調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0], addNum: 9, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第3モード。", Adjustment: -5 },
    { EnglishName: "Locrian Pentatonic", JapaneseName: "ロクリアン・ペンタトニック ", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0], addNum: 11, ForteNumber: "5-29", Info: "「二重雲井調子」と同じ構成音を持ちます。", Mode: "陰音階-下行形の第4モード。", Adjustment: -5 },
    { EnglishName: "Dorian Pentatonic", JapaneseName: "ドリアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], addNum: 2, ForteNumber: "5-29", Info: "「雲井ペンタトニック」とも。<br>「秋風調子」と同じ構成音を持ちます。", Mode: "陰音階-下行形の第5モード。", Adjustment: -5 },

    { EnglishName: "In/Sakura Pentatonic", JapaneseName: "陰音階-下行形", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0], addNum: 4, ForteNumber: "5-20", Info: "古謡「さくらさくら」などで用いられる和風な音階です。<br>「都節-下行形」とも。<br>「平調子」、「平巾十調子」と同じ構成音を持ちます。", Mode: "", Adjustment: -4 },
    { EnglishName: "Lydian Pentatonic", JapaneseName: "リディアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1], addNum: 5, ForteNumber: "5-20", Info: "", Mode: "陰音階-下行形の第2モード。", Adjustment: -4 },
    { EnglishName: "Aeolian Pentatonic", JapaneseName: "エオリアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0], addNum: 9, ForteNumber: "5-20", Info: "「ヨナ抜き短音階」とも。", Mode: "陰音階-下行形の第3モード。", Adjustment: -4 },
    { EnglishName: "Hon-Kumoi", JapaneseName: "本雲井調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], addNum: 11, ForteNumber: "5-20", Info: "「雲井巾十調子」とも。", Mode: "陰音階-下行形の第4モード。", Adjustment: -4 },
    { EnglishName: "Raga Bhinna Shadja", JapaneseName: "ラーガ・ベニア・シャジア", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1], addNum: 0, ForteNumber: "5-20", Info: "", Mode: "陰音階-下行形の第5モード。", Adjustment: -4 },

    { EnglishName: "Ionian Pentatonic", JapaneseName: "琉球音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1], addNum: 0, ForteNumber: "5-20", Info: "「沖縄音階」、「ニロ抜き長音階」、「アイオニアン・ペンタトニック」とも。", Mode: "", Adjustment: 0 },

    { EnglishName: "Sylimic", JapaneseName: "雲井調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "6-18", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Koptimic", JapaneseName: "中空調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0], addNum: 4, ForteNumber: "6-Z25", Info: "", Mode: "", Adjustment: 0 },

    //ブルース
    { EnglishName: "Blues Major Pentatonic", JapaneseName: "ブルース・メジャー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 3, 1, 0, 0, 1, 0, 1, 0, 0], addNum: 0, ForteNumber: "6-Z47", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Blues Minor Pentatonic", JapaneseName: "ブルース・マイナー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 3, 1, 0, 0, 1, 0], addNum: 9, ForteNumber: "6-Z47", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Blues note scale", JapaneseName: "ブルー・ノート", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 3, 1, 1, 3, 1, 0, 1, 3, 1], addNum: 0, ForteNumber: "10-5", Info: "メジャー・スケールに、ジャズやブルースで用いられるブルーノート(♭3,♭5,♭7)を全て入れ込んだスケール。", Mode: "", Adjustment: 0 },

    //その他のスケール
    { EnglishName: "Spanish Phrygian", JapaneseName: "スパニッシュ・フリジアン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 3, 0, 3, 3, 3, 0, 1, 3, 0, 3, 0], addNum: 4, ForteNumber: "8-26", Info: "スパニッシュな雰囲気が出ます。「スパニッシュ8ノート」とも。", Mode: "", Adjustment: 0 },
    { EnglishName: "Half-Whole Diminished", JapaneseName: "ハーフ・ホール・ディミニッシュ", diaChord4: "7", diaChord3: "", ScaleNumBinary: [3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0], addNum: 0, ForteNumber: "8-28", Info: "半音と全音の繰り返しからなるスケール。<br>日本では「コンビネーション・オブ・ディミニッシュ(コンディミ)」とも呼ばれます。", Mode: "", Adjustment: 0 },
    { EnglishName: "Diminished", JapaneseName: "ディミニッシュ", diaChord4: "", diaChord3: "", ScaleNumBinary: [3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3], addNum: 0, ForteNumber: "8-28", Info: "全音と半音の繰り返しからなるスケール。<br>ウィレム・ペイペルが使用したことから「Pijper's Scale」などとも呼ばれます。", Mode: "", Adjustment: 0 },
    { EnglishName: "Altered", JapaneseName: "オルタード", diaChord4: "7(omit5)", diaChord3: "(omit5)", ScaleNumBinary: [1, 3, 0, 3, 1, 0, 2, 0, 3, 0, 3, 0], addNum: 8, ForteNumber: "7-34", Info: "オルタード・テンションをまとめたスケールです。「スーパー・ロクリアン」と同じ構成音を持ちます。", Mode: "メロディック・マイナーの第7モード。", Adjustment: -9 },
    { EnglishName: "Whole Tone", JapaneseName: "ホール・トーン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 2, 0, 3, 0, 3, 0], addNum: 0, ForteNumber: "6-35", Info: "「全音音階」とも。オクターブを6等分したスケール。全てが全音で構成されています。", Mode: "", Adjustment: 0 },
    { EnglishName: "Chromatic", JapaneseName: "クロマチック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 2, 1, 3, 1, 1, 2, 1, 3, 1, 3, 1], addNum: 0, ForteNumber: "12-1", Info: "「半音階」とも。", Mode: "", Adjustment: 0 }
    ];


//音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function ChangeEIJG() {
    root_number = Number(document.getElementById("rootNumber").value);
    key_signature_names = Number(document.getElementById("key_signature_names").value);

    num = 0;
    for (let i = 0; i < 12; i++) {
        document.getElementById(`chord_${num}`).innerHTML = EIJG[key_signature_names][mod(root_number + i, 12)];
        num++
    };
};

//コードの選択肢を表示するためのHTML要素(option)を追加するための関数
function CreateChordChoices() {
    //コードを格納した配列の長さを取得する。
    Num = chord_container.length;

    //配列の数だけコードの選択肢optionを追加する。
    for (let i = 0; i < chord_container.length; i++) {
        Num--
        if (Num === 1) {
            //メジャーコードを初期の選択肢にする。
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${chord_container[Num]['ChordBinary'].join('')}-${Num} selected>Major</option>`);
        } else {
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${chord_container[Num]['ChordBinary'].join('')}-${Num}>${chord_container[Num]["ChordName"]}</option>`);
        };
    };
};

//スケールの選択肢を表示するためのHTML要素(option)を追加するための関数
function CeateScaleChoices() {
    ScaleLanguage = "JapaneseName"
    //スケールを格納した配列の長さを取得する。
    Num = scale_Container.length;

    //配列の数だけスケールの選択肢optionを追加する。
    for (let i = 0; i < scale_Container.length; i++) {
        Num--
        if (Num === 0) {
            //メジャースケールを初期の選択肢にする。
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('')}-${Num} selected>${scale_Container[Num][ScaleLanguage]}</option>`);
        } else {
            document.getElementById("constituent_binary").insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('')}-${Num}>${scale_Container[Num][ScaleLanguage]}</option>`);
        };
    };
};

//スケール情報を描画する関数
function ScaleInformationDrawing() {
    //scale_Container配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //scale_Container配列を検索用の値
    Num = value[1];

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    scale_binary_split = value[0].split('').map(Number);

    //シャープまたはフラット指定用の数値を、スケールナンバー計算のために置き換える
    for (let i = 0; i < scale_binary_split.length; i++) {
        if (scale_binary_split[i] === 2) {
            scale_binary_split.splice(i, 1, 1);
        };
        if (scale_binary_split[i] === 3) {
            scale_binary_split.splice(i, 1, 1);
        };
    };
    scale_binary_reverse = scale_binary_split.reverse();
    scale_binary_rejoin = scale_binary_reverse.join("");
    scale_dec = parseInt(scale_binary_rejoin, 2);

    //トニックの数値を取得する。
    RootNumber = Number(document.getElementById("rootNumber").value);

    KeySignatureNum = mod(RootNumber - scale_Container[Num]["addNum"], 12)
    scaleFamilyNum = mod(RootNumber - scale_Container[Num]["addNum"] - scale_Container[Num]["Adjustment"], 12)

    //調号が#か♭かを判定する。
    if (KeySignatureNum === 0
        || KeySignatureNum === 2
        || KeySignatureNum === 4
        || KeySignatureNum === 6
        || KeySignatureNum === 7
        || KeySignatureNum === 9
        || KeySignatureNum === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    //スケールファミリーの情報を表示
    if (scale_Container[Num]["Mode"] == "") {
        document.getElementById("Scale_Family_text").innerHTML = "<br>";
    } else {
        document.getElementById("Scale_Family_text").innerHTML
            = `<br>${noteNames[scaleFamilyNum][SOF]} ${scale_Container[Num]["Mode"]}`;
    };

    //スケールの名前を表示する
    document.getElementById("Scale_name_text").innerHTML
        = `English : <strong>${noteNames[RootNumber][SOF]} ${scale_Container[Num]['EnglishName']}</strong> <br>日本語 :<strong> ${noteNames[RootNumber][SOF]} ${scale_Container[Num]['JapaneseName']}</strong>`;

    //スケールの調号を判定する
    document.getElementById("keySignatur_text").innerHTML
        = `通常、調号は${key_signature[KeySignatureNum]}で記譜されます。`;

    //スケールの情報を表示
    if (scale_Container[Num]["Info"] == "") {
        document.getElementById("Scale_info_text").innerHTML = "";
    } else {
        document.getElementById("Scale_info_text").innerHTML
            = `<br>${scale_Container[Num]["Info"]}`;
    };

    // ドミナントコード上で使えるかを判定する
    if (scale_Container[Num]["diaChord4"] === "7") {
        document.getElementById("dominant_chord_text").innerHTML
            = `${noteNames[RootNumber][SOF]}7 (ドミナントセブン・コード)上で使用可能です。`;
    } else if (scale_dec == 1371) {
        document.getElementById("dominant_chord_text").innerHTML
            = `「スーパー・ロクリアン」ではなく「オルタード・スケール」として解釈する場合は、${flat_note_name[RootNumber]}7 (ドミナントセブン・コード)上で使用可能です。`;
    } else {
        document.getElementById("dominant_chord_text").innerHTML = "";
    };

    //フォルテナンバーを表示
    document.getElementById("Forte_number_text").innerHTML
        = `<br>Forte number：「${scale_Container[Num]["ForteNumber"]}」`;
    //スケールナンバーを表示
    document.getElementById("Scale_number_text").innerHTML
        = `Scale number：「${scale_dec}」`;

    //構成音を着色するために構成音のバイナリを返り値として返す
    onoff = value[0].split('').map(Number);
    return onoff
};

//スケールの情報を処理して書き込む関数(スケールで使用)
function ScaleKeySignature() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();
    //スケール情報を描画する関数
    onoff = ScaleInformationDrawing();
    //構成音を着色
    NoteNameColoring(onoff);
};

//モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
function CreateCandidate() {
    Num = 0
    //配列の数だけHTML要素(div)を追加する。
    for (let i = 0; i < scale_Container.length; i++) {
        HTML_Info = document.getElementById("addHTML");
        // HTML_Info.insertAdjacentHTML('beforebegin','<div>BeforeBegin</div>');
        HTML_Info.insertAdjacentHTML('beforebegin', `<div class="" id="Modal_text_${Num}"></div>`);
        Num++
    };
};

//モーダル・インターチェンジの候補をディグリー表記で表示する関数
function ModalCandidateDegree() {
    Num = 0;
    for (let i = 0; i < scale_Container.length; i++) {
        document.getElementById(`Modal_text_${Num}`).innerHTML
            = `Ⅰ ${scale_Container[Num][ScaleLanguage]}　<font size="2"><span style="color:#808080">${scale_Container[Num]["Mode"]}</span></font>`;
        Num++
    };
};

//コード・ネームの情報を判定する関数
function ChordCandidateInfo(onoff) {

    //ルートの音の値を取得
    RootNumber = Number(document.getElementById("rootNumber").value);

    //ルート音の値から大雑把にシャープとフラットの判別をする。
    if (RootNumber === 2
        || RootNumber === 4
        || RootNumber === 6
        || RootNumber === 7
        || RootNumber === 9
        || RootNumber === 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    //コードの構成音が何音か判定した値を格納する変数
    CandidateCount = 0;
    //コードの構成音が何音か判定する
    for (let i = 0; i < 11; i++) {
        CandidateCount = CandidateCount + onoff[i];
    };

    document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
    document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;

    TriToneText = ["<br>ドミナント機能を持つコードです。<br><br>【このコードの主な解決先】"];
    Sub2Text = ["<br>【このコードの手前に居がちなコード】"]

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
        document.getElementById("AddChordInfoTriToneHTML").innerHTML
            = TriToneText.join().replace(",", "").replace(",", "").replace(",", "");
        document.getElementById("AddChordInfoSub2HTML").innerHTML
            = Sub2Text.join().replace(",", "").replace(",", "").replace(",", "");
    };

    //8音以上のコードを判定する。
    if (CandidateCount >= 8) {
        document.getElementById("AddChordInfo2HTML").innerHTML = `<br>8種類以上の異なるピッチクラスを使用するコードになります。<br>響きが無彩色的になる可能性が高いです。`;
    } else if (CandidateCount >= 5) {
        document.getElementById("AddChordInfo2HTML").innerHTML = `<br>5種類以上の異なるピッチクラスを使用するコードになります。<br>混乱を防ぐために、ボイシング(和音の積み方)の併記を推奨します。`;
    } else {
        document.getElementById("AddChordInfo2HTML").innerHTML = ``;
    };

    //ベース音を判定する
    Bass = 0;
    for (let i = 0; i < 11; i++) {
        //一番左側の押されているスイッチの場所(ベース音)を判定する
        if (onoff[i] === 1) {
            Bass = i + RootNumber;
            break;
        };
    };

    //コード・ネームを判定する。
    RootNum = 0;
    //転回形を判定するためルート音をずらして12通り全てを判定する。
    for (let i = 0; i < 11; i++) {
        //コード・ネームが格納された配列の先頭に戻る。
        Num = 0;
        //コード・ネームが格納された配列から、マッチするものを見つける。
        for (let j = 0; j < chord_container.length; j++) {
            if (chord_container[Num]['ChordBinary'][0] === onoff[mod(RootNum + 0, 12)]
                && chord_container[Num]['ChordBinary'][1] === onoff[mod(RootNum + 1, 12)]
                && chord_container[Num]['ChordBinary'][2] === onoff[mod(RootNum + 2, 12)]
                && chord_container[Num]['ChordBinary'][3] === onoff[mod(RootNum + 3, 12)]
                && chord_container[Num]['ChordBinary'][4] === onoff[mod(RootNum + 4, 12)]
                && chord_container[Num]['ChordBinary'][5] === onoff[mod(RootNum + 5, 12)]
                && chord_container[Num]['ChordBinary'][6] === onoff[mod(RootNum + 6, 12)]
                && chord_container[Num]['ChordBinary'][7] === onoff[mod(RootNum + 7, 12)]
                && chord_container[Num]['ChordBinary'][8] === onoff[mod(RootNum + 8, 12)]
                && chord_container[Num]['ChordBinary'][9] === onoff[mod(RootNum + 9, 12)]
                && chord_container[Num]['ChordBinary'][10] === onoff[mod(RootNum + 10, 12)]
                && chord_container[Num]['ChordBinary'][11] === onoff[mod(RootNum + 11, 12)]) {

                //完全5度が省略可能かを判定する。
                omitP5th = 0;
                //長2度(sus2)が含まれる場合
                if (onoff[mod(RootNum + 2, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全4度(sus4)が含まれる場合
                } else if (onoff[mod(RootNum + 5, 12)] === 1 && CandidateCount < 4) {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                    //完全5度が含まれており省略可能な場合
                } else if (onoff[mod(RootNum + 7, 12)] === 1) {
                    omitP5th = 1;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML
                        = `<br>ルート音に対して完全5度(P5th)の音は、必要に応じて省略が可能です。`;
                    ///完全5度が含まれない場合
                } else {
                    omitP5th = 0;
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                };

                //コードがメジャーかマイナーかそれ以外かを判定する。
                MajorOrMinor = 0;
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
                    document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
                };

                NonRootMOm = 0;
                //コード・ネームのシャープとフラットを判定するための値を計算する。
                NonRootMOm = mod(RootNum - MajorOrMinor + RootNumber, 12);

                //コード・ネームのシャープとフラットの判別
                if (NonRootMOm === 2 || NonRootMOm === 4 || NonRootMOm === 6 || NonRootMOm === 7 || NonRootMOm === 9 || NonRootMOm === 11) {
                    NonRootSOF = 0;
                } else {
                    NonRootSOF = 1;
                };

                //軸音を含まないコード・ネームの判定(判定基準：ベース音の方がルート音よりも左側にある)
                if (0 === onoff[0] && Bass >= RootNumber + RootNum) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含まないコード・ネームの展開形の判定(判定基準：ルート音のスイッチが押されていない)
                } else if (0 === onoff[0]) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[mod(Bass, 12)][NonRootSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[mod(Bass, 12)][NonRootSOF]}　(転回形)</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの判定(判定基準：初回ループ時)
                } else if (RootNum === 0) {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[RootNumber][NonRootSOF]} ${chord_container[Num]["ChordName"]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[RootNumber][NonRootSOF]}${chord_container[Num]["Name"]}</font>`
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                    //軸音を含むコード・ネームの転回形の判定
                } else {
                    document.getElementById("AddChordHTML").innerHTML
                        = `<font size="6">${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["ChordName"]}/${noteNames[RootNumber][NonRootSOF]}</font>`;
                    document.getElementById("AddChordNameHTML").innerHTML
                        = `<font size="2">読み方：${noteNames[mod(RootNumber + RootNum, 12)][NonRootSOF]}${chord_container[Num]["Name"]}・オーヴァー${noteNames[RootNumber][NonRootSOF]}　(転回形)</font>`;
                    document.getElementById("AddChordInfoHTML").innerHTML
                        = `${chord_container[Num]["Info"]}`;
                };
                //マッチするものが見つかった場合はここでreturn
                return
            };
            //見つからなかったので、コードネームを格納した配列から、次のコードとマッチするか調べる。
            Num++
        };
        //このルート音では見つからなかった場合、次のルート音でループに入る。
        RootNum++
        //マッチするもの無し
        if (RootNum === 11) {
            document.getElementById("AddChordHTML").innerHTML = `<font size="6">N.C.</font>`;
            document.getElementById("AddChordNameHTML").innerHTML = `<font size="2">読み方：ノン・コード</font>`;
            document.getElementById("AddChordInfoHTML").innerHTML = `選択された音の組み合わせに対応するコード・ネームは見つかりませんでした。<br><font size="2"><span style="color:#808080">※コード・ネームには、様々な表記や解釈の可能性があります。ここに示されるものが全てではありません。<br>※基本的に「UST(アッパー・ストラクチャー・トライアド)」及び、「ハイブリッド・コード」での解釈の可能性は表示されません。</span></font>`;
            document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
        };
    };

    //3音連続しているトーン・クラスターを判定する
    NoteChain = 0;
    tcj = 0;
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
    clear = 0;
    //12通りの場合について調べる。
    for (let i = 0; i < 11; i++) {
        TCNum = 0;
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
                document.getElementById("AddChordHTML").innerHTML = `<font size="6">Tone cluster</font>`;
                document.getElementById("AddChordNameHTML").innerHTML = `<font size="2">読み方：トーン・クラスター</font>`;
                document.getElementById("AddChordInfoHTML").innerHTML = `「音塊」「密集音群」とも。<br>隣り合う3つ以上の音を含む和音です。`;
                document.getElementById("AddChordInfoSub2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoTriToneHTML").innerHTML = ``;
                document.getElementById("AddChordInfo2HTML").innerHTML = ``;
                document.getElementById("AddChordInfoOmit5HTML").innerHTML = ``;
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

//コードの情報を処理して書き込む関数(コードで使用)
function ChordNoteSwitch() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();

    //scale_Container配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //構成音のバイナリ値を配列「onoff」へ格納する
    onoff = value[0].split('').map(Number);

    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff);

    //構成音を着色する関数
    NoteNameColoring(onoff);

    //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
    CreateCandidate();

    ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();
};

//スケールの情報を格納する配列
let ConfigurationNotes = [];

//モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数(コード・コード/モード検索用)
function ModalTextAndNoteCreate() {
    //ルート音の情報を取得する。
    RootNumber = Number(document.getElementById("rootNumber").value);
    Num = 0;
    //スケールを表示する言語の情報を取得する。
    sigNameNum = Number(document.getElementById("ModalCandidateSelect").value);
    if (sigNameNum <= 3) {
        for (let i = 0; i < scale_Container.length; i++) {
            //配列を空にする。
            ConfigurationNotes.splice(0);
            //選択された音の組み合わせがスケールの構成音と一致するか判定する。
            if (scale_Container[Num]['ScaleNumBinary'][0] >= onoff[0]
                && scale_Container[Num]['ScaleNumBinary'][1] >= onoff[1]
                && scale_Container[Num]['ScaleNumBinary'][2] >= onoff[2]
                && scale_Container[Num]['ScaleNumBinary'][3] >= onoff[3]
                && scale_Container[Num]['ScaleNumBinary'][4] >= onoff[4]
                && scale_Container[Num]['ScaleNumBinary'][5] >= onoff[5]
                && scale_Container[Num]['ScaleNumBinary'][6] >= onoff[6]
                && scale_Container[Num]['ScaleNumBinary'][7] >= onoff[7]
                && scale_Container[Num]['ScaleNumBinary'][8] >= onoff[8]
                && scale_Container[Num]['ScaleNumBinary'][9] >= onoff[9]
                && scale_Container[Num]['ScaleNumBinary'][10] >= onoff[10]
                && scale_Container[Num]['ScaleNumBinary'][11] >= onoff[11]) {

                //シャープとフラットの区別をする変数SOFに値を代入。
                if (mod(RootNumber - scale_Container[Num]['addNum'], 12) == 0
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 2
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 4
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 6
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 7
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 9
                    || mod(RootNumber - scale_Container[Num]['addNum'], 12) == 11) {
                    SOF = 0;
                } else {
                    SOF = 1;
                };

                //スケール構成音のバイナリを配列に格納する。
                Configuration = scale_Container[Num]['ScaleNumBinary']

                //for文でスケールの構成音を生成する。
                for (let i = 0; i < 12; i++) {
                    //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
                    if (Configuration[i] === 2) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][0]);
                    } else if (Configuration[i] === 3) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][1]);
                    } else if (Configuration[i] >= 1) {
                        ConfigurationNotes.push(EIJG2[sigNameNum][mod(RootNumber + i, 12)][SOF]);
                    };
                };

                //スケールの情報をHTMLに書き込む。
                if (scale_Container[Num]["Mode"] === "") {
                    document.getElementById(`Modal_text_${Num}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[Num][ScaleLanguage]} . . .【${ConfigurationNotes.join("-")}】<font size="2">${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}</font>`;
                } else {
                    document.getElementById(`Modal_text_${Num}`).innerHTML
                        = `${noteNames[RootNumber][SOF]} ${scale_Container[Num][ScaleLanguage]} . . .【${ConfigurationNotes.join("-")}】<font size="2">${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}　<span style="color:#808080">${noteNames[mod(RootNumber - scale_Container[Num]['addNum'] - scale_Container[Num]['Adjustment'], 12)][SOF]}${scale_Container[Num]["Mode"]}</span></font>`;
                };
            } else {
                document.getElementById(`Modal_text_${Num}`).innerHTML = "";
                document.getElementById(`Modal_text_${Num}`).className = "";
            };
            Num++
        };
    } else {
        //構成音を表示しない
    };
};

//モーダル・インターチェンジの候補を表示する関数(コード・コード/モード検索用)
function ModalTextCreate() {
    //音名の表記形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
    ChangeEIJG();

    RootNumber = Number(document.getElementById("rootNumber").value);

    Num = 0;
    for (let i = 0; i < scale_Container.length; i++) {
        if (scale_Container[Num]['ScaleNumBinary'][0] >= onoff[0]
            && scale_Container[Num]['ScaleNumBinary'][1] >= onoff[1]
            && scale_Container[Num]['ScaleNumBinary'][2] >= onoff[2]
            && scale_Container[Num]['ScaleNumBinary'][3] >= onoff[3]
            && scale_Container[Num]['ScaleNumBinary'][4] >= onoff[4]
            && scale_Container[Num]['ScaleNumBinary'][5] >= onoff[5]
            && scale_Container[Num]['ScaleNumBinary'][6] >= onoff[6]
            && scale_Container[Num]['ScaleNumBinary'][7] >= onoff[7]
            && scale_Container[Num]['ScaleNumBinary'][8] >= onoff[8]
            && scale_Container[Num]['ScaleNumBinary'][9] >= onoff[9]
            && scale_Container[Num]['ScaleNumBinary'][10] >= onoff[10]
            && scale_Container[Num]['ScaleNumBinary'][11] >= onoff[11]) {
            if (mod(RootNumber - scale_Container[Num]['addNum'], 12) === 0
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 2
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 4
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 6
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 7
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 9
                || mod(RootNumber - scale_Container[Num]['addNum'], 12) === 11) {
                document.getElementById(`Modal_text_${Num}`).innerHTML
                    = `${sharp_note_name[RootNumber]} ${scale_Container[Num][ScaleLanguage]} ${sharp_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}`;
            } else {
                document.getElementById(`Modal_text_${Num}`).innerHTML
                    = `${flat_note_name[RootNumber]} ${scale_Container[Num][ScaleLanguage]} ${flat_key_signature[mod(RootNumber - scale_Container[Num]['addNum'], 12)]}`;
            };
        } else {
            document.getElementById(`Modal_text_${Num}`).innerHTML = "";
            document.getElementById(`Modal_text_${Num}`).className = "";
        };
        Num++
    };

    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff);

    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();
};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
function ModalCandidateSelect() {
    //言語の情報を取得する。
    ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //言語表示なしの場合 又は 音名が選択されていないとき
    if ((0 === onoff[0]
        && 0 === onoff[1]
        && 0 === onoff[2]
        && 0 === onoff[3]
        && 0 === onoff[4]
        && 0 === onoff[5]
        && 0 === onoff[6]
        && 0 === onoff[7]
        && 0 === onoff[8]
        && 0 === onoff[9]
        && 0 === onoff[10]
        && 0 === onoff[11])) {
        //モーダル・インターチェンジの候補をディグリー表記で表示する関数
        ModalCandidateDegree();
    } else if (ModalSelectNum === 0
        || ModalSelectNum === 1
        || ModalSelectNum === 2
        || ModalSelectNum === 3) {
        //モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数
        ModalTextAndNoteCreate();
    } else if (ModalSelectNum === 4) {
        //モーダル・インターチェンジの候補を表示する関数
        ModalTextCreate();
    } else {
        //モーダル・インターチェンジの候補をディグリー表記で表示する関数
        ModalCandidateDegree();
    };
};

//スケールの日本語・英語表記を切り替えるスイッチ(コード・コード/モード検索用)
let ScaleLanguage = 'JapaneseName';
let ScaleLanguageNum = 1;

//モーダルインターチェンジ候補のスケール名を日本語と英語に切り替えるボタンのための関数(コード・コード/モード検索用)
function ScaleLanguageJE() {
    if (ScaleLanguageNum === 0) {
        ScaleLanguage = 'JapaneseName';
        document.getElementById("scale_language_change_button").className = "btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum === 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").className = "btn btn-danger box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 0;
    };
    //モーダル・インターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
    ModalCandidateSelect();
};

//音名スイッチのオンオフ状態を格納する配列
let onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//構成音を着色する関数
function NoteNameColoring(onoff) {
    for (let i = 0; i < 12; i++) {
        if (onoff[i] != 0) {
            document.getElementById(`chord_${i}`).className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
        } else if (onoff[i] === 0) {
            document.getElementById(`chord_${i}`).className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
        };
    };
};

//音名からモード・コード検索用のスイッチの役割を果たす関数(コード/モード検索用)
function NoteSwitch(Num) {
    if (onoff[Num] === 0) {
        onoff[Num] = 1;
    } else if (onoff[Num] === 1) {
        onoff[Num] = 0;
    };
    //構成音を着色する関数
    NoteNameColoring(onoff);
    //コード・ネームの情報を判定する関数
    ChordCandidateInfo(onoff);
    //モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替えをする関数(コード・コード/モード検索用)
    ModalCandidateSelect(onoff);
};


//転調の種類を判別するための関数(転調の間隔)
function modulation() {
    b_note_num = document.getElementById("b_note").value;
    b_mode_num = document.getElementById("b_mode").value;
    a_note_num = document.getElementById("a_note").value;
    a_mode_num = document.getElementById("a_mode").value;

    b_key_num = mod((Number(b_note_num) - Number(b_mode_num)), 12);
    a_key_num = mod((Number(a_note_num) - Number(a_mode_num)), 12);
    modulation_num = mod((Number(a_key_num) - Number(b_key_num)), 12);

    //転調前のキーと調号を表示
    if (b_key_num == 0 || b_key_num == 2 || b_key_num == 4 || b_key_num == 6 || b_key_num == 7 || b_key_num == 9 || b_key_num == 11) {
        b_SOF = 0;
    } else {
        b_SOF = 1;
    };

    //転調前のキーと調号を表示
    document.getElementById("result_b_key").innerHTML
        = "-転調前-<br><br>" + noteNames[b_note_num][b_SOF] + " " + mode_name[b_mode_num] + " " + flat_key_signature[b_key_num];

    //転調後のキーと調号を表示
    if (a_key_num == 0 || a_key_num == 2 || a_key_num == 4 || a_key_num == 6 || a_key_num == 7 || a_key_num == 9 || a_key_num == 11) {
        a_SOF = 0;
    } else {
        a_SOF = 1;
    };

    //転調後のキーと調号を表示
    document.getElementById("result_a_key").innerHTML
        = "-転調後-<br><br>" + noteNames[a_note_num][a_SOF] + " " + mode_name[a_mode_num] + " " + flat_key_signature[a_key_num];

    //転調の種類を表示
    if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>転調していません。";
    } else if (Number(b_key_num) == Number(a_key_num) && Number(b_note_num) != Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（平行調）";
    } else if (Number(b_note_num) == Number(a_note_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同主調転調）";
    } else if (Number(b_mode_num) == Number(a_mode_num) && Number(a_mode_num) == 0) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    } else if (Number(b_mode_num) == Number(a_mode_num) && Number(a_mode_num) == 9) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    } else if (Number(b_mode_num) == Number(a_mode_num)) {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num] + "（同旋法移行）";
    } else {
        document.getElementById("result_modulation").innerHTML
            = "【転調の種類】<br><br>" + modulation_type[modulation_num];
    };
};

//転調元から転調先を表示するための関数(転調の間隔)
function keychange() {

    note_number = document.getElementById("note").value;
    mode_number = document.getElementById("mode").value;
    after_mode_number = document.getElementById("after_mode").value;

    answer = Number(note_number) - Number(mode_number);
    sf_zore = mod((answer - 0), 12);
    s_one = mod((answer - 5), 12);
    f_one = mod((answer - 7), 12);
    s_two = mod((answer - 10), 12);
    f_two = mod((answer - 2), 12);
    s_three = mod((answer - 3), 12);
    f_three = mod((answer - 9), 12);
    s_four = mod((answer - 8), 12);
    f_four = mod((answer - 4), 12);
    s_five = mod((answer - 1), 12);
    f_five = mod((answer - 11), 12);
    sf_six = mod((answer - 6), 12);

    answer = Number(note_number) - Number(mode_number) + Number(after_mode_number);
    note_sf_zore = mod((answer + 0), 12);
    note_s_one = mod((answer + 7), 12);
    note_f_one = mod((answer + 5), 12);
    note_s_two = mod((answer + 2), 12);
    note_f_two = mod((answer + 10), 12);
    note_s_three = mod((answer + 9), 12);
    note_f_three = mod((answer + 3), 12);
    note_s_four = mod((answer + 4), 12);
    note_f_four = mod((answer + 8), 12);
    note_s_five = mod((answer + 11), 12);
    note_f_five = mod((answer + 1), 12);
    note_sf_six = mod((answer + 6), 12);

    if (sf_zore == 0 || sf_zore == 2 || sf_zore == 4 || sf_zore == 6 || sf_zore == 7 || sf_zore == 9 || sf_zore == 11) {
        document.getElementById("result_origin").innerHTML
            = "転調元のキー：" + sharp_note_name[note_number] + " " + mode_name[mode_number] + " " + sharp_key_signature[sf_zore];
    } else {
        document.getElementById("result_origin").innerHTML
            = "転調元のキー：" + flat_note_name[note_number] + " " + mode_name[mode_number] + " " + flat_key_signature[sf_zore];
    };

    if (s_one == 0 || s_one == 2 || s_one == 4 || s_one == 6 || s_one == 7 || s_one == 9 || s_one == 11) {
        document.getElementById("result_s_1").innerHTML
            = "#+1の転調先：" + sharp_note_name[note_s_one] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_one];
    } else {
        document.getElementById("result_s_1").innerHTML
            = "#+1の転調先：" + flat_note_name[note_s_one] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_one];
    };

    if (f_one == 0 || f_one == 2 || f_one == 4 || f_one == 6 || f_one == 7 || f_one == 9 || f_one == 11) {
        document.getElementById("result_f_1").innerHTML
            = "♭+1の転調先：" + sharp_note_name[note_f_one] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_one];
    } else {
        document.getElementById("result_f_1").innerHTML
            = "♭+1の転調先：" + flat_note_name[note_f_one] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_one];
    };

    if (s_two == 0 || s_two == 2 || s_two == 4 || s_two == 6 || s_two == 7 || s_two == 9 || s_two == 11) {
        document.getElementById("result_s_2").innerHTML
            = "#+2の転調先：" + sharp_note_name[note_s_two] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_two];
    } else {
        document.getElementById("result_s_2").innerHTML
            = "#+2の転調先：" + flat_note_name[note_s_two] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_two];
    };

    if (f_two == 0 || f_two == 2 || f_two == 4 || f_two == 6 || f_two == 7 || f_two == 9 || f_two == 11) {
        document.getElementById("result_f_2").innerHTML
            = "♭+2の転調先：" + sharp_note_name[note_f_two] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_two];
    } else {
        document.getElementById("result_f_2").innerHTML
            = "♭+2の転調先：" + flat_note_name[note_f_two] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_two];
    };

    if (s_three == 0 || s_three == 2 || s_three == 4 || s_three == 6 || s_three == 7 || s_three == 9 || s_three == 11) {
        document.getElementById("result_s_3").innerHTML
            = "#+3の転調先：" + sharp_note_name[note_s_three] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_three];
    } else {
        document.getElementById("result_s_3").innerHTML
            = "#+3の転調先：" + flat_note_name[note_s_three] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_three];
    };

    if (f_three == 0 || f_three == 2 || f_three == 4 || f_three == 6 || f_three == 7 || f_three == 9 || f_three == 11) {
        document.getElementById("result_f_3").innerHTML
            = "♭+3の転調先：" + sharp_note_name[note_f_three] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_three];
    } else {
        document.getElementById("result_f_3").innerHTML
            = "♭+3の転調先：" + flat_note_name[note_f_three] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_three];
    };

    if (s_four == 0 || s_four == 2 || s_four == 4 || s_four == 6 || s_four == 7 || s_four == 9 || s_four == 11) {
        document.getElementById("result_s_4").innerHTML
            = "#+4の転調先：" + sharp_note_name[note_s_four] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_four];
    } else {
        document.getElementById("result_s_4").innerHTML
            = "#+4の転調先：" + flat_note_name[note_s_four] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_four];
    };

    if (f_four == 0 || f_four == 2 || f_four == 4 || f_four == 6 || f_four == 7 || f_four == 9 || f_four == 11) {
        document.getElementById("result_f_4").innerHTML
            = "♭+4の転調先：" + sharp_note_name[note_f_four] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_four];
    } else {
        document.getElementById("result_f_4").innerHTML
            = "♭+4の転調先：" + flat_note_name[note_f_four] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_four];
    };

    if (s_five == 0 || s_five == 2 || s_five == 4 || s_five == 6 || s_five == 7 || s_five == 9 || s_five == 11) {
        document.getElementById("result_s_5").innerHTML
            = "#+5の転調先：" + sharp_note_name[note_s_five] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[s_five];
    } else {
        document.getElementById("result_s_5").innerHTML
            = "#+5の転調先：" + flat_note_name[note_s_five] + " " + mode_name[after_mode_number] + " " + flat_key_signature[s_five];
    };

    if (f_five == 0 || f_five == 2 || f_five == 4 || f_five == 6 || f_five == 7 || f_five == 9 || f_five == 11) {
        document.getElementById("result_f_5").innerHTML
            = "♭+5の転調先：" + sharp_note_name[note_f_five] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[f_five];
    } else {
        document.getElementById("result_f_5").innerHTML
            = "♭+5の転調先：" + flat_note_name[note_f_five] + " " + mode_name[after_mode_number] + " " + flat_key_signature[f_five];
    };

    if (sf_six == 0 || sf_six == 2 || sf_six == 4 || sf_six == 6 || sf_six == 7 || sf_six == 9 || sf_six == 11) {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6の転調先：" + sharp_note_name[note_sf_six] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[sf_six];
    } else {
        document.getElementById("result_sf_6").innerHTML
            = "#・♭+6の転調先：" + flat_note_name[note_sf_six] + " " + mode_name[after_mode_number] + " " + flat_key_signature[sf_six];
    };

    if (Number(mode_number) == Number(after_mode_number)) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：";
    } else if (sf_zore == 0 || sf_zore == 2 || sf_zore == 4 || sf_zore == 6 || sf_zore == 7 || sf_zore == 9 || sf_zore == 11) {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：" + sharp_note_name[note_sf_zore] + " " + mode_name[after_mode_number] + " " + sharp_key_signature[sf_zore];
    } else {
        document.getElementById("result_sf_zero").innerHTML
            = "#・♭+0(平行調)：" + flat_note_name[note_sf_zore] + " " + mode_name[after_mode_number] + " " + flat_key_signature[sf_zore];
    };

};

//コードネームを切り替えるための関数(ダイアトニック・コード)
function Chordschange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    tonic_note_number = Number(document.getElementById("tonic_note").value);

    tonic = mod(tonic_note_number + 0, 12);
    t1 = mod(tonic_note_number + 1, 12);
    t2 = mod(tonic_note_number + 2, 12);
    t3 = mod(tonic_note_number + 3, 12);
    t4 = mod(tonic_note_number + 4, 12);
    t5 = mod(tonic_note_number + 5, 12);
    t6 = mod(tonic_note_number + 6, 12);
    t7 = mod(tonic_note_number + 7, 12);
    t8 = mod(tonic_note_number + 8, 12);
    t9 = mod(tonic_note_number + 9, 12);
    t10 = mod(tonic_note_number + 10, 12);
    t11 = mod(tonic_note_number + 11, 12);

    if (tonic_note_number == 0
        || tonic_note_number == 2
        || tonic_note_number == 4
        || tonic_note_number == 6
        || tonic_note_number == 7
        || tonic_note_number == 9
        || tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} Harmonic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} Melodic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} Harmonic Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[21]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[22]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[23]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[24]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[25]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[26]['diaChord4']}`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[27]['diaChord4']}`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} Melodic Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[28]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[20]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[15]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][21]} ${scale_Container[17]['diaChord4']}`;

    //同種短調を判定する
    para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, 12);
    t1 = mod(para_tonic_note_number + 1, 12);
    t2 = mod(para_tonic_note_number + 2, 12);
    t3 = mod(para_tonic_note_number + 3, 12);
    t4 = mod(para_tonic_note_number + 4, 12);
    t5 = mod(para_tonic_note_number + 5, 12);
    t6 = mod(para_tonic_note_number + 6, 12);
    t7 = mod(para_tonic_note_number + 7, 12);
    t8 = mod(para_tonic_note_number + 8, 12);
    t9 = mod(para_tonic_note_number + 9, 12);
    t10 = mod(para_tonic_note_number + 10, 12);
    t11 = mod(para_tonic_note_number + 11, 12);

    if (para_tonic_note_number == 0
        || para_tonic_note_number == 2
        || para_tonic_note_number == 4
        || para_tonic_note_number == 6
        || para_tonic_note_number == 7
        || para_tonic_note_number == 9
        || para_tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}`;


    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} Harmonic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} Melodic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_MMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_6").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}`;
    document.getElementById("Para_MMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}`;

    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 0;

};

//コードネームをモードスケール併記に切り替えるための関数(ダイアトニック・コード)
function ChordsAndModeChange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    tonic_note_number = Number(document.getElementById("tonic_note").value);

    tonic = mod(tonic_note_number + 0, 12);
    t1 = mod(tonic_note_number + 1, 12);
    t2 = mod(tonic_note_number + 2, 12);
    t3 = mod(tonic_note_number + 3, 12);
    t4 = mod(tonic_note_number + 4, 12);
    t5 = mod(tonic_note_number + 5, 12);
    t6 = mod(tonic_note_number + 6, 12);
    t7 = mod(tonic_note_number + 7, 12);
    t8 = mod(tonic_note_number + 8, 12);
    t9 = mod(tonic_note_number + 9, 12);
    t10 = mod(tonic_note_number + 10, 12);
    t11 = mod(tonic_note_number + 11, 12);

    if (tonic_note_number == 0
        || tonic_note_number == 2
        || tonic_note_number == 4
        || tonic_note_number == 6
        || tonic_note_number == 7
        || tonic_note_number == 9
        || tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    ScaleLanguage = 'JapaneseName';

    document.getElementById("Major_dia").innerHTML = `${noteNames[tonic][SOF]} Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Major_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br>${scale_Container[0][ScaleLanguage]}`;
    document.getElementById("Major_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br>${scale_Container[1][ScaleLanguage]}`;
    document.getElementById("Major_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br>${scale_Container[2][ScaleLanguage]}`;
    document.getElementById("Major_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br>${scale_Container[3][ScaleLanguage]}`;
    document.getElementById("Major_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br>${scale_Container[4][ScaleLanguage]}`;
    document.getElementById("Major_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br>${scale_Container[5][ScaleLanguage]}`;
    document.getElementById("Major_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br>${scale_Container[6][ScaleLanguage]}`;

    document.getElementById("Rel_HMin_dia").innerHTML = `${noteNames[t9][SOF]} Harmonic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br>${scale_Container[9][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br>${scale_Container[10][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br>${scale_Container[11][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br>${scale_Container[12][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br>${scale_Container[13][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br>${scale_Container[7][ScaleLanguage]}`;
    document.getElementById("Rel_HMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br>${scale_Container[8][ScaleLanguage]}`;

    document.getElementById("Rel_MMin_dia").innerHTML = `${noteNames[t9][SOF]} Melodic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMin_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}<br>${scale_Container[16][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}<br>${scale_Container[17][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}<br>${scale_Container[18][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_4").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}<br>${scale_Container[19][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_5").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}<br>${scale_Container[20][ScaleLanguage]}<br><br>${noteNames[t8][16]} ${scale_Container[60]['diaChord4']}<br>${scale_Container[60][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_6").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}<br>${scale_Container[14][ScaleLanguage]}`;
    document.getElementById("Rel_MMin_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}<br>${scale_Container[15][ScaleLanguage]}`;

    document.getElementById("Rel_HMaj_dia").innerHTML = `${noteNames[tonic][SOF]} Harmonic Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_HMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[21]['diaChord4']}<br>${scale_Container[21][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[22]['diaChord4']}<br>${scale_Container[22][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[23]['diaChord4']}<br>${scale_Container[23][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[24]['diaChord4']}<br>${scale_Container[24][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[25]['diaChord4']}<br>${scale_Container[25][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[26]['diaChord4']}<br>${scale_Container[26][ScaleLanguage]}`;
    document.getElementById("Rel_HMaj_dia_7").innerHTML = `${noteNames[t11][22]} ${scale_Container[27]['diaChord4']}<br>${scale_Container[27][ScaleLanguage]}`;

    document.getElementById("Rel_MMaj_dia").innerHTML = `${noteNames[tonic][SOF]} Melodic Major：${sharp_key_signature[tonic]}`;
    document.getElementById("Rel_MMaj_dia_1").innerHTML = `${noteNames[tonic][2]} ${scale_Container[28]['diaChord4']}<br>${scale_Container[28][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_2").innerHTML = `${noteNames[t2][5]} ${scale_Container[19]['diaChord4']}<br>${scale_Container[19][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_3").innerHTML = `${noteNames[t4][9]} ${scale_Container[20]['diaChord4']}<br>${scale_Container[20][ScaleLanguage]}<br><br>${noteNames[t4][9]} ${scale_Container[60]['diaChord4']}<br>${scale_Container[60][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_4").innerHTML = `${noteNames[t5][12]} ${scale_Container[14]['diaChord4']}<br>${scale_Container[14][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_5").innerHTML = `${noteNames[t7][15]} ${scale_Container[15]['diaChord4']}<br>${scale_Container[15][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_6").innerHTML = `${noteNames[t8][17]} ${scale_Container[16]['diaChord4']}<br>${scale_Container[16][ScaleLanguage]}`;
    document.getElementById("Rel_MMaj_dia_7").innerHTML = `${noteNames[t10][19]} ${scale_Container[17]['diaChord4']}<br>${scale_Container[17][ScaleLanguage]}`;

    //同種短調を判定する
    para_tonic_note_number = tonic_note_number + 3;

    tonic = mod(para_tonic_note_number + 0, 12);
    t1 = mod(para_tonic_note_number + 1, 12);
    t2 = mod(para_tonic_note_number + 2, 12);
    t3 = mod(para_tonic_note_number + 3, 12);
    t4 = mod(para_tonic_note_number + 4, 12);
    t5 = mod(para_tonic_note_number + 5, 12);
    t6 = mod(para_tonic_note_number + 6, 12);
    t7 = mod(para_tonic_note_number + 7, 12);
    t8 = mod(para_tonic_note_number + 8, 12);
    t9 = mod(para_tonic_note_number + 9, 12);
    t10 = mod(para_tonic_note_number + 10, 12);
    t11 = mod(para_tonic_note_number + 11, 12);

    if (para_tonic_note_number == 0
        || para_tonic_note_number == 2
        || para_tonic_note_number == 4
        || para_tonic_note_number == 6
        || para_tonic_note_number == 7
        || para_tonic_note_number == 9
        || para_tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = `${noteNames[t9][18]} Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_Minor_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[5]['diaChord4']}<br>${scale_Container[5][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[6]['diaChord4']}<br>${scale_Container[6][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[0]['diaChord4']}<br>${scale_Container[0][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[1]['diaChord4']}<br>${scale_Container[1][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[2]['diaChord4']}<br>${scale_Container[2][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[3]['diaChord4']}<br>${scale_Container[3][ScaleLanguage]}`;
    document.getElementById("Para_Minor_dia_7").innerHTML = `${noteNames[t7][15]} ${scale_Container[4]['diaChord4']}<br>${scale_Container[4][ScaleLanguage]}`;


    document.getElementById("Para_HMin_dia").innerHTML = `${noteNames[t9][18]} Harmonic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_HMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[7]['diaChord4']}<br>${scale_Container[7][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[8]['diaChord4']}<br>${scale_Container[6][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[9]['diaChord4']}<br>${scale_Container[9][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[10]['diaChord4']}<br>${scale_Container[10][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[11]['diaChord4']}<br>${scale_Container[11][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_6").innerHTML = `${noteNames[t5][12]} ${scale_Container[12]['diaChord4']}<br>${scale_Container[12][ScaleLanguage]}`;
    document.getElementById("Para_HMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[13]['diaChord4']}<br>${scale_Container[13][ScaleLanguage]}`;

    document.getElementById("Para_MMin_dia").innerHTML = `${noteNames[t9][18]} Melodic Minor：${sharp_key_signature[tonic]}`;
    document.getElementById("Para_MMin_dia_1").innerHTML = `${noteNames[t9][18]} ${scale_Container[14]['diaChord4']}<br>${scale_Container[14][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_2").innerHTML = `${noteNames[t11][22]} ${scale_Container[15]['diaChord4']}<br>${scale_Container[15][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_3").innerHTML = `${noteNames[tonic][2]} ${scale_Container[16]['diaChord4']}<br>${scale_Container[16][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_4").innerHTML = `${noteNames[t2][5]} ${scale_Container[17]['diaChord4']}<br>${scale_Container[17][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_5").innerHTML = `${noteNames[t4][9]} ${scale_Container[18]['diaChord4']}<br>${scale_Container[18][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_6").innerHTML = `${noteNames[t6][13]} ${scale_Container[19]['diaChord4']}<br>${scale_Container[19][ScaleLanguage]}`;
    document.getElementById("Para_MMin_dia_7").innerHTML = `${noteNames[t8][16]} ${scale_Container[20]['diaChord4']}<br>${scale_Container[20][ScaleLanguage]}<br><br>${noteNames[t8][16]} ${scale_Container[60]['diaChord4']}<br>${scale_Container[60][ScaleLanguage]}`;

    document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 1;

};

//ディグリーネームで表示するための関数(ダイアトニック・コード)
document.getElementById("degree_button"); function degree() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    document.getElementById("Major_dia").innerHTML = "Ⅰ Major";
    document.getElementById("Major_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Major_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Major_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Major_dia_4").innerHTML = "Ⅳ Maj7";
    document.getElementById("Major_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Major_dia_6").innerHTML = "Ⅵ m7";
    document.getElementById("Major_dia_7").innerHTML = "Ⅶ m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = "Ⅵ Harmonic Minor";
    document.getElementById("Rel_HMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = "Ⅳ m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = "Ⅶ dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = "Ⅱ m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = "Ⅵ Melodic Minor";
    document.getElementById("Rel_MMin_dia_1").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = "Ⅳ 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = "Ⅶ m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = "Ⅱ m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = "Ⅰ Harmonic Major";
    document.getElementById("Rel_HMaj_dia_1").innerHTML = "Ⅰ Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = "Ⅲ m7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = "Ⅰ Melodic Major";
    document.getElementById("Rel_MMaj_dia_1").innerHTML = "Ⅰ 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = "Ⅲ m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = "Ⅳ mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = "♭Ⅵ augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_Minor_dia").innerHTML = "Ⅰ Minor";
    document.getElementById("Para_Minor_dia_1").innerHTML = "Ⅰ m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = "♭Ⅲ Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = "Ⅴ m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = "♭Ⅶ 7";

    document.getElementById("Para_HMin_dia").innerHTML = "Ⅰ Harmonic Minor";
    document.getElementById("Para_HMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = "Ⅱ m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = "Ⅳ m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = "♭Ⅵ Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = "Ⅶ dim7";

    document.getElementById("Para_MMin_dia").innerHTML = "Ⅰ Melodic Minor";
    document.getElementById("Para_MMin_dia_1").innerHTML = "Ⅰ mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = "Ⅱ m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = "♭Ⅲ augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = "Ⅳ 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = "Ⅴ 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = "Ⅵ m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = "Ⅶ m7(♭5)";

    document.getElementById("degree_button").className = "btn btn-success box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

};

//ダイアトニック・コードの着色をリセットする関数(ダイアトニック・コード)
function paintDiatonicChordsReset() {
    diaNum = 1;
    for (let i = 1; i < 8; i++) {
        document.getElementById(`Major_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Rel_HMin_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Rel_MMin_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Rel_HMaj_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Rel_MMaj_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Para_Minor_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Para_HMin_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        document.getElementById(`Para_MMin_dia_${diaNum}`).className = "list-group-item col-xl text-center";
        diaNum = diaNum + 1;
    };
};

//ダイアトニック・コードのコードネームに対応する場所の色を変更する(ダイアトニック・コード)
document.getElementById("paint_diatonic_chords"); function paintDiatonicChords() {

    paintDiatonicChordsReset()
    paint_diatonic_chords = document.getElementById("paint_diatonic_chords").value;

    if (paint_diatonic_chords == 0) {
        paintDiatonicChordsReset()
    } else if (paint_diatonic_chords == 1) {
        //Maj7を着色
        document.getElementById("Major_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 2) {
        //m7を着色
        document.getElementById("Major_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 3) {
        //7を着色
        document.getElementById("Major_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        //ブルーに着色
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-info text-center";
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl list-group-item-info text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl list-group-item-info text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl list-group-item-info text-center";
    } else if (paint_diatonic_chords == 4) {
        //m7(♭5)を着色
        document.getElementById("Major_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 5) {
        //augMaj7を着色
        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 6) {
        //dim7を着色
        document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 7) {
        //mMaj7を着色
        document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 8) {
        //メジャー・トライアドを着色
        document.getElementById("Major_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        //------------------
        document.getElementById("Major_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 9) {
        //マイナー・トライアドを着色
        document.getElementById("Major_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        //------------------
        document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 10) {
        //ディミニッシュト・トライアドを着色
        document.getElementById("Major_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        //------------------
        document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 11) {
        //オーグメンテッド・トライアドを着色
        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
    };
};

let onoff_ChordsAndModeChange = [];

//調べたい主音切り替え関数(ダイアトニック・コード)
function ChordschangeAndChordsAndModeChange() {

    if (onoff_ChordsAndModeChange == 1) {
        onoff_ChordsAndModeChange = 1;
        document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        ChordsAndModeChange();

    } else if (onoff_ChordsAndModeChange == 0) {
        onoff_ChordsAndModeChange = 0;
        document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        Chordschange();
    };
};

