import { Router } from "express";
import { LinksDescripcionController } from "../controllers/linksDescripcionController";
import { verificarToken } from "../middleware/auth";

const router = Router();
const linksDescripcionController = new LinksDescripcionController();

router.post('/listar', verificarToken, linksDescripcionController.listar);
router.post('/crear', verificarToken, linksDescripcionController.crear);
router.put('/actualizar/:id', verificarToken, linksDescripcionController.actualizar);
router.delete('/eliminar/:id', verificarToken, linksDescripcionController.eliminar);
router.get('/obtener/:id', verificarToken, linksDescripcionController.obtener);

export default router;
