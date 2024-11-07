const user = {
    username : "Anmol",
    price : 999,

    welcomeMessage : function(){
        console.log(`${username} , welcome to website`);   
        // console.log(this);
        
    }

}
//  user.welcomeMessage();//yha current context anmol tha
//  user.username = "Hitesh" //context ko change kar diya
//  user.welcomeMessage()//yha current context ab hitesh hai

// console.log(this);

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai();

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
    
}
// chai()

// const add2 = (num1,num2) => {
//    return num1 + num2 
// }

// IMPLICIT RETURN 
const add2 = (num1,num2) =>  num1 + num2 
// const add2 = (num1,num2) =>  (num1 + num2) 
// const add2 = (num1,num2) =>  ({username: "Hitesh"})
 
console.log(add2(3,4))
