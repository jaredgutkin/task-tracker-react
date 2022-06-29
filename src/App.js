import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


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
  console.log('delete', id)
}

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App;
