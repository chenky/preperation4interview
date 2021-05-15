/**
 * 大数相乘
 */
function multiply(num1, num2) {
  const m = num1.length,
    n = num2.length;
  let res = Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = parseInt(num1[i]) * parseInt(num2[j]);
      const p1 = i + j,
        p2 = i + j + 1;
      const sum = mul + parseInt(res[p2]);
      res[p2] = sum % 10;
      res[p1] = Math.floor(sum / 10);
      // console.log(`res:${res}, mul:${mul},p1:${p1},p2:${p2},sum:${sum}`);
    }
  }
  return res.join("").replace(/^(0+)(.*)$/, function (all, part1, part2) {
    console.log(all, part1, part2);
    return part2;
  });
}

console.log(multiply("123", "10"));
console.log(multiply("12", "12"));
