import style from './ResetButton.module.css'


export default function ResetButton({onClick}){
    return (
        <button className={style.btn} onClick={(e)=>onClick(e)}>
            Очистить
        </button>
    )
}