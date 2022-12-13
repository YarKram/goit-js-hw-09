const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const button = document.querySelectorAll('button');
const body = document.body;
console.log(button);

startBtn.style.marginLeft = '50%';
startBtn.style.marginTop = '50%';

button.forEach(el => {
  el.style.textTransform = 'uppercase';
  el.style.backgroundColor = 'white';
  el.style.padding = '20px';
  el.style.fontSize = '20px';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyChangeColor() {
  return (body.style.backgroundColor = getRandomHexColor());
}

let intervalChangeColor = null;

function changeColorWithInterval() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  bodyChangeColor();

  intervalChangeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick() {
  clearInterval(intervalChangeColor);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

startBtn.addEventListener('click', changeColorWithInterval);
stopBtn.addEventListener('click', onStopClick);

console.log(intervalChangeColor);
