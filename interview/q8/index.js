// function Person(name) {
//   this.name = name;
// }
// let p = new Person('wn')
// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype

var foo = {},
  F = function() {};
Object.prototype.a = 'valA'
Function.prototype.b = 'valB'
console.log(foo.a)
console.log(foo.b)
console.log(F.a)
console.log(F.b)
// 
// function Person(name) {
//   this.name = name;
//   // return {}  
//   return 666
// }
// let p = new Person('wn')
// console.log(p);
//-------构造函数是不需要返回值的，使用new来创建时，如果return的是非对象时，会忽略返回值。
//如果是对象，则返回该对象（return null 也会忽略返回值）

function Person(name) {
  this.name = name;
}
function Student() {

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student
let p = new Student('wn')
console.log(p instanceof Person)

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   },0)
// }
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   },0)
// }
// let 每次循环生成一个封闭的块级作用域和setTimeout绑定，var每次循环会覆盖上次的作用域

// for in 迭代和 for of 有什么区别
var myArray = [3,4,5,6,7]
myArray.name = '蜗牛'
Array.prototype.method = function() {
  console.log("wn")
}
for (let index in myArray) {
  console.log(myArray[index])
}
// for in
// 1. index是索引为字符串型数字，不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序
// 3. 使用 for in 会遍历数组所有的可枚举属性，包括原型
// for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引（键名），而 for of 遍历的是数组的元素
// for of 遍历的只是数组的元素，而不是包括数组的原型属性和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
function outputArr(arr) {
  var res = []
  for(var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(outputArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
function outputArr2(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr2(item) : item)
  }, [])
}
console.log(outputArr(gArr))
console.log(outputArr2(gArr))