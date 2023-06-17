let name = "janet";
console.log(name);
name = "tobi"
console.log(name);
name = "joel"
console.log(name);
let age = 18
console.log(age);

const pie = 3.142;
console.log(pie);

let product1 = "bag";
console.log(product1);


let partSentenceOne = "1 +";
let partSentenceTwo = " 2";
let output = partSentenceOne + partSentenceTwo;
console.log(output);

let part1 = 2;
output = part1 + "," + "3";
console.log(output);

let name2 = "Mark";
let companyName = "Alabian Solution Limited";
// Normal concatenation
console.log(name2 + " works at " + companyName);
// Template Literals
console.log(`${name2} works at ${companyName}`);

let x = 2;
let y = 4;
let z = x + y;
console.log(z);

let t = 10;
let f = 3;
let e = t * f;
console.log(e);


let product = "bag";
if (product === "bag") {
    console.log("you order for bag");
} else if (product === "shoe") {
    console.log("you order for shoe");
} else {
    console.log("No product specified");
}


let score = prompt("Your grade");
let letter;
const grade = 100;
if (score >=90){
    alert(`Your score is ${score} A`)
}
else if (score >=80){
    alert(`You are Good`)
}
else if (score >=70){
    alert(`Your score is ${score} C`)
}
else if (score >=60){
    alert(`Your score is ${score} D`)
}

// while loop
// let i = 1;
// let n = 5;
// while (i <= n) {
//     console.log(i);
//     i += 1;
// }

let v = 1;
let r = 10;
while (v <= r) {
    console.log(v);
    v += 1;
}

let g = 10;
let p = 1;
while (g >= p) {
    console.log(g);
    g--
}

for (let o = 0; o <= 10; o++) {
    console.log(o);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        // console.log(i + "is even number");
        continue;
    } else {
        console.log(i + " odd number");
    }
}

// // Define the table range
// let tableRange = 10;

// // Display the 2 times table
// for (let l = 1; l <= tableRange; i++) {
//   var result = 2 * l;
//   console.log(result);
// }

// Define the multiplication table range
// let tableRange = 10;

// Iterate through the range and display the multiplication table
// for (let l = 1; l <= tableRange; l++) {
    // let result = 2 * l;
    // console.log("2 x " + l + " = " + result);
// }

function myName() {
    console.log("Tobi");
}
myName();
myName();
myName();
myName();
myName();
myName();

function addition() {
    let b = 4
    let c = 23
    let d = b + c
    console.log("the result is " + d);
}
addition();

const add = function () {
    let q = 4;
    let f = 3;
    v = q + f;
    console.log(v);
}

const subtract = function (a,b) {
    let c = a - b;
    console.log(c);
};

subtract(10, 5)
subtract(100, 10)
subtract(2, 2)

function interest (p , r , t ){
let I = p*r*t/100
console.log(I);
}
interest(60,10,5);

function product4(product1, product2){
    let item = product1 + product2;
console.log(item);
};
product4("shoe" , " cloth")

function people3(){
    console.log("Tobi is great");
}
function greet(name, people){
    people();
    console.log("my name: " + name);
}
greet("tobi", people3)

function add1(p, p2){
    return p + p2;
}

function result(p, add1){
    console.log(p * add1(2, 3));
}
result(3, add1);

// Question 2
function prices(house){
    let produce =" the price of the house is " + "$"+50 *50
    console.log( produce);
 }
 prices("house")

// Question 3
function calculateparameter(parameter1, parameter2){
    let prodcut = parameter1 * parameter2;
return prodcut;
};

let value = 10;
let value2 = 15;
let result1 = calculateparameter(value, value2);
console.log("Product = " + result1);

// Question 4
function people(name = "Ernest", job = "Software Developer") {
    console.log("My name is " + name + " " + "I am a " + job);
}

people();

// Question 6
function love() {
    console.log("I love Javascript");
}

function js(callback) {
    console.log(message);
}

love(); 

// Question 8
// const course = "JavaScript";
// if (course === "Java") {
// let book = "Programming";
// }
// console.log(book);
// Ans= book is the local scope

// Question 10
for (let i = 2 ; i < 10; i++) {
    if (i % 0 === 0 ) {
        continue;
    }
    console.log(i + " is an even number");
}
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i + " is odd number ");
}

// Question 11
// Define the multiplication table range
let tableRange = 10;

// Iterate through the range and display the multiplication table
for (let l = 1; l <= tableRange; l++) {
    let result = 2 * l;
    console.log("2 x " + l + " = " + result);
}


const product5 = ["apple", "samsung", "book", "backwoods"]
console.log(typeof(product5)); 

const cars = ['toyota', 'Benz', 'Honda', 'volkswagen', 'volvo']
cars[5] = "ford"
 console.log(cars);

 const emptyarray = []
 emptyarray[3] = " Joel"
console.log(emptyarray);

document.write(emptyarray)