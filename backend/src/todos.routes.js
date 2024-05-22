const express = require("express");

const allTodos = [{ nome: "aaaa", status: false}];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");
const checkIfTodoExists = require('./modules/checkIfTodoExists');

const prisma = new PrismaClient();

// C
todosRoutes.post("/todos", async (request, response) => {
    const {name} = request.body
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    })
    // allTodos.push({name, status: false})
    return response.status(201).json(todo)
});

// R
todosRoutes.get("/todos", async (request, response) => {
    const todos = await prisma.todo.findMany()
    return response.status(200).json(todos)
});
// U
todosRoutes.put("/todos", async (request, response) => {
    const {name, id, status} = request.body;

    try {
        await checkIfTodoExists(id, prisma);

        const todo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                name,
                status,
            },
        })
    
        return response.status(200).json(todo)

    } catch (error) {
        response.status(404).json({ error: error.message });
    }
});
// D
todosRoutes.delete("/todos/:id", async (request, response) => {
    const {id} = request.params;

    const intId = parseInt(id)

    try {
        await checkIfTodoExists(intId, prisma);

        await prisma.todo.delete({ where: { id:intId } });

        return response.status(200).send();
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
});

module.exports = todosRoutes