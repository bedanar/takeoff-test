import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button, EColors } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from './LoginForm.module.css'
import { login } from '../../store/reducers/AuthSlice'
export const LoginForm = () => {
    const dispatch = useAppDispatch()
    return (
        <form className={styles.form}>
            <h1 className={styles.form__title}>Вход</h1>
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Пароль" type="password" />
            <Button onClick={() => dispatch(login())} backgroundColor={EColors.orange} color={EColors.white}>Войти</Button>
        </form>
    )
}