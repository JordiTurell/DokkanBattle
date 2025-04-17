import { Request, Response } from "express";
import { Tipo } from "../models/tipos";
import { ResponseList } from "../models/responselist";

export class TiposController {
    async listar(req: Request, res: Response): Promise<void> {
        try{
          const page = req.body.page || 1;
          const limit = parseInt(req.body.limit as string) || 10;
          const offset = (page - 1) * limit;

          const total = await Tipo.count();
          
          const tipos = await Tipo.findAll({
            limit: limit,
            offset: offset,
            order: [['id', 'DESC']]
          });

          const response: ResponseList<Tipo> = {
            items: tipos,
            total: total,
            page: page,
            limit: limit
          };

          res.json(response);
        }catch (error){
          res.status(500).json({ error: 'Error al obtener los tipos' });
        }
    }  
    
    async crear(req: Request, res: Response): Promise<void> {
        try{
          const { nombre, pathimagen } = req.body;
          const tipo = await Tipo.create({ nombre, pathimagen });
          res.json(tipo);
        }catch (error){
          console.log(error);
          res.status(500).json({ error: 'Error al crear el tipo' });
        }
    }

    async actualizar(req: Request, res: Response): Promise<void> {
      try{
        const tipo = await Tipo.findByPk(req.params.id);
        if(!tipo){
          return 
        }
        await tipo.update(req.body);
        res.json(tipo);
      }catch (error){
        res.status(500).json({ error: 'Error al actualizar el tipo' });
      }
    }
    
    async eliminar(req: Request, res: Response): Promise<void> {
      try{
        const tipo = await Tipo.findByPk(req.params.id);
        if(!tipo){
          return
        }
        await tipo.destroy();
        res.json({ message: 'Tipo eliminado correctamente' });
      }catch (error){
        res.status(500).json({ error: 'Error al eliminar el tipo' });
      }
    }

    async obtener(req: Request, res: Response) : Promise<void>{
      try{
        const tipo = await Tipo.findByPk(req.params.id);
        if(!tipo){
          return 
        }
        res.json(tipo);
      }catch (error){
        res.status(500).json({ error: 'Error al obtener el tipo' });
      }
    }

    async alllist(req: Request, res: Response): Promise<void>{
      try{
        const tipos = await Tipo.findAll();
        res.json(tipos);
      }catch (error){
        res.status(500).json({ error: 'Error al obtener los tipos' });
      }
    }
}
