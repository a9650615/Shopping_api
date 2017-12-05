import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let productListModel = sequelize.define("productList", {
  name: { type: Sequelize.STRING },
  price: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
  user_id: { type: Sequelize.INTEGER },
  content: { type: Sequelize.TEXT },
  is_Sell: { type: Sequelize.INTEGER },
  discount_id: { type: Sequelize.INTEGER }
})