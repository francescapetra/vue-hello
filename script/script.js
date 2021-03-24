// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// istanzio il mio Vue e dentro metto il mio data
var app = new Vue(
  {
  el: "#root",
  data:{
    message: "Benvenuti in Vue"
    }
  }
);
console.log(app);
