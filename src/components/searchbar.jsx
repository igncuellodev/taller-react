export default function SearchBar({ prop1, prop2 }) {
    return (
        <input value={prop1} onChange={prop2} type="search" id="searchbar" name="searchbar" className="border bg-gray-200 border-gray-300 w-full p-4 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-blue-700" placeholder="Buscar por descripción" />
    )
}