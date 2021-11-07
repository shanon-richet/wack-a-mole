const main= document.querySelector('main')
const clock= document.querySelector('.timer')
const score= document.querySelector('.score')
const holes= document.querySelectorAll('section')
const taupes= document.querySelectorAll('.taupeCachee')
const hole= document.querySelector('section')

document.body.addEventListener('keydown', startEvent)
function startEvent() {
    var x= event.keyCode;
    if (x === 13) {
        startGame();
    }
}
var scoreValue= 0;
var myValue= 0;

function startGame() {
setInterval(() => {
    randomIndex= Math.floor(Math.random() * 5)
}, 2000);
//timer
setInterval(() => {
    clock.value= myValue;
    myValue = myValue + 1;
    clock.innerHTML = myValue;
}, 1000);
setInterval(() => {
    taupeVisible= taupes[randomIndex]
    taupeVisible.classList.add('taupeVisible') 
    taupeVisible.addEventListener('click', tapMole)
    function tapMole() {
        taupes[randomIndex].classList.remove('taupeVisible')
        score.value= scoreValue;
        scoreValue= scoreValue + 1
    }
    setTimeout(() => {
    taupes[randomIndex].classList.remove('taupeVisible') 
}, 1800);
},2000);

}


