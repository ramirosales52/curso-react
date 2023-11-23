import React from 'react';
import TaskItem from './TaskItem';
import '../styles/taskList.css'

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
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
    </div>
  );
};

export default TaskList;
