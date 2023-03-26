import { Usarios } from "../models/usuarios.js";
import { toUpper } from "../utils/toUpper.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const result = await Usarios.findAll({
      attributes: ["id", "username", "name", "last_name", "email"],
    });
    res.json({
      message: "Lista de usuarios",
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo GET", error);
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { username, name, last_name, email } = req.body;

    const result = await Usarios.create({
      username,
      name: toUpper(name),
      last_name,
      email,
    });
    res.json({
      message: "Usuario creado",
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo POST", error);
    res.json(error);
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const { username } = req.body;
    await Usarios.destroy({
      where: {
        username,
      },
    });
    res.json({
      message: `El usuario ${username} fue eliminado`,
    });
  } catch (error) {
    console.error("El error esta en el metodo DELETE", error);
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const { id,username,name,last_name,email} = req.body;
    const result = await Usarios.update(
      {
        username,
        name,
        last_name,
        email,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json({
      message: `El usuario con el id = ${id} se actualizo`,
      data: result
    })
  } catch (error) {
    console.error(`El error esta en el metodo PUT`, error);
  }
};
