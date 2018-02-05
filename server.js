var express = require('express')
var bodyParser = require('body-parser')
var port = process.env.PORT || 8000;
var app = express();
var apiRouter = require('./routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',apiRouter);

app.listen(port,function(){
    console.log('listening on port:',port);
})

