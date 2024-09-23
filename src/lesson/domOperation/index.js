import 'animate.css';

// ここにコードを書きながら確認しましょう！
// 開発サーバーを立ち上げる
// npm run dev:dom

// JavaScriptからHTMLに変更を加える際は、このノードにアクセスし、ノードの情報を書き換えることで見た目を変更していきます。
// ノードの情報が書き換わると、書き換えた情報が自動的にブラウザに反映され、見た目が変更される仕組みになっています。
// ・要素ノード
// 要素ノードは、HTML要素を表します。
// HTML要素に付与されている属性やスタイルの情報を持っています。

// ・テキストノード
// テキストノードは、HTML要素ではないテキストを表します。
// pタグなどの中に書いてあるテキストのことですね。

// ・ドキュメントノード
// ドキュメントノードは、ブラウザに読み込まれたWebページ全体を表し、DOMツリーの入り口の役割を果たしています。

// document.querySelector()は、該当する最初の要素を取得
// 対象の要素.addEventListener('イベントの種類', イベント発生後に実行する関数, オプション);

const title = document.getElementById('title');
const button = document.getElementById('button');
// getElementsByClassName / getElementsByTagName / querySelectorAll の戻り値は配列（のような）オブジェクト。
// だから要素が一つしかなくても [0] みたいな感じでアクセスしないとDOM操作は出来ない。
// const yellowCard = document.getElementsByClassName('card-type--yellow');
// const mochaCard = document.getElementsByClassName('card-type--mocha');
const mochaCard = document.querySelector('.card-type--mocha');
const yellowCard = document.querySelector('.card-type--yellow');
console.log(yellowCard)

button.addEventListener('click', () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add('animate__hinge');
  setTimeout(() => {
    // 2秒後にtitle要素から.animate__hingeクラスを削除
    title.classList.remove('animate__hinge');

    mochaCard.classList.add('card-animation');
    yellowCard.style.display = 'block';
    yellowCard.classList.add('animate__fadeInUp');
  }, 2000);

});


// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
