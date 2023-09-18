'use strict';

//headのコンポーネントを定義---------------------------------
Vue.component('head-template', {
  template: `
      <div>
      <!--Font Awesome を読み込む-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
      </div>
      `
})

//headのコンポーネントのインスタンスを作成する
const headTemplate = new Vue({
  el: '#head'
})

//コードネームの判定と情報のコンポーネントを定義---------------------------------
Vue.component('chord-template', {
  template: `
        <div>
            <div id="MainChordInfoTable" class="ChordInfoTable">
                <div id="NameOfChord" class="NameOfChord"></div>
                <div id="NameOfSlashChord" class="NameOfChord"></div>
                <div id="HowToReadChordName" class="HowToReadChord"></div>
                <div id="HowToReadSlashChordName" class="HowToReadChord"></div>
            </div>
            <div class="ChordInfo">
                <div class="InfoArea">
                    <div id="ChordInfo"></div>
                    <div id="Omit5Info"></div>
                    <div id="HowManyChordTone"></div>
                    <div id="TriToneInfo"></div>
                    <div id="Sub2Info"></div>
                </div>
                <div class="ChordArea ChordAreaCharacter">
                    <div id="OtherInterpretations"></div>
                </div>
            </div>
        </div>
      `
})

//コードネームの判定と情報のコンポーネントのインスタンスを作成する
const chordTemplate = new Vue({
  el: '#chord-template'
})

//ネガティヴ化したコードネームの判定と情報のコンポーネントを定義---------------------------------
Vue.component('negative-chord-template', {
  template: `
              <div>
                <div id="NegativeSubstitutionInfo" class="InfoPoint py-2">ネガティヴ・ハーモニー理論に基づく代理コード</div>

                <!-- コードネームの判定と情報をJavaScriptで書き込む -->
                <table class="ChordInfoTable">
                  <tr>
                    <td id="N_NameOfChord" class="NameOfChord"></td>
                  </tr>
                  <tr>
                    <td id="N_HowToReadChordName" class="HowToReadChord"></td>
                  </tr>
                </table>

                <div class="ChordInfo">
                  <div class="InfoArea">
                    <div id="N_ChordInfo"></div>
                    <div id="N_Omit5Info"></div>
                    <div id="N_HowManyChordTone"></div>
                    <div id="N_TriToneInfo"></div>
                    <div id="N_Sub2Info"></div>
                  </div>

                  <div class="ChordArea ChordoAreaCharacter">
                    <div id="N_OtherInterpretations"></div>
                  </div>
                </div>

                <div><br></div>
                <table class="box_table">
                  <tr id="Negative_Degree_table">
                    <td class="box_border" id="Negative_Degree_table_0"></td>
                    <td class="box_border" id="Negative_Degree_table_1"></td>
                    <td class="box_border" id="Negative_Degree_table_2"></td>
                    <td class="box_border" id="Negative_Degree_table_3"></td>
                    <td class="box_border" id="Negative_Degree_table_4"></td>
                    <td class="box_border" id="Negative_Degree_table_5"></td>
                    <td class="box_border" id="Negative_Degree_table_6"></td>
                    <td class="box_border" id="Negative_Degree_table_7"></td>
                    <td class="box_border" id="Negative_Degree_table_8"></td>
                    <td class="box_border" id="Negative_Degree_table_9"></td>
                    <td class="box_border" id="Negative_Degree_table_10"></td>
                    <td class="box_border" id="Negative_Degree_table_11"></td>
                  </tr>
                  <tr id="Negative_Tension_table">
                    <td class="box_border" id="Negative_Tension_table_0"></td>
                    <td class="box_border" id="Negative_Tension_table_1"></td>
                    <td class="box_border" id="Negative_Tension_table_2"></td>
                    <td class="box_border" id="Negative_Tension_table_3"></td>
                    <td class="box_border" id="Negative_Tension_table_4"></td>
                    <td class="box_border" id="Negative_Tension_table_5"></td>
                    <td class="box_border" id="Negative_Tension_table_6"></td>
                    <td class="box_border" id="Negative_Tension_table_7"></td>
                    <td class="box_border" id="Negative_Tension_table_8"></td>
                    <td class="box_border" id="Negative_Tension_table_9"></td>
                    <td class="box_border" id="Negative_Tension_table_10"></td>
                    <td class="box_border" id="Negative_Tension_table_11"></td>
                  </tr>
                  <tr>
                    <td id="NegativeChord_0" class="NoteName"></td>
                    <td id="NegativeChord_1" class="NoteName"></td>
                    <td id="NegativeChord_2" class="NoteName"></td>
                    <td id="NegativeChord_3" class="NoteName"></td>
                    <td id="NegativeChord_4" class="NoteName"></td>
                    <td id="NegativeChord_5" class="NoteName"></td>
                    <td id="NegativeChord_6" class="NoteName"></td>
                    <td id="NegativeChord_7" class="NoteName"></td>
                    <td id="NegativeChord_8" class="NoteName"></td>
                    <td id="NegativeChord_9" class="NoteName"></td>
                    <td id="NegativeChord_10" class="NoteName"></td>
                    <td id="NegativeChord_11" class="NoteName"></td>
                  </tr>
                </table>

                <div class="N_key">
                  <div class="N_clef">
                    <div id="Negative_clef_image" class="N_clef_img"></div>
                  </div>
                  <div class="N_Pair">
                    <div id="EqualKeyCenterInfo" class="InfoPoint py-2">キーセンターから距離が等しい音のペア</div>
                    <a id="NegativeNotePair_0"></a><br>
                    <a id="NegativeNotePair_1"></a><br>
                    <a id="NegativeNotePair_2"></a><br>
                    <a id="NegativeNotePair_3"></a><br>
                    <a id="NegativeNotePair_4"></a><br>
                    <a id="NegativeNotePair_5"></a><br>
                    <div id="NegativePairAnnotation" class="pt-3"></div>
                  </div>
                </div>
              </div>
      `
})

