import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Links extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!: string;
}

