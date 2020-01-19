var fs = require('fs')

var readerStream = fs.createReadStream('input.txt')

var writerStream = fs.createWriteStream('output.txt')

readerStream.pipe(writerStream)

console.log('程序执行完毕')