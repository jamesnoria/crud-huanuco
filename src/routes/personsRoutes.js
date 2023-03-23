import {
  actualizarPersona,
  borrarPersona,
  obtenerPersona,
  crearPersona,
} from '../controller/personaController.js';

import { Router } from 'express';

const router = Router();

router.get('/obtenerPersona', obtenerPersona);
router.post('/crearPersona', crearPersona);
router.put('/actualizarPersona', actualizarPersona);
router.delete('/borrarPersona', borrarPersona);

export default router;
