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
    <div className='flex items-center p-12 mb-3 px-24 rounded-lg gap-3 flex-col bg-blue-300'>
      <h2>AGREGAR TAREA</h2>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
          required
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className='submitButton' type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default TaskForm;
