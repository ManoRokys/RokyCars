import express from 'express'
const router = express.Router()

import Pedido from "../models/Pedido.js";


router.get("/pedidos", function (req, res) {
    Pedido.findAll().then(pedidos => {
  res.render("pedidos", {
    pedidos: pedidos,
  });
});
});

router.get("/pedidos/novo", (req, res) => {
    res.render("pedidosNew");
});


router.post("/pedidos/new",(req,res) => {
    const valor = req.body.valor
    Pedido.create({
        valor : valor,
    }).then(() => {
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/delete/:id", (req,res) => {
    const id = req.params.id
    Pedido.destroy({
        where: {
            id : id
        }
    }).then(() =>{
        res.redirect("/pedidos")
    }).catch(error => {
        console.log(error)
    })
})
router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then((pedido) => {
      res.render("pedidoEdit", { pedido : pedido });
    }).catch((error) =>{
      console.log(error)
    })
  });

  router.post("/pedidos/update/", (req, res) => {
    const id = req.body.id
    const valor = req.body.valor
    Pedido.update({
        valor : valor
    },
    {where: {id : id}}
    ).then(() => {
        res.redirect("/pedidos");
    }).catch((error) => {
        console.log(error)
    })
})
export default router;















// ROTA PEDIDOS
/*router.get("/pedidos",function(req,res){
    const pedidos = [
        {ID: "12345678900", valor: "120.000,00"},
        {ID: "12345678900", valor: "500.000,00"},
        {ID: "98765432100", valor: "350.000,00"},
        {ID: "32165498700", valor: "240.000,00"}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

export default router*/