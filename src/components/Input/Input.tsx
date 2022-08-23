import React from "react";
import styles from './Input.module.css'

interface IInputProps {
    placeholder?: string;
    type?: string
}

export const Input = ({placeholder, type} : IInputProps) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} />
    )
}