import { LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';

export const AppLink:FC<LinkProps> = ({className, children, ...other}) => {
    return (
        <Link className={classNames(styles.appLink, className)} {...other}>
            {children}
        </Link>
    )
}
