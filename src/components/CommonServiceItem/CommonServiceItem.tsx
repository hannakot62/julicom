import style from './CommonServiceItem.module.css'
import DarkGrayEditIcon from "../../svg/DarkGrayEditIcon";
import DarkGrayDeleteIcon from "../../svg/DarkGrayDeleteIcon";

export default function CommonServiceItem({title, description}) {
    const isAdmin = true
    return (
        <div className={style.container}>
            <div className={style.header}><h1>{title}</h1>{isAdmin && <div className={style.btns}>
                <button>
                    <DarkGrayEditIcon/>
                </button>
                <button>
                    <DarkGrayDeleteIcon/>
                </button>
            </div>}</div>
            <hr/>
            <p>{description}</p>
        </div>
    )
}