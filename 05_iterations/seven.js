const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nums = MyNums.map( (n) => n+10)


// Chaining -> 2 - 3 Methods ek sath use kar sakte hai apn
// jab bhi chaining hogi uska result next method me update hokar pass hoga
const newNums = MyNums
                .map((n)=> n * 10)
                .map((n) => n + 1)
                .filter((n) => n >= 50)
console.log(newNums);
