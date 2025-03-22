const featureProducts = [
  {
    category: "Men's Polo Shirt | Nike",
    id: "nike1",
    image: "img-nike1.jpg",
    title: "Nike Orange Unisex Polo",
    price: "₱220"
  },
  {
    category: "Men's Polo Shirt | Prada",
    id: "prada1",
    image: "img-prada1.jpg",
    title: "Prada Logo-Embroidered Wool Polo Shirt-Black",
    price: "₱400"
  },
  {
    category: "Men's Polo Shirt | Ralph Lauren",
    id: "lauren1",
    image: "img-lauren1.jpg",
    title: "Ralph Lauren Herren Piquè-Poloshirt",
    price: "₱300"
  },
  {
    category: "Men's Polo Shirt | Gucci",
    id: "gucci1",
    image: "img-gucci1.jpg",
    title: "Gucci Black Logo-Appliquèd Piquè Polo Shirt",
    price: "₱900"
  },
  
  {
    category: "Men's Polo Shirt | Lacoste",
    id: "lacoste1",
    image: "img-lacoste1.jpg",
    title: "Lacoste Sleeved Ribbed Collar Polo Shirt",
    price: "₱299"
  },
  {
    category: "Men's Polo Shirt | Adidas",
    id: "adidas1",
    image: "img-adidas1.jpg",
    title: "Adidas Essentials 3 Stripe Polo Shirt",
    price: "₱399"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateFeatureItems() {
  const proContainerFeature = document.getElementById("proContainerFeature");

  const shuffledProducts = shuffleArray(featureProducts);

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
    proContainerFeature.innerHTML += productHTML;
  });
}

generateFeatureItems();