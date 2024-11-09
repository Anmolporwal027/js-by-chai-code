// for

for(let i = 0; i<=5; i++){
    if( i == 5){
        // console.log("5 is the best number");
        
    }
    // console.log(i);
    
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for(let i = 0; i <= 10; i++){
    // console.log(`outer loop value ${i}`);
    for(let j = 0; j<=10; j++){
        // console.log(`inner loop value ${j}`);   
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
}
let myarray = ['flash','batman','superman']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}
 

//

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`vallue of i is ${index}`);
// }

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`vallue of i is ${index}`);
}