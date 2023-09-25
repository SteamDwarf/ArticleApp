import type { FC } from 'react';
import { IconButton } from 'shared/ui/IconButton';
import ToggleIcon from 'assets/icons/sidebar/toggle.svg';
import { Size } from 'shared/ui/types/enums';
import type { IComponentProps } from 'shared/ui/types/interfaces';
import { classNames } from 'shared/lib/classNames';
import { useSidebarToggle } from 'app/providers/sidebar';
import styles from './ToggleButton.module.scss';

export const ToggleButton: FC<IComponentProps> = ({ className }) => {
	const { toggleSidebar } = useSidebarToggle();

	const onClick = (): void => { toggleSidebar(); };

	return (
		<IconButton
			onClick={onClick}
			className={classNames(className, styles.button)}
			size={Size.SMALL}
		>
			<ToggleIcon />
		</IconButton>
	);
};
