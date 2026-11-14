import { useState } from "react";
import Hogar from "./data/hogar.json"
import AgreagarCard from "./components/agregar-gastocard";
import ListRender from "./components/list-render";

let MontoTotal = 0
for (const gasto of Hogar.gastos) {
  MontoTotal += gasto.monto
}
const total = MontoTotal

export default function AppGastos() {

  const [gastos, setGastos] = useState(Hogar.gastos)
  const [personas, setPersonas] = useState(Hogar.personas)
  const [totalNuevo, setTotalNuevo] = useState(total)
  const [personaGasto, SetPersonaGasto] = useState("")

  //PARA ACTUALIZAR EL ARREGLO ES: setGastos([...gastos, {monto: whatever, dsecripción: whatever}])

  function nuevoGasto(evento, e) {

    if (Object.values(e).some(datos => datos === ""))
      alert("Debes colocar todos los datos para agregar un gasto")

    if (Object.values(e).every(datos => datos))

      if (e.personaNueva === "Nico") {
        setGastos([...gastos, { id: gastos.length + 1, descripcion: e.descripcionNueva, monto: e.montoNuevo, pagoId: 1 }])
      } else if (e.personaNueva === "Eli") {
        setGastos([...gastos, { id: gastos.length + 1, descripcion: e.descripcionNueva, monto: e.montoNuevo, pagoId: 2 }])
      } else if (e.personaNueva === "Bree") {
        setGastos([...gastos, { id: gastos.length + 1, descripcion: e.descripcionNueva, monto: e.montoNuevo, pagoId: 3 }])
      }
  }


  function eliminarGasto(Id) {
    setGastos(gastos.filter(gasto => gasto.id !== Id))
  }





  return (

    <section className="h-fit pt-28 flex w-full justify-center items-center flex-col ">

      <div className="elementsWrapper max-w-3xl w-full flex flex-col gap-6">
        <h1 className="text-4xl text-center font-bold mb-8">💸 Mis Gastos del Hogar</h1>
        <AgreagarCard personas={personas} accion={(e) => nuevoGasto(e.preventDefault(), { descripcionNueva: e.currentTarget.elements.descripcion.value, montoNuevo: e.currentTarget.elements.monto.value, personaNueva: e.currentTarget.elements.SeleccionarPersona.value },)} />
        <div className="p-8 w-full rounded-xl shadowbox bg-gray-100 flex flex-col gap-10 relative">
          <ListRender personas={personas} gastos={gastos} total={totalNuevo} id={(id) => eliminarGasto(id)} />
        </div> {/*Final dfel wrapper donde estoy renderizando la lista */}

      </div> {/* Wrapper de toda la app */}

    </section>
  )


}
