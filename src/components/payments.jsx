import DeleteBtn from "./botones/deletebtn";


export default function Payments({ personas, gastos, total, id }) {
  return (
    <div>
      <ul className="w-full flex flex-col gap-5">
        {gastos.map(gasto => (
          <li key={gasto.id} className="flex justify-between border-b border-gray-200 pb-4">
            <div>
              <p className="font-medium">{gasto.descripcion}</p>
              <p className="text-gray-400 text-sm">Pagó {personas.find((persona) => persona.id === gasto.pagoId).nombre}</p>
            </div>
            <div className="flex gap-4 items-center">
              <p>${gasto.monto}</p>
              <DeleteBtn eliminarGasto={() => id(gasto.id)} />
            </div>
          </li>

        ))}


      </ul>

      <div className="flex justify-between mt-7">
        <p className="font-bold text-xl">Total</p>
        <p className="font-bold text-xl">${total}</p>
      </div>
    </div >


  );


}


