import { Router } from "express";
import { verificarToken } from "../middleware/auth";
import { IconosController } from '../controllers/iconosController';

const router = Router();
const iconosController = new IconosController();

router.post('/crear', verificarToken, iconosController.crear);
router.post('/listar', verificarToken, iconosController.listar);

export default router;