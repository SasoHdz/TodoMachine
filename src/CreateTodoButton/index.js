import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickCreateButton = () => {
      props.setOpenModal(!props.openModal);
    }

    return (
      <button 
        className= 'CreateTodoButton'
        onClick={onClickCreateButton}
      >
        +
      </button>
    );
}

export { CreateTodoButton };
