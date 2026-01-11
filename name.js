//video16
//Objects

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
console.log(Object.entries(obj1))       //gives array in array --> 
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

console.log(obj1.hasOwnProperty(2))     //true --> to check if certain property exist in the obj or not