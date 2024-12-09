
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btn = document.querySelector('.openModal');
const iconclose = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.wrapper-modal'); 


registerlink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});


btn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  modalOverlay.classList.add('active'); 
});


iconclose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  modalOverlay.classList.remove('active'); 
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) { 
    wrapper.classList.remove('active-popup');
    modalOverlay.classList.remove('active');
  }
});