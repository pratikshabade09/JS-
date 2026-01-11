//video16
//Objects
//object literals & singleton

//object literals
const myID = Symbol(345)

const user = {
    name:"Pratiksha",
    PRN:245678,
    ambitious: true,
    email: "mew.com",
    age:20,
    Location:"Sangli",
    LastLogin:["Wednesday",6],
    "fullname":"pratu mew mew",
    [myID]: "krow"  //since we have myID as symbol so to show that put it in [] otherwise it would be just a simple string.
}

// console.log(user.ambitious)
// console.log(user.myID)
// console.log(user["fullname"])        //interview specials
// console.log(typeof user[myID])
// console.log(typeof myID)
// console.log(`It's ${user.LastLogin} since you last logged in!`)
// Object.freeze(user)       //doesn't let changes to apply to the object

// user.email = "pratu@comcom"   //still won't change due to object freeze
// console.log(user)

user.greet = function(){
    console.log(`Good morning, ${this.name}!`)
}
// user.greet()   //Good morning, Pratiksha!

//video17
const user2 = {}

user2.id = 23456
user2.bankname = "BOB"
user2.details = {
    fullname:{
        initial: "Himesh",
        middle: "Ganesh",
        end: "Gandhi"
    }
}

// console.log(user2.details.fullname.end)     //Gandhi
// console.log(user2)
/*
{
  id: 23456,
  bankname: 'BOB',
  details: { fullname: { initial: 'Himesh', middle: 'Ganesh', end: 'Gandhi' } }
}
*/
const obj1 = {1:"i",2:"m",3:"l"}
const obj2 = {4:"k",5:"u",6:"p"}

const obj3 = {obj1,obj2}
const obj4 = Object.assign(obj1,obj2)
// console.log(obj3)       //merges two object in an obj
/*{
  obj1: { '1': 'i', '2': 'm', '3': 'l', '4': 'k', '5': 'u', '6': 'p' },     
  obj2: { '4': 'k', '5': 'u', '6': 'p' }
}*/
// console.log(obj4)       //merges all key value pairs in an obj -->  { '1': 'i', '2': 'm', '3': 'l', '4': 'k', '5': 'u', '6': 'p' }

// console.log(obj4===obj1)    //true --> if const obj4 = Object.assign(obj1,obj2)--> modifies obj1 also
                            //false --> if const obj4 = Object.assign({}, obj1,obj2) --> only store in obj3 doesn't modify obj1

//other way --> spread
const obj5 = {...obj1, ...obj2}
// console.log(obj5)       //{ '1': 'i', '2': 'm', '3': 'l', '4': 'k', '5': 'u', '6': 'p' }

// console.log(Object.keys(obj1))      //gives keys array--> [ '1', '2', '3', '4', '5', '6' ]
// console.log(Object.values(obj1))    //gives values array--> [ 'i', 'm', 'l', 'k', 'u', 'p' ]
// console.log(Object.entries(obj1))       //gives array in array --> 
/*
[
  [ '1', 'i' ],
  [ '2', 'm' ],
  [ '3', 'l' ],
  [ '4', 'k' ],
  [ '5', 'u' ],
  [ '6', 'p' ]
]
*/
// console.log(obj1.hasOwnProperty(2))     //true --> to check if certain property exist in the obj or not


//video18
//object destructure and JSON API 

const course = {
  coursename: "Chai aur JS",
  courseteacher: "HiteshSir",
  courselength: ["Jan", "Feb"]
}

// console.log(course.courselength)   //normal way

//destructure
const {courselength: p} = course
// console.log(p)

//JSON: JavaScript Object Notation
//API: can be in any form might be array,object,etc


//video19
// Function and parameter
// function add2Nos(num1,num2){  //num1,num2 are parameters not arguments
//   console.log(num1+num2);
// }

function add2Nos(num1,num2){  //num1,num2 are parameters not arguments
  return num1+num2    //function returns value
}

const res = add2Nos(4,6)   //passes numbers here are called arguments not parameters
// console.log(res)

function login(username = "Adi",time=4.30){
  if(!username){
    console.log("Enter a unique username :)")
    return
  }
  return `${username} has recently logged in at ${time} pm.`
}

// console.log(login())    //will take default arguments those were given in parameter during function declaration
// console.log(login("Pratiksha",8.30))    //will work normally


//video20
//when we don't know how many parameters will be passed like in case of large company data
//1.
function CartPrice(...nums){    //...nums --> spread operator 
  return nums         
}
let price = CartPrice(200,890,990,120)
// console.log(price)      //[ 200, 890, 990, 120 ]

//2.
const u1 = {
  user:"sam",
  ID:90
}
function handleObj(anyobject){
  console.log(`User with ID no. ${anyobject.ID} is ${anyobject.user}.`)
}

// handleObj(u1)
// handleObj({
//   user:"Sam",
//   ID:90
// })        //alternative way


//for arrays
const myarray = [3,8,34,22,87]
function return2ndValue(getArray){
  return getArray[1]
}
// console.log(return2ndValue(myarray))    //8
//OR
// console.log(return2ndValue([3,8,34,22,87]))   //8


//video21
//Global & Local Scopes