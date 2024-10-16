const name = "Anmol"
const count = 50

// console.log(name + count + " value");

// string interpolation
console.log(`Hello my name is ${name}  and my repo count is ${count}`);

const gameName = new String('hitesh-cc-com')
// console.log(gameName[2]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(name.length);
console.log(gameName.toUpperCase());//it will not change permanently
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,4)//last value include nhi hoti hai
console.log(newstring);

const anoterString = gameName.slice(-6,4)
console.log(anoterString);

const newStringOne = "     Anmol     "
console.log(newStringOne);
console.log(newStringOne.trim());//works on whitespaces

const url = "hellps://anmol.ocm/anmol%33porwal"
console.log(url.replace('%33' , '--'))

const hello = url.includes('anmol')//direct bhi print krva skte hai
console.log(hello);

console.log(gameName.split('c'))

