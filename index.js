
//常に正の数の答えを返す剰余演算をする関数 (負の数の剰余演算を処理するため)
function mod(n, m) {
    return ((n % m) + m) % m;
}

// 四捨五入して小数点第3位までを表示する関数 (JavaScriptには元からそういう関数が無いっぽいので)
function roundToThree(num) {
    return +(Math.round(num + "e+3") + "e-3");
}

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


//英・米式音名の多次元配列
const noteNames =
    [['C', 'C', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'C'],
    ['C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'C#/D♭'],
    ['D', 'D', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'D'],
    ['D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'D#', 'D#', 'D#/E♭'],
    ['E', 'E', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D𝄪', 'E', 'E', 'D𝄪', 'E'],
    ['F', 'F', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'F', 'E#', 'E#', 'F'],
    ['F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'E𝄪', 'F#/G♭'],
    ['G', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'A𝄫', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'G'],
    ['G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'G#', 'G#', 'G#/A♭'],
    ['A', 'A', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'A', 'A', 'G𝄪', 'A', 'A', 'A', 'B𝄫', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'A', 'A', 'G𝄪', 'A'],
    ['A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'A#', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'A#', 'A#', 'A#/B♭'],
    ['B', 'B', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'A𝄪', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'A𝄪', 'B']];

//旋法名を配列に格納する。
const mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];
const after_mode_name = ["Major", "", "Dorian", "", "Phrygian", "Lydian", "", "Mixolydian", "", "Minor", "", "Locrian"];

//調号の数を配列に格納する。
const key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#・♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];

const sharp_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(#×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const flat_key_signature = ["(#・♭×0)", "(♭×5)", "(#×2)", "(♭×3)", "(#×4)", "(♭×1)", "(♭×6)", "(#×1)", "(♭×4)", "(#×3)", "(♭×2)", "(#×5)"];
const modulation_type = ["#・♭+0", "♭+5", "#+2", "♭+3", "#+4", "♭+1", "#・♭+6", "#+1", "♭+4", "#+3", "♭+2", "#+5"];

scale_Container =
    //メジャー・スケールファミリー
    [{ EnglishName: "Major/Ionian", JapaneseName: "メジャー/アイオニアン", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], addNum: 0, ForteNumber: "7-35", Info: "長音階。最もポピュラーな音階。モーダルな文脈では、「アイオニアン・モード」。", Mode: "", Adjustment: 0 },
    { EnglishName: "Dorian", JapaneseName: "ドリアン", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-35", Info: "", Mode: "メジャー・スケールの第2モードです。", Adjustment: 0 },
    { EnglishName: "Phrygian", JapaneseName: "フリジアン", diaChord4: "m7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-35", Info: "", Mode: "メジャー・スケールの第3モードです。", Adjustment: 0 },
    { EnglishName: "Lydian", JapaneseName: "リディアン", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-35", Info: "", Mode: "メジャー・スケールの第4モードです。", Adjustment: 0 },
    { EnglishName: "Mixolydian", JapaneseName: "ミクソリディアン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0], addNum: 7, ForteNumber: "7-35", Info: "", Mode: "メジャー・スケールの第5モードです。", Adjustment: 0 },
    { EnglishName: "Natural Minor/Aeolian", JapaneseName: "ナチュラル・マイナー/エオリアン", diaChord4: "m7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0], addNum: 9, ForteNumber: "7-35", Info: "自然的短音階。モーダルな文脈では、「エオリアン・モード」。", Mode: "メジャー・スケールの第6モードです。", Adjustment: 0 },
    { EnglishName: "Locrian", JapaneseName: "ロクリアン", diaChord4: "m7(♭5)", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], addNum: 11, ForteNumber: "7-35", Info: "", Mode: "メジャー・スケールの第7モードです。", Adjustment: 0 },

    //ハーモニック・マイナースケールファミリー
    { EnglishName: "Harmonic Minor", JapaneseName: "ハーモニック・マイナー", diaChord4: "mMaj7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1], addNum: 9, ForteNumber: "7-32", Info: "和声的短音階。短調の主和音への終止感を得るためのスケールです。", Mode: "", Adjustment: -9 },
    { EnglishName: "Locrian ♮6", JapaneseName: "ロクリアン♮6", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0], addNum: 11, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第2モードです。", Adjustment: -9 },
    { EnglishName: "Ionian #5", JapaneseName: "アイオニアン・オーギュメント", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], addNum: 0, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第3モードです。", Adjustment: -9 },
    { EnglishName: "Dorian #4", JapaneseName: "ドリアン#4", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第4モードです。", Adjustment: -9 },
    { EnglishName: "Phrygian Dominant", JapaneseName: "フリジアン・ドミナント", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-32", Info: "「ハーモニック・マイナー・パーフェクト・フィフス・ビロウ(Hmp5↓)」とも。", Mode: "ハーモニック・マイナーの第5モードです。", Adjustment: -9 },
    { EnglishName: "Lydian ♯2", JapaneseName: "リディアン#2", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第6モードです。", Adjustment: -9 },
    { EnglishName: "Ultra Locrian", JapaneseName: "ウルトラ・ロクリアン", diaChord4: "dim7", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0], addNum: 8, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・マイナーの第7モードです。", Adjustment: -9 },

    //メロディック・マイナースケールファミリー
    { EnglishName: "Melodic Minor", JapaneseName: "メロディック・マイナー", diaChord4: "mMaj7", diaChord3: "m", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1], addNum: 9, ForteNumber: "7-34", Info: "旋律的短音階。ハーモニック・マイナーのメロディとしての違和感を軽減するためのスケール。<br>基本的にはスケールを下行する時は、自然的短音階に変化させます。", Mode: "", Adjustment: -9 },
    { EnglishName: "Dorian ♭2", JapaneseName: "ドリアン♭2", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0], addNum: 11, ForteNumber: "7-34", Info: "", Mode: "メロディック・マイナーの第2モードです。", Adjustment: -9 },
    { EnglishName: "Lydian Augmented", JapaneseName: "リディアン・オーギュメント", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], addNum: 0, ForteNumber: "7-34", Info: "", Mode: "メロディック・マイナーの第3モードです。", Adjustment: -9 },
    { EnglishName: "Lydian Dominant ", JapaneseName: "リディアン・ドミナント", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-34", Info: "「リディアン♭7」とも。", Mode: "メロディック・マイナーの第4モードです。", Adjustment: -9 },
    { EnglishName: "Mixolydian ♭6", JapaneseName: "ミクソリディアン♭6", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-34", Info: "ハーモニック・メジャーと同じ構成音を持ちます。", Mode: "メロディック・マイナーの第5モードです。", Adjustment: -9 },
    { EnglishName: "Locrian ♮2", JapaneseName: "ロクリアン♮2", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0], addNum: 6, ForteNumber: "7-34", Info: "", Mode: "", Adjustment: -9 },
    { EnglishName: "Super Locrian", JapaneseName: "スーパー・ロクリアン", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0], addNum: 8, ForteNumber: "7-34", Info: "オルタード・スケールと同じ構成音を持ちます。", Mode: "メロディック・マイナーの第7モードです。", Adjustment: -9 },

    //ハーモニック・メジャースケールファミリー
    { EnglishName: "Harmonic Major", JapaneseName: "ハーモニック・メジャー", diaChord4: "Maj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1], addNum: 0, ForteNumber: "7-32", Info: "和声的長音階。", Mode: "", Adjustment: 0 },
    { EnglishName: "Dorian ♭5", JapaneseName: "ドリアン♭5", diaChord4: "m7(♭5)", diaChord3: "m(♭5)", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0], addNum: 2, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第2モードです。", Adjustment: 0 },
    { EnglishName: "Phrygian ♭4", JapaneseName: "フリジアン♭4", diaChord4: "m7", diaChord3: "m", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "7-32", Info: "ドミナント・セブンスコード上で使用可能です。", Mode: "ハーモニック・メジャーの第3モードです。", Adjustment: 0 },
    { EnglishName: "Lydian ♭3", JapaneseName: "リディアン♭3", diaChord4: "mMaj7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1], addNum: 5, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第4モードです。", Adjustment: 0 },
    { EnglishName: "Mixolydian ♭2", JapaneseName: "ミクソリディアン♭2", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0], addNum: 7, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第5モードです。", Adjustment: 0 },
    { EnglishName: "Lydian ♯2 ♯5", JapaneseName: "リディアン♯2 ♯5", diaChord4: "augMaj7", diaChord3: "aug", ScaleNumBinary: [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1], addNum: 10, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第6モードです。", Adjustment: 0 },
    { EnglishName: "Locrian ♭♭7", JapaneseName: "ロクリアン♭♭7", diaChord4: "dim7", diaChord3: "m(♭5)", ScaleNumBinary: [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0], addNum: 11, ForteNumber: "7-32", Info: "", Mode: "ハーモニック・メジャーの第7モードです。", Adjustment: 0 },

    //メロディック・メジャー
    { EnglishName: "Melodic Major", JapaneseName: "メロディック・メジャー", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0], addNum: 0, ForteNumber: "7-34", Info: "旋律的長音階。「ミクソリディアン♭6」と同じ構成音を持ちます。", Mode: "メロディック・マイナーの第5モードでもあります。", Adjustment: -5 },

    //ダブル・ハーモニック
    { EnglishName: "Double Harmonic", JapaneseName: "ダブル・ハーモニック", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1], addNum: 4, ForteNumber: "7-22", Info: "「フラメンコ・モード」や、「アラビック・スケール」などとも呼ばれます。", Mode: "", Adjustment: -4 },
    { EnglishName: "Lydian ♯2 ♯6", JapaneseName: "リディアン♯2 ♯6", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], addNum: 5, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第2モードです。", Adjustment: -4 },
    { EnglishName: "Ultraphrygian", JapaneseName: "ウルトラ・フリジアン", diaChord4: "m6", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], addNum: 8, ForteNumber: "7-22", Info: "「フリジアン♭♭7 ♭4」とも。", Mode: "ダブル・ハーモニックの第3モードです。", Adjustment: -4 },
    { EnglishName: "Hungarian minor", JapaneseName: "ハンガリアン・マイナー", diaChord4: "m△7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1], addNum: 9, ForteNumber: "7-22", Info: "「Algerian」、「Egyptian」などとも。", Mode: "ダブル・ハーモニックの第4モードです。", Adjustment: -4 },
    { EnglishName: "Oriental", JapaneseName: "オリエンタル", diaChord4: "Fr+6", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0], addNum: 11, ForteNumber: "7-22", Info: "「Asian」、「ミクソリディアン♭5 ♭2」、「ロクリアン♮6 ♮3」とも。", Mode: "ダブル・ハーモニックの第5モードです。", Adjustment: -4 },
    { EnglishName: "Ionian ♯5 ♯2", JapaneseName: "アイオニアン♯5 ♯2", diaChord4: "aug△7", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1], addNum: 0, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第6モードです。", Adjustment: -4 },
    { EnglishName: "Locrian double ♭♭3 ♭♭7", JapaneseName: "ロクリアン・ダブル♭♭3 ♭♭7", diaChord4: "△7", diaChord3: "", ScaleNumBinary: [1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0], addNum: 3, ForteNumber: "7-22", Info: "", Mode: "ダブル・ハーモニックの第7モードです。", Adjustment: -4 },

    //ペンタ
    { EnglishName: "Major pentatonic", JapaneseName: "メジャー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0], addNum: 0, ForteNumber: "5-35", Info: "もっとも基本的な5音階です。<br>「ヨナ抜き長音階」とも。", Mode: "", Adjustment: 0 },
    { EnglishName: "Suspeed Pentatonic", JapaneseName: "陽音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 2, ForteNumber: "5-35", Info: "「楽調子」や「青葉調子」とも。", Mode: "メジャー・ペンタトニックの第2モードです。", Adjustment: 0 },
    { EnglishName: "Blues Minor", JapaneseName: "ブルース・マイナー", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0], addNum: 4, ForteNumber: "5-35", Info: "", Mode: "メジャー・ペンタトニックの第3モードです。", Adjustment: 0 },
    { EnglishName: "Ritsu", JapaneseName: "律音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0], addNum: 7, ForteNumber: "5-35", Info: "古くは雅楽で用いられる音階です。", Mode: "メジャー・ペンタトニックの第4モードです。", Adjustment: 0 },
    { EnglishName: "Minor pentatonic", JapaneseName: "マイナー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 9, ForteNumber: "5-35", Info: "「ニロ抜き短音階」とも。", Mode: "メジャー・ペンタトニックの第5モードです。", Adjustment: 0 },

    //和風スケール
    { EnglishName: "Insen", JapaneseName: "陰音階-上行系 ", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0], addNum: 4, ForteNumber: "5-29", Info: "宮城道雄-『春の海』などで用いられる和風な音階です。<br>「都節-上行形」、「半岩戸調子」、「古今調子」とも。", Mode: "", Adjustment: -5 },
    { EnglishName: "Raga Hindol", JapaneseName: "ラーガ・ヒンドル", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1], addNum: 5, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第2モードです。", Adjustment: -5 },
    { EnglishName: "Han Nakazora", JapaneseName: "半中空調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0], addNum: 9, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第3モードです。", Adjustment: -5 },
    { EnglishName: "Niju Kumoi", JapaneseName: "二重雲井調子 ", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0], addNum: 11, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第4モードです。", Adjustment: -5 },
    { EnglishName: "Dorian Pentatonic", JapaneseName: "秋風調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], addNum: 2, ForteNumber: "5-29", Info: "", Mode: "陰音階-下行形の第5モードです。「雲井ペンタトニック」とも。", Adjustment: -5 },

    { EnglishName: "In/Sakura pentatonic", JapaneseName: "陰音階-下行形", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0], addNum: 4, ForteNumber: "5-20", Info: "古謡「さくらさくら」などで用いられる和風な音階です。<br>「都節-下行形」、「平調子」、「平巾十調子」とも。", Mode: "", Adjustment: -4 },
    { EnglishName: "Lydian Pentatonic", JapaneseName: "リディアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1], addNum: 5, ForteNumber: "5-20", Info: "", Mode: "陰音階-下行形の第2モードです。", Adjustment: -4 },
    { EnglishName: "Aeolian Pentatonic", JapaneseName: "エオリアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0], addNum: 9, ForteNumber: "5-20", Info: "「ヨナ抜き短音階」とも。", Mode: "陰音階-下行形の第3モードです", Adjustment: -4 },
    { EnglishName: "Iwato Scale", JapaneseName: "本雲井調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], addNum: 11, ForteNumber: "5-20", Info: "「雲井巾十調子」とも。", Mode: "陰音階-下行形の第4モードです。", Adjustment: -4 },
    { EnglishName: "Locrian Pentatonic", JapaneseName: "ロクリアン・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1], addNum: 0, ForteNumber: "5-20", Info: "", Mode: "陰音階-下行形の第5モードです。", Adjustment: -4 },

    { EnglishName: "Ionian Pentatonic", JapaneseName: "琉球音階", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1], addNum: 0, ForteNumber: "5-20", Info: "「沖縄音階」、「ニロ抜き長音階」とも。", Mode: "", Adjustment: 0 },

    { EnglishName: "Sylimic", JapaneseName: "雲井調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "6-18", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Koptimic", JapaneseName: "中空調子", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0], addNum: 4, ForteNumber: "6-Z25", Info: "", Mode: "", Adjustment: 0 },

    //ブルース
    { EnglishName: "Blues Major pentatonic", JapaneseName: "ブルース・メジャー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0], addNum: 0, ForteNumber: "6-Z47", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Blues Minor pentatonic", JapaneseName: "ブルース・マイナー・ペンタトニック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0], addNum: 9, ForteNumber: "6-Z47", Info: "", Mode: "", Adjustment: 0 },
    { EnglishName: "Blues note scale", JapaneseName: "ブルー・ノート・スケール", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1], addNum: 0, ForteNumber: "10-5", Info: "メジャー・スケールに、ジャズやブルースで用いられるブルーノート(♭3,♭5,♭7)を全て入れ込んだスケール。", Mode: "", Adjustment: 0 },

    //その他のスケール
    { EnglishName: "Spanish Phrygian", JapaneseName: "スパニッシュ・フリジアン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0], addNum: 4, ForteNumber: "8-26", Info: "スパニッシュな雰囲気が出ます。「スパニッシュ8ノート」とも。", Mode: "", Adjustment: 0 },
    { EnglishName: "Half-Whole Diminished", JapaneseName: "ハーフ・ホール・ディミニッシュ", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], addNum: 0, ForteNumber: "8-28", Info: "半音と全音の繰り返しからなるスケール。<br>日本では「コンビネーション・オブ・ディミニッシュ(コンディミ)」とも呼ばれます。", Mode: "", Adjustment: 0 },
    { EnglishName: "Diminished", JapaneseName: "ディミニッシュ", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], addNum: 0, ForteNumber: "8-28", Info: "全音と半音の繰り返しからなるスケール。<br>ウィレム・ペイペルが使用したことから「Pijper's Scale」などとも呼ばれます。", Mode: "", Adjustment: 0 },
    { EnglishName: "Altered", JapaneseName: "オルタード", diaChord4: "7(omit5)", diaChord3: "(omit5)", ScaleNumBinary: [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0], addNum: 8, ForteNumber: "7-34", Info: "オルタード・テンションをまとめたスケールです。「スーパー・ロクリアン」と同じ構成音を持ちます。", Mode: "メロディック・マイナーの第7モードです。", Adjustment: -9 },
    { EnglishName: "Whole Tone", JapaneseName: "ホール・トーン", diaChord4: "7", diaChord3: "", ScaleNumBinary: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], addNum: 7, ForteNumber: "6-35", Info: "「全音音階」とも。オクターブを6等分したスケール。全てが全音で構成されています。", Mode: "", Adjustment: 0 },
    { EnglishName: "Chromatic", JapaneseName: "クロマチック", diaChord4: "", diaChord3: "", ScaleNumBinary: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], addNum: 0, ForteNumber: "12-1", Info: "「半音階」とも。", Mode: "", Adjustment: 0 }
    ];


//音名の表示形式を英米式/イタリア式/日本式/ドイツ式に切り替える関数
function ChangeEIJG() {
    root_number = document.getElementById("rootNumber").value;
    key_signature_names = document.getElementById("key_signature_names").value;

    num = 0;
    for (let i = 0; i < 12; i++) {
        document.getElementById(`chord_${num}`).innerHTML = EIJG[key_signature_names][mod(Number(root_number) + num, 12)];
        num = num + 1;
    };
};

//スケールの選択肢を表示するためのHTML要素(option)を追加するための関数
function createScaleChoices() {

    //スケールを格納した配列の長さを取得する。
    length = scale_Container.length;
    Num = scale_Container.length;
    ScaleLanguage = "JapaneseName"

    //配列の数だけスケールの選択肢optionを追加する。
    for (let i = 0; i < length; i++) {
        Num = Num - 1;
        HTML_Info = document.getElementById("constituent_binary");
        if (Num == 0) {
            //メジャースケールを初期の選択肢にする。
            HTML_Info.insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('')}-${Num} selected>${scale_Container[Num][ScaleLanguage]}</option>`);
        } else {
            HTML_Info.insertAdjacentHTML('afterbegin', `<option value=${scale_Container[Num]['ScaleNumBinary'].join('')}-${Num}>${scale_Container[Num][ScaleLanguage]}</option>`);
        };
    };
};


//スケールの調号を計算する
function scaleKeySignature() {

    ChangeEIJG();

    //scale_Container配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //scale_Container配列を検索用の値
    Num = value[1];

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    scale_binary_split = value[0].split('');
    scale_binary_reverse = scale_binary_split.reverse();
    scale_binary_rejoin = scale_binary_reverse.join("");
    scale_dec = parseInt(scale_binary_rejoin, 2);

    //トニックの数値を取得する。
    scale_tonic_num = document.getElementById("rootNumber").value;

    KeySignatureNum = mod(Number(scale_tonic_num) - scale_Container[Num]["addNum"], 12)
    scaleFamilyNum = mod(Number(scale_tonic_num) - scale_Container[Num]["addNum"] - scale_Container[Num]["Adjustment"], 12)

    //調号が#か♭かを判定する。
    if (KeySignatureNum == 0 || KeySignatureNum == 2 || KeySignatureNum == 4 || KeySignatureNum == 6 || KeySignatureNum == 7 || KeySignatureNum == 9 || KeySignatureNum == 11) {
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
        = `English : ${noteNames[scale_tonic_num][SOF]} ${scale_Container[Num]['EnglishName']} <br>日本語 : ${noteNames[scale_tonic_num][SOF]} ${scale_Container[Num]['JapaneseName']}`;

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
    if (scale_Container[Num]["diaChord4"] == "7") {
        document.getElementById("dominant_chord_text").innerHTML = `${noteNames[scale_tonic_num][SOF]}7 (ドミナント・セブンスコード)上で使用可能です。`;
    } else if (scale_dec == 1371) {
        document.getElementById("dominant_chord_text").innerHTML = `「スーパー・ロクリアン」ではなく「オルタード・スケール」として解釈する場合は、${flat_note_name[scale_tonic_num]}7 (ドミナント・セブンスコード)上で使用可能です。`;
    } else {
        document.getElementById("dominant_chord_text").innerHTML = "";
    };

    //フォルテナンバーを表示
    document.getElementById("Forte_number_text").innerHTML
        = `<br>Forte number：「${scale_Container[Num]["ForteNumber"]}」`;

    //スケールナンバーを表示
    document.getElementById("Scale_number_text").innerHTML
        = `Scale number：「${scale_dec}」`;

    //構成音を着色
    NoteNameColoring()
};

//オンオフ状態を格納する配列
let onoff = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
function createCandidate() {
    Num = 0
    //スケールを格納した配列の長さを取得する。
    length = scale_Container.length

    //配列の数だけHTML要素(div)を追加する。
    for (let i = 0; i < length; i++) {
        HTML_Info = document.getElementById("addHTML");
        // HTML_Info.insertAdjacentHTML('beforebegin','<div>BeforeBegin</div>');
        HTML_Info.insertAdjacentHTML('beforebegin', `<div class="" id="modal_text_${Num}"></div>`);
        Num = Num + 1;
    };
};

//モーダル・インターチェンジの候補をディグリー表記で表示する関数
function modalCandidateDegree() {

    if (0 == onoff[0] && 0 == onoff[1] && 0 == onoff[2] && 0 == onoff[3] && 0 == onoff[4] && 0 == onoff[5] &&
        0 == onoff[6] && 0 == onoff[7] && 0 == onoff[8] && 0 == onoff[9] && 0 == onoff[10] && 0 == onoff[11]) {
        Num = 0
        length = scale_Container.length
        for (let i = 0; i < length; i++) {
            document.getElementById(`modal_text_${Num}`).innerHTML = `Ⅰ ${scale_Container[Num][ScaleLanguage]}`;
            Num = Num + 1;
        };
    } else {
        modalTextAndNoteCreate();
    };

};

//モーダル・インターチェンジの候補を表示する関数
function modalTextCreate() {
    //音名の表記を切り替える関数
    ChangeEIJG();
    //スケールを表示するためのHTML要素(div)を追加するための関数
    createCandidate()

    sig0 = document.getElementById("rootNumber").value

    Num = 0
    length = scale_Container.length
    for (let i = 0; i < length; i++) {
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
            if (mod(sig0 - scale_Container[Num]['addNum'], 12) == 0 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 2 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 4 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 6 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 7 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 9 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 11) {
                document.getElementById(`modal_text_${Num}`).innerHTML = `${sharp_note_name[sig0]} ${scale_Container[Num][ScaleLanguage]} ${sharp_key_signature[mod(sig0 - scale_Container[Num]['addNum'], 12)]}`;
            } else {
                document.getElementById(`modal_text_${Num}`).innerHTML = `${flat_note_name[sig0]} ${scale_Container[Num][ScaleLanguage]} ${flat_key_signature[mod(sig0 - scale_Container[Num]['addNum'], 12)]}`;
            };
        } else {
            document.getElementById(`modal_text_${Num}`).innerHTML = "";
            document.getElementById(`modal_text_${Num}`).className = "";
        };
        Num = Num + 1;
    };

    //モーダル・インターチェンジの候補をディグリー表記で表示する関数
    modalCandidateDegree()
};

//スケールの情報を格納する配列
let note = [];
//モーダル・インターチェンジの候補をスケールの構成音とともに表示する関数
function modalTextAndNoteCreate() {
    //音名の表記を切り替える関数
    ChangeEIJG();
    //スケールを表示するためのHTML要素(div)を追加するための関数
    createCandidate()

    //ルート音の情報を取得する。
    sig0 = Number(document.getElementById("rootNumber").value);
    //スケールを表示する言語の情報を取得する。
    sigNameNum = Number(document.getElementById("modalCandidateSelect").value);

    Num = 0
    //スケール情報を格納した連想配列の長さを取得する。
    length = scale_Container.length

    for (let i = 0; i < length; i++) {
        //配列を空にする。
        note.splice(0);
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
            //シャープとフラットの区別をする変数SOF
            if (mod(sig0 - scale_Container[Num]['addNum'], 12) == 0 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 2 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 4 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 6 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 7 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 9 || mod(sig0 - scale_Container[Num]['addNum'], 12) == 11) {
                SOF = 0;
            } else {
                SOF = 1;
            };
            //スケールの構成音のバイナリを配列に格納する。
            scale = scale_Container[Num]['ScaleNumBinary']
            //for文でスケールの構成音を生成する。
            for (let i = 0; i < 12; i++) {
                if (scale[i] == 1) {
                    //音名をの言語を選択・スケールをトニックから・#か♭か選んで取り出す。
                    note.push(EIJG2[sigNameNum][mod(sig0 + i, 12)][SOF]);
                } else {
                };
            };
            //スケールの情報をHTMLに書き込む。
            document.getElementById(`modal_text_${Num}`).innerHTML
                = `${noteNames[sig0][SOF]} ${scale_Container[Num][ScaleLanguage]} ${sharp_key_signature[mod(sig0 - scale_Container[Num]['addNum'], 12)]}　. . .　【${note.join("-")}】`;
        } else {
            document.getElementById(`modal_text_${Num}`).innerHTML = "";
            document.getElementById(`modal_text_${Num}`).className = "";
        };
        Num = Num + 1;
    };
    ChangeEIJG()
};


//スケールの日本語・英語表記を切り替えるスイッチ
let ScaleLanguage = 'JapaneseName';
let ScaleLanguageNum = 1;
function ScaleLanguageJE() {
    if (ScaleLanguageNum == 0) {
        ScaleLanguage = 'JapaneseName';
        document.getElementById("scale_language_change_button").className = "btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum == 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").className = "btn btn-danger box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 0;
    };
    //モーダル・インターチェンジの候補を表示する関数
    modalTextCreate()
    //モードの構成音の表示・非表示の切り替え
    modalCandidateSelect()
};

//モードの構成音の表示・非表示の切り替え
function modalCandidateSelect() {
    //言語の情報を取得する。
    modalSelectNum = Number(document.getElementById("modalCandidateSelect").value);
    //言語表示なしの場合 又は 音名が選択されていないとき
    if (modalSelectNum == 4 || (0 == onoff[0] && 0 == onoff[1] && 0 == onoff[2] && 0 == onoff[3] && 0 == onoff[4] && 0 == onoff[5] &&
        0 == onoff[6] && 0 == onoff[7] && 0 == onoff[8] && 0 == onoff[9] && 0 == onoff[10] && 0 == onoff[11])) {
        modalTextCreate()
    } else {
        modalTextAndNoteCreate()
    };
};

//構成音を着色
function NoteNameColoring() {
    //コードネームのドロップダウンリストのvalueを取得し、「-」で分割する。
    value = document.getElementById("constituent_binary").value.split('-');

    //スケールを判定するバイナリ
    onoff = value[0].split('');

    Num = 0
    for (let i = 0; i < 12; i++) {
        if (onoff[Num] == 1) {
            document.getElementById(`chord_${Num}`).className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
        } else if (onoff[Num] == 0) {
            document.getElementById(`chord_${Num}`).className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
        };
        Num = Num + 1;
    };
};

//コードネームの構成音と、そのコード上で使えるスケールを表示する関数
function ChordNoteSwitch() {
    //構成音を着色
    NoteNameColoring()

    //モーダル・インターチェンジの候補を表示する関数
    modalTextCreate()

    Num = 0
    for (let i = 0; i < 12; i++) {
        if (onoff[Num] == "1") {
            onoff[Num] = 1;
        } else {
            onoff[Num] = 0;
        };
        Num = Num + 1;
    };

    //モードの構成音の表示・非表示の切り替え
    modalCandidateSelect()
};

//モーダル・インターチェンジ判定用のスイッチ
function noteSwitch(Num) {
    if (onoff[Num] == 0) {
        onoff[Num] = 1;
        document.getElementById(`chord_${Num}`).className = "list-group-item col-4 list-group-item-danger col-xl text-center py-3";
    } else if (onoff[Num] == 1) {
        onoff[Num] = 0;
        document.getElementById(`chord_${Num}`).className = "list-group-item col-4 list-group-item-secondary col-xl text-center py-3";
    };
    modalTextCreate()
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
        b_SharpOrFlat = 0;
    } else {
        b_SharpOrFlat = 1;
    };

    //転調前のキーと調号を表示
    document.getElementById("result_b_key").innerHTML
        = "-転調前-<br><br>" + noteNames[b_note_num][b_SharpOrFlat] + " " + mode_name[b_mode_num] + " " + flat_key_signature[b_key_num];

    //転調後のキーと調号を表示
    if (a_key_num == 0 || a_key_num == 2 || a_key_num == 4 || a_key_num == 6 || a_key_num == 7 || a_key_num == 9 || a_key_num == 11) {
        a_SharpOrFlat = 0;
    } else {
        a_SharpOrFlat = 1;
    };

    //転調後のキーと調号を表示
    document.getElementById("result_a_key").innerHTML
        = "-転調後-<br><br>" + noteNames[a_note_num][a_SharpOrFlat] + " " + mode_name[a_mode_num] + " " + flat_key_signature[a_key_num];

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


//転調元から転調先を表示するための関数
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
    ["内なる敵", "Ⅳ-Ⅵm-Ⅰm-Ⅴ/Ⅱ-♭Ⅶm/♭Ⅱ-Ⅳ/Ⅰ-Ⅶdim7-Ⅲ7/#Ⅴ", "参考曲：Dream Theater - The Enemy Inside"],
    ["335号室", "Ⅳ△7-Ⅰadd9/Ⅲ-Ⅱm7-Ⅲm7", "参考曲：Larry Carlton - ROOM 335"],
    ["ゲーム音楽の香り", "Ⅳ△7-Ⅲm7-♭Ⅲ△7-Ⅱm7", "△7とm7を繰り返して半音ずつ下がっていく形。"],
    ["レアキャラ", "Ⅳ△7-Ⅲm7-♭Ⅲdim7-Ⅱm7", "このパッシング・ディミニッシュはあまり出てこない印象。"],
    ["丸サ進行", "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅰ7", "「Just The Two Of Us進行」とも。新たな時代で「J-Popの王」の座を狙っている。"],
    ["オシャレ", "Ⅳ△7-Ⅲ7-Ⅵm7-Ⅱ7", "丸サ進行とはひと味違うオシャレさ。"],
    ["リディアン", "Ⅳ-Ⅴ/Ⅳ", "リディアン・モードを取り入れたい時に。"],
    ["メロウな王道進行", "Ⅳ△7-Ⅴ7/Ⅳ-Ⅲm7-Ⅵm7", "「王道進行」に、さらに砂糖を振りかけた感じ。"],
    ["チンダル現象みがある", "Ⅳ△7-Ⅳm7-Ⅲm7-Ⅵ7", "穏やかな昼下がりみたいな流れ。"],
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
    ["ミスティックな質感", "Ⅵm-Ⅳm-Ⅵm-Ⅰm", "非現実な空間を想起させるような響き。"],
    ["ディストピア", "Ⅵm-Ⅶ-Ⅱm-Ⅲ", "不穏な感じを出したいときに。"],
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
    ["モダン・メタルの住人", "Ⅵ5add9-Ⅳ5add9-♭Ⅲ5add9-Ⅰ5add9", "5add9は、モダン・メタル界隈のギターフレーズに欠かせない響き。"],
    ["ドリアン", "Ⅱm-Ⅲm/Ⅱ-Ⅳ/Ⅱ-Ⅲm/Ⅱ", "ドリアン・モードを取り入れたい時に。"],
    ["ミクソリディアン", "Ⅴ-Ⅳ-Ⅰ-Ⅴ", "ミクソリディアン・モードを取り入れたい時に。"],
    ["スペイン旅行", "Ⅲ-Ⅳ-Ⅴ-Ⅳ", "このコード進行の上でⅢスパニッシュ・フリジアンを使えば、「正解」がそこに現れる。"],
    ];

let firstNum = 0;
let secondNum = 0;
let num = 0;

//変化記号を決定する
let SOF = 0;
//調べたいキーを決定する
let = 0;

//スケールを表示するためのHTML要素(div)を追加するための関数
function chordCandidate() {

    //スケールを格納した配列の長さを取得する。
    chordProgOne_length = chordProgOne.length
    chordProgFour_length = chordProgFour.length
    chordProgSix_length = chordProgSix.length
    chordProgEight_length = chordProgEight.length

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
        Num = Num - 1;
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
        Num = Num - 1;
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
        Num = Num - 1;
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
        Num = Num - 1;
    };
};


//コード進行をディグリーネームで表示する関数
function changeChordProgressionDegree() {

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
    document.getElementById("degree_button").className = "btn btn-success box1 col-8 col-md-6 col-xl-4 m-3";
    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-8 col-md-6 col-xl-4 m-3";
};

//コード進行を切り替える関数
function changeChordProgression() {

    rootNumber = document.getElementById("rootNumber").value;

    c = mod(Number(rootNumber) - 0, 12);
    cisdes = mod(Number(rootNumber) + 1, 12);
    d = mod(Number(rootNumber) + 2, 12);
    dises = mod(Number(rootNumber) + 3, 12);
    e = mod(Number(rootNumber) + 4, 12);
    f = mod(Number(rootNumber) + 5, 12);
    fisges = mod(Number(rootNumber) + 6, 12);
    g = mod(Number(rootNumber) + 7, 12);
    gisas = mod(Number(rootNumber) + 8, 12);
    a = mod(Number(rootNumber) + 9, 12);
    aisb = mod(Number(rootNumber) + 10, 12);
    h = mod(Number(rootNumber) + 11, 12);

    //異名同音がシャープかフラットかを判定する
    if (rootNumber == 0 || rootNumber == 2 || rootNumber == 4 || rootNumber == 6 || rootNumber == 7 || rootNumber == 9 || rootNumber == 11) {
        SOF = 0;
    } else {
        SOF = 1
    };

    //Ⅰ始まりのコード進行
    document.getElementById("chordProg1-1").innerHTML = `${noteNames[c][2]} - ${noteNames[f][11]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-2").innerHTML = `${noteNames[c][2]} - ${noteNames[f][11]} - ${noteNames[a][17]}m - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-3").innerHTML = `${noteNames[c][2]} - ${noteNames[g][14]} - ${noteNames[a][17]}m - ${noteNames[f][11]}`;
    document.getElementById("chordProg1-4").innerHTML = `${noteNames[c][2]} - ${noteNames[g][14]} - ${noteNames[f][11]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-5").innerHTML = `${noteNames[c][2]} - ${noteNames[g][14]} - ${noteNames[a][17]}m - ${noteNames[e][8]}m - ${noteNames[f][11]} - ${noteNames[c][2]} - ${noteNames[d][5]}m - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-6").innerHTML = `${noteNames[c][2]} - ${noteNames[g][14]}/${noteNames[h][20]} - ${noteNames[a][17]}m - ${noteNames[e][8]}m/${noteNames[g][14]} - ${noteNames[f][11]} - ${noteNames[c][2]}/${noteNames[e][8]} - ${noteNames[d][5]}m - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-7").innerHTML = `${noteNames[c][2]} - ${noteNames[h][20]}m7(♭5) - ${noteNames[e][8]}7 - ${noteNames[a][17]}m7`;
    document.getElementById("chordProg1-8").innerHTML = `${noteNames[c][2]} - ${noteNames[a][17]}m - ${noteNames[f][11]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-9").innerHTML = `${noteNames[c][2]} - ${noteNames[e][8]}m/${noteNames[h][20]} - ${noteNames[a][17]}m - ${noteNames[f][11]}`;
    document.getElementById("chordProg1-10").innerHTML = `${noteNames[c][2]} - ${noteNames[e][8]} - ${noteNames[a][17]}ｍ - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-11").innerHTML = `${noteNames[c][2]} - ${noteNames[d][5]}m7 - ${noteNames[c][2]}/${noteNames[e][8]} - ${noteNames[f][11]}`;
    document.getElementById("chordProg1-12").innerHTML = `${noteNames[c][2]} - ${noteNames[gisas][16]} - ${noteNames[aisb][19]} - ${noteNames[gisas][16]}`;
    document.getElementById("chordProg1-13").innerHTML = `${noteNames[c][2]}add9 - ${noteNames[a][17]}m7 - ${noteNames[g][14]} - ${noteNames[f][11]}`;
    document.getElementById("chordProg1-14").innerHTML = `${noteNames[c][2]} - ${noteNames[c][2]}aug - ${noteNames[c][2]}6 - ${noteNames[c][2]}7`;
    document.getElementById("chordProg1-15").innerHTML = `${noteNames[c][2]} - ${noteNames[c][2]}aug/${noteNames[fisges][12]} - ${noteNames[f][11]}△7 - ${noteNames[g][14]}`;
    document.getElementById("chordProg1-16").innerHTML = `${noteNames[c][2]}△7 - ${noteNames[cisdes][3]}dim7 - ${noteNames[d][5]}m7 - ${noteNames[g][14]}7`;
    document.getElementById("chordProg1-17").innerHTML = `${noteNames[c][2]}sus4 - ${noteNames[c][2]}sus4/${noteNames[cisdes][4]} - ${noteNames[c][2]}sus4/${noteNames[dises][7]} - ${noteNames[c][2]}sus4/${noteNames[f][11]} - ${noteNames[c][2]}sus4/${noteNames[g][14]}`;
    document.getElementById("chordProg1-18").innerHTML = `${noteNames[c][2]} - ${noteNames[g][14]}/${noteNames[c][2]} - ${noteNames[f][11]}/${noteNames[c][2]} - ${noteNames[gisas][16]}/${noteNames[c][2]} - ${noteNames[aisb][19]}/${noteNames[c][2]}`;
    document.getElementById("chordProg1-19").innerHTML = `${noteNames[c][2]} - ${noteNames[cisdes][4]}/${noteNames[c][2]} - ${noteNames[d][5]}/${noteNames[c][2]} - ${noteNames[dises][7]}/${noteNames[c][2]} - ${noteNames[e][8]}/${noteNames[c][2]}`;
    document.getElementById("chordProg1-20").innerHTML = `${noteNames[c][2]}7 - ${noteNames[f][11]}7 - ${noteNames[c][2]}7 - ${noteNames[f][11]}7 - ${noteNames[g][14]}7 - ${noteNames[f][11]}7 - ${noteNames[c][2]}7 - ${noteNames[g][14]}7`;

    //Ⅳ始まりのコード進行
    document.getElementById("chordProg4-1").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[e][8]}m - ${noteNames[a][17]}m`;
    document.getElementById("chordProg4-2").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[a][17]}m - ${noteNames[c][2]}`;
    document.getElementById("chordProg4-3").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[c][2]} - ${noteNames[e][8]}`;
    document.getElementById("chordProg4-4").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[gisas][15]}m(♭5) - ${noteNames[a][17]}m`;
    document.getElementById("chordProg4-5").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[gisas][16]} - ${noteNames[aisb][19]}`;
    document.getElementById("chordProg4-6").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[a][17]}`;
    document.getElementById("chordProg4-7").innerHTML = `${noteNames[f][11]} - ${noteNames[c][2]} - ${noteNames[g][14]} - ${noteNames[a][17]}m`;
    document.getElementById("chordProg4-8").innerHTML = `${noteNames[f][11]} - ${noteNames[fisges][12]}m(♭5) - ${noteNames[g][14]} - ${noteNames[gisas][15]}m(♭5)`;
    document.getElementById("chordProg4-9").innerHTML = `${noteNames[f][11]} - ${noteNames[a][17]}m - ${noteNames[c][2]}m - ${noteNames[g][14]}/${noteNames[d][5]} - ${noteNames[aisb][19]}m/${noteNames[cisdes][4]} - ${noteNames[f][11]}/${noteNames[c][2]} - ${noteNames[h][20]}dim7 - ${noteNames[e][8]}7/${noteNames[gisas][15]}`;
    document.getElementById("chordProg4-10").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[c][2]}add9/${noteNames[e][8]} - ${noteNames[d][5]}m7 - ${noteNames[e][8]}m7`;
    document.getElementById("chordProg4-11").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[e][8]}m7 - ${noteNames[dises][7]}△7 - ${noteNames[d][5]}m7`;
    document.getElementById("chordProg4-12").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[e][8]}m7 - ${noteNames[dises][7]}dim7 - ${noteNames[d][5]}m7`;
    document.getElementById("chordProg4-13").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[e][8]}7 - ${noteNames[a][17]}m7 - ${noteNames[c][2]}7`;
    document.getElementById("chordProg4-14").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[e][8]}7 - ${noteNames[a][17]}m7 - ${noteNames[d][5]}7`;
    document.getElementById("chordProg4-15").innerHTML = `${noteNames[f][11]} - ${noteNames[g][14]}/${noteNames[f][11]}`;
    document.getElementById("chordProg4-16").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[g][14]}7/${noteNames[f][11]} - ${noteNames[e][8]}m7 - ${noteNames[a][17]}m7`;
    document.getElementById("chordProg4-17").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[f][11]}m7 - ${noteNames[e][8]}m7 - ${noteNames[a][17]}7`;
    document.getElementById("chordProg4-18").innerHTML = `${noteNames[f][11]}△7 - ${noteNames[h][20]}m7(♭5)/${noteNames[f][11]} - ${noteNames[e][8]}m7 - ${noteNames[e][8]}dim7 - ${noteNames[d][5]}m7 - ${noteNames[g][14]}7/${noteNames[d][5]} - ${noteNames[c][2]}Maj7 - ${noteNames[c][2]}6`;

    //Ⅵ始まりのコード進行
    document.getElementById("chordProg6-1").innerHTML = `${noteNames[a][17]}m - ${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg6-2").innerHTML = `${noteNames[a][17]}m - ${noteNames[f][11]} - ${noteNames[c][2]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg6-3").innerHTML = `${noteNames[a][17]}m - ${noteNames[g][14]} - ${noteNames[f][11]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg6-4").innerHTML = `${noteNames[a][17]}m - ${noteNames[g][14]} - ${noteNames[f][11]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg6-5").innerHTML = `${noteNames[a][17]}m - ${noteNames[c][2]} - ${noteNames[g][14]} - ${noteNames[f][11]}`;
    document.getElementById("chordProg6-6").innerHTML = `${noteNames[a][17]}m - ${noteNames[gisas][15]}aug - ${noteNames[c][2]}/${noteNames[g][14]} - ${noteNames[fisges][12]}m7(♭5)`;
    document.getElementById("chordProg6-7").innerHTML = `${noteNames[a][17]}m9 - ${noteNames[d][5]}m7 - ${noteNames[e][8]}m7`;
    document.getElementById("chordProg6-8").innerHTML = `${noteNames[a][17]}m - ${noteNames[d][5]}m - ${noteNames[g][14]} - ${noteNames[c][2]} - ${noteNames[g][14]}/${noteNames[h][20]}`;
    document.getElementById("chordProg6-9").innerHTML = `${noteNames[a][17]}m - ${noteNames[d][5]}m - ${noteNames[e][8]} - ${noteNames[a][17]}m`;
    document.getElementById("chordProg6-10").innerHTML = `${noteNames[a][17]}m - ${noteNames[d][5]}m - ${noteNames[g][14]} - ${noteNames[c][2]} - ${noteNames[f][11]} - ${noteNames[h][20]}m(♭5) - ${noteNames[e][8]}`;
    document.getElementById("chordProg6-11").innerHTML = `${noteNames[a][17]}m - ${noteNames[d][5]}m7 - ${noteNames[f][11]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg6-12").innerHTML = `${noteNames[a][17]}m - ${noteNames[g][14]}/${noteNames[a][17]} - ${noteNames[f][11]}/${noteNames[a][17]} - ${noteNames[e][8]}m/${noteNames[a][17]}`;
    document.getElementById("chordProg6-13").innerHTML = `${noteNames[a][17]}m - ${noteNames[g][14]}/${noteNames[h][20]} - ${noteNames[c][2]} - ${noteNames[d][5]}m - ${noteNames[e][8]}sus4 - ${noteNames[e][8]}`;
    document.getElementById("chordProg6-14").innerHTML = `${noteNames[a][17]}m - ${noteNames[f][11]}/${noteNames[a][17]} - ${noteNames[fisges][12]}m(♭5)/${noteNames[a][17]} - ${noteNames[a][17]}m7`;
    document.getElementById("chordProg6-15").innerHTML = `${noteNames[a][17]}m - ${noteNames[e][8]}7/${noteNames[gisas][15]} - ${noteNames[f][11]}△7 - ${noteNames[d][5]}m9 - ${noteNames[g][14]}sus4 - ${noteNames[g][14]}`;
    document.getElementById("chordProg6-16").innerHTML = `${noteNames[a][17]}m - ${noteNames[e][8]}/${noteNames[gisas][15]} - ${noteNames[a][17]}7/${noteNames[g][14]} - ${noteNames[d][5]}m/${noteNames[f][11]} - ${noteNames[f][11]}7 - ${noteNames[e][8]}/${noteNames[gisas][15]} `;
    document.getElementById("chordProg6-17").innerHTML = `${noteNames[a][17]}m - ${noteNames[f][11]}7 - ${noteNames[e][8]}7`;
    document.getElementById("chordProg6-18").innerHTML = `${noteNames[a][17]}m - ${noteNames[f][11]}m - ${noteNames[a][17]}m - ${noteNames[c][2]}m`;
    document.getElementById("chordProg6-19").innerHTML = `${noteNames[a][17]}m - ${noteNames[h][20]} - ${noteNames[d][5]}m - ${noteNames[e][8]}`;
    document.getElementById("chordProg6-20").innerHTML = `${noteNames[a][17]}m - ${noteNames[fisges][12]}m7(♭5) - ${noteNames[f][11]}△7 - ${noteNames[d][5]}m7 - ${noteNames[e][8]}m7`;

    //その他のコード進行
    document.getElementById("chordProg8-1").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[g][14]}7 - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-2").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[cisdes][4]}7 - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-3").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[f][11]}/${noteNames[g][14]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-4").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[f][11]}m/${noteNames[g][14]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-5").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[f][11]}dim/${noteNames[g][14]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-6").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[f][11]}aug/${noteNames[g][14]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-7").innerHTML = `${noteNames[f][11]}m7 - ${noteNames[aisb][19]}7 - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-8").innerHTML = `${noteNames[g][14]}m7 - ${noteNames[c][2]}7 - ${noteNames[f][11]}`;
    document.getElementById("chordProg8-9").innerHTML = `${noteNames[h][20]}m7 - ${noteNames[e][8]}7 - ${noteNames[a][17]}m`;
    document.getElementById("chordProg8-10").innerHTML = `${noteNames[h][20]}m7(♭5) - ${noteNames[e][8]}7 - ${noteNames[a][17]}m`;
    document.getElementById("chordProg8-11").innerHTML = `${noteNames[d][5]}m7(♭5) - ${noteNames[cisdes][4]}/${noteNames[f][11]} - ${noteNames[f][11]}dim/${noteNames[h][20]} - ${noteNames[c][2]}`;
    document.getElementById("chordProg8-12").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[g][14]}7 - ${noteNames[c][2]}△7 - ${noteNames[a][17]}7`;
    document.getElementById("chordProg8-13").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[e][8]}m7 - ${noteNames[f][11]}△7 - ${noteNames[g][14]}`;
    document.getElementById("chordProg8-14").innerHTML = `${noteNames[d][5]}m7 - ${noteNames[e][8]}m7 - ${noteNames[f][11]}m7 - ${noteNames[g][14]}m7`;
    document.getElementById("chordProg8-15").innerHTML = `${noteNames[e][8]}m7 - ${noteNames[a][17]}m7/${noteNames[e][8]} - ${noteNames[d][5]}m7 - ${noteNames[g][14]}7/${noteNames[d][5]}`;
    document.getElementById("chordProg8-16").innerHTML = `${noteNames[fisges][12]}m7(♭5) - ${noteNames[f][11]}△7 - ${noteNames[e][8]}m7 - ${noteNames[a][17]}m7`;
    document.getElementById("chordProg8-17").innerHTML = `${noteNames[a][17]}5add9 - ${noteNames[f][11]}5add9 - ${noteNames[dises][7]}5add9 - ${noteNames[c][2]}5add9`;
    document.getElementById("chordProg8-18").innerHTML = `${noteNames[d][5]}m - ${noteNames[e][8]}m/${noteNames[d][5]} - ${noteNames[f][11]}/${noteNames[d][5]} - ${noteNames[e][8]}m/${noteNames[d][5]}`;
    document.getElementById("chordProg8-19").innerHTML = `${noteNames[g][14]} - ${noteNames[f][11]} - ${noteNames[c][2]} - ${noteNames[g][14]}`;
    document.getElementById("chordProg8-20").innerHTML = `${noteNames[e][8]} - ${noteNames[f][11]} - ${noteNames[g][14]} - ${noteNames[f][11]}`;

    //ボタンの色を変える
    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-8 col-md-6 col-xl-4 m-3";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-8 col-md-6 col-xl-4 m-3";
};


//コードネームを切り替えるための関数(ダイアトニックコード)
document.getElementById("tonic_note"); function Chordschange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = document.getElementById("tonic_note").value;

    let tonic = mod(Number(tonic_note_number) + 0, 12);
    let t1 = mod(Number(tonic_note_number) + 1, 12);
    let t2 = mod(Number(tonic_note_number) + 2, 12);
    let t3 = mod(Number(tonic_note_number) + 3, 12);
    let t4 = mod(Number(tonic_note_number) + 4, 12);
    let t5 = mod(Number(tonic_note_number) + 5, 12);
    let t6 = mod(Number(tonic_note_number) + 6, 12);
    let t7 = mod(Number(tonic_note_number) + 7, 12);
    let t8 = mod(Number(tonic_note_number) + 8, 12);
    let t9 = mod(Number(tonic_note_number) + 9, 12);
    let t10 = mod(Number(tonic_note_number) + 10, 12);
    let t11 = mod(Number(tonic_note_number) + 11, 12);

    if (tonic_note_number == 0 || tonic_note_number == 2 || tonic_note_number == 4 || tonic_note_number == 6 || tonic_note_number == 7 || tonic_note_number == 9 || tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Major_dia").innerHTML = noteNames[tonic][SOF] + " Major：" + sharp_key_signature[tonic];
    document.getElementById("Major_dia_1").innerHTML = noteNames[tonic][2] + " Maj7";
    document.getElementById("Major_dia_2").innerHTML = noteNames[t2][5] + " m7";
    document.getElementById("Major_dia_3").innerHTML = noteNames[t4][8] + " m7";
    document.getElementById("Major_dia_4").innerHTML = noteNames[t5][11] + " Maj7";
    document.getElementById("Major_dia_5").innerHTML = noteNames[t7][14] + " 7";
    document.getElementById("Major_dia_6").innerHTML = noteNames[t9][17] + " m7";
    document.getElementById("Major_dia_7").innerHTML = noteNames[t11][20] + " m7(♭5)";

    document.getElementById("Rel_HMin_dia").innerHTML = noteNames[t9][SOF] + " Harmonic Minor：" + sharp_key_signature[tonic];
    document.getElementById("Rel_HMin_dia_1").innerHTML = noteNames[tonic][2] + " augMaj7";
    document.getElementById("Rel_HMin_dia_2").innerHTML = noteNames[t2][5] + " m7";
    document.getElementById("Rel_HMin_dia_3").innerHTML = noteNames[t4][8] + " 7";
    document.getElementById("Rel_HMin_dia_4").innerHTML = noteNames[t5][11] + " Maj7";
    document.getElementById("Rel_HMin_dia_5").innerHTML = noteNames[t8][15] + " dim7";
    document.getElementById("Rel_HMin_dia_6").innerHTML = noteNames[t9][17] + " mMaj7";
    document.getElementById("Rel_HMin_dia_7").innerHTML = noteNames[t11][20] + " m7(♭5)";

    document.getElementById("Rel_MMin_dia").innerHTML = noteNames[t9][SOF] + " Melodic Minor：" + sharp_key_signature[tonic];
    document.getElementById("Rel_MMin_dia_1").innerHTML = noteNames[tonic][2] + " augMaj7";
    document.getElementById("Rel_MMin_dia_2").innerHTML = noteNames[t2][5] + " 7";
    document.getElementById("Rel_MMin_dia_3").innerHTML = noteNames[t4][8] + " 7";
    document.getElementById("Rel_MMin_dia_4").innerHTML = noteNames[t6][12] + " m7(♭5)";
    document.getElementById("Rel_MMin_dia_5").innerHTML = noteNames[t8][15] + " m7(♭5)";
    document.getElementById("Rel_MMin_dia_6").innerHTML = noteNames[t9][17] + " mMaj7";
    document.getElementById("Rel_MMin_dia_7").innerHTML = noteNames[t11][20] + " m7";

    document.getElementById("Rel_HMaj_dia").innerHTML = noteNames[tonic][SOF] + " Harmonic Major：" + sharp_key_signature[tonic];
    document.getElementById("Rel_HMaj_dia_1").innerHTML = noteNames[tonic][2] + " Maj7";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = noteNames[t2][5] + " m7(♭5)";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = noteNames[t4][8] + " m7・7";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = noteNames[t5][11] + " mMaj7";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = noteNames[t7][14] + " 7";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = noteNames[t8][16] + " augMaj7";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = noteNames[t11][20] + " dim7";

    document.getElementById("Rel_MMaj_dia").innerHTML = noteNames[tonic][SOF] + "  Melodic Major：" + sharp_key_signature[tonic];
    document.getElementById("Rel_MMaj_dia_1").innerHTML = noteNames[tonic][2] + " 7";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = noteNames[t2][5] + " m7(♭5)";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = noteNames[t4][8] + " m7(♭5)";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = noteNames[t5][11] + " mMaj7";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = noteNames[t7][14] + " m7";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = noteNames[t8][16] + " augMaj7";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = noteNames[t10][19] + " 7";

    if (t3 == 0 || t3 == 2 || t3 == 4 || t3 == 6 || t3 == 7 || t3 == 9 || t3 == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = noteNames[tonic][SOF] + " Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_Minor_dia_1").innerHTML = noteNames[tonic][17] + " m7";
    document.getElementById("Para_Minor_dia_2").innerHTML = noteNames[t2][20] + " m7(♭5)";
    document.getElementById("Para_Minor_dia_3").innerHTML = noteNames[t3][2] + " Maj7";
    document.getElementById("Para_Minor_dia_4").innerHTML = noteNames[t5][5] + " m7";
    document.getElementById("Para_Minor_dia_5").innerHTML = noteNames[t7][8] + " m7";
    document.getElementById("Para_Minor_dia_6").innerHTML = noteNames[t8][11] + " Maj7";
    document.getElementById("Para_Minor_dia_7").innerHTML = noteNames[t10][14] + " 7";

    document.getElementById("Para_HMin_dia").innerHTML = noteNames[tonic][SOF] + " Harmonic Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_HMin_dia_1").innerHTML = noteNames[tonic][17] + " mMaj7";
    document.getElementById("Para_HMin_dia_2").innerHTML = noteNames[t2][20] + " m7(♭5)";
    document.getElementById("Para_HMin_dia_3").innerHTML = noteNames[t3][2] + " augMaj7";
    document.getElementById("Para_HMin_dia_4").innerHTML = noteNames[t5][5] + " m7";
    document.getElementById("Para_HMin_dia_5").innerHTML = noteNames[t7][8] + " 7";
    document.getElementById("Para_HMin_dia_6").innerHTML = noteNames[t8][11] + " Maj7";
    document.getElementById("Para_HMin_dia_7").innerHTML = noteNames[t11][15] + " dim7";

    document.getElementById("Para_MMin_dia").innerHTML = noteNames[tonic][SOF] + " Melodic Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_MMin_dia_1").innerHTML = noteNames[tonic][17] + " mMaj7";
    document.getElementById("Para_MMin_dia_2").innerHTML = noteNames[t2][20] + " m7";
    document.getElementById("Para_MMin_dia_3").innerHTML = noteNames[t3][2] + " augMaj7";
    document.getElementById("Para_MMin_dia_4").innerHTML = noteNames[t5][5] + " 7";
    document.getElementById("Para_MMin_dia_5").innerHTML = noteNames[t7][8] + " 7";
    document.getElementById("Para_MMin_dia_6").innerHTML = noteNames[t9][12] + " m7(♭5)";
    document.getElementById("Para_MMin_dia_7").innerHTML = noteNames[t11][15] + " m7(♭5)";

    document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 0;

};


