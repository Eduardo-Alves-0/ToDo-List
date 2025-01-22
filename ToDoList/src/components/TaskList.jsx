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


/*
  Esse componente é onde a lista de tarefas é exibida.
  Ele recebe a lista de tarefas (tasks), a função para remover a tarefa (removeTask) e a função para alternar o estado da tarefa (toggleComplete).
  O que ele faz:
  Cria uma lista de itens (<ul>).
  Para cada tarefa em "tasks", ele cria um componente <Task> (que é o componente que mostra cada tarefa individualmente).
  Cada <Task> recebe:
  A chave (key) com o índice da tarefa (para o React identificar cada item de forma única).
  O índice, a tarefa, e as funções de remover e alternar o estado da tarefa.
  Isso vai gerar uma lista com todos os componentes de tarefas que o usuário tem.
*/