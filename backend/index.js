const express = require("express");
const app = express();
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

console.log("Database URL Check:", process.env.MONGODB_URL ? "Found" : "Not Found");

app.use(express.json());
const PORT = 3000;
app.use(cors());

app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // put it in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({ msg: "Your todo has been created" })
});

app.get('/todos', async function (req, res) {
    const todo = await todo.find({});
    res.json({ todo })
});

app.post('/complete', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Something went wrong!"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({ msg: "Todo marked as done!" })
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on http://localhost:${PORT}`);
});
