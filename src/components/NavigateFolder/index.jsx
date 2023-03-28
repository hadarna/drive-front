import style from "./style.module.css";
import fileContext from "../../context/fileContext";
import { useContext } from "react";
import readFiles from "../../function/readFiles";
import readFolder from "../../function/readFolder";


export default function NavigateFolder({ folderName, path }) {

    const { setFiles, setFolder } = useContext(fileContext)

    function navToFolder(e) {
        console.log(e.target.innerText)
        let indexOfFolder = path.indexOf(e.target.innerText);
        let arrPath = (path.slice(0, indexOfFolder + 1)).join("/");
        localStorage.path = arrPath;
        readFolder(arrPath).then(res => setFolder(res))
        readFiles(arrPath).then(res => setFiles(res))
    }


    return (
        <span className={style.folderName} onClick={(e) => navToFolder(e)}>{folderName}</span>
    )
}