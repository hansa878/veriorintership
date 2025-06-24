let task=JSON.parse(localStorage.getItem("task"))||[];
function renderTask(){
const tasklist=document.getElementById('tasklist');
tasklist.innerHTML='';
tasklist.array.forEach((task,index)=> {
    const li=document.createElement('li');
    const span = document.createElement("span");
    span.textContent = task;
const deleteBtn = document.createElement("i");
    deleteBtn.className = "fa-solid fa-trash delete-btn";
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
});
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (value !== "") {
    tasks.push(value);
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
