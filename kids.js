document.addEventListener("DOMContentLoaded", function () {

    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartTab = document.querySelector(".cartTab");
    const closeBtn = cartTab.querySelector(".close");

    cartIcon.addEventListener("click", function () {

        if (cartTab.style.transform === "translateX(0)") {
            cartTab.style.transform = "translateX(100%)";
        } else {
            cartTab.style.transform = "translateX(0)";
        }
    });

    closeBtn.addEventListener("click", function () {
        cartTab.style.transform = "translateX(100%)";
    });
});

// Function to add item to the cart
function addToCart(productName, productPrice, productImage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { name: productName, price: productPrice, image: productImage, quantity: 1 };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    loadCartItems();
}

// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to load cart items and calculate total price
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <div class="image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="name">${item.name}</div>
            <div class="totalPrice">₱${item.price * item.quantity}</div>
            <div class="quantity">
                <span class="minus" onclick="updateQuantity('${item.name}', -1)"><</span>
                <span>${item.quantity}</span>
                <span class="plus" onclick="updateQuantity('${item.name}', 1)">></span>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        // Add this item's total to the overall total
        totalPrice += item.price * item.quantity;
    });

    // Display the total price in the cart
    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `Total: ₱${totalPrice.toFixed(2)}`;
    }
}

// Function to update item quantity in cart
function updateQuantity(productName, delta) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(product => product.name === productName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            const index = cart.indexOf(item);
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

// Function to navigate to cart section
function goToCart() {
    window.location.href = '#cartTab';
    loadCartItems();
}

// Function to close cart
function closeCart() {
    alert('Cart closed');
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadCartItems();
});
