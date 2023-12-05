import style from './SaveButton.module.css'


export default function SaveButton({text, disabled, onClick}) {
    return (
        <button className={style.btn} disabled={disabled} onClick={(e)=>onClick()}>
            {text}
        </button>
    )

}