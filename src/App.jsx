import React from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = React.useState(
    [
      {
        id: 1,
        title: "Go to Gym",
        completed: true
      },
      {
        id: 2,
        title: "Go to Class",
        completed: false
      },
    ]
  );
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} completed={todo.completed}> </Todo>
      })}
      </div>
  )
}

function Todo(props) {
  // Components need props as an input
  return (
    <div style={{backgroundColor: "red"}}> 
      <h3>{props.title}</h3>
      <h3>{props.completed ? "Completed": "Not Completed"}</h3>
    </div>
  )
}

export default App;