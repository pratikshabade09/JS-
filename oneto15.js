//video1 to video4
"use strict"; //--> stricter rules applied to your code (that does not allow common errors to bypass)

//premitive datatypes: number(2^53-1), bigint(hardly used), string, boolean, null(standalone value), undefined(no value to variable eg., let dress;, symbol(used in react to define unique))
let accountId;
let accountMail = "mewmew@google.com";
let accountPass = "23erg"; 
// console.table({accountId, accountMail, accountPass});

//video5
//alert will give error here bcz we r using node here & not browser.
// alert(3+5); 

// console.log(typeof(null)) //object
// console.log(typeof(undefined)) //undefined

//video6
//conversion of datatype

let k = (345); 
let m = Number("sdfg");
let g = Number('ekejfg4');
let rm = (true);

// console.log(typeof(k));
// console.log(typeof(m));
// console.log(typeof(g));
// console.log(typeof(rm));
// console.log(k)
// console.log(m)
// console.log(g)
// console.log(rm)

//video7
//operations
let value = 2;
let negValue = -value;
// console.log(negValue,"\n"); //-2

let str1 = "Halo";
let str2 = " Pratuu!";
let str3 = true;
let str4 = 34;
let str5 = null;
// console.log(str1+str2+str3+str4+str5); //Halo Pratuu!true34null

let a = 2 +"5"; 
// console.log(a); //2+true -->3, "2" + true --> 2true, 2+"5" -->25, 3+5 -->8
// console.log(typeof(a)); //2+true -->number, "2" + true --> string, 2+"5" -->string, 3+5 -->number

let x= 3n;
let y= x++//(or 1 + x++);
// console.log(`X:${x},Y:${y}`); //use `` for variables and string in one single console,log
//output: X:4,Y:3 (first print then increase) -->Postfix increment

let X= 3n; //n denote BigInt (bigger than normal number) and not a variable like in maths :)
let Y= ++X;
// console.log(`X:${X},Y:${Y}`); //output: X:4, Y:4 not 3n and 4n bcz for outfut we have used string interpolation i.e. convert all into string (first increase then print) -->Prefix increment

let x2 = 3n;
const y2 = x2++;
// console.log(x2,y2) //4n 3n 

let num1 = +true;
let num2 = +"";
// console.log(num1); //1 
// console.log(num2); //0 --> bcz "" gives null which means 0 

//video8
//comparing datatypes
// console.log(null > 0)   //false
// console.log(null == 0)  //fale
// console.log(null >= 0)  //true

// console.log(undefined > 0)  //false
// console.log(undefined == 0) //false
// console.log(undefined >= 0) //false

// console.log(undefined == null) //true (converts into comparable datatype and then compare)

// console.log("2">=2)
// console.log(1==true)
//Avoide such comparisons bcz they are == and === are different here. 

// console.log(undefined === null) //false (only compare when same datatype - stricter)

//Use this instead of == for clean with datatype comparison


//video9
//datatypes summary
//Types: Primitive(uses stack for memory) & Non-Primitive(uses heap for memory)

//Primitive(by Value): String, Number, undefined, null, Boolean, Symbol(for uniqueness), BigInt

//Non-Primitive(by Reference --> jinka memory mei reference diya jata hain): Objects, Arrays, Functions

//NOTE: JS IS DYNAMICALLY TYPED LANGUAGE AND NOT STATICALLY TYPED LANGUAGE i.e. we don't need to define the datatype while declaring variable.

const bigNumber = 23456789987654324567n //Here 'n' denotes that the declared number is of BigInt datatype and not a normal number.

const score = 454
const count = Symbol(89)
const marks = Symbol(89)
// for uniqueness --> Symbol  
// console.log(count === marks) //they are unique due to 'Symbol'

//All Non primitive DT has typeof 'object' eg., null --> obj, array --> obj, date --> object, map/set --> object, function --> function(called object function)

//video10
//stack and heap for memory

//Stack --->Primitive DT (creates copy everytime)
//Heap --> Non-Primitive DT (gives reference)
let myID= 2342;
let yourID = myID;  //In Stack, copy  of myID will be taken not original
yourID = 34;
// console.log(myID)
// console.log(yourID)

