import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const useTodo=()=>useContext(TodoContext)

export const TodoProvider = TodoContext.Provider