//efeito do site 
document.addEventListener("DOMContentLoaded", () => {
    const numberOfLeaves = 20; // Número de folhas
    const container = document.querySelector(".container");

    for (let i = 0; i < numberOfLeaves; i++) {
        let leaf = document.createElement("div");
        leaf.classList.add("leaf");

        // Posição inicial aleatória
        leaf.style.left = Math.random() * 100 + "vw";

        // Tempo aleatório de queda
        leaf.style.animationDuration = Math.random() * 5 + 5 + "s"; // Entre 5s e 10s
        leaf.style.animationDelay = Math.random() * 5 + "s"; // Atraso aleatório

        container.appendChild(leaf);
    }
});
