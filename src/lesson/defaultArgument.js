// ここにコードを書きながら確認しましょう！

// 練習問題
// 問題 1
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}

discountRateCalc(4500);
discountRateCalc(6000, 20);