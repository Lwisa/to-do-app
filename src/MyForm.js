import React from "react";
import { useState } from "react";

function MyForm(){

    const [todo,setTodo] = useState('');
    const [todos, setTodos] =useState([]);

    const submit = (e) => {
      e.preventDefault();
      setTodos([...todos, todo]);
      setTodo('');
    }
    return(
       <div>
        <h1>My To-do List</h1>
        <form>
            <label>
                 <input input="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Enter text" />     
            </label>
            <button type="submit"onClick={submit} disabled={!todo}>Add Todo</button>
        </form>
        

        <ul>
        {todos && todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

        
        </div>

        
    )

}
export default MyForm;
             