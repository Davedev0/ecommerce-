          document.getElementById('add-to-cart').addEventListener('click', function() {
            const user = JSON.parse(localStorage.getItem('user'));
              
            const product = {
              name: document.getElementById('product-name').innerText,
              price: document.getElementById('product-price').innerText,
              size: document.getElementById('product-size').value,
              quantity: document.getElementById('product-quantity').value,
              image: document.getElementById('product-img').src
            };
            
            // save the product
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            const addedCart = document.getElementById('success-alert-added-box');
            addedCart.style.display = 'block';
            setTimeout(() => {
              addedCart.style.display = 'none';
                window.location.href="index.html";
            }, 2000);
          });