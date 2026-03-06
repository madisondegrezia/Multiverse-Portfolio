const buttons = document.querySelectorAll(".tab-button");
const projects = document.querySelectorAll(".project-content");

buttons.forEach(button => {

button.addEventListener("click", () => {

const projectId = button.dataset.project;

buttons.forEach(btn => btn.classList.remove("active"));
projects.forEach(project => project.classList.remove("active"));

button.classList.add("active");

document.getElementById(projectId).classList.add("active");

});

});
