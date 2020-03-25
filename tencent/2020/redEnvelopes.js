/*
得到一个两数之间的随机整数
这个例子返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max。
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
// 模拟发红包逻辑
// total：红包总金额，count：红包个数
function redEnvelopes(total, count){
  let res = [], restTotal = total, restCount = count;
  while (restTotal>0) {
    if(restCount===1){
      // 最后一个红包了
      res.push(restTotal);
      break;
    }
    // math.floor有精度问题，但是不影响
    // let money = Math.floor(getRandomArbitrary(0.01,restTotal-0.01*restCount)*100)/100;
    let money = getRandomInt(1,restTotal-1*restCount);
    res.push(money);
    restTotal-=money;
    restCount--;
  }
  return res;
}

console.log(redEnvelopes(300,3));