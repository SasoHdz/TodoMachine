import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

   const onClickCheck = (msg) => {
      alert("Check todo "+ msg)
   }

   const onClickDelete = (msg) => {
      alert("Delete todo "+msg)
   }

    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick = {() => onClickCheck(props.text)}
        >
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick = {() => onClickDelete(props.text)}
        >
          X
        </span>
      </li>
    );
  }

export { TodoItem };
