import styles from "./style.module.css"
import { BsFilePlus, BsFolderPlus } from 'react-icons/bs'
import NameFolder from "../NameFolder"
import isExsist from "../../function/isExsist"
import { useState } from "react"

export default function AddButtons() {

    const [nameFolder, setNameFolder] = useState(false)

    return (
        <div className={styles.addButtons}>
            <button className={styles.add} >New File <BsFilePlus /></button>
            <button className={styles.add} onClick={() => setNameFolder(!nameFolder)}>New Folder<BsFolderPlus /></button>
            {nameFolder && <NameFolder setNameFolder={setNameFolder} />}
        </div>
    )
}