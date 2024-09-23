// ここにコードを書きながら確認しましょう！


// 練習問題
// 問題 2

// default exportした変数や関数と命名が同じでなくても良い＝インポートする側に委ねられる。
// named/defaultどっち使う？ → それはなぜ？

// import { testFun } from './defaultExport.js' // {}は不要
import testFun from './defaultExport.js';

console.log(testFun());