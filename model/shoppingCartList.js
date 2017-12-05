import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let shoppingCartModel = sequelize.define("shoppingCartList", {
  // ID: { type: Sequelize.INTEGER },
  product_ID: { type: Sequelize.INTEGER },
  user_ID: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
})
