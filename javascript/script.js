// funzione per calcolare il prezzo del biglietto in base ai dati inseriti dall'utente
function calcolaPrezzo() {

    // Salvo i valori inseriti dall'utente
    const km = parseFloat(document.getElementById('km').value);
    const age = parseInt(document.getElementById('age').value);

// Prezzo base al km
const prezzoBase = 0.21;

// Calcolo il prezzo iniziale senza sconto
let prezzoTotale = km * prezzoBase;

// Sconti in base all'età
if (age < 18) {

    // Sconto del 20% per i minorenni
    prezzoTotale *= 0.8;

} else if (age > 65) {

    // Sconto del 40% per gli over 65
    prezzoTotale *= 0.6;

}

// Risultato nella console
console.log(`Il prezzo totale del biglietto è: €${prezzoTotale.toFixed(2)}`);

}