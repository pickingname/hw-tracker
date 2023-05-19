// List of messages
const messages = [
    "What?",
    "<p class='text-purple-500'>How did we get here?</p>",
    "Not found",
    "Invalid request",
    "Nah, this website is way too hard",
    "GET http://localhost/[object%20Event] 404 (Not Found)",
    "Uh oh"
  ];
  
  const randomMessageElement = document.getElementById("randommessage");
  
  let shuffledMessages = messages.slice();
  shuffleArray(shuffledMessages);
  
  let messageIndex = 0;
  randomMessageElement.innerHTML = shuffledMessages[messageIndex];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function transitionRandomMessage() {
    randomMessageElement.style.opacity = 0;
  
    setTimeout(() => {
      messageIndex++;
  
      if (messageIndex === shuffledMessages.length) {
        // Reshuffle the messages array
        shuffleArray(shuffledMessages);
        messageIndex = 0;
      }
  
      const randomMessage = shuffledMessages[messageIndex];
  
      randomMessageElement.innerHTML = randomMessage;
  
      randomMessageElement.style.opacity = 1;
    }, 500);
  }
  
  setInterval(transitionRandomMessage, 10000);