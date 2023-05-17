// Define the event details here yy/mm/dd
const events = [
    {
      name: "Holiday",
      date: new Date("2023-05-17")
    },
    {
      name: "Homework 4 due",
      date: new Date("2023-05-18")
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
  
  events.forEach(event => {
    if (isEventDay(event.date)) {
      todayEvents.push(event);
    }
  });
  if (todayEvents.length > 0) {
    todayEvents.forEach(event => {
      const eventSpan = document.createElement("span");
      eventSpan.textContent = `${event.name}, ${event.date.toLocaleDateString()}`;
      eventParagraph.appendChild(eventSpan);
      eventParagraph.appendChild(document.createElement("br")); // Add a line break
    });
  } else {
    eventParagraph.textContent = "No events today";
  }