//ネガティヴ化したコードネームの判定と情報のコンポーネントのインスタンスを作成する
const negativeChordTemplate = new Vue({
  el: '#negative-chord-template'
})

//ヘッダーのコンポーネントを定義---------------------------------
Vue.component('header-template', {
  template: `
      <div>
      <nav class="navbar navbar-expand-xxl navbar-dark fixed-top bg-dark">
      <div class="container-fluid">

      <a class="navbar-brand text-white" href="index.html">
        <img class="site_icon" src="image/O-TO_Favicon.svg" alt="サイトアイコン">
        <span class="pc_only_none">音楽理論ウェブアプリ</span>
      </a>

      <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="o-to-chords.html">①コード</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-scale.html">②スケール</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modal-interchange.html">③コード/スケール逆引き</a>
          </li>
          <li class="nav-item pc_only">
            <a class="nav-link" href="o-to-reverse-lookup-keyboard.html">(MIDI)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-chord-progression.html">④コード進行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-diatonic-chords.html">⑤ダイアトニック・コード</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modulation.html">⑥転調</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-note-value.html">⑦音価</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-metric-modulation.html">⑧高度なリズム</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-degree-change.html">⑨コード移調</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-fingerboard.html">⑩指板</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-reverse-lookup-fingerboard.html">⑪逆引き指板</a>
          </li>
        </ul>
      </div>

      </div>
      </nav>
      </div>
      `
})

//ヘッダーのコンポーネントのインスタンスを作成する
const headerTemplate = new Vue({
  el: '#header'
})

