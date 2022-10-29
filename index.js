"use strict";
// //---------fibonchi recursia--------//
//
// function fiborec(number:number):number {
//   let  res:number[] = []
//     if (number  < 2){
//         return number;
//     }else{
//         return fiborec(number-2) + fiborec(number-1);
//     }
// }
// console.log(fiborec(3))
//
// function recurse(num:number):number[]{
//     let res:number[]=[]
//     for(let i  = 0;i<num;i++){
//         res.push(fiborec(i))
//     }
//    return res
// }
//
// console.log(recurse(5))
//
// function fibo(number: number): number[] {
//     let res: number[] = []
//     let x: number = 0
//     let y: number = 1
//     res.push(x,y)
//     let z
//     for (let i = 0; i < number - 2; i++) {
//         res.push(x + y)
//         z = x
//         x = y
//         y = z + y
//     }
//     return res
// }
//
// // console.log(fibo(7))
var oneNumber = 0;
var twoNumber = 1;
let res = [];
function fibo(topNumber) {
    var fibnumber = oneNumber + twoNumber;
    if (fibnumber < topNumber) {
        res.push(fibnumber);
        oneNumber = twoNumber;
        twoNumber = fibnumber;
        fibo(topNumber);
    }
}
fibo(10);
console.log(res);
// fibonachi (15)
let startNumber = 0;
let secondNumber = 1;
// function fibonachi(topNumber: number): any {
//     let arr: number[] = []
//     let fibnumber: number = startNumber + secondNumber
//     if (fibnumber < topNumber) {
//         arr.push(startNumber)
//         arr.push(secondNumber)
//         startNumber = secondNumber
//         secondNumber = fibnumber
//         return arr.push(fibonachi(topNumber))
//     }
//     return arr
// }
// console.log(fibonachi(22))
let fr = [1, 2];
let gr = [3, 4];
console.log(fr.push(...gr));
fr.push(...gr);
console.log(fr);
