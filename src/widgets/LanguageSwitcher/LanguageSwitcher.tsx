import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation('sidebar');

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<button type="button" onClick={toggleLanguage} className={styles.button}>
			<h2>{i18n.language === 'ru' ? 'en' : 'ru'}</h2>
		</button>
	);
};
