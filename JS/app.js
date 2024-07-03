// console.log ('ciao mondo')

/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
Stampate il prezzo del biglietto in console, ma l’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.). */


//richiedere all'utente il numero di km
const kmTotali = parseFloat (prompt ('Quanti km devi compiere?'))
console.log(kmTotali)

//richiedere l'età
const età = parseInt (prompt ('Quanti anni hai?'))
console.log(età)

//prezzo biglietto = km totali * 0.21
const prezzoBase = kmTotali * 0.21
console.log(prezzoBase)

//sconto del 20% per i minorenni
let sconto = 0

// SE età < 18
if (età < 18) {
    // - sconto del 20% (kmTotali * 0.2)
    sconto = prezzoBase * 0.2
}
// ALTRIMENTI SE età > 65
else if (età > 65) {
    // - sconto del 40% (kmTotali * 0.4)
    sconto = prezzoBase * 0.4
}
// ALTRIMENTI 
else {
    // - prezzo pieno
    sconto = 0
}

//prezzo finale
let prezzoTotale = prezzoBase - sconto

//stampa prezzo con due decimali
const prezzoArrotondato = prezzoTotale.toFixed(2)
console.log(prezzoArrotondato)



// BONUS 
document.getElementById('stampa').innerHTML = 'prezzo totale =' + ' ' + prezzoArrotondato
