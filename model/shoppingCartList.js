import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let shoppingCartModel = sequelize.define("shoppingCartList", {
  product_id: { type: Sequelize.INTEGER },
  user_id: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
})
