// ali 14.6 2.6
// meituan 16 4
// 51信用卡 17 5
// S   5
// A   3
// B   2
// C   1
// D
// level key 计算函数？

let stratigies = {
    'S':function(salary) {
        return salary * 5;
    },
    'A':function(salary) {
        return salary * 3;
    },
    'B':function(salary) {
        return salary * 2;
    },
    'C':function(salary) {
        return salary * 1;
    }
}

function calculate(level,salary) {
    return stratigies[level](salary); 
    // 分支？
    // switch(level){
    //     case 'S':return salary * 5;
    //     break;
    //     case 'A':return salary * 3;
    //     break;
    //     case 'B':return salary * 2;
    //     break;
    //     case 'C':return salary * 1;
    //     break;
        // case 'D':return salary * ;
        // break;
    // }
}
console.log(calculate('S',10000));