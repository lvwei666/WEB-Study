// 全局变量太多，cache只为mult服务，空间的污染

const mult = (function() {
    const cache = {};
    return function(...args){
        let key = Array.prototype.join.call(args,',');
        // for (key in cache)
        if(key in cache) {
            return cache[key];
        }
        let a = 1;
        for (let i = 0,l = args.length; i < l;i++){
            a = a * args[i];
        }
        cache[key] = a;
        return a;
    }
})();


// 函数里面的变量会运行后就消失
console.log(mult(1,2,3));