//リンクカードのコンポーネントを定義---------------------------------
Vue.component('link-card', {
  template: `
          <div class="link_table">
            <div class="card">
              <div class="card-body">
                <a href="o-to-chords.html">
                  <h5>①コードの構成音を調べる</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/chords_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  <span
                    class="chord_count">110種類以上</span>のコードの構成音や情報を、全てのルート音で調べられるツールです。同時に、指定したコードの構成音を含む主なスケールと、ネガティヴ・ハーモニー理論に基づく代理コードも表示されます。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-scale.html">
                  <h5>②スケールの構成音を調べる</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/scale_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  <span class="scale_count">70種類以上</span>のスケールの構成音や情報を、全てのキーで調べられるツールです。同時に、指定したスケールの構成音を含む主なコードも表示されます。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-modal-interchange.html">
                  <h5>③コード/スケール名を逆引き検索</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/modal-interchange_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  構成音からコード・ネームやスケール名を検索できるツールです。コードの特徴など、詳細情報も確認できます。<br><a href="o-to-reverse-lookup-keyboard.html">MIDIキーボード対応版はこちら。</a>
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-chord-progression.html">
                  <h5>④コード進行まとめ</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/chord-progression_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  <span class="chord_prog_count">100種類以上</span>のコード進行をまとめたツールです。表示は全てのキーへ切り替え可能なので、実質<span
                    class="all_chord_prog_count">1000種類以上</span>のコード進行を確認できます。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-diatonic-chords.html">
                  <h5>⑤ダイアトニック・コード一覧表</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/diatonic-chords_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  ダイアトニック・コードの一覧表ツールです。表示は全てのキーへ切り替え可能です。各コードに対応するテンションや、モード・スケールも確認できます。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-modulation.html">
                  <h5>⑥転調の間隔・関係調を調べる</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/modulation_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  指定した調（キー）の関係性を調べられるツールです。<span class="scale_count">70種類以上</span>のスケールや、モードを指定可能です。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-note-value.html">
                  <h5>⑦音価の計算をする</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/note-value_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  「音価」を計算するアプリです。BPMを指定するだけで18種類の音符の長さがまとめて確認できます。表示は秒、ミリ秒、マイクロ秒、sec、ms、μsに切り替え可能です。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-metric-modulation.html">
                  <h5>⑧メトリック・モジュレーション</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/metric-modulation_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  「メトリック・モジュレーション」に関係する情報を調べるツールです。様々な「音符の音価」と、「同じ音価を持つ別の音符のBPM」が簡単に分かります。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-degree-change.html">
                  <h5>⑨コード進行のテキストを移調する</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/degree-change_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  コード進行のテキストを移調するツールです。入力したコード進行のテキストを「12キー全て」と「ディグリー・ネーム」へ変換できます。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-fingerboard.html">
                  <h5>⑩弦楽器の指板を可視化する</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/fingerboard_thumbnail.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  コードやスケールの「指板上のポジション」を可視化するツールです。ギターだけではなく、ベース、多弦楽器、レフティー表示も可能です。
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a href="o-to-reverse-lookup-fingerboard.html">
                  <h5>⑪指板からコード/スケール名を逆引き検索</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/reverse-lookup-fingerboard.png" alt="サムネイル">
                </a>
                <p class="card-text">
                  指板から選んだ構成音に対応するコード・ネームやスケール名を検索できるツールです。コード、スケールの名前をカンタンに逆引きできます！
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <a target="_blank" rel="noopener noreferrer"
                  href="https://mwsr.khufrudamonotes.com/polyrhythm-metronome">
                  <h5>メトロノーム（ポリリズム対応）</h5>
                  <img class="link_image pt-3 pb-3" src="image/thumbnail/polyrhythm-metronome_thumbnail.png"
                    alt="サムネイル">
                </a>
                <p class="card-text">
                  ポリリズム対応のメトロノームです。音と視覚でポリリズムを理解できます。1～20までの数値を設定可能です。
                </p>
              </div>
            </div>
          </div>
      `
})

//リンクカードのコンポーネントのインスタンスを作成する
const linkCard = new Vue({
  el: '#link-card'
})

