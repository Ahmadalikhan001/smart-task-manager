import './App.css'
import Header from './Header'
import TaskItem from './TaskItem'
function App() {
  return (
    <div>
      <Header />
      <h1>My Tasks</h1>
      <TaskItem
        title="Learn React"
        description="understand components and JSX"
      />

      <TaskItem
        title="Build the frontend"
        description="Create the Task manager Interface."
      />
      <TaskItem
        title="Learn The Backend"
        description="Understand APIS and Servers." />

    </div>
  )
}
export default App
