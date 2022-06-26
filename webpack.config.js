//webpack.config.js

const path = require('path')

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: path.resolve(__dirname, "./src/test.js"),
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path.resolve(__dirname, 'dist'),
        // 出力ファイル名
        filename: 'main.js'
    },
}