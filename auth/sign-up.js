   document.getElementById('form-signup').addEventListener('submit', function (event) {
       event.preventDefault();

   const fullname = document.getElementById('fullname').value;
   const username = document.getElementById('username').value;
   const createPassword = document.getElementById('create-password').value;
   const confirmPassword = document.getElementById('confirm-password').value;
   const email = document.getElementById('email').value;
   const location = document.getElementById('location').value;
   const gender = document.querySelector('input[name="gender"]:checked').value;

   if (createPassword !== confirmPassword) {
       alert('Passwords do not match');
       return;
   }

   const user = {
      fullname: fullname,
      username: username,
      password: createPassword,
      email: email,
      location: location,
      gender: gender,
      orders: []
   };

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
     alert('User already exists with this email');
     return;
  }

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  const signUpNotification = document.getElementById('SignUp-notification');
            signUpNotification.style.display = 'flex';
   setTimeout(() => {
   window.location.href = '../pages/sign-in.html';
            }, 3000);
        });