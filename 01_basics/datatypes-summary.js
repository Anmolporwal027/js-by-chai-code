// Primitive : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34335456234383746284n
// Non Primitive ( reference type ) :
// Arrays , Strings , Objects

const heors = ["shaktiman","naagraj","doga"]
let myobj = {
    name: "anmol",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outSideTemp);
console.log(typeof heors);


