import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let discountListModel = sequelize.define("discountList", {
  //ID: { type: Sequelize.INTEGER },
  amount: { type: Sequelize.INTEGER },
  product_ID: { type: Sequelize.INTEGER },
})
