import styles from "./style.module.css"
import AddButtons from "../AddButtons";
import NavBar from "../NavBar";

export default function Main() {
    return (
        <div className={styles.addButton}>
            <NavBar />
            <AddButtons />
        </div>)
}