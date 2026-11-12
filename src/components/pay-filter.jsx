import { useState } from "react"

export default function FilterDropdowns({ personas, query }) {
    return (
        <select onChange={query} className="w-1/2 border bg-gray-100 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
            <option id="Todos" value="">Pagó: todos</option>
            {personas.map(persona => (
                <option value={persona.nombre} key={persona.id}>{persona.nombre}</option>
            ))}



        </select>


    )
}