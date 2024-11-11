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