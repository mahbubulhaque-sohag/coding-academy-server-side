const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('coding academy api running')
})

app.listen(port, () =>{
    console.log('coding-academy api running on', port)
})