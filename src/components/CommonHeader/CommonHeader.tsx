import style from './CommonHeader.module.css'
import WhitePhoneIcon from "../../svg/WhitePhoneIcon";
import YellowUserIcon from "../../svg/YellowUserIcon";
import {Link} from "react-router-dom";


export default function CommonHeader() {
    return (
        <header className={style.header}>
            <div className={style.logo}>Julicom</div>
            <nav className={style.nav}>
                <ul>
                    <li><a href="/entry#about">О НАС</a></li>
                    <li><a>УСЛУГИ</a></li>
                    <li><a>ПРОДАЖА З/Ч</a></li>
                    <li><a href="/entry#faq">FAQ</a></li>
                    <li><a>ВАКАНСИИ</a></li>
                    <li><a>НОВОСТИ И АКЦИИ</a></li>
                    <li><a href="/entry#contacts">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <div className={style.phones}>
                <div><a href="tel:+375291823405">+375 (29) 182-34-05</a>
                    <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                </div>
                <div><a href="tel:+375293992246">+375 (29) 399-22-46</a>
                    <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                </div>
            </div>

            <div className={style.user}>
                <button><Link to="auth">Войти</Link></button>
                <div className={style.bigSvgContainer}>
                    <YellowUserIcon/>
                </div>
            </div>
        </header>
    )
}