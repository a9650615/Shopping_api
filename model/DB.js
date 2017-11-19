import sequelize from 'sequelize';
const ENV = process.env;
console.log(ENV.MYSQL_DB)
const DB = new sequelize(ENV.MYSQL_DB, ENV.MYSQL_USER, ENV.MYSQL_PASS, {
  host: ENV.MYSQL_HOST,
  dialect: 'mysql'
});

DB
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default DB;
