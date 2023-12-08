import style from './ExactServices.module.css'


export  default function ExactServicesTable() {
    const exactServices = [
        {title: "Экспресс-диагностика CR форсунки*", unit: "шт.", price: "6 Br"},
        {title: "Диагностика BOSCH, DELPHI форсунки на стенде (легк.)*", unit: "шт.", price: "14 Br"},
        {title: "Диагностика CR BOSCH форсунки на стенде (груз.)*", unit: "шт.", price: "16 Br"},
        {title: "Диагностика CR DENSO форсунки на стенде*", unit: "шт.", price: "16 Br"},
        {title: "Диагностика BOSCH Piezo форсунки", unit: "шт.", price: "20 Br"},
        {title: "Диагностика механической форсунки*", unit: "шт.", price: "4 Br"},
        {title: "Диагностика насос-форсунки (легк)*", unit: "шт.", price: "25 Br"},
        {title: "Диагностика насос-форсунки BOSCH (груз)*", unit: "шт.", price: "20 Br"},
        {title: "Диагностика насосной секции BOSCH (груз)*", unit: "шт.", price: "20 Br"},
        {title: "Диагностика Smart injector (DAF)*", unit: "шт.", price: "25 Br"},
        {title: "Диагностика насоса CR(ТНВД)-на стенде", unit: "шт.", price: "82 Br"},
        {title: "Разборка  деффектовка CR(ТНВД)", unit: "шт.", price: "53 Br"},
        {title: "Разборка и дефиктовка CR форсунки*", unit: "шт.", price: "18 Br"},
        {title: "Разборка и дефиктовка механической форсунки*", unit: "шт.", price: "8 Br"},
        {title: "Разборка и дефиктовка насос-форсунки\/секции*", unit: "шт.", price: "25 Br"},
        {title: "Удаление продуктов сгорания", unit: "шт.", price: "5 Br"},
        {title: "Ультрозвуковая мойка узла (сеанс 20 мин)", unit: "сеанс", price: "12 Br"},
        {title: "Компьютерная диагностика топливных систем (легк).", unit: "шт.", price: "30-36 Br"},
        {title: "Компьютерная диагностика топливных систем (груз).", unit: "шт.", price: "40-48 Br"},
        {title: "Проверка насоса ТННД на автомобле (груз).", unit: "шт.", price: "40-48 Br"},
        {title: "Занесение кода в ЭБУ двигателя (легк.)", unit: "шт.", price: "5 Br"},
        {title: "Занесение кода в ЭБУ двигателя VOLVO (груз.)", unit: "компл.", price: "70 Br"},
        {title: "Занесение кода в ЭБУ двигателя DAF (насосные секции)", unit: "компл.", price: "35-42 Br"},
        {title: "Занесение кода в ЭБУ двигателя DAF (Smart injector)", unit: "компл.", price: "35-42 Br"},
        {title: "Проверка насоса ТННД на автомобле (груз).", unit: "шт.", price: "40-48 Br"},
    ]

    const trsRender = exactServices.map(e => <tr>
        <td>{e.title}</td>
        <td>{e.unit}</td>
        <td>{e.price}</td>
    </tr>)

    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th>Вид работ</th>
                <th>Единица</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {trsRender}
            </tbody>
        </table>
    )
}