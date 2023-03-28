const burgerIcon = document.querySelector('.burger-icon');
const burger = document.querySelector('.burger');

burgerIcon.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
});
