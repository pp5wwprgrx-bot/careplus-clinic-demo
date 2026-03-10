document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})
document.getElementById("appointmentForm")
.addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("name").value
const date=document.getElementById("date").value

document.getElementById("confirmation").innerText=
"Thank you "+name+"! Your appointment request for "+date+" has been received."

})