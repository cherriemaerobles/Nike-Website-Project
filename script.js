
const openModalButton = document.getElementById('.openModal');
const closeModalButton = document.getElementById('.closeModal');
const modal = document.getElementById('.modal');


const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


openModalButton.addEventListener('click', () => {
  modal.classList.add('active');
});


closeModalButton.addEventListener('click', () => {
  modal.classList.remove('active');
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});

registerLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  wrapper.classList.remove('active');
});
