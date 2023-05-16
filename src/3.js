// Set the target date for the countdown (YYYY-MM-DD format)
const targetDate = '2023-05-18';

const countdownElement = document.getElementById('cdw-3');

function updateCountdown() {
  const currentDate = new Date();
  const remainingTime = new Date(targetDate) - currentDate;
  const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

  if (remainingDays > 2) {
    countdownElement.style.color = 'green';
    countdownElement.textContent = remainingDays + ' days left';
  } else if (remainingDays > 1) {
    countdownElement.style.color = 'orange';
    countdownElement.textContent = remainingDays + ' days left';
  } else if (remainingDays > 0) {
    countdownElement.style.color = 'red';
    countdownElement.textContent = remainingDays + ' day left';
  } else {
    countdownElement.style.color = 'grey';
    countdownElement.textContent = 'EXPIRED';
  }
}

updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);