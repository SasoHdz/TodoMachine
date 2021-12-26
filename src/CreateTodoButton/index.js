import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickCreateButton = () => {
      alert("I have new todo");
    }

    return (
      <button 
        className="CreateTodoButton"
        onClick={onClickCreateButton}
      >
        +
      </button>
    );
}

export { CreateTodoButton };
