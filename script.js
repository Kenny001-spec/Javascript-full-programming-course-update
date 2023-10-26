'use strict';
// console.log('Welcome to variables');

// var variableName = 'Welcome to variables';
// console.log(variableName);

// let variableName = 'Hello!';
// console.log(variableName);

// const variableName = 'welcome to variables';

// const variableName2 = 'welcome to variables';
// console.log(variableName);
// console.log(variableName2);

// const _name = 'John';
// console.log(_name);

// const $name = 'John';
// console.log($name);

// const name_test$ = 'Benard';
// console.log(name_test$)

// String
// const exampleString = 'Hello, world!';
// console.log(exampleString);

// Types of strings
// const singleQuotes = 'Hello!';
// console.log(singleQuotes);

// const isName = 'Jagaban';
// console.log(isName.length);
// console.log(isName[0]);

// const lastLetter = isName[6];
// console.log(lastLetter);


// CHANGE STRING CASE

const mixedCaseString = "Are You Mad Or Something";
const lowerCaseString = mixedCaseString.toLowerCase();
console.log(lowerCaseString);

const upperCaseString = mixedCaseString.toLocaleUpperCase();
console.log(upperCaseString);

// const doubleQuotes = "Hello!!";
// console.log(doubleQuotes);

// const backticks = `Hello!!!`;
// console.log(backticks);

// const name = 'John';
// const backticks  = `Hello, ${name}`;
// console.log(backticks);

// const para = 'John doe';
// const dot = `Hello, ${para}`;
// console.log(dot);


// const backticks = `${2 + 2}`;
// console.log(typeof backticks);

// const singleQuotes = '5 + 5';
// console.log(typeof singleQuotes);

// const doubleQuotes = '20 + 10';
// console.log(typeof doubleQuotes);


// Numbers
// const wholeNumbers = 100;
// const decimalNumbers = 0.333333333;
// console.log(wholeNumbers, decimalNumbers);


// const string = 'How are you?';
const secondNumber = 100;

// const result = string / secondNumber;
// console.log(typeof result);


// Booleans
// const isCool = true;
// if (isCool) {
//     console.log("Hi man, You're cool!");
// } else {
//     console.log('oh, hi...!');
// }


// const age = 20;
// console.log(age > 18);


// Null
// let age = null;
// age = 20;
// console.log(age);


// Undefined
let x;
console.log(x);


// Objects
// const name = 'John';
// const age = 25;

// const person = {
//     name: 'John',
//     age: 25,
//     club: 'Chelsea',

// }

// console.log(person.club);

// Array: To store ordered data collection
// Date:To store the information about the date and time.
// Error:To store the information about an error.



// ARITHMETIC OPERATIONS

// const a = 5;
// const b = 10;
// const result = 0;

// Addition
// const result = b ** a;
// console.log(result);


// COMPARISON OPERATORS AND EQUALITY

// comparison operators = true, false
const a = 10;
const b = 20;
console.log(a == b);


//LOGICAL OPERATORS
// AND && => All oprand are true => true.
console.log(true && false);

// const age = 19;
// const isCool = true;
// isCool and is above the age of 18

// if(isCool && age > 18){
//     console.log('You may enter');
// }else {
//     console.log('You cannot enter');
// }

// console.log((isCool && age > 18));

// console.log('truthy' && 1 && 'test' && 999);

// console.log('truth' && 0 && 'test' && 999);


// OR || => All oprand are false => false.
// console.log(true || false);

// console.log('truth' || 0 || 'test' || 999);

// console.log('' || 0 || null || undefined);



// NOT !
// console.log(!false);

// console.log(!true); // false

// alert(!true); // false
// alert(!0); // true

// Double NOT !!
// alert(!! truthy ); //True
// alert(!! null); // false


// ASSINGMENT OPERATORS
// const numbers = 5;

// let string = 'Hello, world!';
// string += ', I am John!';
// console.log(string);

// console.log(numbers);



// STRICT VS LOOSE EQUALITY
// console.log(5 == "5"); // true

// console.log(20 === "20"); //false

// console.log({} === {}); // false

// console.log([] === []); // false



// LOGIC AND CONTROL FLOW
// If statement 
// const age = 18;
// if (age >= 18) {
//     console.log('You may enter, Welcome!✋');
// } else if (age === 18) {
//     console.log('you just turned 18, Welcome!');
// } else {
//     console.log('Go away!');
// }



