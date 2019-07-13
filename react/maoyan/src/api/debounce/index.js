export default function debounce(fn, time) {
  let timer = null, pre = 0;
  return function(...args) {
    let now = +new Date();
    if (now - pre < time) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        pre = now;
        fn.apply(this, args)
      }, time)
    } else {
      pre = now;
      fn.apply(this, args)
    }
  }
}