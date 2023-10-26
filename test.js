// // STRING

// // const singleQuotes = 'Jagaban'; // they are both the saame
// // const doubleString = "Dantata";


// // const myName = 'Daniel';
// // const backticks = ` Hello, How Are You ${myName}.`;
// // console.log(backticks);


// const myName = 'Daniel';

// // Length property
// // we have to use a dot notation
// console.log(myName.length);    // it returns the length of the character inside the string


// // string method
// // It also use dot notation
// console.log(myName.charAt(0)); // it returs the character at the specified index in a string

// console.log(myName.indexOf('el')); // it returns the position of the first occurence of specified character

// console.log(myName.slice(2, 5)); //

// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())

// console.log(myName.includes('ani')); // it returns booleans

// console.log('God is good to everyone'.split(" ")); // it splits a string into an array.


// // JavaScript Number and Number Methods
// // An integer is a whole number
// const myNumber = 100;
// console.log(myNumber)

// // A number with a decimal point is a float
// const myFloat = 100.2288
// console.log(myFloat)

// console.log(Number === myFloat); // False: Because the data type is different.


// const myString = "99";
// console.log(Number(myString) + 3); // That's adding Number to a string


// // Number Methods
// // The Number.isInteger method parses and argument and return a floating point number
// console.log(Number.isInteger(myFloat)); // False


// // toFixed methods: it formats a number according to how many decimal point are provide as the parameter
// console.log(Number.parseFloat(myFloat).toFixed(2))

// // The number.parseInt method parses a string argument and returns an integer
// console.log(Number.parseInt(myFloat))

// // To string  method returns a string representing the numbers.
// console.log(typeof myFloat.toString())
// console.log(typeof Number.parseFloat(myFloat));


// // NaN is an acronym for Not a number
// console.log(Number("Micheal"));


// // Math Method and Prperties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI)); // It returns the decimal point
// console.log(Math.round(Math.PI)); // It returns the value of Number round the nearest integer
// console.log(Math.ceil(Math.PI)); // It round a Number up
// console.log(Math.floor(Math.PI)); // It round a Number Down


// console.log(Math.pow(2, 10)); // It takes 2 Argument
// console.log(Math.random(Math.PI));

// // From 1 to 10
// console.log()






//Generate a Random Number

// const tryMe = () => {
//     const randomNum = Math.trunc(Math.random() * 10) + 1;
//     console.log(randomNum);
//     const askMe = +prompt("input a Number between 1 and 10");

//     if (askMe === randomNum) {
//         alert('Good Job. Oil dey your head🎉');
//     } else {
//         alert('Number not Match! try again💥');
//     }

// }
// tryMe();






// CallBack
// function getData (CallBack) {
//     setTimeout(() => {
//         const data = 'some data';
//         CallBack(data);
//     }, 5000);
    
// }
// getData((data) => {
//     console.log(data);
// })


// // Promise
// function getData1 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data1 = 'Some data';
//             resolve(data1);
            
//         }, 5000);
//     })
// }
// getData1()
// .then((data1) => {
// console.log(data1);
// })
// .catch((err) => {
//     console.error(err);
// })

// // Async/ Await
// async function  getData2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const data2 = 'some data';
//             resolve  (data2);
//         }, 5000);
//     })
// }
// async function main () {
//     const data2 = await getData2();
//     console.log(data2);
// }
// main();


// const gamePlay = confirm("Shall we play rock, or scissors");
// if (gamePlay) {

// }else ("ok, maybe next time.")


// CODING CHALLENGE
/**
 * 1. Use a constructor function to implement a Car. A 
 * Car has make and a speed peoperty. The speed 
 * property is the current speed of the car in km/h;
 * 
 * 2. Implement an 'accelerate' method that will increase
 *  the Car's speed by 10, and log the new speed to the 
 * console:
 * 
 * 3. Implement a 'brake' method that will decrease the 
 * car's speed by 5, and log the new speed to the console;
 * 
 * 4. Create 2 car objects and experiment with calling 
 * 'acceleration' and 'brake' multiple times on each of 
 * them.
 * 
 * DATA CAR 1: 'VOLVO' going at 120km/h
 * DATA CAR 2: 'Benz' going at 95km/h
 * 
 * GOODLUCK😋
 * */


// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// const Volvo = new Car('volvo', 120);
// const Benz = new Car ('Benz', 95);

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make}is going at ${this.speed} km/hr ` ) ;
// }


// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/hr ` ) ;
// }
// Volvo.accelerate();
// Volvo.accelerate();
// Volvo.brake();
// Volvo.accelerate();



