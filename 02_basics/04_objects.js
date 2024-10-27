// Single ton Object --> const tinderuser = new Object()
// Non-Single ton Object 
const tinderuser = {}
tinderuser.id = "123"
tinderuser.isloggedin = true
tinderuser.name = "samay"

// console.log(tinderuser);

// objects inside objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname : {
            firstname : "anmol",
            lastname : "porwal"
        }
    }
}
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.lastname);

// Merging or merging the values of two objects
const target = {1:"a" , 2:"b"}
const source = {3:"a" , 4:"b"}

 //const obj3 = Object.assign({},target, source)//return a modified target object by collecting information from one or more sources
// uper ham {} ko target maan rhe hai we can copy into the main target also
const obj3 = {...target, ...source};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "aaaa@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

console.log(tinderuser);
console.log(users[0].email);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'));



