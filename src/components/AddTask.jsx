import { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="add-btn" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default AddTask;