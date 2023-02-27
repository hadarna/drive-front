import styles from "./style.module.css"
import { useContext } from "react";
import fileContext from "../../context/fileContext";

export default function NavBar() {
    const { setFiles, setFolder } = useContext(fileContext)

    return (
        <div className={styles.navbar}>
            {(localStorage.path).split("./")}
        </div>)
}