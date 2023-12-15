import style from './SpacePartItem.module.css'
import DarkGrayEditIcon from "../../svg/DarkGrayEditIcon";
import DarkGrayDeleteIcon from "../../svg/DarkGrayDeleteIcon";
import {useSelector} from "react-redux";

export default function SpacePartItem({title, description, price, reviewsCount, picSrc, id}) {
    const items = useSelector(state => state.items.items)
    const user = useSelector(state => state.user)


    return (
        <div className={style.container}>
            <img src={picSrc} alt={"space_part"}/>
            <h1>{title} {user.role === "admin" && <div className={style.btns}>
                <button>
                    <DarkGrayEditIcon/>
                </button>
                <button>
                    <DarkGrayDeleteIcon/>
                </button>
            </div>}</h1>
            <p>{description}</p>
            <div className={style.priceContainer}>


                <h3>Цена: {price} BYN</h3>
                <div>
                    <button disabled={!items.has(id)}>-</button>
                    <button disabled={user.role !== "user"}>+</button>
                </div>
            </div>
            <a href={'#'}>Отзывы: {reviewsCount}</a>

        </div>
    )
}