// Truthy 
// truth, "Hello", 58, {}, [].
// falsy values  
// false, 0 (zero), "", '', `` (empty string), null, undefined, NaN(not a number).


// if (false) {
//     console.log('IN HERE!!!');
// } else {
//     console.log('NO IN HEERE!!!');
// }


// const dogs = 5;
// if (dogs > 0) {
//     console.log(`You have ${dogs} dogs`);
// }else {
//     console.log('You have no dog!');
// }

 
//  SWITCH STATEMENT
//  const superHero = 'Thor';
// switch(superHero) {
//     case 'Iron Man':
//         console.log('I am Iron Man!')
//         break;
//     case 'Thor':
//         console.log('That is my hammer!')
//         break;
//     case 'Captain America':
//         console.log('Never give up!')
//         break;
//     case 'Black Widows':
//         console.log('One shot, One kill');
//         break;
//     default:
//         console.log('Enter a valid Hero name...⚠');
// }


//ternary operator
// if (condition) {
//     // block of code if true
// } else {
//     // block of code if false
// }

// if (condition) {
//     true
// } else {
//     false
// }

// condition ? true:false

// const age = 18;
// if (age > 18) {
//     console.log('You can drive');
// } else {
//     console.log('You cannot drive yet.');
// }
/** JAVASCRIPT TERNARY OPERATOER */
// age > 18 ? console.log('You can drive') : console.log('You cannot drive yet.');

// const drunkerName = 'Jayeola';
// const age = 27;
// const canDrink = age >= 18 ? 'can drink alcohol' : 'He can only drink water';
// console.log(canDrink)


// const isEmployed = false;
// console.log(isEmployed ? 'He works at Celo' : 'God heal buhari');


/**CODING CHALLENGE */
// const scoreDolphins = (96 + 108 + 89) /3;
// const scoreKaolas = (96 + 108 + 89) / 3;
// console.log(scoreDolphins);
// console.log(scoreKaolas);

// if (scoreDolphins > scoreKaolas) {
//     console.log('Dophins wins the Tropy🏆')
// } else if (scoreKaolas > scoreDolphins) {
//     console.log('Kaolas wins the Tropy🏆');
// } else if (scoreDolphins === scoreKaolas) {
//     console.log('They played a drawn match or no winner🤷‍♂️');
// } 

// LOOP
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

// WHILE LOOP
let i = 0;
while(i < 10) {
    console.log(i++);
}

// FOR 

// for([initialization];[condition];[final-expression]) {

// }

for(let i = 0;  //INITIALIZATION
     i < 10;    //CONDITION
      i++);     //FINAL-EXPRESSION



// FUNCTIONS

// FUNCTION DECLARATION
// function name (parameter){
//     statements
// }

// FUNCTION EXPRESSION
// let name = function(parameter) {
//     statements
// }

// ARROW FUNCTION
// const name = (parameter)=> {
//     statements
// }

const square = (number) => {
    return number * number
}

const result = square(10);
console.log(result);



// INVOKING FUNCTION    
// function sayHi(name) {
//     console.log(`Hi ${name}`);
// }
// sayHi('Gbolahan');

/**********************
 * FUNCTION RETURN
 ****************** */

// function add (a, b){
//     return a + b;
// }

// const sum = add (20, 20) 
//     console.log(sum);


/********************** 
 PARAMETERS VS ARGUMENTS
 **********************/

//  const sayHi = (firstName) => {
//     console.log(`Hi, ${firstName}`);
//  }
//  sayHi('Gbolahan');

//  const logAge = (name, age) => {
//     console.log(`${name} is ${age} years old.`);
//  }
//  logAge('Golahan', 25);



 /*******TRICKY PART**** */

 // SCOPE
 // TYPES OF SCOPE
 // Global Scope

// const isName = "Ademola"
//  const logName = () => {
//     console.log(isName);
//  }
//  logName();


//  const isName2 = "Adam"
//  const logName = () => {
//     console.log(isName2);
//  }

//  const logName2 = () => {
//     console.log(isName2)
//  }
//  logName();


//  let isName = "Ibrahim"
//  const logName3 = () => {
//     console.log(isName);
//     name = "David"
//  }
//  logName3();
//  console.log(name);



//  // Local Scope
// const someFuncton = () => {
//     const name = "Godwin"
//     console.log(name);
// }
// someFuncton();


