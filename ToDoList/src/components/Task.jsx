function Task({ task, index, removeTask, toggleComplete }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <button onClick={() => removeTask(index)}>Remover</button>
      </li>
    );
  }
  
  export default Task;
  



