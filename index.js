const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

const container = document.querySelector('.container');
const loginhere = document.querySelector('.loginhere');
const signuphere = document.querySelector('.signuphere');

signuphere.addEventListener('click', ()=> {
  container.classList.add('active');
});

loginhere.addEventListener('click', ()=> {
  container.classList.remove('acive');
});
