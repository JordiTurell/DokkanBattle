import { Request, Response } from "express";
import { Categoria } from "../models/categorias";
import { ResponseList } from "../models/responselist";

export class CategoriasController {
  async crearCategoria(req: Request, res: Response) {
      const { nombre } = req.body;

      const categoria = await Categoria.create({ nombre });

      res.status(201).json(categoria);
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const page = req.body.page || 1;
      const limit = parseInt(req.body.limit as string) || 10;
      const offset = (page - 1) * limit;

      // Obtener total de registros
      const total = await Categoria.count();

      // Obtener registros paginados
      const categorias = await Categoria.findAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      });

      const response: ResponseList<Categoria> = {
        items: categorias,
        total: total,
        page: page,
        limit: limit
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  }

  async obtenerCategorias(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
      const categoria = await Categoria.findByPk(id);

      res.status(200).json(categoria);
  }
  
  async actualizarCategoria(req: Request, res: Response) : Promise<void>{
      const { id } = req.params;
      const { nombre } = req.body;

      const categoria = await Categoria.findByPk(id);

      if (categoria === null) {
        return
      }

      categoria.nombre = nombre;
      await categoria.save();

      res.status(200).json(categoria);
  }

  async eliminarCategoria(req: Request, res: Response) : Promise<void>{
    const { id } = req.params;

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
        return
    }else{
      await categoria.destroy();
      res.status(200).json({ message: "Categoria eliminada correctamente" });
    }
  }
}
