import style from "./style.module.css"

export default function InfoFile({ info }) {

    return (

        <div className={style.container} >
            <div className={style.info}>Size: {info.size}MB</div>
            <div className={style.info}>Create date: {info.create}</div>
            <div className={style.info}>Last modified date: {info.lastChange}</div>
        </div >
    )
}