//右カラム部分のコンポーネントを定義---------------------------------
Vue.component('right-column', {
  template: `
        <div class="right_column">

        <div class="Larger shadow p-3 mt-0 mb-3 rounded pb-2 m-3">
          <h5>音楽理論アプリの一覧</h5>
        </div>

        <ul>
          <li class="nav-item">
            <a class="nav-link" href="o-to-chords.html">①コード（<span class="chord_count">110種類以上</span>）の構成音を調べる</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-scale.html">②スケール（<span class="scale_count">70種類以上</span>）の構成音を調べる</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modal-interchange.html">③コード/スケール名を逆引き検索</a>
          </li>
          <li class="nav-item pc_only">
            <a class="nav-link" href="o-to-reverse-lookup-keyboard.html">- (MIDIキーボードで逆引き検索)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-chord-progression.html">④コード進行まとめ（<span class="chord_prog_count12">90×12種類以上</span>）</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-diatonic-chords.html">⑤ダイアトニック・コード（8種類の環境）</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modulation.html">⑥転調の間隔・調の関係を調べる</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-note-value.html">⑦音価の計算（18種類の音符）</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-metric-modulation.html">⑧メトリック・モジュレーション</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-degree-change.html">⑨コード進行のテキストを移調する</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-fingerboard.html">⑩弦楽器の指板を可視化する</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-reverse-lookup-fingerboard.html">⑪逆引き指板</a>
          </li>
        </ul>

        <div class="Larger shadow p-3 mb-3 rounded pb-2 m-3">
          <h5>音楽学習アプリの一覧</h5>
        </div>

        <ul>
          <li class="nav-item">
            <a class="nav-link" href="https://mwsr.khufrudamonotes.com/rhythm-training" target="_blank" rel="noopener noreferrer">リズム・トレーニング（教材）</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mwsr.khufrudamonotes.com/metronome" target="_blank" rel="noopener noreferrer">メトロノーム（変拍子対応）</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://mwsr.khufrudamonotes.com/polyrhythm-metronome" target="_blank" rel="noopener noreferrer">メトロノーム（ポリリズム対応）</span></a>
          </li>
        </ul>

        <div class="Larger shadow p-3 mb-3 rounded pb-2 m-3">
          <h5>音楽関係の資料データ</h5>
        </div>

      <ul>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">五度圏(png)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">音楽理論マインドマップ(png)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">開放弦を使わないギターコード表(pdf)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">開放弦を使ったギターコード表(pdf)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">Finale 自作スクリプト集(XML)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">イコライザーの使い方 フローチャート(png)</span></a>
          </li>
      </ul>

        <div class="Larger shadow p-3 mb-3 rounded pb-2 m-3">
          <h5>関連ページへのリンク</h5>
        </div>

      <ul>
        <li class="nav-item">
          <a class="nav-link" href="https://khufrudamonotes.com/frequencies-for-equal-tempered-scale" target="_blank" rel="noopener noreferrer">音名と周波数の一覧（A=440Hz/12平均律）</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://docs.google.com/spreadsheets/d/1mo7wY14HYi7PhnRst_a-9c4Sx9cLGNQlkf3ovcwLFF8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">曲情報データベース（転調・旋法・BPM）</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://open.spotify.com/playlist/0agzPhkKi9HDjmxq03X0ZH?si=5I1_8LMEQHmUNg-zcTJo0Q" target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(Spotify)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://youtube.com/playlist?list=PLTHnsfzQ5qvRySi-Nvpl1vuZdJ413iSbt" target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(YouTube)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://khufrudamonotes.com/category/music-theory-and-dtm" target="_blank" rel="noopener noreferrer">音楽理論・DTM関連のブログ記事</span></a>
        </li>
      </ul>

        <div class="Larger shadow p-3 mb-3 rounded pb-2 m-3">
          <h5>便利だと思ったら是非シェアを！</h5>
        </div>

        <div>
          <ul>
            <li class="py-1 nav-item">
              <!-- Xのシェアボタン -->
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">
                Tweet
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- はてなブックマークへのシェアボタン -->
              <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加">
                <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加"
                  width="20" height="20" style="border: none;" />
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- noteへのシェアボタン -->
              <a href="https://note.com/intent/social_button" class="note-social-button"
                data-url="https://o-to.khufrudamonotes.com/"></a>
            </li>
            <li class="py-1 nav-item">
              <!-- pocketへのシェアボタン -->
              <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>
            </li>
            <li class="py-1 nav-item">
              <!-- Lineへのシェアボタン -->
              <a class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3"
                data-url="https://o-to.khufrudamonotes.com/" data-color="default" data-size="small" data-count="true"
                style="display: none;">
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- Facebookへのシェアボタン -->
              <a class="fb-like" data-href="https://o-to.khufrudamonotes.com/" data-width="" data-layout="button_count"
                data-action="like" data-size="small" data-share="true"></a>
            </li>
          </ul>
      </div>
        `
})

//右カラム部分のコンポーネントのインスタンスを作成する
const rightColumn = new Vue({
  el: '#right-column'
})

//------------------------------------------------------------------------------------------------------------------------------------
//フッター部分のコンポーネントを定義
Vue.component('footer-profile', {
  template: `
        <div class="footer_profile">
          <a href="https://yoshito.khufrudamonotes.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-user-circle"></i> 開発者の自己紹介</a>
        </div>
      `
})

Vue.component('footer-github', {
  template: `
        <div class="footer_github">
          <a href="https://github.com/Yoshito924/O-TO" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>GitHub</a>
        </div>
      `
})

