// const clock = document.getElementsByClassName('clock')
const clock = document.querySelector('.clock')


// koi interval dedo or koi method dedo so ye method ko given interval ke baad run karta rhega jb rk program chalta rhega
// setInterval(() => {
    
// }, interval);

setInterval(() => {
    const date = new Date(); 
    clock.innerHTML = date.toLocaleTimeString();
},1000);