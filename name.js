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

