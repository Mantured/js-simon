/*

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let number = [];

let i = 0;
while (i < 5) {
    const randomInt = (Math.floor(Math.random() * 10));
    console.log(randomInt);
    number.push(randomInt);
    i++;
}

console.log(number);
const timer = setInterval(function () {
    console.warn('timer started');
}, 30000);


let numberUser = parseInt(prompt('inserisci numero'));
console.log(typeof (numberUser));

for (let i = 0; i < 5; i++){
    if (number.includes(numberUser)) {
        console.log('molto bene');
        numberUser = parseInt(prompt('inserisci numero'));
    } else {
        console.log('molto male');
        numberUser = parseInt(prompt('inserisci numero'));
    }
}
