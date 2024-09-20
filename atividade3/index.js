const express = require('express');
const app = express();
const calc = require('./util/calculadora');

app.get('/', function(req, res){
    res.send('Hello, World!');
});

app.get('/somar/:a/:b',(req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.somar(a,b);
    res.send(`Soma ${c}`)
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.subtrair(a,b);
    res.send(`Subrtrair ${c}`)
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.multiplicar(a,b);
    res.send(`Multiplicar ${c}`)
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.dividir(a,b);
    res.send(`Dividir ${c}`)
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});