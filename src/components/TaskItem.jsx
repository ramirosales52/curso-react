import React, { useState } from 'react';
import '../styles/taskItem.css'

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <li className='bg-blue-400 mb-2 p-2 rounded-md gap-2' style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {task.id}
      {task.name}
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
