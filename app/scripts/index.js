import '../styles/main.styl';

const appEl = document.querySelector('.main-app');

const handleUpdate = ({ target: { dataset, name, value } }) => {
  const spacing = dataset.spacing || '';
  appEl.style.setProperty(`--${name}`, `${value}${spacing}`);
};

const updateInputValue = input => {
  const parsedValue = getComputedStyle(appEl).getPropertyValue(`--${input.name}`);
  const { spacing } = input.dataset;
  const formatedValue = spacing ? Number.parseInt(parsedValue, 10).toString() : parsedValue.trim();
  input.value = formatedValue;
};

const inputs = document.querySelectorAll('.main-app__input');

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
  updateInputValue(input);
});
