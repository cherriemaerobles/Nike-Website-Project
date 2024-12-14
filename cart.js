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

    // Function to remove an item from the cart 
    const removeCartItem = (productId) => { 
    // Filter out the item with the given productId 
    cart = cart.filter(item => item.id !== productId);  
    cartCount = cart.length; 
    updateCartCounter();  // Update the cart icon count 
    openCartModal(); // Refresh the modal 
}; 

// Initialize the cart functionality when the DOM is fully loaded 
document.addEventListener('DOMContentLoaded', () => {
    let cartItems = []; // Store items in the cart

    // Function to update the cart modal content

    // Function to update the cart badge
    const updateCartBadge = () => {
        const cartBadge = document.getElementById('cartBadge');
        cartBadge.textContent = cartItems.length; // Show total unique items in the cart
    };

    // Function to add items to the cart
    const addToCart = (product, quantity) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            // Update the quantity and total price for an existing item
            cartItems[existingItemIndex].quantity += quantity;
            cartItems[existingItemIndex].totalPrice = cartItems[existingItemIndex].quantity * parseFloat(product.price.replace('₱', '').replace(',', ''));
        } else {
            // Add a new item to the cart
            cartItems.push({
                ...product,
                quantity: quantity,
                totalPrice: parseFloat(product.price.replace('₱', '').replace(',', '')) * quantity
            });
        }
        updateCartBadge();
        updateCartModal();
    };
});
