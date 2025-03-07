import { Router } from "express";
import { verificarToken } from "../middleware/auth";
import { IconosController } from '../controllers/iconosController';

const router = Router();
const iconosController = new IconosController();

router.post('/listar', verificarToken, iconosController.listar);
router.post('/update', verificarToken, iconosController.update);

export default router;