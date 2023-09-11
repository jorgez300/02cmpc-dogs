import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'dogs',
})
export class Dogs extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  raza: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Subraza: string;
}
