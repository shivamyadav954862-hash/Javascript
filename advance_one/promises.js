
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


// .then() sirf resolve (success) pe chalta hai
//  error ke liye hota hai .catch()

const PromiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username: "Shivam", email: "Shivam@google.com"})
console.log("")
},1000);
})

PromiseThree.then(function(user){
console.log(user)                       
})

// Promise bana
//    ↓
// time laga (setTimeout)
//    ↓
// resolve() call
//    ↓
// .then() chala
//    ↓
// result mil gaya


// const promise = new Promise(function(resolve, reject){
//     reject("Error aa gaya")
// })

// promise.catch(function(error){
//     console.log(error)
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username:"Ashu", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
}).finally(() =>console.log("Finally the promise is either is resolve or rejected"))
 

//  await = ruk ja jab tak result na aaye
//  try/catch = error handle karne ke liye

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username:"Javascript", password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()