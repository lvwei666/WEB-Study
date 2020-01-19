var fs = require('fs')

var data = '菜鸟教程'

var writerStream = fs.createWriteStream('output.txt')

writerStream.write(data, 'UTF8')

writerStream.end()

writerStream.on('finish', function() {
  console.log('写入完成。')
})

writerStream.on('error', function(err) {
  console.log(err.stack)
})

console.log('程序执行完毕')