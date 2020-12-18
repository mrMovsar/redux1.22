import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { del } from "./actions"
function App(props) {
  const todos = useSelector(state => state)
  
  const dispatch = useDispatch();
  const handleDelete = (index) =>{
    dispatch(del(index))
  }
  return (
    todos.map((todo, i) =>{
      return(
        <div>
          {todo.title}
          <div><button onClick={() => handleDelete(i)}> Delete </button> </div>
        </div>
        )}) 
  );
}

export default App;
