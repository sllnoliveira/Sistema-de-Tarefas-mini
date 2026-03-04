function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">Nenhuma tarefa pendente.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">

            <button
  onClick={() => toggleTask(task.id)}
  className={`task-btn ${task.completed ? "completed" : ""}`}
>
  {task.completed ? "✔ " : ""}
  {task.text}
</button>

            <button
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
            >
              🗑
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;