import style from "./style.module.css"

export default function InfoFile({ info }) {

    return (

        <div className={style.container} >
            <div className={style.info}><b>Size:</b> {info.size}MB</div>
            <div className={style.info}><b>Create date:</b> {info.create}</div>
            <div className={style.info}><b>Last modified date: </b>{info.lastChange}</div>
        </div >
    )
}
