let cart = [];  // This will store the items in the cart 
let cartCount = 0; // Total items count in the cart 
 
// Update the cart icon counter 
const updateCartCounter = () => { 
    const cartIcon = document.querySelector('.fa-cart-shopping'); 
 
    // If cart badge doesn't exist, create one 
    if (!cartBadge) { 
        cartBadge = document.createElement('span'); 
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
 
// Function to open the cart modal and display items 
const openCartModal = () => { 
    const cartModal = document.getElementById('cartModal'); 
    const cartItemsContainer = document.getElementById('cartItemsContainer'); 
    cartItemsContainer.innerHTML = '';  // Clear the cart items container 
 
    // Check if the cart is empty and display accordingly 
    if (cart.length === 0) { 
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>'; 
    } else { 
        // Loop through the cart items and display them 
        cart.forEach(item => { 
            const cartItem = document.createElement('div'); 
            cartItem.classList.add('cart-item'); 
            cartItem.innerHTML = ` 
                <div class="cart-item-name">${item.name}</div> 
                <div class="cart-item-price">${item.price}</div> 
                <button class="btn remove-cart-item" data-id="${item.id}">Remove</button> 
            `; 
            cartItemsContainer.appendChild(cartItem); 
        }); 
    } 
 
    // Show the cart modal 
    cartModal.style.display = "block"; 
}; 
 
// Function to remove an item from the cart 
const removeCartItem = (productId) => { 
    // Filter out the item with the given productId 
    cart = cart.filter(item => item.id !== productId);  
    cartCount = cart.length; 
    updateCartCounter();  // Update the cart icon count 
    openCartModal(); // Refresh the modal 
}; 
 

 
// Initialize the cart functionality when the DOM is fully loaded 
document.addEventListener('DOMContentLoaded', initializeCart);