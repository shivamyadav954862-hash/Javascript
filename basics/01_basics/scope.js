let a = 30
if(true){
let a = 300
// console.log("Inner:", a)
}
// console.log(a)


function one(){
    const username = "Shivam"

function two(){
    const website  ="youtube"
    //console.log(username);
}
// console.log(website);

 two()
}

one()


// console.log(addone(5));            //simple  Hoisting = code run hone se pehle JS declarations ko upar shift kar deta hai

function addone(num){                
    return num + 1;
}

// ++++++++++++++++++ arrow function +++++++++++++
    
const user = {
    username: "Shivam",
    price : 999,

    welcomeMessage : function(){
       // console.log(`${this.username} welcome to website`)             
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


// Browser → this = window
// Node → this = empty object


// function chai(){
//     console.log(this)
// }
// chai()

// function chai(){
// let username = "Shivam"
// console.log(this.username)
// }
// chai() //undefined

const chai = () => {
    let username = "Shivam"
    // console.log(this.username)
}
chai()  // undefined

const calculateTotal = (price1, price2) => {
    return price1 + price2
}

// console.log(calculateTotal(200, 300))

const calculatetotal = (price1, price2) => price1 + price2

console.log(calculatetotal(200, 300))

