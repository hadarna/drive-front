import style from "./style.module.css";
import { BiMenu } from 'react-icons/bi';
import { useEffect, useRef, useState } from "react";
import MenuFile from "../MenuFile";
import { BsImage, BsFileEarmarkPdf, BsFileEarmarkWord, BsFileEarmarkMusic, BsFileEarmark, BsFileEarmarkExcel } from 'react-icons/bs';
import { SiMicrosoftpowerpoint } from 'react-icons/si';


export default function File({ file }) {
    const [openMenuFile, setOpenMenuFile] = useState(false);
    const ref = useRef();

    let type = file.split('.').pop();
    let reactIcon;
    if (type === 'png' || type === 'jpg') {
        reactIcon = <BsImage />
    }
    else if (type === 'pdf') {
        reactIcon = <BsFileEarmarkPdf />
    }
    else if (type === 'word' || type === 'docx') {
        reactIcon = <BsFileEarmarkWord />
    }
    else if (type === 'ptx') {
        reactIcon = <SiMicrosoftpowerpoint />
    }
    else if (type === 'mp3') {
        reactIcon = <BsFileEarmarkMusic />
    }
    else if (type == 'xls') {
        reactIcon = <BsFileEarmarkExcel />
    }
    else {
        reactIcon = <BsFileEarmark />
    }

    useEffect(() => {
        const checkIfClickOutside = e => {
            if (openMenuFile && ref.current && !ref.current.contains(e.target)) {
                setOpenMenuFile(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickOutside)
        }

    }, [openMenuFile])

    return (
        <div className={style.container}>
            <div className={style.file}>
                <span className={style.menuButton} onClick={() => (setOpenMenuFile(!openMenuFile))}> <BiMenu /></span>
                <span className={style.oneFile}><span className={style.reacticon}>{reactIcon}</span> {file}</span>
            </div >
            {openMenuFile && <div className={style.menu} ref={ref}><MenuFile file={file} /></div>}
        </div>
    )
}