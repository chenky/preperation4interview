![数组逆序对之归并排序](asset/reversePairs.png)
![数组逆序对之归并排序](asset/reversePairs2.png)

```javascript
/**
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。输入: [7,5,6,4] 输出: 5
 */
function reversePairs(nums) {
  const len = nums.length;
  if (len < 2) {
    return 0;
  }
  const copy = [...nums];
  const temp = [];
  return mergeSort(copy, 0, len - 1, temp);
}

function mergeSort(nums, left, right, temp) {
  if (left === right) {
    return 0;
  }
  const mid = (left + (right - left)) >> 1;
  const leftPairs = mergeSort(nums, left, mid, temp);
  const rightPairs = mergeSort(nums, mid + 1, right, temp);

  if (nums[mid] < nums[mid + 1]) {
    return leftPairs + rightPairs;
  }

  const crossPairsCount = crossPairs(nums, left, mid, right, temp);
  return leftPairs + rightPairs + crossPairsCount;
}
function crossPairs(nums, left, mid, right, temp) {
  temp = [...nums.slice(left, right + 1)];
  let i = left,
    j = mid + 1,
    count = 0;
  for (let k = left; k <= right; k++) {
    // 有下标访问，得先判断是否越界
    if (i == mid + 1) {
      nums[k] = temp[j];
      j++;
    } else if (j == right + 1) {
      nums[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      // 注意：这里是 <= ，写成 < 就不对，请思考原因
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;

      // 在 j 指向的元素归并回去的时候，计算逆序对的个数，只多了这一行代码
      count += mid - i + 1;
    }
  }
  return count;
}
```
