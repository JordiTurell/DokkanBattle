import { nivelCarta } from '../models/nivelCarta'
import { Request, Response } from 'express';
import { ResponseList } from '../models/responselist';

export class nivelCartaController {
   async listar(req: Request, res: Response) {
      try{
        const page = req.body.page || 1;
        const limit = parseInt(req.body.limit as string) || 10;
        const offset = (page - 1) * limit;

        const total = await nivelCarta.count();
        const nivelcarta = await nivelCarta.findAll({
          limit: limit,
          offset: offset,
          order: [['id', 'DESC']]
        });

        const response: ResponseList<nivelCarta> = {
          items: nivelcarta,
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
      console.log(req.body)
      console.log({ nombre })
      const link = await nivelCarta.create({ nombre });
      res.json(link);
    }catch (error){
      res.status(500).json({ error: 'Error al crear el link' });
    }
  }

  async actualizar(req: Request, res: Response) {
    try{
      const link = await nivelCarta.findByPk(req.params.id);
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
      const link = await nivelCarta.findByPk(req.params.id);
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
      const link = await nivelCarta.findByPk(req.params.id);
      if(!link){
        return res.status(404).json({ error: 'Link no encontrado' });
      }
      res.json(link);
    }catch (error){
      res.status(500).json({ error: 'Error al obtener el link' });
    }
  }  
}

export default new nivelCartaController();