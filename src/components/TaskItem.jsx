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

  const fecha = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const hora = {
    hour: 'numeric',
    minute: 'numeric'
  }

  return (
    <li className='bg-blue-300 blue-100 mb-2 py-4 px-12 rounded-md gap-8 max-w-2xl h-36 flex justify-between items-center' style={{ opacity: isCompleted ? '.7' : '1' }}>
      <div className='flex flex-col items-center'>
        <p>{new Date(task.id).toLocaleDateString(undefined, fecha)}</p>
        <p>{new Date(task.id).toLocaleTimeString(undefined, hora)}</p>
      </div>
      <div className='flex items-center max-h-40 h-full overflow-y-auto whitespace-pre-wrap w-96' style={{wordBreak: 'break-word'}}>
        <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task.name}</p>  
      </div>
      <div className='flex flex-col'>
        <button onClick={handleComplete}>{isCompleted ? "Cancelar" : "Completar" }</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </li>
  );
};

export default TaskItem;

