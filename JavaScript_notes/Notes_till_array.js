
// In this file, we will cover the basics of JavaScript including variables, data types, strings, numbers, arrays and some built-in methods.

// hello world stuff
console.log('hola!!');

// Variables and Data Types
let a = 10;// Initializing a variable 'a' with value 10
console.log(a);
let y = 20.5;// equal to here is called an assignment operator
console.log(y);
namee ="Peter Parker";
console.log(namee);

//Data Types in JavaScript
//1. Number
let num = 100;
console.log(num);

//2. String
let str = "Hello, World!";
console.log(str);

//3. Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

//4. Undefined
let undef;
console.log(undef);

//5. Null
let nll = null;
console.log(nll);

//6. Object
let obj = {key: "value", number: 42};
console.log(obj);

//7. Symbol
let sym = Symbol("unique");
console.log(sym);

//Examples of null and undefined
a=null;
y=undefined;
console.log(a);
console.log(y);
let age = 35;
console.log(age);
const isFollow = false;
console.log(isFollow);

//Following are examples of objects in JavaScript

//Object representing a Student
const Student={
    name: "Tony Stark",
    age: 40,
    isAvenger: true
};
console.log(Student);

//Object representing a Product
const Product={
    Name: "Ball Pen",
    Price: 270,
    MRP:285,
    Color: "Black",
    Reviews: 7002,
    Discount:'5%',
    Deal_Of_The_Day: true,
    isAvailable:true
};
console.log(Product);

//Object representing a Social Media Profile
//note: when intializing a const, always give it a value or it might produce an error
const Profile={
    User_Name:"peter_parker",
    posts: 2,
    Is_followed: true,
    message: true,
    followers:50, 
    following:20,
    isVerified: false,
    Links: false,
    bio:"Just Your friendly neighborhood Spiderman"
};
console.log(Profile);

//Strings in JS (strings are immutable here!)
let firstName = "Bruce";
let lastName = "Wayne";
console.log(firstName);
console.log(lastName);

//Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

//Template Literals: A way to embed expressions in strings
//String Interpolation: To create strings by substituting variables and expressions inside a string
//Using backticks (`) and ${} <-- this is called interpolation :)

//Ex1:
let fullName2 = `${firstName} ${lastName}`;// defined at lines 95 and 96
console.log(fullName2); 

let city = "Gotham";
let aboutMe = `I am ${fullName}, I live in ${city}.`;
console.log(aboutMe);

//Ex2:
let obj1={
    Name: "Steve Rogers",
    Age: 101,
    City: "Brooklyn"
};
let aboutSteve = `I am ${obj1.Name}, I am ${obj1.Age} years old and I live in ${obj1.City}.`;
console.log(aboutSteve);

//Ex3:
let specialstring= ` This is a template literal ${2 + 3} and it can do calculations too!`;
console.log(specialstring);

//Ex4:
let multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);

//escape characters in strings
let escapeString = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(escapeString);
console.log(escapeString.length); //Property to get length of string

//ex 4:
//input;
// const userInput = prompt("Please enter your name without spaces: ");
// console.log("@" + userInput + "13");

//String Properties and Methods
let myString = "Hello, Welcome to the world of JavaScript!";

console.log(myString.length); //Property to get length of string

console.log(myString.toUpperCase()); //Method to convert to uppercase

console.log(myString.toLowerCase()); //Method to convert to lowercase

console.log(myString.charAt(7)); //Method to get character at index

console.log(myString.indexOf("world")); //Method to find index of substring 

console.log(myString.lastIndexOf("o")); //Method to find last index of character

console.log(myString.trim()); //Method to remove whitespace from both ends

console.log(myString.includes("JavaScript")); //Method to check if substring exists

console.log(myString.slice(0, 5)); //Method to extract a part of the string

console.log(myString.replace("JavaScript", "JS")); //Method to replace substring

console.log(myString.split(" ")); //Method to split string into array   

console.log(myString.replace("e", "y"));//Method to replace first occurrence of character

console.log(myString.replaceAll("o", "0"));//Method to replace all occurrences of character



//Numbers in JS
let num1 = 100;
let num2 = 50.5;
console.log(num1);
console.log(num2);

//Number Methods
console.log(num1.toString()); //Method to convert number to string

console.log(num2.toFixed(1)); //Method to format number to 1 decimal place

console.log(Number.isInteger(num1)); //Method to check if number is integer

console.log(Number.isInteger(num2)); 

console.log(parseInt(num2)); //Method to convert float to integer

console.log(parseFloat("45.67")); //Method to convert string to float

console.log(Math.max(10, 20, 5, 30)); //Method to get maximum number

console.log(Math.min(10, 20, 5, 30)); //Method to get minimum number


//Math Object
console.log(Math.PI); //Property that returns the value of PI

console.log(Math.round(4.7)); //Method to round a number

console.log(Math.floor(4.9)); //Method to round down

console.log(Math.ceil(4.1)); //Method to round up

console.log(Math.sqrt(16)); //Method to get square root

console.log(Math.pow(2, 3)); //Method to get power of a number

console.log(Math.random()); //Method to generate random number between 0 and 1

console.log(Math.random() * 100); //Random number between 0 and 100 

console.log(Math.floor(Math.random() * 100) + 1); //Random integer between 1 and 100

// This concludes the basics of JavaScript including variables, data types, strings, numbers, and some built-in methods.

//Arrays: Linear collection of items(mutable)
// some examples

let heroes=["spiderman", "superman", "iron man"];
let marks=[3,4,5,6];
console.log(marks);
let mixedArray=[1, "hello", true, null];
console.log(mixedArray);

//looping in array:
for (let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);

}
// using for of
for (let hero of heroes){
    console.log(heroes.toUpperCase);//can also use methods here
}

//Array Methods
console.log(heroes.length); //Property to get length of array

heroes.push("batman"); //Method to add element at the end
console.log(heroes);

//push in array ex;
let items=[250, 645, 300, 900, 50];
let discount_array=[];
for (let item of items){
    discounted_price= (item -(item/10));
    discount_array.push(discounted_price);
    console.log(discount_array);
}

heroes.pop(); //Method to remove last element
console.log(heroes);

heroes.unshift("hulk"); //Method to add element at the beginning
console.log(heroes);

heroes.shift(); //Method to remove first element
console.log(heroes);

console.log(heroes.indexOf("superman")); //Method to find index of element

console.log(heroes.includes("iron man"));//Method to check if element exists

console.log(heroes.join(", ")); //Method to join array elements into string
