import { Request, Response } from "express";
import { Usuario } from "../models/usuario";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fgjdklsfhjsk|dañ3825@471085901";

export class UsuariosController {
    async registrarUsuario(req: Request, res: Response) {
        try{
            const { email, password, nombre, rol } = req.body;

            const usuarioExistente = await Usuario.findOne({ where: { email } });

            if (usuarioExistente) {
                return res.status(400).json({ message: "El usuario ya existe" });
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            
            const nuevoUsuario = await Usuario.create({
                email,
                password: hashedPassword,
                nombre,
                rol
            })

            // Generar JWT
            const token = jwt.sign(
                { id: nuevoUsuario.id, email: nuevoUsuario.email, rol: nuevoUsuario.rol },
                JWT_SECRET,
                { expiresIn: '24h' }
            );

            return res.status(201).json({
                mensaje: 'Usuario creado exitosamente',
                token,
                usuario: {
                id: nuevoUsuario.id,
                email: nuevoUsuario.email,
                nombre: nuevoUsuario.nombre,
                rol: nuevoUsuario.rol
                }
            });
        }catch(error){
            return res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

     // Login de usuario
    async login(req: Request, res: Response) {
        try {
        const { email, password } = req.body;

        // Buscar usuario
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        // Verificar contraseña
        const passwordValida = await bcrypt.compare(password, usuario.password);
        if (!passwordValida) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        // Generar JWT
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, rol: usuario.rol },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            status: true,
            data:{
                token: token,
            }
        });
        } catch (error) {
        return res.status(500).json({ error: 'Error en el login' });
        }
    }

    async getUsuarios(req: Request, res: Response) {
        try {
        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios);
        } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    } 
}
