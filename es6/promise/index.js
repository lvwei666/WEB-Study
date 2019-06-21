// var a = 0;
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     a = 1;
//     resolve('ok');
//   }, 1000)
// }).then((e) => {
//   console.log(e);
//   console.log(a);
// })
new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log(1)
    resolve('ok');
  },1000);
}).then(() => {
  console.log(2);
})




