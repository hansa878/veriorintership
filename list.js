const products = [
  {
    name: "T-Shirt",
    category: "clothing",
    price: "$20",
    image: "https://armapparels.com.pk/cdn/shop/files/adult-tshirt-tail-green.png?v=1726052897"
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: "$499",
    image: "https://sparx.pk/cdn/shop/files/Neo9-Deep-Chocolate.jpg?v=1735904552"
  },
  {
    name: "Headphones",
    category: "electronics",
    price: "$80",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7XWy1cmt1D3uUjF29eo2q4HgqJaGEu9XDg&s"
  },
  {
    name: "Handbag",
    category: "accessories",
    price: "$45",
    image: "https://m.media-amazon.com/images/I/71O0NcZVm7L._AC_SL1200_.jpg"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: "$30",
    image: "https://www.leeway.pk/cdn/shop/products/55d06497f493f0d16985b42b1cfcbc20_950x.jpg?v=1669226503"
  },
  {
    name: "Watch",
    category: "accessories",
    price: "$70",
    image: "https://static-01.daraz.pk/p/39b2f8c5c03f999c95a61c4766889298.jpg"
  }
];

function displayProducts(productArray) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  productArray.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <p><em>${product.category}</em></p>
    `;

    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("category").value;
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}


displayProducts(products);
