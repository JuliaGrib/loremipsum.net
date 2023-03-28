const range = document.querySelector('.range');
const rangeValue = document.querySelector('.form__range-value');

range.addEventListener('input', setRange);

function setRange() {
  rangeValue.innerHTML = `${range.value}%`;
}

setRange();
