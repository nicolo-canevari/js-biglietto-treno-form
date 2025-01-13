// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo() {

    // Recupero i valori dai campi input
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const km = parseFloat(document.getElementById('km').value);
    const age = parseInt(document.getElementById('age').value);

    // Verifica che i valori siano validi
    if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0 || nome === '' || cognome === '') {

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

    // Aggiorno il biglietto con le informazioni ricevute
    const ticketInfo = `
     <p><strong>Nome:</strong> ${nome}</p>
     <p><strong>Cognome:</strong> ${cognome}</p>
     <p><strong>Km da percorrere:</strong> ${km} km</p>
     <p><strong>Età del passeggero:</strong> ${age} anni</p>
     <p><strong>Costo del biglietto:</strong> €${prezzoTotale}</p>
 `;

    // Aggiungo le informazioni al biglietto
    document.getElementById('ticket').innerHTML = ticketInfo;


    // Impostazione del valore del campo di input del prezzo
    // document.getElementById('ticketCost').value = `€${prezzoTotale}`;

}


// funzione per annullare l'acquisto e resettare la pagina
function annullaAcquisto() {

    // Resetta i campi di input
    document.getElementById('nome').value = '';  // Aggiungi il reset per il nome
    document.getElementById('cognome').value = '';  // Aggiungi il reset per il cognome
    document.getElementById('km').value = '';  // Resetta il campo km
    document.getElementById('age').value = '';  // Resetta il campo age

    // Resetta il campo di output del prezzo (se presente)
    document.getElementById('ticketCost').value = '€0.00';

    // Resetta il contenuto del biglietto
    document.getElementById('ticket').innerHTML = '';
    
}

// Mostriamo il risultato nella console
// console.log(`Il prezzo totale del biglietto è: €${prezzoTotale.toFixed(2)}`);

