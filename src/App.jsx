import { useEffect, useState } from "react";
import Hogar from "./data/hogar.json"
import ListRender from "./components/list-render";

export default function AppGastos() {

  const [gastos, setGastos] = useState(Hogar.gastos)
  const [personas, setPersonas] = useState(Hogar.personas)
  const [total, setTotal] = useState(0)

  //PARA ACTUALIZAR EL ARREGLO ES: setGastos([...gastos,'Nuevo elemento'])

  let MontoTotal = 0
  for (const gasto of gastos) {
    MontoTotal += gasto.monto
  }

  useEffect(() => {
    setTotal(MontoTotal)
  })

  return (

    <section className="h-screen flex w-full justify-center items-center flex-col gap-24">
      <h1 className="text-5xl font-bold">💸 Mis Gastos del Hogar</h1>
      <div className="p-8 w-full max-w-2xl rounded-xl shadowbox flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <ListRender personas={personas} gastos={gastos} total={total} />

        </div>




      </div>
    </section>
  )


}
