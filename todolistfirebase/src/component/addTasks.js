import React, { useState } from "react";
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTasks = () => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== "") {
            await addDoc(collection(db, 'tasks'), {
                title,
                complited: false,
            })
            setTitle('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input_container">
                    <input 
                        type="text"
                        placeholder="Enter task"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="button_container">
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTasks
