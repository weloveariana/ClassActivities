// create a constant variable (const)

const myName = "Ariana";

// create a variable that can be reassigned (let)

let age = 25;

// create three variables and assign them values of different data types (=)

let job = "USPS"; // string
let children = 2; //number
let pretty = false; //boolean

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal

console.log(typeof job);
console.log(typeof age);
console.log(typeof pretty);

// change the value referenced by a variable (dynamic typing)

pretty = true;
// print the type of the variable you just changed (typeof)

console.log(typeof pretty);

// create variables and give them values to complete the sentences that will print  below.

// console.log("Hello, my name is " + {add a name} + ", and I am learning " + {add a language} + ". I have been practicing for only " +  {add a number} + " weeks, so my status as a master is: " + {true or false} + ".");

// Which variables need to be created?

let name = "Ariana";
let language = "JavaScript";
let number = 3;
let skill = false;

// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " +
    myName +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    number +
    " weeks, so my status as a master is: " +
    skill +
    "."
);
