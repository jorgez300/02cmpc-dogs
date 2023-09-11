export class Raza {

    id: string;
    nombre: string;

    constructor(id: string, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }


    static getAll = (): Raza[] => {

        return [
            new Raza("a", "a"),
            new Raza("b", "b"),
            new Raza("c", "c"),
        ]

    }

}