import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Links } from "./links";

@Table
export class LinkDescripcion extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: false,
        field: "idlink",
        references: {
            model: Links,
            key: "id"
        }
    })
    idlink!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descripcion!: string;
}

