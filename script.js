function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.className = 'taskItem';

      const taskText = document.createElement('span');
      taskText.textContent = taskInput.value;

      const completeBtn = document.createElement('button');
      completeBtn.className = 'completeTaskBtn';
      completeBtn.textContent = 'Complete';
      completeBtn.onclick = function() {
        taskText.style.textDecoration = 'line-through';
        completeBtn.disabled = true;
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'deleteTaskBtn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
      };

      taskItem.appendChild(taskText);
      taskItem.appendChild(completeBtn);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = '';
    }
  }

  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    clock.textContent = now.toLocaleDateString('en-US', options);
  }
  
  setInterval(updateClock, 1000);


  updateClock();