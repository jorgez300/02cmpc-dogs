import { Sequelize } from 'sequelize-typescript';
import { Dogs } from 'src/dogs/model/dogs.model';

export const db = new Sequelize('pgcmpcdogs', 'su', 'password', {
  host: 'localhost',
  port: 39000,
  dialect: 'postgres',
  models: [Dogs],
});
