import React, {useContext, useState} from "react";

let TodoContext = React.createContext();

export function useTodoContext(){
    return useContext(TodoContext);
}

export function TodoContextProvider({children}){

    const[todoList,setTodoList] = useState([]);
    const [currId, setCurrId] = useState(0);

    const filterTodoList = (id)=>{
        let filteredList = todoList.filter((curr)=>{
            return id!==curr.id
        })
        setTodoList(filteredList);
    }

    const markTodoItem = (id) =>{
        let output = [];
        for(let i=0;i<todoList.length;i++){
            output[i] = todoList[i];
            if(output[i].id==id){
                output[i].done = !output[i].done;
            }
        }
        setTodoList(output);
    }


    let value={
        todoList,
        setTodoList,
        currId,
        setCurrId,
        filterTodoList,
        markTodoItem
    }

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
}