import React from "react";
import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";

function TodoApp() {

    return <section className="todo-app-wrapper">
        <h1>Make Shopping List</h1>
        <TodoDisplay />
        <TodoInput />
    </section>;
}

export default TodoApp;
