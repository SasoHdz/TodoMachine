import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { FiRotateCcw } from "react-icons/fi";


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState(''); 
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);    
    };

    return(
        <form
        onSubmit = {onSubmit}
        >  
            <label>Crea un nuevo ToDo 😃</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder="Cortar cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    <FiRotateCcw className="iconCancel" />
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };