const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev = new Ev();

ev.on('open', () => {
  console.log('open event');
})
ev.on('open', () => {
  console.log('open event');
})
const callback = () => {
  console.log('open1');
}
ev.on('open1', callback);
ev.emit('open1');
ev.removeListener('open1', callback);
ev.emit('open1');

ev.once('open2', () => {
  console.log('open2');
})
ev.emit('open2');
ev.emit('open2');
// setTimeout(() => {
//   ev.emit('open');
// },2000)