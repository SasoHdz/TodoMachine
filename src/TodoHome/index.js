import React from "react";
import './TodoHome.css'
import { FiThumbsUp } from "react-icons/fi";

function TodoHome() {
    return (
        <div className="container">
            <p>! Crea tu primer ToDo ¡</p>
            <FiThumbsUp className="icon"/>
        </div>
    );
}

export { TodoHome };