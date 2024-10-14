import express from 'express'
const router = express.Router()

import Cliente from "../models/Cliente.js";

router.get("/clientes", function (req, res) {
    Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    });
  });
router.get("/clientes/novo", (req, res) => {
    res.render("clientesNew");
});


  router.post("/clientes/new", (req, res) => {
    const img = req.body.img;
    const nome = req.body.nome;
    const country = req.body.country;
    Cliente.create({
      img: img,  
      nome: nome,
      country: country,
    }).then(() => {
        res.redirect("/clientes");
      });
    });

    router.get("/clientes/delete/:id", (req, res) => {
        const id = req.params.id;
    Cliente.destroy({
        where: {
        id: id,
            },
          })
            .then(() => {
              res.redirect("/clientes");
            })
            .catch((error) => {
              console.log(error);
            });
        });

    router.get("/clientes/edit/:id", (req, res) => {
        const id = req.params.id;
    Cliente.findByPk(id).then((cliente) => {
              res.render("clienteEdit", { cliente: cliente });
            }).catch((error) =>{
              console.log(error)
            })
          });


    router.post("/clientes/update/", (req, res) => {
        const id = req.body.id
        const nome = req.body.nome
        const country = req.body.country
    Cliente.update({
                nome: nome,
                country: country,
            },
            {where: {id:id}}
            ).then(() => {
                res.redirect("/clientes");
            }).catch((error) => {
                console.log(error)
            })
        })
export default router;













/*router.get("/clientes", function(req,res){    
    const clientes = [
        {img:"roky", nome: "RokyLobinho", ID: "12345678900", country: "Brazil"},
        {img:"bk",nome: "BK4", ID: "98765432100", country: "Slovakia"},
        {img:"viny",nome: "VinyTyphon", ID: "45678912300", country: "Brazil"},
        {img:"rofl",nome: "RoflWaffle", ID: "32165498700", country: "United Kingdom"}
    ]
    res.render("clientes", {
        clientes: clientes
    })
})

export default router */