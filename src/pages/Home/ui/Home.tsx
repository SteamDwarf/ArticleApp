import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation('sidebar');

	return (
		<div>{t('Home')}</div>
	);
};

export default Home;
