import style from './ItemsCounter.module.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function ItemsCounter() {
    const items = useSelector(state => state.items)
    const [counter, setCounter] =useState( 0)
    useEffect(() => {
        setCounter(items.reduce((acc, e) => acc + e[1], 0))
    }, [items])

    return (
        <>
            {counter > 0 &&
                <div className={style.counter}>
                    {counter}
                </div>}
        </>
    )
}