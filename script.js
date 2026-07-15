// WebRádio Gold Music

console.log("WebRádio Gold Music iniciada!");


// MENU LATERAL

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");


if(menuBtn && menu && overlay){

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");
        overlay.classList.toggle("active");

    });


    overlay.addEventListener("click", () => {

        menu.classList.remove("active");
        overlay.classList.remove("active");

    });

}



// BOTÃO TOCANDO AGORA

const ouvirBtn = document.getElementById("ouvir");

if(ouvirBtn){

    ouvirBtn.addEventListener("click", () => {

        alert("🎵 Rádio Gold Music - Player em breve!");

    });

}



// BOTÃO RÁDIO LIVE TIKTOK

const tiktokBtn = document.getElementById("tiktok");

if(tiktokBtn){

    tiktokBtn.addEventListener("click", () => {

        alert("📺 Acompanhe nossas lives no TikTok!");

    });

}
