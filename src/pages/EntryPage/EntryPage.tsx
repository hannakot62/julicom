import CommonHeader from "../../components/CommonHeader/CommonHeader";
import style from './EntryPage.module.css'
import AboutItemsList from "../../components/AboutItemsList/AboutItemsList";
import BenefitsList from "../../components/BenefitsList/BenefitsList";
import FAQ from "../../components/FAQ/FAQ";
import DarkGrayPhoneIcon from "../../svg/DarkGrayPhoneIcon";
import CommonFooter from "../../components/CommonFooter/CommonFooter";



export default function EntryPage() {
    return (
        <div className={style.wrapper}>

            <CommonHeader/>


            <div className={style.entry}>
                <h1>Julicom - сервис</h1>
                <h2>СТО Дельфи - Авторизованный дизельный центр DELPHI</h2>
                <h2>специализированный дизель сервис по ремонту и диагностике топливной аппаратуры</h2>
                <h3>ГАРАНТИЯ НА РЕМОНТ 6 МЕСЯЦЕВ БЕЗ ОГРАНИЧЕНИЯ ПРОБЕГА</h3>
            </div>


            <p className={style.description}>
                В 2014 году ЮликомСервис провел сертификацию у производителя топливных систем Delphi Technologies<br/>
                и получил статус официального дизельного центра Delphi, подтвердивший европейский уровень оказываемых
                нами услуг.<br/><br/>
                Основной специализацией компании является тестирование и ремонт PLD-секций и насос форсунок,<br/>
                а также форсунок Common Rail, насосов (ТНВД) в соответствии с параметрами автоконцернов производителей
                легковой и грузовой техники.
            </p>


            <div className={style.about}>
                <a name="about">О НАС</a>
                <AboutItemsList/>
            </div>


            <div className={style.benefits}>
                <p>С нами выгодно сотрудничать, потому что:</p>
                <BenefitsList/>
            </div>


            <div className={style.faq}>
                <a name="faq">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)</a>
                <FAQ/>
            </div>

            <div className={style.consult}>
                <h1>Проконсультироваться сейчас: </h1>
                <div className={style.telContainer}><a href="tel:+375291823405">+375 (29) 182-34-05</a> <div className={style.tel}><DarkGrayPhoneIcon/></div></div>
            </div>

            <div className={style.contacts}>
                <a name="contacts">КОНТАКТЫ</a>
                <CommonFooter/>
            </div>

        </div>
    )
}