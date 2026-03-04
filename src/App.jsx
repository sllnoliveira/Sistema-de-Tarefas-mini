import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };
    const totalTasks = tasks.length;
const completedTasks = tasks.filter(task => task.completed).length;
const pendingTasks = totalTasks - completedTasks;
  return (
    <div className="App">
      <h1>Sistema de Tarefas</h1>
      

      <AddTask addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <div className="task-stats">
  <span>Total: {totalTasks}</span>
  <span>Concluídas: {completedTasks}</span>
  <span>Pendentes: {pendingTasks}</span>
</div>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Limpar Tarefas
        </button>
      )}
    </div>
  );
}

export default App;