import { Router } from 'express';
import { UsuariosController } from '../controllers/usauriosController';
import { verificarToken } from '../middleware/auth';

const router = Router();
const usuarioController = new UsuariosController();

//router.post('/registro', usuarioController.registrarUsuario);
router.post('/login', usuarioController.login);
router.get('/usuarios', verificarToken, usuarioController.getUsuarios);
router.get('/verificartoken', verificarToken, usuarioController.verificarToken);
//router.delete('/delete', usuarioController.deleteUsuario);

export default router; 