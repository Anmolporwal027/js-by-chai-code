// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2006,0,27);
// console.log(myCreatedDate.toDateString());

let mynewDate = new Date(2006,0,27, 5, 3, 9);
// console.log(mynewDate.toLocaleString());

// let mynewDate2 = new Date("2023-01-14");
let mynewDate2 = new Date("01-14-2006");
// console.log(mynewDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default' , {
    weekday: "long"

})


