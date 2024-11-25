function showInputBox() {
    const modal = document.getElementById('inputModal');
    modal.style.display = 'flex'; // Show the modal
}

function closeInputBox() {
    const modal = document.getElementById('inputModal');
    modal.style.display = 'none'; // Hide the modal
}

function saveTask() {
    const taskTitle = document.getElementById('task-input').value.trim();
    const userInput = document.getElementById('userInput').value.trim();

    if (taskTitle === '' || userInput === '') {
        alert('Please enter both a task title and a valid time!');
        return;
    }

    // Validate time format (HH:MM AM/PM)
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](\s?[APap][Mm])?$/;
    if (!timeFormat.test(userInput)) {
        alert('Please enter time in a valid format (e.g., 10:30 AM)!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('div');
    newTask.className = 'task-item';

    newTask.innerHTML = `
        <p class="task-title">${taskTitle}</p>
        <p class="task-time">${userInput}</p>
    `;

    taskList.appendChild(newTask);

    document.getElementById('task-input').value = '';
    document.getElementById('userInput').value = '';
    closeInputBox();
}
