import React from 'react';
import TaskItem from './TaskItem';
import '../styles/taskList.css'

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <h2>LISTA DE TAREAS</h2>
      {tasks.length !== 0 ? (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskComplete={onTaskComplete}
              onTaskDelete={onTaskDelete}
            />
          ))}
        </ul>
      ) : (
        <h1>No hay tareas</h1>
      )}
    </div>
  );
};

export default TaskList;
