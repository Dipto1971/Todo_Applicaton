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

  console.log("rendering");
  // This will cause too many re renders because react will
  // keep on calling the useEffect as it is how the useEffect works
    setTodos({
        id: 1,
        title: "Go to Gym at: " + Math.random()* 1000,
        completed: true
      })

  return (
    <div>
        {todos.title}
        <br/>
        {todos.completed ? "Completed": "Not Completed"}
    </div>
  )
}
export default App_2;