import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Carta extends Model{
  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  idnivelcarta!: number

  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  titulo!: string

  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  habilidadLider!: string

  @Column({
    type:DataType.DATE,
    allowNull: false
  })
  fechaSalida!: Date

  @Column({
    type:DataType.DATE,
    allowNull: false
  })
  fechaEza!: Date

  @Column({
    type:DataType.BOOLEAN,
    allowNull: false
  })
  eza!: boolean 
  
  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  pathcard!: string
}