import style from './AuthPage.module.css'
import Input from "../../UI/Input/Input";
import ResetButton from "../../UI/ResetButton/ResetButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export default function AuthPage() {
    const user = useSelector(state=>state.user.user)
    if (user !== null) {
        <Navigate to="/" />
    }
    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Войти</h1>
                <div className={style.inputs}>
                    <Input label={"Введите почту"} placeholder={"hereismy@mail.com"}/>
                    <Input label={"Введите пароль"} type={"password"} placeholder={"password"}/>
                </div>
                <div className={style.buttons}>
                    <ResetButton/>
                    <SaveButton text={"Войти"}/>
                </div>
            </div>
           <h2> Нет аккаунта? <button>Зарегистрироваться</button></h2>
        </div>
    )
}