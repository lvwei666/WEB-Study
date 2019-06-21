// [1,2,3,4] 求出他的平均值
const average = (...nums) => nums.reduce((a , b) => a + b, 0) / nums.length;//rest
console.log(average(...[1,2,3,4])) //spread