let obj = {
    email: "mew@google.com",
    contact: 98754587 
}
let obj2 = obj      //In heap, reference of object 'obj' not copy and value will change of obj's email.
obj2.email = "sfv@google.mew"

// console.log(obj.email)
// console.log(obj2.email)


//video11
//concatenation: 
let salary = 90
let naam = "giraffee"
// console.log(naam + " ki salary hain " + salary ) //old way

// console.log(`${naam} ki salary hain ${salary}`) //modern and efficient way

let subject1 ="Science"
let subject = new String("Science") //through 'new' we can create a String object not a normal string. If done in inspect-->console, we can get various methods of strings.

// console.log(subject)    //[String: 'Science']
// console.log(subject1)   //Science

//some methods: charAt(), replace(), includes(), trim(), slice(), split(), toUpperCase(), toLowerCase() --> check on mdm all others


//video12
//Numbers and Maths

//NUMBER
const numb = 123;
const numb2 =  Number(null);
const numb3 =  Number(undefined);
const numb4 =  Number("ds");
const numb5 =  Number(3245);

// console.log(numb);  //123
// console.log(numb2); //0
// console.log(numb3); //NaN
// console.log(numb4); //NaN
// console.log(numb5==numb4);
// console.log(typeof numb3,typeof numb2, typeof numb4);  //number

//methods
// console.log(numb.toString().length);    //3
// console.log(numb5.toFixed(1), numb5.toFixed(2));  //3245.0, 3245.00
// console.log(numb5.toPrecision(1),numb5.toPrecision(2),numb5.toPrecision(4))   //3.2e+3, 32.4e+2, 3245  (convert into exponential form) 
let numb6 =100000000;
// console.log(numb6.toLocaleString(),numb6.toLocaleString('en-IN'),numb6.toLocaleString('en-US')); //10,00,00,000   10,00,00,000    100,000,000


//MATH
// console.log(Math)
// console.log(Math.abs(-8))
// console.log(Math.round(4.2),Math.round(4.5),Math.round(4.6))
// console.log(Math.ceil(4.6),Math.ceil(4.1),Math.ceil(4.0))
// console.log(Math.floor(4.1),Math.floor(4.5),Math.floor(4.6))
// console.log(Math.min(4,78,35,987))
// console.log(Math.max(3,28,742,363,54))
// console.log(Math.random())  //creates a random value from 0 to 1
// console.log((Math.random()*10)+1)   //from 1 to 10 with decimal
// console.log((Math.floor(Math.random()*10))+1)    //single integer from 1 to 10
let min =10;
let max = 30;

// console.log(Math.floor(Math.random()*(max-min+1))+min)
/*IMP Formula when we have to generate random number
 between a given range of 2 numbers*/

 //video13
 //Date and Time
 let myDate = new Date()
//  console.log(typeof myDate) //object
//  console.log(myDate.toString()) //Wed Jan 07 2026 16:38:26 GMT+0530 (India Standard Time)
//  console.log(myDate.toISOString)    //[Function: toISOString]
//  console.log(myDate.toJSON())   //2026-01-07T11:08:26.127Z
//  console.log(myDate.toLocaleDateString())   //7/1/2026
//  console.log(myDate.toLocaleString())   //7/1/2026, 4:38:26 pm
//  console.log(myDate.toLocaleTimeString())   //4:38:26 pm
//  console.log(myDate.toTimeString()) //16:38:26 GMT+0530 (India Standard Time)
//  console.log(myDate.toUTCString())  //Wed, 07 Jan 2026 11:08:26 GMT

let Date2 = new Date()
// console.log(Date2.toString())
// console.log(Date2.getDate(), Date2.getMonth())  //7(7th Jan)    0(for Jan month)

// console.log(Date2.toLocaleString('en-UK')) //location specific time zones

// console.log(Date2.toLocaleString('en-UK',{
//     weekday: "short",
//     month: "long"
// }))         //Wed (month: January)

// NOTE: string interpolation means ``(backticks)

