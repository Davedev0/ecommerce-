//navbar
document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    const body = document.body;

    bar.addEventListener('click', function() {
        navbar.classList.add('active'); 
        body.classList.add('blur'); 
    });

    const close = document.getElementById('close');
    close.addEventListener('click', function() {
        navbar.classList.remove('active'); 
        body.classList.remove('blur'); 
    });
});