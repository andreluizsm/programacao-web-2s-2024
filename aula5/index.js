const express = require('express');
const mustacheExpress = require('mustache-express');
const  postDados = require('./controllers/formController');
const app = express();
const db = require('./db');


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));

const formRouter = require('./routes/formRouters');
app.use('/', formRouter);

db.sync();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});