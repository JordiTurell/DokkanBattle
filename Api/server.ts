import express from "express";
import cors from "cors";
import sequelize from "./config/database";
import usuariosRoutes from "./routes/usuariosRoutes";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    methods: [' GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Rutas
app.use('/api/auth', usuariosRoutes);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
