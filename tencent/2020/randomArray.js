// 数组乱序
Array.prototype.random = function () {
  var result = [],
    arr = this,
    len = arr.length;

  /*for (var i = 0; i < len; i++) {
    var t = Math.floor(Math.random() * arr.length);
    result.push(arr[t]);
    var left = arr.slice(0, t),
      right = arr.slice(t + 1, arr.length);
    arr = left;
    arr.push.apply(arr, right);
  }*/
  for (var i = 0; i < len; i++) {
    var t = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(t, 1)[0]);
  }

  return result;
};

// 比如可以应用到随机播放音乐
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.random())