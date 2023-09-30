import { RoutesPathes } from 'app/AppRouting/config/AppRouter.config';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';

// TODO сделать красиво
export const PageError = () => {
	const { t } = useTranslation('main');

	return (
		<div>
			<h1>{t('Что-то пошло не так...')}</h1>
			<AppLink to={RoutesPathes.home}>{t('На главную')}</AppLink>
		</div>
	);
};
