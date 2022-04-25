//Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Prelevo il button play
document.getElementById('play').addEventListener("click", function() {
    //Genero i 100 numeri 
    const gridContainer = document.querySelector('.grid-container');
    
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.innerHTML = i + 1;
        gridContainer.append(cell);
    
        // Aggiungere la classe hover al click
        cell.addEventListener("click", function() {
            this.classList.add('active');
        });
    
    }

    // Prelevo il valore del select
    const gameDifficulty = document.getElementById('difficulty').value;
    console.log(gameDifficulty);

    
});


