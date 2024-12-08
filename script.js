const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const btn = document.querySelector('.fa-solid fa-user');


registerlink.addEventListener('click', () => {
  wrapper.classList.add('active'); 
});


loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});


btn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('modal').classList.add('active');
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').classList.remove('active');
});

window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.classList.remove('active');
  }
});
