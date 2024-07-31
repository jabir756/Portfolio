document.addEventListener("DOMContentLoaded", function () {
    // Bouton de retour en haut de page
    const backToTop = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /*mail to*/
    document.getElementById("mail-btn").addEventListener("click", function () {
        window.location.href = "mailto:jabirkagone6@gmail.com";
    });
});
