import styles from "./style.module.css"
import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs'
import NameFolder from "../NameFolder"
import { useEffect, useRef, useState, useContext } from "react"
import addFile from "../../function/addFile"
import fileContext from "../../context/fileContext";

export default function AddButtons() {

    const { setFiles } = useContext(fileContext)

    const [selectFile, setSelectFile] = useState(undefined)
    const [nameFolder, setNameFolder] = useState(false)
    const inputRef = useRef()

    function inputFileRef() {
        inputRef.current.click()
    }

    useEffect(() => {
        if (selectFile) {
            let formData = new FormData();
            formData.append("file", selectFile);
            if (formData) {
                addFile(formData, setFiles)
            }
        }
    }, [selectFile])


    return (
        <div className={styles.addButtons}>
            <button className={styles.add} onClick={inputFileRef} >New File <BsFileEarmarkPlus /></button>
            <button className={styles.add} onClick={() => setNameFolder(!nameFolder)}>New Folder <BsFolderPlus /></button>
            {nameFolder && <NameFolder setNameFolder={setNameFolder} />}
            <input type="file" ref={inputRef} hidden onChange={((e) => setSelectFile(e.target.files[0]))} />
        </div>
    )
}