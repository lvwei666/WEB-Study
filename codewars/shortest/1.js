function highAndLow(numbers){
    // ...
    let max = Math.max(...numbers.split(' '));
    let min = Math.min(...numbers.split(' '));
    return [max,min].join(' ');
  }
console.log(highAndLow('4 6 7 2 3'));