'use strict';

//headのコンポーネントを定義---------------------------------

Vue.component('head-template', {
  template: `
      <div>
      <!--Font Awesome を読み込む-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      </div>
      `
})

//headのコンポーネントのインスタンスを作成する
const headTemplate = new Vue({
  el: '#head'
})


//ヘッダーのコンポーネントを定義---------------------------------

Vue.component('header-template', {
  template: `
      <div>
      <nav class="navbar navbar-expand-xxl navbar-dark fixed-top bg-dark">
      <div class="container-fluid">

      <a class="navbar-brand text-white" href="index.html">O-TO</a>

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
            <a class="nav-link" href="o-to-modal-interchange.html">③コード/スケール検索</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-chord-progression.html">④コード進行</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-diatonic-chords.html">⑤ダイアトニック・コード</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modulation.html">⑥転調の間隔</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-note-value.html">⑦音価の計算</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-metric-modulation.html">⑧メトリック・モジュレーション</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-degree-change.html">⑨コード移調</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-fingerboard.html">⑩指板</a>
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


//右カラム部分のコンポーネントを定義---------------------------------

Vue.component('right-column', {
  template: `
        <div>

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
            <a class="nav-link" href="o-to-modal-interchange.html">③コード・ネーム/スケール名を検索する</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-chord-progression.html">④コード進行まとめ（<span class="chord_prog_count12">80×12種類以上</span>）</a>
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
          <a class="nav-link" href="https://docs.google.com/spreadsheets/d/1mo7wY14HYi7PhnRst_a-9c4Sx9cLGNQlkf3ovcwLFF8/edit?usp=sharing"target="_blank" rel="noopener noreferrer">曲情報データベース（転調・旋法・BPM）</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://open.spotify.com/playlist/0agzPhkKi9HDjmxq03X0ZH?si=5I1_8LMEQHmUNg-zcTJo0Q"target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(Spotify)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://youtube.com/playlist?list=PLTHnsfzQ5qvRySi-Nvpl1vuZdJ413iSbt"target="_blank" rel="noopener noreferrer">転調する曲 プレイリスト(YouTube)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://khufrudamonotes.com/category/music-theory-and-dtm"target="_blank" rel="noopener noreferrer">音楽理論・DTM関連のブログ記事</span></a>
        </li>
      </ul>

        <div class="Larger shadow p-3 mb-3 rounded pb-2 m-3">
          <h5>便利だと思ったら是非シェアを！</h5>
        </div>

        <div>
          <ul>
            <li class="py-1 nav-item">
              <!-- Twitterのシェアボタン -->
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
          <a href="https://khufrudamonotes.com/contact-english" target="_blank" rel="noopener noreferrer"><i class="far fa-comment"></i>バグの報告</a>
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
          <a href="https://www.youtube.com/user/kimukydr/videos" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i>YouTube</a>
        </div>
      `
})

Vue.component('site-logo', {
  template: `
    <div class="site_logo displayed">
      <a href="https://www.youtube.com/channel/UCj1FMSo7yhgjLlCiMZG-cFw" target="_blank" rel="noopener noreferrer">
        <img src="image/KHUFRUDAMO NOTES Logo only.png" alt="クフルダモノーツのロゴ" title="KHUFRUDAMO NOTES Logo">
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


//インスタンスを作成する
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


//------------------------------------------------------------------------------------------------------------------------------------
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