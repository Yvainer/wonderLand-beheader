const container = document.querySelector('.chuva-container');

function criarGotas(numGotas) {
    for (let i = 0; i < numGotas; i++) {
        const gota = document.createElement('div');
        gota.classList.add('gota');
        
        // Posiciona as gotas em locais aleatórios na horizontal
        gota.style.left = `${Math.random() * 100}vw`;
        
        // Define uma animação aleatória para cada gota, variando a duração e o atraso
        const duracao = Math.random() * 1 + 1; // Entre 1 e 3 segundos
        const atraso = Math.random() * 5; // Até 5 segundos de atraso
        gota.style.animationDuration = `${duracao}s`;
        gota.style.animationDelay = `${atraso}s`;

        container.appendChild(gota);
    }
}

// Criar 100 gotas
criarGotas(5);
