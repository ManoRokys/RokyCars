import express from 'express'
const router = express.Router()

// ROTA PRODUTOS
router.get("/produtos", function(req,res){
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
export default router