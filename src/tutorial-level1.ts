const myName: string = "太郎";
const myAge: number = 20;
const isStudent: boolean = true;

// 型推論を使った変数宣言
const city = "東京"; // stringと推論される
const population = 14000000; // numberと推論される
const isCapital = true; // booleanと推論される

function greet(name: string): string {
  return `こんにちは、${name}さん！`;
}

const add = (a: number, b: number): number => {
  return a + b;
};

const fruits: string[] = ["りんご", "バナナ", "オレンジ"];
const numbers: number[] = [1, 2, 3, 4, 5];

const person: { name: string; age: number; city: string } = {
  name: "花子",
  age: 30,
  city: "大阪",
};

console.log(greet(myName));
console.log(`年齢: ${myAge}`);
console.log(`学生: ${isStudent ? "はい" : "いいえ"}`);
console.log(`住んでいる都市: ${city}`);
console.log(`首都: ${isCapital ? "はい" : "いいえ"}`);
console.log(`人口: ${population.toLocaleString()}人`);
console.log(`計算結果: 5 + 3 = ${add(5, 3)}`);
console.log(`好きな果物: ${fruits.join(", ")}`);
console.log(`数字の配列: ${numbers.join(", ")}`);
console.log(`人物情報: ${person.name}さん（${person.age}歳）は${person.city}に住んでいます`);
