const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json())
require('./src/Routes/index')(app); // <--- basta adicionar essa linha
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.listen(process.env.PORT || 3000, () =>{
    console.log("Servidor iniciado")
});