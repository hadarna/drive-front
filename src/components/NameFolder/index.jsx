import { useState, useContext } from "react";
import style from "./style.module.css";
import createFolder from "../../function/createFolder";
import fileContext from "../../context/fileContext";
import readFolder from "../../function/readFolder";

export default function NameFolder({ setNameFolder }) {
    const { setFolder } = useContext(fileContext);
    const [name, setName] = useState("new folder");
    const [check, setCheck] = useState(true);


    function checkFolderName(folderName) {
        if (folderName) {
            readFolder(localStorage.path ? localStorage.path : './myDrive').then(res => setFolder(res))
        }
        else {
            console.log("error");
            alert("This folder name already exists.Choose another name")
        }
    }

    function handClick() {
        setNameFolder(false);
        createFolder(name)
            .then(res => {
                setCheck(res);
                console.log("check", res);
                checkFolderName(res);
            })
    }

    return (
        <div className={style.container} onClick={() => setNameFolder(false)} >
            <div className={style.name} onClick={(event) => event.stopPropagation()}>
                <div className={style.label}>Enter The Folder Name:</div>
                <input className={style.input} type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <button className={style.create} onClick={handClick}>Create</button>
            </div>
        </div >
    )
}