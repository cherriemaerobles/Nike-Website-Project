// cart.js

let cartCount = 0;

// Update the cart icon counter
const updateCartCounter = () => {
    const cartIcon = document.querySelector('.fa-cart-shopping');
    let cartBadge = cartIcon.querySelector('.cart-badge');

    if (!cartBadge) {
        cartBadge = document.createElement('span');
        cartBadge.classList.add('cart-badge');
        cartBadge.style.position = 'absolute';
        cartBadge.style.top = '0';
        cartBadge.style.right = '0';
        cartBadge.style.backgroundColor = '#c72092';
        cartBadge.style.color = 'white';
        cartBadge.style.borderRadius = '50%';
        cartBadge.style.padding = '5px';
        cartBadge.style.fontSize = '12px';
        cartBadge.style.fontWeight = 'bold';
        cartBadge.style.minWidth = '20px';
        cartBadge.style.textAlign = 'center';
        cartBadge.style.transform = 'translate(50%, -50%)';

        cartIcon.style.position = 'relative';
        cartIcon.appendChild(cartBadge);
    }

    cartBadge.textContent = cartCount;
};

// Event listener for "Add to Cart" buttons
const initializeCart = () => {
    document.querySelectorAll('.btn.add-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCounter();
        });
    });
};

// Initialize the cart functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeCart);