// const someFuncton1 = () => {
//     // Local Scope #1
//     const name = "Demola"
//     console.log(name);
//     const anotherFunction = () => {
//         // Local Scope #2
//         console.log(name);

//     }
//     anotherFunction();
// }

// someFuncton1();


 // Block Scope (only with let and const)
if (true) {
    const name = "Shola"
    console.log(name);
}



if (true) {
    // this 'if' conditional block doesn't create a scope

    // name is in the global scope because of the 'var' keyword
    var name = 'Adrian';
    // likes is in the local scope because of the 'let' keyword
    let likes = 'Coding';
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript and PHP';

    console.log(name); // logs 'Adrian'
    console.log(likes); // Uncaught ReferenceError: likes is not defined
    console.log(skills); // Uncaught ReferenceError: skills is not defined
}


//*******HOISTING ******* */
// function hoist () {
//     var message;
//     console.log(message);
//      message = "Hoisting is cool!"
// }
 
// // hoist();


// function hoist () {
//     const message = "Hoisting is cool!";
//     console.log(message);
//     return message;
// }
// hoist();



// ******CLOSURE*********/
// const outer = () => {
// 	const outerVar = 'Hello!'

// 	const inner = () => {
// 		const innerVar = 'Hi!'

// 		console.log(innerVar, outerVar);
// 	}

// 	return inner;
// }

// const innerFn = outer(); // closure, because we have access to the variables of the parent scope

// innerFn();


// const init = () => {
//     const hobby = 'Learning JavaScript';  // hobby is a local variable created by init.
//     const displayHobby = () => {    // displayHobby is the inner function, a closure
//         console.log(hobby); // Using Variable declared in the present function.
//     }
//     displayHobby();
// }
// init();


// const init = () => {
//     const hobby = 'Learning JavaScript'; 
  
//     const displayHobby = () => {
//       console.log(hobby); 
//     }
  
//     return displayHobby;
//   }
  
// var myFunc = init();
  
// myFunc();
  


/********************
 Array
 *******************/

 //ARRAY PUSH = Adds a new value to the end of the array.
//  const names = ['Jon', 'Bob', 'David', 'Mark'];
//  names.push('Dean');
//  console.log(names);

 //ARRAY POP = deletes the last element of the array
//  const names = ['Jon', 'Bob', 'David', 'Mark'];
//  names.pop();
//  console.log(names.pop());

//  const removedValue = names.pop();
//  console.log(removedValue);
 

 // ARRAY SHIFT = deletes the first element of an array
// const names = ['Jon', 'Bob', 'David', 'Mark'];
// names.shift();
// console.log(names);

// const removedValues = names.shift();
// console.log(removedValues);


// ARRAY UNSHIFT = Add a new value to the start of an array.
// const names = ['Jon', 'Bob', 'David', 'Mark'];
// names.unshift('Dean');
// console.log(names);

// ARRAY SPLICE = It add or removes values from any position of an array.
// const names = ['Jon', 'Bob', 'David', 'Mark'];
//  names.splice(2, 0, 'Jenny', 'Jhonny');
//  console.log(names);

//  const removedValue = names.splice(0, 1);
//  console.log(removedValue);


// ARRAY SLICE = copies certain parts of an array into a newly  created array.
//  const names = ['Bob', 'David', 'Mark'];
//  const noOneLikeJon = names.splice(0, 1, 2);
//  console.log(noOneLikeJon);


// ARRAY FOR EACH METHODS
// const names = ['Jon', 'Jonny', 'Bob'];
// for(let i = 0; i < names.length; i++); {
//     console.log(i, names);
// }

// names.forEach((name, index) => {
//     console.log(name, index);
// })


// const value = names.forEach((name, index) => {
//     console.log(name, index);
// })


// ARRAY.forEach
// let sum = 0;
// const numbers = [65, 44, 12, 4]
// numbers.forEach((number) => {
//     sum +=number
//     console.log(sum);
// });


// ARRAY.FIND
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const value = numbers.find((number) => number > 5)
// console.log(value);

// const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];
// const state = states.find((states) => states.startsWith('C'));
// console.log(state);

// // ARRAY.INCLUDES
// const pets = ['cat', 'dog', 'llama'];
// console.log(pets.includes('cat'));

// const library = ['Moby Dick', 'Thes', 'The Great Gatsby'];
// if(library.includes('Moby Dick') === true) {
//     console.log('We have that book.!');
// } else {
//     console.log("We can't find the book, sorry!");
// }


