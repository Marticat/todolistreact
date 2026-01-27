import TodoList from "./components/TodoList.jsx";
import TaskList from "./components/TaskList.jsx";

import './App.css'
function App() {
    const currentTasks = ["Testing", "SA", "Article", "Interview"]
    return (
        <div>
            <h1>My ToDo App</h1>
            <TodoList tasks={currentTasks}/>
            <TaskList tasks={currentTasks}/>
        </div>
    );
}

export default App;
