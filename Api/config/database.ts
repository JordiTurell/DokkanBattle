import { Sequelize } from "sequelize-typescript";
import { Usuario } from "../models/usuario";
import { Categoria } from "../models/categorias";
import { LinkDescripcion } from "../models/linkdescripcion";
import { Links } from "../models/links";
import { Tipo } from "../models/tipos";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    models: [
        Usuario,
        Categoria,
        Tipo,
        Links,
        LinkDescripcion
    ]
});

sequelize.sync();

export default sequelize;

