//Creacion de Migraciones
npx sequelize-cli migration:generate --name nombre_migracion

//Actualizar la base de datos
npx sequelize-cli db:migrate


//revertir una Migracion
npx sequelize-cli db:migrate:undo

