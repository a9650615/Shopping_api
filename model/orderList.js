import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let orderListModel = sequelize.define("orderList", {
  //ID: { type: Sequelize.INTEGER },
  price: { type: Sequelize.INTEGER },
  user_id: { type: Sequelize.INTEGER },
  state: { type: Sequelize.INTEGER },
})