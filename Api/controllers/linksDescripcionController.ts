import { Request, Response } from 'express';
import { LinkDescripcion } from '../models/linkdescripcion';
import { ResponseList } from '../models/responselist';

export class LinksDescripcionController {
  async listar(req: Request, res: Response) {
    try{
      const page = req.body.page || 1;
      const limit = parseInt(req.body.limit as string) || 10;
      const offset = (page - 1) * limit;

      const total = await LinkDescripcion.count();
      const linksDescripcion = await LinkDescripcion.findAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      });
      
      const response: ResponseList<LinkDescripcion> = {
        items: linksDescripcion,
        total: total,
        page: page,
        limit: limit
      };
      res.json(response);     
      
    }catch (error){
      res.status(500).json({ error: 'Error al obtener los links de descripcion' });
    }
  }

  async crear(req: Request, res: Response) {
    try{
      const linkDescripcion = await LinkDescripcion.create(req.body);
      res.json(linkDescripcion);
    }catch (error){
      res.status(500).json({ error: 'Error al crear el link de descripcion' });
    }
  }

  async actualizar(req: Request, res: Response) {
    try{
      const linkDescripcion = await LinkDescripcion.findByPk(req.params.id);
      if(!linkDescripcion){
        return res.status(404).json({ error: 'Link de descripcion no encontrado' });
      }
      await linkDescripcion.update(req.body);
      res.json(linkDescripcion);
    }catch (error){
      res.status(500).json({ error: 'Error al actualizar el link de descripcion' });
    }
  }

  async eliminar(req: Request, res: Response) {
    try{
      const linkDescripcion = await LinkDescripcion.findByPk(req.params.id);
      if(!linkDescripcion){
        return res.status(404).json({ error: 'Link de descripcion no encontrado' });
      }
      await linkDescripcion.destroy();
    }catch(error){
      res.status(500).json({ error: 'Error al eliminar el link de descripcion' });
    }
  }

  async obtener(req: Request, res: Response) {
    try{
      const linkDescripcion = await LinkDescripcion.findByPk(req.params.id);
      if(!linkDescripcion){
        return res.status(404).json({ error: 'Link de descripcion no encontrado' });
      }
      res.json(linkDescripcion);
    }catch(error){
      res.status(500).json({ error: 'Error al obtener el link de descripcion' });
    }
  }
}
