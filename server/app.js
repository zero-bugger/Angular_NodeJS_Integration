const express = require('express');
const bodyparser= require('body-parser');
const app = express();
const cors = require('cors');
const  validateroutes =require('./routes/validate')

app.use(bodyparser.json());
app.use(cors());
app.use('/api',validateroutes);


port = 3000 

app.listen(port,()=>{
    console.log(`Server Running..... on ${port}`);
})