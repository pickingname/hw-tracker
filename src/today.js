// Function to add leading zeros to numbers less than 10
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  // Function to update the date and time
  function updateDateTime() {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date string
    const formattedDate = `${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()} ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}:${addLeadingZero(currentDate.getSeconds())}`;
  
    // Append the formatted date to the element with id "today"
    const todayElement = document.getElementById('today');
    todayElement.textContent = formattedDate;
  }
  
  // Define months array
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  // Initial update of date and time
  updateDateTime();
  
  // Update the date and time every 1 second
  setInterval(updateDateTime, 1000);
  