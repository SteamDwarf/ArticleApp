import { mainSidebarLinksData } from 'entities/SidebarLinks';
import { classNames } from 'shared/lib/classNames';
import { useSidebarToggle } from 'app/providers/sidebar';
import { SidebarLinksContainer } from './SidebarLinksContainer/SidebarLinksContainer';
import styles from './Sidebar.module.scss';
import { ToggleButton } from './ToggleButton/ToggleButton';

export const Sidebar = () => {
	const { isFull } = useSidebarToggle();

	return (
		<div className={classNames(styles.sidebar, { [styles.full]: isFull })}>
			<div className={styles.container}>
				<SidebarLinksContainer linksData={mainSidebarLinksData} />
				<SidebarLinksContainer title="Моя библиотека" linksData={mainSidebarLinksData} />
			</div>
			<ToggleButton className={styles.toggleButton} />
		</div>
	);
};
