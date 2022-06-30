import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 3,
        text: 'food shopping',
        day: 'Feb 5th',
        reminder: false,
    }
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header />
      <AddTask/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />) : (
        'No tasks To show'
        )}
    </div>
  )
}

export default App;
