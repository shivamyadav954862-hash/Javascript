//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }



for(let i = 0; i<=10;i++){
    // console.log(`Outer loop :${i}`);
    for(let j = 0; j<=10;j++){
// console.log(`inner loop ${j} and Inner loop is ${i}`)
// console.log(i + '*' + j + ' =' + i*j)
// console.log(`${i} * ${j} = ${i * j}`)
    }
}

let i = 10;
for(let j = 0;j<=10;j++){
    // console.log(`${i}*${j} = ${i*j}`)
}

//break,continue

for (let index = 1; index <=20; index++) {
if(index ==5)    {
    console.log(`Detected 5`);
continue}
console.log(`value of i is ${index}`)
}

// break => Loop ko turant rok deta hai (exit)
// continue => Current iteration skip karta hai (loop chalta rehta hai)