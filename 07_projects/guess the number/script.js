let randomnum = parseInt(Math.random() * 100 + 1)

const userinput = document.querySelector("#guessfield")
const submit = document.querySelector("#subt");
const prevguess = document.querySelector(".guesses")
const remainguess = document.querySelector(".remainguess")
const loworHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

// let prevGuesses  = []
let numGuesses = 1
const p = document.createElement('p');
 
let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value)
        validguess(guess);
    })
}
function validguess(guess){
    if(isNaN(guess)){
        alert('Please give a valid number')
    }else if(guess < 1 ){
        alert('Please give a number Greater than 1')
    }else if(guess > 100 ){
        alert('Please give a number Less than 100')
    }else{
        if(numGuesses === 11){
            displayguess(guess);
            displaymessages(`Game over , Random number is ${randomnum}`)
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}
function checkguess(guess){
    if(guess === randomnum){
        displaymessages('You Guessed it Correct');
        endgame();
    }else if(guess > randomnum){
        displaymessages('Guessed Number is TOO high !')
    }else if(guess < randomnum){
        displaymessages('Guessed Number is TOO low !')
    }
}
function displayguess(guess){
    userinput.value = '';
    prevguess.innerHTML += `${guess} , `
    numGuesses++;
    const remaining = 11 - numGuesses
    remainguess.innerHTML = `${remaining >= 0? remaining: 0}`
}
function displaymessages(message){
    loworHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userinput.innerHTML = '';
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Tap to start a New Game</h2>`
    p.style.color = "#630928"
    startOver.appendChild(p);
    playgame = false;
    
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomnum = parseInt(Math.random() * 100 + 1)
        // prevGuesses = []
        numGuesses = 1
        prevguess.innerHTML = ''
        remainguess.innerHTML = `${11-numGuesses}`
        userinput.removeAttribute('disabled')
        playgame = true  
        startOver.removeChild(p);
        loworHi.innerHTML = ''
    })
}