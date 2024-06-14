import React from "react";
import { useEffect } from "react";

function App_2() {
  const [todos, setTodos] = React.useState(
      {
        id: 1,
        title: "Go to Gym",
        completed: true
      }
  );
  console.log(todos);

  setInterval(() => {
    setTodos({
        id: 1,
        title: "Go to Gym at: " + Math.random()* 1000,
        completed: true
      })
  }, 1000)

  return (
    <div>
        {todos.title}
        <br/>
        {todos.completed ? "Completed": "Not Completed"}
    </div>
  )
}
export default App_2;