const signOutBtn = document.getElementById('sign-out-btn');
const modal = document.getElementById('modal');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

signOutBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

yesBtn.addEventListener('click', () => {
  window.location.href = "admin-sign-in.html";
});

noBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});