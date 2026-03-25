 const mySum  = Symbol("key1")


let user = {
     [mySum] : "mykey1",

  name: "Shivam",
  age: 22,
  city: "Delhi",
  email:"Shivam@google.com",
}

//  console.log(user.name)
//  console.log(user.age)
//  console.log(user["email"])


//  console.log( typeof user[mySum])


//  user.email = "Shivam@microsoft.com"
//  console.log(user.email)

user.email = "Shivam@microsoft.com"
// Object.freeze(user)
user.email = "Shivam@chatgpt.com"
//console.log(user)

user.greeting = function(){
  console.log("hello User")
}

//console.log( user.greeting)



//const tinderUser = new Object()     //              // singleton object
const tinderUser ={}

tinderUser.id  ="123abc"
tinderUser.name = "Shivam"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser);



const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shivam",
      lastname: "Yadav"
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1  = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)

//console.log(obj3);



const users = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 2,
    email: "h@gmail.com"
  },
  {
    id: 3,
    email: "s@gmail.com"
  },
  {
    id: 4,
    email: "s@gmail.com"
  },
  {
    id: 5,
    email: "s@gmail.com"
  }
]

// console.log(users[1].email)
// console.log(users[0].id)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) 
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
  coursename : "javascript",
  price : "1000",
  courseInstructor : "Shivam"
}

// console.log(course.price)
const{courseInstructor : yadav} = course  
console.log(yadav)                                   // de - structure 
// console.log(courseInstructor)


