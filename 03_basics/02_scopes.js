// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Anmol"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        // console.log(username+website);     
    }
    // console.log(website);
    
}
// console.log(username);



// ************** Interesting *******************


console.log(add1(7));
function add1(num){
    return num+1;
}

// yha declare karne ke sath ek variable me hold bhi kar diya hai
add2(7);
const add2 = function(num){//we can also says them expression
    return num + 2;
}
