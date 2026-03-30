import React from "react";
import "../../styles/Todo.css";

const Todo = () => {
    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    );
}

export default Todo;