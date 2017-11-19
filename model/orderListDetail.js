import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let orderListDetailModel = sequelize.define("orderListDetail", {
  //ID: { type: Sequelize.INTEGER },
  order_List_ID: { type: Sequelize.INTEGER },
  product_ID: { type: Sequelize.INTEGER },
  user_ID: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
  create_Time: { type: Sequelize.DATEONLY }
})