import React from 'react';
import './App.css';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';

import { useSelector } from "react-redux";
import {selectTodoList} from "./features/todoSlice";

function App() {
   const todoList = useSelector(selectTodoList)



  return (
    <div className="app">
    <h2 className="app__text">Todo App</h2>
    <div className="app__container">
      <div className="app__todo-container">
         {todoList.map((item) => (
           <ToDoItem 
            name={item.item}
            done={item.done}
            id={item.id}
           
            />
         ))}

      </div>

      <Input />
    </div>
    </div>
  );
}

export default App;
