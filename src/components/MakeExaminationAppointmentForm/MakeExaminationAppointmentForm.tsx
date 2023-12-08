import style from './MakeExaminationAppointmentForm.module.css'
import useInput from "../../hooks/useInput";
import InputMask from 'react-input-mask';
import ResetButton from "../../UI/ResetButton/ResetButton";
import SaveButton from "../../UI/SaveButton/SaveButton";
import {useCallback, useEffect, useState} from "react";


export default function MakeExaminationAppointmentForm() {
    const mask = "+375 (99) 99-99-999"
    const phoneInput = useInput("", {isEmpty: true, isMaskMatch: true})
    const messageInput = useInput("", {isEmpty: true})

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (phoneInput.isValid && messageInput.isValid) {
            setIsValid(true)
        } else setIsValid(false)
    }, [phoneInput.isValid, messageInput.isValid]);

    const handleReset = useCallback(() => {
        phoneInput.onChange()
        messageInput.onChange()
    }, [])

    const handleSave = useCallback(() => {
            console.log("ok")
        },
        []
    )


    return (
        <div className={style.wrapper}>
            <h1>ЗАПИСАТЬСЯ НА ОСМОТР</h1>
            <div className={style.form}>
                <label htmlFor="tel">Введите номер телефона: </label>
                <InputMask mask={mask} placeholder="+375 (99) 99-99-999"
                           value={phoneInput.value}
                           onChange={(e) => phoneInput.onChange(e)}
                           onBlur={() => phoneInput.onBlur()}
                           className={phoneInput.errorText ? "error" : ""}
                >
                    {(inputProps) => <input {...inputProps} type="tel"/>}
                </InputMask>
                <div className={style.errorContainer}>{phoneInput.errorText}</div>


                <label htmlFor="message">Кратко опишите проблему: </label>
                <textarea name="message" id="message"
                          value={messageInput.value}
                          onChange={(e) => messageInput.onChange(e)}
                          onBlur={() => messageInput.onBlur()}
                          className={messageInput.errorText ? "error" : ""}
                />
                <div className={style.errorContainer}>{messageInput.errorText}</div>


                <div className={style.buttons}>
                    <ResetButton onClick={handleReset}/>
                    <SaveButton text={"Отправить"} disabled={!isValid} onClick={handleSave}/>
                </div>
            </div>
        </div>
    )
}