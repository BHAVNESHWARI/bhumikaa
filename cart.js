import { renderNavbar } from './navbar.js';
import { renderProducts } from './displayProducts.js';

renderNavbar('cart');

const productContainer = document.getElementById('product-container');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

renderProducts(cart, productContainer);