//コードネームをモードスケール併記に切り替えるための関数(ダイアトニックコード)
document.getElementById("tonic_note"); function ChordsAndModeChange() {

    document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
    document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2"

    let tonic_note_number = document.getElementById("tonic_note").value;

    let tonic = mod(Number(tonic_note_number) + 0, 12);
    let t1 = mod(Number(tonic_note_number) + 1, 12);
    let t2 = mod(Number(tonic_note_number) + 2, 12);
    let t3 = mod(Number(tonic_note_number) + 3, 12);
    let t4 = mod(Number(tonic_note_number) + 4, 12);
    let t5 = mod(Number(tonic_note_number) + 5, 12);
    let t6 = mod(Number(tonic_note_number) + 6, 12);
    let t7 = mod(Number(tonic_note_number) + 7, 12);
    let t8 = mod(Number(tonic_note_number) + 8, 12);
    let t9 = mod(Number(tonic_note_number) + 9, 12);
    let t10 = mod(Number(tonic_note_number) + 10, 12);
    let t11 = mod(Number(tonic_note_number) + 11, 12);

    if (tonic_note_number == 0 || tonic_note_number == 2 || tonic_note_number == 4 || tonic_note_number == 6 || tonic_note_number == 7 || tonic_note_number == 9 || tonic_note_number == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Major_dia").innerHTML = noteNames[tonic][SOF] + " Major：" + sharp_key_signature[tonic];
    document.getElementById("Major_dia_1").innerHTML = noteNames[tonic][2] + " Maj7" + "<br>Ionian";
    document.getElementById("Major_dia_2").innerHTML = noteNames[t2][5] + " m7" + "<br>Dorian";
    document.getElementById("Major_dia_3").innerHTML = noteNames[t4][8] + " m7" + "<br>Phrygian";
    document.getElementById("Major_dia_4").innerHTML = noteNames[t5][11] + " Maj7" + "<br>Lydian";
    document.getElementById("Major_dia_5").innerHTML = noteNames[t7][14] + " 7" + "<br>Mixolydian";
    document.getElementById("Major_dia_6").innerHTML = noteNames[t9][17] + " m7" + "<br>Aeolian";
    document.getElementById("Major_dia_7").innerHTML = noteNames[t11][20] + " m7(♭5)" + "<br> Locrian";

    document.getElementById("Rel_HMin_dia").innerHTML = noteNames[t9][SOF] + " Harmonic Minor：" + sharp_key_signature[tonic];
    document.getElementById("Rel_HMin_dia_1").innerHTML = noteNames[tonic][2] + " augMaj7" + "<br>Ionian Augmented";
    document.getElementById("Rel_HMin_dia_2").innerHTML = noteNames[t2][5] + " m7" + "<br>Dorian #4th";
    document.getElementById("Rel_HMin_dia_3").innerHTML = noteNames[t4][8] + " 7" + "<br>Phrygian Dominant";
    document.getElementById("Rel_HMin_dia_4").innerHTML = noteNames[t5][11] + " Maj7" + "<br>Lydian ♯2nd";
    document.getElementById("Rel_HMin_dia_5").innerHTML = noteNames[t8][15] + " dim7" + "<br>Ultra Locrian";
    document.getElementById("Rel_HMin_dia_6").innerHTML = noteNames[t9][17] + " mMaj7" + "<br>Harmonic Minor";
    document.getElementById("Rel_HMin_dia_7").innerHTML = noteNames[t11][20] + " m7(♭5)" + "<br> Locrian ♮6th";

    document.getElementById("Rel_MMin_dia").innerHTML = noteNames[t9][SOF] + " Melodic Minor：" + sharp_key_signature[tonic];
    document.getElementById("Rel_MMin_dia_1").innerHTML = noteNames[tonic][2] + " augMaj7" + "<br>Lydian augmented";
    document.getElementById("Rel_MMin_dia_2").innerHTML = noteNames[t2][5] + " 7" + "<br>Lydian♭7th";
    document.getElementById("Rel_MMin_dia_3").innerHTML = noteNames[t4][8] + " 7" + "<br>Melodic Major";
    document.getElementById("Rel_MMin_dia_4").innerHTML = noteNames[t6][12] + " m7(♭5)" + "<br>Locrian ♮2nd";
    document.getElementById("Rel_MMin_dia_5").innerHTML = noteNames[t8][15] + " m7(♭5)" + "<br>Super Locrian<br><br>" + noteNames[t8][15] + "7(omit5)<br>Altered";
    document.getElementById("Rel_MMin_dia_6").innerHTML = noteNames[t9][17] + " mMaj7" + "<br>Melodic Minor";
    document.getElementById("Rel_MMin_dia_7").innerHTML = noteNames[t11][20] + " m7" + "<br> Dorian ♭2nd";

    document.getElementById("Rel_HMaj_dia").innerHTML = noteNames[tonic][SOF] + " Harmonic Major：" + sharp_key_signature[tonic];
    document.getElementById("Rel_HMaj_dia_1").innerHTML = noteNames[tonic][2] + " Maj7" + "<br>Harmonic major";
    document.getElementById("Rel_HMaj_dia_2").innerHTML = noteNames[t2][5] + " m7(♭5)" + "<br>Dorian ♭5th";
    document.getElementById("Rel_HMaj_dia_3").innerHTML = noteNames[t4][8] + " m7・7" + "<br>Phrygian ♭4th";
    document.getElementById("Rel_HMaj_dia_4").innerHTML = noteNames[t5][11] + " mMaj7" + "<br>Lydian ♭3rd";
    document.getElementById("Rel_HMaj_dia_5").innerHTML = noteNames[t7][14] + " 7" + "<br>Mixolydian ♭2nd";
    document.getElementById("Rel_HMaj_dia_6").innerHTML = noteNames[t8][16] + " augMaj7" + "<br>Lydian ♯2nd ♯5th";
    document.getElementById("Rel_HMaj_dia_7").innerHTML = noteNames[t11][20] + " dim7" + "<br> Locrian ♭♭7th";

    document.getElementById("Rel_MMaj_dia").innerHTML = noteNames[tonic][SOF] + "  Melodic Major：" + sharp_key_signature[tonic];
    document.getElementById("Rel_MMaj_dia_1").innerHTML = noteNames[tonic][2] + " 7" + "<br>Melodic Major";
    document.getElementById("Rel_MMaj_dia_2").innerHTML = noteNames[t2][5] + " m7(♭5)" + "<br>Locrian ♮2nd";
    document.getElementById("Rel_MMaj_dia_3").innerHTML = noteNames[t4][8] + " m7(♭5)" + "<br>Super Locrian<br><br>" + noteNames[t4][8] + "7(omit5)<br>Altered";
    document.getElementById("Rel_MMaj_dia_4").innerHTML = noteNames[t5][11] + " mMaj7" + "<br>Melodic Minor";
    document.getElementById("Rel_MMaj_dia_5").innerHTML = noteNames[t7][14] + " m7" + "<br>Dorian ♭2nd";
    document.getElementById("Rel_MMaj_dia_6").innerHTML = noteNames[t8][16] + " augMaj7" + "<br>Lydian augmented";
    document.getElementById("Rel_MMaj_dia_7").innerHTML = noteNames[t10][19] + " 7" + "<br>Lydian♭7th";


    if (t3 == 0 || t3 == 2 || t3 == 4 || t3 == 6 || t3 == 7 || t3 == 9 || t3 == 11) {
        SOF = 0;
    } else {
        SOF = 1;
    };

    document.getElementById("Para_Minor_dia").innerHTML = noteNames[tonic][SOF] + " Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_Minor_dia_1").innerHTML = noteNames[tonic][17] + " m7" + "<br>Aeolian";
    document.getElementById("Para_Minor_dia_2").innerHTML = noteNames[t2][20] + " m7(♭5)" + "<br>Locrian";
    document.getElementById("Para_Minor_dia_3").innerHTML = noteNames[t3][2] + " Maj7" + "<br>Ionian";
    document.getElementById("Para_Minor_dia_4").innerHTML = noteNames[t5][5] + " m7" + "<br>Dorian";
    document.getElementById("Para_Minor_dia_5").innerHTML = noteNames[t7][8] + " m7" + "<br>Phrygian";
    document.getElementById("Para_Minor_dia_6").innerHTML = noteNames[t8][11] + " Maj7" + "<br>Lydian";
    document.getElementById("Para_Minor_dia_7").innerHTML = noteNames[t10][14] + " 7" + "<br>Mixolydian";

    document.getElementById("Para_HMin_dia").innerHTML = noteNames[tonic][SOF] + " Harmonic Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_HMin_dia_1").innerHTML = noteNames[tonic][17] + " mMaj7" + "<br>Harmonic Minor";
    document.getElementById("Para_HMin_dia_2").innerHTML = noteNames[t2][20] + " m7(♭5)" + "<br>Locrian ♮6th";
    document.getElementById("Para_HMin_dia_3").innerHTML = noteNames[t3][2] + " augMaj7" + "<br>Ionian Augmented";
    document.getElementById("Para_HMin_dia_4").innerHTML = noteNames[t5][5] + " m7" + "<br>Dorian #4th";
    document.getElementById("Para_HMin_dia_5").innerHTML = noteNames[t7][8] + " 7" + "<br>Phrygian Dominant";
    document.getElementById("Para_HMin_dia_6").innerHTML = noteNames[t8][11] + " Maj7" + "<br>Lydian ♯2nd";
    document.getElementById("Para_HMin_dia_7").innerHTML = noteNames[t11][15] + " dim7" + "<br>Ultra Locrian";

    document.getElementById("Para_MMin_dia").innerHTML = noteNames[tonic][SOF] + " Melodic Minor：" + sharp_key_signature[t3];
    document.getElementById("Para_MMin_dia_1").innerHTML = noteNames[tonic][17] + " mMaj7" + "<br>Melodic Minor";
    document.getElementById("Para_MMin_dia_2").innerHTML = noteNames[t2][20] + " m7" + "<br>Dorian ♭2nd";
    document.getElementById("Para_MMin_dia_3").innerHTML = noteNames[t3][2] + " augMaj7" + "<br>Lydian augmented";
    document.getElementById("Para_MMin_dia_4").innerHTML = noteNames[t5][5] + " 7" + "<br>Lydian♭7th";
    document.getElementById("Para_MMin_dia_5").innerHTML = noteNames[t7][8] + " 7" + "<br>Melodic Major";
    document.getElementById("Para_MMin_dia_6").innerHTML = noteNames[t9][12] + " m7(♭5)" + "<br>Locrian ♮2nd";
    document.getElementById("Para_MMin_dia_7").innerHTML = noteNames[t11][15] + " m7(♭5)" + "<br>Super Locrian<br><br>" + noteNames[t11][15] + "7(omit5)<br>Altered";

    document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2"
    onoff_ChordsAndModeChange = 1;

};


