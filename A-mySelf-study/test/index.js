// for(var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   },1000)
// }

// for(let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   },1000)
// }

// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：
// [222, 123, null, null, 888, null, null, null, null, null, null, null]

function objToArr(obj) {
  let arr = [];
  arr.length = 12;

  return arr;
}
console.log(objToArr({1:222, 2:123, 5:888}))