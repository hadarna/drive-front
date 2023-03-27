import style from "../File/style.module.css";
import { BsFolder } from "react-icons/bs"
import { BiMenu } from 'react-icons/bi';
import { useContext, useRef, useState, useEffect } from "react";
import fileContext from "../../context/fileContext";
import readFiles from "../../function/readFiles";
import readFolder from "../../function/readFolder"
import MenuFolder from "../MenuFolder";


export default function Folder({ folder }) {

    const { setFiles, setFolder } = useContext(fileContext)
    const [openMenuFolder, setOpenMenuFolder] = useState(false);
    const ref = useRef();


    function clickHandle(e) {
        localStorage.path += `/${e.target.id}`
        readFolder(localStorage.path).then(res => setFolder(res))
        readFiles(localStorage.path).then(res => setFiles(res))
    }
    useEffect(() => {
        const checkIfClickOutside = e => {
            if (openMenuFolder && ref.current && !ref.current.contains(e.target)) {
                setOpenMenuFolder(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickOutside)
        }

    }, [openMenuFolder])


    return (
        <div className={style.container}>
            <div className={style.folder}>
                <span className={style.menuButton} onClick={() => (setOpenMenuFolder(!openMenuFolder))}> <BiMenu /></span>
                <div className={style.folderPlay}>
                    <span className={style.folderIcon}><BsFolder /></span>
                    <span id={folder} className={style.oneFolder} onDoubleClick={(e) => clickHandle(e)}>{folder}</span>
                </div></div>
            {openMenuFolder && <div className={style.menu} ref={ref}><MenuFolder folder={folder} /></div>}
        </div>
    )
}