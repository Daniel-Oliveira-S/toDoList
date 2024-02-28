const express = require('express');
const Router = require('./router');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use(Router)

module.exports = app;