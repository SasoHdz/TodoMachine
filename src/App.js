import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de introduccion a react', completed: false },
  { text: 'Leer platzi', completed: false },
]

function App(props) {
  return (
    <React.Fragment>
       <TodoCounter />
       <TodoSearch />
        <TodoList>
          {todos.map( todo => (
            <TodoItem key={todo.text} text = {todo.text}/>
          ))}
        </TodoList>
        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
