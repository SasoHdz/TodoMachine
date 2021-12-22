import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

//import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de introduccion a react', completed: false },
  { text: 'Leer platzi', completed: true },
  { text: 'Tomar curso de introduccion a SASS', completed: false },
  { text: 'Leer beek', completed: true },
]

function App(props) {
  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [ searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if(!searchValue >= 1){
    searchedTodos = todos;
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  }

  const deletedTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
       <TodoCounter
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
       />
       <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
       />
        <TodoList>
          {searchedTodos.map( todo => (
            <TodoItem 
             key={todo.text} 
             text = {todo.text}
             completed={todo.completed}
             onComplete = {() => completeTodos(todo.text)}
             onDeleted = {() => deletedTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
