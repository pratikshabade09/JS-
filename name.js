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


