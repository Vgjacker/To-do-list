function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Toggle complete on click
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.className = "delete-btn";
    delBtn.onclick = (e) => {
      e.stopPropagation(); // prevent mark-complete on delete
      li.remove();
    };
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
