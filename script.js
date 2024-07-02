document.addEventListener('DOMContentLoaded',()=> {
    document.getElementById('contact').addEventListener('click', ()=> {
        let email = "example@example.com";
        let subject = "Sujet de l'email";
        let body = "Contenu de l'email";
        let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});