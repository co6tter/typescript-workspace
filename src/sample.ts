/**
 * 要素数2以上の整数型の配列をとり、要素を合計していく新しい配列を作成
 *
 * @param ins - number array
 * @returns number array
 */
export const makeNewArray = (ins: number[]) => {
  const outs: number[] = [];
  let tail: number;
  outs.push(ins[0]);
  for (let i = 1; i < ins.length; i++) {
    tail = outs[outs.length - 1];
    outs.push(tail + ins[i]);
  }
  return outs;
};

/**
 * 2個の正の整数の最大公約数を求める
 *
 * @param num1 - number
 * @param num2 - number
 * @returns number
 */
export const gcd = (num1: number, num2: number) => {
  let x = num1;
  let y = num2;
  while (x !== y) {
    if (x > y) {
      x = x - y;
    } else {
      y = y - x;
    }
  }
  return x;
};

/**
 * √(x^2 + y^2)の計算結果を返す
 *
 * @param x - number
 * @param y - number
 * @returns number
 */
export const calc = (x: number, y: number) => {
  return (x ** 2 + y ** 2) ** 0.5;
};

/**
 * 8ビット型を受け取りビットの並びを逆にした値を返す
 *
 * @param byte - number
 * @returns number
 */
export const rev = (byte: number) => {
  let rbyte = byte;
  let r = 0b00000000;
  for (let i = 0; i < 8; i++) {
    r = (r << 1) | (rbyte & 0b00000001);
    rbyte = rbyte >> 1;
  }
  return r;
};
