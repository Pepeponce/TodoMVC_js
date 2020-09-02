import './styles.css';

import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';




const todoList = new TodoList();

const tarea = new Todo('Aprender JS!!');

todoList.nuevoTodo( tarea );

console.log(todoList);

crearTodoHtml(tarea);