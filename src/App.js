import Header from './components/header'
import Task from './components/Task'
import {useState} from 'react'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setshowAddTask] = useState(true)
  const [tasks, settasks] = useState(
    [
    {
        id: 1,
        text: 'travelling out tomorrow',
        day: 'friday march 30',
        Reminder: true,
    },
    {
        id: 2,
        text: 'Church program',
        day: 'thursday march 25',
        Reminder: true,
    },
    {
        id: 3,
        text: 'Heaven gates will soon open',
        day: 'wed march 24',
        Reminder: false,
    },
  ])
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
  
    const newTask = {id, ...task}
    settasks ([...tasks, newTask])
  
  }




  const deleteTask  = (id) => {
    settasks(tasks.filter((task) => task.id !==id))
  } 

  // toggle reminder
  const toggleReminder = (id) => {
    settasks(
     tasks.map((task) => task.id === id ? {
       ...task, reminder: !task.reminder
       } :task
     )
    )
   }

  return (
    <div className="container">
      <Header onAdd = {() => setshowAddTask(!showAddTask)} />
      { showAddTask &&<AddTask onAdd = {addTask}/>}
      <Task tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
