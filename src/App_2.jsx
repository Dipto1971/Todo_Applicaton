import React from "react";
import { useEffect } from "react";

var ctr =`0`;
function App_2() {
  const [todos, setTodos] = React.useState(
      {
        id: 1,
        title: "Go to Gym",
        completed: true
      }
  );

  console.log("rendering");
  // In react, rendering happens again and again
  // That's why setTimeout is occuring again and again
  
  if(ctr === `0`){
    setTimeout(() => {
      setTodos({
          id: 1,
          title: "Go to Gym at: " + Math.random()* 1000,
          completed: true
        })
    }, 1000);

    ctr = 1;
  }

  // This is a naive solution to avoid multiple rendering
  // By this way, we can avoid multiple rendering
  // Only when ctr === 0, it will render. Else it will not render

  return (
    <div>
        {todos.title}
        <br/>
        {todos.completed ? "Completed": "Not Completed"}
    </div>
  )
}
export default App_2;