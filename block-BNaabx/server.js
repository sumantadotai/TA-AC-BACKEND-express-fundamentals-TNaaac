const express = require("express");

const app = express();

app.use((req, res, next) => {
    let now = new Date();
    console.log(req.method, req.path, now);
    next();
});

app.use((req, res, next) => {
    let store = "";
    req.on('data', (chunk) => {
        store += chunk;
    })
    req.on('end', () => {
        if(store && req.headers['content-type'] === 'application/json') {
            req.body = JSON.parse(store);
            console.log(req.body);
        }
    })
    
    next();
})

app.use((req, res, next) => {
    let rootPath = __dirname + '/public';
    if(req.url !== '/') {
        res.sendFile(rootPath + req.url); 
    }
    
})

app.get('/',(req,res) => {
    res.send('hello')
});


app.listen(3000,() =>{
    console.log('server is listening on port 3000');
});