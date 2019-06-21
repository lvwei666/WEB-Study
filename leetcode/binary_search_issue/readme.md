二分查找    binary_search
  加速查找
  前提条件是啥？
  有序数组，折半排序，查找的时间复杂度，从 n => log2N
  [1,2,10,3,5,7,9].sort()
  [1,2,3,6,7,10] 6

  JavaScript heap out of memory
  什么出问题？
  1亿左右的大数相加  CPU
  ？ arr[] 物理空间
  下标的引用
  0 - 1亿 for 没有问题
  mid = (min + max) / 2