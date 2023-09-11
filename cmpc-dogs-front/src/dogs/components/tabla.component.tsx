import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { Dogs, DogsFiltros } from "../models/dogs.models"
import { useNavigate } from "react-router-dom";

interface Props {

}



const Tabla: FunctionComponent<Props> = () => {
    const [data, SetData] = useState<Dogs[]>();
    const [filtros, setFiltros] = useState<DogsFiltros>();

    useEffect(() => {
        Dogs.getAll().then((d) => {
            SetData(d);
        })
    }, [])

    const getAll = () => {
        Dogs.getAll().then((d) => {
            SetData(d);
        })
    }

    const getAllFilter = () => {
        Dogs.getAllFilter(filtros).then((d) => {
            SetData(d);
        })
    }

    const OnClickBuscar = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (filtros?.nombre === "") {
            getAll();
        }
        else {
            getAllFilter();
        }

    }

    const deleteOne = (id: number) => {
        Dogs.deleteOne(id).then(() => {
            getAll();
        })
    }

    const navegar = useNavigate();

    const OnNombreChange = (event: ChangeEvent<HTMLInputElement>) => {
        const temp: DogsFiltros = (filtros) ? filtros : {nombre: ""};

        temp.nombre = event.target.value.toString();

        setFiltros(filtros => ({
            ...filtros,
            ...temp
        }));

    }


    if (!data) return (
        <>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-success" onClick={() => navegar('/Form')}>Crear</button>
                </div>

            </div>
        </>
    );

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-success me-3" onClick={() => navegar('/Form')}>Crear</button>
                    <button className="btn btn-primary me-3" onClick={OnClickBuscar}>Buscar</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Ingrese Nombre"
                        onChange={OnNombreChange}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Raza</th>
                                <th>Subraza</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => <tr key={'tr' + item.id}><td>{item.id}</td><td>{item.nombre}</td><td>{item.raza}</td><td>{item.Subraza}</td><td><button key={'BtnEliminar' + item.id} className="btn btn-warning" onClick={() => navegar('/Form/' + item.id)}>Editar</button></td><td><button key={'BtnEliminar' + item.id} className="btn btn-danger" onClick={() => deleteOne(item.id)}>Eliminar</button></td></tr>)}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default Tabla;