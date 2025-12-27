import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";

import TodoNew from "./components/todo/TodoNew";
import TodoTile from "./components/todo/TodoTile";
import ReactLogo from "./assets/react.svg";
const App = () => {
 
  const Name = "Nhat";
  const Age = "21"

  return (
  <>
  <div className="todo-container" >
    <TodoTile/>
    <TodoNew/>
    <TodoData
       Name = {Name}
       Age = {Age}
    /> 
    <div className="todo-image">
      <img src={ReactLogo} alt="" />
    </div>
  </div>
  </>
  )
}

export default App
