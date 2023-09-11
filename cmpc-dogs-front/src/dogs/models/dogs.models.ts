import { AxiosClientPlugin } from "../../plugins/http-client.plugin";

export class DogsFiltros {
    nombre?: string;
}

export class Dogs {

    id: number;
    nombre: string;
    raza: string;
    Subraza: string;

    constructor(id: number, nombre: string, raza: string, Subraza: string) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.Subraza = Subraza;

    }


    static getAll = async () => {

        return await AxiosClientPlugin.get('http://localhost:3000/api/dogs');

    }

    static getAllFilter = async (data: DogsFiltros) => {

        return await AxiosClientPlugin.post('http://localhost:3000/api/dogs/Filtro', data);

    }

    static getOne = async (id:number) => {

        try {
            return await AxiosClientPlugin.get('http://localhost:3000/api/dogs/' + id);
 
        } catch (error) {
            return undefined;
        }
        
    }

    static deleteOne = async (id: number) => {

        return await AxiosClientPlugin.delete('http://localhost:3000/api/dogs/', {
            id: id
        });

    }

    static createOne = async (data: Dogs) => {

        return await AxiosClientPlugin.post('http://localhost:3000/api/dogs/', data);

    }

    static updateOne = async (data: Dogs) => {

        return await AxiosClientPlugin.put('http://localhost:3000/api/dogs/', data);

    }




}