import camelcase from "camelcase";
import { Person } from "../models/persons.js";

export const obtenerPersona = async (req, res) => {
  try {
    const result = await Person.findAll({
      attributes: [
        "id",
        "PersonID",
        "LastName",
        "FirstName",
        "Address",
        "City",
      ],
    });
    res.json({
      message: "Lista de personas",
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo GET", error);
  }
};

// export const obtenerPersona = async (req, res) => {
//   connection.query('SELECT * FROM `Persons`', function (err, results, fields) {
//     res.json({
//       message: 'Lista de personas',
//       datos: results,
//     });
//   });
// };

export const crearPersona = async (req, res) => {
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

  const result = await Person.create({
    PersonID: PersonID,
    LastName: camelcase(Lastname, { pascalCase: true }),
    FirstName: camelcase(Firstname, { pascalCase: true }),
    Address: address,
    City: camelcase(city, { pascalCase: true }),
  });
  res.json({
    message: "Persona creado",
    data: result,
  });
};

// export const crearPersona = (req, res) => {
//   const PersonID = req.body.PersonID;
//   const LastName = req.body.LastName;
//   const FirstName = req.body.FirstName;
//   const Address = req.body.Address;
//   const City = req.body.City;

//   const Lastname = LastName.toLowerCase();
//   const Firstname = FirstName.toLowerCase();
//   const city = City.toLowerCase();

//   const minuscula = Address.toLowerCase();
//   const address = minuscula[0].toUpperCase() + minuscula.substring(1);

//   connection.query('ALTER TABLE `Persons` ADD UNIQUE (PersonID)');
//   connection.query(
//     'INSERT INTO `crud-huanuco`.`Persons` (PersonID , LastName, FirstName, Address, City) VALUES (? , ?, ?, ?, ?)',
//     [
//       PersonID,
//       camelcase(Lastname, { pascalCase: true }),
//       camelcase(Firstname, { pascalCase: true }),
//       address,
//       camelcase(city, { pascalCase: true }),
//     ],
//     function (err, results) {
//       res.json({
//         message: 'Persona creada',
//         datos: results,
//       });
//     }
//   );
// };

export const borrarPersona = async (req, res) => {
  
    const PersonID = req.body.PersonID;
    // const LastName = req.body.LastName;
    // const FirstName = req.body.FirstName;
    // const Address = req.body.Address;
    // const City = req.body.City;
    try {
    const result = await Person.destroy({
      where: {
        PersonID: PersonID,
      },
    });
    res.json({
      message: `Se elimino al PersonID = ${PersonID}`,
    });
  } catch (error) {
    console.error("El error esta en el metodo DELETE", error);
  }
};

// export const borrarPersona = (req, res) => {
//   const PersonID = req.body.PersonID;
//   const LastName = req.body.LastName;
//   const FirstName = req.body.FirstName;
//   const City = req.body.City;

//   connection.query(
//     'DELETE FROM `crud-huanuco`.`Persons` WHERE LastName = ?',
//     [LastName],
//     function (err, results) {
//       res.json({
//         message: 'Persona borrada',
//         datos: results,
//       });
//     }
//   );
// };

export const actualizarPersona = async (req, res) => {
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

  try {
    const result = await Person.update(
      {
        LastName: camelcase(Lastname, { pascalCase: true }),
        FirstName: camelcase(Firstname, { pascalCase: true }),
        Address: address,
        City: camelcase(city, { pascalCase: true }),
      },
      {
        where: {
          PersonID: PersonID,
        },
      }
    );
    res.json({
      message: `Se actualizo al PersonID = ${PersonID}`,
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo PUT ", error);
  }
};
// export const actualizarPersona = (req, res) => {
//   const PersonID = req.body.PersonID;
//   const LastName = req.body.LastName;
//   const FirstName = req.body.FirstName;
//   const Address = req.body.Address;
//   const City = req.body.City;

//   const Lastname = LastName.toLowerCase();
//   const Firstname = FirstName.toLowerCase();
//   const city = City.toLowerCase();

//   const minuscula = Address.toLowerCase();
//   const address = minuscula[0].toUpperCase() + minuscula.substring(1);

//   connection.query(
//     'UPDATE `crud-huanuco`.`Persons` SET LastName = ?, FirstName = ?, Address = ?, City = ? WHERE PersonID = ?',
//     [
//       camelcase(Lastname, { pascalCase: true }),
//       camelcase(Firstname, { pascalCase: true }),
//       address,
//       camelcase(city, { pascalCase: true }),
//       PersonID,
//     ],
//     function (err, results) {
//       res.json({
//         message: `La perosna con el id=${PersonID} fue actualizada`,
//         datos: results,
//       });
//     }
//   );
// };
