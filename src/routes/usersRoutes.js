import {
  obtenerUsuarios,
  crearUsuario,
} from '../controller/usuariosController.js';

import { Router } from 'express';

const router = Router();

router.get('/obtenerUsuarios', obtenerUsuarios);
router.post('/crearUsuario', crearUsuario);

export default router;
