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
    var taupe= document.createElement('p')
    taupe.setAttribute('class', 'taupe_cachée')
    hole.appendChild(taupe)
}
const holes= document.querySelectorAll('.hole')
const taupes= document.querySelectorAll('.taupe_cachée')


setTimeout(interval, 2000)
var interval = setInterval(() => {
    taupes[Math.floor(Math.random()*5)].setAttribute('class', 'taupe_visible')  
    clearInterval(interval)
},1000);

var taupeVisible= document.querySelector('.taupe_visible')
taupeVisible.onclick= () => {
    alert('e')
}


