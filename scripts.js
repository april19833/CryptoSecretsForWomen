document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Crypto Secrets for Women!");

    // Пример простой интерактивности
    document.querySelector('#contact form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
