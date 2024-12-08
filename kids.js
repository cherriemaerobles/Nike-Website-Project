let iconCart = document.querySelector('.fa-solid fa-cart-shopping');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
    })
