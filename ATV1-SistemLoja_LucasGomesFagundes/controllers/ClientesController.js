import express from 'express'
const router = express.Router()

// ROTA CLIENTES
router.get("/clientes", function(req,res){
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

export default router