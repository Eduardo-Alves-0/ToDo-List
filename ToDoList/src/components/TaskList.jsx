import Task from './Task';

function TaskList({ tasks, removeTask, toggleComplete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
