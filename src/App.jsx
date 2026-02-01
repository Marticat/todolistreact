import { useState } from "react";
import TodoList from "./components/TodoList";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
    return (
        <div className="app-container">
            <h1 className="app-title">My ToDo</h1>
            <TaskList />
        </div>
    );
}

export default App;
