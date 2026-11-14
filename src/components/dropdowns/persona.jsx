import dropdownicon from "../../assets/dropdown-icon.svg"

export default function PersonasGastos({ personas, personaSeleccionada }) {
    return (

        <>
            <select onChange={personaSeleccionada} name="SeleccionarPersona" className="border  appearance-none w-full max-w-30 bg-gray-200 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
                {personas.map(persona => (
                    <option key={persona.id} name={persona.nombre} value={persona.nombre}>{persona.nombre}</option>
                ))}
            </select>
            <img className="pointer-events-none absolute top-4.5 right-41 flex items-center text-gray-500" src={dropdownicon}></img>
        </>


    )


}