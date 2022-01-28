const main = document.querySelector('main')
const clock = document.querySelector('.timer')
const score = document.querySelector('.score')
const holes = document.querySelectorAll('section')
const taupes = document.querySelectorAll('.hiddenMole')
const hole = document.querySelector('section')
const chances = document.querySelectorAll('.chances img')
const storedScores = localStorage.getItem('score')
if (storedScores == ! null) {
    JSON.parse(storedScores)
    for (const elem of storedScores) {
        console.log(elem)
        const scoreHistory = document.createElement('p')
        scoreHistory.innerHTML = elem.score
        main.appendChild(scoreHistory)
    }
}

document.body.addEventListener('keydown', startEvent)
function startEvent() {
    var x = event.keyCode;
    if (x === 13) {
        startGame();
    }
}

function startGame() {
    var scoreValue = 1;
    var chance = 3;
    var myValue = 0;
    setInterval(() => {
        randomIndex = Math.floor(Math.random() * 5)
    }, 2000);
    //timer
    setInterval(() => {
        clock.value = myValue;
        myValue = myValue + 1;
        clock.innerHTML = myValue;
    }, 1000);
    setInterval(() => {
        visibleMole = taupes[randomIndex]
        visibleMole.classList.add('visibleMole')
        visibleMole.addEventListener('click', tapMole)
        function tapMole() {
            visibleMole.classList.remove('visibleMole')
            score.value = scoreValue;
            scoreValue = scoreValue + 1
        }
        setTimeout(() => {
            if (visibleMole.classList.contains('visibleMole')) {
                visibleMole.classList.remove('visibleMole')
                chances[chance = chance - 1].remove()
                if (chance === 0) {
                    localStorage.setItem('score', `"score": "${JSON.stringify(scoreValue)}"`)
                    alert('You lose !')
                    scoreValue = 0;
                    myValue = 0;
                    chance = 3;
                    document.location.reload()

                }
            }
        }, 1500);
    }, 2000);

}
