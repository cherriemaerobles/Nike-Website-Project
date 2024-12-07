const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const modalOverlay = document.querySelector('.modal-overlay');
const container = document.querySelector('.container');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const btn = document.querySelector('.fa-solid fa-user');


registerlink.addEventListener('click', () => {
  modalOverlay.style.display = 'flex'; 
  container.classList.add('active'); 
});


loginlink.addEventListener('click', () => {
  container.classList.remove('active');
  setTimeout(() => {
    modalOverlay.style.display = 'none'; 
  }, 300); 
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    container.classList.remove('active');
    setTimeout(() => {
      modalOverlay.style.display = 'none';
    }, 300);
  }
});

btn.addEventListener('click', () => {
  container.classList.add('active-popup');
});
