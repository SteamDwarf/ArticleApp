import { FC } from 'react'
import { IButtonProps } from '../types/interfaces'
import styles from './IconButton.module.scss';
import { classNames } from 'shared/lib/classNames';
import {IconWrapper} from 'shared/ui/IconWrapper';
import { Size } from '../types/enums';

interface IIconButton extends IButtonProps {
    size?: Size
}

export const IconButton:FC<IIconButton> = ({children, className, size = Size.MEDIUM, ...other}) => {
    return (
        <button className={classNames(styles.iconButton, className, styles[size])} {...other}>
            <IconWrapper>
                {children}
            </IconWrapper>
        </button>
    )
}
