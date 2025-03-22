const products = [
  
    {   
        category:"Men's Polo Shirt | Pants",
        id: "pants1",
        image: "img-pants1.jpg",
        title: "Drawstring Waist Trousers",
        price: "₱280"
    },
    {
        category:"Men's Polo Shirt | Pants",
        id: "pants2",
        image: "img-pants2.jpg",
        title: "Brown Drawsting Waist Trousers",
        price: "₱270"
    },
    {   
        category:"Men's Polo Shirt | Pants",
        id: "pants3",
        image: "img-pants3.jpg",
        title: "Solid Nepal Drawsting Waist",
        price: "₱280"
    },
    {
        category:"Men's Polo Shirt | Pants",
        id: "pants4",
        image: "img-pants4.jpg",
        title: "Drawsting Solid Button Shirt",
        price: "₱290"
    }
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateProductItems() {
    const proContainerArrival = document.getElementById("proContainerArrival");

    const shuffledProducts = shuffleArray(products);

    shuffledProducts.forEach(product => {
       
      const truncatedTitle = product.title.length > 20
        ? product.title.substring(0, 20) + '...' 
            : product.title;
      
       const truncatedCategory = product.category.length > 25
            ? product.category.substring(0, 25) + '...' 
            : product.category;
            
        const productHTML = `
            <div class="pro">
            <a href="sproduct.html?id=${product.id}" class="img-target">
             <img src="${product.image}" alt="${product.title}"/>
                </a>
                <div class="des">
                    <span>${truncatedCategory}</span>
                    <h5><a href="sproduct.html?id=${product.id}">${truncatedTitle}</a></h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${product.price}</h4>
                </div>
                <a href="sproduct.html?id=${product.id}"><i class="fas fa-shopping-cart cart"></i></a>
            </div>
        `;
     proContainerArrival.innerHTML += productHTML;
    });
}

generateProductItems();