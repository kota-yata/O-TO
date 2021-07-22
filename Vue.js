
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
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
    
      <a class="navbar-brand text-white" href="index.html">O-TO</a>
    
      <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">  
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link" href="o-to-chords.html">①コード構成音</a>
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
            <a class="nav-link" href="o-to-chords.html">①コード構成音</a>
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
          <a class="nav-link" href="https://khufrudamonotes.com/"target="_blank" rel="noopener noreferrer">オフィシャルサイト</span></a>
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
          <a class="nav-link" href="https://twitter.com/k1mu0419"target="_blank" rel="noopener noreferrer">管理人Twitter</span></a>
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
    <p>&copy; 2021- KHUFRUDAMO NOTES (since 2009) </p>
    `
})

Vue.component('footer-template', {
  template: `
    <p class="float-end"><a href="index.html">トップページに戻る</a></p>
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
      <div class="col-md-3 p-lg-2 mx-auto my-5">
        <h1 class="display-5 fw-normal">O-TO</h1>
        <p class="lead fw-normal">集中せよ。『音楽』に。</p>
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
