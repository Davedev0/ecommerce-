 function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    }
    
 function showConfirmationBox() {
      const overlay = document.getElementById('overlay');
      const confirmationBox = document.getElementById('confirmation-box');
      overlay.style.display = 'block';
      confirmationBox.style.display = 'block';
    }
    
 function hideConfirmationBox() {
      const overlay = document.getElementById('overlay');
      const confirmationBox = document.getElementById('confirmation-box');
      overlay.style.display = 'none';
      confirmationBox.style.display = 'none';
    }
    
 function confirmSignOut() {
      window.location.href = '../pages/admin-sign-in.html';
    }
    
 function cancelSignOut() {
      hideConfirmationBox();
    } 
      document.getElementById('sign-out-btn').addEventListener('click', showConfirmationBox);