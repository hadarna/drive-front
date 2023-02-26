import style from "./style.module.css"
import { BsFolder } from "react-icons/bs"


export default function Folder({ folder }) {
    return (
        <div className={style.folder}>
            <BsFolder />
            {folder}
        </div>
    )
}