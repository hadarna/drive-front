import style from "./style.module.css"
import AddButtons from "../AddButtons";
import NavBar from "../NavBar";

export default function Main() {
    return (
        <div className={style.menu}>
            <NavBar />
            <AddButtons />
        </div>)
}