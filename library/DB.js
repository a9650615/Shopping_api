import Sequelize from 'sequelize';
const ENV = process.env;

export default class DB {
  Sequelize;

  constructor(dbType = "mysql", account, password, host, port = 3306, dbName, option = {}) {
    // 連線 
    this.Sequelize = new Sequelize(`${dbType}://${account}:${password}@${host}:${port}/${dbName}`, option);
  }

  async select(sql, params) {
    return await this.Sequelize.query(sql,//每個資料庫功能使用方式不太一樣
      { replacements: params, type: Sequelize.QueryTypes.SELECT }
    )
  }

  async insert(sql, params) {
    return await this.Sequelize.query(sql,//每個資料庫功能使用方式不太一樣
      { replacements: params, type: Sequelize.QueryTypes.INSERT }
    )
  }

  async update(sql, params) {
    return await this.Sequelize.query(sql,//每個資料庫功能使用方式不太一樣
      { replacements: params, type: Sequelize.QueryTypes.UPDATE }
    )
  }

  async delete(sql, params) {
    return await this.Sequelize.query(sql,//每個資料庫功能使用方式不太一樣
      { replacements: params, type: Sequelize.QueryTypes.DELETE }
    )
  }

  async complex(sql, params) {
    return await this.Sequelize.query(sql,//每個資料庫功能使用方式不太一樣
      { replacements: params, type: Sequelize.QueryTypes.INSERT }
    )
  }
}

export let db = new DB('mysql', ENV.MYSQL_USER, ENV.MYSQL_PASS, ENV.MYSQL_HOST, 3306, ENV.MYSQL_DB);
export let sequelize = db.Sequelize;