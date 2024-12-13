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
document.addEventListener('DOMContentLoaded', () => {
    let cartItems = []; // Store items in the cart

    // Function to update the cart modal content
    const updateCartModal = () => {
        const cartContainer = document.getElementById('cartContainer');
        cartContainer.innerHTML = ''; // Clear previous items
        let totalAmount = 0; // Calculate total price

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p>No items in the cart.</p>';
        } else {
            cartItems.forEach((item, index) => {
                totalAmount += item.totalPrice;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.style.display = 'flex';
                cartItem.style.alignItems = 'center';
                cartItem.style.marginBottom = '15px';

                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; margin-right: 10px; border-radius: 5px;">
                    <div style="flex-grow: 1;">
                        <h4>${item.name}</h4>
                        <p>${item.price} x 
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}" oninput="restrictNegativeAndZero(this)" onblur="ensureValidValue(this)">
                        </p>
                    </div>
                    <button class="btn delete-item" data-index="${index}" style="margin-left: 10px;">Delete</button>
                `;

                cartContainer.appendChild(cartItem);
            });

            // Function to restrict typing negative and zero values
            function restrictNegativeAndZero(input) {
                // Allow only numbers greater than 0
                let value = input.value;

                // Remove non-numeric characters and check for negative signs
                value = value.replace(/[^0-9]/g, ''); // Remove anything that's not a number

                // If the value is 0, replace it with 1 (to prevent typing zero)
                if (value === "0") {
                    value = "1";
                }

                input.value = value;
            }

            // Function to ensure the value is valid when the user finishes editing (loses focus)
            function ensureValidValue(input) {
                // Ensure that the value is at least 1
                if (parseInt(input.value) < 1) {
                    input.value = "1"; // Set to 1 if the value is less than 1
                }
            }

            // Adding event listener to update cart items' quantities dynamically (if necessary)
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (event) => {
                    const index = event.target.dataset.index;
                    const newQuantity = parseInt(event.target.value) || 1;  // Default to 1 if invalid

                    // Update the quantity and total price for the item
                    cartItems[index].quantity = newQuantity;
                    cartItems[index].totalPrice = parseFloat(cartItems[index].price.replace('₱', '').replace(',', '')) * newQuantity;

                    updateCartModal(); // Refresh the cart modal
                    updateCartBadge(); // Update the cart badge
                });
            });


            // Add event listeners for quantity inputs
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (event) => {
                    const index = event.target.dataset.index;
                    const newQuantity = parseInt(event.target.value) || 1;

                    // Update quantity and total price
                    cartItems[index].quantity = newQuantity;
                    cartItems[index].totalPrice = parseFloat(cartItems[index].price.replace('₱', '').replace(',', '')) * newQuantity;

                    updateCartModal(); // Refresh the cart modal
                    updateCartBadge(); // Update the cart badge
                });
            });

            // Add event listeners for delete buttons
            document.querySelectorAll('.delete-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    const index = event.target.dataset.index;
                    cartItems.splice(index, 1); // Remove item from the cart
                    updateCartModal(); // Refresh the cart modal
                    updateCartBadge(); // Update the cart badge
                });
            });
        }

        document.getElementById('cartTotal').textContent = `₱${totalAmount.toLocaleString()}`;
    };

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

    // Attach event listener to all "Add to Cart" buttons
    document.querySelectorAll('.btn.add-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productIndex = event.target.dataset.index;
            const product = products[productIndex]; // Fetch product details from your products array
            const quantityInput = document.getElementById(`quantity-${product.id}`);
            const quantity = parseInt(quantityInput.value) || 1;

            addToCart(product, quantity);
            alert(`${product.name} has been added to the cart.`);
        });
    });

    // Open the cart modal on cart icon click
    document.querySelector('.fa-cart-shopping').addEventListener('click', () => {
        updateCartModal();
        document.getElementById('cartModal').style.display = 'block';
    });

    // Close the cart modal
    document.getElementById('cartClose').addEventListener('click', () => {
        document.getElementById('cartModal').style.display = 'none';
    });

    // Add checkout functionality
    document.getElementById('checkoutButton').addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to proceed with checkout.');
        } else {
            const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);
            alert(`Thank you for your purchase! Your total is ₱${totalAmount.toLocaleString()}.`);
            cartItems = []; // Clear the cart
            updateCartModal(); // Update the modal to reflect an empty cart
            updateCartBadge(); // Update the badge to show 0 items
        }
    });

});
