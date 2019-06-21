// 1. 跟phone number 一样的解法
//    字符串模式，数组的遍历
// 2. 多种模式情况 [下标]
    //   nums.length

function likes (names) {
    var templates = [
        'no one like this',
        '{name} like this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length,4);
    return templates[idx].replace(/{name}|{n}/g,function(val) {
        return val === '{name}'? names.shift() : names.length;
    });
}

console.log(likes([]));
console.log(likes(['寡姐']));
console.log(likes(['寡姐', '蜘蛛侠']));
console.log(likes(['寡姐', '蜘蛛侠', '钢铁侠']));
console.log(likes(['寡姐', '蜘蛛侠', '钢铁侠', '绿巨人']));
console.log(likes(['寡姐', '蜘蛛侠', '钢铁侠', '绿巨人', '美国队长']));
