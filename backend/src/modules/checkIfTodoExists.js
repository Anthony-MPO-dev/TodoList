async function checkIfTodoExists(id, prisma) {
    if (!id) {
        throw new Error('Id is mandatory');
    }

    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
        throw new Error('Todo not found');
    }
}

module.exports = checkIfTodoExists;
