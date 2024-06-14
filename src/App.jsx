import React from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = React.useState(
    // 
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
      {
        id: 3,
        title: "Go to Work",
        completed: true
      }
    ]
  );
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} completed={todo.completed}> </Todo>
      })}
      {
        <Todo title = "Call Todo Component directly" completed = {true}></Todo>
      }
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

// Definition of a component: A function that returns JSX (HTML in JS) 
// JSX is a syntax extension for JavaScript recommended by React
// Why we need Components:
// 1. Reusability
// 2. Maintainability
// 3. Composability
// 4. Readability
// 5. Scalability
// 6. Testability

// Components can be of two types:
// 1. Functional Components
// 2. Class Components

// Functional Components: Components that are defined as functions
// Class Components: Components that are defined as classes


export default App;