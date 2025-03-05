import { Request, Response } from "express";
import { Iconos } from '../models/iconos'
import { ResponseList } from "../models/responselist";

export class IconosController{
  async listar(req: Request, res: Response) {
    try {
      const page = req.body.page || 1;
      const limit = parseInt(req.body.limit as string) || 10;
      const offset = (page - 1) * limit;

      // Obtener total de registros
      const total = await Iconos.count();

      // Obtener registros paginados
      const iconos = await Iconos.findAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      });

      const response: ResponseList<Iconos> = {
        items: iconos,
        total: total,
        page: page,
        limit: limit
      };

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  }

  async crear(req: Request, res: Response){
    const { path } = req.body
    const icon = await Iconos.create({ path })
    res.status(200).json(icon)
  }
}