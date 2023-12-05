import style from './AuthPage.module.css'
import Input from "../../UI/Input/Input";
import ResetButton from "../../UI/ResetButton/ResetButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


export default function AuthPage() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const [isNew, setIsNew] = useState(false);

    const handleIsNew = (e) => {
        setIsNew(!isNew)
    }

    useEffect(() => {
        if (user !== null) {
            navigate("/")
        }
    }, [user])

    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>{isNew ? "Зарегистрироваться" : "Войти"}</h1>
                <div className={style.inputs}>
                    {isNew && <Input label={"Введите имя пользователя"} placeholder={"username"}/>}
                    <Input label={"Введите почту"} placeholder={"hereismy@mail.com"} type={"email"}/>
                    <Input label={"Введите пароль"} type={"password"} placeholder={"password"}/>
                </div>
                <div className={style.buttons}>
                    <ResetButton/>
                    <SaveButton text={"Войти"}/>
                </div>
            </div>
            <h2> {isNew ? "" : "Нет аккаунта?"}
                <button
                    onClick={(e) => handleIsNew(e)}>{isNew ? "У меня есть учетная запись" : "Зарегистрироваться"}</button>
            </h2>
        </div>
    )
}