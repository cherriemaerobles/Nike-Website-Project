document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartTab = document.querySelector(".cartTab");
    const closeBtn = cartTab.querySelector(".close");
    const checkoutBtn = cartTab.querySelector(".checkOut"); // Get the Checkout button
    const checkoutPopup = document.getElementById("checkout-popup"); // Get the checkout popup
    const closePopupBtn = document.getElementById("close-popup"); // Close button in popup

    cartTab.style.transform = "translateX(100%)";
    localStorage.removeItem('cart'); // Ensure cart is cleared initially

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

    checkoutBtn.addEventListener("click", function () {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0 || cart.every(item => item.quantity === 0)) {
            const confirmClose = confirm("Your cart is empty. Please add items to the cart before proceeding to checkout.");

            if (confirmClose) {
                cartTab.style.transform = "translateX(100%)";
            }
            return;
        }

        cartTab.style.transform = "translateX(100%)";

        setTimeout(() => {
            alert("Checkout successful! Your order has been placed.");
        }, 300);

        localStorage.removeItem('cart');
        loadCartItems();
        updateCartCount();
    });

    closePopupBtn.addEventListener("click", function () {
        checkoutPopup.style.display = "none";
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

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const displayedCount = totalQuantity > 99 ? 99 : totalQuantity;  // Limit the count to 99

    cartCount.textContent = displayedCount;
}

function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    }

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

function showDetails(name, description, price, image) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPrice').textContent = `₱${price}`;
    document.getElementById('modalImage').src = image;

    // Update Add to Cart and Favorite buttons with appropriate actions
    document.getElementById('modalAddCart').setAttribute(
        'onclick', `addToCart('${name}', ${price}, '${image}')`
    );
    document.getElementById('modalAddFav').setAttribute(
        'onclick', `addToFavorite('${name}')`
    );

    // Display the modal
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

document.getElementById("modalAddCart").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the product details from modal content
    const productName = document.getElementById("modalName").textContent;
    const productPrice = parseFloat(document.getElementById("modalPrice").textContent.replace("₱", ""));
    const productImage = document.getElementById("modalImage").src;

    // Add the item to the cart
    addToCart(productName, productPrice, productImage);

    // Automatically show the cart after adding an item
    const cartTab = document.querySelector(".cartTab");
    cartTab.style.transform = "translateX(0)";
});
