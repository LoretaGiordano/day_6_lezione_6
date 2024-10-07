/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* Abbiamo 5 diversi tipi di datatype:*/
// 1. Stringhe, ovvero del testo
let string = 'ciao'
// 2. Number, ovvero dei numeri/cifre
let number = 310
// 3.Booleano, serve per affermare se un'espressione è vera o falsa
let boolean = true
// 4.Undefined, ovvero che non gli è stata data un'assegnazione
let sconosciuto
// 5.Null, ovvero quando la sua assegnazione è proprio il nulla
let empty = null

/* ESERCIZIO 2
Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = 'Loreta'
console.log('Ciao, mi chiamo', myName)

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20
console.log('la somma di 12 e 20 è', sum)

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12
console.log('ad x è assegnato il numero', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
// myName = 'Giordano'
// console.log('Ciao, mi chiamo', myName) in concole mi ha riassegnato il nuovo valore

const myName1 = 'Loreta'
console.log('il mio nome è sempre', myName1)
myName1 = 'Jade'
console.log('il mio nome è sempre', myName1)
// in console verrà calcolato come errore

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4
let result = y - x
let result2 = x - y
console.log('il risultato della sottrazione di x a y è', result)
console.log('il risultato della sottrazione di y a x è', result2)

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john'
let name2 = 'John'
const name = 'john' === 'John'
console.log('name1 e name2 sono uguali?', name)
const name0 = !('john' === 'John')
console.log('name1 e name2 sono uguali?', name0)
