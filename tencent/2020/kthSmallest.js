/*
  核心思想是每次都要先找一个中枢点 Pivot，然后遍历其他所有的数字，像这道题从大往小排的话，
  就把大于中枢点的数字放到左半边，把小于中枢点的放在右半边，这样中枢点是整个数组中第几大的数字就确定了，
  虽然左右两部分各自不一定是完全有序的，但是并不影响本题要求的结果，因为左半部分的所有值都大于右半部分的任意值，
  所以我们求出中枢点的位置，如果正好是 k-1，那么直接返回该位置上的数字；如果大于 k-1，
  说明要求的数字在左半部分，更新右边界，再求新的中枢点位置；反之则更新右半部分，
  求中枢点的位置；不得不说，这个思路真的是巧妙啊～
  reference: https://www.cnblogs.com/grandyang/p/4539757.html
*/
function partition(nums, left, right){
  let pivot = nums[left], l = left + 1, r = right;
  while (l <= r) {
      if (nums[l] < pivot && nums[r] > pivot) {          
        [nums[l], nums[r]] = [nums[r], nums[l]];
        ++l;
        --r;
      }
      if (nums[l] >= pivot) ++l;
      if (nums[r] <= pivot) --r;
  }
  [nums[left], nums[r]] = [nums[r], nums[left]];
  return r;
}
function kthSmallest3(nums, k){
  let left = 0, right = nums.length - 1;
  while (true) {
      const pos = partition(nums, left, right);
      if (pos == k - 1) return nums[pos];
      if (pos > k - 1) right = pos - 1;
      else left = pos + 1;
  }
}
console.log(kthSmallest3([3,2,1,5,6,4], 2));
console.log(kthSmallest3([3,2,3,1,2,4,5,5,6], 4));