// ARRARY.REDUCE
// const groceryList = [29, 12, 45, 35, 87, 110];
// let total = 0;
// groceryList.forEach((price) => {
//     total += price;
//     console.log(total);
// });


// const groceryList = [29, 12, 45, 35, 87, 110];
// const tatal = groceryList.reduce((acc, currentValue) => {
//  return acc + currentValue;
 
// }, 0);
// console.log(tatal);


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, value) => {
//     return acc + value

// },0);
// console.log(sum);

// acc = 0; val = 1 => 0 + 1 === 1;
// acc 1; val = 2; 2 => 1 + 2 === 3;
// acc 3; val = 3; 3 => 3 + 3 ==== 6;
// acc ; val = 4;  4 =>  6 + 4 ==== 10;
// acc; val = 5; 5 => 10 + 5 ==== 15;


/************JAVA SCRIPT ARRAY METHODS ***************/

// Adding an Element From Behind
// const isMarried = false;
// const person = ['Kenny', 'Abubakar', 2022 - 2019, 'Developer', ['Emmaculate', 'Yusuf', 'Bello'], isMarried];
// person.push('Unilorin');
// console.log(person);

// Adding an Element in The Front
// person.unshift('Nigerian');
// console.log(person);

// Removing an Element From Behind
// person.pop();
// person.pop();
// console.log(person);

// Removing an Element from the Front
// person.shift();
// console.log(person);

// Slice Method
// console.log(person.slice(1));
// console.log(person.slice(0, 3));


// console.log(person.slice(3, 4));


// console.log(person.splice(1, 3));

// const colleagues = ['Soliu', 'noheem']
// const myFrnd = ['yusuf', 'Habeeb', 'Bello'];
// const myFamily = ['soliu', 'Daud'];
// const everyBody = myFrnd.concat(myFamily, colleagues);

// console.log(everyBody);
// console.log(everyBody.sort());
// console.log(everyBody.reverse());

// const newName = ('AjayiMakinde');
// console.log(newName.split('').reverse().join(''));


/********* JAVASCRIPT OBJECTS METHOD************** */

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 34,
//     car: {
//         year: 2014,
//         color: 'red',
//     }
// }

// console.log(person);

// Add Variable as Value in An object
// const firstName = 'Johnny';
// const human = {
//     firstName: firstName
// }
// console.log(human);


// const studentArray = ['Daud', 'Bello', 'Department', 2015, 'Mechanical', 1122, 'false',['Tola', 'Yusuf', 'Habeeb']];
// console.log(studentArray);


// const studentObj = {
//     firstName: 'Ajayi',
//     lastName: 'Makinde',
//     yearsOfBirth: 2020,
//     Dept: 'Civil Engnr',
//     MatricNo: 1122,
//     IsGraduate: false,
//     friends: ['Tola', 'Yusuf', 'Habeeb'],
//     yearsInSchool:function(entryYear) {
//         return 2023 - this.yeasOfEntry
//     }

// };

// console.log(studentObj)
// console.log(studentObj.yearsInSchool());

// console.log(studentObj.firstName);


//********OBJECT DESTRUCTURING*********** */
// const personObject = {
//     firstName: 'Jordan',
//     lastName: 'Marcus',
//     car: {
//         color: 'Red',
//         wheels: 4
//     },
//     animals: {
//         dog: {
//             name: 'Fullly',
//             age: 5
//         },

//         cat: {
//             name: 'Kitty',
//             age: 4
//         }
        
//     },
    
// }

// DRY CODE
// console.log(personObject.firstName);
// console.log(personObject.lastName);
// console.log(personObject.car.color);
// console.log(personObject.car.wheels);
// console.log(personObject.animals.dog.name);
// console.log(personObject.animals.dog.age);
// console.log(personObject.animals.cat.name);
// console.log(personObject.animals.cat.age);


// SYNTAX OF OBJECT DESTRUCTURING
// const  {firstName, lastName, car, animals} = personObject;
// console.log(firstName, lastName);
// console.log(car.color);
// console.log(car.wheels);
// console.log(animals.dog.name);
// console.log(animals.dog.age);
// console.log(animals.cat.name);
// console.log(animals.cat.age);

// const {firstName, lastName, car:{color, wheels},animals} = personObject

// const {animals: {dog, cat}} = personObject;
// console.log(dog.name);
// console.log(dog.age);
// console.log(cat.name);
// console.log(cat.age);


// /******** ARRAY dESTRUCTURING********* */

// const introduction = ["Hello", "I", "am", "Jagaban"];
// console.log(introduction);
// const greeting = introduction[0];
// const name = introduction[3];
// console.log(greeting, name);

// Using Array destructuring
// const [] = introduction;

// const [greeting] = introduction;
// console.log((greeting));


// const [greeting,,,name] = introduction;
// console.log(greeting,name);

// Adding Data To Object

// studentObj.school = 'Unilorin';
// studentObj['location'] = 'Nigerian';
// console.log(studentObj);

// RETRIEVING DATA FROM OBJECTS
// dot notation
// const studentFile = {
//     firstName: 'Daniel',
//     lastName: 'Jhon',
// };

// studentFile.dog = {name: 'puppy', age: 20}
// studentFile.age = 20;
// console.log(studentFile.dog.name);


//Brackets notation

// const obj = {
//     cat: 'meow',
//     dog: 'woof'
//   };
//   console.log(obj);

//   const sound = obj['cat'];
//   console.log(sound);

// const Ronaldo = {
//     firstName: 'Cristiano',
//     lastName: 'Ronaldo',
//     yearsOfBirth: 1987,
//     Nationality: 'Porgual',
//     Trophy: {
//         PremierLeagues: 3,
//         ChampionsLeague: 7,
//         FaCup: 2,
//         WorldCup: 0,
//     },
//     competition: ['WorldCup', 'ChampionsLeague', 'Laliga', 'PremierLeagues', 'EnglishFaCup'],
//     team: 'Alnassr',
//     contract: 2023,
//     isActive: true,
//     yearsOfPlay: function () {
//         if(this.isActive){
//             return `${this.firstName} ${this.lastName} is a ${this.Nationality} player who has spent ${2023 - this.contract} years in ${this.team} and he has played ${this.competition.length -1} competition`;
//         } else {
//             return `${this.firstName}${this.lastName}, has retired, we don't have his information`;
//         }
// }   }

// console.log(Ronaldo);
// console.log(Ronaldo.yearsOfPlay());


// ES6 {OBJECT CONSTRUCTION}
// class person {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calAge(){
//         return 2023 - this.birthYear;
//     }
//     set setFullName(realFullName){
//         if(realFullName.includes(' ')) {
//             return(realFullName = this.fullName);
//         } else {
//             console.log(`${realFullName} has initial`);
//         }
//     }
//     get getAge() {
//         return 2023 - this.birthYear;
//     }
//     static hello() {
//         console.log(this);
//         console.log("Hello everyone✋");
//     }
// }

// const Dave = new person('Dave', 1998);
// const Burna = new person('Burna', 1970);
// console.log(Dave);
// console.log(Burna);

// Dave.setFullName = 'Dave grey';
// Burna.setFullName = 'Burna boy';
// person.hello();

// console.log(Dave.fullName);
// console.log(Burna.getAge);


// SPREAD OPERATOR
// const person = {
//     firstName: 'Emma',
//     car: {
//         brands: 'Benz',
//         color: 'Blue',
//         wheels: 4
//     }

// }
// console.log(person);
//const newPerson = { ...person}; // It removes the reference from the original object

//newPerson.firstName = 'Kiameter'; // It change the newly created object
//console.log(newPerson); // changed


//newPerson.car.color = 'red';
//console.log(person); // unChanged 

//*********REST AND SPREAD OPERATOR */

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add (2, 2, 2, 2, 2)); // Changed

