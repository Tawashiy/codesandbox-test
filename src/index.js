// 基本はconst
// 上書きする場合はlet
// 動的なものはstateを使う

//テンプレート文字列
//`(バッククォート)を使う
//`私は${name}です`

//従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("あいうえお"));
//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("かきくけこ"));
// const func2 =  str => { ★引数のかっこ省略可能
//   return str;
// }
// const func2 = (str) => str; ★return,{} 省略可能

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(4, 5));
// const func3 = (num1,num2) => num1 +num2;

// 分割代入
const myProfile = {
  name: "tawashi",
  age: 20
};
const { name, age } = myProfile; //以降でname単体で変数になる
console.log(name);
//配列の場合は順番が大事
// const [配列1つめ , 配列2つめ] = myProfileList;

//デフォルト値、引数など(関数に引数を与えない場合にデフォルトで関数に使用される内容を設定できる)
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();
sayHello("nana");

// スプレット構文
const arr1 = [1, 2];
console.log(...arr1); // out 1 2
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

// 配列のcopy
const arr4 = [10, 20];
const arr6 = arr4; // 参照先が同じになってしまう（参照渡し！！）
const arr6_1 = [...arr4];
console.log(arr6);
console.log(arr6_1); // 上と同じ結果
// 配列の結合
const arr5 = [30, 40];
const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 配列の処理　「map」
const nameArr = ["tanaka", "yamada", "suzuki"];
nameArr.map((name) => console.log(name));
nameArr.map((name, index) => console.log(name)); // indexで要素番号を取得できる
// 配列から要素を順に取り出して処理を行える（for文に近い）
// or　新しい配列を生成する

// 配列の処理　「filter」
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
// 配列から要素を順に取り出して return後の条件にあうものを抽出できる

// 三項演算子
const val1 = 1 < 0 ? "true" : "false";
// return に使われるときもある

//　論理演算子
// && ||
// || は左側がfalseなら右側を返す
// null = alse
// && は左側がtrueばら右側を返す
