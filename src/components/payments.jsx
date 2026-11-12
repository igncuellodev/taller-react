
export default function Payments({ personas, gastos, total, personaFilter }) {
  return (
    <div>
      <ul className="w-full flex flex-col gap-5">
        {gastos.map(gasto => (
          <li key={gasto.id} className="flex justify-between border-b border-gray-200 pb-4">
            <div>
              <p className="font-medium">{gasto.descripcion}</p>
              <p className="text-gray-400 text-sm">Pagó {personas.find((persona) => persona.id === gasto.pagoId).nombre}</p>
            </div>
            <div>
              <p>${gasto.monto}</p>
            </div>
          </li>

        ))}

        {personaFilter && "Jabon"}


      </ul>

      <div className="flex justify-between mt-7">
        <p className="font-bold text-xl">Total</p>
        <p className="font-bold text-xl">${total}</p>
      </div>
    </div >


  );


}


