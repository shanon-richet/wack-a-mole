const main = document.querySelector('main')
const clock = document.querySelector('.timer')
const score = document.querySelector('.score')
const holes = document.querySelectorAll('.hole-container')
const taupes = document.querySelectorAll('#hiddenMole')
const hole = document.querySelector('section')
const chances = document.querySelectorAll('.chances img')

document.body.addEventListener('keydown', startEvent)
function startEvent() {
    var x = event.keyCode;
    if (x === 13) {
        startGame();
    }
}

function tapMole() {
    alert('r')
}
function startGame() {
    var scoreValue = 1
    var chance = 3
    var myValue = 0

    setInterval(() => {
        const randomTaupe = taupes[Math.floor(Math.random() * 5)]
        randomTaupe.classList.add('visibleMole')
        randomTaupe.onclick= function tapMole() {
            score.value = scoreValue;
            scoreValue = scoreValue + 1
            randomTaupe.classList.remove('visibleMole')
        }
        setTimeout(() => {
            if (randomTaupe.classList.contains('visibleMole')) {
                    randomTaupe.classList.remove('visibleMole')
                    chances[chance = chance - 1].remove()
                }
            if (chance === 0) {
                alert('You lose !')
                scoreValue = 0
                myValue = 3
                document.location.reload()
            }  

        }, 1900)
    }, 2000)

    setInterval(() => {
        clock.value = myValue
        myValue = myValue + 1
        clock.innerHTML = myValue
    }, 1000)
}

