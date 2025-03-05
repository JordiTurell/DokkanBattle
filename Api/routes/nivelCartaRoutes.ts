import { Router } from "express";
import { verificarToken } from "../middleware/auth";
import { nivelCartaController } from '../controllers/nivelCartaController'

const router = Router();
const nivelcartaController = new nivelCartaController();

router.post('/listar', verificarToken, nivelcartaController.listar);
router.post('/crear', verificarToken, nivelcartaController.crear);
router.put('/actualizar/:id', verificarToken, nivelcartaController.actualizar);
router.delete('/eliminar/:id', verificarToken, nivelcartaController.eliminar);
router.get('/obtener/:id', verificarToken, nivelcartaController.obtener);

export default router;