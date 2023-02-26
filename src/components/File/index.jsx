import style from "./style.module.css"
// import { BsFolder } from "react-icons/bs"


export default function File({ file }) {
    return (
        <div className={style.file}>
            {file}
        </div>
    )
}