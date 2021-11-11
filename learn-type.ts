type CallsFunction = (callback:(result:string) => any) => void;

const myFunction : CallsFunction = (cb) => {
    cb('done');
    // cb(3); // -> error
}

myFunction( result => console.log(result) );


// --------------------------------------------------


const birthdayGreeter = (name: string, age: number) => {
    return `Happy birthday ${name} you are now ${age} years old!`;
}

const birthdayHero = 'Jane'
const age = 22

console.log(birthdayGreeter(birthdayHero, age));



// --------------------------------------------------

let miString = 'Hello world';
miString = 'Hello TypeScript';

// let literal:"hello" = 'Hello';   // same as a constant declaration, is type "hello" (string) and value "Hello"
// constantString = 'Hello world'; // -> error
// literal = 'Hello world';

type Operator = 'sumar' | 'restar' | 'multiplicar' | 'dividir';
type otro = string | Array<string>;

const miOperator: Operator = 'multiplicar';