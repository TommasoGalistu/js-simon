let container = document.querySelector('.container');
let testoIniziale = document.getElementById('testoUtente');
let contInput = document.querySelector('.contInput');
let button = document.getElementById('buttonGioco');
let selectValue = document.querySelectorAll('select')


// creo i 5 numeri casuali
const arrNumeri = [];
while (arrNumeri.length < 5) {
    let num = Math.floor(Math.random() * 101)
    if (!arrNumeri.includes(num)) {
        arrNumeri.push(num)
        container.innerHTML += `<span class="number">${num}</span>`

    }
};

console.log(arrNumeri)
// caselle numeri in array
let caselleNumeri = document.querySelectorAll('.number');

// testo di default a inizio gioco
container.childNodes[1].textContent = `Memorizza la posizione dei numeri in 30 secondi e rimettili nello stesso ordine`;

// setto la variabile secondi e creo il countdown
let secondi = 1;
let countdown = setInterval(function () {
    // quando i secondi arrivano a 0 parte il gioco
    if (secondi === 0) {
        clearInterval(countdown);
        container.childNodes[1].textContent = 'Tempo scaduto! Ora inserisci i numeri.';
        for (let i = 0; i < caselleNumeri.length; i++) {
            caselleNumeri[i].textContent = ''
        }
        contInput.classList.remove('invisible')
        inserisciRisposte()
    } else {
        secondi--;
        container.childNodes[1].textContent = `Memorizza la posizione dei numeri in ${secondi} secondi e rimettili nello stesso ordine`;

    }
}, 1000);

// aggiunta di risposte casuali nei select
function inserisciRisposte() {
    // creo un array per mettere le risposte in disordine
    let array = [0, 1, 2, 3, 4];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // metto le risposte disordinate dentro ai select
    for (let i = 0, j = 1, k = 0; i < selectValue.length && j < selectValue[i].length; j++, k++) {
        
        if(j === selectValue[0].length -1){
            selectValue[i][j].textContent = arrNumeri[array[k]]
            selectValue[i][j].value = arrNumeri[array[k]]
            i++;
            j = 0;
            k = -1;
        }else{
            selectValue[i][j].textContent = arrNumeri[array[k]]
            selectValue[i][j].value = arrNumeri[array[k]]
        }
        
    }
}


let punteggio = 0;
// do il risultato al giocatore
button.addEventListener('click', () => {
    for (let i = 0; i < selectValue.length; i++) {
        if(arrNumeri.includes(parseInt(selectValue[i].value))){
            punteggio++
            console.log(punteggio)
        }
    }
    
});

