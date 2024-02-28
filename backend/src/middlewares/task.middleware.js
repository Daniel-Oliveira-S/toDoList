
const express = require('express');
express()

const validateTask = (req, res, next) => {
const {body} = req;

if(body.title === undefined){
    return res.status(400).json({message: "O campo title é obrigatório"});
}
if (body.title === ""){
    return res.status(400).json({message: "title cannot be empty"});
}
next();
}
const validateUpdate = (req, res, next) => {
    const { body } = req;
    const {status} = body
    console.log(status)
    console.log(body)


next()
  
};



module.exports = { validateTask, validateUpdate };


