import { useState } from "react";

const TodoNew = (props) =>{
    const {AddNewTodo} = props;
    const [valueInput,setValueInput] = useState("1st")
     const HandleClick = () =>{
       AddNewTodo(valueInput);
       setValueInput("");
    }
    const HandleOnChange = (name) =>{
        
        setValueInput(name);

    }
    return (
        <>
         <div className="todo-new">
            <input type="text" placeholder="Enter Your Task" 
            onChange= {(event) => HandleOnChange(event.target.value) }
            value = {valueInput}
            />
            <button onClick={HandleClick} >Add</button>
            <div>My Name is {valueInput}</div>
         </div>
        
        </>
    )
}
export default TodoNew;