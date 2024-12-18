const Agendamento =  require('../models/agendamento');

function getIndexView(req, res) {
    let erro_form = req.query.erro_form;
    let nome = req.query.nome;
    let data_nascimento = req.query.data_nascimento;
    let descricao = req.query.descricao;
    res.render('index.html', {erro_form, nome, data_nascimento, descricao});
}

function postDados(req,res){
    let dados = {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        descricao: req.body.descricao
    };

    let erro_form = false;
    if(dados.nome.length == 0){
        erro_form = true;
    }

    if(dados.data_nascimento.length == 0){
        erro_form = true;
    }

    if(dados.descricao.length == 0){
        erro_form = true;
    }

    if(erro_form){
        res.redirect(`/?erro_form=1&nome=${dados.nome} &data_nascimento=${dados.data_nascimento}&descricao=${dados.descricao}`);
    }else{
        Agendamento.create(dados).then(()=>{
            res.render('dados.html', {dados});
        });    
    }

}


module.exports = {
    getIndexView,
    postDados
}