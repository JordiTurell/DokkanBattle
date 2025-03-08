import { Request, Response } from "express";
import { Carta } from '../models/carta'
import { ResponseList } from "../models/responselist";

import * as fs from "fs";
import * as path from "path";

export class PersonajesController {
  async update(req: Request, res: Response) {
    const file: Express.Multer.File | undefined = req.file;
    if(!file){
      console.log('No se ha enviado el archivo');
      res.status(400).json({error: 'No se ha enviado el archivo'});
      return;
    }
    console.log('Imagen personaje subido correctamente');
    const card = await Carta.create({ pathcard: file.filename });
    res.status(200).json({message: 'Icono subido correctamente'});
  }
}