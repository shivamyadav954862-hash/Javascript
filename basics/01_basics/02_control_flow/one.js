  if (2=="2"){
    console.log("executed")  // === value or type dono check karta hai and if(false) → block run nahi hoga
}

// const temperature = 51;
// if(temperature < 50){
// console.log("less than 50")
// }else{
//     console.log("greater than 50")
// }

// const balance = 1000
// if(balance < 500){
// console.log("less than 500")
// }else if(balance < 600){
// console.log("less than 600")
// }else if(balance < 750){
//     console.log("less than 750 ")
// }else{
//     console.log("less than 1200")
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard ){
    console.log("allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail ){
console.log("user logged in")
}
