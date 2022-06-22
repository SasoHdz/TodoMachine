import React from "react";

import './ProgressTodos.css';

function ProgressTodos(props){
    return (
        <progress max={props.totalTodos} value={props.completedTodos}>
            {props.completedTodos+"%"}
        </progress>
    );
}

export {ProgressTodos};