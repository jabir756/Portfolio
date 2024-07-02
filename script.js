document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact').addEventListener('click', function() {
        var email = "example@example.com";
        var subject = "Sujet de l'email";
        var body = "Contenu de l'email";
        var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});