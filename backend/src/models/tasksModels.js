const connection = require('./connection');

const getAll = async()=> {
    const [tasks] = await connection.execute("SELECT * FROM tasks")
    return tasks;
}

const createTask = async (task) => {
const {title} = task;
const data = Date.now();    
const dateUTC = new Date(data).toUTCString()
const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?,?,?)';
const [createdTask] = await connection.execute(query, [title, "concluído", dateUTC]);
return {insertId: createdTask.insertId};
}

const deleteTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);

    return removeTask;
}

const findOne = async (id) => {
    const [task] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    return task[0]

}

const updateTask = async (id, task) => {
    const {title, status} = task
    const query = ('UPDATE tasks SET title = ?, status = ? WHERE id = ?')
    const updatedTask = await connection.execute(query, [title, status, id])
    return updatedTask
}


module.exports = {getAll,
    createTask,
    deleteTask,
    updateTask,
    findOne
}
