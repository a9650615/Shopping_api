import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let discountListModel = sequelize.define("discountList", {
  price: { type: Sequelize.INTEGER },
  product_id: { type: Sequelize.INTEGER },
})
