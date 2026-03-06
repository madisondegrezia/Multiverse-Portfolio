// SECTION TOGGLE (About / Projects)

const navButtons = document.querySelectorAll(".nav-button")
const sections = document.querySelectorAll(".section")

navButtons.forEach(button => {

button.addEventListener("click", () => {

navButtons.forEach(btn => btn.classList.remove("active"))
sections.forEach(section => section.classList.remove("active"))

button.classList.add("active")

const target = button.dataset.section
document.getElementById(target).classList.add("active")

})

})

// PROJECT TAB SWITCHING

const projectButtons = document.querySelectorAll(".tab-button")
const projectContents = document.querySelectorAll(".project-content")

projectButtons.forEach(button => {

button.addEventListener("click", () => {

projectButtons.forEach(btn => btn.classList.remove("active"))
projectContents.forEach(content => content.classList.remove("active"))

button.classList.add("active")

const target = button.dataset.project
document.getElementById(target).classList.add("active")

})

})
