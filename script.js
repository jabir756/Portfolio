document.addEventListener("DOMContentLoaded", function () {
    //Getting element on document
    const backToTop = document.getElementById("back-to-top-btn");
    const aboutLink = document.getElementById("about-link");
    const projectsLink = document.getElementById("projects-link");
    const contactLink = document.getElementById("contact-link");
    const mailButton = document.getElementById("mail-btn");

    //On project link and contact link :hover put aboutLink in default style
    projectsLink.addEventListener("mouseenter", function () {
        aboutLink.style.padding ="0px";
        aboutLink.style.borderRadius ="0px";
        aboutLink.style.backgroundColor ="white";
        aboutLink.style.color ="#333";
    });
    projectsLink.addEventListener("mouseleave", function () {
        aboutLink.style.padding ="5px";
        aboutLink.style.borderRadius ="10px";
        aboutLink.style.backgroundColor ="rgb(8, 8, 191)";
        aboutLink.style.color ="#FFFFFF";
    });
    contactLink.addEventListener("mouseenter", function () {
        aboutLink.style.padding ="0px";
        aboutLink.style.borderRadius ="0px";
        aboutLink.style.backgroundColor ="white";
        aboutLink.style.color ="#333";
    });
    contactLink.addEventListener("mouseleave", function () {
        aboutLink.style.padding ="5px";
        aboutLink.style.borderRadius ="10px";
        aboutLink.style.backgroundColor ="rgb(8, 8, 191)";
        aboutLink.style.color ="#FFFFFF";
    });
    
    //back to top display related to scroll value
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        }
        else {
            backToTop.style.display = "none";
        }
    });

    //back to top position and behavior
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /*mail to*/
    mailButton.addEventListener("click", function () {
        window.location.href = "mailto:jabirkagone6@gmail.com";
    });
});
