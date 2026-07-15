// WebRádio Gold Music

console.log("WebRádio Gold Music iniciada!");


// Botão ouvir rádio
const ouvirBtn = document.querySelector(".banner button");

if (ouvirBtn) {
    ouvirBtn.addEventListener("click", () => {
        alert("Em breve a transmissão da WebRádio Gold Music estará disponível!");
    });
}


// Menu Mobile ☰
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }

    });


    // Fecha o menu clicando fora
    document.addEventListener("click", (event) => {

        if (!menuBtn.contains(event.target) && !nav.contains(event.target)) {
            nav.style.display = "none";
        }

    });

}
