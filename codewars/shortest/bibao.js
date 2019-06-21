function CoolModule(){
    var something = 'cool',another = [1,2,3];
    function doSomething(){
        console.log(something);
    }
    function doAnother(){
        console.log(another.join('!'));
    }
    return {
        we:doSomething,
        suibian:doAnother
    }

}
var foo = CoolModule();
foo.we();
foo.suibian();