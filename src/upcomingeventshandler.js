import { events } from './eventshandler.js';

const futureEventsDiv = document.getElementById("futureevents");

const currentDate = new Date();

const futureEvents = events.filter(event => event.date > currentDate);

console.log("Current Date:", currentDate);
console.log("Future Events:", futureEvents);

futureEvents.sort((a, b) => a.date - b.date);

if (futureEvents.length > 0) {
  const numberOfEventsToShow = 3;
  const eventsToShow = futureEvents.slice(0, numberOfEventsToShow);

  eventsToShow.forEach(event => {
    const countdown = Math.ceil((event.date - currentDate) / (1000 * 60 * 60 * 24));

    const eventSpan = document.createElement("span");
    eventSpan.innerHTML = `${event.name}, <code>${event.date.toLocaleDateString()}</code> (In: ${countdown}d)`;
    futureEventsDiv.appendChild(eventSpan);
    futureEventsDiv.appendChild(document.createElement("br"));
  });
} else {
  futureEventsDiv.textContent = "There are no events planned in the future";
}