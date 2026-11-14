import dropdownicon from "../../assets/dropdown-icon.svg"

export default function OrderFilter({ queryorden }) {
    return (

        <>
            <select onChange={queryorden} className="w-1/2 border appearance-none bg-gray-200 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
                <option value="sin ordenar">Sin ordenar</option>
                <option value="menor">Menor a mayor</option>
                <option value="mayor">Mayor a menor</option>
            </select>


            <img className="pointer-events-none absolute top-31 left-85 flex items-center text-gray-500" src={dropdownicon}></img>
        </>



    )

}