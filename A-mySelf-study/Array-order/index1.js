// 数组排序
function sortReal(a, b) {
  return a - b;
}
var arr = [12,7,34,26];
console.log(arr.sort());
console.log(arr.sort(sortReal));