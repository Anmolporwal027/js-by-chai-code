// The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order. 
// callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

// A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array forEach() was called upon.
const coding = ["js" , "ruby" , "java" , "python" , " cpp"]


// coding.forEach( function (item){
//     console.log(item);
// } )


// coding.forEach((item) => {
//     console.log(item);
// }) 

function printme(item){
    console.log(item);
}
// coding.forEach(printme) //only reference dena hai execute vo khud kar dega
// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);
    
// })

const myCoding = [
    {
        langugeName : "javascript",
        Filenaem : "js"
    },
    {
        langugeName : "java",
        Filenaem : "j"
    },
    {
        langugeName : "python",
        Filenaem : "py"
    }
]

myCoding.forEach((val) => {
    console.log(val.langugeName);

})

const myArray = [1,2,3,4,5]
myArray.forEach((val)=>{
    console.log(val);
})