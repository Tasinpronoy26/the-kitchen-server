const express = require('express');
const app = express();
const port = 5000;

const chef = require('./Data/chef.json');

app.get("/" , (req, res) => {

    res.send('the kitchen')
})

app.get("/chef" , (req, res) => {

    res.send(chef)
})



app.listen(port, () => {

    console.log(port, 'The kitchen is running')
})