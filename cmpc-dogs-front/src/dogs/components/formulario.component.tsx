import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dogs } from "../models/dogs.models";
import { Raza } from "../models/raza.models";
import { SubRaza } from "../models/subraza.models";

interface Props {

}

const Formulario: FunctionComponent<Props> = () => {

    const [data, setData] = useState<Dogs>();
    const [raza, Setraza] = useState<Raza>(new Raza('', ''));

    const { number } = useParams();
    const navegar = useNavigate();

    const razas: Raza[] = Raza.getAll()
    let subrazas: SubRaza[] = SubRaza.getAll((raza.id == '') ? razas[0].id : raza.id)

    useEffect(() => {
        if (number) {
            getOne(parseInt(number))
        } else {
            setData(new Dogs(-1, "", "", ""))
        }
    }, [number]);

    const getOne = (id: number) => {
        Dogs.getOne(id).then((d) => {
            console.log(d[0])
            Setraza(razas.filter((item) => item.id == d[0].raza)[0])
            setData(d[0]);
        })
    }

    if (!data) return (<><label>No se encontro registro {number}</label></>)


    const OnNombreChange = (event: ChangeEvent<HTMLInputElement>) => {
        const temp: Dogs = data;

        temp.nombre = event.target.value.toString();

        setData(data => ({
            ...data,
            ...temp
        }));

    }

    const OnRazaChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const temp: Dogs = data;

        temp.raza = event.target.value.toString();

        Setraza(razas.filter((item) => item.id == temp.raza)[0])

        subrazas = SubRaza.getAll(raza.id);

        console.log('OnRazaChange')

        setData(data => ({
            ...data,
            ...temp
        }));

    }

    const OnSubrazaChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const temp: Dogs = data;


        temp.Subraza = event.target.value.toString();

        console.log('OnSubrazaChange')
        setData(data => ({
            ...data,
            ...temp
        }));
    }

    const OnClickGuardar = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();



        if (data.id === -1) {
            Dogs.createOne(data).then(() => {
                navegar('/')
            })
        }
        else {
            Dogs.updateOne(data).then(() => {
                navegar('/')
            })
        }


    }

    return (
        <>
            <div className="mb-3 mt-3">
                <label className="form-label fw-bold">Id</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="ID automatico"
                    value={(data.id == -1) ? "" : data.id}
                    disabled={true}
                />
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label fw-bold">Nombre</label>
                <input
                    className="form-control"
                    type="text"
                    name="myInput"
                    placeholder="Ingrese Nombre"
                    value={data.nombre}
                    onChange={OnNombreChange}
                />
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label fw-bold">Raza</label>
                <select
                    onChange={OnRazaChange}
                    className="form-control"
                    value={data.raza}>
                    {razas.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
                </select>

            </div>
            <div className="mb-3 mt-3">
                <label className="form-label fw-bold">Subraza</label>
                <select
                    onChange={OnSubrazaChange}
                    className="form-control"
                    value={data.Subraza}>
                    {subrazas.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
                </select>
            </div>

            <button
                type="button"
                className="btn btn-success me-3"
                onClick={() => navegar('/')}>Volver</button>
            <button
                type="button"
                className="btn btn-primary me-3"
                onClick={OnClickGuardar}>Guardar</button>



        </>
    );
}

export default Formulario;