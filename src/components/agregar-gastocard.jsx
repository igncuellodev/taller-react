import Inputdescripcion from "./inputs/input-descripcion"
import Inputmonto from "./inputs/input-monto"
import Boton from "./botones/boton"
import PersonasGastos from "./dropdowns/persona"

export default function AgreSigarCard({ personas, accion }) {
    return (
        <div className="w-full pt-6 pl-6 pr-6 pb-8 rounded-xl  flex flex-col gap-7 shadowbox bg-gray-100">
            <h2 className="font-bold">Agregar gasto</h2>

            <div className="flex gap-2 justify-between">

                <form action="" onSubmit={accion} className="flex gap-4 w-full">
                    <Inputdescripcion />
                    <Inputmonto />
                    <PersonasGastos personas={personas} />
                    <Boton label="Agregar" />
                </form>


            </div>
        </div>
    )

}