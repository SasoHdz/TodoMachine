import React from 'react';

import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Loading } from '../Loading';
import { TodoError } from '../TodoError';
import { TodoHome } from '../TodoHome';
import { Modal } from '../Modal';
import { EmptyTodoSearched } from '../EmptyTodoSearched';
import { ProgressTodos } from '../ProgressTodos';

function App() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodos, 
    deletedTodos,
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();

  return (
    <React.Fragment>

        <TodoHeader>
          <TodoCounter 
            completedTodos={completedTodos} totalTodos={totalTodos}
          />
          <ProgressTodos 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch 
            searchValue={searchValue} setSearchValue={setSearchValue}
          />
        </TodoHeader>

       <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchValue={searchValue}
          onError = {() => <TodoError/>}
          onLoading = {() => <Loading/>}
          onEmptyTodos={() => <TodoHome/>}
          onEmptyTodoSearched={(rearch) => <EmptyTodoSearched text={rearch}/>}
          render={todo => (
              <TodoItem 
              key={todo.text} 
              text = {todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodos(todo.text)}
              onDeleted = {() => deletedTodos(todo.text)}
            />
          )}
       />

       {!!openModal && (
         <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
         </Modal>
       )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
</React.Fragment>
);
}

export default App;
