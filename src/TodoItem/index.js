import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

   const onClickDelete = (msg) => {
      alert("Delete todo "+msg)
   }

    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick = {() => props.onComplete(props.text)}
        >
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick = {() => props.onDeleted(props.text)}
        >
          X
        </span>
      </li>
    );
  }

export { TodoItem };
