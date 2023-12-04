import style from './CommonFooter.module.css'
import WhitePhoneIcon from "../../svg/WhitePhoneIcon";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import WhiteMailIcon from "../../svg/WhiteMailIcon";
import WhiteInstagramIcon from "../../svg/WhiteInstagramIcon";
import WhiteTimeIcon from "../../svg/WhiteTimeIcon";


export default function CommonFooter() {
    const mapData = {
        center: [53.842502, 27.690676],
        zoom: 16,
    };

    const coordinates = [
        [53.842502, 27.690676],
    ];

    return (
        <div className={style.wrapper}>
            <div className={style.upper}>

                <div className={style.contactSection}>
                    <div className={style.container}>
                        <div className={style.smallSvgContainer}><WhiteTimeIcon/></div>
                        <h3>Режим работы: Пн-Сб с 8:00 до 20:00, Вс с 9:00 до 18:00</h3>
                    </div>

                    <div className={style.container}>
                        <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                        <a href="tel:+375291823405">+375 (29) 182-34-05</a>
                    </div>

                    <div className={style.container}>
                        <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                        <a href="tel:+375293992246">+375 (29) 399-22-46</a>
                    </div>

                    <div className={style.container}>
                        <div className={style.smallSvgContainer}><WhiteMailIcon/></div>
                        <a href="mailto:info@sto-delphi.by">info@sto-delphi.by</a>
                    </div>

                    <div className={style.container}>
                        <div className={style.smallSvgContainer}>
                            <a href="https://www.instagram.com/sto_delphi_/"><WhiteInstagramIcon/></a></div>
                        <h3>Следите за новостями в инстаграм!</h3>
                    </div>

                </div>


                <YMaps>
                    <Map defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                    </Map>
                </YMaps>

            </div>
            <footer>© 1998-2023 ООО "ЮликомСервис"</footer>
        </div>
    )
}