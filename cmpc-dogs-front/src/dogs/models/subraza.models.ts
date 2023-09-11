export class SubRaza {

    id: string;
    nombre: string;
    padre: string;

    constructor(id: string, nombre: string, padre: string) {
        this.id = id;
        this.nombre = nombre;
        this.padre = padre;
    }


    static getAll = (padre: string): SubRaza[] => {

        const subrazas: SubRaza[] = [
            new SubRaza("a1", "a1", "a"),
            new SubRaza("a2", "a2", "a"),
            new SubRaza("b1", "b1", "b"),
            new SubRaza("b2", "b2","b"),
            new SubRaza("c1", "c1", "c"),
            new SubRaza("c2", "c2", "c"),
        ]

        return subrazas.filter((item) => item.padre === padre)

    }

}