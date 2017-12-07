import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let orderListDetailModel = sequelize.define("orderListDetail", {
  //ID: { type: Sequelize.INTEGER },
  order_List_id: { type: Sequelize.INTEGER },
  product_id: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
})