// const add = (...args) => {
//     console.log(args);
// }
// console.log(2, 2, 2, 2);

// const add2 = (...args) => {
//     return args.reduce((acc, val) => acc + val)
// }
// console.log(add2(2, 2, 2, 2, 2));


// SPREAD OPERATORS
const numbers2 = [2, 4, 6, 8, 10];
numbers2.push(20)
// console.log(numbers2);
console.log(...numbers2);



// USING JSON STRING METHOD
// const stringifiedPerson = JSON.stringify(person);
// console.log(stringifiedPerson); 

// const newPerson1 = JSON.parse(JSON.stringify(person));

// console.log(newPerson1); 


// newPerson.firstName = 'Kiameter';
// newPerson.car.color = 'red';
// console.log(person)     // Unchange
// console.log(newPerson)  // Change


/************ CREATING CLASS ********* */

const Person = function(firstName, birthYear) {
    

    this.firstName = firstName;
    this.birthYear = birthYear;
    
}

// const janas = new Person('Janas', 1992);
// console.log(janas);

// const jack =  new Person('Jack', 2019);
// const rack =  new Person('Bull', 2012);

// const Person1 = function (firsName, birthYear) {
//     this.firsName = firsName;
//     this.birthYear = birthYear;
// }
// const janas = new Person1('jana', 1991);
// // console.log(janas);

