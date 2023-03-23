import { Usarios } from "../models/usuarios.js";

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
}

export const crearUsuario = async (req, res) => {
  try {
    const { username, name, last_name, email } = req.body;
    const result = await Usarios.create({
      username,
      name,
      last_name,
      email,
    });
    res.json({
      message: "Usuario creado",
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo POST", error);
  }
};