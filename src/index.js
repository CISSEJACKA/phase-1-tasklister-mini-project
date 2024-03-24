document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;
    const taskElement = document.createElement("li");
    taskElement.textContent = taskDescription;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(taskElement);
    taskInput.value = "";
  });
});

