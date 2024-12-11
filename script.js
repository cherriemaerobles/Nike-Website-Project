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


 
