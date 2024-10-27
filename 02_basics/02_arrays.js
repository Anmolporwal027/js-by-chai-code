const marvel = ['thor' , 'ironmma' , 'spiderman']
const dc = ['superman' , 'flash' , 'batman']

// marvel.push(dc);
// console.log(marvel);

// const allheros = marvel.concat(dc)//concates the array properly
// console.log(allheros);

const allnewHeors = [...marvel,...dc];//it spreads the two array into an single array by spread array
// console.log(allnewHeors);

const arr1 = [1 ,2 ,3 ,[4, 5, 6],  7, [6 ,7, [4 , 5]]]
const arr2 = arr1.flat(Infinity);
console.log(arr2);





console.log(Array.isArray('Anmol'))//check that given is array or not
console.log(Array.from('Anmol'))//changes the string in an array form
console.log(Array.from({name:'anmol'}))//interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//can create array of diff values using of 