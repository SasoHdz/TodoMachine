import React from "react";
import './TodoHome.css'
import { BsFillPlusSquareFill } from "react-icons/bs";

function TodoHome() {
    return (
        <div className="container">
            <p>! Crea tu primer ToDo ¡</p>
            <BsFillPlusSquareFill className="icon"/>
        </div>
    );
}

export { TodoHome };