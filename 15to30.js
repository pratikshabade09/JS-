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

/*
single block of code hain toh ek dabbe mei store ho jagta hain aur fir voh memory + execution phase 
se gujarta hain. If nested function jaisa kuch hain to similar hi hoga bs function ke liye alag se ek 
dabba banega jisme sab store and execute hoga
*/

//video26
//control flow in JS
//short hand notation in if-else:
// if(2>1) console.log("sahi hain!")   //semicolon is prefered for readability
// if(2>1) console.log("sahi hain!"), console.log("done!");    //bad practice --> not readable

//switch 
let month = 5;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("february");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("june");
//     break;
//   case 7:
//     console.log("july");
//     break;

//   default:
//     break;
// }

//falsy values and truthy values
//falsy values: false, 0 , -0, BigInt 0n, null, undefined, NaN
//truthy values: all other than falsy. Special cases: "0", 'false', " ", [],{}, function (){} 

//interview specials:
 //false == 0 //true
 //false== ' '  //true
 //0==' '   //true

//Nullish Coalescing Operator (??): null undefined
//Agar database se 'null' ya 'undefined' jaisi values aaye toh alternative option ke liye use hota hain!
let val1;
// val1 = null ?? 10;   //10
// val1 = undefined ?? 20;  //20
// val1 = null ?? 12 ?? 34;   //12

// console.log(val1)

//Ternary operator (?)
const ice = 200;

// ice>20 ? console.log("true") : console.log("false")    //true

//video27&28
//loops

//for
let arr = [2,7,345,76]
// for(i=0; i<arr.length;i++){
//   if(arr[i]==76){
//     console.log(`Found element ${arr[i]} at position ${i+1}`);
//   }
//   else{
//     continue;
//   }
// }

//while
// let i = 0;
// while(i<arr.length){
//   console.log(`Element is ${arr[i]}`);
//   i++;
// }

//do while
// let j = 0;
// do {
//   console.log(arr[j]);
//   j++;
// } while (j<arr.length);


//video29
//High Order Array loops
//for of
for (const i of arr) {
  // console.log(i)    //here i is the element in array not the index of element.
}

const arr2 = "Hey Charlie!"
for (const i of arr2) {
  // console.log(i)
}

//Maps    
//Map is used to transform every element in an array and return a new array of the same length. 
//duplicates ignored

//forof loop
const mp = new Map()
mp.set('IN',"India")
mp.set('US',"USA")
mp.set('INDO',"Indonesia")

// console.log(mp)
//Map(3) { 'IN' => 'India', 'US' => 'USA', 'INDO' => 'Indonesia' }

for (const [key] of mp) {   //[] to be used to get key and value of map
  // console.log(key)    //return only key not value
}

for (const [key,value] of mp) {   //[] to be used to get key and value of map
  // console.log(key,value)    
}
  /*
IN India
US USA
INDO Indonesia
  */

for (const key of mp) {
  // console.log(key)    
}
  /*
[ 'IN', 'India' ]
[ 'US', 'USA' ]
[ 'INDO', 'Indonesia' ]
  */


const myobj = {
  game1: "BGMI",
  game2:"GTAV"
}
// for (const i of myobj) {
  // console.log(i)      //ERROR --> object not iterable
// }


//forin loop
const lang = {
  cpp:"C++",
  JS: "JavaScript",
  PY: "python",
  rb:"Ruby"
}
for (const key in lang) {
  // console.log(`${key} is called ${lang[key]}`)    //key --> return key only not value , lang[key] --> return value not key
}

for (const key in arr) {
  // console.log(`${key} : ${arr[key]}`)    //In for in loop, key acts like index in case of array so we need to give arr[key] to get its value.
}

for (const key in mp) {
//  console.log(key)   //will not return enything i.e. map is not iterable in for..in loops unlike for...of loops
}

const codebits = [0,11,1,1]
codebits.forEach(function(i){
  // console.log(i)    //arr elements prints
})
codebits.forEach((i) => {
  // console.log(i)    //arr elements prints
})

function justPrint(item){
  // console.log(item)
}

// codebits.forEach(justPrint)   //print all elements in codebits

codebits.forEach((item,index,arr) => {
  // console.log(item,index,arr)    //arr elements,inex,whole aray prints
})

// iterating object inside array
const arrobj= [
  {lang:"Java",cpp:"C++",py:"Python"},
  {lang:"C++",java:"Java",py:"Python"},
  {lang:"Python",java:"Java",cpp:"C++"},
]

arrobj.forEach((i)=> {
  // console.log(i.lang)   // Java C++ Python
})

//video30
//in detail forEach
//forEach doesnot return anything only exits callback
// it cannot be broken i.e. no use of break;
//internally works like this:
/*
function forEach(callback){
  //do something
}
*/

//Filter method of array
//filter is used to create a new array containing only the elements that satisfy a specific condition
//It takes a callback function. If the condition inside the callback returns true, the value is kept; if false, it's excluded.

myNums= [2,6,4,7,1,0]
// const newNums = myNums.filter( (i) => {
//   return i>2
// })
// console.log(newNums)
//If you open a scope with { }, you must use the return keyword, otherwise, it returns an empty array


//ALTERNATIVE for above console
// const newNums = myNums.filter( (i) => i>3)
// console.log(newNums)

//Through forEach
// const newNums = []    //created an empty array
// myNums.forEach((i) => {
//   if(i>3){
//     newNums.push(i)   //pushed the accepted values
//   }
// })
// console.log(newNums)    //[ 6, 4, 7 ]

//real problem
const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981,
edition: 2004},
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008},
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007},
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010},
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014},
{title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010},
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996}
];

const userDemand = books.filter((i) => i.edition > 2010)
// console.log(userDemand)
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  }
]
*/

//through forEach
// books.forEach((i)=> {
//   if(i.genre === 'Science' && i.publish===2009){
//     console.log(i)
//   }
// })

//filter() is callback function similarly, map() is also. 
// filter() & map() both creates a new array and doesn't modify the original array
// let newNumss = myNums.map((i)=>i>2)
// console.log(newNumss)   //[ false, true, true, true, false, false ]

//CHAINING ----> In chaining, the second method receives the array modified by the first method
//filter and maps together --> chaining :can use multiple methods together
newNums = myNums.map((i)=> i*10)
  .map((i) => i+1)
  .filter((i)=>{
  return i > 2
})
// console.log(newNums)    //[ 21, 61, 41, 71, 11 ]


//reduce() method
/*
reduce() is used to boil down an array into a single value (like a sum or a total).
Accumulator: Stores the accumulated result of previous operations.
Current Value: The current element being processed.
Initial Value: The starting value for the accumulator
Real-world Example: Calculating the total price of items in a shopping cart.
*/

let shoppingCart = [
  {
    course: "JS",
    price:2999
  },
  {
    course: "C++",
    price:1999
  },
  {
    course: "BootStrap",
    price:3000
  },
  {
    course: "ML",
    price:1500
  }
]

let totalPrice = shoppingCart.reduce((acc,currunt_val)=>{   //'acc' here is accumulator, 'current_val' is the current element, '0' is put later which is the initial value in the cart 
  return acc + currunt_val.price
},0)
// console.log(totalPrice)    //9498

//short syntax alternative
let TPrice = shoppingCart.reduce((acc,currunt_val) => acc + currunt_val.price,0)
// console.log(TPrice)   //9498


