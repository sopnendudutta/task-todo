import { useState } from "react"

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (<div>
        <input type="text" placeholder="title"
            onChange={(e) => {
                const value = e.target.value;
                setTitle(e.target.value);
            }}></input><br />

        <input type="text" placeholder="description"
            onChange={(e) => {
                const value = e.target.value;
                setDescription(e.target.value);
            }}></input><br />

        <button onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: { "content-type": "application/json" }
            })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo is added");
                })
        }}>Add a todo</button>
    </div>
    )
}

