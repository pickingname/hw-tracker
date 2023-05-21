console.time('countdown.js loaded Σ');

function cdr() {
    // Get the current date
    var currentDate = new Date();
    
    // Set the target date to May 28, 2023
    var targetDate = new Date("May 28, 2023 00:00:00");
    
    // Calculate the remaining time
    var remainingTime = targetDate.getTime() - currentDate.getTime();
    var remainingSeconds = Math.floor(remainingTime / 1000);
    var remainingMinutes = Math.floor(remainingSeconds / 60);
    var remainingHours = Math.floor(remainingMinutes / 60);
    var remainingDays = Math.floor(remainingHours / 24);
    
    // Format the remaining time
    var formattedTime = remainingDays + "d " + (remainingHours % 24) + "h " + (remainingMinutes % 60) + "m " + (remainingSeconds % 60) + "s";
    
    // Append the countdown to the specified element
    var countdownElement = document.getElementById("nextrefresh");
    countdownElement.innerHTML = formattedTime;
    
    // Update the countdown every second
    setTimeout(cdr, 1000);
  }
  
  // Start the countdown when the page is loaded
  window.onload = cdr;

console.timeEnd('countdown.js loaded Σ');