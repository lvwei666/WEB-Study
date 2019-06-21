// [1,2,3,4,5,6,7,8,9,0]
// (123) 456-7890
// const createPhoneNumber = (arr) => 
//     // "(" + arr.join("").slice(0,3) + ") " + arr.join("").slice(3,6) + "-" + arr.join("").slice(6,9);
//     `(${arr.join("").slice(0,3)}) ${arr.join("").slice(3,6)}-${arr.join("").slice(6,9)}`;

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for(var i = 0; i < numbers.length; i++) {
        format = format.replace('x',numbers[i]);
    }
    return format;
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
