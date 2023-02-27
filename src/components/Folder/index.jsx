import styles from "../File/style.module.css";
import { BsFolder } from "react-icons/bs"
import { BiMenu } from 'react-icons/bi';
import { useContext, useState } from "react";
import fileContext from "../../context/fileContext";
import readFiles from "../../function/readFiles";
import readFolder from "../../function/readFolder"
import MenuFolder from "../MenuFolder";


export default function Folder({ folder }) {

    const { setFiles, setFolder } = useContext(fileContext)
    const [openMenuFolder, setOpenMenuFolder] = useState(false);


    function clickHandle(e) {
        localStorage.path += `/${e.target.id}`
        readFolder(localStorage.path).then(res => setFolder(res))
        readFiles(localStorage.path).then(res => setFiles(res))

    }


    return (
        <div className={styles.container}>
            <div className={styles.folder}>
                <span className={styles.menuButton} onClick={() => (setOpenMenuFolder(!openMenuFolder))}> <BiMenu /></span>
                <div className={styles.folderPlay}>
                    <span className={styles.folderIcon}><BsFolder /></span>
                    <span id={folder} className={styles.oneFolder} onDoubleClick={(e) => clickHandle(e)}>{folder}</span>
                </div></div>
            {openMenuFolder && <div className={styles.menu}><MenuFolder /></div>}
        </div>
    )
}