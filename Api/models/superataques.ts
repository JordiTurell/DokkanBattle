import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Superataques extends Model{
  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  title!: string

  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  descripcion!: string

  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  descripcion2!: string
}