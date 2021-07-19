
import { useState } from "react"
import Header from "./components2/Header"
import Tasks from "./components2/Tasks"
import AddTask from "./components2/AddTask"
const App2 = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text:  'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text:  'Meeting at school',
            day: 'Feb 6th at 11:30pm',
            reminder: true,
        },
        {
            id: 3,
            text:  'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ])
    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000)+1;

    }
    //delete Task
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task) => task.id !== id))
    }
    // toggle Reminder
    const toggleReminder = (id) =>{
        setTasks(
            tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
        )
    }
    return (
        <div className = "container">
            <Header />
            <AddTask onAdd = {addTask} />
            {tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
        </div>
    )
}
export default App2
