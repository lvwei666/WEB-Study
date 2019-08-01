// 在一个无序数组中，找出 第 k 大的数字

// 排序
// [k]
// [1, 4, 9, 2, 6, 10]  2
var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
}
console.log(findKthLargest([1, 4, 9, 2, 6, 10], 2));