// attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. Bouton retour en haut
    ========================= */

    const button = document.createElement("button");
    button.innerText = "↑";
    button.id = "topButton";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 14px";
    button.style.fontSize = "18px";
    button.style.background = "#d4b28c";
    button.style.border = "none";
    button.style.borderRadius = "6px";
    button.style.cursor = "pointer";
    button.style.display = "none";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });

    button.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       2. Animation simple des sections
    ========================= */

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transition = "opacity 0.8s";

    });

    function revealSections() {

        sections.forEach(section => {

            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                section.style.opacity = "1";
            }

        });

    }

    window.addEventListener("scroll", revealSections);
    revealSections();


    /* =========================
       3. Effet sur le titre
    ========================= */

    const title = document.querySelector(".hero-title");

    if (title) {

        title.addEventListener("mouseover", function () {
            title.style.transform = "scale(1.02)";
            title.style.transition = "0.3s";
        });

        title.addEventListener("mouseout", function () {
            title.style.transform = "scale(1)";
        });

    }

});