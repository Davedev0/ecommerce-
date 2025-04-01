// Product Data
const products = {
    // Nike Polo
    "nike1": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Orange Unisex Polo",
        price: "₱220",
        image: "img-nike1.jpg",
        description: "Crafted from premium 100% cotton, this vintage unisex polo offers a classic fit with unmatched comfort. Perfect for casual outings or semi-formal occasions, its timeless design ensures versatility and style."
    },
    "nike2": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Mens Florida A&M",
        price: "₱250",
        image: "img-nike2.jpg",
        description: "This Nike polo features a classic design with the Florida A&M logo, perfect for showing off your school spirit. Made from breathable fabric, it’s ideal for casual wear or sports events."
    },
    "nike3": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Mens Dri-Fit Polo Shirt",
        price: "₱200",
        image: "img-nike3.jpg",
        description: "Stay cool and comfortable with this Dri-Fit polo from Nike. Designed to wick away sweat, it’s perfect for active individuals who want to stay stylish on the go."
    },
    "nike4": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Mens Court Dry Polo",
        price: "₱300",
        image: "img-nike4.jpg",
        description: "This Court Dry polo is designed for performance and style. Its moisture-wicking fabric keeps you dry, while the sleek design makes it suitable for both casual and sporty looks."
    },
    "nike5": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Dri-Fit Victory Polo in White",
        price: "₱250",
        image: "img-nike5.jpg",
        description: "The Dri-Fit Victory Polo combines comfort and style with its lightweight fabric and classic white design. Perfect for casual outings or a day on the golf course."
    },
    "nike6": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Citadel, Class of 2018",
        price: "₱199",
        image: "img-nike6.jpg",
        description: "Celebrate your alma mater with this Nike Citadel polo. Featuring a classic design and comfortable fit, it’s perfect for alumni events or casual wear."
    },
    "nike7": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike Tech Basic Dri-Fit Polo",
        price: "₱300",
        image: "img-nike7.jpg",
        description: "The Tech Basic Dri-Fit Polo offers a modern fit with advanced moisture-wicking technology. Its sleek design makes it a versatile addition to any wardrobe."
    },
    "nike8": {
        category: "Men's Polo Shirt | Nike",
        name: "Nike DC-Fashion High Quality Casual Polo",
        price: "₱199",
        image: "img-nike8.jpg",
        description: "This high-quality casual polo from Nike features a timeless design and comfortable fit. Perfect for everyday wear, it combines style and functionality effortlessly."
    },

    // Prada Polo
    "prada1": {
        category: "Men's Polo Shirt | Prada",
        name: "Prada Logo-Embroidered Wool Polo Shirt-Black",
        price: "₱400",
        image: "img-prada1.jpg",
        description: "This luxurious Prada polo is crafted from premium wool and features a subtle logo embroidery. Its sleek black design makes it perfect for sophisticated casual wear."
    },
    "prada2": {
        category: "Men's Polo Shirt | Prada",
        name: "Prada Polo Shirt Aum Baumwolle",
        price: "₱450",
        image: "img-prada2.jpg",
        description: "Experience the elegance of Prada with this high-quality cotton polo. Its minimalist design and comfortable fit make it a must-have for any fashion-forward individual."
    },
    "prada3": {
        category: "Men's Polo Shirt | Prada",
        name: "Prada Logo-Embroidered Wool Polo Shirt-Blue",
        price: "₱400",
        image: "img-prada3.jpg",
        description: "This blue Prada polo combines luxury and comfort with its premium wool fabric and logo embroidery. Perfect for adding a touch of sophistication to your casual wardrobe."
    },
    "prada4": {
        category: "Men's Polo Shirt | Prada",
        name: "Prada Logo-Embroidered Wool Polo Shirt",
        price: "₱500",
        image: "img-prada4.jpg",
        description: "Elevate your style with this Prada polo, featuring a classic design and premium wool fabric. Its timeless appeal makes it a versatile choice for any occasion."
    },
    "prada5": {
        category: "Men's Polo Shirt | Prada",
        name: "Prada Luna Rossa Vintage Mens Polo",
        price: "₱300",
        image: "img-prada5.jpg",
        description: "This vintage-inspired Prada polo features the iconic Luna Rossa logo. Its comfortable fit and stylish design make it a great addition to any casual outfit."
    },

    // Ralph Lauren Polo
    "lauren1": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Herren Piquè-Poloshirt",
        price: "₱300",
        image: "img-lauren1.jpg",
        description: "This classic Ralph Lauren polo is made from high-quality piqué cotton. Its timeless design and comfortable fit make it a staple for any wardrobe."
    },
    "lauren2": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Black",
        price: "₱320",
        image: "img-lauren2.jpg",
        description: "The Ralph Lauren Mesh Shirt offers a sleek black design with a breathable mesh fabric. Perfect for casual wear or outdoor activities."
    },
    "lauren3": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Blue",
        price: "₱350",
        image: "img-lauren3.jpg",
        description: "This blue Ralph Lauren Mesh Shirt combines style and comfort with its breathable fabric and classic design. Ideal for casual outings or sports events."
    },
    "lauren4": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Navy Red",
        price: "₱390",
        image: "img-lauren4.jpg",
        description: "The Ralph Lauren Mesh Shirt in navy and red offers a bold and stylish look. Its breathable fabric ensures all-day comfort."
    },
    "lauren5": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Classic-Fit Mesh",
        price: "₱400",
        image: "img-lauren5.jpg",
        description: "This Classic-Fit Mesh polo from Ralph Lauren features a timeless design and comfortable fit. Perfect for casual wear or semi-formal occasions."
    },
    "lauren6": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Red",
        price: "₱320",
        image: "img-lauren6.jpg",
        description: "Make a statement with this red Ralph Lauren Mesh Shirt. Its vibrant color and breathable fabric make it perfect for casual or sporty looks."
    },
    "lauren7": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Orange",
        price: "₱320",
        image: "img-lauren7.jpg",
        description: "This orange Ralph Lauren Mesh Shirt offers a bold and stylish look. Its breathable fabric ensures all-day comfort and versatility."
    },
    "lauren8": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Green",
        price: "₱320",
        image: "img-lauren8.jpg",
        description: "The Ralph Lauren Mesh Shirt in green combines style and comfort with its breathable fabric and classic design. Perfect for casual outings."
    },
    "lauren9": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Red Big Pony Cotton Mesh Polo Shirt",
        price: "₱500",
        image: "img-lauren9.jpg",
        description: "This Ralph Lauren polo features the iconic Big Pony logo and a vibrant red color. Its premium cotton fabric ensures a comfortable fit."
    },
    "lauren10": {
        category: "Men's Polo Shirt | Ralph Lauren",
        name: "Ralph Lauren Mesh Shirt Dark Green",
        price: "₱300",
        image: "img-lauren10.jpg",
        description: "The Ralph Lauren Mesh Shirt in dark green offers a sophisticated look with its breathable fabric and classic design. Perfect for casual or semi-formal occasions."
    },

    // Gucci Polo
    "gucci1": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Black Logo-Appliquèd Piquè Polo Shirt",
        price: "₱900",
        image: "img-gucci1.jpg",
        description: "This Gucci polo features a luxurious black design with a logo appliqué. Made from premium piqué cotton, it’s perfect for sophisticated casual wear."
    },
    "gucci2": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Farfretch Brown",
        price: "₱1200",
        image: "img-gucci2.jpg",
        description: "The Gucci Farfretch polo offers a unique brown design with a luxurious feel. Its premium fabric and stylish design make it a standout piece."
    },
    "gucci3": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Logo-Appliquèd Striped Cotton Polo Shirt",
        price: "₱1500",
        image: "img-gucci3.jpg",
        description: "This Gucci polo features a striped design with a logo appliqué. Made from premium cotton, it’s perfect for adding a touch of luxury to your casual wardrobe."
    },
    "gucci4": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Men's Designer Luxury Polo Shirts",
        price: "₱1200",
        image: "img-gucci4.jpg",
        description: "Elevate your style with this Gucci designer polo. Its luxurious fabric and timeless design make it a must-have for any fashion-forward individual."
    },
    "gucci5": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Camisa Polo Com Monograma GG-Azul",
        price: "₱1700",
        image: "img-gucci5.jpg",
        description: "This Gucci polo features the iconic GG monogram in a stylish blue design. Its premium fabric and luxurious feel make it a standout piece."
    },
    "gucci6": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Homme - Tshirt et Polo Homme Polo Black",
        price: "₱2500",
        image: "img-gucci6.jpg",
        description: "The Gucci Homme polo offers a sleek black design with a luxurious feel. Its premium fabric and timeless design make it a must-have for any wardrobe."
    },
    "gucci7": {
        category: "Men's Polo Shirt | Gucci",
        name: "Gucci Homme - Tshirt et Polo Homme Polo White",
        price: "₱2500",
        image: "img-gucci7.jpg",
        description: "This Gucci Homme polo features a classic white design with a luxurious feel. Its premium fabric and timeless design make it a versatile addition to any wardrobe."
    },

    // Calvin Klein Polo
    "calvin1": {
        category: "Men's Polo Shirt | Calvin Klein",
        name: "Calvin Klein Kids Logo-Print Polo Shirt Black",
        price: "₱300",
        image: "img-calvin1.jpg",
        description: "This Calvin Klein polo features a logo print and a classic black design. Perfect for kids, it combines style and comfort effortlessly."
    },
    "calvin2": {
        category: "Men's Polo Shirt | Calvin Klein",
        name: "Calvin Klein Boys' Graphic Polo",
        price: "₱299",
        image: "img-calvin2.jpg",
        description: "The Calvin Klein Boys' Graphic Polo offers a stylish design with a comfortable fit. Perfect for casual wear, it’s a great addition to any young wardrobe."
    },
    "calvin3": {
        category: "Men's Polo Shirt | Calvin Klein",
        name: "Calvin Klein Moisture Wicking Supersoft Polo Shirt",
        price: "₱400",
        image: "img-calvin3.jpg",
        description: "Stay comfortable with this Calvin Klein polo, featuring moisture-wicking technology and a supersoft fabric. Perfect for active individuals."
    },
    "calvin4": {
        category: "Men's Polo Shirt | Calvin Klein",
        name: "Calvin Klein Polo Recto Punto De Piquè",
        price: "₱299",
        image: "img-calvin4.jpg",
        description: "This Calvin Klein polo features a classic piqué design with a comfortable fit. Perfect for casual wear, it combines style and comfort effortlessly."
    },

    // Lacoste Polo
    "lacoste1": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Sleeved Ribbed Collar Polo Shirt",
        price: "₱299",
        image: "img-lacoste1.jpg",
        description: "This Lacoste polo features a ribbed collar and a classic design. Made from premium cotton, it’s perfect for casual or semi-formal occasions."
    },
    "lacoste2": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Polo 12.12 Con Logo Verde",
        price: "₱250",
        image: "img-lacoste2.jpg",
        description: "The Lacoste Polo 12.12 features a green design with the iconic Lacoste logo. Its comfortable fit and stylish design make it a great addition to any wardrobe."
    },
    "lacoste3": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Regular Fir Pima Cotton Polo",
        price: "₱299",
        image: "img-lacoste3.jpg",
        description: "This Lacoste polo is made from premium Pima cotton, offering a comfortable fit and a classic design. Perfect for casual wear or semi-formal occasions."
    },
    "lacoste4": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Sleeved Polo Shirt",
        price: "₱320",
        image: "img-lacoste4.jpg",
        description: "The Lacoste Sleeved Polo Shirt offers a classic design with a comfortable fit. Made from premium cotton, it’s perfect for casual or semi-formal occasions."
    },
    "lacoste5": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Polo 12.12 Con Logo Blu-Blu",
        price: "₱299",
        image: "img-lacoste5.jpg",
        description: "This Lacoste Polo 12.12 features a blue design with the iconic Lacoste logo. Its comfortable fit and stylish design make it a great addition to any wardrobe."
    },
    "lacoste6": {
        category: "Men's Polo Shirt | Lacoste",
        name: "Lacoste Polo Shirt, Classic Fit, Regular Fit, Slim Fit",
        price: "₱500",
        image: "img-lacoste6.jpg",
        description: "The Lacoste Polo Shirt offers a classic fit with a stylish design. Made from premium cotton, it’s perfect for casual or semi-formal occasions."
    },

    // Adidas Polo
    "adidas1": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Essentials 3 Stripe Polo Shirt",
        price: "₱399",
        image: "img-adidas1.jpg",
        description: "This Adidas polo features the iconic 3-stripe design and a comfortable fit. Perfect for casual wear or sports events, it combines style and functionality."
    },
    "adidas2": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Golf Polo Shirt",
        price: "₱500",
        image: "img-adidas2.jpg",
        description: "The Adidas Golf Polo Shirt offers a sleek design with moisture-wicking technology. Perfect for the golf course or casual outings."
    },
    "adidas3": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Essentials 3 Stripe Polo Shirt DUO848",
        price: "₱399",
        image: "img-adidas3.jpg",
        description: "This Adidas polo features the iconic 3-stripe design and a comfortable fit. Perfect for casual wear or sports events, it combines style and functionality."
    },
    "adidas4": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Tiro Polo Kinderen",
        price: "₱250",
        image: "img-adidas4.jpg",
        description: "The Adidas Tiro Polo for kids offers a comfortable fit and a stylish design. Perfect for casual wear or sports activities."
    },
    
        // Adidas Polo (continued)
    "adidas5": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Sleeve Shirts",
        price: "₱499",
        image: "img-adidas5.jpg",
        description: "This Adidas polo features a sleek design with moisture-wicking technology. Perfect for casual wear or sports activities, it combines style and functionality."
    },
    "adidas6": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Embroidered Adidas Stadium Coaches Polo",
        price: "₱600",
        image: "img-adidas6.jpg",
        description: "The Adidas Stadium Coaches Polo offers a professional look with embroidered details. Its moisture-wicking fabric ensures comfort during long hours of wear."
    },
    "adidas7": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas T-shirt Adidas Tiro Polo Shirts",
        price: "₱399",
        image: "img-adidas7.jpg",
        description: "This Adidas Tiro Polo features a classic design with a comfortable fit. Perfect for casual wear or sports events, it combines style and functionality."
    },
    "adidas8": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Golf Polo Shirts",
        price: "₱600",
        image: "img-adidas8.jpg",
        description: "The Adidas Golf Polo Shirt offers a sleek design with moisture-wicking technology. Perfect for the golf course or casual outings."
    },
    "adidas9": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Mens Ultimate365 Golf Jersey Polo Shirt-White",
        price: "₱900",
        image: "img-adidas9.jpg",
        description: "This Adidas Ultimate365 Golf Polo features a premium design with moisture-wicking technology. Perfect for golf enthusiasts or casual wear."
    },
    "adidas10": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Tiro 23 Competition Polo MHK8051",
        price: "₱500",
        image: "img-adidas10.jpg",
        description: "The Adidas Tiro 23 Competition Polo offers a sleek design with moisture-wicking technology. Perfect for sports events or casual outings."
    },
    "adidas11": {
        category: "Men's Polo Shirt | Adidas",
        name: "Adidas Entrada Polo Shirt-Blue",
        price: "₱399",
        image: "img-adidas11.jpg",
        description: "This Adidas Entrada Polo features a classic blue design with a comfortable fit. Perfect for casual wear or sports activities."
    },

    // Polo with Pants
    "pants1": {
        category: "Men's Polo Shirt | Pants",
        name: "Drawstring Waist Trousers",
        price: "₱280",
        image: "img-pants1.jpg",
        description: "These drawstring waist trousers combine comfort and style. Made from high-quality fabric, they are perfect for casual outings or relaxed office wear."
    },
    "pants2": {
        category: "Men's Polo Shirt | Pants",
        name: "Brown Drawstring Waist Trousers",
        price: "₱270",
        image: "img-pants2.jpg",
        description: "Crafted for comfort, these brown drawstring trousers feature a versatile design suitable for both casual and semi-formal occasions. Their lightweight fabric ensures all-day ease."
    },
    "pants3": {
        category: "Men's Polo Shirt | Pants",
        name: "Solid Nepal Drawstring Waist",
        price: "₱280",
        image: "img-pants3.jpg",
        description: "These solid-colored trousers offer a perfect blend of style and functionality. The drawstring waist provides a comfortable fit, making them ideal for everyday wear."
    },
    "pants4": {
        category: "Men's Polo Shirt | Pants",
        name: "Drawstring Solid Button Shirt",
        price: "₱290",
        image: "img-pants4.jpg",
        description: "A versatile button shirt with a drawstring waist for added comfort. Its classic design and premium fabric make it a great choice for casual or semi-formal settings."
    }
};
        
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-description").textContent = product.description;

    showRelatedProducts(productId);
} else {
    document.getElementById("product-name").textContent = "Product Not Found";
}

function showRelatedProducts(currentProductId) {
    const currentProduct = products[currentProductId];
    if (!currentProduct) return;

    const brand = currentProduct.category.split('|')[1].trim();
    const relatedContainer = document.getElementById('relatedProductsContainer');
    
    Object.entries(products).forEach(([id, product]) => {
        if (product.category.includes(brand) && id !== currentProductId) {
            const truncatedTitle = product.name.length > 20 
                ? product.name.substring(0, 20) + '...' 
                : product.name;
                
            const truncatedCategory = product.category.length > 25
                ? product.category.substring(0, 25) + '...' 
                : product.category;

            relatedContainer.innerHTML += `
                <div class="pro">
                    <a href="sproduct.html?id=${id}">
                        <img src="${product.image}" alt="${product.name}"/>
                    </a>
                    <div class="des">
                        <span>${truncatedCategory}</span>
                        <h5>${truncatedTitle}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="sproduct.html?id=${id}"><i class="fas fa-shopping-cart cart"></i></a>
                </div>
            `;
        }
    });
}