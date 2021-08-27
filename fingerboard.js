
//音名の多次元配列
const AllNoteNames = [
    [['C', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'D𝄫', 'C', 'B#', 'C', 'C', 'B#', 'C', 'C', 'B#', 'D𝄫', 'C', 'C', 'B#', 'C'], ['ド', 'ド', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'ド', 'ド', 'シ#', 'レ𝄫', 'ド', 'ド', 'シ#', 'ド'], ['ハ', 'ハ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', 'ハ', 'ハ', '嬰ロ', '重変ニ', 'ハ', 'ハ', '嬰ロ', 'ハ'], ['C', 'C', 'C', 'His', 'C', 'C', 'His', 'Deses', 'C', 'C', 'His', 'Deses', 'C', 'His', 'C', 'C', 'His', 'C', 'C', 'His', 'Deses', 'C', 'C', 'His', 'C']],
    [['C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'C#', 'C#', 'D♭', 'D♭', 'C#', 'C#', 'C#-D♭'], ['ド#', 'レ♭', 'レ♭', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'ド#', 'ド#', 'レ♭', 'レ♭', 'ド#', 'ド#', 'ド#-レ♭'], ['嬰ハ', '変ニ', '変ニ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '嬰ハ', '嬰ハ', '変ニ', '変ニ', '嬰ハ', '嬰ハ', '嬰ハ-変ニ'], ['Cis', 'Des', 'Des', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Cis', 'Cis', 'Des', 'Des', 'Cis', 'Cis', 'Cis-Des']],
    [['D', 'D', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'E𝄫', 'D', 'C𝄪', 'D', 'D', 'C𝄪', 'E𝄫', 'D', 'D', 'C𝄪', 'D'], ['レ', 'レ', 'レ', 'レ', 'ミ𝄫', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ミ𝄫', 'レ', 'ド𝄪', 'レ', 'レ', 'ド𝄪', 'ミ𝄫', 'レ', 'レ', 'ド𝄪', 'レ'], ['ニ', 'ニ', 'ニ', 'ニ', '重変ホ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重変ホ', 'ニ', '重嬰ハ', 'ニ', 'ニ', '重嬰ハ', '重変ホ', 'ニ', 'ニ', '重嬰ハ', 'ニ'], ['D', 'D', 'D', 'D', 'Eses', 'D', 'Cisis', 'Eses', 'D', 'D', 'Cisis', 'Eses', 'D', 'D', 'Eses', 'D', 'Cisis', 'D', 'D', 'Cisis', 'Eses', 'D', 'D', 'Cisis', 'D']],
    [['D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'F𝄫', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'E♭', 'D#', 'E♭', 'D#', 'D#', 'E♭', 'E♭', 'D#', 'D#', 'D#-E♭'], ['レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ファ𝄫', 'ミ♭', 'レ#', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'ミ♭', 'レ#', 'レ#', 'ミ♭', 'ミ♭', 'レ#', 'レ#', 'レ#-ミ♭'], ['嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '重変ヘ', '変ホ', '嬰ニ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '変ホ', '嬰ニ', '嬰ニ', '変ホ', '変ホ', '嬰ニ', '嬰ニ', '嬰ニ-変ホ'], ['Dis', 'Es', 'Es', 'Dis', 'Es', 'Es', 'Dis', 'Feses', 'Es', 'Dis', 'Dis', 'Es', 'Es', 'Dis', 'Es', 'Es', 'Dis', 'Es', 'Dis', 'Dis', 'Es', 'Es', 'Dis', 'Dis', 'Dis-Es']],
    [['E', 'E', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'F♭', 'E', 'E', 'F♭', 'E', 'D𝄪', 'F♭', 'E', 'E', 'D𝄪', 'E'], ['ミ', 'ミ', 'ミ', 'ミ', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ファ♭', 'ミ', 'レ𝄪', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ミ', 'ミ', 'ファ♭', 'ミ', 'レ𝄪', 'ファ♭', 'ミ', 'ミ', 'レ𝄪', 'ミ'], ['ホ', 'ホ', 'ホ', 'ホ', '変ヘ', 'ホ', 'ホ', '変ヘ', '変ヘ', 'ホ', '重嬰イ', '変ヘ', 'ホ', 'ホ', '変ヘ', 'ホ', 'ホ', '変ヘ', 'ホ', '重嬰イ', '変ヘ', 'ホ', 'ホ', '重嬰イ', 'ホ'], ['E', 'E', 'E', 'E', 'Fes', 'E', 'E', 'Fes', 'Fes', 'E', 'Disis', 'Fes', 'E', 'E', 'Fes', 'E', 'E', 'Fes', 'E', 'Disis', 'Fes', 'E', 'E', 'Disis', 'E']],
    [['F', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'F', 'F', 'E#', 'F', 'F', 'E#', 'G𝄫', 'F', 'E#', 'E#', 'F'], ['ファ', 'ファ', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ファ', 'ファ', 'ミ#', 'ソ𝄫', 'ファ', 'ミ#', 'ミ#', 'ファ'], ['ヘ', 'ヘ', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', 'ヘ', 'ヘ', '嬰ホ', '重変ト', 'ヘ', '嬰ホ', '嬰ホ', 'ヘ'], ['F', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'Eis', 'F']],
    [['F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'F#', 'F#', 'G♭', 'G♭', 'F#', 'E𝄪', 'F#-G♭'], ['ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ファ#', 'ファ#', 'ソ♭', 'ソ♭', 'ファ#', 'ミ𝄪', 'ファ#-ソ♭'], ['嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '嬰ヘ', '嬰ヘ', '変ト', '変ト', '嬰ヘ', '重嬰ホ', '嬰ヘ-変ト'], ['F', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'F', 'F', 'Eis', 'F', 'F', 'Eis', 'Geses', 'F', 'Eis', 'Eis', 'F']],
    [['G', 'G', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'A𝄫', 'G', 'F𝄪', 'G', 'G', 'F𝄪', 'A𝄫', 'G', 'G', 'F𝄪', 'G'], ['ソ', 'ソ', 'ソ', 'ファ𝄪', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ラ𝄫', 'ソ', 'ファ𝄪', 'ソ', 'ソ', 'ファ𝄪', 'ラ𝄫', 'ソ', 'ソ', 'ファ𝄪', 'ソ'], ['ト', 'ト', 'ト', '重嬰ヘ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重変イ', 'ト', '重嬰ヘ', 'ト', 'ト', '重嬰ヘ', '重変イ', 'ト', 'ト', '重嬰ヘ', 'ト'], ['Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Fis', 'Fis', 'Ges', 'Ges', 'Fis', 'Eisis', 'Fis-Ges']],
    [['G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'A♭', 'G#', 'A♭', 'G#', 'G#', 'A♭', 'A♭', 'G#', 'G#', 'G#-A♭'], ['ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ラ♭', 'ソ#', 'ソ#', 'ラ♭', 'ラ♭', 'ソ#', 'ソ#', 'ソ#-ラ♭'], ['嬰ト', '変イ', '変イ', '嬰ト', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '変イ', '変イ', '嬰ト', '変イ', '嬰ト', '嬰ト', '変イ', '変イ', '嬰ト', '嬰ト', '嬰ト-変イ'], ['G', 'G', 'G', 'Fisis', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Ases', 'G', 'Fisis', 'G', 'G', 'Fisis', 'Ases', 'G', 'G', 'Fisis', 'G']],
    [['A', 'A', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A', 'A', 'A', 'B𝄫', 'A', 'A', 'B𝄫', 'A', 'G𝄪', 'B𝄫', 'A', 'A', 'G𝄪', 'A'], ['ラ', 'ラ', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ソ𝄪', 'シ𝄫', 'ラ', 'ラ', 'ソ𝄪', 'ラ', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ラ', 'シ𝄫', 'ラ', 'ソ𝄪', 'シ𝄫', 'ラ', 'ラ', 'ソ𝄪', 'ラ'], ['イ', 'イ', 'イ', 'イ', '重変ロ', 'イ', '重嬰ト', '重変ロ', 'イ', 'イ', '重嬰ト', 'イ', 'イ', 'イ', '重変ロ', 'イ', 'イ', '重変ロ', 'イ', '重嬰ト', '重変ロ', 'イ', 'イ', '重嬰ト', 'イ'], ['A', 'A', 'A', 'A', 'Heses', 'A', 'Gisis', 'Heses', 'A', 'A', 'Gisis', 'A', 'A', 'A', 'Heses', 'A', 'A', 'Heses', 'A', 'Gisis', 'Heses', 'A', 'A', 'Gisis', 'A']],
    [['A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'B♭', 'B♭', 'A#', 'C𝄫', 'B♭', 'A#', 'A#', 'A#-B♭'], ['ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'ド𝄫', 'シ♭', 'ラ#', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'シ♭', 'シ♭', 'ラ#', 'ド𝄫', 'シ♭', 'ラ#', 'ラ#', 'ラ#-シ♭'], ['嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '重変ハ', '変ロ', '嬰イ', '嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '変ロ', '変ロ', '嬰イ', '重変ハ', '変ロ', '嬰イ', '嬰イ', '嬰イ-変ロ'], ['Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'Ceses', 'B', 'Ais', 'Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'B', 'B', 'Ais', 'Ceses', 'B', 'Ais', 'Ais', 'Ais-B']],
    [['B', 'B', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'B', 'B', 'C♭', 'C♭', 'B', 'A𝄪', 'B'], ['シ', 'シ', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'ド♭', 'シ', 'ラ𝄪', 'ド♭', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'シ', 'シ', 'ド♭', 'ド♭', 'シ', 'ラ𝄪', 'シ'], ['ロ', 'ロ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', '変ハ', 'ロ', '重嬰イ', '変ハ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', 'ロ', 'ロ', '変ハ', '変ハ', 'ロ', '重嬰イ', 'ロ'], ['H', 'H', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'Ces', 'H', 'Aisis', 'Ces', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'H', 'H', 'Ces', 'Ces', 'H', 'Aisis', 'H']]
];

//主なチューニングタイプを格納した連想配列
TuningVariation = [
    { TuningName: "★ギター　6弦：スタンダード", NumberOfStrings: 6, StringTuningStrings: [4, 11, 7, 2, 9, 4] },
    { TuningName: "　ギター　7弦：スタンダード", NumberOfStrings: 7, StringTuningStrings: [4, 11, 7, 2, 9, 4, 11] },
    { TuningName: "　ギター　8弦：スタンダード", NumberOfStrings: 8, StringTuningStrings: [4, 11, 7, 2, 9, 4, 11, 6] },
    { TuningName: "　ギター　6弦：半音下げ", NumberOfStrings: 6, StringTuningStrings: [3, 10, 6, 1, 8, 3] },
    { TuningName: "　ギター　6弦：全音下げ", NumberOfStrings: 6, StringTuningStrings: [2, 9, 5, 0, 7, 2] },
    { TuningName: "　ギター　7弦：半音下げ", NumberOfStrings: 7, StringTuningStrings: [3, 10, 6, 1, 8, 3, 10] },
    { TuningName: "　ギター　8弦：半音下げ", NumberOfStrings: 8, StringTuningStrings: [3, 10, 6, 1, 8, 3, 10, 5] },

    { TuningName: "　ギター　6弦：ドロップD", NumberOfStrings: 6, StringTuningStrings: [4, 11, 7, 2, 9, 2] },
    { TuningName: "　ギター　6弦：ドロップC#", NumberOfStrings: 6, StringTuningStrings: [3, 10, 6, 1, 8, 1] },
    { TuningName: "　ギター　6弦：ドロップC", NumberOfStrings: 6, StringTuningStrings: [2, 9, 5, 0, 7, 0] },
    { TuningName: "　ギター　6弦：ドロップB", NumberOfStrings: 6, StringTuningStrings: [1, 8, 4, 11, 6, 11] },
    { TuningName: "　ギター　6弦：ダブル・ドロップD", NumberOfStrings: 6, StringTuningStrings: [2, 11, 7, 2, 9, 2] },

    { TuningName: "　ギター　7弦：ドロップA", NumberOfStrings: 7, StringTuningStrings: [4, 11, 7, 2, 9, 4, 9] },
    { TuningName: "　ギター　8弦：ドロップE", NumberOfStrings: 8, StringTuningStrings: [4, 11, 7, 2, 9, 4, 11, 4] },
    { TuningName: "　ギター　8弦：Djent", NumberOfStrings: 8, StringTuningStrings: [4, 11, 7, 2, 9, 4, 9, 4] },

    { TuningName: "　ギター　6弦：オープンD", NumberOfStrings: 6, StringTuningStrings: [2, 9, 6, 2, 9, 2] },
    { TuningName: "　ギター　6弦：オープンG", NumberOfStrings: 6, StringTuningStrings: [2, 11, 7, 2, 7, 2] },
    { TuningName: "　ギター　6弦：オープンA", NumberOfStrings: 6, StringTuningStrings: [4, 1, 9, 4, 9, 4] },

    { TuningName: "★ベース　4弦：スタンダード", NumberOfStrings: 4, StringTuningStrings: [7, 2, 9, 4] },
    { TuningName: "　ベース　5弦：スタンダード", NumberOfStrings: 5, StringTuningStrings: [7, 2, 9, 4, 11] },
    { TuningName: "　ベース　6弦：スタンダード", NumberOfStrings: 6, StringTuningStrings: [0, 7, 2, 9, 4, 11] },
    { TuningName: "　ベース　4弦：ドロップD", NumberOfStrings: 4, StringTuningStrings: [7, 2, 9, 2] },
    { TuningName: "　ベース　5弦：ドロップA", NumberOfStrings: 5, StringTuningStrings: [7, 2, 9, 4, 9] },

    { TuningName: "★ヴァイオリン　4弦", NumberOfStrings: 4, StringTuningStrings: [4, 9, 2, 7] },
    { TuningName: "　ヴァイオリン　5弦", NumberOfStrings: 5, StringTuningStrings: [4, 9, 2, 7, 0] },
    { TuningName: "★ヴィオラ　4弦", NumberOfStrings: 4, StringTuningStrings: [9, 2, 7, 0] },
    { TuningName: "★チェロ　4弦", NumberOfStrings: 4, StringTuningStrings: [9, 2, 7, 0] },
    { TuningName: "★コントラバス　4弦", NumberOfStrings: 4, StringTuningStrings: [7, 2, 9, 4] },

    { TuningName: "★三味線　3弦：本調子", NumberOfStrings: 3, StringTuningStrings: [0, 5, 0] },
    { TuningName: "　三味線　3弦：二上がり", NumberOfStrings: 3, StringTuningStrings: [0, 7, 0] },
    { TuningName: "　三味線　3弦：三下がり", NumberOfStrings: 3, StringTuningStrings: [10, 5, 0] },

    { TuningName: "★ウクレレ　4弦：スタンダード", NumberOfStrings: 4, StringTuningStrings: [9, 4, 0, 7] },

    { TuningName: "★二胡　2弦：スタンダード", NumberOfStrings: 2, StringTuningStrings: [9, 2] }
];

//モーダルインターチェンジ候補のスケール名を日本語と英語に切り替えるボタンのための関数(指板用)
function ScaleLanguageJEFingerBoard() {
    if (ScaleLanguageNum === 0) {
        ScaleLanguage = 'JapaneseName';
        document.getElementById("scale_language_change_button").className = "btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 1;
    } else if (ScaleLanguageNum === 1) {
        ScaleLanguage = 'EnglishName';
        document.getElementById("scale_language_change_button").className = "btn btn-danger box1 col-10 col-md-3 col-xl-2 mx-2 mt-2";
        ScaleLanguageNum = 0;
    };
    //モーダル・インターチェンジ候補のスケールの構成音の表示・非表示の切り替え(指板用)
    ModalCandidateSelectFingerBoard();
};

//モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(指板用)
function ModalCandidateSelectFingerBoard() {
    //言語の情報を取得する。
    ModalSelectNum = Number(document.getElementById("ModalCandidateSelect").value);
    //弦の本数を取得する。
    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    //言語表示なしの場合 又は 音名が選択されていないとき
    if (NumberOfStrings === 0) {
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

//スケール画面とコード画面の切り替えをする関数
function ScaleAndChordsDrowing() {

    ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    document.getElementById("ScaleAndChords").innerHTML = "";
    document.getElementById("InformationBlock").innerHTML = "";
    document.getElementById("RootTonic").innerHTML = "";

    if (ScaleAndChordsDrowingSwitch === 0) {
        document.getElementById("RootTonic").insertAdjacentHTML('afterbegin',
            `<label for="rootNumber" class="col-md-2 col-xl-1 pt-2 pb-2 mx-1">トニック
                <select id="rootNumber" class="form-select my-1" aria-label="Default select example"
                    onchange="FingerboardDateInfo()">
                    <option value=0 selected>C</option>
                    <option value=1>C#-D♭</option>
                    <option value=2>D</option>
                    <option value=3>D#-E♭</option>
                    <option value=4>E</option>
                    <option value=5>F</option>
                    <option value=6>F#-G♭</option>
                    <option value=7>G</option>
                    <option value=8>G#-A♭</option>
                    <option value=9>A</option>
                    <option value=10>A#-B♭</option>
                    <option value=11>B</option>
                </select>
            </label>`);

        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="box1 col-md-4 col-xl-3 pt-2 pb-2 mx-1">調べたいスケール
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDateInfo()">
            </select>
        </label>`);

        //JavaScriptによってスケールの選択肢を追加する
        CeateScaleChoices();

        document.getElementById("InformationBlock").insertAdjacentHTML('afterbegin', `
            <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        スケールの情報
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">

                    <div class="accordion-body">

                        <div id="Scale_name_text"></div>
                        <div id="Scale_Family_text"></div>
                        <div id="keySignatur_text"></div>
                        <div id="Scale_info_text"></div>
                        <div id="dominant_chord_text"></div>
                        <div id="Forte_number_text"></div>
                        <div id="Scale_number_text"></div>
                    </div>
                </div>
            </div>
        </div>`);
        document.getElementById("ScaleAndChordsChange").innerHTML
            = ``
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=1 class="btn btn-primary col-md-3 col-xl-2 mb-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">コード画面へ</button>`;

    } else if (ScaleAndChordsDrowingSwitch === 1) {

        document.getElementById("RootTonic").insertAdjacentHTML('afterbegin',
            `<label for="rootNumber" class="col-md-2 col-xl-1 pt-2 pb-2 mx-1">ルート
                <select id="rootNumber" class="form-select my-1" aria-label="Default select example"
                    onchange="FingerboardDateInfo()">
                    <option value=0 selected>C</option>
                    <option value=1>C#-D♭</option>
                    <option value=2>D</option>
                    <option value=3>D#-E♭</option>
                    <option value=4>E</option>
                    <option value=5>F</option>
                    <option value=6>F#-G♭</option>
                    <option value=7>G</option>
                    <option value=8>G#-A♭</option>
                    <option value=9>A</option>
                    <option value=10>A#-B♭</option>
                    <option value=11>B</option>
                </select>
            </label>`);

        document.getElementById("ScaleAndChords").insertAdjacentHTML('afterbegin', `
            <label for="constituent_binary" class="box1 col-md-4 col-xl-3 pt-2 pb-2 mx-1">調べたいコード
            <select id="constituent_binary" class="form-select my-1" aria-label="Default select example"
                onchange="FingerboardDateInfo()">
            </select>
        </label>`);

        //JavaScriptによってコードの選択肢を追加する
        CreateChordChoices();

        document.getElementById("InformationBlock").insertAdjacentHTML('afterbegin', `
            <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                コードの情報
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">

                <!-- コードネームの判定と情報をJavaScriptで書き込む -->
                <div id="AddChordHTML"></div>
                <div id="AddChordNameHTML"></div>
                <div><br></div>
                <div id="AddChordInfoHTML"></div>
                <div id="AddChordInfo2HTML"></div>
                <div id="AddChordInfoOmit5HTML"></div>
                <div id="AddChordInfoTriToneHTML"></div>
                <div id="AddChordInfoSub2HTML"></div>

                </div>
            </div>
            </div>
        </div>

        <div class="accordion py-3" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                このコードの構成音を含む主なスケールはこちら。
                </button>
            </h2>

            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">

                <label for="ModalCandidateSelect" class="box1 col-md-10 col-xl-4 pt-2 pb-0 mx-2">
                <select id="ModalCandidateSelect" class="form-select my-1" aria-label="Default select example"
                    onchange="ModalCandidateSelectFingerBoard()">
                    <option value=0 selected>英・米式表記で構成音を表示する</option>
                    <option value=1>イタリア式表記で構成音を表示する</option>
                    <option value=2>日本式表記で構成音を表示する</option>
                    <option value=3>ドイツ式表記で構成音を表示する</option>
                    <option value=4>構成音を表示しない</option>
                </select>
                </label>

                <div>
                <button id="scale_language_change_button" class="btn btn-primary box1 col-10 col-md-3 col-xl-2 mx-2 mt-2"
                    onclick="ScaleLanguageJEFingerBoard()">日本語⇔English</button>
                </div>

                <div class="accordion-body">
                <!--ページがロードされた後にJavaScriptによって候補となるスケールを表示する -->
                <div id="addHTML">
                    
                </div>

                </div>
            </div>
            </div>
        </div>`);

        document.getElementById("ScaleAndChordsChange").innerHTML = ``
        document.getElementById("ScaleAndChordsChange").innerHTML
            = `<button id="ScaleAndChordsChangeButton" value=0 class="btn btn-success col-md-3 col-xl-2 mb-2 py-2 mx-1"
        onclick="ScaleAndChordsDrowing()">スケール画面へ</button>`;
    };
    //スケール画面とコード画面ごとに必要な処理を行う関数
    FingerboardDateInfo();
};


//指定した弦の本数だけtr(行)要素をtableに書き込む関数
function StringsTable() {
    // NumberOfStrings = Number(document.getElementById("NumberOfStrings").value); //弦の本数
    Num = NumberOfStrings;
    for (let i = 0; i < NumberOfStrings; i++) {
        document.getElementById("Tuning").insertAdjacentHTML('afterbegin',
            `<label for="StringTuning_${Num}" id="TuningString_${Num}" class="box1 col-md-1 col-xl-1 py-1 mx-1">【${Num}弦】
            <select id="StringTuning_${Num}" class="form-select my-1" aria-label="Default select example"
            onchange="FletCreate(${NumberOfStrings})">
                <option value=0>C</option>
                <option value=1>C#-D♭</option>
                <option value=2>D</option>
                <option value=3>D#-E♭</option>
                <option value=4>E</option>
                <option value=5>F</option>
                <option value=6>F#-G♭</option>
                <option value=7>G</option>
                <option value=8>G#-A♭</option>
                <option value=9>A</option>
                <option value=10>A#-B♭</option>
                <option value=11>B</option>
            </select>
            </label>
        </tr>`)

        //弦のナンバーのtr(行)要素のidを書き込む
        document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="${Num}_string"></tr>`)
        Num--
    };
};

//フィンガーボードの要素を描画する関数
function LeftyFingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""

    //下段のフレットナンバーのtr(行)要素をtableに書き込む。
    //フレットの数を取得する 
    FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    Num = -1;
    //下の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberLower"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num++
    };

    // //指定した弦の本数だけtr(行)要素をtableに書き込む。
    StringsTable();

    //上段のフレットナンバーのtr(行)要素をtableに書き込む。
    Num = -1;
    //上の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberUpper"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num++
    };
};

//フィンガーボードの要素を描画する関数
function RightyFingerboardCreate() {
    //一度フィンガーボードを空にする
    document.getElementById("Fingerboard").innerHTML = ""
    document.getElementById("Tuning").innerHTML = ""

    //下段のフレットナンバーのtr(行)要素をtableに書き込む。
    //フレットの数を取得する 
    FletCount = Number(document.getElementById(`NumberOfFlet`).value);
    Num = FletCount;
    //下の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberLower"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberLower").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num--
    };

    // //指定した弦の本数だけtr(行)要素をtableに書き込む。
    StringsTable();

    //上段のフレットナンバーのtr(行)要素をtableに書き込む。
    Num = FletCount;
    //上の方のフレットナンバー
    document.getElementById("Fingerboard").insertAdjacentHTML('afterbegin', `<tr id="FletNumberUpper"></tr>`)
    for (let i = 0; i < FletCount + 2; i++) {
        //ポジションマークの数字の色を変える
        if (Num === 0
            || Num === 3
            || Num === 5
            || Num === 7
            || Num === 9
            || Num === 12
            || Num === 15
            || Num === 17
            || Num === 19
            || Num === 21
            || Num === 24
            || Num === 27
            || Num === 29) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay">${Num}</th>`)
        } else if (Num < 0) {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumberInlay"></th>`)
        } else {
            document.getElementById("FletNumberUpper").insertAdjacentHTML('afterbegin', `<th class="FletNumber">${Num}</th>`)
        }
        Num--
    };
};

// 右利きフレットに音名を描画する
function RightyToneNameCreate() {
    for (let st = 1; st < NumberOfStrings + 1; st++) {
        //フレットの数を取得する
        FletNum = Number(document.getElementById(`NumberOfFlet`).value);
        FletCount = FletNum;
        //以前に描画された音名を消去する。
        document.getElementById(`${st}_string`).innerHTML = "";
        //弦のチューニング項目からチューニング音を指定するvalueを読み込む。
        TuningNumber = document.getElementById(`StringTuning_${st}`).value;

        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            if (ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)] === "　") {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</td>`);
            } else {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), 12)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</Strong></td>`);
            }
            TuningNumber--
            FletNum--
        };
        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);
    };
};

// 左利きフレットに音名を描画する
function LeftyToneNameCreate() {
    for (let st = 1; st < NumberOfStrings + 1; st++) {
        //フレットの数を取得する
        FletCount = Number(document.getElementById(`NumberOfFlet`).value);
        FletNum = 0;
        //以前に描画された音名を消去する。
        document.getElementById(`${st}_string`).innerHTML = "";
        //弦のチューニング項目からチューニング音を指定するvalueを読み込む。
        TuningNumber = document.getElementById(`StringTuning_${st}`).value;

        //フレットボードの左端に、何弦かを表す数字とidを書き込む。
        document.getElementById(`${st}_string`).insertAdjacentHTML('afterbegin', `<th id="StringsNumber-${st}">${st}</th>`);

        // フレットの数だけfor文で音名を書き込む
        for (let i = 0; i < FletCount + 1; i++) {
            if (ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)] === "　") {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="DegreeBlack">${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</td>`);
            } else {
                document.getElementById(`${st}_string`)
                    .insertAdjacentHTML('afterbegin', `<td class="Degree${mod(TuningNumber - RootNumber - (24 - FletCount), 12)}"><Strong>${ConfigurationNotes[mod(TuningNumber - RootNumber - (24 - FletCount), 12)]}</Strong></td>`);
            }
            TuningNumber++
            FletNum++
        };

    };
};



//フレット上の音名を描画する関数
function FletCreate(NumberOfStrings) {
    //ルート音の情報を取得する。
    RootNumber = Number(document.getElementById("rootNumber").value);

    //配列を検索用の値とスケール構成音のバイナリ値を取得し、「-」でそれぞれ分割
    value = document.getElementById("constituent_binary").value.split('-');

    //配列を検索用の値
    ScaleNum = Number(value[1]);

    //スケールのバイナリ値を、10進数のスケールナンバーに変換する。
    onoff = value[0].split('').map(Number);

    //音名の表記方法を取得する
    key_signature_names = Number(document.getElementById(`key_signature_names`).value);

    //コード画像かスケール画面かを判定する値
    ScaleAndChordsDrowingSwitch = Number(document.getElementById("ScaleAndChordsChangeButton").value);

    //構成音を格納する配列を定義する
    ConfigurationNotes = [];
    ConfigurationNotes.splice(0);

    //スケールの場合の処理
    if (ScaleAndChordsDrowingSwitch === 1) {
        //スケール構成音のバイナリを配列に格納する。
        Configuration = scale_Container[ScaleNum]['ScaleNumBinary'];
        //シャープとフラットの区別をする変数SOFに値を代入。
        if (mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 0
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 2
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 4
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 6
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 7
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 9
            || mod(RootNumber - scale_Container[ScaleNum]['addNum'], 12) === 11) {
            SOF = 0;
        } else {
            SOF = 1;
        };

        //コードの場合の処理
    } else if (ScaleAndChordsDrowingSwitch === 0) {
        //コード構成音のバイナリを配列に格納する。
        Configuration = chord_container[ScaleNum]['ChordBinary'];
        //mを判定するために「omit5」を除く
        ChordName = chord_container[ScaleNum]['ChordName'].replace("omit5", "")

        //3度の異名同音判定
        if (ChordName.includes("m")) {
            Configuration[3] = 3;
        };

        if (ChordName.includes("♭9")) {
            Configuration[1] = 3;
        };

        if (ChordName.includes("#9")) {
            Configuration[3] = 2;
        };

        if (ChordName.includes("#11")) {
            Configuration[6] = 2;
        };

        if (ChordName.includes("♭5")) {
            Configuration[6] = 3;
        };

        if (ChordName.includes("aug")) {
            Configuration[8] = 2;
        };

        if (ChordName.includes("#5")) {
            Configuration[8] = 2;
        };

        if (ChordName.includes("♭13")) {
            Configuration[8] = 3;
        };

        //7度の異名同音判定
        if (Configuration[11] >= 1 && ChordName.includes("Maj7")) {
            Configuration[11] = 1;
        } else if (ChordName.includes("m(♭5)")) {
            Configuration[0] = 3;
            Configuration[3] = 3;
            Configuration[6] = 3;
        } else if (ChordName.includes("dim")) {
            Configuration[0] = 3;
            Configuration[3] = 3;
            Configuration[6] = 3;
            Configuration[9] = 3;
        } else if (Configuration[10] >= 1 && ChordName.includes("7")) {
            Configuration[10] = 3;
        } else if (Configuration[10] >= 1 && ChordName.includes("9")) {
            Configuration[10] = 3;
        };

        if (ChordName.includes("blk")) {
            Configuration[2] = 2;
            Configuration[6] = 2;
            Configuration[10] = 2;
        };

        //シャープとフラットの区別をする変数SOFに値を代入。
        if (mod(RootNumber, 12) === 0
            || mod(RootNumber, 12) === 2
            || mod(RootNumber, 12) === 4
            || mod(RootNumber, 12) === 6
            || mod(RootNumber, 12) === 7
            || mod(RootNumber, 12) === 9
            || mod(RootNumber, 12) === 11) {
            SOF = 0;
        } else {
            SOF = 1;
        };
    };

    //for文でスケールの構成音を生成する。
    for (let i = 0; i < 12; i++) {
        //音名の言語を選択・スケールをトニックから・#か♭か選んで取り出す。
        if (Configuration[i] === 2) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][0]);
        } else if (Configuration[i] === 3) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][1]);
        } else if (Configuration[i] === 1) {
            ConfigurationNotes.push(EIJG2[key_signature_names][mod(RootNumber + i, 12)][SOF]);
        } else if (Configuration[i] === 0) {
            ConfigurationNotes.push("　");
        } else {
        };
    };

    //1：(#Ⅰ/♭Ⅱ)の処理
    if (Configuration[1] === 2) {
        ConfigurationNotes.splice(1, 1, AllNoteNames[mod(RootNumber + 1, 12)][key_signature_names][3]);
    } else if (Configuration[1] === 3) {
        ConfigurationNotes.splice(1, 1, AllNoteNames[mod(RootNumber + 1, 12)][key_signature_names][4]);
    };

    //2：(♭♭Ⅲ)の処理
    if (Configuration[2] === 3) {
        ConfigurationNotes.splice(2, 1, AllNoteNames[mod(RootNumber + 2, 12)][key_signature_names][7]);
    };

    //3：(#Ⅱ/♭Ⅲ)の処理
    if (Configuration[3] === 2) {
        ConfigurationNotes.splice(3, 1, AllNoteNames[mod(RootNumber + 3, 12)][key_signature_names][6]);
    } else if (Configuration[3] === 3) {
        ConfigurationNotes.splice(3, 1, AllNoteNames[mod(RootNumber + 3, 12)][key_signature_names][8]);
    };

    //4：(#Ⅲ/♭Ⅳ)の処理
    if (Configuration[4] === 2) {
        ConfigurationNotes.splice(4, 1, AllNoteNames[mod(RootNumber + 4, 12)][key_signature_names][10]);
    } else if (Configuration[4] === 3) {
        ConfigurationNotes.splice(4, 1, AllNoteNames[mod(RootNumber + 4, 12)][key_signature_names][11]);
    };

    //6：(#Ⅳ/♭Ⅴ)の処理
    if (Configuration[6] === 2) {
        ConfigurationNotes.splice(6, 1, AllNoteNames[mod(RootNumber + 6, 12)][key_signature_names][13]);
    } else if (Configuration[6] === 3) {
        ConfigurationNotes.splice(6, 1, AllNoteNames[mod(RootNumber + 6, 12)][key_signature_names][14]);
    };

    //8：(#Ⅴ/♭Ⅶ)の処理
    if (Configuration[8] === 2) {
        ConfigurationNotes.splice(8, 1, AllNoteNames[mod(RootNumber + 8, 12)][key_signature_names][16]);
    } else if (Configuration[8] === 3) {
        ConfigurationNotes.splice(8, 1, AllNoteNames[mod(RootNumber + 8, 12)][key_signature_names][17]);
    };

    //9：(♭♭Ⅶ)の処理
    if (Configuration[9] === 3) {
        ConfigurationNotes.splice(9, 1, AllNoteNames[mod(RootNumber + 9, 12)][key_signature_names][20]);
    };

    //10：(#Ⅴ/♭Ⅶ)の処理
    if (Configuration[10] === 2) {
        ConfigurationNotes.splice(10, 1, AllNoteNames[mod(RootNumber + 10, 12)][key_signature_names][19]);
    } else if (Configuration[10] === 3) {
        ConfigurationNotes.splice(10, 1, AllNoteNames[mod(RootNumber + 10, 12)][key_signature_names][21]);
    };

    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフレットに音名を描画する
        RightyToneNameCreate();
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフレットに音名を描画する
        LeftyToneNameCreate();
    };

    //コード画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 0) {
        //シャープまたはフラット指定用に書き換えた数値を元に戻す
        for (let i = 0; i < Configuration.length; i++) {
            if (Configuration[i] === 2) {
                Configuration.splice(i, 1, 1);
            };
            if (Configuration[i] === 3) {
                Configuration.splice(i, 1, 1);
            };
        };
        //コード・ネームの情報を判定する関数
        ChordCandidateInfo(onoff);
        //モーダル・インターチェンジ候補を表示するためのHTML要素(div)を追加するための関数
        CreateCandidate();
        ////モーダルインターチェンジ候補のスケールの構成音の表示・非表示の切り替え(コード・コード/モード検索用)
        ModalCandidateSelect();
    };
    //スケール画面の場合の処理
    if (Number(document.getElementById("ScaleAndChordsChangeButton").value) === 1) {
        //スケール情報を描画する関数
        ScaleInformationDrawing();
    };

    //構成音を戻り値として返す
    return Configuration;
};



//スケール画面とコード画面ごとに必要な処理を行う関数
function FingerboardDateInfo() {

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    TuningDate = [4, 11, 7, 2, 9, 4, 11, 6, 1, 8];
    TuningVariationValue = document.getElementById("TuningVariation").value.split(':');

    TuningInfo = TuningVariationValue[0].split('-').map(Number);

    for (let i = 0; i < TuningInfo.length; i++) {
        TuningDate.splice(i, 1, TuningInfo[i]);
    };

    //弦の本数を設定する
    NumberOfStrings = TuningVariation[Number(TuningVariationValue[1])]['NumberOfStrings'];
    document.getElementById("NumberOfStrings").selectedIndex = NumberOfStrings - 1;


    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフィンガーボードの要素を描画する関数
        RightyFingerboardCreate(NumberOfStrings);
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフィンガーボードの要素を描画する関数
        LeftyFingerboardCreate(NumberOfStrings);
    };

    //チューニングを変更する
    StringsTuning = TuningVariation;
    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = TuningDate[i];
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};

//スケール画面とコード画面ごとに必要な処理を行う関数
function NumberOfStringsManually() {

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    TuningDate = [4, 11, 7, 2, 9, 4, 11, 6, 1, 8];
    TuningVariationValue = document.getElementById("TuningVariation").value.split(':');

    TuningInfo = TuningVariationValue[0].split('-').map(Number);

    for (let i = 0; i < TuningInfo.length; i++) {
        TuningDate.splice(i, 1, TuningInfo[i]);
    };

    NumberOfStrings = Number(document.getElementById("NumberOfStrings").value);

    //利き手を判定
    if (Number(document.getElementById("DominantHand").value) === 0) {
        // 右利きフィンガーボードの要素を描画する関数
        RightyFingerboardCreate(NumberOfStrings);
    } else if (Number(document.getElementById("DominantHand").value) === 1) {
        // 左利きフィンガーボードの要素を描画する関数
        LeftyFingerboardCreate(NumberOfStrings);
    };

    //チューニングを変更する
    StringsTuning = TuningVariation;
    for (let i = 0; i < NumberOfStrings; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = TuningDate[i];
        };
    };

    //フレット上の音名を描画する関数
    FletCreate(NumberOfStrings);
};



//チューニングの選択肢を表示するためのHTML要素(option)を追加するための関数
function CreateTuningVariation() {
    //コードを格納した配列の長さを取得する。
    Num = TuningVariation.length;

    document.getElementById("TuningVariation").innerHTML = "";

    //配列の数だけコードの選択肢optionを追加する。
    for (let i = 0; i < TuningVariation.length; i++) {
        Num--
        if (Num === 0) {
            //メジャーコードを初期の選択肢にする。
            document.getElementById("TuningVariation").insertAdjacentHTML('afterbegin', `<option value=${TuningVariation[Num]['StringTuningStrings'].join('-')}:${Num} selected>${TuningVariation[Num]["TuningName"]}</option>`);
        } else {
            document.getElementById("TuningVariation").insertAdjacentHTML('afterbegin', `<option value=${TuningVariation[Num]['StringTuningStrings'].join('-')}:${Num}>${TuningVariation[Num]["TuningName"]}</option>`);
        };
    };

};



//弦のチューニングを決定する関数
function Tuning(NumberOfStrings) {

    //主なチューニングタイプを格納した連想配列を検索用の値と構成音のバイナリ値を取得し、「-」でそれぞれ分割
    TuningValue = document.getElementById("TuningVariation").value.split(':');

    //弦の本数を設定する
    StringsNum = Number(TuningValue[1]) - 1;
    console.log(StringsNum);
    document.getElementById("NumberOfStrings").selectedIndex = TuningVariation[StringsNum]['NumberOfStrings'];

    //チューニングを変更する
    StringsTuning = TuningValue[0].split('-').map(Number);
    for (let i = 0; i < StringsTuning.length; i++) {
        if (NumberOfStrings >= i + 1) {
            document.getElementById(`StringTuning_${i + 1}`).selectedIndex = StringsTuning[i];
        };
    };

};

