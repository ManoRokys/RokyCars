import express from 'express'
const router = express.Router()

import Cliente from "../models/Cliente.js";
import Auth from "../middleware/Auth.js";

router.get("/clientes", Auth, (req, res) => {
    Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    });
  });
router.get("/clientes/novo", Auth,(req, res) => {
    res.render("clientesNew");
});


  router.post("/clientes/new", Auth, (req, res) => {
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

    router.get("/clientes/delete/:id", Auth, (req, res) => {
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

    router.get("/clientes/edit/:id", Auth, (req, res) => {
        const id = req.params.id;
    Cliente.findByPk(id).then((cliente) => {
              res.render("clienteEdit", { cliente: cliente });
            }).catch((error) =>{
              console.log(error)
            })
          });


    router.post("/clientes/update/", Auth, (req, res) => {
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