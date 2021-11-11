"use strict";
const myFunction = (cb) => {
    cb('done');
    // cb(3); // -> error
};
myFunction(result => console.log(result));
// --------------------------------------------------
const birthdayGreeter = (name, age) => {
    return `Happy birthday ${name} you are now ${age} years old!`;
};
const birthdayHero = 'Jane';
const age = 22;
console.log(birthdayGreeter(birthdayHero, age));
