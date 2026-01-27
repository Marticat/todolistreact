import { useState } from 'react';
import './TaskList.css';


function TaskList() {
    const [tasks, setTasks] = useState(["Testing", "SA", "Interview", "Article"]);
    const [inputTask, setInputTask] = useState("");

    const addTask = () => {
        if (inputTask.trim() === "") return;
        setTasks([...tasks, inputTask]);
        setInputTask("");
    };
    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => task !== taskToDelete));
    };
    const resetTasks = () => {
        setTasks([]);
    };
    return (
        <div className={"task-list-container"}>
            <h1>Task List</h1>
            <input
                type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                placeholder="Your task name"/>

            <button onClick={addTask}>Add Task [+]</button>
            <button onClick={resetTasks}>Reset every task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}
                        <button onClick={() => deleteTask(task)}>Delete Task [X]</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;