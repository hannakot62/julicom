import style from './AuthPage.module.css'
import ResetButton from "../../UI/ResetButton/ResetButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import useInput from '../../hooks/useInput'


export default function AuthPage() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const [isNew, setIsNew] = useState(false);
    const [isValid, setIsValid] = useState(false);


    const nameInput = useInput("", {})
    const emailInput = useInput("", {isEmpty: true, isEmail: true})
    const passwordInput = useInput("", {isEmpty: true})

    const handleIsNew = (e) => {
        setIsNew(!isNew)
    }

    useEffect(() => {
        if (user !== null) {
            navigate("/")
        }
    }, [user])

    useEffect(() => {
        if (emailInput.isValid && passwordInput.isValid) {
            setIsValid(true)
        } else setIsValid(false)
    }, [nameInput.isValid, emailInput.isValid, passwordInput.isValid]);


    const handleReset = useCallback(() => {
        nameInput.onChange()
        emailInput.onChange()
        passwordInput.onChange()
    }, []);

    const handleSave = useCallback(()=>{
        console.log(nameInput.value, emailInput.value, passwordInput.value)

    },[isValid])

    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>{isNew ? "Зарегистрироваться" : "Войти"}</h1>
                <div className={style.inputs}>
                    {isNew && <label>Введите имя пользователя<input type="text" name="name" id="name"
                                                                    value={nameInput.value}
                                                                    onChange={(e) => nameInput.onChange(e)}
                                                                    onBlur={() => nameInput.onBlur()}
                                                                    placeholder={'username'}
                                                                    className={nameInput.errorText ? "error" : ""}
                                                                    autoComplete={"off"}/>
                        <div className={style.errorContainer}>{nameInput.errorText}</div>

                    </label>}
                    <label>Введите почту <input placeholder={"hereismy@mail.com"} name="email" id="email"
                                                value={emailInput.value}
                                                onChange={(e) => emailInput.onChange(e)}
                                                onBlur={() => emailInput.onBlur()}
                                                className={emailInput.errorText ? "error" : ""}
                                                autoComplete={"off"}/>
                        <div className={style.errorContainer}>{emailInput.errorText}</div>
                    </label>
                    <label>Введите пароль <input type={"password"} placeholder={"password"}
                                                 name="password" id="password"
                                                 value={passwordInput.value}
                                                 onChange={(e) => passwordInput.onChange(e)}
                                                 onBlur={() => passwordInput.onBlur()}
                                                 className={passwordInput.errorText ? "error" : ""}
                                                 autoComplete={"off"}/>
                        <div className={style.errorContainer}>{passwordInput.errorText}</div>
                    </label>
                </div>
                <div className={style.buttons}>
                    <ResetButton onClick={handleReset}/>
                    <SaveButton text={"Войти"} disabled={!isValid} onClick={handleSave}/>
                </div>
            </div>
            <h2> {isNew ? "" : "Нет аккаунта?"}
                <button
                    onClick={(e) => handleIsNew(e)}>{isNew ? "У меня есть учетная запись" : "Зарегистрироваться"}</button>
            </h2>
        </div>
    )
}