import React from "react";

import './ProgressTodos.css';

function ProgressTodos({totalTodos,completedTodos,loading}){
    return (
        <progress className={`progressBar ${loading && "progressBar-loading"}`} max={totalTodos} value={completedTodos}>
            {completedTodos+"%"}
        </progress>
    );
}

export {ProgressTodos};