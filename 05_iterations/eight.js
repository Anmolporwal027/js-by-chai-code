MyNums = [1 ,2 ,3 ,4 ]
let initialval = 1 // initial value is useed to initialize the prv val 

// using normal function
// const mult = MyNums.reduce(function(prevval,currval){
//     console.log(`acc ${prevval} and currval ${currval}`);
//     return prevval * currval;
// },initialval)

// Using arrow function 
const mult = MyNums.reduce((prevval , currentval) => prevval * currentval,initialval)
console.log(mult);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "web dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 7000
    }
]

const total = shoppingCart.reduce((prev , item)=> item.price + prev ,0)
console.log(total);