//video14
//Arrays
//resizable in JS
//Shallow copy i.e. make same reference point or changes the actual array 'after the code executes'
//Deep Copy i.e. make array copy but the copy does not change even if the actual array change in code later on.
//Shallow copy is formed when JS makes performs a copy operation

let arr = [1,5,7,3]
let arr2 = new Array(1,5,7,3)
// console.log(typeof arr,typeof arr2) //object
// console.log(arr.length, arr.size, arr.capacity)   //4 undefined undefined
// console.log(arr2[5],arr[1]) //undefined 5

//Array Methods
// arr.push(4)
// arr.push(9)
// arr.pop()
// console.log(arr)     //[1,5,7,3,4]

// arr.unshift(6)      //just like push() but add elements in beginning 
// console.log(arr)    //[6,1,5,7,3,4]
// arr.shift()         //just like pop() but removes element at 0th index
// console.log(arr)    //[1,5,7,3,4]

//NOTE: unshift() & shift() causes whole array to shift so for long dataset it is not optimal to use them.

// console.log(arr.includes(4),arr.includes(2))    //true false
// console.log(arr.indexOf(4),arr.indexOf(2))    //4 -1 (-1 bcz 2 doesn't exist in the array)

// const arr3 = arr.join("-")  //join() takes single arg and that is the separator btw each element of the formed string
// console.log(arr3)       //1-5-7-3 and this will be in the form of string not array

//splice and slice
let newArr = [3,4,5,6]

const naya = newArr.slice(1,3)      //(include:1, exclude:3) and doesn't change the original array
// console.log(naya)
// console.log("A ", newArr)

const naya2 = newArr.splice(1,3)    //(include:1,3) and remove them from the original array
// console.log(naya2)
// console.log("B", newArr)



//video15
//Arrays-II -->(working on adding arrays or spliting)
const array = ["me", "mumma","mama","brother"]
const array2 = ["shravani", "jyoti","mangal"]

//pushing one array in another
// let pushh = array.push(array2)
// console.log(pushh);      //will return the length of the new formed array i.e. 5 bcoz ["me", "mumma","mama","brother","["shravani", "jyoti","mangal"]"]
// console.log(array)      //[ 'me', 'mumma', 'mama', 'brother', [ 'shravani', 'jyoti', 'mangal' ] ]
// console.log(array[4][1])  //jyoti --> index of subarray with main array will print the proper element


//concatination of 2 arrays
// let conc = array.concat(array2)
// console.log(conc)
/*[
  'me',       'mumma',
  'mama',     'brother',
  'shravani', 'jyoti',
  'mangal'
]*/


//spread operator
let spr = [...array, ...array2]
// console.log(spr)
/*[
  'me',       'mumma',
  'mama',     'brother',
  'shravani', 'jyoti',
  'mangal'
]*/


//flat() method
const flt = [1,2,4,[4,7,5,1,0],4,85,2,[8,9,[3,0,0]]]
// console.log(flt.flat()) //by default it flatens upto 1 level i.e. [ 1, 2, 4, 4, 7, 5, 1, 0, 4, 85, 2, 8, 9, [ 3, 0, 0 ] ]
// console.log(flt.flat(2)) //upto level 2 will be separated i.e. [1, 2, 4,  4, 7, 5,1, 0, 4,85, 2, 8,9, 3, 0,0]
// console.log(flt.flat(Infinity))// all levels will be separated i.e. [1, 2, 4,  4, 7, 5,1, 0, 4,85, 2, 8,9, 3, 0,0]

//some basic methods of array
// console.log(Array.isArray("Pratiksha"))     //false
// console.log(Array.from("Pratiksha"))        //convert into array  [ 'P', 'r', 'a', 't', 'i', 'k', 's', 'h', 'a']
// console.log(Array.from({name:[2,4]}))     //[] --> this means even if value is array still key is not iterable so will return an empty array i.e. []
// console.log(Array.from({name:"Pratiksha"}))    //[]

let scr1= 100
let scr2=200
let scr3=100
let scr4=300

// console.log(Array.of(scr1, scr2,scr3,scr4))      //[ 100, 200, 100, 300 ]

