# js-biglietto-treno-form
Esercizio: Biglietto del treno

Descrizione:
Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota: Se non vi sentite particolarmente creativi, quella allegata potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

LOGICA:
-L'utente inserisce il numero di chilometri e l'età del passeggero.
-Quando clicca il bottone "Calcola", il programma esegue la funzione calcolaPrezzo().
Il programma calcola il prezzo iniziale moltiplicando i chilometri per il costo per chilometro (€0.21).
Se l'età del passeggero è inferiore a 18 anni, applica uno sconto del 20%. Se l'età è superiore a 65 anni, applica uno sconto del 40%.
Il prezzo finale viene quindi visualizzato nella console del browser con due decimali.