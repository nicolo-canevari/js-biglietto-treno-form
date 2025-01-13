// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo() {

    // Recupero i valori dai campi input
    const km = parseFloat(document.getElementById('km').value);
    const age = parseInt(document.getElementById('age').value);

    // Verifica che i valori siano validi
    if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
        alert("Per favore, inserisci dei valori validi.");
        return;
    }

    // Prezzo di base per chilometro
    const prezzoBase = 0.21;
    let prezzoTotale = km * prezzoBase;

    // Applicazione degli sconti in base all'età
// 20% di sconto per i minorenni
    if (age < 18) {
        prezzoTotale *= 0.8;
    // 40% di sconto per gli over 65
    } else if (age > 65) {
        prezzoTotale *= 0.6;
    }

    // Formattazione del prezzo a due decimali
    prezzoTotale = prezzoTotale.toFixed(2);

    // Impostazione del valore del campo di input del prezzo
    document.getElementById('ticketCost').value = `€${prezzoTotale}`;

}

// Funzione per annullare e resettare tutti i campi
function annullaAcquisto() {

    // Resetta i campi di input
    document.getElementById('km').value = '';
    document.getElementById('age').value = '';

    // Resetta il campo di output del prezzo
    document.getElementById('ticketCost').value = '€0.00';

}

// Mostriamo il risultato nella console
// console.log(`Il prezzo totale del biglietto è: €${prezzoTotale.toFixed(2)}`);

