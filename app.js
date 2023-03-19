import mysql from 'mysql2';
import express from 'express';

const app = express();
const port = 3000;
const DATABASE_URL =
  'mysql://gdq3xenn5sxmipaf22u8:pscale_pw_iBcBCcOHOb6j3JnYutqOfxBeFBtuC8OL5GPTLui8xrC@us-east.connect.psdb.cloud/crud-huanuco?ssl={"rejectUnauthorized":true}';

const connection = mysql.createConnection(DATABASE_URL);
console.log('Conectado a la base de datos');

app.use(express.json());


// ESTE ENDPOINT ES PARA VER LOS USUARIOS O PERSONAS
app.get('/personas', (req, res) => {
  connection.query(
    'SELECT * FROM `Persons`',
    function (err, results, fields) {
      res.json({
        message: 'Lista de personas',
        datos: results,
      });
    }
  );
});

// ESTE ENDPOINT ES PARA CREAR UNA PERSONA
app.post('/create', (req, res) => {
  const PersonId = req.body.PersonId;
  const LastName = req.body.LastName;
  const FirstName = req.body.FirstName;
  const Address = req.body.Address;
  const City = req.body.City;

  connection.query(
    'INSERT INTO `crud-huanuco`.`Persons` (PersonId, LastName, FirstName, Address, City) VALUES (?, ?, ?, ?, ?)',
    [PersonId, LastName, FirstName, Address, City],
    function (err, results) {
      res.json({
        message: 'Persona creada',
        datos: results,
      });
    }
  );
});

// ESTE ENDPOINT ES PARA BORRAR UNA PERSONA
app.delete('/borrarpersona', (req, res) => {
  const PersonId = req.body.PersonId;

  connection.query(
    'DELETE FROM `crud-huanuco`.`Persons` WHERE PersonId = ?',
    [PersonId],
    function (err, results) {
      res.json({
        message: 'Persona borrada',
        datos: results,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
