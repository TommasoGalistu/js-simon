let container = document.querySelector('.container');
let testoIniziale = document.getElementById('testoUtente');




// creo i 5 numeri casuali
const arrNumeri = [];
while(arrNumeri.length < 5){
    let num = Math.floor(Math.random() * 101)
    if(!arrNumeri.includes(num)){
        arrNumeri.push(num)
        container.innerHTML += `<span class="number">${num}</span>`
        
    }
};



container.childNodes[1].textContent = `Memorizza la posizione dei numeri in 30 secondi e rimettili nello stesso ordine`;
let secondi = 10;
let countdown = setInterval(function(){
    if(secondi === 0){
        clearInterval(countdown); 
        container.childNodes[1].textContent = 'Tempo scaduto! Ora inserisci i numeri.';
    } else {
        secondi--;
        container.childNodes[1].textContent = `Memorizza la posizione dei numeri in ${secondi} secondi e rimettili nello stesso ordine`;
        
    }
}, 1000);


