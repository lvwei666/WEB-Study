var fs = require('fs')

fs.readFile('input.txt', (err, data) => {
  if (err) return console.log(err)
  console.log(data.toString())
})

console.log('程序执行结束！', '非阻塞代码，不按顺序执行')