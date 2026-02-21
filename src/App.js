import { useState } from "react";
function App() {
    
    const a = 5;
    let message; 

    const [count, setCount] = useState(0);

    const students = ["Anna", "Bob", "Charlie"];
    
   const [task, setTasks] = useState([]); // Store Task
   const [input, setInput] = useState(" "); // Store Input Value

   const addTask = () => {
    if  (input.trim() === "") return; // Prevent adding empty tasks
    setTasks([...task, input]); // Add new task to the list
    setInput(""); // Clear input field
   }

    const isLoggedIn = true;
   if(isLoggedIn)    
    {
        message = "Welcome back!"
    }
    else
    {
      message = "Please log in."
    }

    return (
      <>
     <h1>Hello, React!</h1>
     <p>a is equal to {a}</p>

  {/* Ternary Operator*/}
    <h2>{a > 5 ? "Welcome" : "Please Login."}</h2>

    <p>Count: {count}</p>

    <p>{message}</p>
    <button onClick = {() => setCount(count + 1)}>
        Increase
        </button>
    <button onClick = {() => setCount(count - 1)}>
        Decrease
    </button>
  <button onClick = {() => setCount(0)}> 
    Reset 
  </button>
 
 <ul>
  {students.map((students, index) => (
   <li key={index}>{students}</li>
  ))}
  </ul>


     </>
    );
}

export default App;