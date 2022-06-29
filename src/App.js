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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
