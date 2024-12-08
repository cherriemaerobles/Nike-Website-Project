const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');


registerlink.addEventListener('click', () => {
  wrapper.classList.add('active'); 
});


loginlink.addEventListener('click', () => {
  wrapper.classList.remove('active');
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
