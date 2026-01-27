function TodoList({tasks}) {

    return (
        <div>
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    )
}
export default TodoList;