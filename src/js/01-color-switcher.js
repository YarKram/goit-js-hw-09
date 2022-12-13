const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

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
