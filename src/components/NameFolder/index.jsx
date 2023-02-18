import { useState } from "react"
import styles from "./style.module.css"
import createFolder from "../../function/createFolder"

export default function NameFolder({ setNameFolder }) {
    const [name, setName] = useState("new folder")
    function handClick() {
        setNameFolder(false)
        createFolder(name)
    }
    return (
        <div className={styles.container} onClick={() => setNameFolder(false)} >
            <div className={styles.name} onClick={(event) => event.stopPropagation()}>
                <div>Enter The Folder Name</div>
                <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handClick}>Create</button>
            </div>
        </div >
    )
}