/*

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let number = [];
let numberRight = [];
let numberWrong = [];

let i = 0;
while (i < 5) {
    const randomInt = (Math.floor(Math.random() * 10 + 1));
    console.log(randomInt);
    number.push(randomInt);
    i++;
}

console.log(number);
const timer = setInterval(function () {
    for (let i = 0; i < 5; i++){
        let numberUser = parseInt(prompt('inserisci numero'));
        if (number.includes(numberUser)) {
            console.log('molto bene');
            numberUser;
            numberRight.push(numberUser);
        } else {
            console.log('molto male');
            numberUser;
            numberWrong.push(numberUser);
        }
    }

    console.log(`hai sbagliato ad inseire ${numberWrong.length} numeri, ovvero: ${numberWrong}`);
    console.log(`hai inserito correttamente ${numberRight.length} numeri, ovvero: ${numberRight}`);
    console.warn('timer end');
}, 30000);

clearInterval(timer);




