// Function para sa loading screen
function showLoadingScreen(redirectUrl) {
    document.getElementById('loading-screen').style.display = 'flex'; 
    setTimeout(function() {
        window.location.href = redirectUrl;
    }, 2000);
}

document.getElementById('payment-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    showLoadingScreen('payment.html');
});

document.getElementById('SignIn-button').addEventListener('click', function(event) {
    event.preventDefault();
    showLoadingScreen('sign-in.html'); 
});