//ディグリーネームで表示するための関数(ダイアトニックコード)
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
    document.getElementById("Rel_HMaj_dia_3").innerHTML = "Ⅲ m7・7";
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

//ダイアトニックコードの着色をリセットする関数
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

//ダイアトニック・コードのコードネームに対応する場所の色を変更する
document.getElementById("paint_diatonic_chords"); function paintDiatonicChords() {

    paintDiatonicChordsReset()
    paint_diatonic_chords = document.getElementById("paint_diatonic_chords").value;

    if (paint_diatonic_chords == 0) {
        paintDiatonicChordsReset()
    } else if (paint_diatonic_chords == 1) {
        document.getElementById("Major_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Major_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 2) {
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
        document.getElementById("Major_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_2").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        //ブルーに着色
        document.getElementById("Rel_MMin_dia_5").className = "list-group-item col-xl list-group-item-info text-center";
        document.getElementById("Rel_MMaj_dia_3").className = "list-group-item col-xl list-group-item-info text-center";
        document.getElementById("Para_MMin_dia_7").className = "list-group-item col-xl list-group-item-info text-center";
    } else if (paint_diatonic_chords == 4) {
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
        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 6) {
        document.getElementById("Rel_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 7) {
        document.getElementById("Rel_HMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 8) {
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
        document.getElementById("Rel_HMaj_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_Minor_dia_7").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_4").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_5").className = "list-group-item col-xl list-group-item-danger text-center";
    } else if (paint_diatonic_chords == 9) {
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
        document.getElementById("Rel_HMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMin_dia_1").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_HMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Rel_MMaj_dia_6").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_HMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
        document.getElementById("Para_MMin_dia_3").className = "list-group-item col-xl list-group-item-danger text-center";
    };
};

let onoff_ChordsAndModeChange = [];

//調べたい主音切り替え関数
function ChordschangeAndChordsAndModeChange() {

    if (onoff_ChordsAndModeChange == 1) {
        onoff_ChordsAndModeChange = 1;
        document.getElementById("Mode_add_button").className = "btn btn-danger box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        ChordsAndModeChange()

    } else if (onoff_ChordsAndModeChange == 0) {
        onoff_ChordsAndModeChange = 0;
        document.getElementById("Mode_add_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_button").className = "btn btn-secondary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        document.getElementById("degree_change_button").className = "btn btn-primary box1 col-10 offset-2 col-md-4 col-xl-3 m-2";
        Chordschange()
    };
};

//--------------------------------------------------------------

//音価を計算する

//1分のミリ秒数
let one_minutes = 60000;

document.getElementById("input_bpm"); function NoteLength() {

    let input_bpm = document.getElementById("input_bpm").value;
    let time_unit = document.getElementById("time_unit").value;

    let time_type = 1;

    if (time_unit == "ms") {
        time_type = 1;
    } else if (time_unit == "μs") {
        time_type = 1000;
    } else if (time_unit == "sec") {
        time_type = 1 / 1000;
    } else if (time_unit == "秒") {
        time_type = 1 / 1000;
    } else if (time_unit == "ミリ秒") {
        time_type = 1;
    } else if (time_unit == "マイクロ秒") {
        time_type = 1000;
    };

    //1拍(4分音符)の長さ
    let common_beat_time = Number(one_minutes) / Number(input_bpm);
    //全音符の長さ
    let whole_note_time = Number(common_beat_time) * 4;

    let time_whole_note = Number(whole_note_time) * Number(time_type);
    let time_half_note = Number(whole_note_time) * Number(time_type) / 2;
    let time_quarter_note = Number(whole_note_time) * Number(time_type) / 4;
    let time_8th_note = Number(whole_note_time) * Number(time_type) / 8;
    let time_16th_note = Number(whole_note_time) * Number(time_type) / 16;
    let time_32th_note = Number(whole_note_time) * Number(time_type) / 32;

    let time_quarter_note_triplet = Number(whole_note_time) * Number(time_type) / 6;
    let time_8th_note_tuplet = Number(whole_note_time) * Number(time_type) / 12;
    let time_16th_note_tuplet = Number(whole_note_time) * Number(time_type) / 24;
    let time_1dot_half_note = Number(whole_note_time) * Number(time_type) * 3 / 4;
    let time_1dot_4th_note = Number(whole_note_time) * Number(time_type) * 3 / 8;
    let time_1dot_8th_note = Number(whole_note_time) * Number(time_type) * 3 / 16;

    let time_maxima = Number(whole_note_time) * Number(time_type) * 8;
    let time_longa = Number(whole_note_time) * Number(time_type) * 4;
    let time_double_whole_note = Number(whole_note_time) * Number(time_type) * 2;
    let time_1dot_16th_note = Number(whole_note_time) * Number(time_type) * 3 / 32;
    let time_quarter_note_quintuplet = Number(whole_note_time) * Number(time_type) / 20;
    let time_half_note_triplet = Number(whole_note_time) * Number(time_type) / 3;

    if (input_bpm > 0) {
        document.getElementById("time_whole_note").innerHTML = "全音符<br><br>" + roundToThree(time_whole_note) + String(time_unit);
        document.getElementById("time_half_note").innerHTML = "2分音符<br><br>" + roundToThree(time_half_note) + String(time_unit);
        document.getElementById("time_quarter_note").innerHTML = "4分音符<br><br>" + roundToThree(time_quarter_note) + String(time_unit);
        document.getElementById("time_8th_note").innerHTML = "8分音符<br><br>" + roundToThree(time_8th_note) + String(time_unit);
        document.getElementById("time_16th_note").innerHTML = "16分音符<br><br>" + roundToThree(time_16th_note) + String(time_unit);
        document.getElementById("time_32th_note").innerHTML = "32分音符<br><br>" + roundToThree(time_32th_note) + String(time_unit);

        document.getElementById("time_quarter_note_triplet").innerHTML = "2拍3連<br><br>" + roundToThree(time_quarter_note_triplet) + String(time_unit);
        document.getElementById("time_8th_note_tuplet").innerHTML = "1拍3連<br><br>" + roundToThree(time_8th_note_tuplet) + String(time_unit);
        document.getElementById("time_16th_note_tuplet").innerHTML = "1拍6連<br><br>" + roundToThree(time_16th_note_tuplet) + String(time_unit);
        document.getElementById("time_1dot_half_note").innerHTML = "符点2分<br><br>" + roundToThree(time_1dot_half_note) + String(time_unit);
        document.getElementById("time_1dot_quarter_note").innerHTML = "符点4分<br><br>" + roundToThree(time_1dot_4th_note) + String(time_unit);
        document.getElementById("time_1dot_8th_note").innerHTML = "符点8分<br><br>" + roundToThree(time_1dot_8th_note) + String(time_unit);

        document.getElementById("time_maxima").innerHTML = "マキシマ<br><br>" + roundToThree(time_maxima) + String(time_unit);
        document.getElementById("time_longa").innerHTML = "ロンガ<br><br>" + roundToThree(time_longa) + String(time_unit);
        document.getElementById("time_double_whole_note").innerHTML = "倍全音符<br><br>" + roundToThree(time_double_whole_note) + String(time_unit);
        document.getElementById("time_1dot_16th_note").innerHTML = "符点16分<br><br>" + roundToThree(time_1dot_16th_note) + String(time_unit);
        document.getElementById("time_quarter_note_quintuplet").innerHTML = "1拍5連符<br><br>" + roundToThree(time_quarter_note_quintuplet) + String(time_unit);
        document.getElementById("time_half_note_triplet").innerHTML = "4拍3連<br><br>" + roundToThree(time_half_note_triplet) + String(time_unit);

    } else if (input_bpm <= 0) {
        document.getElementById("time_whole_note").innerHTML = "全音符<br><br><br>";
        document.getElementById("time_half_note").innerHTML = "2分音符<br><br><br>";
        document.getElementById("time_quarter_note").innerHTML = "4分音符<br><br><br>";
        document.getElementById("time_8th_note").innerHTML = "8分音符<br><br><br>";
        document.getElementById("time_16th_note").innerHTML = "16分音符<br><br><br>";
        document.getElementById("time_32th_note").innerHTML = "32分音符<br><br><br>";

        document.getElementById("time_quarter_note_triplet").innerHTML = "2拍3連<br><br><br>";
        document.getElementById("time_8th_note_tuplet").innerHTML = "1拍3連<br><br><br>";
        document.getElementById("time_16th_note_tuplet").innerHTML = "1拍6連<br><br><br>";
        document.getElementById("time_1dot_half_note").innerHTML = "符点2分<br><br><br>";
        document.getElementById("time_1dot_quarter_note").innerHTML = "符点4分<br><br><br>";
        document.getElementById("time_1dot_8th_note").innerHTML = "符点8分<br><br><br>";

        document.getElementById("time_maxima").innerHTML = "マキシマ<br><br><br>";
        document.getElementById("time_longa").innerHTML = "ロンガ<br><br><br>";
        document.getElementById("time_double_whole_note").innerHTML = "倍全音符<br><br><br>";
        document.getElementById("time_1dot_16th_note").innerHTML = "符点16分<br><br><br>";
        document.getElementById("time_quarter_note_quintuplet").innerHTML = "1拍5連符<br><br><br>";
        document.getElementById("time_half_note_triplet").innerHTML = "4拍3連<br><br><br>";
    };
};


document.getElementById("rhythm_input_bpm"); function NoteInfo() {

    document.getElementById("note_text").className = "py-0";
    document.getElementById("flag_text").className = "py-0";
    document.getElementById("haku_text").className = "py-0";
    document.getElementById("dieresis_note").className = "py-0";
    document.getElementById("dotted_note_value").className = "py-0";

    let rhythm_input_bpm = document.getElementById("rhythm_input_bpm").value;
    let rhythm_note_type = document.getElementById("rhythm_note_type").value;
    let rhythm_dotted_note_type = document.getElementById("rhythm_dotted_note_type").value;
    let rhythm_tuplet_type = document.getElementById("rhythm_tuplet_type").value;
    let rhythm_time_unit = document.getElementById("rhythm_time_unit").value;
    let note_count = document.getElementById("note_count").value;

    //このBPMの1拍(4分音符)の長さを求める。
    let rhythm_common_beat_time = Number(one_minutes) / Number(rhythm_input_bpm);
    //このBPMの全音符の長さを求める。
    let rhythm_whole_note_time = Number(rhythm_common_beat_time) * 4;

    //諸々の計算処理-------------------------------------------------------------------

    //n分音符の音価≒単純音符部分の音価(ms)を求める式...[全音符の音価÷n]
    let dieresis_note_time = Number(rhythm_whole_note_time) / Number(rhythm_note_type);

    //符点部分の音価(ms)を求める式...[n分音符の音価×((2^d)-1)/(2^d)]
    let dot_time = Number(dieresis_note_time) * ((2 ** (Number(rhythm_dotted_note_type)) - 1) / (2 ** Number(rhythm_dotted_note_type)));

    //★入力されたの音価の合計(ms)を求める式
    let note_value = ((Number(dieresis_note_time) + Number(dot_time)) * Number(note_count)) / Number(rhythm_tuplet_type);

    //"x分音符"の種類を求める式...[全音符の音価÷この音符の音価]
    let dieresis_note = Number(rhythm_whole_note_time) / Number(note_value);

    //log2(x)の対数関数に"x分音符"のxの値を代入したもの。このあと小数部分は切り捨てて使う。
    let log_number = Math.floor(Math.log2(Number(dieresis_note)));

    //連符の比の調整に使う...[2^{連符の分割数+(符点の数-連符の分割数)] 「c」とする。
    let Adjustment_number = 2 ** ((Number(rhythm_tuplet_type) + (Number(rhythm_dotted_note_type) - Number(rhythm_tuplet_type))));

    //連符を考える時、符尾・連桁の数とリンクした"連符で分割する前の分音符の数字"を求める式...[2^(log2(x)×c)]
    let ratio_number = (2 ** Number(log_number)) * (Number(Adjustment_number));

    //連符の比の"連符で分割する前の分音符の個数"を求める式...[(n分音符の音価+符点部分の音価)÷{全音符の音価÷m]
    let ratio = Math.round((((Number(dieresis_note_time) + Number(dot_time)) / (Number(rhythm_whole_note_time) / (Number(ratio_number) / (Number(Adjustment_number))))) * (Number(Adjustment_number))) + Number(note_count) - 1);


    //符尾・連桁の数とその根拠となる...「(2の累乗)分音符」の種類
    let flag_count = Number(log_number) - 2;
    let flag_number = 2 ** Number(log_number);
    let flag_number_minusone = 2 ** Number(log_number + 1);

    //符点音符の連符を符点音符のみ表記に変換する式...[n×t×{1^(d-1)}]
    let dotted_note = Number(dieresis_note) * 3 / 2;

    //時間の表示形式を決定する処理
    let rhythm_time_type = 1;
    if (rhythm_time_unit == "ms") {
        rhythm_time_type = 1;
    } else if (rhythm_time_unit == "μs") {
        rhythm_time_type = 1000;
    } else if (rhythm_time_unit == "sec") {
        rhythm_time_type = 1 / 1000;
    } else if (rhythm_time_unit == "秒") {
        rhythm_time_type = 1 / 1000;
    } else if (rhythm_time_unit == "ミリ秒") {
        rhythm_time_type = 1;
    } else if (rhythm_time_unit == "マイクロ秒") {
        rhythm_time_type = 1000;
    };

    //音符の表示形式を決定する処理
    let rhythm_note_name = 0;
    if (rhythm_note_type == "1") {
        rhythm_note_name = "全";
    } else {
        rhythm_note_name = rhythm_note_type + "分";
    };

    //符点の表示形式を決定する処理
    let rhythm_dot_name = 0;
    if (rhythm_dotted_note_type == "0") {
        rhythm_dot_name = "";
    } else if (rhythm_dotted_note_type == "1") {
        rhythm_dot_name = "符点";
    } else if (rhythm_dotted_note_type == "2") {
        rhythm_dot_name = "複符点";
    } else {
        rhythm_dot_name = rhythm_dotted_note_type + "重符点";
    };

    //連符の表示形式を決定する処理
    let rhythm_tuplet_name = 0;
    if (rhythm_tuplet_type == "1") {
        rhythm_tuplet_name = "";
    } else {
        rhythm_tuplet_name = "の" + rhythm_tuplet_type + "連符";
    };

    //個数の表示形式を決定する処理
    let note_count_text = 0;
    if (note_count <= 1) {
        note_count_text = "";
    } else {
        note_count_text = "×" + note_count;
    };

    //基本情報
    if (note_count == 0) {
        document.getElementById("note_value").innerHTML
            = "———「無」を奏でる…か。";
    } else if (note_count == -1) {
        document.getElementById("note_value").innerHTML
            = "マイナスになっているぞ…値が……！";
    } else if (note_count == -2) {
        document.getElementById("note_value").innerHTML
            = "マイナス2…！？どういう状況だい？…逆再生かな？";
    } else if (note_count == -3) {
        document.getElementById("note_value").innerHTML
            = "オイオイ…まだ「負の世界」に踏み込む…ｯていうのかよ…";
    } else if (note_count == -5) {
        document.getElementById("note_value").innerHTML
            = "集中せよ。『音楽』に。";
    } else if (note_count == -7) {
        document.getElementById("note_value").innerHTML
            = "ひっくり返してシュークリームを食べると、クリームがこぼれにくいからオススメだよ。";
    } else if (note_count == -11) {
        document.getElementById("note_value").innerHTML
            = "もう、そろそろ作業に戻りましょう。";
    } else if (note_count == -13) {
        document.getElementById("note_value").innerHTML
            = "オススメの曲：Dream Theater - Stream of Consciousness";
    } else if (note_count == -17) {
        document.getElementById("note_value").innerHTML
            = "集中せよｫｵｵｵ『音楽』にｨｲｲｲ!!";
    } else if (note_count == -19) {
        document.getElementById("note_value").innerHTML
            = "好きな食べ物：カツ丼、素麺";
    } else if (note_count == -23) {
        document.getElementById("note_value").innerHTML
            = "オススメの映画：インターステラー";
    } else if (note_count == -29) {
        document.getElementById("note_value").innerHTML
            = "好きなポケモン：カイリュー";
    } else if (note_count == -31) {
        document.getElementById("note_value").innerHTML
            = "好きなコード進行：Ⅵm→#Ⅳm7(♭5)→ⅣMaj7→Ⅱm7→Ⅲm7";
    } else if (note_count == -37) {
        document.getElementById("note_value").innerHTML
            = "オススメの漫画：『風の谷のナウシカ』";
    } else if (note_count == -41) {
        document.getElementById("note_value").innerHTML
            = "雑学：スーパーマリオのステージクリアBGMを高速再生すると1UPの音になる。";
    } else if (note_count == -43) {
        document.getElementById("note_value").innerHTML
            = "好きな飲み物：綾鷹";
    } else if (note_count == -47) {
        document.getElementById("note_value").innerHTML
            = "……コメントが表示される「数」の法則に気付いているかな…？";
    } else if (note_count == -53) {
        document.getElementById("note_value").innerHTML
            = "（コメントを考えるのめんどくさくなってきた…）";
    } else if (note_count == -59) {
        document.getElementById("note_value").innerHTML
            = "くぁｗせｄｒｆｔｇｙふじこｌｐ；＠：「」";
    } else if (note_count == -61) {
        document.getElementById("note_value").innerHTML
            = "ていうか…そもそも…これ気付く人いるのかなぁ…";
    } else if (note_count == -67) {
        document.getElementById("note_value").innerHTML
            = "温泉 に 行きたい。";
    } else if (note_count == -71) {
        document.getElementById("note_value").innerHTML
            = "雑学：北極よりも南極の方が圧倒的に寒い。";
    } else if (note_count == -73) {
        document.getElementById("note_value").innerHTML
            = "ココまで来るとはな…全くクレイジーな奴だぜ…";
    } else if (note_count == -79) {
        document.getElementById("note_value").innerHTML
            = "好きなゲーム：ディディーコング レーシング";
    } else if (note_count == -83) {
        document.getElementById("note_value").innerHTML
            = "雑学：ビンテージ…作られてから約25年〜100年未満 アンティーク…作られてから100年以上";
    } else if (note_count == -89) {
        document.getElementById("note_value").innerHTML
            = "メッセージ表示の法則の答え：100までの素数に−1をかけた数でメッセージが表示されるようになっています。(-1以外)";
    } else if (note_count == -97) {
        document.getElementById("note_value").innerHTML
            = "これが最後のメッセージです。これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < -97) {
        document.getElementById("note_value").innerHTML
            = "これより小さい数でメッセージが出てくることはありません。さぁ作業に戻りましょう。";
    } else if (note_count < 0 || rhythm_input_bpm <= 0) {
        document.getElementById("note_value").innerHTML
            = "プラスの値を入力してください。";
    } else {
        document.getElementById("note_value").innerHTML
            = "<b>BPM=" + roundToThree(rhythm_input_bpm) + "</b>の<b>「" + rhythm_dot_name + rhythm_note_name + "音符" + note_count_text + rhythm_tuplet_name + "」</b>の音価は、<b>" + roundToThree(note_value * rhythm_time_type) + String(rhythm_time_unit) + "</b>です。";
    };

    //分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dieresis_note").innerHTML = "";
        document.getElementById("dieresis_note").className = "py-0";
    } else {
        document.getElementById("dieresis_note").innerHTML = "分音符のみで表記した場合は<b>「" + roundToThree(dieresis_note) + "分音符」</b>になります。";
        document.getElementById("dieresis_note").className = "py-1";
    };

    //符点分音符のみ表記
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("dotted_note_value").innerHTML = "";
        document.getElementById("dotted_note_value").className = "py-0";
    } else {
        document.getElementById("dotted_note_value").innerHTML = "符点音符のみで表記した場合は<b>「符点" + roundToThree(dotted_note) + "分音符」</b>になります。";
        document.getElementById("dotted_note_value").className = "py-1";
    };

    //連符の比の解説
    if (note_count <= 0 || rhythm_input_bpm <= 0 || rhythm_dotted_note_type <= 1) {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-0";
    } else if (rhythm_tuplet_type >= 2) {
        document.getElementById("note_text").innerHTML
            = Number(ratio_number) + "分音符が" + Number(ratio) + "個分の音価を" + Number(rhythm_tuplet_type) + "個に分割しています。<br>よって、この" + Number(rhythm_tuplet_type) + "連符と" + Number(ratio_number) + "分音符との比は<b>「" + Number(rhythm_tuplet_type) + "：" + Number(ratio) + "」</b>となります。";
        document.getElementById("note_text").className = "py-1";
    } else if (rhythm_tuplet_type <= 1) {
        document.getElementById("note_text").innerHTML = "";
        document.getElementById("note_text").className = "py-1";
    };

    //符尾・連桁の数の表示
    let flag_ms = Number(rhythm_whole_note_time) / Number(flag_number);
    let quarter_note_ms = Number(rhythm_whole_note_time) / 4;
    let flag_min_ms = Number(rhythm_whole_note_time) / Number(flag_number_minusone);

    if (rhythm_dotted_note_type >= 1 || rhythm_input_bpm <= 0) {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    } else if (note_count != 1) {
        document.getElementById("flag_text").innerHTML = "";
        document.getElementById("flag_text").className = "py-0";
    } else if (flag_count < 1) {//指定BPMでの8分音符より、「符点を含めない音価」が長い場合
        document.getElementById("flag_text").innerHTML = "BPM=" + rhythm_input_bpm + "の4分音符(" + roundToThree(quarter_note_ms * rhythm_time_type) + rhythm_time_unit + ")以上の音価です。<br>したがって、符尾・連桁の数は<b>\"0本\"</b>で記述されます。";
        document.getElementById("flag_text").className = "py-1";
    } else if (flag_count >= 1) {
        document.getElementById("flag_text").innerHTML = "BPM=" + rhythm_input_bpm + "の" + flag_number + "分音符(" + roundToThree(flag_ms * rhythm_time_type) + rhythm_time_unit + ")以下で、" + flag_number_minusone + "分音符(" + roundToThree(flag_min_ms * rhythm_time_type) + rhythm_time_unit + ")より長い音価です。<br>したがって、符尾・連桁の数は<b>\"" + flag_count + "本\"</b>で記述されます。";
        document.getElementById("flag_text").className = "py-1";
    } else {
        document.getElementById("flag_text").innerHTML = "符尾・連桁の数が分かりません。";
        document.getElementById("flag_text").className = "py-1";
    };

    //「〇拍〇連」表記の有無

    if (note_count != 1) {
        document.getElementById("haku_text").innerHTML = "";
        document.getElementById("haku_text").className = "py-0";
    } else if (Number(rhythm_note_type) == 1 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「4拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 2 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「2拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 4 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「1拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else if (Number(rhythm_note_type) == 8 && Number(rhythm_tuplet_type) >= 3 && Number(rhythm_dotted_note_type) == 0) {
        document.getElementById("haku_text").className = "py-1";
        document.getElementById("haku_text").innerHTML
            = "この音符を<b>「半拍" + rhythm_tuplet_type + "連」</b>とも言います。";
    } else {
        document.getElementById("haku_text").className = "py-0";
        document.getElementById("haku_text").innerHTML = "";
    };

    //メトリック・モジュレーションの説明
    if (note_count <= 0 || rhythm_input_bpm <= 0) {
        document.getElementById("rhythm_info").innerHTML = ""
        document.getElementById("rhythm_info").className = "py-0";

        document.getElementById("same_length_whole_note").innerHTML = "全音符<br><br>---";
        document.getElementById("same_length_1dot_half_note").innerHTML = "符点2分<br><br>---";
        document.getElementById("same_length_half_note").innerHTML = "2分音符<br><br>---";
        document.getElementById("same_length_2dot_4th_note").innerHTML = "複符点4分<br><br>---";
        document.getElementById("same_length_2dot_8th_note").innerHTML = "複符点8分<br><br>---";
        document.getElementById("same_length_2dot_16th_note").innerHTML = "複符点16分<br><br>---";
        document.getElementById("same_length_half_note_triplet").innerHTML = "4拍3連<br><br>---";
        document.getElementById("same_length_1dot_quarter_note").innerHTML = "符点4分<br><br>---";
        document.getElementById("same_length_quarter_note").innerHTML = "4分音符<br><br>---";
        document.getElementById("same_length_1dot_8th_note").innerHTML = "符点8分<br><br>---";
        document.getElementById("same_length_quarter_note_triplet").innerHTML = "2拍3連<br><br>---";
        document.getElementById("same_length_8th_note").innerHTML = "8分音符<br><br>---";
        document.getElementById("same_length_1dot_16th_note").innerHTML = "符点16分<br><br>---";
        document.getElementById("same_length_8th_note_tuplet").innerHTML = "1拍3連<br><br>---";
        document.getElementById("same_length_16th_note").innerHTML = "16分音符<br><br>---";
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = "1拍5連<br><br>---";
        document.getElementById("same_length_16th_note_tuplet").innerHTML = "1拍6連<br><br>---";
        document.getElementById("same_length_32th_note").innerHTML = "32分音符<br><br>---";
    } else {
        document.getElementById("rhythm_info").innerHTML
            = "<b>BPM=" + roundToThree(rhythm_input_bpm) + "</b>の<b>「" + rhythm_dot_name + rhythm_note_name + "音符" + note_count_text + rhythm_tuplet_name + "」</b>と同じ音価を持つ「主な音符とそのBPM」は、以下の通りです。";

        document.getElementById("same_length_whole_note").innerHTML = "全音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 1) / 4));
        document.getElementById("same_length_1dot_half_note").innerHTML = "符点2分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 4 / 3) / 4));
        document.getElementById("same_length_half_note").innerHTML = "2分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 2) / 4));
        document.getElementById("same_length_2dot_4th_note").innerHTML = "複符点4分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16 / 7) / 4));
        document.getElementById("same_length_2dot_8th_note").innerHTML = "複符点8分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32 / 7) / 4));
        document.getElementById("same_length_2dot_16th_note").innerHTML = "複符点16分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 64 / 7) / 4));
        document.getElementById("same_length_half_note_triplet").innerHTML = "4拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 3) / 4));
        document.getElementById("same_length_1dot_quarter_note").innerHTML = "符点4分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 8 / 3) / 4));
        document.getElementById("same_length_quarter_note").innerHTML = "4分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 4) / 4));
        document.getElementById("same_length_1dot_8th_note").innerHTML = "符点8分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16 / 3) / 4));
        document.getElementById("same_length_quarter_note_triplet").innerHTML = "2拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 6) / 4));
        document.getElementById("same_length_8th_note").innerHTML = "8分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 8) / 4));
        document.getElementById("same_length_1dot_16th_note").innerHTML = "符点16分<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32 / 3) / 4));
        document.getElementById("same_length_8th_note_tuplet").innerHTML = "1拍3連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 12) / 4));
        document.getElementById("same_length_16th_note").innerHTML = "16分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 16) / 4));
        document.getElementById("same_length_quarter_note_quintuplet").innerHTML = "1拍5連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 20) / 4));
        document.getElementById("same_length_16th_note_tuplet").innerHTML = "1拍6連<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 24) / 4));
        document.getElementById("same_length_32th_note").innerHTML = "32分音符<br><br>BPM=" + roundToThree(Number(one_minutes) / ((Number(note_value) * 32) / 4));

    };
};

