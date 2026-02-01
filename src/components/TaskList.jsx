import { useState, useEffect } from "react";
import "./TaskList.css";

function TaskList() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved
            ? JSON.parse(saved)
            : [
                { text: "Interview", isDone: false },
                { text: "Article", isDone: false },
            ];
    });

    const [inputTask, setInputTask] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (inputTask.trim() === "") return;
        setTasks([...tasks, { text: inputTask, isDone: false }]);
        setInputTask("");
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => task !== taskToDelete));
    };

    const resetTasks = () => {
        setTasks([]);
    };

    const toggleTask = (taskToToggle) => {
        setTasks(
            tasks.map((task) =>
                task === taskToToggle ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    return (
        <div className="task-list-container">
            <h1>Task List</h1>

            <input
                type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                placeholder="Your task name"
            />

            <button onClick={addTask}>Add Task [+]</button>
            <button onClick={resetTasks}>Reset every task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.isDone ? "done" : ""}>
                        {task.text}
                        <button onClick={() => toggleTask(task)}>
                            {task.isDone ? "Mark as undone [X]" : "Mark as done [V]"}
                        </button>
                        <button onClick={() => deleteTask(task)}>Delete [🗑]</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
