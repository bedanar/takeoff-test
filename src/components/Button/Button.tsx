import React from "react";
import styles from './Button.module.css'
import classNames from 'classnames'

interface IButtonProps {
    children?: React.ReactNode,
    color?: EColors,
    backgroundColor?: EColors,
    onClick?: () => void
}

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green', 
  white = 'white',
  transparent = "transparent"
}
const NOOP = () => {}
export const Button = ({children, color = EColors.black, backgroundColor = EColors.transparent, onClick = NOOP} : IButtonProps) => {
    const classes = classNames(
        styles[color],
        styles[`bg-${backgroundColor}`]
      )
    return (
        <button onClick={onClick} className={classes}>{children}</button>
    )
}