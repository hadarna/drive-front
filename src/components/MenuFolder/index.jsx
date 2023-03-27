import style from "../MenuFile/style.module.css"
import { useState, useContext } from "react";
import fileContext from "../../context/fileContext";
import rename from "../../function/rename";
import readFolder from "../../function/readFolder";
import downloadFolder from "../../function/downloadFolder";
import deleteFolder from "../../function/deleteFolder";
import folderContent from "../../function/folderContent";
import { FiEdit, FiDownload } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';


export default function MenuFolder({ folder }) {

    const { setFolder } = useContext(fileContext)

    const [showInput, setShowInput] = useState(false);
    const [newName, setNewName] = useState('');
    const [ifDelete, setIfDelete] = useState(false);
    const [isContent, setIsContent] = useState(false)



    function handClickRename() {
        setShowInput(false);
        rename(localStorage.path, folder, newName);
        console.log(newName);
        readFolder(localStorage.path).then(res => setFolder(res));
    }
    function handClickDel() {
        setIfDelete(true)
        folderContent(folder).then(res => setIsContent(res));
    }

    function handClickDelete() {
        deleteFolder(folder);
        setIfDelete(false);
        readFolder(localStorage.path).then(res => setFolder(res));
    }


    return (
        <div className={style.menu} >
            <div className={style.option} onClick={() => (setShowInput(!showInput))}><FiEdit /> Rename </div>
            {showInput && <div><input type="text" className={style.input} onChange={(e) => setNewName(e.target.value)} />
                <button className={style.rename} onClick={handClickRename}>Rename</button>
            </div>}

            <div className={style.option} onClick={() => (downloadFolder(folder))}><FiDownload /> Download </div>
            <div className={style.option} onClick={handClickDel}> <RiDeleteBinLine />Delete</div>
            {ifDelete &&
                <div className={style.container} onClick={() => setIfDelete(false)}>
                    <div className={style.delete} onClick={(event) => event.stopPropagation()}>
                        {isContent ?
                            <div> This folder contains files. If you delete all the files in it will be deleted as well. Are you sure you want delete it?</div> :
                            <div> This folder is empty. Are you sure you want delete it?</div>
                        }
                        <div className={style.choose}>
                            <button className={style.yes} onClick={handClickDelete}>Yes</button>
                            <button className={style.yes} onClick={() => setIfDelete(false)}>Cancel</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}