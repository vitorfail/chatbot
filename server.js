const App = require('./src/app.ts')
const express = require('express');
const cors = require('cors');
const app = express();
require('./src/Routes/index')(app); // <--- basta adicionar essa linha
app.use(cors());
app.use(express.json());
app.listen(3333, () =>{
    console.log(App("bom dia"))
});