const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const chef = require('./Data/chef.json');
const singleChef = require('./Data/chef.json');

app.use(cors());

app.get("/" , (req, res) => {

    res.send('the kitchen')
})

app.get("/chef" , (req, res) => {

    res.send(chef)
})

app.get("/chef/:id" , (req, res) => {

    const id = req.params.id;
    console.log(id);
    const selectChef = singleChef.find(n => n.chefId == id);
    res.send(selectChef);
    
})



app.listen(port, () => {

    console.log(port, 'The kitchen is running')
})