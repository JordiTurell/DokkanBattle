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

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pathiconnormal!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pathiconsuper!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    pathiconextreme!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    extreme!: boolean;
}