// const maltida = new Person1('maltida', 1993);
// const adam = new Person1('adam', 1993);


// // Protoype
// console.log(Person1.prototype);
// Person1.prototype.calAge = function()  {
//     console.log(2023 - this.birthYear)
// }

// janas.calAge();
// maltida.calAge();




//1. New {} created Object is linked to a prototype
//2. function is called, this{};
//3. Now let created Object to be linkedd to a prototype
//4.  

// const person2 ={
//     name: 'Jordan',
//     age: 35,
//     isEmployed: true,
// }
// console.log(person2);

// class person2 {
//     constructor(name, age, isEmployed) {
//         this.name = name;
//         this.age = age;
//         this.isEmployed = isEmployed;
//     }
// }

// const user = new person2('Jordan', 35, true);
// console.log(user);


// const createPerson = (name, age, isEmployed) => {
//     const userSchema = {
//         name,
//         age,
//         isEmployed,
//     }

//     return userSchema;
// }

// const userSchema = createPerson('Jordan', 35, true);
// console.log(userSchema);


// const createPerson1 = (name, age, isEmployed) => {
//     return{name, age, isEmployed};
// }
// const userSchema1 = createPerson1('Jordan', 35, true);
// console.log(userSchema1);


// const createPerson2 = (name, age, isEmployed) => ({name, age, isEmployed})
// const userSchema2 = createPerson2('Jordan', 35, true);
// console.log(userSchema2);



//********ASYNCHRONOUS JAVA SCRIPT *************** */

// INTERVAL AND TIMER

// Set time interval
// setInterval(() => {
//     console.log('Are You Mad Or Something!')
// }, 1000);

// const myInterval = setInterval(() => {
//     console.log('Are You Mad Or Something!')

// }, 1000);
// clearInterval(myInterval);

// setTimeout(() => {
//     console.log('Time Is Up');
// }, 2000);


/*******FETCH API******* */

// Fetch API requires a decision of....
// Callback, Promises, Thenable, and async/Await.
// API stand for Application Programming Interface.


// const fetchUser = (username, Callback) => {
//     setTimeout(() => {
//         console.log('Now, we have the user.');
//         Callback({username});
//     }, 5000);
 
// } 

// const user = fetchUser('Jordan', (user) => {
//     console.log(`Your name is ${user.username}`);
// });



// Promises
// Promise has 3 state: Pending, fufilled, Rejected.

// const myPromise = new Promise((resolve, reject) =>  {
//     const error = false;

//     if(!error) {
//         resolve("Yes! resolved the promise");
//     } else {
//         reject("No! Failed to resolve the promise");
//     }

// })

// console.log(myPromise);
// myPromise.then(value => {
//     // console.log(value);
//     return value + 1;
// })
// .then((newValue) => {
//  console.log(newValue);
// })
// .catch((err) => {
//     console.log(err);
// })



// const lottery = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() >= 0.7) {
//       resolve('You win...✅')
//     } else {
//       reject(new Error('You lost... try again later 💥'))
//     }
//   }, 2000);
// })

// lottery.then(Response => console.log(Response)).catch(err => console.error(err));


// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved successfully");
//     }, 3000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });



// Pending state of promises
 
