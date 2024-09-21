// ここにコードを書きながら確認しましょう！

// 繰り返し処理したい配列.forEach(コールバック関数);
// forEachメソッドはfor文と同じような繰り返し処理ができるメソッド

// 繰り返し処理したい配列.map(コールバック関数);
// 配列の要素をコールバック関数へ渡し、コールバック関数が返した値から新しい配列を作成するメソッド

// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

// array.forEach(
//   (val, index, array) => {
//     console.log('第一引数（中身）:', val);
//     console.log('第二引数（インデックス）:', index);
//     console.log('第三引数（配列全体）:', array);
//   }
// )

const newArray = array.map(
  (val) => {
    console.log('第一引数（中身）:', val);
    return { ...val, className: `c-${val.className}`}
    // return { val, className: `c-${val.className}`} // ←だとダメ（valは対象の配列の直下の中身なのでオブジェクト）
  }
)
console.log(newArray);