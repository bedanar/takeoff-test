import React from "react";
import styles from './Text.module.css'
import classNames from 'classnames'
import { EColors } from '../Button/Button'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    children?: React.ReactNode
    size: TSizes;
    color?: EColors;
  }

export const Text = ({As = 'span', size = 14, color=EColors.black, children}: ITextProps) => {
    const classes = classNames(
        styles[`t${size}`],
        styles[color]
      )
    return (
        <As className={classes}>{children}</As>
    )
}