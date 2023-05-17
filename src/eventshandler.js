// Define the event details here yy/mm/dd
export const events = [
  {
    name: "Holiday",
    date: new Date("2023-05-17")
  },
  {
    name: "Homework 4 due",
    date: new Date("2023-05-19")
  },
  {
    name: "Homework 3 due",
    date: new Date("2023-05-18")
  },
  {
    name: "Homework 2 due",
    date: new Date("2023-05-23")
  },
  {
    name: "Homework 1 due",
    date: new Date("2023-05-18")
  }
];


function isEventDay(eventDate) {
  const today = new Date();
  return (
    today.getFullYear() === eventDate.getFullYear() &&
    today.getMonth() === eventDate.getMonth() &&
    today.getDate() === eventDate.getDate()
  );
}

const eventParagraph = document.getElementById("events");

const todayEvents = [];
let eventCounter = 0;

events.forEach(event => {
  if (isEventDay(event.date)) {
    todayEvents.push(event);
    eventCounter++;
  }
});

if (todayEvents.length > 0) {
  todayEvents.forEach(event => {
    const eventSpan = document.createElement("span");
    eventSpan.textContent = `${event.name}, ${event.date.toLocaleDateString()}`;
    eventParagraph.appendChild(eventSpan);
    eventParagraph.appendChild(document.createElement("br")); // Add a line break
  });

  const counterSpan = document.createElement("span");
  counterSpan.textContent = `Number of events happening today: ${eventCounter}`;
  eventParagraph.appendChild(counterSpan);
} else {
  eventParagraph.textContent = "There are no events today";
}
