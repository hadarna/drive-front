import { useState, useContext } from "react";
import fileContext from "../../context/fileContext";
import style from "./style.module.css";
import rename from "../../function/rename";
import downloadFile from "../../function/downloadFile";
import readFiles from "../../function/readFiles";
import InfoFile from "../InfoFile";
import getInfo from "../../function/getInfo"
import deleteFile from "../../function/deleteFile";
import { FiEdit, FiDownload, FiInfo } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';



export default function MenuFile({ file }) {
    const { setFiles } = useContext(fileContext)

    const [showInput, setShowInput] = useState(false);
    const [newName, setNewName] = useState('');
    const [infoShow, setInfoShow] = useState(false);
    const [info, setInfo] = useState({});
    const [ifDelete, setIfDelete] = useState(false)

    function handClickRename() {
        setShowInput(false);
        rename(localStorage.path, file, newName)
        readFiles(localStorage.path).then(res => setFiles(res));
    }
    function handClickInfo() {
        setInfoShow(!infoShow);
        getInfo(file).then((information) => {
            setInfo(information);
        })
    }
    function handClickDelete(file) {
        deleteFile(file);
        readFiles(localStorage.path).then(res => setFiles(res));
        setIfDelete(false);
    }

    return (
        <div className={style.menu} >
            <div className={style.option} onClick={() => (setShowInput(!showInput))}><FiEdit /> Rename </div>
            {showInput && <div ><input type="text" className={style.input} onChange={(e) => setNewName(e.target.value)} />
                <button className={style.rename} onClick={handClickRename}>Rename</button>
            </div>}

            <div className={style.option} onClick={() => (downloadFile(file))}><FiDownload /> Download </div>

            <div className={style.option} onClick={() => (handClickInfo())}> <FiInfo /> Information</div>

            {infoShow && <div className={style.info}>{<InfoFile info={info} />}</div>
            }
            <div className={style.option} onClick={() => setIfDelete(!ifDelete)}> <RiDeleteBinLine /> Delete</div>
            {ifDelete &&
                <div className={style.container} onClick={() => setIfDelete(false)}>
                    <div className={style.delete} onClick={(event) => event.stopPropagation()}>
                        <div>Are you sure you want to delete {file}?</div>
                        <div className={style.choose}>
                            <button className={style.yes} onClick={() => handClickDelete(file)}>Yes</button>
                            <button className={style.yes} onClick={() => setIfDelete(false)}>Cancel</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}