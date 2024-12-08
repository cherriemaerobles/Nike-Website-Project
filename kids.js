document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements
    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartTab = document.querySelector(".cartTab");
    const closeBtn = cartTab.querySelector(".close");

    // Toggle the cart visibility when the cart icon is clicked
    cartIcon.addEventListener("click", function() {
        // Check if the cart is currently open or closed
        if (cartTab.style.transform === "translateX(0)") {
            // Close the cart
            cartTab.style.transform = "translateX(100%)";
        } else {
            // Open the cart
            cartTab.style.transform = "translateX(0)";
        }
    });

    // Close the cart when the close button is clicked
    closeBtn.addEventListener("click", function() {
        cartTab.style.transform = "translateX(100%)";
    });
});
