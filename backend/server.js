const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();

const frontend = path.join(`${__dirname}/../frontend`)

app.use(express.json())
app.use('/pub', express.static(`${__dirname}/../frontend/public`));


app.get('/', (req,resp,next)=>{   
    resp.sendFile(path.join(`${__dirname}/../frontend/index.html`));
})


app.get("/image-list", (req,res)=>{
    res.sendFile(`${frontend}/data.json`);
})

const port = 9000;

app.listen(port, ()=>{
    console.log(`htttp://127.0.0.1:${port}`);
})