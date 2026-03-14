document.getElementById("appointmentForm")
.addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const date=document.getElementById("date").value
const doctor=document.getElementById("doctor").value

let message =
"Hello, I want to book an appointment.%0A"+
"Name: "+name+"%0A"+
"Email: "+email+"%0A"+
"Date: "+date+"%0A"+
"Doctor: "+doctor

window.open("https://wa.me/971564663842?text="+message)

})
