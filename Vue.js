

//headのコンポーネントを定義---------------------------------

Vue.component('head-template', {
  template: `
      <div>
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
            <a class="nav-link" href="o-to-modal-interchange.html">③コード/モード検索</a>
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

        <div class="shadow p-3 mt-0 mb-3 bg-white rounded pb-2 m-3">
          <h5>提供中の「O-TO」アプリ一覧</h5>
        </div>
      
        <ul>
          
          <li class="nav-item">
            <a class="nav-link" href="o-to-chords.html">①コード</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-scale.html">③スケール</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="o-to-modal-interchange.html">③コード/モード検索</a>
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

      
        <div class="shadow p-3 mb-3 bg-white rounded pb-2 m-3">
          <h5>提供中のアイテム一覧</h5>
        </div>
      
        <ul>

          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">五度圏</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">音楽理論マインドマップ</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://khufrudamonotes.com/frequencies-for-equal-tempered-scale" target="_blank" rel="noopener noreferrer">音名と周波数の一覧表</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">開放弦を使わないギターコード表</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">開放弦を使ったギターコード表</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://gum.co/musictheory-mindmap" target="_blank" rel="noopener noreferrer">Finale 自作スクリプト集(XML)</span></a>
          </li>

        </ul>
      
        <div class="shadow p-3 mb-3 bg-white rounded pb-2 m-3">
          <h5>関連ページへのリンク</h5>
        </div>
        
        <ul>
        
        <li class="nav-item">
          <a class="nav-link" href="https://khufrudamonotes.com/"target="_blank" rel="noopener noreferrer">開発者のオフィシャルサイト</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://linktr.ee/KHUFRUDAMO_NOTES"target="_blank" rel="noopener noreferrer">KHUFRUDAMO NOTES - linktree</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://docs.google.com/spreadsheets/d/1mo7wY14HYi7PhnRst_a-9c4Sx9cLGNQlkf3ovcwLFF8/edit?usp=sharing"target="_blank" rel="noopener noreferrer">曲情報データベース(転調・旋法・BPM)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://open.spotify.com/playlist/0agzPhkKi9HDjmxq03X0ZH?si=5I1_8LMEQHmUNg-zcTJo0Q"target="_blank" rel="noopener noreferrer">転調曲 Spotify playlist</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://youtube.com/playlist?list=PLTHnsfzQ5qvRySi-Nvpl1vuZdJ413iSbt"target="_blank" rel="noopener noreferrer">転調曲 YouTube playlist</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://twitter.com/k1mu0419"target="_blank" rel="noopener noreferrer">開発者のTwitter</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Yoshito924/O-TO"target="_blank" rel="noopener noreferrer">GitHub</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://khufrudamonotes.com/contact-english"target="_blank" rel="noopener noreferrer">バグや誤りの報告はこちらからお願いします。</span></a>
        </li>

        </ul>

      </div>
        `
})

//右カラム部分のコンポーネントのインスタンスを作成する
const rightColumn = new Vue({
  el: '#right-column'
})



//フッター部分のコンポーネントを定義---------------------------------

Vue.component('copyright-text', {
  template: `
    <div>
    <!-- Twitterのシェアボタン -->
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
        data-show-count="false">Tweet</a>

        <!-- はてなブックマークへのシェアボタン -->
        <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button"
        data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"><img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加"
          width="20" height="20" style="border: none;" /></a>

      <!-- noteへのシェアボタン -->
      <a href="https://note.com/intent/social_button" class="note-social-button" data-url="https://o-to.khufrudamonotes.com/"></a>

      <!-- Facebookへのシェアボタン -->
      <a class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width=""
        data-layout="button" data-action="recommend" data-size="small" data-share=""></a>

      <!-- Facebookへのシェアボタン -->
      <a id="fb-root"></a>

      <!-- pocketへのシェアボタン -->
      <a data-pocket-label="pocket" data-pocket-count="none" class="pocket-btn" data-lang="en"></a>

      <!-- Lineへのシェアボタン -->
      <a class="line-it-button" data-lang="ja" data-type="share-a" data-ver="3"
        data-url="https://o-to.khufrudamonotes.com/" data-color="default" data-size="small" data-count="true"
        style="display: none;"></a>
      
      <p>&copy; 2021- KHUFRUDAMO NOTES (since 2009) </p>
    </div>
    `
})

Vue.component('footer-template', {
  template: `
  <div class="float-end">
  <a href="index.html">トップページに戻る</a></div>
    `
})

//インスタンスを作成する
const footer = new Vue({
  el: '#footer'
})


//見出し部分のコンポーネントを定義---------------------------------

Vue.component('title-display', {
  template: `
  <div class="position-relative overflow-hidden p-3 p-md-4 m-md-3 text-center bg-light">
  <div class="col-md-8 p-lg-2 mx-auto mt-5 mb-1">
        <h1 class="display-5 fw-normal">O-TO</h1>
        <p class="lead fw-normal">【音楽理論ウェブアプリ】</p>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    `
})

//見出し部分のコンポーネントのインスタンスを作成する
const titleDisplay = new Vue({
  el: '#display'
})


let chordColor = new Vue({
  el: "app",
  data: {
    check: "list-group-item col-xl text-center",

    check: "list-group-item list-group-item-danger col-xl text-center"

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