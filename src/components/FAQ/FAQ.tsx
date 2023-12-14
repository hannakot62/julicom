import SingleDropdown from "../../UI/SingleDropdown/SingleDropdown";

export default function FAQ(){
    const questions =[
        {title:"Каков порядок цен в Вашем сервисе и значительно ли они отличаются от цен официального дилера?", content:"Если рассматривать специализированные СТО, то наши цены очень привлекательны. Что касается многочисленных гараж — сервисов, то, разумеется, наши цены выше. При выборе дизель сервиса помните о качестве осуществляемого ремонта, специализированном инструменте и гарантии, все это обычно отсутствует в сервисах такого уровня. Сам по себе ремонт дизельной аппаратуры высокий, поэтому подумайте 10 раз, когда пытаетесь сэкономить 3 копейки. Наши сервисы оснащены современным европейским диагностическим оборудованием и профессиональным инструментом, а наши сотрудники регулярно проходят курсы повышения квалификации и являются профессионалами своего дела."},
        {title: "В чём плюс заказа запчастей у Вас?", content: 'Мы имеем большой опыт работы с различными производителями запчастей и, разумеется, предложим Вам гарантированно качественную деталь по разумной цене. Вы не будете тратить своё время на поиски запчастей и изучение рынка, соответственно, сэкономите время и деньги. В итоге Вы получите качественную деталь, на которую, при установке у нас в сервисе, мы предоставим гарантию.'},
        {title: 'Возможна ли запись по телефону?', content: "Да, возможна. Позвоните по любому из телефонов указанных на сайте, и наши специалисты предложат Вам оптимально удобные дату и время посещения сервиса и запишут на ремонт."},
        {title: "Можно ли оставить автомобиль на долгий ремонт и есть ли место для хранения автомобиля?", content: "Да, можно. Наиболее оптимальное решение — это постановка автомобиля на ремонт после предварительного согласования работ. Вы всегда можете оставить свой автомобиль у нас в сервисе и уехать, в этом случае мы будем поддерживать с Вами связь по телефону. Так же есть место для хранения автомобилей в случае поломки и ожидания запчастей, территория находится под круглосуточным видеонаблюдением и охраной."},
        {title: "Какие гарантии предоставляет автосервис?", content: "Гарантия на ремонтные работы составляет 6 месяцев без ограничения пробега. В случае возникновения претензий по гарантии Заказчик обязан не позднее 5 (пяти) рабочих дней с момента обнаружения дефекта обратиться в нашу организацию для устранения дефекта, в противном случае гарантийные обязательства утрачивают свою силу."},
        {title: "Гарантийные обязательства на выполненные работы не распространяются на случаи:", content: `- Нарушения условий эксплуатации автомобиля или элементов топливной системы*;
- Невыполнения Заказчиком рекомендаций специалистов нашей организации**;
- Попытки устранения выявленного дефекта на других станциях технического обслуживания, сервисных центрах, или самостоятельно;
- Отсутствия вины специалистов нашей организации в возникновении выявленных неисправностей;
- Наличия механических повреждений на рекламационных узлах и деталях.
* - использование дизельного топлива, несоответствующего эксплуатационным требованиям (низкая смазывающая способность топлива, наличия воды, наличия механических примесей и грязи, несоответствующее стандарту цетановое число и содержание серы);

- несвоевременное техническое обслуживание дизельной топливной системы (несвоевременная замена фильтрующих элементов, использование фильтрующих элементов, не имеющих одобрения производителя топливной аппаратуры или производителя автомобиля, несвоевременный слив воды и конденсата из отстойников топливных фильтров).

** для продления жизни элементов дизельной топливной аппаратуры специалисты нашей организации рекомендуют:

- Замену топливных фильтров производить с периодичностью раз в 8 – 10 тыс.км пробега (равно как и такую же периодичность замены моторного масла и масляного фильтра);
- При замене топливных фильтров обращать внимание на наличие воды в заменяемых фильтрах;
- При заправке на АЗС сохранять квитанции об оплате топлива как минимум до следующей заправки;
- При отсутствии уверенности в качестве заправляемого топлива использовать сепараторы фирмы Stanadyne и присадку Stanadyne Performance Formula, имеющую одобрение таких производителей, как Fofd, GM, John Deere, Navistar International;
- Периодически проводить инструментальную диагностику дизельной топливной системы.
 

** после ремонта топливных агрегатов необходимо:

- Слить топливо,
- Почистить бак и топливные магистрали,
- Произвести чистку насоса высокого давления,
- Заменить топливный фильтр.`},
        {title: "Можно ли приезжать к вам без предварительной записи?", content: "Да, можно. По срочному мы всегда готовы помочь. Но лучше предварительно забронировать пост для ремонта."}
    ]
    const faqRender = questions.map(q=><SingleDropdown title={q.title} content={q.content} key={q.title}/>)
    return (
        <div>
            {faqRender}
        </div>
    )
}