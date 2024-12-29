// ここにコードを書きながら確認しましょう！












// 練習問題
// 問題 1
// 関数returnPromiseを実行し、非同期処理の結果である「エラーが発生しました」をconsoleに出力してください。
// ただし、関数returnPromiseは編集しないこと。

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch(err => {
  console.log(err);
});

// returnPromise関数の返り値が何か（データ型も）
// 出力どこでしてるか
// .catchって何か