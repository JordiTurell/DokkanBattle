import { Router } from "express";
import { TiposController } from "../controllers/tiposController";
import { verificarToken } from "../middleware/auth";

const router = Router();
const tiposController = new TiposController();

router.post('/listar', verificarToken, tiposController.listar);
router.post('/crear', verificarToken, tiposController.crear);
router.put('/actualizar/:id', verificarToken, tiposController.actualizar);
router.delete('/eliminar/:id', verificarToken, tiposController.eliminar);
router.get('/obtener/:id', verificarToken, tiposController.obtener);

export default router;
