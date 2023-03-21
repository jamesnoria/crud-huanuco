import mysql from "mysql2";
import express, { json } from "express";
import camelcase from "camelcase";

const app = express();
const port = 3000;
const DATABASE_URL =
  'mysql://gdq3xenn5sxmipaf22u8:pscale_pw_iBcBCcOHOb6j3JnYutqOfxBeFBtuC8OL5GPTLui8xrC@us-east.connect.psdb.cloud/crud-huanuco?ssl={"rejectUnauthorized":true}';

const connection = mysql.createConnection(DATABASE_URL);
console.log("Conectado a la base de datos");

app.use(express.json());

// ESTE ENDPOINT ES PARA VER LOS USUARIOS O PERSONAS
app.get("/personas", (req, res) => {
  connection.query("SELECT * FROM `Persons`", function (err, results, fields) {
    res.json({
      message: "Lista de personas",
      datos: results,
    });
  });
});

// ESTE ENDPOINT ES PARA CREAR UNA PERSONA
app.post("/create", (req, res) => {
  const PersonID = req.body.PersonID;
  const LastName = req.body.LastName;
  const FirstName = req.body.FirstName;
  const Address = req.body.Address;
  const City = req.body.City;

  const Lastname = LastName.toLowerCase()
  const Firstname = FirstName.toLowerCase()
  const city = City.toLowerCase()

  const minuscula = Address.toLowerCase()
  const address = minuscula[0].toUpperCase() + minuscula.substring(1)

  connection.query("ALTER TABLE `Persons` ADD UNIQUE (PersonID)")
  connection.query(
    "INSERT INTO `crud-huanuco`.`Persons` (PersonID , LastName, FirstName, Address, City) VALUES (? , ?, ?, ?, ?)",
    [PersonID, camelcase(Lastname,{pascalCase:true}), camelcase(Firstname,{pascalCase:true}), address, camelcase(city,{pascalCase:true})],
    function (err, results) {
      res.json({
        message: "Persona creada",
        datos: results,
      });
    }
  ); 
});

// ESTE ENDPOINT ES PARA BORRAR UNA PERSONA
app.delete("/borrarpersona", (req, res) => {
  const PersonID = req.body.PersonID;
  // const LastName = req.body.LastName;
  // const FirstName = req.body.FirstName;
  // const City = req.body.City;

  connection.query(
    "DELETE FROM `crud-huanuco`.`Persons` WHERE PersonID = ?",
    [PersonID],
    function (err, results) {
      res.json({
        message: "Persona borrada",
        datos: results,
      });
    }
  );
});

app.put("/actualizarpersona", (req, res) => {
  const PersonID = req.body.PersonID;
  const LastName = req.body.LastName;
  const FirstName = req.body.FirstName;
  const Address = req.body.Address;
  const City = req.body.City;

  const Lastname = LastName.toLowerCase()
  const Firstname = FirstName.toLowerCase()
  const city = City.toLowerCase()

  const minuscula = Address.toLowerCase()
  const address = minuscula[0].toUpperCase() + minuscula.substring(1)

  connection.query(
    "UPDATE `crud-huanuco`.`Persons` SET LastName = ?, FirstName = ?, Address = ?, City = ? WHERE PersonID = ?",
    [camelcase(Lastname,{pascalCase:true}), camelcase(Firstname,{pascalCase:true}), address, camelcase(city,{pascalCase:true}), PersonID],
    function(err,results){
      res.json({
        message: `La perosna con el id=${PersonID} fue actualizada`,
        datos: results,
      })
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
