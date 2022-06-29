import React from 'react'
import { useLocalStorage } from './useLocalStorage';


function useTodos() {

    const {
        item: todos, 
        saveItem: saveTodos,
        reLoading: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      
      const [ searchValue, setSearchValue] = React.useState('');
      const [ openModal, setOpenModal] = React.useState(false);
      const [ openModalQuestion, setOpenModalQuestion] = React.useState(false);
    
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

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text
        });
    
        saveTodos(newTodos);
      }
    
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
    
        saveTodos(newTodos);
      }
    
      const deletedTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      };


    return (
        {
            loading,
            error,
            totalTodos,
            completeTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            deletedTodos,
            openModal,
            setOpenModal,
            addTodo,
            openModalQuestion,
            setOpenModalQuestion,
            sincronizeTodos
        }
    );
}


export { useTodos };