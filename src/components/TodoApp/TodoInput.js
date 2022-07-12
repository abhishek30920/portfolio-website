import React,{useState} from "react";
import { useTodoContext } from "./TodoContext";

export default function TodoInput () {

    const {todoList,setTodoList, currId, setCurrId,} = useTodoContext();
    const [todoInput, setTodoInput] = useState("");

    const handleInputChange = (event)=>{
        setTodoInput(event.target.value);
    }

    const handleInsertClick = () =>{
        let todoObj = {
            text:todoInput,
            done:false,
            id: currId
        }
        setTodoInput("");
        setCurrId(currId+1);
        setTodoList([...todoList,todoObj]);
    }

    return <section id="todo-input-wrapper">
        <input value={todoInput} placeholder="Item" type="text" onChange={handleInputChange}/>
        <button onClick={handleInsertClick}>Insert</button>
    </section>
}