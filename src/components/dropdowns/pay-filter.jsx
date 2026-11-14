import { useState } from "react"
import dropdownicon from "../../assets/dropdown-icon.svg"

export default function FilterDropdowns({ personas, query }) {
    return (
        <>
            <select onChange={query} className="w-1/2 border  appearance-none bg-gray-200 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
                <option id="Todos" value="">Pagó: todos</option>
                {personas.map(persona => (
                    <option value={persona.nombre} key={persona.id}>{persona.nombre}</option>
                ))}
            </select>
            <img className="pointer-events-none absolute top-31 right-10 flex items-center text-gray-500" src={dropdownicon}></img>
        </>



    )
}