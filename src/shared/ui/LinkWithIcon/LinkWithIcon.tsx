import { type FC, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { type IComponentProps } from '../types/interfaces';
import { IconWrapper } from '../IconWrapper';
import styles from './LinkWithIcon.module.scss';
import { AppLink } from '../AppLink/AppLink';

interface ILinkWithIcon extends IComponentProps, LinkProps {
	icon: ReactNode
}

export const LinkWithIcon: FC<ILinkWithIcon> = ({ children, icon, to }) => {
	return (
		<AppLink to={to}>
			<IconWrapper className={styles.icon}>
				{icon}
			</IconWrapper>
			<span>
				{children}
			</span>
		</AppLink>
	);
};
