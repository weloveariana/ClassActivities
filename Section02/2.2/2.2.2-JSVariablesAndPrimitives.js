// create a variable called "name" that references a string

const name = "Ariana"; // not changeable

// create a variable called "favoriteSong" that references a string

let favSong = "SportsCenter by BossMan DLow"; //changeable

// create a variable called "wage" that references a number

let wage = 18.61;

// create a variable called "age" that references a number

let age = 25;

// create a variable called "onlyChild" that references a boolean

const onlyChild = false;

// create a variable called "satisfied" that references a boolean

let satisfied = true;

// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "Knitting";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"

favSong = "Watch Me Shine";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = false;
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = age + 1;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = wage + 2;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "Hello, my name is " +
    name +
    " . I will be turning " +
    age +
    " , on July 24th." +
    "My favorite song currently is, " +
    favSong +
    " . "
);
