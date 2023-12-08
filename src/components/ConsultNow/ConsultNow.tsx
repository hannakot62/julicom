import style from "./ConsultNow.module.css";
import DarkGrayPhoneIcon from "../../svg/DarkGrayPhoneIcon";

export default function ConsultNow() {
    return (
        <div className={style.consult}>
            <h1>Проконсультироваться сейчас: </h1>
            <div className={style.telContainer}><a href="tel:+375291823405">+375 (29) 182-34-05</a>
                <div className={style.tel}><DarkGrayPhoneIcon/></div>
            </div>
        </div>
    )
}