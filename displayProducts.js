// displayProducts.js
export function renderProducts(products, container, buttonsConfig = {}) {
    container.innerHTML = '';
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}⭐</p>
      `;
  
      if (buttonsConfig.addToCart) {
        const cartButton = document.createElement('button');
        cartButton.textContent = 'Add to Cart';
        cartButton.onclick = () => buttonsConfig.addToCart(product);
        card.appendChild(cartButton);
      }
  
      if (buttonsConfig.addToWishlist) {
        const wishlistButton = document.createElement('button');
        wishlistButton.textContent = 'Add to Wishlist';
        wishlistButton.onclick = () => buttonsConfig.addToWishlist(product);
        card.appendChild(wishlistButton);
      }
  
      container.appendChild(card);
    });
  }
  