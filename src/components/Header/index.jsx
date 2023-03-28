import style from "./style.module.css"

export default function Header() {
    return (
        <div className={style.header}>
            <span className={style.naiman}>Naiman</span>
            <span className={style.drive}>drive</span>
        </div>
    )
}