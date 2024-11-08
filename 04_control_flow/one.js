// if statement
const isUserloogedIn = true

// if(2 !== "2"){
    //     console.log("Executed successfully");
    
    // }
    
const temperature = 41
// if( temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("Greater than 50");
    
// }


// < , > , <= , >= , == , != , !==
// === -> it also checks the data type is same or not

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
    
// }

// console.log(`User power ${power}`);


const balance = 1000

// if(balance > 500) console.log("test");//implicit scope means maan liya hai ki sope hai

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const UserloogedIn = true
const debitCard = true
const loogedinfromGoogle = false
const loogedinfromEmail = true

if(UserloogedIn && debitCard){
    console.log("Allow to buy Course");
}
if(loogedinfromEmail || loogedinfromGoogle){
    console.log("User Logged IN");
}
