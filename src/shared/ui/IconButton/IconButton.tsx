/* eslint-disable react/jsx-props-no-spreading */
import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { IconWrapper } from 'shared/ui/IconWrapper';
import { type IButtonProps } from '../types/interfaces';
import styles from './IconButton.module.scss';
import { Size } from '../types/enums';

interface IIconButton extends IButtonProps {
	size?: Size
}

export const IconButton: FC<IIconButton> = ({
	children, className, size = Size.MEDIUM, ...other
}) => {
	return (
		<button type="button" className={classNames(styles.iconButton, className, styles[size])} {...other}>
			<IconWrapper>
				{children}
			</IconWrapper>
		</button>
	);
};
