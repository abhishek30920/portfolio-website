import React, { useState } from "react";
import "./styles/Todo.css";
import { useTodoContext } from "./TodoContext";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Clear from "@mui/icons-material/Clear";

//CheckCircle clear
function Todo({ todoObj }) {
    const { filterTodoList, markTodoItem } = useTodoContext();
    const handleTodoDelete = () => {
        filterTodoList(todoObj.id);
    };

    const handleTodoMark = () => {
        markTodoItem(todoObj.id);
    };

    return (
        <section id="todo-wrapper">
            <span className={todoObj.done ? "strike-todo" : ""}>{todoObj.text}</span>
            <section>
                <CheckCircle style={{marginRight:"10px", cursor:"pointer"}} onClick={handleTodoMark} color={todoObj.done ? "success" : ""} />
                <Clear onClick={handleTodoDelete} style={{cursor:"pointer"}}/>
            </section>
        </section>
    );
}

export default Todo;
