import { Request, Response } from "express";
import { Iconos } from '../models/iconos'
import { ResponseList } from "../models/responselist";

import * as fs from "fs";
import * as path from "path";

export class IconosController{
  async listar(req: Request, res: Response) {
    try {
      console.log(req.body)
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
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los iconos' });
    }
  }

  async update(req: Request, res: Response){
    const file: Express.Multer.File | undefined = req.file;
    if(!file){
      console.log('No se ha enviado el archivo');
      res.status(400).json({error: 'No se ha enviado el archivo'});
      return;
    }
    console.log('Icono subido correctamente');
    const icon = await Iconos.create({pathicon: file.filename});
    res.status(200).json({message: 'Icono subido correctamente'});
  }

  async delete(req: Request, res: Response){
    const id = req.params.id;
    const icon = await Iconos.findByPk(id);
    if (icon) {
      const filePath = path.resolve(__dirname, `../../public/icons/${icon.pathicon}`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      await icon.destroy();
      res.json({ message: "Icono eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Icono no encontrado" });
    }
  }
}