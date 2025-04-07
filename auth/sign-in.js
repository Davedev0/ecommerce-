  document.getElementById('form-signin').addEventListener('submit', function (event)
  {
     event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
     localStorage.setItem('user', JSON.stringify(user));
     const signInNotification = document.getElementById('SignIn-notification');
     signInNotification.style.display = 'flex';
     setTimeout(() => {
     window.location.href = '../pages/index.html';
     }, 3000);
  } else {
     alert('Invalid username or password');
     }
  });