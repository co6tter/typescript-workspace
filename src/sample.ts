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

/**
 * 非負の整数をとり、その階乗を返す
 *
 * @param n - number
 * @returns number
 */
export const factorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

/**
 * 引数で指定した節を根とする部分木をたどりながら、全ての節番号を返す
 *
 * @param n - number
 * @returns number array
 */
export const order = (n: number) => {
  const result: number[] = [];
  const tree = [[2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14], [], [], [], [], [], [], []];

  const traverse = (n: number) => {
    const _n = n - 1;
    if (tree[_n].length === 2) {
      traverse(tree[_n][0]);
      result.push(n);
      traverse(tree[_n][1]);
    } else if (tree[_n].length === 1) {
      traverse(tree[_n][0]);
      result.push(n);
    } else {
      result.push(n);
    }
  };

  traverse(n);
  return result;
};

/**
 * 値がnである要素をn番目に格納することで昇順の整列を行う
 *
 * @param nums - number array
 * @returns number array
 */
export const binSort = (nums: number[]) => {
  const bins = [];
  for (let i = 0; i < nums.length; i++) {
    bins[nums[i]] = nums[i];
  }
  return bins;
};

/**
 * 要素番号が同じ要素の文字同士が一致する要素の組みの個数 ÷ s1の要素数を返す
 *
 * @param s1 - string array
 * @param s2 - string array
 * @returns number
 */
export const simRatio = (s1: string[], s2: string[]) => {
  let cnt = 0;
  if (s1.length !== s2.length) {
    return -1;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      cnt++;
    }
  }
  return cnt / s1.length;
};

/**
 * 昇順に整列済みの配列を基に、配列を特徴づける5つの値を返す
 *
 * @param sortedData - number array
 * @returns number array
 */
export const summarize = (sortedData: number[]) => {
  const findRank = (sortedData: number[], p: number) => {
    const i = Math.ceil(p * (sortedData.length - 1));
    return sortedData[i];
  };
  const rankData = [];
  const p = [0, 0.25, 0.5, 0.75, 1];
  for (let i = 0; i < p.length; i++) {
    rankData.push(findRank(sortedData, p[i]));
  }
  return rankData;
};
