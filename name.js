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
 
let a = 3;
var b = 9;
const c = 5;

if(true){
  let a = 8;
  var b = 4;
  const c = 7;
  //block level scope ({})
  // console.log("Inner:",a) //8
  // console.log("Inner:",b) //4
  // console.log("Inner:",c) //7
}

//global scope
// console.log(a)  //3
// console.log(b)  //4 --> Avoid using var bcz it is accessible outside brackets too.
// console.log(c)  //5

//video22
//
function one(){
  const name = "pratuu"
  function two(){
    const website = "YT"
    // console.log(name) // --> can access only when two() is called somewhere
  }
  // console.log(website) //--> cannot access
  // console.log(name) //--> can access
  two()
}

// one()

if(true){
  const naam = "priti"
  if(naam=="priti"){
    const website = "YT"
    // console.log(naam+website) //accessible
  }
  // console.log(website) //not accessible
}
  // console.log(naam)  //not accessible


//interesting concept

// console.log(addOne(7))    //can be executed. Output: 8
function addOne(num){
  return num+1
}
// addOne(7)

// console.log(addTwo(7))   //Won't work here b4 initialization bcz stored in variable
const addTwo = function(num){
  return num+2
}
// console.log(addTwo(7))   //Works! Output:9


//video23
//THIS and arrow function
const userk = {
  username:"Pratuu",
  price:999,
  welcome: function(){
    console.log(`Hey ${this.username}, welcome to the family.`)
  }
}

// userk.welcome()   //Hey Pratuu, welcome to the family.
// userk.username = "Aniyaa"
// userk.welcome()   //Hey Aniyaa, welcome to the family.

// console.log(this)   //{} --> an empty obj
// function A(){
//   const usern = "Rakesh"
//   console.log(this)   //will give something big output :)
//   console.log(this.usern)   //undefined --> 'this' won't work well inside a function
// }
// A()

// console.log(this)    //Run in browser console --> returns a window object
//NOTE: Browser ka global object --> Window object

//Arrow Function
const chai = () => {
  const usern = "Rakesh"
  console.log(this)   //{}
  console.log(this.usern)   //undefined --> 'this' won't work well inside a function
}
// chai()

//explicit method
// const summ = (num1) => {
//   return num1
// }
// console.log(summ(3)) //3

//syntax wise alternative: Implicit Method
const summ = (num1) => num1 //no need of {} and 'return' keyword
// console.log(summ(3))    //3
// console.log(summ({
//   usernm: "MEW",
//   location:"India west",
//   JobType:"remote"
// }))   //{ usernm: 'MEW', location: 'India west', JobType: 'remote' }

// const dealObj = num2 => ({username:"Pratiksha"})    //write in parenthesis() the output. Here, (num2).
// console.log(dealObj(9))   //{ username: 'Pratiksha' }



//video24 ---------Thoda Difficult hain-------------------------------------------------
//Immediatel invoked function expression (IIFE)
//why to use IIFE ? ==> we don't want global scope pollution

//named IIFE
// ;(function coffee(){
//   console.log("DB Connecting...");
// })()    //DB Connecting...

//unnamed IIFE
// ;((name) => {
//   console.log(`DB CONNECTED ${name}`);
// })("priti")    //DB CONNECTED

// NOTE: If writing 2 IIFE's then don't forget to put ; b4 starting...


//video25
//Execution context --> environment in which code is being executed
                  //--> 1.Global EC : default, represented by 'this', in browser referred to as window object.
                  //--> 2. Function EC : Created whenever a function is called.
                  //--> 3. Eval EC : Created when code is executed inside an eval function (less common).
                        //In eval, console.log("X+Y") this way immediate execution is done inside a string 

//1.Memory creation phase--> only memory is allocated
//2. Execution phase--> actual execution is done here











                  