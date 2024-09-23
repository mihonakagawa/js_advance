// ここにコードを書きながら確認しましょう！
// モジュールとは、1つのファイルのことを指し、JavaScriptでは一つのjsファイルが一つのモジュールになります。

// const hoge = 'hoge';

// // 追加
// export function testFn(text) {
//   return `Hello ${text}`;
// };

// export { hoge };


// 練習問題
// 問題 1
const nameFn = () => {
  return 'Gizumo taro';
};

const calcFn = (num) => {
  return num * 10;
};

export { nameFn, calcFn };
