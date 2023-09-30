import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
	const { t } = useTranslation('main');

	return (
		<div>{t('Ошибка 404. Страница не найдена')}</div>
	);
};

export default NotFound;
