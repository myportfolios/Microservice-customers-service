const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//routers


//port
const port = 8000;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})