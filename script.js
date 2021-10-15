const main= document.querySelector('main')

var myValue= 0;


setInterval(() => {
    main.value= myValue;
    myValue = myValue + 1;
    main.innerHTML = myValue;
}, 1000);
