import './styles.css';

import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );


// todoList.todos[0].imprimirClase();
// newTodo.imprimirclase();

console.log('todos', todoList.todos );