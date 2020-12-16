import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App(props) {
  const todos = useSelector(state => state)
  const dispatch = useDispatch();
  const handleDelete = (index) =>{
    dispatch({
      type: "delete",
      payload: index
    })
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
