    // Function to toggle the sidebar
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    }
    
    // Function to show the confirmation box
    function showConfirmationBox() {
      const overlay = document.getElementById('overlay');
      const confirmationBox = document.getElementById('confirmation-box');
      overlay.style.display = 'block';
      confirmationBox.style.display = 'block';
    }
    
    // Function to hide the confirmation box
    function hideConfirmationBox() {
      const overlay = document.getElementById('overlay');
      const confirmationBox = document.getElementById('confirmation-box');
      overlay.style.display = 'none';
      confirmationBox.style.display = 'none';
    }
    
    // Function to confirm sign out
    function confirmSignOut() {
      window.location.href = 'admin-sign-in.html';
    }
    
    // Function to cancel sign out
    function cancelSignOut() {
      hideConfirmationBox();
    }
    
    // Event listener for the sign out button
    document.getElementById('sign-out-btn').addEventListener('click', showConfirmationBox);