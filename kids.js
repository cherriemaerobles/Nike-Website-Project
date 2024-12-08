document.addEventListener("DOMContentLoaded", function() {

    const cartIcon = document.querySelector(".fa-cart-shopping");
    const cartTab = document.querySelector(".cartTab");
    const closeBtn = cartTab.querySelector(".close");


    cartIcon.addEventListener("click", function() {

        if (cartTab.style.transform === "translateX(0)") {   
            cartTab.style.transform = "translateX(100%)";
        } else {    
            cartTab.style.transform = "translateX(0)";
        }
    });

    closeBtn.addEventListener("click", function() {
        cartTab.style.transform = "translateX(100%)";
    });
});


