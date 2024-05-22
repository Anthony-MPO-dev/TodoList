const express = require("express");
const cors = require("cors")
const todosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(todosRoutes);


app.get("/health", (req, res) => {
    return res.json("up");
});

const port = 3333;

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});