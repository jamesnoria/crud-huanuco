import { Usarios } from "../models/usuarios.js";
import { toUpper } from "../utils/toUpper.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

export const obtenerUsuarios = async (req, res) => {
  try {
    const result = await Usarios.findAll({
      attributes: ["id", "username", "name", "last_name", "email", "password"],
    });
    res.json({
      message: "Lista de usuarios",
      data: result,
    });
  } catch (error) {
    console.error("El error esta en el metodo GET", error);
  }
};


export const validacion = async (req, res) => {
  const { username, password } = req.body;

  const name = await Usarios.findOne({ where: { username: username } });

  const pass = await Usarios.findOne({ where: { password: password } });

  if (name.id == pass.id) {
    if (username == name.username && password == pass.password) {
      const user = { username: username };
      const accessToken = generateAccessToken(user);
      res.header("authorization", accessToken).json({
        message: "User con token",
        token: accessToken,
      });
    } else {
      res.json({
        message: "Usuario no valido",
      });
    }
  } else {
    res.json({
      message: "Usuario no valido",
    });
  }
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "5m" });
};

export const validacionToken = (req,res,next) => {
    const accessToken = req.headers['authorization']
    if (!accessToken)res.json({message:'Access denied'})
 
    jwt.verify(accessToken, process.env.SECRET, (err,user) => {
      if(err){
        res.json('Acess denied, token expired our incorrect')
      }else{
        next();
      } 
    })
}

export const crearUsuario = async (req, res) => {
  try {
    const { username, name, last_name, email, password } = req.body;

    const result = await Usarios.create({
      username,
      name: toUpper(name),
      last_name: toUpper(last_name),
      email,
      password,
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
    const { id, username, name, last_name, email, password } = req.body;
    const result = await Usarios.update(
      {
        username,
        name: toUpper(name),
        last_name: toUpper(last_name),
        email,
        password,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json({
      message: `El usuario con el id = ${id} se actualizo`,
      data: result,
    });
  } catch (error) {
    console.error(`El error esta en el metodo PUT`, error);
  }
};
