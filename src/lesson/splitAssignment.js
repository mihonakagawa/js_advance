// ここにコードを書きながら確認しましょう！


// 練習問題
// 問題 1
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [valueOne, valueTwo, valueThree] = arrayFn('JS');
console.log(valueThree);

// 問題 2
function objectFn({name}) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

objectFn(argObject);



// function nameFun({firstName, middleName = '♡', lastName}) {
//   return `${firstName}${middleName}${lastName}`;
// }

const nameFun = ({firstName, middleName = '♡', lastName}) => `${firstName}${middleName}${lastName}`;

const nameObject = {
  firstName: 'yamada',
  middleName: '♡',
  lastName: 'tarou',
};

console.log(nameFun(nameObject));