import { useState } from "react"
import Payments from "./payments"
import Order from "./order-filter"
import PayFilter from "./pay-filter"
import SearchBar from "./searchbar"

export default function ListRender({ personas, gastos, total }) {
    const [search, setSearch] = useState('')
    const [personaSelect, setPersonaSelect] = useState("")
    const [orden, setOrden] = useState("")
    let visibles = gastos.filter(gasto => gasto.descripcion.toLowerCase().includes(search.toLowerCase()))

    function seleccionar(persona) {
        setPersonaSelect(persona)
    }

    function ordenarGastos(query) {
        setOrden(query)
    }


    if (orden === "sin ordenar") {
        visibles = gastos
        setOrden("")

    }

    if (orden === "menor") {
        visibles = gastos.toSorted((menor, mayor) => menor.monto - mayor.monto)
    } if (orden === "mayor") {
        visibles = gastos.toSorted((menor, mayor) => mayor.monto - menor.monto)
    }

    if (personaSelect !== "") {
        const idPersona = personas.find((persona) => persona.nombre === personaSelect).id
        const gastosPersonas = gastos.filter(gasto => gasto.pagoId === idPersona)
        visibles = gastosPersonas
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">

                <SearchBar prop1={search} prop2={(e) => setSearch(e.target.value)} />

                <div id="dropdowns" className="flex gap-4">

                    <Order queryorden={e => ordenarGastos(e.target.value)} />
                    <PayFilter personas={personas} query={e => seleccionar(e.target.value)} />

                </div>

            </div>


            <Payments personas={personas} gastos={visibles} total={total} />
        </div>








    )
}