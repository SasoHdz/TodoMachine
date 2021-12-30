import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { TodoQuestion } from '../TodoQuestion';
import { CreateTodoButton } from '../CreateTodoButton';
import { Loading } from '../Loading';
import { TodoError } from '../TodoError';
import { TodoHome } from '../TodoHome';
import { Modal } from '../Modal'


function AppUI() {
    const { 
      error, 
      loading, 
      searchedTodos, 
      completeTodos, 
      deletedTodos,
      openModal,
      setOpenModal,
      openModalQuestion,
      setOpenModalQuestion
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
             <TodoList>
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
           </TodoList>
           {!!openModal && (
             <Modal>
                <TodoForm />
             </Modal>
           )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
    </React.Fragment>
    );
}
//Buscando como abrir openModalQuestion
export { AppUI };
