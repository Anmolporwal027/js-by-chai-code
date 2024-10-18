// arrys
// we can also put other datatypes in an array
const myArr = [1,2,3,4,5,true,"hitesh"]
const arr2 = ['hero1' , 'hero2']

const arr3 = new Array(1,2,3,4,5)
// console.log(myArr[5]);

// Array methods

// myArr.push(77);
// console.log(myArr);
// myArr.pop();

// myArr.unshift(5) //puts at the start of the array
// myArr.shift()//removers element at the start of the array
// console.log(myArr);

// console.log(myArr.includes(99)); //we can ask the question that array have that element or not
// console.log(myArr.indexOf(3));

const newArr = myArr.join()//converts the array elements into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice
// slice last range cover nhi krta hai or isse original array pr koi affect nhi padta hai
console.log(myArr);
const arr4 = myArr.slice(1,3)
console.log(arr4);
console.log(myArr);

// splice last range cover krta hai and original array se element remove kr deta hai
const arr5 = myArr.splice(1,3)
console.log(arr5);
console.log(myArr);







