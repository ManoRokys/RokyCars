import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define("produtos", {
    img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
Produto.sync({ force: false });
export default Produto;