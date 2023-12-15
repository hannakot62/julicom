import style from './SpacePartsSellingPage.module.css'
import SpacePartItemsList from "../../components/SpacePartItemsList/SpacePartItemsList";
import YellowPlusIcon from "../../svg/YellowPlusIcon";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";

export default function SpacePartsSellingPage() {
    const user = useSelector(state => state.user)
    const [price, setPrice] = useState("cheap");
    const [searched, setSearched] = useState('');
    const [items, setItems] = useState([
            {
                id: '1',
                title: "Тормозные колодки GDB1344 TRW",
                description: 'Толщина [мм]:\n' +
                    '17\n' +
                    'проверочное значение:\n' +
                    'E1 90R 01025/196\n' +
                    'Ширина [мм]:\n' +
                    '123,1\n' +
                    'Высота [мм]:\n' +
                    '44,9',
                price: 33.0,
                reviewsCount: 0,
                picSrc: "/src/assets/tormoz.jpg"
            },
            {
                id: '2',
                title: "PATRON POC063",
                description: 'Материал: сталь, Дополнительный артикул / дополнительная информация 2: с дугой укрепления',
                price: 143.9,
                reviewsCount: 3,
                picSrc: "/src/assets/poddon.jpg"
            },
            {
                id: '3',
                title: "STELLOX 09-04865-SX Поликлиновой ремень генератора",
                description: 'Число зубцов: 117, Ширина [мм]: 21, Вес [кг]: 0,15',
                price: 18.7,
                reviewsCount: 1,
                picSrc: "/src/assets/remen.jpg"
            },
            {
                id: '4',
                title: "Болт для крепления колеса (передний мост) (задний мост) 62 91 1616 SWAG",
                description: "Колесные диски: для стального диска, Длина [мм]: 52, Вес [кг]: 0,092, Материал: cталь",
                price: 4.5,
                reviewsCount: 0,
                picSrc: "/src/assets/bolt.jpg"
            },
            {
                id: '5',
                title: "NRF 47330 Вентилятор, охлаждение двигателя",
                description: 'Оснащение / оборудование:\n' +
                    'для автомобилей с кондиционером\n' +
                    'Напряжение [В]:\n' +
                    '12\n' +
                    'Номинальная мощность [Вт]:\n' +
                    '230',
                price: 223.1,
                reviewsCount: 0,
                picSrc: "/src/assets/ventilyator.jpg"
            },
            {
                id: '6',
                title: "Водяной насос, система очистки фар P19-0056 PATRON",
                description: 'Вес [кг]:\n' +
                    '0,163\n' +
                    'Количество присоединений:\n' +
                    '2\n' +
                    'Виды насосов:\n' +
                    'мононасос',
                price: 48.4,
                reviewsCount: 1,
                picSrc: "/src/assets/nasos.jpg"
            },


        ]
    );
    const [renderedItems, setRenderedItems] = useState(items);

    const handlePrice = useCallback((e) => {
        setPrice(e.target.value)
    }, [])

    useEffect(() => {
        if (price === "cheap") {
            setRenderedItems(renderedItems.sort((a, b) => b.price - a.price))
        } else {
            setRenderedItems(renderedItems.sort((a, b) => a.price - b.price))
        }
    }, [renderedItems, price]);

    const handleFind = useCallback(() => {
        setRenderedItems(items.filter(i => i.title.includes(searched)))
    }, [items, searched])

    const handleReset = useCallback(
        () => {
            setSearched("")
            setRenderedItems(items)
        },
        [items],
    );


    return (
        <div className={style.wrapper}>
            <h1>ПРОДАЖА З/Ч {user.role === "admin" && <YellowPlusIcon/>}</h1>
            {!user.id &&
                <p> Для оформления заказа на автозапчасти необходимо <Link to={'/auth'}>авторизоваться</Link></p>}
            <label className={style.search}>
                Искать по названию:
                <input value={searched} onChange={(e) => setSearched(e.target.value)}/>
                <button className={style.find} onClick={() => handleFind()}>Найти</button>
                <button className={style.reset} onClick={() => handleReset()}>Очистить</button>
            </label>
            <div className={style.radios}>
                <label htmlFor="cheap">
                    <input
                        type="radio"
                        name="price"
                        value="cheap"
                        id="cheap"
                        checked={price === "cheap"}
                        onChange={(e) => handlePrice(e)}
                    />
                    Сначала дешевле</label>
                <label htmlFor="expensive">
                    <input
                        type="radio"
                        name="topping"
                        value="expensive"
                        id="expensive"
                        checked={price === "expensive"}
                        onChange={(e) => handlePrice(e)}
                    />
                    Сначала дороже</label>
            </div>
            <SpacePartItemsList items={renderedItems}/>
        </div>
    )
}