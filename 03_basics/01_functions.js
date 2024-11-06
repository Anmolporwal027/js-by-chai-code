
function sayMyName(){ //keyword name and syntax
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();//function name is reference and with () is execution
// function addTwonum(n1 , n2){//parameters
//     console.log(n1+n2);
// }
             
function addTwonum(n1 , n2){//parameters
    return n1+n2;
}

const result = addTwonum(5,8);//arguments
// addTwonum(5,"2") -> 52
// addTwonum(3,"a") -> 3a
// addTwonum(3,null) -> 3
// console.log(result);

function loginUserMessage(username = "sam"){ //default value
    //if(username===undefined){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage());//when we didnt passes value it will show undefined


// ************part-2****************
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(2,4,6,8));

const user = {
    username : "anmol",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}
// handleObject(user);

// direct function ke andar hi object pass kar diya
handleObject({
    username : "anmoll",
    price : 100
})

const myNewArray = [2,4,5,6];


function secondVal(getarray){
    return getarray[1];
}
// console.log(secondVal(myNewArray));
console.log(secondVal([100,200,300]));


