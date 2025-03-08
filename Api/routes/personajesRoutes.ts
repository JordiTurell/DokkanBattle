import { Router, Request } from "express";
import { verificarToken } from '../middleware/auth';
import { PersonajesController } from '../controllers/personajesController';

import * as path from 'path';
import multer from 'multer';

// Configuración de Multer (ya la tienes configurada)
const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
      cb(null, path.resolve(__dirname, `../../public/images/level-card/`));
  },
  filename: (req: Request, file: any, cb: any) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
const router = Router();

const controller = new PersonajesController();

router.post('/update', verificarToken, upload.single('image'), controller.update);