import { Dialect } from "sequelize";

export = {
  development: {
    dialect: "sqlite" as Dialect,
    storage: "./database.sqlite",
    logging: false, // Opcional, desactiva logs en consola
  }
};