// const users = fetch('https://jsonplaceholder.typicode.com/users') 
//     // console.log(users);
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     data.forEach((user) => {
//         console.log(user);
//     })


// Coding Challenge
// const anyName = "Jonathan";
// console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));


// const awaiting = (seconds) => {
//     return new Promise(resolve => setTimeout(resolve, seconds * 1000));
//   }
//   awaiting(2).then(() => {
//     console.log('I waited for too long');
//     return awaiting(1)
  
//   }).then(() => {
//     console.log('1 second move')
//     return awaiting(1)
//   }).then(() => {
//     console.log('2 second move')
//     return awaiting(1)
//   }).then(() => {
//     console.log('3 second move')
//     return awaiting(1)
//   }).then(() => {
//     console.log('4 second move')
//     return awaiting(1)
//   }).then(() => {
//     console.log('5 second move')
//     return awaiting(1)
  
//   })


//   const account = {
//     owner: "alice",
//     movement: [500, 600, 800, 900, 1000],

//     getLastEl () {
//         console.log(this.movement.slice(-1).pop());
//     },
//     getFirstEl (mov) {
//         this.movement.unshift(mov);
//     }
//   }

//   account.getLastEl();
//   account.getFirstEl(500);
//   console.log(account.movement);

//   Write a simple JavaScript program to join all elements of the following array into a string.


// const users = fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(users);
//     const myUser = {
//         userList: [],
//     }

//     const myCoolFunction = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(myCoolFunction);
//         const jsonUserData = await response.json();
    
//         // return jsonUserData;
//         console.log(jsonUserData);
    
//     }
//     myCoolFunction()


//     const anotherFunction = async () => {
//         const data = await myCoolFunction();
//         // console.log(data);
//         myUser.userList = data;
//         // console.log(myUser.userList);
//     }
//     anotherFunction();


//     // Work Flow Function
// const getAllUserEmail = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     })

//     console.log(userEmailArray);
//     // return userEmailArray;


// }
// console.log(getAllUserEmail());

// const PostToWebPage = (data) => {
//     console.log(data);
// }


// const getDadJoke = async () => {
//     const response = await fetch ('https://icanhazdadjoke.com/', {
//         method: 'GET',
//         headers: {
//             Accept: 'Application/json'
//         }
//     });

//     const jsonJokeData = await response.json();
//     console.log(jsonJokeData.joke);

// }

// getDadJoke()



// const bookingArr = [];


// const bookFlight = (flight, numOfPassanger = 1, price = 49 * numOfPassanger) => {
//     const bookings = {
//         flight,
//         numOfPassanger,
//         price
//     }
//     console.log(bookings);
//     return bookingArr.push(bookings);
// }

// bookFlight('BE147', 2, 189);
// bookFlight('AF699');
// bookFlight('BW547', 3);
// bookFlight('AE890', undefined, 900);




// HIGHER ORDER FUNCTION 

// 1.forEach
// 2. map 
// 3. filter
// 4. sort
// 5.reduce 

function double (n) {
    return n * 2
  
}
console.log(double(5))
console.log(double(10))

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For Loop Methods
for(let i = 0; i < companies.length; i++) {
    console.log([i]);
}

// For Each Method  

companies.forEach(function(company) {
    console.log(company.name);
})

// filter Method
// Get 21 And Older
// let canDrink = [];
// for(let i = 0; i <ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink);

// Using Arrow Function
const canDrink = ages.filter(ages => ages >= 21)
console.log(canDrink);

// Filter Retail Companies
const retailCompanies = companies.filter(function(company) {
    if (company.category === "Retail") {
        return true;
    } 
})
console.log(retailCompanies);


// To Get 80s Company
const eightiesCompanies = companies.filter(company => (company.start >=1980 && company.start < 1990))
console.log(eightiesCompanies);

// Get Company that lasted for 10 years or more
const compLastedTenYears = companies.filter(company =>(company.end - company.start >= 10));
console.log(compLastedTenYears);

// Map Methods
// Create Array Of Company Name
const companyName = companies.map(function(company) {
    return company.name;
})
console.log(companyName);
 
// To get the company Name, start, end
const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
})
console.log(testMap);


const ageMap = ages
.map(ages =>Math.sqrt(ages))
.map(ages => ages * 2)
console.log(ageMap);


// Sort Methods

// Sort Companies by Start Years
// const sortedCompanies = companies.sort (function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1
//     }
// })
// console.log(sortedCompanies);

// Using Arrow function
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// Sort Age
const shortAge = ages.sort ((a, b) => a - b)
console.log(shortAge);

// reduce Methods
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age) {
//     return total + age
// }, 0)
// console.log(ageSum)

// To Use Arriw Function
const ageSum = ages.reduce ((total, age) => total + age, 0)
console.log(ageSum)

// Get total years for all companies
const totalYears = companies.reduce(function(total, company) {
   return total + (company.end - company.start);
 }, 0);

console.log(totalYears);

// To use Arrow Function
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);


const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);
console.log(combined);



  









