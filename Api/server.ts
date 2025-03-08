import express from "express";
import cors from "cors";
import sequelize from "./config/database";

//Implementación de rutas
import usuariosRoutes from "./routes/usuariosRoutes";
import categoriasRoutes from "./routes/categoriasRoutes";
import tiposRoutes from "./routes/tiposRoutes";
import linksRoutes from "./routes/linksRoutes";
import linksDescripcionRoutes from "./routes/linksDescripcionRoutes";
import nivelCartaRoutes from './routes/nivelCartaRoutes';
import iconosRouter from './routes/iconosRoutes';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-file-name']
}));

app.use(express.json());

// Rutas
app.use('/api/auth', usuariosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/tipos', tiposRoutes);
app.use('/api/links', linksRoutes);
app.use('/api/linksdescripcion', linksDescripcionRoutes);
app.use('/api/nivelcarta', nivelCartaRoutes);
app.use('/api/iconos', iconosRouter);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
