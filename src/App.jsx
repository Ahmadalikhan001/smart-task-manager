// import { useState } from "react";

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Learn React", completed: false },
//     { id: 2, title: "Understand state", completed: false },
//   ]);

//   const [taskTitle, setTaskTitle] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();

//     const title = taskTitle.trim();

//     if (title === "") {
//       return;
//     }

//     const newTask = {
//       id: crypto.randomUUID(),
//       title: title,
//       completed: false,
//     };

//     setTasks((currentTasks) => [...currentTasks, newTask]);
//     setTaskTitle("");
//   }

//   function handleToggle(taskId) {
//     setTasks((currentTasks) =>
//       currentTasks.map((task) =>
//         task.id === taskId
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     );
//   }

//   function handleDelete(taskId) {
//     setTasks((currentTasks) =>
//       currentTasks.filter((task) => task.id !== taskId)
//     );
//   }

//   return (
//     <main>
//       <h1>Smart Task Manager</h1>
//       <p>Organize your work, one task at a time.</p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a new task"
//           value={taskTitle}
//           onChange={(event) => setTaskTitle(event.target.value)}
//         />

//         <button type="submit">Add Task</button>
//       </form>

//       <h2>My Tasks ({tasks.length})</h2>

//       {tasks.length === 0 ? (
//         <p>No tasks yet. Add your first task!</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>
//               <span
//                 style={{
//                   textDecoration: task.completed
//                     ? "line-through"
//                     : "none",
//                 }}
//               >
//                 {task.title}
//               </span>

//               <button
//                 type="button"
//                 onClick={() => handleToggle(task.id)}
//               >
//                 {task.completed ? "Undo" : "Complete"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => handleDelete(task.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert("Your name is: " + name);
  }

  return (
    <div>
      <h2>Enter Your Name</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
