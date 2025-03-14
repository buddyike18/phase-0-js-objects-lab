// attendeeManagement.js

// Declare and Initialize an Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Function to log the attendee's name
function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}

// Function to log the ticket price
function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

// Function to update the ticket type
function updateTicketType(attendeeObj, newTicketType) {
  attendeeObj.ticketType = newTicketType;
}

// Function to update the ticket price
function updateTicketPrice(attendeeObj, newTicketPrice) {
  attendeeObj.ticketPrice = newTicketPrice;
}

// Function to remove the event property
function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
}

// Function to add a checkedIn property with the value true
function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
}

// Exporting for testing purposes
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};
