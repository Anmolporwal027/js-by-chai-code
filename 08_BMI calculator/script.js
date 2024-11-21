const form = document.querySelector('form');


form.addEventListener('submit' , function(e){

    e.preventDefault();
    
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(height === " " || height <= 0 || isNaN(height) && weight === " " || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please give valid height and weight"
    }
    else if(height === " " || height <= 0 || isNaN(height)){
        result.innerHTML = " Please give valid height"
    }
    else if(weight === " " || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give valid weight`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18){
            result.innerHTML = `<span>${bmi} <br> Underweight </span>`
            }
            else if(bmi >= 18 && bmi <= 26.6){
                result.innerHTML = `<span>${bmi}<br>Normal Range</span>`
            }
            else{
                result.innerHTML = `<span>${bmi}<br>Overweight</span>`
            }
    }
})

















// const form = document.querySelector('form');
// // const height = document.querySelector('#height').value

// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#results')

//     if(height === '' || height < 0 || isNaN(height)){
//         result.innerHTML = `Please Enter valid height`;
//         // results.Style.color = 'white'
//     }
//     else if(weight === '' || weight < 0 || isNaN(weight)){
//         result.innerHTML = `Please Enter valid weight`;
//     }
//     else{
//         const bmi = (weight / ((height*height)/10000)).toFixed(2);
//         if(bmi < 18){
//         result.innerHTML = `<span>${bmi} <br> Underweight </span>`
//         }
//         else if(bmi >= 18 && bmi <= 26.6){
//             result.innerHTML = `<span>${bmi}<br>Normal Range</span>`
//         }
//         else{
//             result.innerHTML = `<span>${bmi}<br>Overweight</span>`
//         }
//     }
// });