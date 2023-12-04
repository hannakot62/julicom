import {useState} from "react";
import style from './SingleDropdown.module.css'

export default function SingleDropdown({title, content}) {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.title} onClick={() => setIsOpened(!isOpened)}>{title} {isOpened?"▲":"▼"}</div>
            {isOpened ? <div className={style.content}>{content}</div> : <></>}
        </div>
    )
}