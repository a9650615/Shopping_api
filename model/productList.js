import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let productModel = sequelize.define("productList", {
  //ID: { type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
  user_ID: { type: Sequelize.INTEGER },
  content: { type: Sequelize.TEXT },
  is_Sell: { type: Sequelize.INTEGER },
  create_Time: { type: Sequelize.DATEONLY }
})