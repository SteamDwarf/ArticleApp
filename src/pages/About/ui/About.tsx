import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation('sidebar');

	return (
		<div>{t('About')}</div>
	);
};

export default About;
