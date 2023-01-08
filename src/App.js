import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Buy Soap',
            day: 'Jan 3, 2023 at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Clean Car',
            day: 'Jan 3, 2023 at 2:30pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Take out trash',
            day: 'Jan 3, 2023 at 3:30 pm',
            reminder: false,
        },
    ]);

    // Delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder } : task))
    };

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks}  onDelete= {deleteTask} onToggle = {toggleReminder} /> : 'No Task to show'}
    </div>
  );
}

export default App;
