import React from 'react';
import {useTodoContext} from "./TodoContext";
import Todo from "./Todo";

function TodoDisplay() {
    const {todoList} = useTodoContext();
    

  return (
    <section id="todo-display-wrapper">
        {todoList.map((element,index)=>{
            return <Todo key={index} todoObj={element}/>
        })}
    </section>
  )
}

export default TodoDisplay;