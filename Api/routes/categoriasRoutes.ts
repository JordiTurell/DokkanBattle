import { Router } from "express";
import { CategoriasController } from "../controllers/categoriasController";
import { verificarToken } from "../middleware/auth";

const router = Router();
const categoriasController = new CategoriasController();

router.post('/crear', verificarToken, categoriasController.crearCategoria);
router.post('/listar', verificarToken, categoriasController.listar);
router.get('/getcat/:id', verificarToken, categoriasController.obtenerCategorias);
router.put('/editar/:id', verificarToken, categoriasController.actualizarCategoria);
router.delete('/eliminar/:id', verificarToken, categoriasController.eliminarCategoria);

export default router;
