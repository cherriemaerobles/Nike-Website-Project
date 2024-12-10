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



/*Login Form*/
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const fauser = document.querySelector('.button-user');
const iconclose = document.querySelector('.icon-close');
const modalOverlay = document.querySelector('.modal-overlay'); // Get the modal overlay

// Show the register form and modal
registerlink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

// Switch back to the login form
loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

// Open modal and show overlay
fauser.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  modalOverlay.classList.add('active'); // Show overlay
});

// Close modal and hide overlay
iconclose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  modalOverlay.classList.remove('active'); // Hide overlay
});

// Close modal if overlay is clicked
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) { // Make sure it's not a click inside the modal
    wrapper.classList.remove('active-popup');
    modalOverlay.classList.remove('active');
  }
});



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 100 })
sr.reveal(`.about__data, .discount__img`, { origin: 'left' })
sr.reveal(`.about__img, .discount__data`, { origin: 'right' })
