import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './IconWrapper.module.scss';
import { type IComponentProps } from '../types/interfaces';

export const IconWrapper: FC<IComponentProps> = ({ children, className }) => {
	return (
		<span className={classNames(className, styles.iconWrapper)}>{children}</span>
	);
};
