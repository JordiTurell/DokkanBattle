import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Tipo extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pathimagen!: string;
}

