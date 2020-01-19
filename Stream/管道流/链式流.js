var fs = require('fs')
var zlib = require('zlib')

// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'))

// console.log('文件压缩完成.')

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log('文件解压完成')