Vue.component('footer-bug', {
  template: `
        <div class="footer_bug">
          <a href="https://khufrudamonotes.com/contact-english" target="_blank" rel="noopener noreferrer"><i class="far fa-comment"></i>バグや不具合の報告</a>
        </div>
      `
})

Vue.component('footer-info', {
  template: `
        <div class="footer_info">
          <a href="info.html"><i class="fas fa-music"></i>このアプリについて</a>
        </div>
      `
})

Vue.component('footer-twitter', {
  template: `
        <div class="footer_twitter">
          <a href="https://twitter.com/k1mu0419" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i>Twitter</a>
        </div>
      `
})


Vue.component('footer-youtube', {
  template: `
        <div class="footer_youtube">
          <a href="https://www.youtube.com/c/YoshitoKimura/featured" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i>YouTube</a>
        </div>
      `
})

Vue.component('site-logo', {
  template: `
    <div class="site_logo displayed">
      <a href="https://www.youtube.com/channel/UCj1FMSo7yhgjLlCiMZG-cFw" target="_blank" rel="noopener noreferrer">
        <img src="image/KHUFRUDAMO NOTES Logo only.svg" alt="クフルダモノーツのロゴ" title="KHUFRUDAMO NOTES Logo">
      </a>
    </div>
    `
})

Vue.component('footer-copyright', {
  template: `
        <div class="footer_copyright">
          &copy; 2021- KHUFRUDAMO NOTES (since 2009)
        </div>
      `
})

//フッター部分のインスタンスを作成する
const footer = new Vue({
  el: '#footer'
})

//------------------------------------------------------------------------------------------------------------------------------------
//見出し部分のコンポーネントを定義
Vue.component('title-display', {
  template: `
    <div class="header_image">
      <a href="index.html">
        <img class="link_image" src="image/thumbnail/O-TO_site_header.svg" alt="ヘッダー画像">
      </a>
    </div>
    `
})

//見出し部分のコンポーネントのインスタンスを作成する
const titleDisplay = new Vue({
  el: '#display'
})

const chordColor = new Vue({
  el: "app",
  data: {
    check: "list-group-item col-xl text-center",
    check: "list-group-item list-group-item-danger col-xl text-center",
  },
  methods: {

  }
})

//切り替えタブを描画する
new Vue({
  el: '#tabBox',
  data: {
    isActive: '1',
  }
})

