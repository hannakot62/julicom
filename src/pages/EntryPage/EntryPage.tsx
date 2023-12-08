import style from './EntryPage.module.css'
import AboutItemsList from "../../components/AboutItemsList/AboutItemsList";
import BenefitsList from "../../components/BenefitsList/BenefitsList";
import FAQ from "../../components/FAQ/FAQ";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ConsultNow from "../../components/ConsultNow/ConsultNow";



export default function EntryPage() {
    return (
        <div className={style.wrapper}>
            <ScrollToTop/>

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
                <a id="about" name="about">О НАС</a>
                <AboutItemsList/>
            </div>


            <div className={style.benefits}>
                <p>С нами выгодно сотрудничать, потому что:</p>
                <BenefitsList/>
            </div>


            <div className={style.faq}>
                <a name="faq" id='faq'>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)</a>
                <FAQ/>
            </div>

            <ConsultNow/>

            <div className={style.contacts}>
                <a name="contacts" id='contacts'>КОНТАКТЫ</a>
            </div>

        </div>
    )
}