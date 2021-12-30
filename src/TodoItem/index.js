import React from 'react';
import './TodoItem.css';
import { FiCheck } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";



function TodoItem(props) {

   const onClickQuestion = () => {
      //(!props.completed)? props
   }
   //Completa esta funcion
    return (
      <li className="TodoItem">
        <FiCheck
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick = {() => props.onComplete(props.text)}
        />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <FiXSquare
          className="Icon Icon-delete"
          onClick = {() => props.onDeleted(props.text)} 
        />
      </li>
    );
  }

export { TodoItem };
