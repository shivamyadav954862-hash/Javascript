const myArray = [0,1,2,3,4,5]
//console.log(myArray)
//console.log(myArray[1])


// Array methods


// myArray.push(6);         //add at end
// console.log(myArray);

// myArray.pop()            // remove last
// console.log(myArray)


// myArray.unshift(8)
// console.log(myArray)    // add at start

// myArray.shift()
// console.log(myArray)     // remove last

// console.log(myArray.includes(8))
// console.log(myArray.indexOf(5))   


// const newArray = myArray.join()

// console.log(myArray);
// console.log( newArray);
// console.log(typeof newArray)      //  myArr.join()   👉 Array ko string me convert karta hai


//slice,splice

// console.log("A", myArray)

// const myArray1 = myArray.slice(1,3)
// console.log("B", myArray1)

// const myArray2 = myArray.splice(1,3)
// console.log(myArray2)


const marvel_heroes = ["ironman","spiderman","thor"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)               //  push() → array ke andar array
// console.log(marvel_heroes[3][1])       //    concat() → merge (but store karna padega)


  // const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)_

const all_new_heroes = [...marvel_heroes,...dc_heroes]       //  spread opreator
//console.log(all_new_heroes)


const arr = [1,2,3,[4,5,6],7,[4,5]]
const newArray = arr.flat(Infinity)                   //   flat() → nested array ko simple array bana deta hai
//console.log(newArray)

console.log(Array.isArray("Shivam"))   // Array.isArray() → array check karta hai (true/false)
console.log(Array.from({name:"Shivam"}))


let score1 = 100;
let score3 = 200;
let score2 = 300;
console.log(Array.of(score1,score2,score3))










