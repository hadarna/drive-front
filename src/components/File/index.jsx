import style from "./style.module.css";
import { BiMenu } from 'react-icons/bi';
import { useState } from "react";
import MenuFile from "../MenuFile";
import { BsImage, BsFileEarmarkPdf, BsFileEarmarkWord, BsFileEarmarkMusic, BsFileEarmark } from 'react-icons/bs';
import { SiMicrosoftpowerpoint } from 'react-icons/si';


export default function File({ file }) {
    const [openMenuFile, setOpenMenuFile] = useState(false);

    let type = file.split('.').pop();
    let reactIcon;
    if (type === 'png' || type === 'jpg') {
        reactIcon = <BsImage />
    }
    else if (type === 'pdf') {
        reactIcon = <BsFileEarmarkPdf />
    }
    else if (type === 'word') {
        reactIcon = <BsFileEarmarkWord />
    }
    else if (type === 'ptx') {
        reactIcon = <SiMicrosoftpowerpoint />
    }
    else if (type === 'mp3') {
        reactIcon = <BsFileEarmarkMusic />
    }
    else {
        reactIcon = <BsFileEarmark />
    }


    return (
        <div className={style.container}>
            <div className={style.file}>
                <span className={style.menuButton} onClick={() => (setOpenMenuFile(!openMenuFile))}> <BiMenu /></span>
                <span className={style.oneFile}><span className={style.reacticon}>{reactIcon}</span> {file}</span>
            </div >
            {openMenuFile && <div className={style.menu}><MenuFile file={file} /></div>}
        </div>
    )
}