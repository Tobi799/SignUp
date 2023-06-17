const multiarray = [
    ["Tobi loves me"],
    ["Tobi is a boy"]
]

console.log(multiarray[0][0]);

const person = {
    firstname: 'Joel and Tobi',
    age: 12
}

console.log(person.firstname);

const person2 = {
    firstname: 'Tobi',
    lastname: 'Idowu',
    level: '200 level',
    grade: {
        science: 40,
        math: 20
    },
    getfullname: function () {
        console.log(`My name is ${person2.firstname} ${person2.lastname}. My grade in math is ${person2.grade.math} and science ${person2.grade.science}`);
    }
}
console.log(`My name is ${person2.firstname} ${person2.lastname}. My grade in math is ${person2.grade.math} and science ${person2.grade.science}`);

const student = {
    firstname: 'Joel',
    lastname: 'Idowu',
}
const firstname = student.firstname
const lastname = student.lastname

console.log(lastname);

const people = ["joel", "tobi", "matthew", "chinonso", "henry", "dauda", "jomiloju"]

people.forEach(function (person3) {
    console.log("My name is " + person3);
});


const multiply = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

multiply.forEach(function (number) {
    console.log(`${number} * 2 = ${number * 2}`);
});

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const seventhtable = table.map(function (tab) {
    return tab * 7;
});
console.log(seventhtable);

const grades = ["A", "F", "D", "A", "B", "E", "B", "E", "B", "C"];
const passGrades = grades.filter(function (grade) {
    let passGrade = ["A", "B", "C"];
    if (passGrade.includes(grade)) {
        return grade;
    }
});
console.log(passGrades);

const word = "interpolation";
const extractedText = word.slice(6, 9);
const phrase = "love programming";
const result = extractedText + " " + phrase;

console.log(result);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get personName() {
        return this.name;
    }

    set personName(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} who is ${this.age} can eat`);
    }
    walk() {
        console.log(`${this.name} is ${this.age}`);
    }
}

// let daniel = new Person("Daniel", 18);
// let steve = new Person("Steve", 20);
// console.log(daniel.name);
// daniel.walk();
// daniel.personName = "David";
// console.log(daniel.personName);

class Mammal {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;

    }

    get Name() {
        return this.name;
    }

    set Name(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} can walk`);
    }
    eat() {
        console.log(`${this.name} can eat`);
    }
    breed() {
        console.log(`${this.name} can breed`);
    }
    createMammal() {
        console.log(`created a ${this.name} `);
    }
}
// let lion = new Mammal("Lion", "5ft", 20);
// console.log(lion.name);
// lion.breed();
// lion.Name = "Cow";
// console.log(lion.name);
// let tiger = new Mammal("cheetah", "5ft", 20);
// tiger.createMammal();


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.slice()

// Question 11
let fruit = ["Banana", "Orange", "Apple", "Mango"]
let lastelement = fruit[fruits.length - 1];

console.log(lastelement);

// Question 12
const fruit1 = ["Banana", "Orange", "Apple", "Kiwi"];
fruit1.forEach(function (fruit) {
    console.log("I love " + fruit);
})

// Question 13
// Foreach the fruit
const fruit2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruit2.forEach(function (fruit) {
    console.log("I love " + fruit);
})
// Foreach the fruit
const fruit3 = ["Banana", "Orange", "Apple", "Kiwi"];

const plant = fruit3.map(function (veggie) {
    return "I love " + veggie;
});
console.log(plant);

// Question 14-15
const age = [23, 10, 5, 30, 54, 41, 9, 10, 5];
const above = age.filter((age) => age > 30);
console.log(above);

const five = age.filter((age) => age === 5);
console.log(five);

// Question 16
const student4 = {
    firstname: 'Joel',
    lastname: 'Idowu',
    age: 18
}

const students = {
    name: "tobi",
    age: 18,
    department: "sociology",
    Exams: {
        science: 40,
        math: 20
    },
}

class animal {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
    }

    getNamebreed() {
        console.log(`This name of my anime is ${this.name} and the breed is ${this.breed}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, breed)
    }
    getNamebreed() {
        console.log(`The name of my Dog is ${this.name} and the breed is ${this.breed}`);
    }
}
const myDog = new Dog("Bingo", "Labridor");
console.log(myDog.name, myDog.breed);

myDog.getNamebreed();

const day = new Date
const today = day.getDate()
console.log(today);