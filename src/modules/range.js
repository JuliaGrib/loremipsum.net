let range = document.querySelector('.range');
let rangeValue = document.querySelector('.form__range-value');

range.addEventListener('input', setRange);

function setRange() {
  rangeValue.innerHTML = `${range.value}%`;
}

setRange();
