import style from "./style.module.css"
import { useContext, useState } from "react";
import fileContext from "../../context/fileContext";
import NavigateFolder from "../NavigateFolder";

export default function NavBar() {


    let navigate = (localStorage.path).split("/")

    return (
        <div className={style.navBar}> {navigate.map((f) => (navigate[(navigate.length) - 1]) != f ? <span className={style.folderName}><NavigateFolder folderName={f} path={navigate} />/
        </span> : <span className={style.folderName}><NavigateFolder folderName={f} path={navigate} /></span>)}
        </div>
    )
}