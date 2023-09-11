// import { FunctionComponent, useState } from "react";
// import { SubRaza } from "../models/subraza.models";
// import { Raza } from "../models/raza.models";

// interface Props {
//     raza: string;
//     Subraza: string;
//     OnRazaChange(): void;
//     OnSubRazaChange(): void;
// }

// const SelectRazas: FunctionComponent<Props> = () => {

//     const [razas, Setrazas] = useState<Raza[]>([]);
//     const [subrazas, Setsubrazas] = useState<SubRaza[]>([]);


//     Setrazas(Raza.getAll());
//     console.log(razas);
//     Setsubrazas(SubRaza.getAll('a'));

    
//     return (
//         <>
//             <div className="mb-3 mt-3">
//                 <label className="form-label fw-bold">Raza</label>
//                 <select
//                     onChange={Props.OnRazaChange}
//                     className="form-control">
//                     {razas.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
//                 </select>

//             </div>
//             <div className="mb-3 mt-3">
//                 <label className="form-label fw-bold">Subraza</label>
//                 <select
//                     onChange={OnSubrazaChange}
//                     className="form-control">
//                     {subrazas.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
//                 </select>
//             </div>
//         </>
//     );
// }

// export default SelectRazas;