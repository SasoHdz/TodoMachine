import React from 'react';
import './TodoItem.css';
import { BsFillTrashFill } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";


function TodoItem(props) {

   const onClickQuestion = () => {
      //(!props.completed)? props
   }
   //Completa esta funcion
    return (
      <li className="TodoItem">
        <BsBookmarkCheck
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick = {() => props.onComplete(props.text)}
        />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <BsFillTrashFill
          className="Icon Icon-delete"
          onClick = {() => props.onDeleted(props.text)} 
        />
      </li>
    );
  }

export { TodoItem };
