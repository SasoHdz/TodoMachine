import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
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
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
             <TodoList>
             {error && <p>Desesperate....</p>} 
             {loading && <p>Estamos cargando, no desesperes....</p>}
             {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
   
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
             <p>{searchedTodos[0].text}</p>
             </Modal>
           )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export { AppUI };
