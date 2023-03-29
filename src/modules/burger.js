const burgerIcon = document.querySelector('.burger-icon');
const burger = document.querySelector('.burger');
const burgerElem = document.querySelectorAll('.burger__list-elem');

burgerIcon.addEventListener('click', showBurger);
burgerElem.forEach((elem) => elem.addEventListener('click', showBurger));

function showBurger() {
  burger.classList.toggle('burger_active');
  document.body.classList.toggle('overflow');
}
