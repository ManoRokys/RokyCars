import express from 'express'
const app = express()
import connection from "./config/sequelize-config.js";
import ClientesController from "./controllers/ClientesController.js" 
import ProdutosController from "./controllers/ProdutosController.js" 
import PedidosController from "./controllers/PedidosController.js" 

app.use(express.urlencoded({extended: false}))

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados bem sucedida!");
  })
  .catch((error) => {
    console.log(error);
  });
 
connection
  .query(`CREATE DATABASE IF NOT EXISTS RokyCars;`)
  .then(() => {
    console.log("O banco de dados está criado!");
  })
  .catch((error) => {
    console.log(error);
  });

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)

app.get("/",function(req,res){
    res.render("index")
})

app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})