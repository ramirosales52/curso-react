import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className='h-screen grow bg-red-400 flex items-center flex-col'>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
