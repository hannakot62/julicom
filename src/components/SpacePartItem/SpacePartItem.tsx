import style from './SpacePartItem.module.css'
import DarkGrayEditIcon from "../../svg/DarkGrayEditIcon";
import DarkGrayDeleteIcon from "../../svg/DarkGrayDeleteIcon";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {addItem, removeItem} from "../../store/slices/itemsSlice";

export default function SpacePartItem({title, description, price, reviewsCount, picSrc, id}) {
    const items = useSelector(state => state.items)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    const handleMinus = useCallback(() => {
        dispatch(removeItem(id))
    }, [items, user])

    const handlePlus = useCallback(() => {
        dispatch(addItem(id))
        console.log(items)
    }, [items, user])

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
                    <button disabled={!items.find(i => i[0] === id)} onClick={() => handleMinus()}>-</button>
                    <button disabled={user.role !== "user"} onClick={() => handlePlus()}>+</button>
                </div>
            </div>
            <a href={'#'}>Отзывы: {reviewsCount}</a>

        </div>
    )
}