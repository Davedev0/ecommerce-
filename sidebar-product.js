          document.getElementById('add-to-cart').addEventListener('click', function() {
            const user = JSON.parse(localStorage.getItem('user'));
              
            const product = {
              name: document.getElementById('product-name').innerText,
              price: document.getElementById('product-price').innerText,
              size: document.getElementById('product-size').value,
              quantity: document.getElementById('product-quantity').value,
              image: document.getElementById('product-img').src
            };
            
         if (product.price === "₱0"){
          const product = document.getElementById('exclamation-price-alert-box');
              product.style.display = 'block';
              setTimeout(() => {
              product.style.display = 'none';
              }, 2000);
            } 
            
         else if (product.size === "Select Size"){
           const product = document.getElementById('exclamation-size-alert-box');
              product.style.display = 'block';
              setTimeout(() => {
              product.style.display = 'none';
              }, 2000);
            } 
        else if (product.quantity === "0") {
             const product = document.getElementById('exclamation-quantity-alert-box');
              product.style.display = 'block';
              setTimeout(() => {
              product.style.display = 'none';
              }, 2000);
        }
            
         else {
            // save the product
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            const addedCart = document.getElementById('success-alert-added-box');
            addedCart.style.display = 'block';
            setTimeout(() => {
            addedCart.style.display = 'none';
            localStorage.setItem('showAlert', 'true');
            window.location.href="index.html";
            }, 2000);
            }
          });