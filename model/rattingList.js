import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let rattingListModel = sequelize.define("rattingList", {
  // ID: { type: Sequelize.INTEGER },
  product_id: { type: Sequelize.INTEGER },
  rate: { type: Sequelize.INTEGER },
  user_id: { type: Sequelize.INTEGER },
})