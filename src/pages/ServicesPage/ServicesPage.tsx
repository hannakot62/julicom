import style from './ServicesPage.module.css'
import DarkGrayPlusIcon from "../../svg/DarkGrayPlusIcon";
import CommonServicesList from "../../components/CommonServicesList/CommonServicesList";
import ExactServicesTable from "../../components/ExactServicesTable/ExactServicesTable";
import ConsultNow from "../../components/ConsultNow/ConsultNow";
import MakeExaminationAppointmentForm
    from "../../components/MakeExaminationAppointmentForm/MakeExaminationAppointmentForm";

export default function ServicesPage() {
    const isAdmin = true
    return (
        <div className={style.wrapper}>
            <div className={style.header}><h1>УСЛУГИ</h1> {isAdmin &&
                <button className={style.addBtn}><DarkGrayPlusIcon/></button>}</div>

            <p className={style.inform}>Наша компания имеет большой опыт в обслуживании топливных систем грузовых и
                легковых автомобилей. Мы проведем полноценную компьютерную диагностику сканером TEXA (Италия) для
                выявления возможных причин сбоев в работе модуля дизельного впрыска в Вашем автомобиле. Предложим
                готовые решения по их устранению.</p>

            <CommonServicesList/>

            <div className={style.header}><h1>СТОИМОСТЬ УСЛУГ</h1> {isAdmin &&
                <button className={style.addBtn}><DarkGrayPlusIcon/></button>}</div>
            <ExactServicesTable/>
            <h5>*-при последующем ремонте диагностика бесплатна</h5>
            <h6>***носит информационный характер и не является публичной офертой,<br/>
                расчет стоимости по ремону Вашего автомобиля можно узнать связавшись с нашим менеджером</h6>
            <MakeExaminationAppointmentForm/>
            <ConsultNow/>
        </div>
    )
}