// 数组对象方法排序
function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y)?-1: ((x > y)?1: 0));
  });
}
var arr = [
  {name: 'xq', age: 66},
  {name: 'xw', age: 22},
  {name: 'xs', age: 7},
  {name: 'xb', age: 15},
  {name: 'xk', age: 45}
];
// console.log(sortByKey(arr, 'age'));