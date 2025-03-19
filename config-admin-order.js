// Function to display all orders of users
function displayAllOrders() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userTable = document.getElementById('user-table');
  userTable.innerHTML = ''; // Clear the table
  
  users.forEach((user, userIndex) => {
    if (user.orders && user.orders.length > 0) {
      user.orders.forEach((order, orderIndex) => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
                    <div>
                        <p><strong>Name:</strong> ${user.fullname}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Location:</strong> ${user.location}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <h4>Order:</h4>
                        <ul>
                            <li>
                                <img src="${order.image}" alt="${order.name}" class="img"><br>
                                <strong>Product:</strong> ${order.name}<br>
                                <strong>Price:</strong> ${order.price}<br>
                                <strong>Size:</strong> ${order.size}<br>
                                <strong>Quantity:</strong> x${order.quantity}
                            </li>
                        </ul>
                    </div>
                    <div class="actions">
                        <button class="select-btn" onclick="approveOrder(${userIndex}, ${orderIndex})">Approve</button>
                        <button class="remove-btn" onclick="removeOrder(${userIndex}, ${orderIndex})">Remove</button>
                    </div>
                `;
        userTable.appendChild(userCard);
      });
    }
  });
}

// Function to approve an order
function approveOrder(userIndex, orderIndex) {
    // Show the approve confirmation box
    showApproveConfirmationBox(userIndex, orderIndex);
}

// Function to show the approve confirmation box
function showApproveConfirmationBox(userIndex, orderIndex) {
    const overlay = document.getElementById('approve-overlay');
    const confirmationBox = document.getElementById('approve-confirmation-box');
    overlay.style.display = 'block';
    confirmationBox.style.display = 'block';

    // Set up event listener for the OK button
    const okBtn = document.getElementById('ok-approve-btn');

    // Remove previous event listener to avoid duplication
    okBtn.replaceWith(okBtn.cloneNode(true));

    // Add new event listener
    document.getElementById('ok-approve-btn').addEventListener('click', () => {
        confirmApproveOrder(userIndex, orderIndex);
    });
}

// Function to hide the approve confirmation box
function hideApproveConfirmationBox() {
    const overlay = document.getElementById('approve-overlay');
    const confirmationBox = document.getElementById('approve-confirmation-box');
    overlay.style.display = 'none';
    confirmationBox.style.display = 'none';
}

// Function to confirm and approve the order
function confirmApproveOrder(userIndex, orderIndex) {
    const users = JSON.parse(localStorage.getItem('users'));
    const order = users[userIndex].orders[orderIndex];
    
    // Remove the approved order from the list
    users[userIndex].orders.splice(orderIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));

    // Refresh the displayed orders
    displayAllOrders();

    // Hide the confirmation box
    hideApproveConfirmationBox();
}

// Function to remove an order
function removeOrder(userIndex, orderIndex) {
  // Show the remove confirmation box
  showRemoveConfirmationBox(userIndex, orderIndex);
}

// Function to show the remove confirmation box
function showRemoveConfirmationBox(userIndex, orderIndex) {
  const overlay = document.getElementById('remove-overlay');
  const confirmationBox = document.getElementById('remove-confirmation-box');
  overlay.style.display = 'block';
  confirmationBox.style.display = 'block';
  
  // Set up event listeners for the buttons
  const confirmRemoveBtn = document.getElementById('confirm-remove-btn');
  const cancelRemoveBtn = document.getElementById('cancel-remove-btn');
  
  // Remove previous event listeners to avoid duplication
  confirmRemoveBtn.replaceWith(confirmRemoveBtn.cloneNode(true));
  cancelRemoveBtn.replaceWith(cancelRemoveBtn.cloneNode(true));
  
  // Add new event listeners
  document.getElementById('confirm-remove-btn').addEventListener('click', () => {
    confirmRemoveOrder(userIndex, orderIndex);
  });
  
  document.getElementById('cancel-remove-btn').addEventListener('click', hideRemoveConfirmationBox);
}

// Function to hide the remove confirmation box
function hideRemoveConfirmationBox() {
  const overlay = document.getElementById('remove-overlay');
  const confirmationBox = document.getElementById('remove-confirmation-box');
  overlay.style.display = 'none';
  confirmationBox.style.display = 'none';
}

// Function to confirm and remove the order
function confirmRemoveOrder(userIndex, orderIndex) {
  const users = JSON.parse(localStorage.getItem('users'));
  users[userIndex].orders.splice(orderIndex, 1);
  localStorage.setItem('users', JSON.stringify(users));
  
          // Show success alert
        const success = document.getElementById('success-alert-removed-box');
        success.style.display = 'block';

        // Hide success alert after 3 seconds
        setTimeout(() => {
            success.style.display = 'none';
        }, 1000);
  
  
  displayAllOrders(); 
  hideRemoveConfirmationBox(); 
}

// Display orders on initial load
displayAllOrders();