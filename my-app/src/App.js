import './App.css';
import Header from './components/header';
import Task from './components/task';
import Input from "./components/input"
import Button from "./components/button"
import React, { useState } from "react"

const App = React.memo(() => {

    const currentTime = `${new Date().getUTCDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`

    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')

    const createTask = () => {

      const task = {
        id: Date.now(),
        text: text,
        isDone: false,
        date: currentTime
      }
      if(text !== "") {
        setTasks(tasks => [...tasks, task])
      }
      setText("")
    }

    const setIsDone = (id) => {
      tasks.map( (task) => {
        if (task.id === id) {
          task.isDone = !task.isDone
        }
      })
      setTasks(tasks => [...tasks])
    }

    const onDeleteTask = (id) => {
      let taskOnDelete = tasks.filter( (task) => task.id !== id)
      setTasks(taskOnDelete)
    }
    
  return (
    <div className="app">
      <div className='container'>
        <Header />
        <div className="wrapper">
          <Input onChange={ (event)=> setText(event.target.value) } value={text}/>
          <Button onClick={ createTask } />
        </div>
        <div className="tasks">
            {
              tasks.map(task => <Task 
                key={task.id}
                data={task}
                setCheck={ (id) => setIsDone(id)}
                deleteTask={ (id) => onDeleteTask(id)}/>)
              }
        </div>
      </div>
    </div>
  );
})

export default App;
