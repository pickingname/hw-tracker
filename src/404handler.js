// List of messages
const messages = [
    "What?",
    "How did we get here?",
    "Not found",
    "Invalid request"
  ];
  
  // Select a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // Get the element with the ID "randommessage"
  const randomMessageElement = document.getElementById("randommessage");
  
  // Append the random message to the element
  randomMessageElement.textContent = randomMessage;  