import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";

import TodoNew from "./components/todo/TodoNew";
import TodoTile from "./components/todo/TodoTile";
import ReactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
 
  const [todoList,setTodoList] = useState([
    // {id: 1, name:"Tôi đang học React"},
    //  {id: 2, name:"Tôi đang học IT"}
  ]);

   const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  const AddNewTodo = (name) =>{
    const newTodo = {
      id:randomIntFromInterval(1,100000),
      name: name
    }
    setTodoList([...todoList,newTodo])

  }
  const deleteTodo = (id) =>{
    const newTodo = todoList.filter((item) => {
      return (
        item.id !== id
      )
    })
   setTodoList(newTodo);
  }
  return (
  <>
  <div className="todo-container" >
    <TodoTile/>
    <TodoNew
       AddNewTodo ={AddNewTodo}
    />
    {todoList.length > 0 ? 
     <TodoData
       todoList = {todoList}
       deleteTodo ={deleteTodo}
    /> 
    :
      <div className="todo-image">
        <img src={ReactLogo} alt="" />
      </div>
    }
   
   
   
  </div>
  </>
  )
}

export default App
