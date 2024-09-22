import React, { useState } from "react";

function ToDolist() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the input value for the new task
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask) {
      // Add new task to the tasks array, each task is an object with text, isFavorite, and isCompleted properties
      setTasks([...tasks, { text: newTask, isFavorite: false, isCompleted: false }]);
      // Clear the input field after adding the task
      setNewTask('');
    }
  };

  // Function to delete a task based on its index
  const deleteTask = (index) => {
    // Filter out the task to be deleted from the list
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle the favorite status of a task based on its index
  const toggleFavorite = (index) => {
    // Map over tasks and toggle isFavorite property for the task at the given index
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, isFavorite: !task.isFavorite } : task
    );
    setTasks(updatedTasks);
  };

  // Function to toggle the completion status of a task based on its index
  const toggleComplete = (index) => {
    // Map over tasks and toggle isCompleted property for the task at the given index
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  // Function to move a task up in the list
  const moveTaskUp = (index) => {
    if (index === 0) return; // If the task is already at the top, do nothing
    const updatedTasks = [...tasks];
    // Swap the task with the one above it
    [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
    setTasks(updatedTasks);
  };

  // Function to move a task down in the list
  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return; // If the task is already at the bottom, do nothing
    const updatedTasks = [...tasks];
    // Swap the task with the one below it
    [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        {/* Input field to enter a new task */}
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* Button to add the new task */}
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {/* Render each task in the list */}
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.isFavorite ? 'favorite' : ''} ${
              task.isCompleted ? 'completed' : ''
            }`}
          >
            {/* Task text, clicking on it toggles completion if not already completed */}
            <span
              onClick={() => !task.isCompleted && toggleComplete(index)}
              className={task.isCompleted ? 'task-text completed-text' : 'task-text'}
            >
              {task.text}
            </span>
            {/* Display 'Done' label if task is completed */}
            {task.isCompleted ? (
              <span className="done">Done</span>
            ) : (
              <div className="buttons">
                {/* Button to move the task up */}
                <button className="move-button" onClick={() => moveTaskUp(index)}>↑</button>
                {/* Button to move the task down */}
                <button className="move-button" onClick={() => moveTaskDown(index)}>↓</button>
              </div>
            )}
            {/* Button to delete the task */}
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            {/* Button to toggle favorite status if task is not completed */}
            {!task.isCompleted && (
              <button className="favorite-button" onClick={() => toggleFavorite(index)}>
                {task.isFavorite ? '★' : '☆'}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDolist;
