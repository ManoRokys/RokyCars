import express from 'express'
const router = express.Router()

import Produto from "../models/Produto.js";
import Auth from "../middleware/Auth.js";

router.get("/produtos", Auth, (req, res) => {
    Produto.findAll().then(produtos => {
  res.render("produtos", {
    produtos: produtos,
  });
});
});

router.get("/produtos/novo", Auth,(req, res) => {
    res.render("produtosNew");
});


router.get("/", function (req, res) {
    Produto.findAll().then(produtos => {
  res.render("index", {
    produtos: produtos,
  });
});
});

router.post("/produtos/new", Auth, (req,res) => {
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

router.get("/produtos/delete/:id", Auth, (req,res) => {
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

router.get("/produtos/edit/:id", Auth, (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id).then((produto) => {
      res.render("produtoEdit", { produto : produto });
    }).catch((error) =>{
      console.log(error)
    })
  });

  router.post("/produtos/update/", Auth, (req, res) => {
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