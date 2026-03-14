// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const section = document.querySelector(this.getAttribute("href"));

section.scrollIntoView({
behavior: "smooth"
});

});

});


// Appointment booking → WhatsApp
const form = document.getElementById("appointmentForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const date = document.getElementById("date").value;
const doctor = document.getElementById("doctor").value;
const time = document.getElementById("time").value;

let message =
"Hello, I want to book an appointment.%0A" +
"Name: " + name + "%0A" +
"Email: " + email + "%0A" +
"Doctor: " + doctor + "%0A" +
"Date: " + date + "%0A" +
"Time: " + time;

window.open("https://wa.me/971564663842?text=" + message);

});

}
