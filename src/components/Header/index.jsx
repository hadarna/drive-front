import styles from "./style.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <span className={styles.naiman}>Naiman</span>
            <span className={styles.drive}>drive</span>
        </div>
    )
}