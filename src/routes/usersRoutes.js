import {
  obtenerUsuarios,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
  validacion,
  validacionToken,
} from '../controller/usuariosController.js';

import { Router } from 'express';

const router = Router();

router.get('/obtenerUsuarios',validacionToken, obtenerUsuarios);
router.post('/validacion', validacion);
router.post('/crearUsuario', crearUsuario);
router.delete('/eliminarUsuario', eliminarUsuario);
router.put('/actualizarUsuario', actualizarUsuario);


export default router;
