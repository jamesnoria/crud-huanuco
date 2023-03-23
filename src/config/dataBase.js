import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "crud-huanuco",
  "gdq3xenn5sxmipaf22u8",
  "pscale_pw_iBcBCcOHOb6j3JnYutqOfxBeFBtuC8OL5GPTLui8xrC",
  {
    host: "us-east.connect.psdb.cloud",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);


// const DATABASE_URL =
//   'mysql://gdq3xenn5sxmipaf22u8:pscale_pw_iBcBCcOHOb6j3JnYutqOfxBeFBtuC8OL5GPTLui8xrC@us-east.connect.psdb.cloud/crud-huanuco?ssl={"rejectUnauthorized":true}';
// const connection = mysql.createConnection(DATABASE_URL);
// console.log("Conectado a la base de datos, yupi!");

