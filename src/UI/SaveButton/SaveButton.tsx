import style from './SaveButton.module.css'


export default function SaveButton({text}) {
    return (
        <button className={style.btn}>
            {text}
        </button>
    )

}