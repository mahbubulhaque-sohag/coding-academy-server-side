const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000

const couseData  = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('coding academy api running')
})

app.get('/courses', (req,res)=> {
    res.send(couseData)
})

app.listen(Port, () =>{
    console.log('coding-academy api running on', Port)
})