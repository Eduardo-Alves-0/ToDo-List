import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

/*
    Define o estado para os componentes usando o negocio do hook, useState
        tasks: armazena a lista de tarefas (inicialmente um array vazio).
        setTasks: permite atualizar essa lista quando adicionamos ou removos alguma tarefa
    Toda vez que o estado muda, o react atualiza a tela para mostrar as novas alterasções 
*/
function App() {
  const [tasks, setTasks] = useState([]);

  /*
    A função addTask serve para adicionar uma nova tarefa na lista.
    - taskText: é o texto da tarefa que foi passada como parâmetro.

    Como funciona 
      Usa o spread operator (...tasks) para copiar as tarefas que já existem.
      Adiciona uma nova tarefa no final, com:
        text: o texto da tarefa que foi passado.
        completed: false, porque a tarefa começa como não concluída.
     Atualiza o estado das tarefas com setTasks, e o React cuida de atualizar a tela.
  */
  const addTask = (taskText) => { 
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  /*
    A função removeTask serve para remover uma tarefa da lista usando o índice dela.
         index: é o número que indica qual tarefa deve ser removida.
      Como funciona:
        Usa o método filter para criar uma nova lista (newTasks), deixando de fora a tarefa no índice indicado.
        Atualiza o estado tasks com essa nova lista, usando setTasks.
    Isso mantém o array original intacto e atualiza a tela automaticamente.

  */
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  
  /*
    A função addTask serve para adicionar uma nova tarefa na lista.
    taskText: é o texto da tarefa que queremos adicionar.
      Como funciona:
        Usamos o spread operator (...tasks) para garantir que as tarefas já existentes não sejam perdidas.
        Adicionamos a nova tarefa no final da lista, com o texto que passamos e com completed como false (a tarefa começa como não concluída).
        ai nos Atualiza o estado com setTasks para refletir a nova lista de tarefas.
  */
  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };
 
  /*
    A função addTask serve para adicionar uma nova tarefa na lista.
    taskText: é o texto da tarefa que queremos adicionar.

    Como funciona:
      Usamos o spread operator (...tasks) para garantir que as tarefas já existentes não sejam perdidas.
      Adicionamos a nova tarefa no final da lista, com o texto que passamos e com completed como false (a tarefa começa como não concluída).
      Atualizamos o estado com setTasks para refletir a nova lista de tarefas.
  */
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
