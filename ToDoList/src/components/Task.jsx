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
  

  /*
  Esse componente é a tarefa que aparece na lista.
  Ele recebe a tarefa (task), o índice dela (index), e duas funções: removeTask e toggleComplete.
  Dentro dele, temos:
  Um checkbox (caixinha de marcar) que, se a tarefa estiver marcada como "completa", ela fica marcada.
  Quando clica nele, ele chama a função toggleComplete e passa o índice da tarefa pra alternar se ela está concluída ou não.
  Um <span> que mostra o texto da tarefa. Se a tarefa estiver completada, o texto fica riscado.
  Um botão "Remover" que, quando clicado, chama a função removeTask com o índice da tarefa pra remover ela da lista.
   */