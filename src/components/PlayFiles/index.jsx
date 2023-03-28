import style from "./style.module.css"
import { useContext, useEffect } from "react";
import fileContext from "../../context/fileContext";
import readFiles from "../../function/readFiles";
import readFolder from "../../function/readFolder"
import createMyDrive from "../../function/createMyDrive"
import Folder from "../Folder";
import File from "../File"

export default function PlayFiles() {
    const { files, setFiles, folder, setFolder } = useContext(fileContext)

    useEffect(() => {
        createMyDrive()
        readFolder(localStorage.path ? localStorage.path : './myDrive').then(res => setFolder(res))
        readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFiles(res))
        console.log(folder)
        console.log(files)
    }, [setFolder, setFiles])

    return (
        <div className={style.container}>
            <section className={style.fileShow}>
                <header className={style.headerF}>Folder</header>
                <div className={style.files}>
                    {folder.length > 0 ?
                        folder.map((v) => { return <Folder folder={v} key={v} /> })
                        : "No Folders"}

                </div>
            </section>
            <section className={style.fileShow}>
                <header className={style.headerF}>Files</header>
                <div className={style.files}>
                    {files.length > 0 ?
                        files.map((v) => { return <File file={v} key={v} /> })
                        : "No Files"}

                </div>
            </section>
        </div>
    )
} 