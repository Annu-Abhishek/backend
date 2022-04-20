// console.log(x);
// console.log(b);
// var x=10;
// let b=100;

function outer(){
    var a=7;
    function inner(){
        console.log(a);
    }
    a=10;
    return inner;
}

var c= outer();
console.log(c);
c();