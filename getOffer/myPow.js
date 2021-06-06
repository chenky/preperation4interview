/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 * https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/solution/mian-shi-ti-16-shu-zhi-de-zheng-shu-ci-fang-kuai-s/
 */
function myPow(base, exponent) {
  if (exponent < 0) {
    exponent = -exponent;
    base = 1 / base;
  }
  const ret = 1;
  while (exponent) {
    if (base & 1) {
      ret *= base;
    }
    base *= base;
    exponent = exponent >> 1;
  }
  return ret;
}
