import { useState, useContext } from "react"
import style from "./style.module.css"
import createFolder from "../../function/createFolder"
import fileContext from "../../context/fileContext"

export default function NameFolder({ setNameFolder }) {
    const { setFolder } = useContext(fileContext)
    const [name, setName] = useState("new folder")
    function handClick() {
        setNameFolder(false)
        createFolder(setFolder, name)
    }
    return (
        <div className={style.container} onClick={() => setNameFolder(false)} >
            <div className={style.name} onClick={(event) => event.stopPropagation()}>
                <div className={style.label}>Enter The Folder Name:</div>
                <input className={style.input} type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <button className={style.create} onClick={handClick}>Create</button>
            </div>
        </div >
    )
}