//------------------------------------------------------------------------------------------------------------------------------------
//リンクテーブルのコンポーネントを定義---------------------------------
Vue.component('link-table', {
  template: `
    <div>

        <h3 class="Larger shadow p-3 rounded mb-4 py-3">音楽アプリの一覧</h3>

        <p class="pt-2">各ツール（ウェブアプリ）は、全て無料で使えます。</p>

        <div class="link_table1">
          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-chords.html">
                          ①コードの構成音を調べる
                      </a>
                  </h4>
                  <p class="card-text">
                      <span
                          class="chord_count">110種類以上</span>のコード情報を全ルート音で検索できます。対応する主要なスケールや、ネガティヴ・ハーモニー理論に基づく代理コードも表示されます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-scale.html">
                          ②スケールの構成音を調べる
                      </a>
                  </h4>
                  <p class="card-text">
                      <span class="scale_count">70種類以上</span>のスケールの情報を全てのキーで調べられます。同時に、対応する主要なコードも表示されます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-modal-interchange.html">
                          ③コード/スケール名を逆引き検索
                      </a>
                  </h4>

                  <p class="card-text">
                      選択した構成音に対応するコードやスケール名を検索できます。<br><a href="o-to-reverse-lookup-keyboard.html">MIDIキーボード対応版はこちら。</a>
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-chord-progression.html">
                          ④コード進行まとめ
                      </a>
                  </h4>
                  <p class="card-text">
                      <span class="chord_prog_count">100種類以上</span>のコード進行（12キー対応なので実質<span
                          class="all_chord_prog_count">1000種類以上</span>）をまとめました。<br>ディグリー・ネームで表示もできます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-diatonic-chords.html">
                          ⑤ダイアトニック・コード一覧表
                      </a>
                  </h4>
                  <p class="card-text">
                      ダイアトニック・コードの一覧です。12キーへ切り替え可能で各コードのテンションやモード・スケールも確認できます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-modulation.html">
                          ⑥転調の間隔・関係調を調べる
                      </a>
                  </h4>
                  <p class="card-text">
                      指定した調（キー）の関係性を調べられるツールです。<span class="scale_count">70種類以上</span>のスケールや、モードを指定可能です。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-note-value.html">
                          ⑦音価の計算をする
                      </a>
                  </h4>
                  <p class="card-text">
                      指定したBPMに基づいて18種類の音符の音価を計算します。それぞれ秒、ミリ秒、マイクロ秒で表示できます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-metric-modulation.html">
                          ⑧メトリック・モジュレーション
                      </a>
                  </h4>
                  <p class="card-text">
                      「"異なる音符"が"同じ音価を持つ時のBPM"」を簡単に計算できます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-degree-change.html">
                          ⑨コード進行のテキストを移調する
                      </a>
                  </h4>
                  <p class="card-text">
                      コード進行のテキストを「12キー全て」に移調できます。ディグリー・ネームに変換もできます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-fingerboard.html">
                          ⑩弦楽器の指板を可視化する
                      </a>
                  </h4>
                  <p class="card-text">
                      コードやスケールのギター指板上でのポジションが分かります。ベース、多弦楽器、レフティー表示などにも対応しています。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a href="o-to-reverse-lookup-fingerboard.html">
                          ⑪指板からコード/スケール名を逆引き検索
                      </a>
                  </h4>
                  <p class="card-text">
                      指板から選択した構成音に対応するコードやスケール名を逆引き検索できます。
                  </p>
              </div>
          </div>

          <div class="card">
              <div class="card-body">
                  <h4>
                      <a target="_blank" rel="noopener noreferrer" href="https://mwsr.khufrudamonotes.com/polyrhythm-metronome">
                          ・メトロノーム（ポリリズム対応）
                      </a>
                  </h4>
                  <p class="card-text">
                      ポリリズム対応のメトロノームです。音と視覚でポリリズムを理解できます。1～20までの数値を設定可能です。
                  </p>
              </div>
          </div>
        </div>

      <div>
        <h3 class="Larger shadow p-3 rounded mb-4 py-3">
          バグ報告のお願い
        </h3>

        <p>
        バグや不具合を発見した場合は、お手数をおかけしますが<a href="https://khufrudamonotes.com/contact-english" target="_blank"
            rel="noreferrer noopener">コンタクトページ</a>から報告していただけるとありがたいです。</p>
        </p>

        <p class="pb-4">その他、当ウェブアプリに関するご意見 ご感想などもお気軽にご連絡ください。</p>
      </div>

        <div>
            <h3 class="Larger shadow p-3 rounded mb-4 py-3">便利だと思ったら是非シェアを！</h3>

          <p class="pt-2">SNSなどでシェアしていただくと、アプリ開発の励みになります！</p>
          <ul>
            <li class="py-1 nav-item">
              <!-- Xのシェアボタン -->
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                data-show-count="false">
                Tweet
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- はてなブックマークへのシェアボタン -->
              <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja"
                title="このエントリーをはてなブックマークに追加">
                <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
                  alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" />
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- noteへのシェアボタン -->
              <a href="https://note.com/intent/social_button" class="note-social-button"
                data-url="https://o-to.khufrudamonotes.com/"></a>
            </li>
            <li class="py-1 nav-item">
              <!-- pocketへのシェアボタン -->
              <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>
            </li>
            <li class="py-1 nav-item">
              <!-- Lineへのシェアボタン -->
              <a class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3"
                data-url="https://o-to.khufrudamonotes.com/" data-color="default" data-size="small" data-count="true"
                style="display: none;">
              </a>
            </li>
            <li class="py-1 nav-item">
              <!-- Facebookへのシェアボタン -->
              <a class="fb-like" data-href="https://o-to.khufrudamonotes.com/" data-width="" data-layout="button_count"
                data-action="like" data-size="small" data-share="true"></a>
            </li>
          </ul>
        </div>



      <div>
        <h3 class="Larger shadow p-3 rounded mb-4 py-3">
          投げ銭サポートのお願い
        </h3>

        <p>継続的なサイト運営、コンテンツ制作のためにサポートをお願いいたします。</p>
        <p>現在、<a href="https://www.paypal.com/paypalme/KHUFRUDAMONOTES/1000JPY" target="_blank"
            rel="noreferrer noopener"><strong>PayPal.Me</strong></a>及び<a href="https://buy.stripe.com/9AQdTx6y006YbDy001"
            target="_blank" rel="noreferrer noopener"><strong>stripe</strong></a>から投げ銭を受け付けております。</p>

        <p>PayPal.Meを使用する場合は、<a href="https://www.paypal.com/paypalme/KHUFRUDAMONOTES/1000JPY"
            target="_blank" rel="noreferrer noopener">下記のリンク</a>↓へアクセスし、「送信」を選択してください。
            <br><a href="https://www.paypal.com/paypalme/KHUFRUDAMONOTES/1000JPY"
            target="_blank" rel="noreferrer noopener">https://www.paypal.com/paypalme/KHUFRUDAMONOTES/1000JPY</a>
            </p>

        <p>stripeを使用する場合は、
          <a href="https://buy.stripe.com/9AQdTx6y006YbDy001" target="_blank"
              rel="noreferrer noopener">下記のリンク</a>↓へアクセスし、支払い画面の案内に従ってください。
            <br><a href="https://buy.stripe.com/9AQdTx6y006YbDy001"
            target="_blank" rel="noreferrer noopener">https://buy.stripe.com/9AQdTx6y006YbDy001</a>
        </p>

        <p class="pb-4">※どちらもリンク先へ飛んだだけでは決済は行われません。</p>
      </div>

        <h3 class="Larger shadow p-3 rounded mb-4 py-3">音楽関係の資料・データ</h3>

        <p class="pt-2">リンク先から音楽関係の資料をダウンロードできます。</p>
        <div class="link_table2">
            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">音楽理論マインドマップ(png)</span>

                    </a>
                    <p class="card-text">音楽理論の全体像を示したマインドマップです。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">五度圏(png)</span>

                    </a>
                    <p class="card-text">音と音の関係性を理解するために役立つ図です。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">開放弦を使わないギターコード表(pdf)</span>

                    </a>
                    <p class="card-text">開放弦を使わないギターのコードフォームを数多くまとめたpdfです。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">開放弦を使ったギターコード表(pdf)</span>

                    </a>
                    <p class="card-text">開放弦を使ったギターのコードフォームを数多くまとめたpdfです。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">Finale 自作スクリプト集(XML)</span>

                    </a>
                    <p class="card-text">Finaleでの譜面作成に使えるスクリプト集です。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank"
                        rel="noopener noreferrer">イコライザーの使い方(pdf)</span>

                    </a>
                    <p class="card-text">イコライジングで迷わないためのフローチャートです。</p>
                </div>
            </div>
        </div>


        <h3 class="Larger shadow p-3 rounded mb-4 py-3">関連ページへのリンク</h3>
        <p class="pt-2">音楽に関係する情報へのリンク先です。どれも音楽制作に役立つはずです。</p>
        <div class="link_table3">
            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://khufrudamonotes.com/frequencies-for-equal-tempered-scale"
                        target="_blank" rel="noopener noreferrer">音名と周波数の一覧</span>

                    </a>
                    <p class="card-text">音名と周波数の一覧です。MIDIノートナンバーも併記してあります。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link"
                        href="https://docs.google.com/spreadsheets/d/1mo7wY14HYi7PhnRst_a-9c4Sx9cLGNQlkf3ovcwLFF8/edit?usp=sharing"
                        target="_blank" rel="noopener noreferrer">曲情報データベース</span>

                    </a>
                    <p class="card-text">転調・旋法・BPMの各観点から楽曲データをまとめていくGoogleスプレッドシートです。</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link"
                        href="https://open.spotify.com/playlist/0agzPhkKi9HDjmxq03X0ZH?si=5I1_8LMEQHmUNg-zcTJo0Q"
                        target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(Spotify)</span>

                    </a>
                    <p class="card-text">転調する曲をまとめていくプレイリストです。（現在400曲以上）</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://youtube.com/playlist?list=PLTHnsfzQ5qvRySi-Nvpl1vuZdJ413iSbt"
                        target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(YouTube)</span>

                    </a>
                    <p class="card-text">転調する曲をまとめていく再生リストです。（現在200曲以上）</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <a class="nav-link" href="https://khufrudamonotes.com/category/music-theory-and-dtm" target="_blank"
                        rel="noopener noreferrer">音楽理論・DTM関連のブログ記事</span>

                    </a>
                    <p class="card-text">音楽理論やDTM関係の情報をまとめたブログ記事です。</p>
                </div>
            </div>
        </div>

      <div>
        <h3 class="Larger shadow p-3 rounded mb-5 py-3">
          このアプリを作った経緯
        </h3>

        <p class="pb-3">
          僕は、作曲・アレンジ・楽器演奏・ミックスなどを全て一人で行う いわゆるマルチ・プレイヤーです。<br>
          このウェブアプリは、かれこれ20年以上音楽をやる中で「あったら便利」だと思うツールを自分で作ったものです。<br>
          <br>
          このウェブアプリを作った動機は大きく二つあります。<br>
          <br>
          一つ目の理由は、「余計な労力の削減」のためです。<br>
          <br>
          作曲・編曲は創造的な行為だと思われがちです。<br>
          しかし、実際その作業工程の中には「創造的とは言えないなぁ…。」と感じるものがたくさんありました。<br>
          <br>
          たとえば、編曲時のコードの積み方のチェックや、エフェクト処理時の音価計算などです。<br>
          一度仕組みを理解してしまえば、これらの作業は非常に単純で退屈です。<br>
          <br>
          もちろん、楽曲に一定のクオリティを担保するためには、音楽理論的な視点からの検証は必要だと思います。<br>
          <br>
          しかし…<br>
          「この部分のコードを移調したらどうなるかな？」<br>
          「このスケールの構成音は何だったかな？」
          <br>
          <br>
          こんな思考に時間をかけても、その分だけ音楽が良くなるわけではないでしょう。<br>
          むしろ、瞬時に答えが分かった方が、試行錯誤に多くの時間をかけられます。（この試行錯誤こそ創造的な行為だと思います。）<br>
          <br>
          ———「面倒な単純作業はコンピューターにやらせればいい！」<br>
          <br>
          そう思い、Excelで自分用に計算プログラムを作ったのがこのアプリの始まりです。<br>
          <br>
          <br>
          二つ目の理由は、しばしば見かける「音楽理論は不必要」論にうんざりしていたからです。<br>
          <br>
          尤もらしい理由を並べて、これから音楽理論を勉強しようとするミュージシャンのやる気を削がないでもらいたい と感じます。
          <br>
          <br>
          「有名な〇〇さんも音楽理論は知らないって言ってたから…」　→　謙遜だったり、編曲は別の人だったりする。
          <br>
          「音楽理論を勉強すると個性が無くなりそう…」　→　勉強して無くなる個性など所詮その程度のもの。
          <br>
          <br>
          <b>どんな形にせよ音楽を続けるなら音楽理論の知識は必要ですし、勉強して損はしません。</b> <br>
          <br>
          <br>
          … 一方で、音楽理論を理解する大変さも分かります。<br>
          なぜなら、かつて僕自身が独学で音楽理論を学習し、苦労したからです。<br>
          <br>
          だからこそ思うのです。<br>
          <br>
          「もっと音楽理論を簡単に理解し、利用できたなら良いよね。」と。<br>
          そして、「『音楽理論が不必要』と言う人は、音楽理論が簡単に利用できたとしても そう感じるのかな？」と。<br>
          <br>
          そういった思いから「音楽制作や音楽理論の学習を補助するウェブアプリ」を目指して、この「<span class="MainTextColor">音楽理論ウェブアプリ
            O-TO</span>(Ongaku Tools)」を作りました。<br>
          <br>
          ここに音楽理論の全てがあるわけではないです。<br>
          <br>
          しかし、音楽をやる上で役立つものが揃っているはずです。<br>
          <br>
          このウェブアプリが、あなたがより良い音楽を奏でる一助となれば幸いです。<br>
        </p>
        <p style="text-align: left" class="py-2  pb-3">
        開発者：<a href="https://yoshito.khufrudamonotes.com/" target="_blank" rel="noreferrer noopener">Yoshito
          Kimura</a>
        </p>
      </div>

    </div>
      `
})

//リンクカードのコンポーネントのインスタンスを作成する
const linkTable = new Vue({
  el: '#link-table'
})