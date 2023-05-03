const express = require('express');
const app = express();
const port = 5000;


app.get("/" , (req, res) => {

    res.send('the kitchen')
})



app.listen(port, () => {

    console.log(port, 'The kitchen is running')
})