const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000

const courseDatas  = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('coding academy api running')
})

app.get('/courses', (req,res)=> {
    res.send(courseDatas)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const singleCourse = courseDatas.find(courseData => courseData.id == id);
    res.send(singleCourse)

})

app.listen(Port, () =>{
    console.log('coding-academy api running on', Port)
})