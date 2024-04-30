import { useState } from "react"
import './Todo.css'

function Todo() {
    const [task , setTask] = useState(""); 
    const [tasks , setTasks] = useState([]);
    
    function handleTask(e){
        setTask(e.target.value);
    }

    function handleTasks(){
        if(task.trim() === "") return;

        const newTodo = task;
        const isTaskAlreadyPresent = tasks.some(t => t === task);
        if(isTaskAlreadyPresent) return alert("Task already present");

        setTasks(a => [...a , newTodo]);
        setTask("");
    }
    
    function handleRemoveData(index){
        setTasks(a => a.filter((_ , i) => i !== index));
    }

    function moveUp(index){
        if(index ===  0) return 

        const updatedTasks = [...tasks];
        [updatedTasks[index - 1] , updatedTasks[index]] = [updatedTasks[index] , updatedTasks[index - 1]];
        setTasks(updatedTasks);
    }

    function moveDown(index){
        if(index === tasks.length - 1) return;

        const updatedTasks = [...tasks];
        [updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1] , updatedTasks[index]];
        setTasks(updatedTasks);
    }

    return (
        <div className="todo-app">
            <h1>TODO APP</h1>
            <div className="todo-container">
                <input className="todo-input" type="text" value={task} onChange={(e) => handleTask(e)}/>
                <button className="add-button" onClick={() => handleTasks()} disabled={!task}>Add</button>
            </div>
    
            <ul className="todo-list">
                {tasks.map((data , index)=>
                    <li className="todo-item" key={index}>
                        <span>{data}</span>
                        <div className="item-buttons">
                            <button onClick={() => handleRemoveData(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            </button>
                            <button onClick={() => moveUp(index)} disabled={!index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                                </svg>
                            </button>
                            <button onClick={() => moveDown(index)} disabled={(index === tasks.length - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                )}
            </ul>
    </div>
  )
}

export default Todo
