// Import the events from the eventshandler.js module
import { events } from './eventshandler.js';


function isEventDay(eventDate) {
  const today = new Date();
  return (
    today.getFullYear() === eventDate.getFullYear() &&
    today.getMonth() === eventDate.getMonth() &&
    today.getDate() === eventDate.getDate()
  );
}


const futureEventsDiv = document.getElementById("futureevents");


const futureEvents = events.filter(event => event.date > new Date());


futureEvents.sort((a, b) => a.date - b.date);


if (futureEvents.length > 0) {
  const numberOfEventsToShow = 3;
  const eventsToShow = futureEvents.slice(0, numberOfEventsToShow);

  eventsToShow.forEach(event => {
    const countdown = Math.ceil((event.date - new Date()) / (1000 * 60 * 60 * 24));

    const eventSpan = document.createElement("span");
    eventSpan.innerHTML = `${event.name}, <code>${event.date.toLocaleDateString()}</code> (In: ${countdown}d)`;
    futureEventsDiv.appendChild(eventSpan);
    futureEventsDiv.appendChild(document.createElement("br"));
  });
} else {
  futureEventsDiv.textContent = "There are no events planned in the future";
}