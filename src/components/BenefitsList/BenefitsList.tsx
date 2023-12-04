import YellowBoltsIcon from "../../svg/YellowBoltsIcon";
import style from './BenefitsList.module.css'

export default function BenefitsList() {
    const benefits = [
        "Авторизованный дизельный центр Delphi",
        "Cертифицированные специалисты",
        "Оборудование Hartridge (Великобритания)",
        "Технологии, спец инструмент Delphi",
        "Оригинальные запасные части в наличии",
        "Генерация новых кодов после ремонта",
        "Компьютерная диагностика, программирование форсунок и насосов в ЭБУ двигателя",
        "Снятие-установка форсунок, регулировка зазоров клапанов ГРМ",
        "Ремонт топливной аппаратуры Bosch",
        "Диагностика топливных систем DENSO, VDO",
        "Выдача экспертного заключения по компетенции для третьих сторон",
        "Техническая поддержка по вопросам нашей специфики",
    ]
    const benefitsRender = benefits.map(b=><li key={b}><div className={style.svgContainer}><YellowBoltsIcon/></div>{b}</li>)
    return (
        <div className={style.container}>
            <ul>{benefitsRender}</ul>
        </div>
    )
}