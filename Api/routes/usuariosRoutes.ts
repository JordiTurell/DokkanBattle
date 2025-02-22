import { Router } from 'express';
import { UsuariosController } from '../controllers/usauriosController';
import { verificarToken } from '../middleware/auth';

const router = Router();
const usuarioController = new UsuariosController();

router.post('/registro', usuarioController.registrarUsuario);
router.post('/login', usuarioController.login);
router.get('/usuarios', verificarToken, usuarioController.getUsuarios);

export default router; 