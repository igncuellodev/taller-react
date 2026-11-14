import DeleteIcon from "../../assets/delete-icon.svg"
export default function DeleteBtn({ eliminarGasto }) {
    return (
        <button className="cursor-pointer transition ease-in hover:scale-130" onClick={eliminarGasto}><img src={DeleteIcon} alt="" width="24" /></button>
    )
}