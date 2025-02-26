import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Links } from "./links";

@Table
export class LinkDescripcion extends Model {
    @ForeignKey(() => Links)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: "idlink"
    })
    idlink!: number;

    @BelongsTo(() => Links)
    link!: Links;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    descripcion!: string;
}

