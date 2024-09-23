import express from 'express'
const router = express.Router()

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
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

export default router