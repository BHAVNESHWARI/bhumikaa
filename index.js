import { renderNavbar } from './navbar.js';
import { renderProducts } from './displayProducts.js';

renderNavbar('home');

const productContainer = document.getElementById('product-container');

const products = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 100, rating: 4.5 },
  { id: 2, name: 'Product B', category: 'Books', price: 20, rating: 4.0 },
  // Add more products here
];

function addToCart(product) {
  if (confirm(`Are you sure you want to add ${product.name} to the cart?`)) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  }
}

function addToWishlist(product) {
  if (confirm(`Are you sure you want to add ${product.name} to the wishlist?`)) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${product.name} added to wishlist`);
  }
}

renderProducts(products, productContainer, { addToCart, addToWishlist });
