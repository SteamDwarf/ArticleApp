import { IconButton } from 'shared/ui/IconButton';
import ProfileIcon from 'assets/icons/profile.svg';
import styles from './ProfileWidget.module.scss';

export const ProfileWidget = () => {
	return (
		<IconButton className={styles.button}>
			<ProfileIcon />
		</IconButton>
	);
};
