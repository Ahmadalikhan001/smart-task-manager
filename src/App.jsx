import './App.css'
import Header from './Header'
import Header1 from './Header1'
import TaskItem from './TaskItem'
function App() {
  return (
    <div>
      <Header
        Name="Pakistan" />
      <h1>My Tasks</h1>
      <TaskItem
        title="Learn React"
        description="understand components and JSX"
        avalable="Yes"
      />

      <TaskItem
        title="Build the frontend"
        description="Create the Task manager Interface."
        avalable="No"
      />
      <TaskItem
        title="Learn The Backend"
        description="Understand APIS and Servers."
        avalable="yes"
      />
      {/* <Header1
        country="Pakistan" /> */}
    </div>
  )
}
export default App
