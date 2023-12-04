import style from './AboutItem.module.css'

export default function AboutItem({picSrc, description}){
    return (
        <div className={style.item}>
            <img src={picSrc} alt={description}/>
            <p>
                <hr/>
            {description}</p>
        </div>
    )
}