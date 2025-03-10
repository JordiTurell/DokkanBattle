import { Sequelize } from "sequelize-typescript";
import config from "./config";

//Modelos
import { Usuario } from "../models/usuario";
import { Categoria } from "../models/categorias";
import { LinkDescripcion } from "../models/linkdescripcion";
import { Links } from "../models/links";
import { Tipo } from "../models/tipos";
import { nivelCarta } from "../models/nivelCarta"
import { Iconos } from "../models/iconos";
import { Carta } from "../models/carta";

const sequelize = new Sequelize({
    dialect: config.development.dialect,
    storage: config.development.storage,
    models: [
        Usuario,
        Categoria,
        Tipo,
        Links,
        LinkDescripcion,
        nivelCarta,
        Iconos,
        Carta
    ]
});


sequelize.sync();

export default sequelize;

