// Search Functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const productItems = document.querySelectorAll('.pro');
    let found = false;

    productItems.forEach(item => {
        const productName = item.querySelector('h5').textContent.toLowerCase();
        const productCategory = item.querySelector('span').textContent.toLowerCase();

        if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
            item.style.display = 'block'; 
            found = true;
        } else {
            item.style.display = 'none'; 
        }
    });

    // Show or hide "Product Not Found" message
    const notFoundMessage = document.getElementById('notFoundMessage');
    if (found) {
        notFoundMessage.style.display = 'none'; 
    } else {
        notFoundMessage.style.display = 'block';
    }
});

