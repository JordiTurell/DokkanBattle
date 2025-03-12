import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class nivelCarta extends Model{
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  pathicon!:string;
}