import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Iconos extends Model{
  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  pathicon!:string
}