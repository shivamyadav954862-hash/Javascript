const score = 400;
//console.log(score);

const balance  = new Number(100)
//console.log(balance);
  
//console.log(balance.toString().length);   // toString() => value ko string bana deta hai
//console.log(balance.toFixed(2));   

const otherNumber = 123.456
//console.log(otherNumber.toPrecision(4));   

const hundred = 1000000
//console.log(hundred.toLocaleString("en-IN"));  // toLocaleString() → number ko human readable format me dikhata hai

//++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(5.6));
// console.log(Math.sqrt(16));
// console.log(Math.pow(2,3));      // 2^3  =2*2*2*=8
// console.log(Math.min(2,3,5,6,7,8));  

console.log(Math.random());     // 0 se 1 ke beech (1 include nahi)
console.log((Math.random()*10)+1) ;
console.log(Math.floor(Math.random()*10) +1);

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
