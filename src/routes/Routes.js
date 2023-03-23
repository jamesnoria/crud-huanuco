import {
  obtenerPersona,
  crearPersona,
} from '../controller/personaController.js';

import { Router } from 'express';

const router = Router();

router.get('/obtenerPersona', obtenerPersona);
router.post('/crearPersona', crearPersona);
router.put('/actualizarPersona');
router.delete('/borrarPersona');

export default router;