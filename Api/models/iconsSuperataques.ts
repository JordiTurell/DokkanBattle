import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Superataques } from "./superataques";

@Table
export class IconsSuperAtaques extends Model{
  @ForeignKey(() => Superataques)
  @Column({
    type:DataType.NUMBER,
    allowNull: false,
    field: 'idsuperataque'
  })
  idsuperataque!: number

  @BelongsTo(() => Superataques)
  superataque!: Superataques

  @ForeignKey(() => IconsSuperAtaques)
  @Column({
    type:DataType.NUMBER,
    allowNull:false,
    field: 'idicon'
  })
  idicon!: number

  @BelongsTo(() => IconsSuperAtaques)
  iconos!: IconsSuperAtaques
}