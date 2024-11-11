// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}


// Maps
// values unique rhti hai or jis order ke andr insert kiya usii order me rhti hai

const map = new Map()
map.set('IN',"India")
map.set('UK',"united kingdom")
map.set('pa',"paris")
map.set('IN',"India")

for (const [key, value] of map) {
    
    console.log(key , ":-" , value);
}

// const myobj = {
//     g1 : 'nfs',
//     g2 : 'bgmi'
// }
// for (const [key,value] of myobj) { // *error* obj is not iterable
//     console.log(key, ":-" , value);
// }
