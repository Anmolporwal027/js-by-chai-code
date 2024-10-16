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
myFunction();



// +++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let MyName = "Anmol Dhanotiya"
let AnotherName = MyName //copy is created and putted in New variable
AnotherName = "Changed Name" //this change didn't affect original value
console.log(MyName);
console.log(AnotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@cbc"
}

let userTwo = userOne

userTwo.email = "Anmol@goggle.com" // original email is chaged 

console.log(userOne.email);
console.log(userTwo.email);



