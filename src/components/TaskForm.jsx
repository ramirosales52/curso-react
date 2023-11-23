import React, { useState } from 'react';
import '../styles/taskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: new Date().getTime(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;
