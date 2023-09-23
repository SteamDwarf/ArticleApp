import { FC, PropsWithChildren } from 'react';
import styles from './IconWrapper.module.scss';
import { IComponentProps } from '../types/interfaces';
import { classNames } from 'shared/lib/classNames';

export const IconWrapper:FC<IComponentProps> = ({children, className}) => {
    return (
        <span className={classNames(className, styles.iconWrapper)}>{children}</span>
    )
}
