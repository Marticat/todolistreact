import { useState, useEffect } from "react";
import "./TaskList.css";

function TaskList() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved
            ? JSON.parse(saved)
            : [
                { id: 1, text: "Interview", isDone: false },
                { id: 2, text: "Article", isDone: false },
            ];
    });

    const [inputTask, setInputTask] = useState("");
    const [removingId, setRemovingId] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!inputTask.trim()) return;
        setTasks([
            ...tasks,
            { id: Date.now(), text: inputTask, isDone: false },
        ]);
        setInputTask("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const deleteTask = (id) => {
        setRemovingId(id);
        setTimeout(() => {
            setTasks(tasks.filter((task) => task.id !== id));
            setRemovingId(null);
        }, 250);
    };

    const resetTasks = () => {
        setTasks([]);
    };

    return (
        <div className="task-list-container">
            <h1>Task List</h1>

            <input
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                placeholder="Your task name"
            />

            <button onClick={addTask}>Add Task [+]</button>
            <button onClick={resetTasks}>Reset every task</button>

            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task ${task.isDone ? "done" : ""} ${
                            removingId === task.id ? "remove" : ""
                        }`}
                    >
                        {task.text}
                        <div>
                            <button onClick={() => toggleTask(task.id)}>
                                {task.isDone ? "Undo" : "Done"}
                            </button>
                            <button onClick={() => deleteTask(task.id)}>🗑</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
