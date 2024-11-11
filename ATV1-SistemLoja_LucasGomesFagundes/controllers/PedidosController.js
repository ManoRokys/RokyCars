import express from 'express'
const router = express.Router()

import Pedido from "../models/Pedido.js";
import Auth from "../middleware/Auth.js";


router.get("/pedidos", Auth, (req, res) => {
    Pedido.findAll().then(pedidos => {
  res.render("pedidos", {
    pedidos: pedidos,
  });
});
});

router.get("/pedidos/novo", Auth, (req, res) => {
    res.render("pedidosNew");
});


router.post("/pedidos/new", Auth, (req,res) => {
    const valor = req.body.valor
    Pedido.create({
        valor : valor,
    }).then(() => {
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/delete/:id", Auth, (req,res) => {
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
router.get("/pedidos/edit/:id", Auth, (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then((pedido) => {
      res.render("pedidoEdit", { pedido : pedido });
    }).catch((error) =>{
      console.log(error)
    })
  });

  router.post("/pedidos/update/", Auth, (req, res) => {
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