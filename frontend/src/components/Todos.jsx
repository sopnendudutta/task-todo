export function Todos({ todos }) {

    return (<div>
        {todos.map(function (todo) {
            return <div id={todos.title}>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.completed == true ? "completed" : "mark as complete"}</button>
            </div>
        })}

    </div>
    )
}