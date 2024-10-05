let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);//to convert string to number
// console.log(typeof valueInNumber);
console.log(valueInNumber);//Nan(not a number) if numbers and alphabet both are on same variable

// "33" => 33
// "33abs" => Nan
// true => 1; false => 0

let isLoggedin = "hello"
let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin); 

// 0-> false and 1-> true
// "" => false
// "hello" => true

let someNumber = false
let character = String(someNumber);
console.log(character);

// 33 => "33" //string bann jata hai number
// false => "false"
// 5.5 => "5.5"
