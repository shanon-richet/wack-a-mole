const main= document.querySelector('main')
const clock= document.querySelector('input')

var myValue= 0;

setInterval(() => {
    clock.value= myValue;
    myValue = myValue + 1;
    clock.innerHTML = myValue;
}, 1000);

for (let i= 0; i< 6; i++){
    var hole= document.createElement('p')
    hole.setAttribute('class', 'hole')
    main.appendChild(hole)
    var taupeCache= document.createElement('p')
    taupeCache.setAttribute('class', 'taupe_cachée')
    hole.appendChild(taupeCache)
}
const holes= document.querySelectorAll('.hole')
const taupes= document.querySelectorAll('.taupe_cachée')


setTimeout(interval, 3000)
var interval = setInterval(() => {
    var taupeVisible= document.querySelector('.taupe_visible')
    taupes[Math.floor(Math.random()*5)].setAttribute('class', 'taupe_visible') 
    taupeVisible.removeAttribute('class', 'taupe_visible')
},1000);






