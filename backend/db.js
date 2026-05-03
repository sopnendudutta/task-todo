const mongoose = require("mongoose");
require('dotenv').config();



const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo }