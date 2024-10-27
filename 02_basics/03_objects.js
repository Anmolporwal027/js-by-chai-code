// singleton

// Object.create

// object literals

const mySym = Symbol("Key1")//symbol liya and usko defined kiya

const JsUser ={
    name:"Anmol",
    "Full name" : "Yess",
    [mySym] : "mykey1",//have to acts as a keys
    age:18,
    location:"Indore",
    email: "Anmol@123.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday" , "Wednesday" , "Saturday"]
}

// Two ways to access objects content
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "ello@ddgmail.com"//can change the values of objects
// console.log(JsUser.email);
// Object.freeze(JsUser) //cannot change the values of the objects after using freeze
JsUser.email = "ello@ddgmail.com"
// console.log(JsUser);

// functions in objects
JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



