const select = document.querySelector('.select');
const selectDesc = document.querySelector('.select__desc');
const selectCurrent = document.querySelector('.select__current');
const selectBody = document.querySelector('.select__body');
const selectElems = document.querySelectorAll('.select__item');
const selectIcon = document.querySelector('.select__icon');

select.addEventListener('click', showSelect);

function showSelect() {
  select.classList.toggle('select_active');
  selectCurrent.classList.toggle('select__current_active');
  selectBody.classList.toggle('select__body_active');
  selectIcon.classList.toggle('select__icon_active');
}

selectElems.forEach((item) => {
  item.addEventListener('click', setSelectCurrent);
});

function setSelectCurrent() {
  const text = this.innerHTML;
  selectCurrent.innerText = text;
}
