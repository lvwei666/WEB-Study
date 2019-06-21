const req = require('./request');

module.exports = (keyWord) => {
  keyWord = encodeURIComponent(keyWord);
  const url = 'https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=' + keyWord;
  return req(url);
}