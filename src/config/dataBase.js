import mysql from "mysql2";

const DATABASE_URL =
  'mysql://gdq3xenn5sxmipaf22u8:pscale_pw_iBcBCcOHOb6j3JnYutqOfxBeFBtuC8OL5GPTLui8xrC@us-east.connect.psdb.cloud/crud-huanuco?ssl={"rejectUnauthorized":true}';

const connection = mysql.createConnection(DATABASE_URL);

console.log("Conectado a la base de datos, yupi!");

export default connection;
