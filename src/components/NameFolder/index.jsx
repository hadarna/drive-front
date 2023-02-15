import { useState } from "react"
import styles from "./style.module.css"

export default function NameFolder({ setNameFolder }) {
    const [name, setName] = useState("new folder")
    return (
        <div className={styles.container} onClick={() => setNameFolder(false)} >
            <div className={styles.name}>
                <div>Enter The Folder Name</div>
                <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={() => console.log(name)}>Create</button>
            </div>
        </div>
    )
}