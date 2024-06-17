let container = document.querySelector('.container');

// creo i 5 numeri casuali
const arrNumeri = [];
while(arrNumeri.length < 5){
    let num = Math.floor(Math.random() * 101)
    if(!arrNumeri.includes(num)){
        arrNumeri.push(num)
        container.innerHTML += `<span class="number">${num}</span>`
        
    }
}


