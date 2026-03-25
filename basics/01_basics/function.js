
function sayMyName(){
   // console.log("Shiv");
//  console.log("am");
}
 sayMyName()



//  function addTwoNumber(num1,num2){   //parameters
//       console.log( num1+num2)
//  }

//  addTwoNumber(3,4)       //arguments






function addTwoNumber(num1 , num2){

// let result = num1+num2
//  return  result
return num1+num2

 console.log("Shivam")   //unreachablecode
}

  const result =  addTwoNumber(4,5)

//   console.log( "Result:" , result)



function loginUserMessage(username){
    return `${username} just logged in`
}
//  console.log(loginUserMessage("Shivam"))



function calcualteCartPrice( val1,val2,...num1){   //rest opreator 
    return num1
}

// console.log(calcualteCartPrice(200,300,400,500))



const user = {
    username : "Shivam",
    price : "199"
}

function handleObject(user){
console.log(`Username is ${user.username} and price is ${user.price} `)
}

handleObject(user)
