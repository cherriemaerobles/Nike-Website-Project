const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const container = document.querySelector('.container');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const btnlogin = document.querySelector('.btnlogin');

registerlink.addEventListener('click', () => {
  container.classList.add('active');
});

loginlink.addEventListener('click', () => {
  container.classList.remove('acive');
});

btnlogin.addEventListener('click', () => {
  container.classList.add('active-popup');
});