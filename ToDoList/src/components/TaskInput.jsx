import { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  // Função para lidar com a adição da tarefa
  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Insira a sua tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  );
}

export default TaskInput;


*/
