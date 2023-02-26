import { useState, useContext } from "react"
import styles from "./style.module.css"
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
        <div className={styles.container} onClick={() => setNameFolder(false)} >
            <div className={styles.name} onClick={(event) => event.stopPropagation()}>
                <div className={styles.label}>Enter The Folder Name:</div>
                <input className={styles.input} type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <button className={styles.create} onClick={handClick}>Create</button>
            </div>
        </div >
    )
}