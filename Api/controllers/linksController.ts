import { Request, Response } from 'express';
import { Links } from '../models/links';
import { ResponseList } from '../models/responselist';

export class LinksController {
  async listar(req: Request, res: Response) {
      try{
        const page = req.body.page || 1;
        const limit = parseInt(req.body.limit as string) || 10;
        const offset = (page - 1) * limit;

        const total = await Links.count();
        const links = await Links.findAll({
          limit: limit,
          offset: offset,
          order: [['id', 'DESC']]
        });

        const response: ResponseList<Links> = {
          items: links,
          total: total,
          page: page,
          limit: limit
        };

        res.json(response);
      }catch (error){
          res.status(500).json({ error: 'Error al obtener los links' });
      }
  }

  async crear(req: Request, res: Response) {
    try{
      const { nombre } = req.body;
      const link = await Links.create({ nombre });
      res.json(link);
    }catch (error){
      res.status(500).json({ error: 'Error al crear el link' });
    }
  }

  async actualizar(req: Request, res: Response) {
    try{
      const link = await Links.findByPk(req.params.id);
      if(!link){
        return res.status(404).json({ error: 'Link no encontrado' });
      }
      await link.update(req.body);
      res.json(link);
    }catch (error){
      res.status(500).json({ error: 'Error al actualizar el link' });
    }
  }

  async eliminar(req: Request, res: Response) {
    try{
      const link = await Links.findByPk(req.params.id);
      if(!link){
        return res.status(404).json({ error: 'Link no encontrado' });
      }
      await link.destroy();
      res.json({ message: 'Link eliminado correctamente' });
    }catch (error){
      res.status(500).json({ error: 'Error al eliminar el link' });
    }
  }

  async obtener(req: Request, res: Response) {
    try{
      const link = await Links.findByPk(req.params.id);
      if(!link){
        return res.status(404).json({ error: 'Link no encontrado' });
      }
      res.json(link);
    }catch (error){
      res.status(500).json({ error: 'Error al obtener el link' });
    }
  }
}

export default new LinksController();
