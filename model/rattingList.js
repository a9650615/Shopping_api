import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let rattingListModel = sequelize.define("rattingList", {
  // ID: { type: Sequelize.INTEGER },
  product_ID: { type: Sequelize.INTEGER },
  rate: { type: Sequelize.INTEGER },
  create_Time: { type: Sequelize.DATEONLY },
})