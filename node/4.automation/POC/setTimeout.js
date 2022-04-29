// {
// function yolo () {
//     var a=10;
//     function cb (err,res) {
//             if (err){
//                 console.log(err);
//             }
//             else {
//                 console.log("hello how are you ?");
//             }
//           }
//     // function to be executed (callback fun), time(ms) after which cb to be executed
//     // 1 second = 1000 milli second
//     setTimeout(cb,5000);
//     console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);
// }

// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/";

// function yolo() {
//     var a=10;
//     function cb(err,res,body){
//         if (err){
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
//             console.log("statusCode is ", res.statusCode);
//         }
//     }
//     request(url,cb);
//     console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);
    
// for(var i=1; i<=10; i++){
//     setTimeout (function(){
//         console.log(i);
//     },2000);
// }

// for(let i=1; i<=10; i++){
//     setTimeout (function(){
//         console.log(i);
//     },2000*i);
// }

// BINA LET K USE K KSE KRENGE
// for(var i=1; i<=10;i++){
//     // hint closures and scope-> wrapping
//      function outer (a) {  //a=1
//         setTimeout(function(){
//             console.log(a);
//         }, 2000*a);
//     }
//     outer(i);
// }

// BINA LET K METHOD 2
// for (var i=1; i<=10; i++){
//     function cb(a) {
//         console.log(a);
//     };
//     setTimeout(cb,2000*i,i);
// }

//  console.log("before") ; 
//  setTimeout(function(){
//      console.log("timeover")
//  },5000);
//  console.log("after");

(function (a){
    return (function (){
        console.log(a);
        a=6;

    }) ();
}) (12);