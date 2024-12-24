import { renderNavbar } from './navbar.js';
import { renderProducts } from './displayProducts.js';

renderNavbar('wishlist');

const productContainer = document.getElementById('product-container');

const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

renderProducts(wishlist, productContainer, { addToCart });
