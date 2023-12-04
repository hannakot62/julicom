import AboutItem from "../AboutItem/AboutItem";
import style from './AboutItemsList.module.css'

export default function AboutItemsList() {
    const aboutItems = [
        {picSrc: '/src/assets/delphi.png', description: "Мы – официальный дизельный центр Delphi"},
        {picSrc: '/src/assets/repair1.jpg', description: "Мы лучшие в диагностике и ремонте топливных систем Delphi"},
        {
            picSrc: '/src/assets/hartridge.png',
            description: "Сертифицированные специалисты, использование английского борудования HARTRIDGE"
        },
        {picSrc: '/src/assets/repair2.jpg', description: "Генерируем новые коды для дизельных систем впрыска Delphi"},
        {
            picSrc: '/src/assets/texa.jpg',
            description: "Выполним компьютерную диагностику и электронную регулировку системы дизельного впрыска (ECU) автомобиля на итальянском диагностическом оборудовании TEXA"
        },
        {
            picSrc: '/src/assets/repair3.jpg',
            description: "Снимем и установим форсунки, отрегулируем зазоры в клапанах ГРМ"
        },

    ]
    const aboutRender = aboutItems.map(item => <AboutItem picSrc={item.picSrc} description={item.description}
                                                          key={item.description}/>)

    return (
        <div className={style.container}>
            {aboutRender}
        </div>
    )
}