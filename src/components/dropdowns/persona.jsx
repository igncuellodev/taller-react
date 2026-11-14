export default function PersonasGastos({ personas }) {
    return (
        <select name="SeleccionarPersona" className="border  appearance-none w-20 bg-gray-200 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
            {personas.map(persona => (
                <option key={persona.id} value={persona.nombre}>{persona.nombre}</option>
            ))}
        </select>
    )

}