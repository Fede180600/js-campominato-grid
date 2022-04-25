//Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Prelevo il button play
document.getElementById('play').addEventListener("click", function() {
    // Prelevo il contenitore della griglia
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    // Prelevo il valore di select
    const gameDifficulty = document.getElementById('difficulty').value;
    // Rimuovo il titolo
    document.getElementById('my-title').classList.add('d-none');

    // Genero 100 cells se il valore di select è: easy
    if (gameDifficulty === 'easy') {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-xs');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };

    // Genero 81 cells se il valore di select è: normal
    if (gameDifficulty === 'normal') {
        for (let i = 0; i < 81; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-sm');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };

    // Genero 49 cells se il valore di selectè: hard
    if (gameDifficulty === 'hard') {
        for (let i = 0; i < 49; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item-lg');
            cell.innerHTML = i + 1;
            gridContainer.append(cell);
        
            // Aggiungere la classe hover al click
            cell.addEventListener("click", function() {
                this.classList.add('active');
            });
        
        }
    };
});


