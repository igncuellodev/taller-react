export default function OrderFilter({ queryorden }) {
    return (
        <select onChange={queryorden} className="w-1/2 border bg-gray-100 border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700">
            <option value="sin ordenar">Sin ordenar</option>
            <option value="menor">Menor a mayor</option>
            <option value="mayor">Mayor a menor</option>
        </select>



    )

}