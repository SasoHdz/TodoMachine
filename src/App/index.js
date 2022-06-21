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
import { Modal } from '../Modal'

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
          <TodoSearch 
            searchValue={searchValue} setSearchValue={setSearchValue}
          />
        </TodoHeader>

       <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError = {() => <TodoError/>}
          onLoading = {() => <Loading/>}
          onEmptyTodos={() => <TodoHome/>}
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

       {/* <TodoList>
         {error && <TodoError />} 
         {loading && <Loading />}
         {(!loading && !searchedTodos.length) && <TodoHome />}

         {searchedTodos.map( todo => (
           <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodos(todo.text)}
            onDeleted = {() => deletedTodos(todo.text)}
           />
         ))}
       </TodoList> */}

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
