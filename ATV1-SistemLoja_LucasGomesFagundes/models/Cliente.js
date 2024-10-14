import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";
const Cliente = connection.define("clientes", {
    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
Cliente.sync({ force: false });
export default Cliente;

