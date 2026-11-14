import { useEffect, useState } from "react";
import Hogar from "./data/hogar.json"
import AgreagarCard from "./components/agregar-gastocard";
import ListRender from "./components/list-render";

export default function AppGastos() {

  const [gastos, setGastos] = useState(Hogar.gastos)
  const [personas, setPersonas] = useState(Hogar.personas)
  const [nuevoMonto, setNuevoMonto] = useState("")
  const [nuevaDescripcion, setNuevaDescripcion] = useState("")
  const [idNuevo, setIdNuevo] = useState(gastos.length)
  const [personaGasto, SetPersonaGasto] = useState("")

  //PARA ACTUALIZAR EL ARREGLO ES: setGastos([...gastos, {monto: whatever, dsecripción: whatever}])

  function nuevoGasto(monto, descripcion, persona) {
    setGastos([...gastos, { id: gastos.length + 1, descripcion: descripcion, monto: monto, pagoId: "por definir" }])
  }

  let MontoTotal = 0
  for (const gasto of gastos) {
    MontoTotal += gasto.monto
  }
  const total = MontoTotal


  return (

    <section className="h-fit pt-28 flex w-full justify-center items-center flex-col ">

      <div className="elementsWrapper max-w-3xl w-full flex flex-col gap-6">
        <h1 className="text-4xl text-center font-bold mb-8">💸 Mis Gastos del Hogar</h1>
        <AgreagarCard personas={personas} accion={e => nuevoGasto(e.target.value)} />
        <div className="p-8 w-full rounded-xl shadowbox bg-gray-100 flex flex-col gap-10 relative">
          <ListRender personas={personas} gastos={gastos} total={total} />
        </div> {/*Final dfel wrapper donde estoy renderizando la lista */}

      </div> {/* Wrapper de toda la app */}

    </section>
  )


}
