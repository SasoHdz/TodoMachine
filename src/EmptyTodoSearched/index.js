import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import './EmptyTodoSearched.css';

function EmptyTodoSearched(props){
    return (
        <div className="containerText">
            <p>No se encontraron resultados para </p>
            <p className="value">{props.text}</p>
            <BsFillExclamationTriangleFill className="iconSearch"/>
        </div>
    );
}

export { EmptyTodoSearched };