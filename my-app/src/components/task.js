import React from "react"
import "./task.css"
import trashpng from "../assets/trash.png"

const Task = ({data, setCheck, deleteTask}) => {
    return (
        <div className={ data.isDone === true ? "taskIsDone" : "task"}>
            <input type="checkbox" checked={data.isDone} onChange={() => setCheck(data.id)}></input>
            <div>{data.text}</div>
            <div>{data.date}</div>
            <button className="trash-can" onClick={() => deleteTask(data.id)}>
                <img alt="" src={trashpng}></img>
            </button>
        </div>
    )
}
export default Task