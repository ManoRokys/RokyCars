import express from 'express'
const router = express.Router()

import Produto from "../models/Produto.js";

router.get("/produtos", function (req, res) {
    Produto.findAll().then(produtos => {
  res.render("produtos", {
    produtos: produtos,
  });
});
});

router.get("/produtos/novo", (req, res) => {
    res.render("produtosNew");
});


router.get("/", function (req, res) {
    Produto.findAll().then(produtos => {
  res.render("index", {
    produtos: produtos,
  });
});
});

router.post("/produtos/new",(req,res) => {
    const img = req.body.img
    const nome = req.body.nome
    const preco = req.body.preco
    const descricao = req.body.descricao
    Produto.create({
        img : img,
        nome :  nome,
        preco : preco,
        descricao : descricao,
    }).then(() => {
        res.redirect("/produtos")
    })
})

router.get("/produtos/delete/:id", (req,res) => {
    const id = req.params.id
    Produto.destroy({
        where: {
            id : id
        }
    }).then(() =>{
        res.redirect("/produtos")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id).then((produto) => {
      res.render("produtoEdit", { produto : produto });
    }).catch((error) =>{
      console.log(error)
    })
  });

  router.post("/produtos/update/", (req, res) => {
    const id = req.body.id
    const img = req.body.img
    const nome = req.body.nome
    const preco = req.body.preco
    const descricao = req.body.descricao
    Produto.update({
        img : img,
        nome :  nome,
        preco : preco,
        descricao : descricao,
    },
    {where: {id : id}}
    ).then(() => {
        res.redirect("/produtos");
    }).catch((error) => {
        console.log(error)
    })
})

export default router;




// ROTA PRODUTOS
/*router.get("/produtos", function(req,res){
    const produtos = [
        {img: "corvette",nome: "Chevrolet Corvette CR7", preco: "120.000,00", descricao: "Com um design aerodinâmico e agressivo, apresenta um motor potente, oferecendo desempenho excepcional."},
        {img: "huracan",nome: "Lamborghini Huracán", preco: "500.000,00", descricao: "Equipado com um motor V10 potente, oferece aceleração impressionante e uma experiência de condução emocionante."},
        {img: "cayman",nome: "Porsche Cayman GT4", preco: "350.000,00", descricao: "Equipado com um motor flat-six de alta potência, oferece uma experiência de condução envolvente e dinâmica."},
        {img: "skyline",nome: "Nissan SKYLINE GT-R [R32]", preco: "240.000,00", descricao: "Equipado com um motor RB26DETT de 2.6 litros e um sistema de tração integral ATTESA, oferece aceleração rápida e controle excepcional em curvas."},
        {img: "amg",nome: "Mercedes AMG GT3", preco: "440.000,00", descricao: "Equipado com um motor V8 biturbo de alta performance, oferece aceleração rápida e velocidades impressionantes."},
        {img: "integra",nome: "Honda Integra", preco: "100.000,00", descricao: "Equipado com um motor de alta rotação, oferece uma experiência de condução emocionante, com respostas rápidas e excelente manuseio."},
        {img: "supra",nome: "Toyota Supra GT500", preco: "790.000,00", descricao: "Equipado com um motor turboalimentado de alto desempenho, combina potência com um chassi leve e aerodinâmico, otimizado para maximizar a estabilidade e o controle nas pistas."}
    ]
    res.render("produtos", {
        produtos: produtos
    })
})

router.get("/", function(req,res){
    const produtos = [
        {img: "corvette",nome: "Chevrolet Corvette CR7", preco: "120.000,00", descricao: "Com um design aerodinâmico e agressivo, apresenta um motor potente, oferecendo desempenho excepcional."},
        {img: "huracan",nome: "Lamborghini Huracán", preco: "500.000,00", descricao: "Equipado com um motor V10 potente, oferece aceleração impressionante e uma experiência de condução emocionante."},
        {img: "cayman",nome: "Porsche Cayman GT4", preco: "350.000,00", descricao: "Equipado com um motor flat-six de alta potência, oferece uma experiência de condução envolvente e dinâmica."},
        {img: "skyline",nome: "Nissan SKYLINE GT-R [R32]", preco: "240.000,00", descricao: "Equipado com um motor RB26DETT de 2.6 litros e um sistema de tração integral ATTESA, oferece aceleração rápida e controle excepcional em curvas."}
    ]
    res.render("index", {
        produtos: produtos
    })
})
export default router*/