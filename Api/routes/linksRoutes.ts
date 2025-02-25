import { Router } from "express";
import { LinksController } from "../controllers/linksController";
import { verificarToken } from "../middleware/auth";

const router = Router();
const linksController = new LinksController();

router.post('/listar', verificarToken, linksController.listar);
router.post('/crear', verificarToken, linksController.crear);
router.put('/actualizar/:id', verificarToken, linksController.actualizar);
router.delete('/eliminar/:id', verificarToken, linksController.eliminar);
router.get('/obtener/:id', verificarToken, linksController.obtener);

export default router;
