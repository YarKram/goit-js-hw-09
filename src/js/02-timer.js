// Описан в документации
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startTimerBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
  timerEl: document.querySelectorAll('.field'),
  valueEl: document.querySelectorAll('.value'),
  timer: document.querySelector('.timer'),
  inputDate: document.querySelector('#datetime-picker'),
};

// timer fields markup

refs.timerEl.forEach(el => {
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.marginRight = '15px';
});

refs.valueEl.forEach(el => {
  el.style.fontSize = '25px';
  el.style.fontWeight = 'semi-bold';
  el.style.display = 'flex';
  el.style.justifyContent = 'center';
});

refs.timer.style.display = 'flex';

refs.inputDate.style.fontSize = '15px';

refs.startTimerBtn.style.fontSize = '15px';
refs.startTimerBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  // added seconds to find if it is possible to dosplay value of timer to input value
  enableSeconds: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const countDownDay = selectedDates[0].getTime();

    refs.startTimerBtn.addEventListener('click', onTimerStartHandler);

    function onTimerStartHandler() {
      const decreasedTime = setInterval(() => {
        refs.startTimerBtn.disabled = true;
        const currentDate = new Date().getTime();
        const diff = countDownDay - currentDate;
        const convertedDifference = convertMs(diff);

        refs.dataDays.innerHTML = addLeadingZero(convertedDifference.days);
        refs.dataHours.innerHTML = addLeadingZero(convertedDifference.hours);
        refs.dataMinutes.innerHTML = addLeadingZero(
          convertedDifference.minutes
        );
        refs.dataSeconds.innerHTML = addLeadingZero(
          convertedDifference.seconds
        );

        function addLeadingZero(value) {
          return value.toString().padStart(2, '0');
        }

        if (diff <= 0) {
          clearInterval(decreasedTime);
          refs.dataDays.innerHTML = '00';
          refs.dataHours.innerHTML = '00';
          refs.dataMinutes.innerHTML = '00';
          refs.dataSeconds.innerHTML = '00';
          refs.startTimerBtn.disabled = false;
        }
      }, 1000);
    }

    if (new Date() >= selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startTimerBtn.disabled = false;
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
