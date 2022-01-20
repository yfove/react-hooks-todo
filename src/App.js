import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
 
  function handleSubmit(e) {
    e.preventDefault() //page will not refresh when submit
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo)) // spread operator copies data to new array
    setTodo("") //restore default value of empty string
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => <div>{todo.text}</div>)}
    </div>
  );
}


export default App;
