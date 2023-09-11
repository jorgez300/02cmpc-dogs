import { Injectable } from '@nestjs/common';
import { Dogs } from './model/dogs.model';

interface DogsFiltros {
  nombre: string;
}

@Injectable()
export class DogsService {
  getAll = async () => {
    const data: Dogs[] = await Dogs.findAll({
      order: [['id', 'ASC']],
    });
    if (data.length === 0) return [];
    //throw new NotFoundException('no se encontraron perros');

    return data;
  };

  getAllFilter = async (Filtros: DogsFiltros) => {
    const data: Dogs[] = await Dogs.findAll({
      order: [['id', 'ASC']],
    });

    console.log(data);

    const filtrado: Dogs[] = data.filter((item) =>
      item.nombre.toUpperCase().includes(Filtros.nombre.toUpperCase()),
    );

    console.log(filtrado);

    if (filtrado.length === 0) return [];
    //throw new NotFoundException('no se encontraron perros');

    return filtrado;
  };

  getById = async (id: number) => {
    const data: Dogs[] = await Dogs.findAll({
      where: {
        id: id,
      },
    });
    if (data.length === 0) return [];
    //throw new NotFoundException('no se encontraron perros');

    return data;
  };

  insertOne = async (nuevo: Dogs) => {
    const res = await Dogs.create({
      nombre: nuevo.nombre,
      raza: nuevo.raza,
      Subraza: nuevo.Subraza,
    });
    return res;
  };

  DeleteOne = async (nuevo: Dogs) => {
    const res = await Dogs.destroy({
      where: {
        id: nuevo.id,
      },
    });
    return res;
  };

  UpdateOne = async (nuevo: Dogs) => {
    const res = await Dogs.update(
      {
        nombre: nuevo.nombre,
        raza: nuevo.raza,
        Subraza: nuevo.Subraza,
      },
      {
        where: {
          id: nuevo.id,
        },
      },
    );
    return res;
  };
}
