/* eslint-disable react/jsx-props-no-spreading */
import { type LinkProps, Link } from 'react-router-dom';

import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

export const AppLink: FC<LinkProps> = ({ className, children, ...other }) => {
	return (
		<Link className={classNames(styles.appLink, className)} {...other}>
			{children}
		</Link>
	);
};
