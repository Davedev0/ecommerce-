// Load cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsSidebar = document.getElementById('cart-items-sidebar');
const subtotalPriceSidebar = document.getElementById('subtotal-price-sidebar');
const discountSidebar = document.getElementById('discount-sidebar');
const totalPriceSidebar = document.getElementById('total-price-sidebar');
const cartNotification = document.getElementById('cart-notification');
const cartNotificationMobile = document.getElementById('cart-notification-mobile');

// Function to update the cart notification badge
function updateCartNotification() {
    const cartCount = cart.length;
    cartNotification.textContent = cartCount;
    cartNotificationMobile.textContent = cartCount;
}

// Function to open the sidebar
function openSidebar() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    displayCartItemsInSidebar();
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Function to display cart items in the sidebar
function displayCartItemsInSidebar() {
    cartItemsSidebar.innerHTML = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace('₱', ''));
        const quantity = parseInt(item.quantity);
        const total = price * quantity;
        subtotal += total;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Quantity: x${item.quantity}</p>
                <p>Price: ${item.price}</p>
            </div>
            <button class="remove-button" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsSidebar.appendChild(cartItem);
    });

    // Calculate discount and total
    const discount = subtotal * 0.2;
    const total = subtotal - discount;

    // Update prices
    subtotalPriceSidebar.textContent = `₱${subtotal.toFixed(2)}`;
    discountSidebar.textContent = `-₱${discount.toFixed(2)}`;
    totalPriceSidebar.textContent = `₱${total.toFixed(2)}`;

    // Update notification badge
    updateCartNotification();
}

// Function to add item to cart
function addToCart(item) {
    cart.push(item); // Add the new item to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    updateCartNotification(); // Update the notification badge
    displayCartItemsInSidebar(); // Refresh the sidebar cart display
}

// Function to remove item from cart
function removeItem(index) {
    // Show the confirmation box and overlay
    const overlay = document.getElementById('remove-overlay');
    const confirmationBox = document.getElementById('remove-confirmation-box');
    overlay.style.display = 'block';
    confirmationBox.style.display = 'block';

    document.getElementById('confirm-remove-btn').onclick = () => {
        cart.splice(index, 1); // Remove the item from the cart
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show success alert
        const success = document.getElementById('success-alert-removed-box');
        success.style.display = 'block';

        // Hide success alert after 3 seconds
        setTimeout(() => {
            success.style.display = 'none';
        }, 2000);

        // Update the cart UI
        updateCartNotification();
        displayCartItemsInSidebar();

        // Hide the confirmation box and overlay
        overlay.style.display = 'none';
        confirmationBox.style.display = 'none';
    };

    // Handle the "No" button click
    document.getElementById('cancel-remove-btn').onclick = () => {
        // Hide the confirmation box and overlay
        overlay.style.display = 'none';
        confirmationBox.style.display = 'none';
    };
}
// Function to clear the cart (e.g., after checkout)
function clearCart() {
    cart = []; // Empty the cart
    localStorage.removeItem('cart'); // Remove cart from localStorage
    updateCartNotification(); // Update the notification badge
    displayCartItemsInSidebar(); // Refresh the sidebar cart display
}

// Proceed to Checkout button
document.getElementById('checkout-button').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(cart.length === 0){
     const exclamation = document.getElementById('exclamation-cart-alert-box');
         exclamation.style.display = 'block';
         
         setTimeout(() => {
        exclamation.style.display ='none';
    }, 2000); 
    return;
    }

    if (user) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUserIndex = users.findIndex(u => u.email === user.email);

        if (existingUserIndex !== -1) {
            users[existingUserIndex].orders = users[existingUserIndex].orders || []; 
            users[existingUserIndex].orders.push(...cart); 
        } else {
            // Kung wala, magdagdag ng bagong user
            user.orders = cart; // Save the cart as orders for the user
            users.push(user);
        }

        localStorage.setItem('users', JSON.stringify(users));
        clearCart(); // Clear the cart after checkout
         const success = document.getElementById('success-alert-box');
         success.style.display = 'block';
         
         setTimeout(() => {
        success.style.display ='none';
    }, 2000); 
    } else {
     const exclamation = document.getElementById('exclamation-user-alert-box');
         exclamation.style.display = 'block';
         
         setTimeout(() => {
        exclamation.style.display ='none';
    }, 2000); 
  }
});

// Initial display of cart items and notification
displayCartItemsInSidebar();
updateCartNotification();