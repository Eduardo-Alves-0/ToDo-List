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


/*
Esse é o componente onde a gente digita e adiciona uma nova tarefa.
Ele usa o hook useState pra guardar o que é digitado no input (campo de texto).
função handleAddTask é chamada quando clica no botão "Adicionar":
Se a tarefa não estiver vazia (a gente usa trim() pra garantir que não seja só espaço), ele chama a função addTask passando o texto da tarefa.
Depois limpa o campo de texto (setTask('')).
Dentro do JSX, temos:
Um campo de texto (<input>) onde o usuário digita a tarefa. A cada letra digitada, o valor de "task" é atualizado.
Um botão "Adicionar" que, quando clicado, chama a função handleAddTask pra adicionar a tarefa.

*/