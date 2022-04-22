//Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//Genero i 100 numeri
// creo la array
const numbers = [];

// imposto il ciclo per generare 100 numeri
for (let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    if (number < number - 1 && number > number + 1) {
        number = Math.floor(Math.random() * 100) + 1;
    } else {
        numbers.push(number);
    }
}

console.log(numbers);
