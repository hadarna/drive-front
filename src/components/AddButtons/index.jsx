import style from "./style.module.css";
import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs';
import { TfiBackRight } from 'react-icons/tfi';
import NameFolder from "../NameFolder";
import { useEffect, useRef, useState, useContext } from "react";
import addFile from "../../function/addFile";
import fileContext from "../../context/fileContext";
import readFiles from "../../function/readFiles";
import readFolder from "../../function/readFolder"

export default function AddButtons() {

    const { setFiles, setFolder } = useContext(fileContext)

    const [selectFile, setSelectFile] = useState(undefined)
    const [nameFolder, setNameFolder] = useState(false)
    const inputRef = useRef()

    function goBack() {
        localStorage.path = (localStorage.path).slice(0, (localStorage.path).lastIndexOf("/"));
        readFolder(localStorage.path).then(res => setFolder(res));
        readFiles(localStorage.path).then(res => setFiles(res));
    }
    function inputFileRef() {
        inputRef.current.click()
        readFiles(localStorage.path).then(res => setFiles(res));
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
        <div className={style.addButtons}>
            {localStorage.path != "./myDrive" ? <button className={style.add} onClick={goBack} >Back <TfiBackRight /></button> : null}
            <button className={style.add} onClick={inputFileRef} >New File <BsFileEarmarkPlus /></button>
            <button className={style.add} onClick={() => setNameFolder(!nameFolder)}>New Folder <BsFolderPlus /></button>
            {nameFolder && <NameFolder setNameFolder={setNameFolder} />}
            <input type="file" ref={inputRef} hidden onChange={((e) => setSelectFile(e.target.files[0]))} />
        </div>
    )
}