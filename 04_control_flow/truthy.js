const userEmail = []

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("dont have user email");   
// }

// falsey value

// false , 0 , -0 , BigInt 0n, "", null , undefined , NaN

// Truthy Value

// "0" , 'false' , " " , [] , {} , function(){}

const emptyobj = {}
// if(Object.keys(emptyobj).length===0){
//     console.log("obj is empty");   
// }


// Nullish Coalescing Operator ( ?? ): null undefined
// saftey chk karta hai null or undefined ki jgh dusri value rkh deta hai

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);

// Ternary Operator
// condition?true:false

(5>6)?console.log("true") : console.log("false");


