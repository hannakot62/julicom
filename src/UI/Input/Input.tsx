import style from './Input.module.css'

export default function Input({label, err, placeholder, type}){
    return(
        <label className={style.label}> {label}
            <input className={style.input} placeholder={placeholder} type={type}/>
        </label>
    )
}