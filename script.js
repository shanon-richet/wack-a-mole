const main= document.querySelector('main')
const clock= document.querySelector('.timer')
const score= document.querySelector('.score')
const holes= document.querySelectorAll('section')
const taupes= document.querySelectorAll('.taupeCachee')
const hole= document.querySelector('section')
const chances= document.querySelectorAll('.chances img')

document.body.addEventListener('keydown', startEvent)
function startEvent() {
    var x= event.keyCode;
    if (x === 13) {
        startGame();
    }
}

function startGame() {
    var scoreValue= 1;
    var chance= 5;
    var myValue= 0;
var interval= setInterval(() => {
    randomIndex= Math.floor(Math.random() * 5)
}, 2000);

//timer
var interval= setInterval(() => {
    clock.value= myValue;
    myValue = myValue + 1;
    clock.innerHTML = myValue;
}, 1000);
var interval= setInterval(() => {
    taupeVisible= taupes[randomIndex]
    taupeVisible.classList.add('taupeVisible') 
    taupeVisible.addEventListener('click', tapMole)
    function tapMole() {
        taupeVisible.classList.remove('taupeVisible')
        score.value= scoreValue;
        scoreValue= scoreValue + 1
    }
    setTimeout(() => {
        if(taupeVisible.classList.contains('taupeVisible')){
           taupeVisible.classList.remove('taupeVisible')
           chances[chance = chance - 1].remove()
           if (chance === 0) {
               alert('You lose !')
               scoreValue= 0;
               myValue= 0;
               chance= 5;
           }
        }
}, 1500);
},2000);

}


