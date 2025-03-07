import { Request, Response } from "express";
import { Iconos } from '../models/iconos'
import { ResponseList } from "../models/responselist";

import * as fs from "fs";
import * as path from "path";

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

  async update(req: Request, res: Response){
    let body: Buffer[] = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });
    
    req.on("end", async () => {
      const rawData = Buffer.concat(body);
      const uploadDir = path.resolve(__dirname, '../../public/icons');
      const fileName = req.headers["x-file-name"] as string || `file_${Date.now()}.png`;
      const fileExtension = path.extname(fileName) || ".png";
      const safeFileName = path.basename(fileName, fileExtension).replace(/[^a-zA-Z0-9_-]/g, "");

      const filePath = path.join(uploadDir, `${safeFileName}${fileExtension}`);


      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.writeFileSync(filePath, rawData);
      console.log("Archivo guardado en:", filePath);
      const pathicon = `${safeFileName}${fileExtension}`;
      
      const icon = await Iconos.create({ pathicon });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Archivo guardado correctamente" }));
    });
  }
}