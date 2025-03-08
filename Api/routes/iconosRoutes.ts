import { Router, Request } from "express";
import { verificarToken } from "../middleware/auth";
import { IconosController } from '../controllers/iconosController';

import * as path from "path";
import multer from "multer";

// Configuración de Multer (ya la tienes configurada)
const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, path.resolve(__dirname, `../../public/icons/`));
  },
  filename: (req: Request, file: any, cb: any) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = Router();
const iconosController = new IconosController();

router.post('/update', verificarToken, upload.single('image'), iconosController.update);

router.post('/listar', verificarToken, iconosController.listar);
router.delete('/delete/:id', verificarToken, iconosController.delete);

export default router;