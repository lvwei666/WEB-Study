var fs = require('fs')

// console.log('准备打开文件') 
// fs.open('input.txt', 'r+', function(err, fs) {
//   if (err) return console.log(err)
//   console.log('文件打开成功')
// })

// fs.stat('D:\\test\\first\\node\\文件系统\\打开文件', function (err, stats) {
//   console.log(stats.isDirectory())
// })

// fs.stat('input.txt', function (err, stats) {
//   if (err) return console.error(err)
//   console.log(stats)
//   console.log('成功')

//   console.log(stats.isFile(), stats.isDirectory())
// })

// fs.writeFile('input.txt', '爱情公寓', function (err) {
//   if (err) return console.error(err)
//   fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err)
//     console.log(data.toString())
//   })
// })

// fs.unlink('input.txt', function (err) {
//   if (err) return console.error(err)
//   console.log('ok')
// })

// fs.mkdir('/test/first/node/文件系统/打开文件/test', err => {
//   if (err) return console.error(err)
//   console.log('ok')
// })

// fs.readdir('/test/first/node/', (err, files) => {
//   if (err) console.error(err)
//   files.forEach(file => {
//     console.log(file)
//   })
// })

fs.rmdir('/test/first/node/文件系统/打开文件/test', err => {
  if (err) console.error(err)
  console.log('ok')
})