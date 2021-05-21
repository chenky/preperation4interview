/**
 * n个烧饼翻转后变的有序
 */
function pancakeSorts(cakes) {
  const res = [];
  function _sort(cakes, n) {
    if (n < 2) return;
    let maxWidthCake = 0,
      maxWidthCakeIndex = 0;
    for (let index = 0; index < n; index++) {
      const value = cakes[index];
      if (value > maxWidthCake) {
        maxWidthCake = value;
        maxWidthCakeIndex = index;
      }
    }
    _reverse(cakes, 0, maxWidthCakeIndex);
    res.push(maxWidthCakeIndex + 1);
    _reverse(cakes, 0, n - 1);
    res.push(n);
    _sort(cakes, n - 1);
  }
  function _reverse(arr, start, end) {
    while (start < end) {
      [arr[start++], arr[end--]] = [arr[end], arr[start]];
    }
  }
  _sort(cakes, cakes.length);
  console.log(`pancake sort ${cakes} ===== ${res}`);
  return res;
}
pancakeSorts([3, 2, 4, 1]);

/**
 * n个烧饼翻转后变的有序，最少翻转次数，并记录其序列
 * 把最小的放在最下面即可
 * 翻转烧饼算法，翻转煎饼，排序，最少翻转次数，最少翻转
 */
function minPancakeSort(cakes) {
  const res = [];
  function _reverse(arr, start, end) {
    while (start < end) {
      [arr[start++], arr[end--]] = [arr[end], arr[start]];
    }
  }
  function _minSort(cakes, n) {
    if (n < 2) return;
    let minWidthCake = Number.MAX_SAFE_INTEGER,
      minWidthCakeIndex = 0;
    for (let index = 0; index < n; index++) {
      const value = cakes[index];
      if (value < minWidthCake) {
        minWidthCake = value;
        minWidthCakeIndex = index;
      }
    }
    // console.log(
    //   `111 ${cakes}   ${minWidthCake}   ${minWidthCakeIndex}  ${n}  ${res}`
    // );
    if (minWidthCakeIndex === n - 1) {
      // 如果最小的元素就是最后一个元素，则不用翻转直接返回
      _minSort(cakes, n - 1);
      return;
    }

    // 如果最小的在最上面，则不需要翻转
    if (minWidthCakeIndex !== 0) {
      _reverse(cakes, 0, minWidthCakeIndex);
      res.push(minWidthCakeIndex + 1);
    }

    _reverse(cakes, 0, n - 1);
    res.push(n);
    _minSort(cakes, n - 1);
  }
  _minSort(cakes, cakes.length);
  _reverse(cakes, 0, cakes.length - 1);
  res.push(cakes.length);
  console.log(`min pancake sort ${cakes} ===== ${res}`);
  return res;
}
minPancakeSort([3, 2, 4, 1]);
minPancakeSort([10, 6, 3, 1]);
minPancakeSort([10, 20, 40, 1]);
minPancakeSort([10, 8, 12, 9, 13, 7]);
