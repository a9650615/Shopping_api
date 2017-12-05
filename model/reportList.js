import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let reportModel = sequelize.define("reportList", {
  // ID: { type: Sequelize.INTEGER },
  user_id: { type: Sequelize.INTEGER },
  from_id: { type: Sequelize.INTEGER },
  reason: { type: Sequelize.TEXT },
})