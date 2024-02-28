const tasksModel = require('../models/tasksModels');    

const getAll = async (req, response) => {
    const tasks = await tasksModel.getAll();
    console.log(tasks)
    return response.status(200).json(tasks);
}

const createTask = async (req, res)=>{
    const createdTask = await tasksModel.createTask(req.body);
    console.log(createdTask)
    return res.status(201).json(createdTask)
}

const deleteTask = async (req,res) => {
    const {id} = req.params;
    const removeTask = await tasksModel.deleteTask(id)
    console.log(removeTask)
    return res.status(204).json(removeTask + "task removida")

}



const updateTask = async (req, res) => {

    const {id} = req.params;
    const {status} = req.body;

    const findOne = await tasksModel.findOne(id)
if(findOne && findOne.status === status){
    return res.status(409).json({message: "status já atualizado"})  
}
    await tasksModel.updateTask(id, req.body)

    return res.status(204).json()
}



module.exports = {getAll, createTask,
    deleteTask, updateTask}
