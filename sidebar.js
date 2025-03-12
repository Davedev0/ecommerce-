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
                <p>Quantity: ${item.quantity}</p>
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
    cart.splice(index, 1); // Remove the item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    updateCartNotification(); 
    displayCartItemsInSidebar(); 
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
    if (user) {
        user.orders = cart; // Save the cart as orders for the user
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUserIndex = users.findIndex(u => u.email === user.email);
        if (existingUserIndex !== -1) {
            users[existingUserIndex] = user; // Update existing user
        } else {
            users.push(user); // Add new user
        }
        localStorage.setItem('users', JSON.stringify(users));
        clearCart(); // Clear the cart after checkout
        alert('Order placed successfully!');
    } else {
        alert('Please sign in to proceed with checkout.');
    }
});

// Initial display of cart items and notification
displayCartItemsInSidebar();
updateCartNotification();