import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/usuario";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    models: [
        Usuario
    ]
});

sequelize.sync();

export default sequelize;

