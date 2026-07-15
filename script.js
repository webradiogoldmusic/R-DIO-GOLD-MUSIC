// WebRádio Gold Music

console.log("WebRádio Gold Music iniciada!");


// Botão Tocando Agora

const ouvirBtn = document.querySelector("#ouvir");

if (ouvirBtn) {

    ouvirBtn.addEventListener("click", () => {

        alert("Em breve a transmissão da WebRádio Gold Music estará disponível!");

    });

}



// MENU LATERAL

const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");

const overlay = document.querySelector(".overlay");



function abrirMenu(){

    menu.classList.add("active");

    overlay.classList.add("active");

}



function fecharMenu(){

    menu.classList.remove("active");

    overlay.classList.remove("active");

}



if(menuBtn && menu && overlay){


    menuBtn.addEventListener("click", () => {


        if(menu.classList.contains("active")){

            fecharMenu();

        }else{

            abrirMenu();

        }


    });



    // Fecha clicando fora

    overlay.addEventListener("click", () => {

        fecharMenu();

    });



    // Fecha ao clicar em algum item

    const links = document.querySelectorAll(".menu-links a");


    links.forEach(link => {


        link.addEventListener("click", () => {

            fecharMenu();

        });


    });


}            nav.style.display = "none";
        }

    });

}
