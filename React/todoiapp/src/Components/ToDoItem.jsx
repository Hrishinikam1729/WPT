import React from "react";
import '../style.css';

const ToDoItem = () => {return (
    <li className="todoitem">
        <input type="checkbox" />
        <p>Eat</p>
        <p>...</p>
    </li>
);
}

export default ToDoItem;