import camelcase from 'camelcase';
import connection from '../config/dataBase.js';

export const obtenerPersona = (req, res) => {
  connection.query('SELECT * FROM `Persons`', function (err, results, fields) {
    res.json({
      message: 'Lista de personas',
      datos: results,
    });
  });
};

export const crearPersona = (req, res) => {
  const PersonID = req.body.PersonID;
  const LastName = req.body.LastName;
  const FirstName = req.body.FirstName;
  const Address = req.body.Address;
  const City = req.body.City;

  const Lastname = LastName.toLowerCase();
  const Firstname = FirstName.toLowerCase();
  const city = City.toLowerCase();

  const minuscula = Address.toLowerCase();
  const address = minuscula[0].toUpperCase() + minuscula.substring(1);

  connection.query('ALTER TABLE `Persons` ADD UNIQUE (PersonID)');
  connection.query(
    'INSERT INTO `crud-huanuco`.`Persons` (PersonID , LastName, FirstName, Address, City) VALUES (? , ?, ?, ?, ?)',
    [
      PersonID,
      camelcase(Lastname, { pascalCase: true }),
      camelcase(Firstname, { pascalCase: true }),
      address,
      camelcase(city, { pascalCase: true }),
    ],
    function (err, results) {
      res.json({
        message: 'Persona creada',
        datos: results,
      });
    }
  );
};

export const borrarPersona = (req, res) => {
  const PersonID = req.body.PersonID;
  // const LastName = req.body.LastName;
  // const FirstName = req.body.FirstName;
  // const City = req.body.City;

  connection.query(
    'DELETE FROM `crud-huanuco`.`Persons` WHERE PersonID = ?',
    [PersonID],
    function (err, results) {
      res.json({
        message: 'Persona borrada',
        datos: results,
      });
    }
  );
};

export const actualizarPersona = (req, res) => {
  const PersonID = req.body.PersonID;
  const LastName = req.body.LastName;
  const FirstName = req.body.FirstName;
  const Address = req.body.Address;
  const City = req.body.City;

  const Lastname = LastName.toLowerCase();
  const Firstname = FirstName.toLowerCase();
  const city = City.toLowerCase();

  const minuscula = Address.toLowerCase();
  const address = minuscula[0].toUpperCase() + minuscula.substring(1);

  connection.query(
    'UPDATE `crud-huanuco`.`Persons` SET LastName = ?, FirstName = ?, Address = ?, City = ? WHERE PersonID = ?',
    [
      camelcase(Lastname, { pascalCase: true }),
      camelcase(Firstname, { pascalCase: true }),
      address,
      camelcase(city, { pascalCase: true }),
      PersonID,
    ],
    function (err, results) {
      res.json({
        message: `La perosna con el id=${PersonID} fue actualizada`,
        datos: results,
      });
    }
  );
};


