  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error-message');
    const success = document.getElementById('success-message');
          
  error.innerText = "Invalid, Please try again!";
  success.innerText = "Successfully Sign in!";
          
  if (username === "admin" && password === "admin000") {
    window.location.href = "../pages/admin-order.html";
    success.style.display = 'block';
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
    success.style.display = 'none'
      }
  }