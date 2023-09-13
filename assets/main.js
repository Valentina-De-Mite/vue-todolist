/*Descrizione: Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1 Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3 Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      error: false,
      tasks: [
        {
          text: "",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      //prima recupero il valore dell'input emesso dall'utente
      console.log(this.newTask);

      // non far si che aggiunga una task vuota
      if (this.newTask.length == 0) {
        //mostro errore
        this.error = true;
      } else {
        // // pusho il valore dell'input dentro la lista di task
        this.tasks.push({ text: this.newTask, done: false });
        this.newTask = "";
      }

      console.log(this.tasks);
    },

    removeTask(index) {
      //rimuovo elemento
      this.tasks.splice(index, 1);
      console.log(this.tasks);
    },
  },
}).mount("#app");
