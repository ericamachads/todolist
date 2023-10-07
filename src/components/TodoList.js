import React, { useState } from 'react';

function TodoList() {
  // PT-BR: Estado para armazenar as tarefas
  // EN: State to store tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // PT-BR: Função para adicionar uma nova tarefa à lista
  // EN: Function to add a new task to the list
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // PT-BR: Função para remover uma tarefa da lista
  // EN: Function to add a new task to the list
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='todoList'>
      <h1>MY TO-DO LIST</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        className='task'
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='addTask' onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='removeTask' onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
