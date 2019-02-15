// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// var newArr1 = arr.reduce((prev,next)=>{
//    console.log(arguments)
// })
// function a(b){
//     return function(c){
//         return b+c
//     }
// }
let a = b=>c=>b+c
console.log(a(1)(2))