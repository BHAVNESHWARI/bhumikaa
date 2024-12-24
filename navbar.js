// navbar.js
export function renderNavbar(activePage) {
    const navbar = `
      <nav>
        <ul>
          <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="wishlist.html" class="${activePage === 'wishlist' ? 'active' : ''}">Wishlist</a></li>
          <li><a href="cart.html" class="${activePage === 'cart' ? 'active' : ''}">Cart</a></li>
        </ul>
      </nav>
    `;
  
    document.body.insertAdjacentHTML('afterbegin', navbar);
  }
  