document.addEventListener("DOMContentLoaded", function () {

    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartTab = document.querySelector(".cartTab");
    const closeBtn = cartTab.querySelector(".close");


    cartTab.style.transform = "translateX(100%)";
    localStorage.removeItem('cart');

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

function addToCart(productName, productPrice, productImage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        if (existingProduct.quantity < 99) {
            existingProduct.quantity++;
        }
    } else {
        const product = { name: productName, price: productPrice, image: productImage, quantity: 1 };
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');

    // Calculate total quantity of items in the cart, limit to 99
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const displayedCount = totalQuantity > 99 ? 99 : totalQuantity;  // Limit the count to 99

    // Update cart count display
    cartCount.textContent = displayedCount;
}

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
                <span class="minus" onclick="updateQuantity('${item.name}', -1)">-</span>
                <span>${item.quantity}</span>
                <span class="plus" onclick="updateQuantity('${item.name}', 1)">+</span>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `Total: ₱${totalPrice.toFixed(2)}`;
    }
}

function updateQuantity(productName, delta) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(product => product.name === productName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            const index = cart.indexOf(item);
            cart.splice(index, 1);
        }
        if (item.quantity > 99) {
            item.quantity = 99;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

function goToCart() {
    window.location.href = '#cartTab';
    loadCartItems();
}

function closeCart() {
    alert('Cart closed');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadCartItems();
});
