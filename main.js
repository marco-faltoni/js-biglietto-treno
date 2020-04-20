// chiedo ed estraggo all'utente il numero dei chilometri
var chilometri = prompt('Quanti chilometri vuoi percorrere?');
console.log(chilometri);

// chiedo ed estraggo all'utente l'eta
var eta = prompt('Qual è la tua età?');
console.log(eta);



// calcolo il prezzo totale del biglietto
var prezzo_totale = (chilometri * 0.21);
console.log(prezzo_totale);

var prezzo_over = '-';

var prezzo_minorenni = '-';

// imposto sconto del 20% per minorenni e 40% per over 65, e visualizzo risultato
// procedimento A
if(eta >= 18 && eta <= 65) {
    // solo se hai più di 18 anni e meno di 65 anni prezzo pieno
    prezzo_totale = (chilometri * 0.21);
    console.log(prezzo_totale);
} else if(eta < 18) {
    // la prima if è false
    // l'età è < 18
    prezzo_minorenni = ((prezzo_totale - (prezzo_totale * 20) / 100));
    console.log(prezzo_minorenni);
} else {
    // la prima if è falsa ed è falsificata dalla seconda condizione
    // caso in cui l'età è > 65
    prezzo_over = ((prezzo_totale - (prezzo_totale * 40) / 100));
    console.log(prezzo_over);
}

// // procedimento B
// if(eta < 18) {
//     // l'età inserita è minorenne
//     var prezzo_minorenni = ((prezzo_totale - (prezzo_totale * 20) / 100))  + '€';
//     console.log(prezzo_minorenni);
// } else if(eta >= 90) {
//     // l'età inserita non è < 18
//     // l'età inserita é > 65 = anziano
//     var prezzo_over = ((prezzo_totale - (prezzo_totale * 40) / 100))  + '€';
//     console.log(prezzo_over);
// } else {
//     // l'età inserita non è <18 né > 65 => età prezzo pieno
//     var prezzo_totale = (chilometri * 0.21) + '€';
//     console.log(prezzo_totale);
// }

document.getElementById('prezzo').innerHTML = prezzo_totale ;
document.getElementById('prezzo_minorenni').innerHTML = prezzo_minorenni;
document.getElementById('prezzo_over').innerHTML = prezzo_over;
