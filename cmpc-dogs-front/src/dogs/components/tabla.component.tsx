import { FunctionComponent, useEffect, useState } from "react";
import { Dogs } from "../models/dogs.models"
import { useNavigate } from "react-router-dom";

interface Props {

}

const Tabla: FunctionComponent<Props> = () => {
    const [data, SetData] = useState<Dogs[]>();

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

    const deleteOne = (id: number) => {
        Dogs.deleteOne(id).then(() => {
            getAll();
        })
    }

    const navegar = useNavigate();


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
                    <button className="btn btn-success" onClick={() => navegar('/Form')}>Crear</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={getAll}>Buscar</button>
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